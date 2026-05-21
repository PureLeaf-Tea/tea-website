(function() {
  const CSV_URL = 'products.csv';
  const DEFAULT_PRODUCTS = [
    { id: "lapsang", category: "红茶", name: "正山小种", nameEn: "Lapsang Souchong", nameRu: "Лапсанг Сушонг", nameEs: "Lapsang Souchong", nameFr: "Lapsang Souchong", nameDe: "Lapsang Souchong", desc: "松烟香浓郁，桂圆汤味甜美。\n产地：福建武夷山桐木关。", descEn: "Rich pine smoke aroma, sweet longan infusion.\nOrigin: Tongmuguan, Wuyi Mountain.", descRu: "Насыщенный аромат соснового дыма, сладкий настой лонгана.\nПроисхождение: Тонгмугуань, гора Уи.", descEs: "Rico aroma a humo de pino, infusión dulce de longan.\nOrigen: Tongmuguan, montaña Wuyi.", descFr: "Riche arôme de fumée de pin, infusion sucrée de longane.\nOrigine : Tongmuguan, montagne Wuyi.", descDe: "Reiches Kiefernraucharoma, süßer Longan-Aufguss.\nHerkunft: Tongmuguan, Wuyi-Berg.", brewing: "水温：95℃\n器具：盖碗或紫砂壶\n冲泡时间：3-5秒出汤。", brewingEn: "Water temp: 95°C\nTeaware: Gaiwan or Yixing\nSteep: 3-5 seconds.", brewingRu: "Температура воды: 95°C\nПосуда: Гайвань или Исин\nЗаваривание: 3-5 секунд.", brewingEs: "Temp. agua: 95°C\nUtensilios: Gaiwan o Yixing\nInfusión: 3-5 segundos.", brewingFr: "Temp. eau : 95°C\nThéière : Gaiwan ou Yixing\nInfusion : 3-5 secondes.", brewingDe: "Wassertemperatur: 95°C\nGefäß: Gaiwan oder Yixing\nZiehzeit: 3-5 Sekunden.", price: "58", images: ["https://placehold.co/600x600/d9cdbc/8b7a66?text=Lapsang+1","https://placehold.co/600x600/c9b9a4/8b7a66?text=Lapsang+2"], sku: [ { spec: "50g 罐装", specEn: "50g Tin", specRu: "50г банка", specEs: "Lata 50g", specFr: "Boîte 50g", specDe: "50g Dose", price: "58", stock: "In Stock" }, { spec: "100g 罐装", specEn: "100g Tin", specRu: "100г банка", specEs: "Lata 100g", specFr: "Boîte 100g", specDe: "100g Dose", price: "108", stock: "In Stock" } ] }
  ];

  function parseCSV(text) {
    if (text.charCodeAt(0) === 0xFEFF) text = text.slice(1);
    const rows = [];
    let current = '', inQuotes = false;
    for (let i = 0; i < text.length; i++) {
      const ch = text[i];
      if (ch === '"') {
        if (inQuotes && text[i+1] === '"') { current += '"'; i++; }
        else inQuotes = !inQuotes;
      } else if (ch === ',' && !inQuotes) {
        rows.push(current); current = '';
      } else if (ch === '\n' && !inQuotes) {
        rows.push(current); current = '';
      } else if (ch === '\r' && !inQuotes) {
        // 跳过\r
      } else {
        current += ch;
      }
    }
    if (current || rows.length > 0) rows.push(current);
    return rows;
  }

  function csvToProducts(text) {
    const cells = parseCSV(text);
    if (cells.length < 2) return [];

    // 提取并清理标题行
    const headers = [];
    let i = 0;
    for (; i < cells.length; i++) {
      const h = cells[i].trim();
      if (h === '') break;
      headers.push(h);
    }
    const numCols = headers.length;
    if (numCols === 0) return [];

    const products = [];
    for (let r = numCols; r < cells.length; r += numCols) {
      const row = cells.slice(r, r + numCols);
      // 关键容错：如果这一行单元格数量不等于表头列数，跳过
      if (row.length !== numCols) {
        console.warn('跳过列数不匹配的行，期望' + numCols + '列，实际' + row.length + '列');
        continue;
      }
      const obj = {};
      for (let j = 0; j < numCols; j++) {
        const key = headers[j] ? headers[j].trim() : '';
        if (key) obj[key] = (row[j] || '').trim();
      }
      if (!obj.category || !obj.id) continue;

      obj.images = obj.images ? obj.images.split(',').map(s => s.trim()) : [];
      const skuSpec = (obj.sku_spec || '').split('|').map(s => s.trim());
      const skuSpecEn = (obj.sku_specEn || '').split('|').map(s => s.trim());
      const skuSpecRu = (obj.sku_specRu || '').split('|').map(s => s.trim());
      const skuSpecEs = (obj.sku_specEs || '').split('|').map(s => s.trim());
      const skuSpecFr = (obj.sku_specFr || '').split('|').map(s => s.trim());
      const skuSpecDe = (obj.sku_specDe || '').split('|').map(s => s.trim());
      const skuPrices = (obj.sku_price || '').split('|').map(s => s.trim());
      const skuStocks = (obj.sku_stock || '').split('|').map(s => s.trim());
      obj.sku = [];
      const maxLen = Math.max(skuSpec.length, skuSpecEn.length, skuPrices.length);
      for (let k = 0; k < maxLen; k++) {
        obj.sku.push({
          spec: skuSpec[k] || '', specEn: skuSpecEn[k] || '', specRu: skuSpecRu[k] || '', specEs: skuSpecEs[k] || '', specFr: skuSpecFr[k] || '', specDe: skuSpecDe[k] || '',
          price: '$' + (skuPrices[k] || '0'), stock: skuStocks[k] || 'In Stock'
        });
      }
      products.push(obj);
    }
    return products;
  }

  function loadCSV() {
    fetch(CSV_URL)
      .then(r => { if(!r.ok) throw new Error('no csv'); return r.text(); })
      .then(text => {
        const parsed = csvToProducts(text);
        if (parsed.length > 0) {
          // 自检：如果第一个产品的name明显不是产品名（包含'jpg'或'images/'），则判定为解析错误
          if (parsed[0].name && (parsed[0].name.includes('.jpg') || parsed[0].name.includes('images/'))) {
            console.error('CSV解析异常，name字段包含图片路径，使用默认数据');
            window.TEA_DATA = DEFAULT_PRODUCTS;
          } else {
            window.TEA_DATA = parsed;
            console.log('CSV loaded (' + parsed.length + ' items)');
          }
        } else {
          window.TEA_DATA = DEFAULT_PRODUCTS;
        }
        if (window.onTeaDataReady) window.onTeaDataReady();
      })
      .catch(() => {
        window.TEA_DATA = DEFAULT_PRODUCTS;
        if (window.onTeaDataReady) window.onTeaDataReady();
      });
  }
  loadCSV();
})();