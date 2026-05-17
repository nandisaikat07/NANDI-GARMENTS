// Config: replace with real contact details
const CONTACT_EMAIL = 'nandisaikat.2002@gmail.com';
const WHATSAPP_NUMBER = '918250530293'; // international format without +
const CONTACT_NUMBER = '8250530293';

/* Translations (English, Hindi, Bengali) - keys used in the page */
const TRANSLATIONS = {
  en: {
    'nav.products':'Products','nav.about':'About','nav.location':'Location','nav.contact':'Contact',
    'hero.title':'Welcome to Nandi Garments','hero.text':'Handpicked clothing and tailoring for style and comfort.','hero.button':'Shop Now',
    'products.title':'Products',
    'about.title':'About Us','about.text':'Nandi Garments is focused on simplifying garment business operations through a smart digital platform. We help manage inventory, sales, and products efficiently, reducing manual work and improving accuracy. Our goal is to support business growth with a user-friendly and scalable solution.',
    'location.title':'Location','location.text':'Visit our store at : Madhubanpur, Muraddi, Santuri, Purulia,723156. We\'re open Mon–Sun, 6:30am–9pm.',
    'contact.title':'Contact','contact.name':'Name','contact.email':'Email','contact.message':'Message','contact.send_email':'Send Email','contact.send_whatsapp':'Send WhatsApp',
    'search.placeholder':'Search products...',
    'cart.title':'Your Cart','cart.total_label':'Total:','cart.checkout':'Checkout','cart.clear':'Clear','cart.empty':'Your cart is empty.',
    'chat.header':'Help — Nandi Garments','chat.placeholder':'Type your question...'
  },
  hi: {
    'nav.products':'उत्पाद','nav.about':'हमारे बारे में','nav.location':'स्थान','nav.contact':'संपर्क',
    'hero.title':'नंदी गारमेंट्स में आपका स्वागत है','hero.text':'स्टाइल और आराम के लिए चुने हुए परिधान और सिलाई।','hero.button':'अभी खरीदें',
    'products.title':'उत्पाद',
    'about.title':'हमारे बारे में','about.text':'Nandi Garments एक स्मार्ट डिजिटल प्लेटफ़ॉर्म के माध्यम से परिधान व्यापार के कार्यों को सरल बनाने पर केंद्रित है। हम इन्वेंटरी, बिक्री और उत्पादों का कुशलतापूर्वक प्रबंधन करने में मदद करते हैं, जिससे मैन्युअल काम कम होता है और सटीकता बढ़ती है। हमारा लक्ष्य उपयोगकर्ता के अनुकूल और स्केलेबल समाधान के साथ व्यापार वृद्धि का समर्थन करना है।',
    'location.title':'स्थान','location.text':'हमारी दुकान: Madhubanpur, Muraddi, Santuri, Purulia,723156। हम सोम–रवि 6:30am–9pm खुलते हैं।',
    'contact.title':'संपर्क','contact.name':'नाम','contact.email':'ईमेल','contact.message':'संदेश','contact.send_email':'ईमेल भेजें','contact.send_whatsapp':'WhatsApp भेजें',
    'search.placeholder':'उत्पाद खोजें...',
    'cart.title':'आपकी गाड़ी','cart.total_label':'कुल:','cart.checkout':'चेकआउट','cart.clear':'साफ़ करें','cart.empty':'आपकी गाड़ी खाली है।',
    'chat.header':'सहायता — नंदी गारमेंट्स','chat.placeholder':'अपना प्रश्न टाइप करें...'
  },
  bn: {
    'nav.products':'পণ্য','nav.about':'আমাদের সম্পর্কে','nav.location':'অবস্থান','nav.contact':'যোগাযোগ',
    'hero.title':'Nandi Garments-এ স্বাগতম','hero.text':'স্টাইল এবং আরামের জন্য নির্বাচিত পোশাক এবং সেলাই।','hero.button':'এখন কিনুন',
    'products.title':'পণ্য',
    'about.title':'আমাদের সম্পর্কে','about.text':'Nandi Garments একটি স্মার্ট ডিজিটাল প্ল্যাটফর্মের মাধ্যমে সাবান ব্যবসার কার্যক্রমকে সাধারণ করা নিয়ে কাজ করে। আমরা ইনভেন্টরি, বিক্রয় এবং পণ্যগুলি দক্ষতার সাথে পরিচালনা করতে সহায়তা করি, ম্যানুয়াল কাজ কমাই এবং নির্ভুলতা উন্নত করি। আমাদের লক্ষ্যে একটি ব্যবহারকারী-সক্ষম এবং স্কেলযোগ্য সমাধানের মাধ্যমে ব্যবসার বৃদ্ধি সমর্থন করা।',
    'location.title':'অবস্থান','location.text':'আমাদের দোকান: Madhubanpur, Muraddi, Santuri, Purulia,723156। আমরা সোম–রবি 6:30am–9pm খোলা থাকি।',
    'contact.title':'যোগাযোগ','contact.name':'নাম','contact.email':'ইমেল','contact.message':'বার্তা','contact.send_email':'ইমেল পাঠান','contact.send_whatsapp':'WhatsApp পাঠান',
    'search.placeholder':'পণ্য অনুসন্ধান...',
    'cart.title':'আপনার কার্ট','cart.total_label':'মোট:','cart.checkout':'চেকআউট','cart.clear':'মুছে ফেলুন','cart.empty':'আপনার কার্ট খালি।',
    'chat.header':'সহায়তা — Nandi Garments','chat.placeholder':'আপনার প্রশ্ন টাইপ করুন...'
  }
};

let products = [];

async function loadProducts(){
  try{
    const res = await fetch('products.json');
    products = await res.json();
    console.log('Loaded products from JSON:', products);
}catch(e){
    console.error('Failed to load products.json, trying embedded fallback', e);
    // Try embedded JSON fallback (useful when opening file://index.html)
    const embedded = document.getElementById('products-data');
    if(embedded){
      try{ products = JSON.parse(embedded.textContent || embedded.innerText || '[]'); }
      catch(err){ console.error('Failed to parse embedded products-data', err); products = []; }
    } else {
      products = [];
    }
    console.log('Loaded from embedded fallback, products:', products);
  }
  renderCategories();
  renderProducts();
}

