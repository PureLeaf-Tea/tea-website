(function() {
  const LANGUAGES = {
    en: { name: 'English', native: 'English' },
    es: { name: 'Spanish', native: 'Español' },
    ru: { name: 'Russian', native: 'Русский' },
    fr: { name: 'French', native: 'Français' },
    de: { name: 'German', native: 'Deutsch' },
    'zh-CN': { name: '简体中文', native: '简体中文' }
  };

  const DICT = {
    en: {
      searchPlaceholder: 'Search tea, name, origin',
      cartTitle: 'Your Inquiry List', total: 'Total', copyInquiry: 'Copy Inquiry List',
      emptyCart: 'Your inquiry list is empty', specialInstructions: 'Special instructions',
      remove: 'Remove', addedToast: '✓ Added to inquiry list', copiedToast: '✓ List copied! Send to WeChat',
      categoryNames: { '红茶': 'Black Tea', '乌龙茶': 'Oolong', '白茶': 'White Tea', '花茶': 'Jasmine', '普洱茶': 'Pu\'er', '绿茶': 'Green Tea', '黑茶': 'Dark Tea' },
      noResults: 'No results', productNotFound: 'Product not found', backToHome: 'Back to Home',
      brewingGuide: 'Brewing Guide', youMayAlsoLike: 'You May Also Like', addToCart: 'Add to Inquiry',
      notePlaceholder: 'Special instructions (optional)', selectSku: 'Select a specification',
      wechatContact: 'Contact on WeChat', back: '← Back', gradesAvailable: 'sizes available',
      phoneTitle: 'Call Us', phoneSubtitle: 'Speak directly with our tea specialist',
      phoneNumbers: ['+8615515928905', '+8618625558630'], callButton: 'Call Now',
      contactPhoneLabel: 'Call', contactWechatLabel: 'WeChat',
      wechatTitle: 'Add WeChat for order & inquiries',
      wechatSubtitle: 'Send tracking number · Check stock · Custom quote',
      wechatAccounts: ['Gaoshanqilan', 'ZenSongshanTea'],
      copyWechatButton: 'Copy WeChat ID',
      copySuccess: 'Copied! Open WeChat to add',
      modalClose: 'Close',
      organicCertification: 'Organic Certification',
      trustMessage: 'Naturally Grown · No Pesticides · No Fertilizers · Wild & Pure'
    },
    es: {
      searchPlaceholder: 'Buscar té, nombre, origen',
      cartTitle: 'Tu lista de consulta', total: 'Total', copyInquiry: 'Copiar lista',
      emptyCart: 'Tu lista está vacía', specialInstructions: 'Instrucciones especiales',
      remove: 'Eliminar', addedToast: '✓ Añadido a la lista', copiedToast: '✓ Lista copiada! Enviar a WeChat',
      categoryNames: { '红茶': 'Té Negro', '乌龙茶': 'Oolong', '白茶': 'Té Blanco', '花茶': 'Jazmín', '普洱茶': 'Pu\'er', '绿茶': 'Té Verde', '黑茶': 'Té Oscuro' },
      noResults: 'Sin resultados', productNotFound: 'Producto no encontrado', backToHome: 'Volver al inicio',
      brewingGuide: 'Guía de preparación', youMayAlsoLike: 'También te puede gustar', addToCart: 'Añadir a la lista',
      notePlaceholder: 'Instrucciones especiales (opcional)', selectSku: 'Selecciona una especificación',
      wechatContact: 'Contactar en WeChat', back: '← Volver', gradesAvailable: 'tamaños disponibles',
      phoneTitle: 'Llámanos', phoneSubtitle: 'Habla directamente con nuestro especialista en té',
      phoneNumbers: ['+8615515928905', '+8618625558630'], callButton: 'Llamar ahora',
      contactPhoneLabel: 'Llamar', contactWechatLabel: 'WeChat',
      wechatTitle: 'Añadir WeChat para pedidos y consultas',
      wechatSubtitle: 'Enviar número de seguimiento · Verificar stock · Cotización personalizada',
      wechatAccounts: ['Gaoshanqilan', 'ZenSongshanTea'],
      copyWechatButton: 'Copiar WeChat ID',
      copySuccess: '¡Copiado! Abre WeChat para añadir',
      modalClose: 'Cerrar',
      organicCertification: 'Certificación Orgánica',
      trustMessage: 'Cultivo Natural · Sin Pesticidas · Sin Fertilizantes · Puro y Silvestre'
    },
    ru: {
      searchPlaceholder: 'Поиск чая, названия, происхождения',
      cartTitle: 'Ваш список запросов', total: 'Итого', copyInquiry: 'Копировать список',
      emptyCart: 'Ваш список пуст', specialInstructions: 'Особые указания',
      remove: 'Удалить', addedToast: '✓ Добавлено в список', copiedToast: '✓ Список скопирован! Отправьте в WeChat',
      categoryNames: { '红茶': 'Чёрный чай', '乌龙茶': 'Улун', '白茶': 'Белый чай', '花茶': 'Жасминовый', '普洱茶': 'Пуэр', '绿茶': 'Зелёный чай', '黑茶': 'Тёмный чай' },
      noResults: 'Ничего не найдено', productNotFound: 'Товар не найден', backToHome: 'На главную',
      brewingGuide: 'Руководство по завариванию', youMayAlsoLike: 'Вам также может понравиться', addToCart: 'В список',
      notePlaceholder: 'Особые указания (необязательно)', selectSku: 'Выберите спецификацию',
      wechatContact: 'Связаться в WeChat', back: '← Назад', gradesAvailable: 'размеров доступно',
      phoneTitle: 'Позвоните нам', phoneSubtitle: 'Поговорите напрямую с нашим чайным специалистом',
      phoneNumbers: ['+8615515928905', '+8618625558630'], callButton: 'Позвонить сейчас',
      contactPhoneLabel: 'Звонок', contactWechatLabel: 'WeChat',
      wechatTitle: 'Добавьте WeChat для заказа и консультации',
      wechatSubtitle: 'Отправить номер отслеживания · Проверить наличие · Индивидуальный расчёт',
      wechatAccounts: ['Gaoshanqilan', 'ZenSongshanTea'],
      copyWechatButton: 'Скопировать WeChat ID',
      copySuccess: 'Скопировано! Откройте WeChat, чтобы добавить',
      modalClose: 'Закрыть',
      organicCertification: 'Органическая сертификация',
      trustMessage: 'Натуральное выращивание · Без пестицидов · Без удобрений · Дикое и чистое'
    },
    fr: {
      searchPlaceholder: 'Rechercher thé, nom, origine',
      cartTitle: 'Votre liste de demande', total: 'Total', copyInquiry: 'Copier la liste',
      emptyCart: 'Votre liste est vide', specialInstructions: 'Instructions spéciales',
      remove: 'Retirer', addedToast: '✓ Ajouté à la liste', copiedToast: '✓ Liste copiée ! Envoyer sur WeChat',
      categoryNames: { '红茶': 'Thé noir', '乌龙茶': 'Oolong', '白茶': 'Thé blanc', '花茶': 'Jasmin', '普洱茶': 'Pu\'er', '绿茶': 'Thé vert', '黑茶': 'Thé sombre' },
      noResults: 'Aucun résultat', productNotFound: 'Produit non trouvé', backToHome: 'Retour à l\'accueil',
      brewingGuide: 'Guide d\'infusion', youMayAlsoLike: 'Vous aimerez aussi', addToCart: 'Ajouter à la liste',
      notePlaceholder: 'Instructions spéciales (facultatif)', selectSku: 'Sélectionnez une spécification',
      wechatContact: 'Contacter sur WeChat', back: '← Retour', gradesAvailable: 'tailles disponibles',
      phoneTitle: 'Appelez-nous', phoneSubtitle: 'Parlez directement à notre spécialiste du thé',
      phoneNumbers: ['+8615515928905', '+8618625558630'], callButton: 'Appeler maintenant',
      contactPhoneLabel: 'Appeler', contactWechatLabel: 'WeChat',
      wechatTitle: 'Ajoutez WeChat pour commande et conseils',
      wechatSubtitle: 'Envoyer le numéro de suivi · Vérifier le stock · Devis personnalisé',
      wechatAccounts: ['Gaoshanqilan', 'ZenSongshanTea'],
      copyWechatButton: 'Copier l\'identifiant WeChat',
      copySuccess: 'Copié ! Ouvrez WeChat pour ajouter',
      modalClose: 'Fermer',
      organicCertification: 'Certification Biologique',
      trustMessage: 'Culture Naturelle · Sans Pesticides · Sans Engrais · Sauvage et Pur'
    },
    de: {
      searchPlaceholder: 'Tee, Name, Herkunft suchen',
      cartTitle: 'Ihre Anfrageliste', total: 'Gesamt', copyInquiry: 'Anfrageliste kopieren',
      emptyCart: 'Ihre Anfrageliste ist leer', specialInstructions: 'Besondere Anweisungen',
      remove: 'Entfernen', addedToast: '✓ Zur Anfrageliste hinzugefügt', copiedToast: '✓ Anfrageliste kopiert! An WeChat senden',
      categoryNames: { '红茶': 'Schwarzer Tee', '乌龙茶': 'Oolong', '白茶': 'Weißer Tee', '花茶': 'Jasmin', '普洱茶': 'Pu\'er', '绿茶': 'Grüner Tee', '黑茶': 'Dunkler Tee' },
      noResults: 'Keine Ergebnisse', productNotFound: 'Produkt nicht gefunden', backToHome: 'Zurück zur Startseite',
      brewingGuide: 'Zubereitungsanleitung', youMayAlsoLike: 'Das könnte Ihnen auch gefallen', addToCart: 'Zur Anfrageliste',
      notePlaceholder: 'Besondere Anweisungen (optional)', selectSku: 'Spezifikation wählen',
      wechatContact: 'Kontakt per WeChat', back: '← Zurück', gradesAvailable: 'Größen verfügbar',
      phoneTitle: 'Rufen Sie uns an', phoneSubtitle: 'Sprechen Sie direkt mit unserem Tee-Spezialisten',
      phoneNumbers: ['+8615515928905', '+8618625558630'], callButton: 'Jetzt anrufen',
      contactPhoneLabel: 'Anruf', contactWechatLabel: 'WeChat',
      wechatTitle: 'WeChat für Bestellung & Anfragen hinzufügen',
      wechatSubtitle: 'Sendungsnummer senden · Lagerbestand prüfen · Individuelles Angebot',
      wechatAccounts: ['Gaoshanqilan', 'ZenSongshanTea'],
      copyWechatButton: 'WeChat-ID kopieren',
      copySuccess: 'Kopiert! Öffnen Sie WeChat zum Hinzufügen',
      modalClose: 'Schließen',
      organicCertification: 'Bio-Zertifizierung',
      trustMessage: 'Natürlicher Anbau · Keine Pestizide · Keine Düngemittel · Wild und Rein'
    },
    'zh-CN': {
      searchPlaceholder: '搜索茶叶 / 品名 / 产地',
      cartTitle: '您的询价清单', total: '合计', copyInquiry: '复制询价清单',
      emptyCart: '询价清单是空的', specialInstructions: '特殊说明',
      remove: '移除', addedToast: '✓ 已加入询价清单', copiedToast: '✓ 清单已复制！请发送给微信',
      categoryNames: { '红茶': '红茶', '乌龙茶': '乌龙茶', '白茶': '白茶', '花茶': '花茶', '普洱茶': '普洱茶', '绿茶': '绿茶', '黑茶': '黑茶' },
      noResults: '未找到结果', productNotFound: '找不到产品', backToHome: '返回首页',
      brewingGuide: '冲泡指南', youMayAlsoLike: '您可能也喜欢', addToCart: '加入询价清单',
      notePlaceholder: '特殊说明（可选）', selectSku: '请选择规格',
      wechatContact: '微信联系', back: '← 返回', gradesAvailable: '种规格可选',
      phoneTitle: '致电咨询', phoneSubtitle: '直接与我们的茶叶专员通话',
      phoneNumbers: ['+8615515928905', '+8618625558630'], callButton: '立即拨打',
      contactPhoneLabel: '电话', contactWechatLabel: '微信',
      wechatTitle: '添加微信咨询下单',
      wechatSubtitle: '发送物流单号 · 查询库存 · 定制报价',
      wechatAccounts: ['Gaoshanqilan', 'ZenSongshanTea'],
      copyWechatButton: '复制微信号',
      copySuccess: '复制成功！请打开微信添加',
      modalClose: '关闭',
      organicCertification: '有机认证',
      trustMessage: '纯天然 · 无农药 · 无施肥 · 自然生长'
    }
  };

  let currentLang = localStorage.getItem('preferredLang') || 'en';

  window.t = function(key) { return (DICT[currentLang] || DICT.en)[key] || DICT.en[key] || key; };
  window.getCurrentLang = () => currentLang;
  window.setLang = function(code) { if (DICT[code]) { currentLang = code; localStorage.setItem('preferredLang', code); location.reload(); } };
  window.formatPrice = function(priceStr) { const num = parseFloat(String(priceStr).replace(/[^0-9.]/g, '')); return '¥' + (isNaN(num) ? '0.00' : num.toFixed(2)); };
  window.getLanguageList = () => Object.entries(LANGUAGES).map(([code, obj]) => ({ code, ...obj }));

  window.getProductName = function(prod) {
    const lang = currentLang;
    if (lang === 'zh-CN') return prod.name;
    if (lang === 'ru' && prod.nameRu) return prod.nameRu;
    if (lang === 'es' && prod.nameEs) return prod.nameEs;
    if (lang === 'fr' && prod.nameFr) return prod.nameFr;
    if (lang === 'de' && prod.nameDe) return prod.nameDe;
    return prod.nameEn || prod.name;
  };
  window.getProductDesc = function(prod) {
    const lang = currentLang;
    if (lang === 'zh-CN') return prod.desc;
    if (lang === 'ru' && prod.descRu) return prod.descRu;
    if (lang === 'es' && prod.descEs) return prod.descEs;
    if (lang === 'fr' && prod.descFr) return prod.descFr;
    if (lang === 'de' && prod.descDe) return prod.descDe;
    return prod.descEn || prod.desc;
  };
  window.getProductBrewing = function(prod) {
    const lang = currentLang;
    if (lang === 'zh-CN') return prod.brewing;
    if (lang === 'ru' && prod.brewingRu) return prod.brewingRu;
    if (lang === 'es' && prod.brewingEs) return prod.brewingEs;
    if (lang === 'fr' && prod.brewingFr) return prod.brewingFr;
    if (lang === 'de' && prod.brewingDe) return prod.brewingDe;
    return prod.brewingEn || prod.brewing;
  };
  window.getSkuSpec = function(sku) {
    const lang = currentLang;
    if (lang === 'ru' && sku.specRu) return sku.specRu;
    if (lang === 'es' && sku.specEs) return sku.specEs;
    if (lang === 'fr' && sku.specFr) return sku.specFr;
    if (lang === 'de' && sku.specDe) return sku.specDe;
    return sku.specEn || sku.spec;
  };
  window.getCategoryName = function(catKey) {
    const dict = (DICT[currentLang] && DICT[currentLang].categoryNames) || {};
    return dict[catKey] || DICT.en.categoryNames[catKey] || catKey;
  };

  // 多语言搜索支持
  window.getAllProductSearchText = function(prod) {
    const names = [prod.name, prod.nameEn, prod.nameRu, prod.nameEs, prod.nameFr, prod.nameDe];
    const cat = prod.category;
    if (cat) {
      const langs = ['en','es','ru','fr','de','zh-CN'];
      langs.forEach(lang => {
        const catNames = (DICT[lang] && DICT[lang].categoryNames) || {};
        const cn = catNames[cat] || DICT.en.categoryNames[cat] || cat;
        names.push(cn);
      });
    }
    return names.filter(Boolean).join(' ').toLowerCase();
  };

  window.copyWeChat = function(wechatId, event) {
    if (event) event.preventDefault();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(wechatId).then(() => {
        const btn = event && event.target;
        if (btn && btn.tagName === 'BUTTON') {
          const orig = btn.textContent;
          btn.textContent = '✓ ' + t('copySuccess');
          btn.style.background = '#1a3a1a';
          setTimeout(() => { btn.textContent = orig; btn.style.background = '#07C160'; }, 2000);
        } else {
          alert(t('copySuccess'));
        }
      }).catch(() => { prompt(t('copySuccess'), wechatId); });
    } else {
      prompt(t('copySuccess'), wechatId);
    }
  };

  window.showPhoneModal = function() {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.4);z-index:3000;display:flex;align-items:flex-end;justify-content:center;';
    const modal = document.createElement('div');
    modal.className = 'bottom-modal';
    modal.style.cssText = 'background:white;border-radius:24px 24px 0 0;padding:24px 20px 30px;width:100%;max-width:500px;box-shadow:0 -4px 20px rgba(0,0,0,0.1);position:relative;';
    let phonesHtml = '';
    t('phoneNumbers').forEach(num => {
      phonesHtml += `<a href="tel:${num}" style="display:block;margin:8px 0;font-size:1.2rem;color:#1a3a1a;text-decoration:none;">📞 ${num}</a>`;
    });
    modal.innerHTML = `
      <h3 style="font-family:'Cormorant Garamond',serif;font-size:1.6rem;margin-bottom:8px;">${t('phoneTitle')}</h3>
      <p style="color:#666;margin-bottom:16px;">${t('phoneSubtitle')}</p>
      ${phonesHtml}
      <a href="tel:${t('phoneNumbers')[0]}" style="display:inline-block;margin-top:16px;background:#1a3a1a;color:white;padding:12px 28px;border-radius:30px;text-decoration:none;font-weight:600;">${t('callButton')}</a>
      <button class="close-modal" style="position:absolute;top:16px;right:16px;background:none;border:none;font-size:1.5rem;cursor:pointer;">&times;</button>
    `;
    modal.querySelector('.close-modal').addEventListener('click', () => overlay.remove());
    overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
  };

  window.showWechatModal = function() {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.4);z-index:3000;display:flex;align-items:flex-end;justify-content:center;';
    const modal = document.createElement('div');
    modal.className = 'bottom-modal';
    modal.style.cssText = 'background:white;border-radius:24px 24px 0 0;padding:24px 20px 30px;width:100%;max-width:500px;box-shadow:0 -4px 20px rgba(0,0,0,0.1);position:relative;text-align:center;';
    let accountsHtml = '';
    t('wechatAccounts').forEach(acc => {
      accountsHtml += `<div style="margin:12px 0;font-size:1.1rem;font-weight:500;color:#1a3a1a;">${acc}</div>`;
    });
    modal.innerHTML = `
      <h3 style="font-size:1.4rem;margin-bottom:6px;font-weight:600;">${t('wechatTitle')}</h3>
      <p style="color:#666;margin-bottom:16px;font-size:0.9rem;">${t('wechatSubtitle')}</p>
      ${accountsHtml}
      <button id="copyWechatBtn" style="margin-top:16px;background:#07C160;color:white;border:none;padding:12px 28px;border-radius:30px;font-size:1rem;font-weight:600;cursor:pointer;">${t('copyWechatButton')}</button>
      <button class="close-modal" style="position:absolute;top:16px;right:16px;background:none;border:none;font-size:1.5rem;cursor:pointer;">&times;</button>
    `;
    modal.querySelector('.close-modal').addEventListener('click', () => overlay.remove());
    overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });
    modal.querySelector('#copyWechatBtn').addEventListener('click', function(e) {
      const accounts = t('wechatAccounts');
      navigator.clipboard.writeText(accounts.join(' , ')).then(() => {
        this.textContent = '✓ ' + t('copySuccess');
        this.style.background = '#1a3a1a';
        setTimeout(() => { this.textContent = t('copyWechatButton'); this.style.background = '#07C160'; }, 2000);
      }).catch(() => { prompt(t('copySuccess'), accounts.join(' , ')); });
    });
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
  };
})();