(function() {
  let cart = [];
  function safeLoadCart() {
    try { const stored = JSON.parse(localStorage.getItem('teaInquiryCart')); return Array.isArray(stored) ? stored : []; }
    catch(e) { localStorage.removeItem('teaInquiryCart'); return []; }
  }
  function saveCart() { localStorage.setItem('teaInquiryCart', JSON.stringify(cart)); if (window.updateCartUI) window.updateCartUI(); }
  window.Cart = {
    init() { cart = safeLoadCart(); if (window.updateCartUI) window.updateCartUI(); },
    getCart() { return cart; },
    getTotal() { return cart.reduce((sum, item) => sum + ((item.priceNum || 0) * (item.quantity || 0)), 0); },
    addItem(product, skuIndex, quantity = 1, note = '') {
      const sku = product.sku && product.sku[skuIndex];
      if (!sku) return false;
      const cartItemId = `${product.id}_${skuIndex}`;
      const existing = cart.find(item => item.cartItemId === cartItemId);
      if (existing) { existing.quantity += quantity; }
      else {
        const priceNum = parseFloat(String(sku.price).replace(/[^0-9.]/g, ''));
        cart.push({ cartItemId, id: product.id, name: product.name, nameEn: product.nameEn || product.name, spec: sku.spec, specEn: sku.specEn || sku.spec, priceNum: isNaN(priceNum)?0:priceNum, quantity, note });
      }
      saveCart(); return true;
    },
    removeItem(index) { if (index >= 0 && index < cart.length) { cart.splice(index, 1); saveCart(); } },
    updateNote(index, note) { if (cart[index]) { cart[index].note = note; saveCart(); } },
    clearCart() { cart = []; saveCart(); },
    getInquiryText() {
      if (cart.length === 0) return '';
      const lang = window.getCurrentLang ? window.getCurrentLang() : 'en';
      let text = lang === 'zh-CN' ? '我的询价清单：\n' : 'My Inquiry List:\n';
      cart.forEach(item => {
        const name = window.getProductName ? window.getProductName({name: item.name, nameEn: item.nameEn}) : item.nameEn;
        const spec = window.getSkuSpec ? window.getSkuSpec({spec: item.spec, specEn: item.specEn}) : item.specEn;
        const price = window.formatPrice ? window.formatPrice('$' + item.priceNum.toFixed(2)) : '¥' + item.priceNum.toFixed(2);
        text += `- ${name}  ${spec}  ×${item.quantity}  ${price}\n`;
        if (item.note) text += `  备注: ${item.note}\n`;
      });
      const total = window.formatPrice ? window.formatPrice('$' + this.getTotal().toFixed(2)) : '¥' + this.getTotal().toFixed(2);
      text += `\nTotal: ${total}`;
      return text;
    }
  };
})();