function availabilityBadgeHTML(p){
  const a = (p.availability || '').toLowerCase();
  if(!a) return '';
  if(a.includes('limited') || a.includes('only') || a.includes('left')){
    return `<span class="stock-badge only-left">Only 3 left</span>`;
  }
  if(a.includes('restock') || a.includes('soon')){
    return `<span class="stock-badge restocking">Restocking soon</span>`;
  }
  if(a.includes('available') || a.includes('in stock')){
    return `<span class="stock-badge in-stock">In stock</span>`;
  }
  // fallback
  return `<span class="stock-badge">${p.availability}</span>`;
}

function promoPick(list, count=4, variant='most-loved'){
  const arr = [...list];
  // Use stable pseudo-sorting so it looks consistent.
  arr.sort((a,b)=>{
    const ax = Number(a.id) || 0;
    const bx = Number(b.id) || 0;
    if(variant==='most-loved') return (bx%10) - (ax%10);
    if(variant==='trending') return (bx%7) - (ax%7);
    return (ax%5) - (bx%5); // top-picks
  });
  return arr.slice(0, count);
}

function renderPromoGrid(containerId, items){
  const el = document.getElementById(containerId);
  if(!el) return;
  el.innerHTML = '';
  const dict = window.NG_I18N || TRANSLATIONS.en;

  items.forEach(p=>{
    const card = document.createElement('article');
    card.className = 'promo-card';
    card.innerHTML = `
      <a class="product-link" href="product.html?id=${p.id}" aria-label="View ${p.name}">
        <div class="promo-img-wrap">
          <img src="${p.img}" alt="${p.name}">
        </div>
        ${availabilityBadgeHTML(p)}
        <div class="promo-body">
          <div class="promo-title">${p.name}</div>
          <div class="promo-price">₹${p.price}</div>
          <div class="promo-desc">${dict['product.desc'] || 'High-quality fabric and finish.'}</div>
        </div>
      </a>
    `;
    el.appendChild(card);
  });
}

function renderProducts(filterCategory='all'){
  const grid = document.getElementById('product-grid');
  grid.innerHTML = '';
  const dict = window.NG_I18N || TRANSLATIONS.en;
  const list = filterCategory === 'all' ? products : products.filter(p=>p.category===filterCategory);

  list.forEach(p=>{
    const card = document.createElement('article');
    card.className = 'product';
    card.innerHTML = `
      ${availabilityBadgeHTML(p)}
      <a class="product-link" href="product.html?id=${p.id}" aria-label="View ${p.name}">
        <img src="${p.img}" alt="${p.name}">
      </a>
      <div class="body">
        <h3>
          <a class="product-title-link" href="product.html?id=${p.id}">${p.name}</a>
        </h3>
        <p>${dict['product.desc'] || 'High-quality fabric and finish.'}</p>
        <div class="price">₹${p.price}</div>
        <button class="btn" data-id="${p.id}">${dict['product.add_to_cart'] || 'Add to cart'}</button>
      </div>
    `;
    grid.appendChild(card);
  });

  // Update promo sections when products are filtered
  renderPromoGrid('promo-most-loved', promoPick(list, 4, 'most-loved'));
  renderPromoGrid('promo-trending', promoPick(list, 4, 'trending'));
  renderPromoGrid('promo-top-picks', promoPick(list, 4, 'top-picks'));
}


function renderCategories(){
  const select = document.getElementById('category-filter');
  if(!select) return;
  const cats = Array.from(new Set(products.map(p=>p.category))).sort();
  // Clear existing (keep 'all')
  select.innerHTML = '<option value="all">All</option>' + cats.map(c=>`<option value="${c}">${c}</option>`).join('');
  select.addEventListener('change', ()=>{
    renderProducts(select.value);
  });
}

// Replace simple alert with cart behavior
document.addEventListener('click', (e)=>{
  if(e.target.matches('.product .btn')){
    const id = e.target.getAttribute('data-id');
    addToCart(Number(id), 1);
  }
});

document.getElementById('contact-form').addEventListener('submit', (e)=>{
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const subject = encodeURIComponent('Website contact from ' + (name || email || 'website'));
  const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`);
  // open mail client
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  e.target.reset();
});

document.getElementById('whatsapp-send').addEventListener('click', ()=>{
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const text = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`);
  // opens WhatsApp (web or app) with prefilled message; number must be in international format without +
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  window.open(url, '_blank');
});

loadProducts();

/* WhatsApp floating chat button (separate from chatbot) */
function initWhatsAppFloat(){
  const btnId = 'whatsapp-floating';
  if(document.getElementById(btnId)) return;

  const btn = document.createElement('a');
  btn.id = btnId;
  btn.className = 'whatsapp-floating-btn';
  btn.target = '_blank';
  btn.rel = 'noopener';
  btn.setAttribute('aria-label','Order on WhatsApp');

  const msg = 'Hi Nandi Garments! I want to order. Please guide me.';
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  btn.href = url;

  btn.innerHTML = '💬';
  document.body.appendChild(btn);

  // If on product.html, use current product name in message (product.html sets window.__NG_CURRENT_PRODUCT)
  if(window.location.pathname.toLowerCase().endsWith('product.html')){
    try{
      const p = window.__NG_CURRENT_PRODUCT;
      if(p && p.name){
        const size = window.__NG_SELECTED_SIZE || '';
        const extra = size ? ` Size: ${size}.` : '';
        const text = `Hi Nandi Garments! I want to order: ${p.name}.${extra} Please confirm availability and share payment/delivery options.`;
        btn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
      }
    }catch(e){}
  }
}

document.addEventListener('DOMContentLoaded', initWhatsAppFloat);

/* --- Wishlist + Recently Viewed (localStorage) --- */
const WISHLIST_KEY = 'ng_wishlist_v1';
let wishlist = loadWishlist();

function loadWishlist(){
  try{ return JSON.parse(localStorage.getItem(WISHLIST_KEY)) || []; }catch(e){ return []; }
}

function saveWishlist(){
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
  updateWishlistCount();
}

function isWishlisted(productId){
  return wishlist.includes(productId);
}

function toggleWishlist(productId){
  const id = Number(productId);
  if(isWishlisted(id)) wishlist = wishlist.filter(x=>x!==id); else wishlist.unshift(id);
  saveWishlist();
  renderWishlistDrawer();
  syncWishlistButtons();
}

function updateWishlistCount(){
  const el = document.getElementById('wishlist-count');
  if(el) el.textContent = String(wishlist.length);
}

function syncWishlistButtons(){
  document.querySelectorAll('[data-wishlist-id]').forEach(btn=>{
    const id = Number(btn.getAttribute('data-wishlist-id'));
    btn.classList.toggle('active', isWishlisted(id));
    btn.setAttribute('aria-pressed', String(isWishlisted(id)));
  });
}

function renderWishlistDrawer(){
  const container = document.getElementById('wishlist-items');
  if(!container) return;
  container.innerHTML = '';

  if(wishlist.length===0){
    container.innerHTML = `<div class="note">Your wishlist is empty.</div>`;
    return;
  }

  const dict = window.NG_I18N || TRANSLATIONS.en;
  const items = wishlist
    .map(id=>products.find(p=>p.id===id))
    .filter(Boolean);

  items.forEach(p=>{
    const el = document.createElement('div');
    el.className = 'wishlist-item';
    el.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <div class="info">
        <div><strong>${p.name}</strong></div>
        <div class="meta">₹${p.price}</div>
      </div>
      <button class="remove" data-remove-wishlist-id="${p.id}" aria-label="Remove from wishlist">✕</button>
      `;
    container.appendChild(el);
  });

  container.querySelectorAll('[data-remove-wishlist-id]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      toggleWishlist(Number(btn.getAttribute('data-remove-wishlist-id')));
    });
  });
}

function initWishlistUI(){
  // Drawer open/close
  document.getElementById('wishlist-toggle')?.addEventListener('click', ()=>{
    document.getElementById('wishlist-drawer')?.setAttribute('aria-hidden','false');
    renderWishlistDrawer();
  });
  document.getElementById('wishlist-close')?.addEventListener('click', ()=>{
    document.getElementById('wishlist-drawer')?.setAttribute('aria-hidden','true');
  });

  // Wishlist item buttons in product cards / quick view
  syncWishlistButtons();
  renderWishlistDrawer();
  updateWishlistCount();
}

/* Recently viewed */
const RECENT_KEY = 'ng_recent_v1';
let recentlyViewed = loadRecentlyViewed();

function loadRecentlyViewed(){
  try{ return JSON.parse(localStorage.getItem(RECENT_KEY)) || []; }catch(e){ return []; }
}

function saveRecentlyViewed(){
  localStorage.setItem(RECENT_KEY, JSON.stringify(recentlyViewed));
  renderRecentlyViewed();
}

function addRecentlyViewed(productId){
  const id = Number(productId);
  recentlyViewed = recentlyViewed.filter(x=>x!==id);
  recentlyViewed.unshift(id);
  recentlyViewed = recentlyViewed.slice(0,8);
  saveRecentlyViewed();
}

function renderRecentlyViewed(){
  const wrap = document.getElementById('recently-viewed-items');
  const section = document.getElementById('recently-viewed');
  if(!wrap || !section) return;
  wrap.innerHTML = '';

  if(recentlyViewed.length===0){
    section.style.display='none';
    return;
  }
  section.style.display='block';

  recentlyViewed
    .map(id=>products.find(p=>p.id===id))
    .filter(Boolean)
    .forEach(p=>{
      const a = document.createElement('button');
      a.type='button';
      a.className='recent-item';
      a.style.background='none';
      a.style.border='none';
      a.innerHTML = `<img src="${p.img}" alt="${p.name}">`;
      a.addEventListener('click', ()=>{
        openQuickView(p.id);
      });
      wrap.appendChild(a);
    });
}

/* Initialize wishlist + recently viewed after DOM is ready */
document.addEventListener('DOMContentLoaded', ()=>{
  initWishlistUI();
  renderRecentlyViewed();
});

/* Deal strip actions */
function initDealStrip(){
  document.querySelectorAll('[data-deal-action]').forEach(el=>{
    el.addEventListener('click', ()=>{
      const action = el.getAttribute('data-deal-action');
      if(!action) return;
      if(action==='whatsapp'){
        const text = encodeURIComponent('Hi Nandi Garments! I need size & fit help for a product. Please guide me for measurements.');
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
      }
      if(action==='returns'){
        // open returns page for full flow
        window.location.href = 'returns.html';
      }
      if(action==='payments'){
        // Ensure chat is visible and then show info
        document.getElementById('chat-window')?.setAttribute('aria-hidden','false');
        const chatToggle = document.getElementById('chat-toggle');
        chatToggle?.setAttribute('aria-expanded','true');
        appendChatMessage?.('Payments: We accept Online + Cash on Delivery. For best options, contact us via WhatsApp.', 'bot');
      }
      if(action==='support'){
        // open chat and prefill prompt
        const toggle = document.getElementById('chat-toggle');
        const input = document.getElementById('chat-input');
        toggle?.click();
        setTimeout(()=>{
          if(input){
            input.value = 'I need help with my order/product. Please assist.';
          }
        }, 150);
      }
    });
  });
}

/* Theme toggle: persist preference in localStorage */

function applyTheme(theme){

  const isDark = theme === 'dark';
  document.documentElement.classList.toggle('dark', isDark);
  document.body.classList.toggle('dark', isDark);
  localStorage.setItem('ng_theme', theme);
  const btn = document.getElementById('theme-toggle');
  if(btn) btn.textContent = isDark ? '☀️' : '🌙';
}

function initTheme(){
  const saved = localStorage.getItem('ng_theme');
  const prefers = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(saved || (prefers ? 'dark' : 'light'));
  const btn = document.getElementById('theme-toggle');
  if(btn) btn.addEventListener('click', ()=>{
    const current = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });
}

initTheme();

/* Simple client-side chatbot (rule-based) */
function appendChatMessage(text, who='bot'){
  const container = document.getElementById('chat-messages');
  if(!container) return;
  const el = document.createElement('div');
  el.className = 'chat-message ' + (who==='user' ? 'user' : 'bot');
  el.textContent = text;
  container.appendChild(el);
  container.scrollTop = container.scrollHeight;
}

function botReply(userText){
  const t = userText.toLowerCase();
  if(/price|cost|₹|rupee|rate/.test(t)) return 'Our prices are listed on the Products section — which item are you interested in?';
  if(/order|buy|purchase/.test(t)) return 'To place an order, tell me the product name and quantity — I can share ordering options.';
  if(/size|fit|measurement/.test(t)) return 'We offer tailoring and custom fits — please share the size or measurement you need.';
  if(/location|where|address/.test(t)) return 'Our store is at Madhubanpur, Muraddi, Santuri, Purulia,723156. Would you like directions?';
  if(/time|open|hours/.test(t)) return "We're open Mon–Sun, 6:30am–9pm.";
  if(/contact|whatsapp|phone/.test(t)) return 'You can call or WhatsApp us at 8250530293, or email nandisaikat.2002@gmail.com.';
  if(/hello|hi|hey/.test(t)) return 'Hi! I\'m Nandi helper — how can I assist you today?';
  return 'Sorry, I\'m a demo assistant. I can help with product prices, orders, store location, and contact details.';
}

function initChat(){
  const toggle = document.getElementById('chat-toggle');
  const win = document.getElementById('chat-window');
  const closeBtn = document.getElementById('chat-close');
  const form = document.getElementById('chat-form');
  const input = document.getElementById('chat-input');
  if(!toggle || !win || !form || !input) return;
  toggle.addEventListener('click', ()=>{ win.setAttribute('aria-hidden','false'); input.focus(); appendChatMessage('Hi! I\'m Nandi helper — type your question or say "help".', 'bot'); });
  closeBtn.addEventListener('click', ()=>{ win.setAttribute('aria-hidden','true'); });
  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const v = input.value.trim();
    if(!v) return;
    appendChatMessage(v,'user');
    input.value = '';
    setTimeout(()=>{
      const r = botReply(v);
      appendChatMessage(r,'bot');
    }, 600 + Math.random()*400);
  });
}

document.addEventListener('DOMContentLoaded', initChat);

/* Language selector: populate with India's 22 scheduled languages and persist preference */
function initLanguageSelector(){
  const langs = [
    {code:'en',name:'English'},
    {code:'hi',name:'Hindi'},
    {code:'bn',name:'Bengali'}
  ];
  const sel = document.getElementById('lang-select');
  if(!sel) return;
  // Build options
  sel.innerHTML = '';
  langs.forEach(l=>{
    const opt = document.createElement('option');
    opt.value = l.code;
    opt.textContent = l.name;
    sel.appendChild(opt);
  });
  // Load saved
  const saved = localStorage.getItem('ng_lang');
  if(saved){ sel.value = saved; document.documentElement.lang = saved; }
  // On change persist and set document lang attribute
  sel.addEventListener('change', ()=>{
    localStorage.setItem('ng_lang', sel.value);
    document.documentElement.lang = sel.value;
    applyTranslations(sel.value);
    // re-render products and categories so dynamically created text updates
    renderCategories();
    renderProducts(document.getElementById('category-filter')?.value || 'all');
  });
}

document.addEventListener('DOMContentLoaded', initLanguageSelector);
// Apply translations to elements marked with data-i18n
function applyTranslations(lang){
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(!key) return;
    const txt = dict[key];
    if(txt!==undefined){
      // For inputs/buttons use value/textContent accordingly
      if(el.tagName === 'INPUT' || el.tagName === 'TEXTAREA'){
        el.placeholder = txt;
      } else {
        el.textContent = txt;
      }
    }
  });
  // placeholders
  const search = document.getElementById('site-search');
  if(search) search.placeholder = dict['search.placeholder'] || '';
  const chatInput = document.getElementById('chat-input');
  if(chatInput) chatInput.placeholder = dict['chat.placeholder'] || '';
  // cart empty text may be used in renderCart
  window.NG_I18N = dict;
}

// apply saved language on load
document.addEventListener('DOMContentLoaded', ()=>{
  const lang = localStorage.getItem('ng_lang') || 'en';
  applyTranslations(lang);
});

/* Map zoom controls */
function setMapZoom(zoom){
  const iframe = document.getElementById('map-iframe');
  if(!iframe) return;
  const lat = iframe.getAttribute('data-lat');
  const lng = iframe.getAttribute('data-lng');
  iframe.setAttribute('data-zoom', String(zoom));
  const src = `https://www.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`;
  iframe.src = src;
}

document.getElementById('map-zoom-in')?.addEventListener('click', ()=>{
  const iframe = document.getElementById('map-iframe');
  if(!iframe) return;
  let z = parseInt(iframe.getAttribute('data-zoom') || '16', 10);
  if(z < 21) z += 1;
  setMapZoom(z);
});

document.getElementById('map-zoom-out')?.addEventListener('click', ()=>{
  const iframe = document.getElementById('map-iframe');
  if(!iframe) return;
  let z = parseInt(iframe.getAttribute('data-zoom') || '16', 10);
  if(z > 1) z -= 1;
  setMapZoom(z);
});

/* --- Cart logic (client-side, persisted in localStorage) --- */
const CART_KEY = 'ng_cart_v1';
let cart = loadCart();

function loadCart(){
  try{ return JSON.parse(localStorage.getItem(CART_KEY)) || {}; }catch(e){ return {}; }
}

function saveCart(){
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount(){
  const count = Object.values(cart).reduce((s,i)=>s+i.qty,0);
  const el = document.getElementById('cart-count');
  if(el) el.textContent = String(count);
}

function addToCart(id, qty=1){
  const p = products.find(x=>x.id===id);
  if(!p) return alert('Product not found');
  // Recently viewed
  addRecentlyViewed(p.id);
  if(cart[id]) cart[id].qty += qty; else cart[id] = {id:p.id,name:p.name,price:parseFloat(p.price),img:p.img,qty:qty};
  saveCart();
  renderCart();
}


function removeFromCart(id){
  delete cart[id];
  saveCart();
  renderCart();
}

function changeQty(id, delta){
  if(!cart[id]) return;
  cart[id].qty = Math.max(0, cart[id].qty + delta);
  if(cart[id].qty===0) delete cart[id];
  saveCart();
  renderCart();
}

function clearCart(){ cart = {}; saveCart(); renderCart(); }

function cartTotal(){
  return Object.values(cart).reduce((s,i)=>s + (i.price || 0) * i.qty, 0);
}

function renderCart(){
  const container = document.getElementById('cart-items');
  const totalEl = document.getElementById('cart-total');
  if(!container) return;
  container.innerHTML = '';
  const items = Object.values(cart);
  if(items.length===0){ container.innerHTML = `<div class="note">${(window.NG_I18N && window.NG_I18N['cart.empty']) || 'Your cart is empty.'}</div>`; if(totalEl) totalEl.textContent='₹0'; updateCartCount(); return; }
  items.forEach(it=>{
    const el = document.createElement('div'); el.className='cart-item';
    el.innerHTML = `
      <img src="${it.img}" alt="${it.name}">
      <div class="info">
        <div><strong>${it.name}</strong></div>
        <div class="meta">₹${it.price} × ${it.qty}</div>
      </div>
      <div class="qty">
        <button class="btn small" data-action="dec" data-id="${it.id}">-</button>
        <span>${it.qty}</span>
        <button class="btn small" data-action="inc" data-id="${it.id}">+</button>
        <button class="btn small" data-action="remove" data-id="${it.id}">Remove</button>
      </div>
    `;
    container.appendChild(el);
  });
  if(totalEl) totalEl.textContent = '₹' + cartTotal();
  updateCartCount();
}

// Initialize cart UI and search handlers after DOM is ready
function initCartUI(){
  // Cart drawer toggles and actions
  document.getElementById('cart-toggle')?.addEventListener('click', ()=>{
    document.getElementById('cart-drawer').setAttribute('aria-hidden','false'); renderCart();
  });
  document.getElementById('cart-close')?.addEventListener('click', ()=>{
    document.getElementById('cart-drawer').setAttribute('aria-hidden','true');
  });
  document.getElementById('clear-cart')?.addEventListener('click', ()=>{ if(confirm('Clear cart?')) clearCart(); });
  document.getElementById('cart-items')?.addEventListener('click', (e)=>{
    const btn = e.target.closest('button'); if(!btn) return; const act = btn.getAttribute('data-action'); const id = btn.getAttribute('data-id');
    if(act==='inc') changeQty(Number(id), 1);
    if(act==='dec') changeQty(Number(id), -1);
    if(act==='remove') removeFromCart(Number(id));
  });

  // Checkout demo: collect basic info and open mail client with order summary
  document.getElementById('checkout-btn')?.addEventListener('click', ()=>{
    const items = Object.values(cart);
    if(items.length===0) return alert('Cart is empty');
    const summary = items.map(i=>`${i.name} x${i.qty} — ₹${i.price*i.qty}`).join('\n');
    const total = cartTotal();
    const subject = encodeURIComponent('New order from website');
    const body = encodeURIComponent(`Order:\n${summary}\n\nTotal: ₹${total}\n\nPlease contact: ${CONTACT_NUMBER}`);
    window.location.href = 'checkout.html';
  });


  // Initialize cart count and render

  updateCartCount();
  renderCart();

  // Search handler
  const searchInput = document.getElementById('site-search');
  if(searchInput){
    searchInput.addEventListener('input', ()=>{
      const q = searchInput.value.trim().toLowerCase();
      if(!q) return renderProducts(document.getElementById('category-filter')?.value || 'all');
      const filtered = products.filter(p=>p.name.toLowerCase().includes(q) || (p.category||'').toLowerCase().includes(q));
      const grid = document.getElementById('product-grid'); grid.innerHTML='';
      const dict = window.NG_I18N || TRANSLATIONS.en;
      filtered.forEach(p=>{
        const card = document.createElement('article'); card.className='product';
        card.innerHTML = `
          <img src="${p.img}" alt="${p.name}">
          <div class="body">
            <h3>${p.name}</h3>
            <p>${dict['product.desc'] || 'High-quality fabric and finish.'}</p>
            <div class="price">₹${p.price}</div>
            <button class="btn" data-id="${p.id}">${dict['product.add_to_cart'] || 'Add to cart'}</button>
          </div>
        `;
        grid.appendChild(card);
      });
    });
  }
}

document.addEventListener('DOMContentLoaded', initCartUI);
// Authentication (simple client-side mock)
const AUTH_KEY = 'ng_user_v1';

function getUser(){
  try{ return JSON.parse(localStorage.getItem(AUTH_KEY)); }catch(e){return null}
}

function setUser(u){
  localStorage.setItem(AUTH_KEY, JSON.stringify(u));
}

function clearUser(){
  localStorage.removeItem(AUTH_KEY);
}

function updateAuthUI(){
  const user = getUser();
  const authBtn = document.getElementById('auth-button');
  const accMenu = document.getElementById('account-menu');
  const accLink = document.getElementById('account-link');
  if(!authBtn) return;
  if(user){
    const name = user.name || user.email || 'Account';
    authBtn.innerHTML = `<span class="auth-icon" aria-hidden="true">👤</span><span class="auth-text">${escapeHtml(name)}</span>`;
    authBtn.setAttribute('aria-expanded','false');
    if(accMenu) accMenu.setAttribute('aria-hidden','true');
    if(accLink) accLink.href = '#account';
  } else {
    authBtn.innerHTML = `<span class="auth-icon" aria-hidden="true">👤</span><span class="auth-text">Login</span>`;
    if(accMenu) accMenu.setAttribute('aria-hidden','true');
  }
}

// small helper to avoid HTML injection from stored names
function escapeHtml(str){
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '<')
    .replace(/>/g, '>')
    .replace(/"/g, '"')
    .replace(/'/g, '&#39;');
}

function initAuth(){
  // auth button opens modal when logged out, toggles menu when logged in
  const authBtn = document.getElementById('auth-button');
  const accMenu = document.getElementById('account-menu');
  const logoutBtn = document.getElementById('logout-btn');
  const loginModal = document.getElementById('login-modal');
  const loginForm = document.getElementById('login-form');
  const loginClose = document.getElementById('login-close');
  const loginCancel = document.getElementById('login-cancel');
  const loginBackdrop = document.getElementById('login-backdrop');

  if(!authBtn) return;
  authBtn.addEventListener('click', ()=>{
    const user = getUser();
    if(user){
      // toggle menu
      const hidden = accMenu.getAttribute('aria-hidden') === 'true';
      accMenu.setAttribute('aria-hidden', String(!hidden));
      authBtn.setAttribute('aria-expanded', String(hidden));
    } else {
      // open login modal
      if(loginModal) loginModal.setAttribute('aria-hidden','false');
      const nameInput = document.getElementById('login-name');
      if(nameInput) nameInput.focus();
    }
  });

  // close modal handlers
  loginClose?.addEventListener('click', ()=>{ loginModal.setAttribute('aria-hidden','true'); });
  loginCancel?.addEventListener('click', ()=>{ loginModal.setAttribute('aria-hidden','true'); });
  loginBackdrop?.addEventListener('click', ()=>{ loginModal.setAttribute('aria-hidden','true'); });

  // logout
  logoutBtn?.addEventListener('click', ()=>{
    if(confirm('Logout?')){ clearUser(); updateAuthUI(); document.getElementById('account-menu').setAttribute('aria-hidden','true'); }
  });

  // login form submit
  loginForm?.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = document.getElementById('login-name').value.trim();
    const email = document.getElementById('login-email').value.trim();
    // password not used in this demo
    if(!name || !email){ alert('Enter name and email'); return; }
    setUser({name,email});
    updateAuthUI();
    if(loginModal) loginModal.setAttribute('aria-hidden','true');
  });

  // initialize
  updateAuthUI();
}

document.addEventListener('DOMContentLoaded', initAuth);

// Top categories interactions: clicking an image button filters products
function initTopCategories(){
  const items = document.querySelectorAll('.cat-item');
  items.forEach(it=>{
    it.addEventListener('click', ()=>{
      const cat = it.getAttribute('data-cat') || 'all';
      const select = document.getElementById('category-filter');

      // Map friendly top-strip categories to actual product filters (by keywords)
      const key = String(cat).toLowerCase();
      let list = [];
      if(key === 'all'){
        list = products;
      } else if(key === 'men'){
        list = products.filter(p => /men|male|gent/i.test(p.category || '') || /men|male|gent/i.test(p.name || ''));
      } else if(key === 'women'){
        list = products.filter(p => /women|female|lady|ladies/i.test(p.category || '') || /women|female|lady/i.test(p.name || ''));
      } else if(key === 'kids'){
        list = products.filter(p => /kid|child|children/i.test(p.category || '') || /kid|child|children/i.test(p.name || ''));
      } else if(key === 'ethnic'){
        list = products.filter(p => /kurta|saree|ethnic|suit|salwar|kurti/i.test(p.category || '') || /kurta|saree|ethnic|suit/i.test(p.name || ''));
      } else if(key === 'western'){
        list = products.filter(p => /jeans|t-?shirt|tshirt|trouser|shirt|western|jacket/i.test(p.category || '') || /jeans|tshirt|trouser|shirt|jacket/i.test(p.name || ''));
      } else if(key === 'bestsellers'){
        list = promoPick(products, 12, 'most-loved');
      } else if(key === 'new'){
        // newest by id (assumes higher id = newer)
        list = [...products].sort((a,b)=>b.id - a.id).slice(0,12);
      } else if(key === 'offers'){
        // simple heuristic: lower priced items as 'offers'
        list = products.filter(p => parseFloat(p.price) && parseFloat(p.price) <= 800);
      } else if(key === 'accessories'){
        list = products.filter(p => /bag|accessor|belt|scarf|cap|hat|jewel|watch/i.test(p.category || '') || /bag|belt|scarf|cap|hat|jewel|watch/i.test(p.name || ''));
      } else {
        // fallback: try to match by substring
        list = products.filter(p => String(p.category || '').toLowerCase().includes(key) || String(p.name || '').toLowerCase().includes(key));
      }

      // If select exists, update it to either the first matching category or 'all'
      if(select){
        const firstCat = list.length === 1 ? list[0].category : null;
        if(firstCat){
          select.value = firstCat;
        } else {
          select.value = 'all';
        }
      }

      // Render the computed list (array) and scroll to products
      renderProducts(list.length ? list : products);
      document.getElementById('products')?.scrollIntoView({behavior:'smooth'});
    });
  });
  // nav 'All' link behavior
  const navAll = document.getElementById('nav-all');
  navAll?.addEventListener('click', (e)=>{
    e.preventDefault();
    const select = document.getElementById('category-filter');
    if(select) select.value = 'all';
    renderProducts('all');
    document.getElementById('products')?.scrollIntoView({behavior:'smooth'});
  });
}

document.addEventListener('DOMContentLoaded', initTopCategories);

/* === Sorting Options === */
let currentSort = 'default';

function sortProducts(list, sortType){
  const sorted = [...list];
  switch(sortType){
    case 'price-low':
      sorted.sort((a,b)=>parseFloat(a.price)-parseFloat(b.price));
      break;
    case 'price-high':
      sorted.sort((a,b)=>parseFloat(b.price)-parseFloat(a.price));
      break;
    case 'newest':
      sorted.sort((a,b)=>b.id - a.id);
      break;
    case 'popular':
      sorted.sort(()=>Math.random() - 0.5);
      break;
  }
  return sorted;
}

function addSortControls(){
  const productControls = document.querySelector('.product-controls');
  if(!productControls) return;
  if(document.querySelector('.sort-controls')) return;
  
  const sortDiv = document.createElement('div');
  sortDiv.className = 'sort-controls';
  sortDiv.innerHTML = `<label>Sort by:</label><select id="sort-select"><option value="default">Featured</option><option value="price-low">Price: Low to High</option><option value="price-high">Price: High to Low</option><option value="newest">Newest</option><option value="popular">Popular</option></select>`;
  productControls.insertBefore(sortDiv, productControls.firstChild);
  
  document.getElementById('sort-select').addEventListener('change', (e)=>{
    currentSort = e.target.value;
    renderProducts(document.getElementById('category-filter')?.value || 'all');
  });
}

/* === Product Ratings System === */
const REVIEWS_KEY = 'ng_reviews_v1';

function loadReviews(){
  try{ return JSON.parse(localStorage.getItem(REVIEWS_KEY)) || {}; }catch(e){ return {}; }
}

function saveReviews(reviews){
  localStorage.setItem(REVIEWS_KEY, JSON.stringify(reviews));
}

function getProductReviews(productId){
  return loadReviews()[productId] || [];
}

function getAverageRating(productId){
  const reviews = getProductReviews(productId);
  if(reviews.length === 0) return null;
  const sum = reviews.reduce((acc, r)=>acc + r.rating, 0);
  return (sum / reviews.length).toFixed(1);
}

function addReview(productId, rating, text, author){
  const reviews = loadReviews();
  if(!reviews[productId]) reviews[productId] = [];
  reviews[productId].unshift({id: Date.now(), rating, text, author: author || 'Anonymous', date: new Date().toISOString().split('T')[0]});
  saveReviews(reviews);
}

function renderStars(rating){
  const full = Math.floor(rating);
  const empty = 5 - full;
  let html = '<div class="stars">';
  for(let i=0; i<full; i++) html += '<span class="star">★</span>';
  for(let i=0; i<empty; i++) html += '<span class="star empty">★</span>';
  html += '</div>';
  return html;
}

function renderProductRating(productId){
  const avg = getAverageRating(productId);
  const reviews = getProductReviews(productId);
  if(!avg) return '';
  return `<div class="product-rating">${renderStars(parseInt(avg))}<span class="count">${avg} (${reviews.length})</span></div>`;
}

// Updated renderProducts with ratings, sorting, quick view + promo badges
function renderProducts(filterCategory='all'){
  const grid = document.getElementById('product-grid');
  grid.innerHTML = '';
  const dict = window.NG_I18N || TRANSLATIONS.en;

  // Accept either a category string or an explicit array of products
  let list;
  if(Array.isArray(filterCategory)){
    list = filterCategory;
  } else {
    // compare case-insensitive and allow partial matches for robustness
    if(filterCategory === 'all') list = products;
    else list = products.filter(p => String(p.category || '').toLowerCase() === String(filterCategory).toLowerCase());
  }

  if(currentSort !== 'default'){
    list = sortProducts(list, currentSort);
  }

  list.forEach(p=>{
    const card = document.createElement('article');
    card.className = 'product';
    const ratingHtml = renderProductRating(p.id);
    const wished = isWishlisted(p.id);

    card.innerHTML = `
      ${availabilityBadgeHTML(p)}
      <a class="product-link" href="product.html?id=${p.id}" aria-label="View ${p.name}">
        <img src="${p.img}" alt="${p.name}">
      </a>

      <button class="quick-view-btn" data-id="${p.id}">Quick View</button>

      <button class="wishlist-btn" data-wishlist-id="${p.id}" aria-label="Add to wishlist" aria-pressed="${wished ? 'true':'false'}" title="Wishlist">
        ${wished ? '♥' : '♡'}
      </button>

      <div class="body">
        <h3>
          <a class="product-title-link" href="product.html?id=${p.id}">${p.name}</a>
        </h3>
        ${ratingHtml}
        <p>${dict['product.desc'] || 'High-quality fabric and finish.'}</p>
        <div class="price">₹${p.price}</div>
        <button class="btn" data-id="${p.id}">${dict['product.add_to_cart'] || 'Add to cart'}</button>
      </div>
    `;

    grid.appendChild(card);
  });

  // wishlist click (delegated)
  document.querySelectorAll('.wishlist-btn').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      e.stopPropagation();
      const id = Number(btn.getAttribute('data-wishlist-id'));
      toggleWishlist(id);
      btn.classList.toggle('active', isWishlisted(id));
      btn.setAttribute('aria-pressed', String(isWishlisted(id)));
      btn.textContent = isWishlisted(id) ? '♥' : '♡';
    });
  });

  document.querySelectorAll('.quick-view-btn').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      e.stopPropagation();
      openQuickView(parseInt(btn.getAttribute('data-id')));
    });
  });

  // Update promo sections based on current filtered list
  renderPromoGrid('promo-most-loved', promoPick(list, 4, 'most-loved'));
  renderPromoGrid('promo-trending', promoPick(list, 4, 'trending'));
  renderPromoGrid('promo-top-picks', promoPick(list, 4, 'top-picks'));
}



/* === Quick View Modal === */
function openQuickView(productId){
  const product = products.find(p=>p.id===productId);
  if(!product) return;
  
  // Recently viewed
  addRecentlyViewed(product.id);
  
  let modal = document.getElementById('quick-view-modal');

  if(!modal){
    modal = document.createElement('div');
    modal.id = 'quick-view-modal';
    modal.className = 'quick-view-modal';
    modal.setAttribute('aria-hidden','true');
    modal.innerHTML = `
      <div class="modal-backdrop" id="quick-view-backdrop"></div>
      <div class="modal-panel">
        <div class="modal-header"><strong>Product Details</strong><button id="quick-view-close" class="btn small" aria-label="Close">✕</button></div>
        <div class="modal-body"></div>
        <div class="modal-actions"><button id="quick-view-add-cart" class="btn">Add to Cart</button><button id="quick-view-close-btn" class="btn secondary">Close</button></div>
      </div>
    `;
    document.body.appendChild(modal);
    document.getElementById('quick-view-close').onclick = ()=> modal.setAttribute('aria-hidden','true');
    document.getElementById('quick-view-backdrop').onclick = ()=> modal.setAttribute('aria-hidden','true');
    document.getElementById('quick-view-close-btn').onclick = ()=> modal.setAttribute('aria-hidden','true');
  }
  
  const ratingHtml = renderProductRating(product.id);
  const reviews = getProductReviews(product.id);
  const dict = window.NG_I18N || TRANSLATIONS.en;
  
  const wished = isWishlisted(product.id);
  modal.querySelector('.modal-body').innerHTML = `
    <div class="product-detail">
      <div class="product-detail-image"><img src="${product.img}" alt="${product.name}"></div>
      <div class="product-detail-info">
        <h2>${product.name}</h2>
        <div class="category">${product.category}</div>
        ${ratingHtml}
        <div class="price">₹${product.price}</div>
        <p class="desc">${dict['product.desc'] || 'High-quality fabric and finish. Perfect for casual and formal occasions.'}</p>
        <button class="btn secondary" id="quick-view-wishlist" type="button" data-wishlist-id="${product.id}">
          ${wished ? '♥ Saved to wishlist' : '♡ Add to wishlist'}
        </button>
      </div>
    </div>
    <div class="reviews-section">
      <h3>Reviews (${reviews.length})</h3>
      ${reviews.slice(0,3).map(r=>`<div class="review-card"><div class="review-header"><span class="review-author">${r.author}</span><span class="review-date">${r.date}</span></div><div class="review-stars">${renderStars(r.rating)}</div><p class="review-text">${r.text}</p></div>`).join('')}
      <div class="review-form">
        <h4>Write a Review</h4>
        <div class="star-rating-input" data-product="${product.id}">
          ${[1,2,3,4,5].map(i=>`<span class="star" data-rating="${i}">★</span>`).join('')}
        </div>
        <textarea id="review-text" placeholder="Share your experience..."></textarea>
        <button class="btn" onclick="submitReview(${product.id})">Submit Review</button>
      </div>
    </div>
  `;

  modal.querySelector('#quick-view-wishlist')?.addEventListener('click', ()=>{
    toggleWishlist(product.id);
    const now = isWishlisted(product.id);
    modal.querySelector('#quick-view-wishlist').innerHTML = now ? '♥ Saved to wishlist' : '♡ Add to wishlist';
  });

  
  modal.querySelectorAll('.star-rating-input .star').forEach(star=>{
    star.addEventListener('click', ()=>{
      const rating = parseInt(star.getAttribute('data-rating'));
      const container = star.closest('.star-rating-input');
      container.querySelectorAll('.star').forEach((s, i)=> s.classList.toggle('selected', i < rating));
      container.dataset.selected = rating;
    });
  });
  
  modal.setAttribute('aria-hidden','false');
}

window.submitReview = function(productId){
  const modal = document.getElementById('quick-view-modal');
  const ratingInput = modal.querySelector('.star-rating-input');
  const rating = parseInt(ratingInput.dataset.selected) || 0;
  const text = modal.querySelector('#review-text').value.trim();
  if(rating === 0 || !text){ alert('Please select rating and write a review'); return; }
  addReview(productId, rating, text, getUser()?.name || 'Customer');
  alert('Thank you for your review!');
  openQuickView(productId);
};

/* === Back to Top Button === */
function initBackToTop(){
  const btn = document.createElement('button');
  btn.className = 'back-to-top';
  btn.setAttribute('aria-label', 'Back to top');
  btn.setAttribute('title', 'Back to top');
  btn.innerHTML = '&#8673;'; // Up arrow entity
  document.body.appendChild(btn);
  btn.style.cssText = 'position:fixed;bottom:24px;right:24px;width:48px;height:48px;border-radius:50%;background:#c0392b;color:#fff;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:1.5rem;box-shadow:0 6px 20px rgba(12,18,24,0.18);opacity:0;visibility:hidden;transition:opacity .3s,visibility .3s,transform .2s;z-index:1100;';

  // Show/hide based on scroll position
  const toggleVisibility = ()=>{
    if(window.scrollY > 300){
      btn.style.opacity = '1';
      btn.style.visibility = 'visible';
    } else {
      btn.style.opacity = '0';
      btn.style.visibility = 'hidden';
    }
  };

  // Scroll to top on click - always works
  btn.onclick = function(){
    window.scrollTo({top: 0, behavior: 'smooth'});
    return false;
  };

  // Listen for scroll
  window.addEventListener('scroll', toggleVisibility);
  // Initial check
  setTimeout(toggleVisibility, 100);
}

/* === Footer Back to Top === */
function initFooterTop(){
  document.querySelectorAll('.footer-top').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      window.scrollTo({top: 0, behavior: 'smooth'});
    });
  });
}

/* FAQ Accordion Toggle */
function initFAQ(){
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item=>{
    const question = item.querySelector('.faq-question');
    question?.addEventListener('click', ()=>{
      // Close other items (optional -accordion behavior)
      faqItems.forEach(other=>{
        if(other !== item) other.classList.remove('active');
      });
      // Toggle current item
      item.classList.toggle('active');
    });
  });
}

/* === Initialize features === */
document.addEventListener('DOMContentLoaded', ()=>{
  addSortControls();
  initBackToTop();
  initFooterTop();
  initFAQ();
  syncWishlistButtons();
  renderWishlistDrawer();
  renderRecentlyViewed();
  initDealStrip();
});


