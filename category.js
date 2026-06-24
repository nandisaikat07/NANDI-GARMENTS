const WHATSAPP_NUMBER = '918250530293';
const CART_KEY = 'ng_cart_v1';
const WISHLIST_KEY = 'ng_department_wishlist_v1';

const departments = {
  women: {
    label: 'Women',
    title: 'Women Collection',
    kicker: 'Ethnic, western, activewear and lounge',
    intro: 'A complete women section with traditional outfits, western pieces, innerwear, sleepwear, outerwear and activewear.',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'Custom'],
    categories: {
      'Traditional & Ethnic Wear': [['Saree', 'Long fabric draped around the body.'], ['Kurti', 'Traditional tunic top worn over bottoms.'], ['Salwar', 'Loose, pleated traditional trousers.'], ['Churidar', 'Tight-fitting trousers with ankle folds.'], ['Lehenga', 'Long, embroidered traditional skirt.'], ['Dupatta', 'Long scarf worn with ethnic outfits.'], ['Anarkali', 'Long, frock-style traditional gown.'], ['Gown', 'Elegant occasion dress with flowing shape.']],
      'Western Tops': [['T-Shirt', 'Casual cotton top.'], ['Blouse', 'Formal or dressy shirt.'], ['Crop Top', 'Short shirt exposing the waist.'], ['Tank Top', 'Sleeveless casual top.'], ['Camisole', 'Thin-strapped top used for layering.'], ['Sweater', 'Knitted top for cold weather.'], ['Hoodie', 'Casual sweatshirt with a hood.']],
      'Western Bottoms': [['Jeans', 'Sturdy denim pants.'], ['Trousers', 'Formal or tailored pants.'], ['Leggings', 'Stretchy, tight-fitting pants.'], ['Palazzo', 'Wide-legged, flowing trousers.'], ['Shorts', 'Short pants ending above knees.'], ['Skirt', 'Bottom garment hanging from the waist.']],
      'One-Piece Outfits': [['Dress', 'One-piece garment of varying lengths.'], ['Jumpsuit', 'Top and pants combined in one.'], ['Playsuit', 'Shorter version of a jumpsuit.'], ['Maxi Dress', 'Ankle-length long dress.']],
      'Lingerie & Undergarments': [['Bra', 'Support wear for the bust.'], ['Panty', 'Standard underpants.'], ['Shapewear', 'Tight undergarments to shape the body.'], ['Stockings', 'Elastic leg coverings.']],
      'Sleepwear & Lounge': [['Nightgown', 'Loose dress for sleeping.'], ['Pyjamas', 'Soft, loose pants for resting.'], ['Robe', 'Loose coat worn over sleepwear.']],
      Outerwear: [['Jacket', 'Short coat for warmth or style.'], ['Coat', 'Long outerwear for cold weather.'], ['Cardigan', 'Knitted sweater opening at the front.'], ['Blazer', 'Formal suit-style jacket.']],
      Activewear: [['Sports Bra', 'High-support bra for exercise.'], ['Yoga Pants', 'Flexible, tight pants for workouts.'], ['Tracksuit', 'Matching jacket and trousers for sports.']]
    }
  },
  men: {
    label: 'Men',
    title: 'Men Collection',
    kicker: 'Formal, casual, ethnic and activewear',
    intro: 'A category-wise men section for everyday dressing, office wear, weddings, winter layers, innerwear and gym needs.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '36', '38', '40', 'Custom'],
    categories: {
      Tops: [['Shirt', 'Button-up formal or casual top.'], ['T-Shirt', 'Casual cotton crewneck or V-neck top.'], ['Polo', 'Casual shirt with a collar and buttons.'], ['Kurta', 'Traditional long tunic top.'], ['Hoodie', 'Casual sweatshirt with a hood.'], ['Sweater', 'Knitted top for cold weather.'], ['Tank Top', 'Sleeveless shirt for workouts or summer.']],
      Bottoms: [['Jeans', 'Sturdy denim pants.'], ['Trousers', 'Tailored pants for formal wear.'], ['Chinos', 'Casual cotton trousers.'], ['Shorts', 'Pants ending at or above the knee.'], ['Joggers', 'Casual, cuffed trousers for lounging or exercise.'], ['Dhoti', 'Traditional draped fabric bottom.'], ['Pajamas', 'Loose, comfortable trousers for sleeping.']],
      'Suits & Formal Wear': [['Blazer', 'Casual suit-style jacket.'], ['Suit', 'Matching jacket and trousers set.'], ['Tuxedo', 'Formal evening suit with satin details.'], ['Waistcoat', 'Sleeveless vest worn over a shirt.'], ['Sherwani', 'Long traditional coat for weddings.']],
      Outerwear: [['Jacket', 'Short outerwear like denim or leather jackets.'], ['Coat', 'Long, heavy outerwear for winters.'], ['Windbreaker', 'Light, water-resistant jacket.']],
      'Innerwear & Loungewear': [['Briefs', 'Standard supportive underwear.'], ['Boxers', 'Loose-fitting underwear shorts.'], ['Trunks', 'Square-cut, tight underwear.'], ['Vest', 'Inner sleeveless undershirt.'], ['Bathrobe', 'Loose gown worn after showering.']],
      Activewear: [['Tracksuit', 'Matching jacket and pants for sports.'], ['Jersey', 'Sports team shirt.'], ['Gym Shorts', 'Lightweight shorts for exercising.'], ['Compression Tee', 'Stretch workout top for training.']]
    }
  },
  kids: {
    label: 'Kids',
    title: 'Kids Collection',
    kicker: 'Baby, toddler, school, party and play',
    intro: 'Comfort-first products for babies, boys and girls with soft fabrics, easy sizes and family occasion sets.',
    sizes: ['0-3M', '3-6M', '1-2Y', '3-4Y', '5-6Y', '7-8Y', '9-10Y', '11-12Y'],
    categories: {
      'Baby & Toddler Wear': [['Onesie', 'One-piece bodysuit with snaps at the crotch.'], ['Romper', 'One-piece outfit with shorts or pants.'], ['Sleepsuit', 'Full-body pajamas with feet attached.'], ['Bib', 'Cloth tied around the neck to catch spills.'], ['Booties', 'Soft fabric shoes for infants.'], ['Swaddle', 'Wrap used to snugly tuck newborns.']],
      'Tops Boys & Girls': [['T-Shirt', 'Casual everyday cotton shirt.'], ['Polo', 'Smart-casual shirt with a collar.'], ['Shirt', 'Button-up formal top.'], ['Frock', 'Traditional one-piece dress for young girls.'], ['Kurti', 'Small traditional tunic top.'], ['Kurta', 'Traditional knee-length tunic for boys.']],
      'Bottoms Boys & Girls': [['Shorts', 'Comfortable pants ending above the knee.'], ['Jeans', 'Durable denim pants.'], ['Leggings', 'Soft, stretchy pants popular for girls.'], ['Trackpants', 'Soft pants for playtime and sports.'], ['Skirt', 'Garment hanging from the waist.'], ['Dhoti Pants', 'Loose, draped traditional bottoms.']],
      'One-Piece & Sets': [['Dress', 'One-piece outfit for girls.'], ['Jumpsuit', 'Top and pants combined in one.'], ['Dungarees', 'Trousers with shoulder straps worn over a shirt.'], ['Lehenga Choli', 'Traditional skirt and blouse set for girls.'], ['Sherwani Set', 'Traditional formal suit for boys.'], ['Co-ord Set', 'Matching top and bottom set.']],
      'Outerwear & Winter': [['Hoodie', 'Warm sweatshirt with a hood.'], ['Sweater', 'Knitted top for cold days.'], ['Jacket', 'Light denim or windbreaker layer.'], ['Raincoat', 'Waterproof coat for monsoon days.']],
      'Innerwear & Sleepwear': [['Pyjamas', 'Soft matching top and bottom set for sleeping.'], ['Vest', 'Inner cotton undershirt.'], ['Briefs', 'Standard underwear.'], ['Socks', 'Cotton foot coverings.']]
    }
  },
  home: {
    label: 'Home',
    title: 'Home Furnishing',
    kicker: 'Bedding, curtains, towels and linens',
    intro: 'A home textile section for bedsheets, pillow covers, curtains, towels, mats, table linen and cushion styling.',
    sizes: ['Single', 'Double', 'Queen', 'King', 'Window', 'Door', 'Custom'],
    categories: {
      'Bedding & Bedsheets': [['Bedsheet', 'Flat or fitted fabric sheet to cover the mattress.'], ['Pillowcase', 'Protective fabric covers for sleeping pillows.'], ['Blanket', 'Single-layer woven fabric used for warmth.'], ['Quilt / Comforter', 'Thick, insulated padded blanket.'], ['Duvet & Cover', 'A thick insert with removable fabric case.'], ['Dohar', 'Light, breathable cotton blanket for summer.'], ['Mattress Protector', 'Waterproof or padded layer placed under the sheet.']],
      'Curtains & Window': [['Curtain', 'Hanging fabric panels used for privacy and light control.'], ['Sheer Curtain', 'Thin fabric that lets natural light filter in.'], ['Blackout Curtain', 'Heavy lined drape designed to block sunlight.'], ['Blinds', 'Window coverings that roll up or tilt.'], ['Valance', 'Short decorative fabric drape at the top of a window.'], ['Curtain Rods & Rings', 'Hardware used to hang curtains.']],
      'Related Home Linens': [['Bath Towel', 'Large absorbent cloth for drying after a shower.'], ['Hand Towel', 'Medium towel kept near sinks.'], ['Face Towel / Washcloth', 'Small square towel for washing the face.'], ['Bath Mat', 'Absorbent floor mat placed outside showers.'], ['Tablecloth', 'Decorative and protective dining table cover.'], ['Cushion Cover', 'Removable decorative case for throw pillows.'], ['Runner', 'Long decorative strip for tables or beds.']]
    }
  }
};

const colorSets = {
  women: ['#d84c83', '#f7b267', '#6a4c93'],
  men: ['#2563eb', '#14b8a6', '#111827'],
  kids: ['#f59e0b', '#22c55e', '#ec4899'],
  home: ['#0f766e', '#d97706', '#7c3aed']
};

const departmentImages = {
  women: [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWAd5GcgnSmaVPoty-CJKsl5bzs9ShGoXv6lEEI8GELw&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnkRhVNXUGabskldV_2BX_7qcwMRwOYaS-svK76r3Nag&s=10',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyJgtaowjeqpCNjgeCgAU988_Hx53D61I0CPMlPruAgQ&s=10'
  ],
  home: [
    'https://chhaviindia.com/cdn/shop/files/1_9fce082d-96f5-4245-86af-fee6959cdcdb.jpg?v=1683116475&width=1946',
    'https://houseofbedding.store/wp-content/uploads/2026/03/79_result-800x800.webp',
    'https://www.troost.in/cdn/shop/files/ARP04246.jpg?v=1713001363&width=2048'
  ],
  men: [
    'https://img.magnific.com/free-photo/serious-young-man-standing-isolated-grey_171337-10386.jpg',
    'https://images.unsplash.com/photo-1516257984-b1b4d707412e?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1lbnMlMjBmYXNoaW9ufGVufDB8fDB8fHww',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp-5hj3uWlASeH-CV5PY61KtLFW71rCkDcWCg5KkWmXw&s=10'
  ],
  kids: [
    'https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/2026/FEBRUARY/10/Spq6UgSv_ecf4a1a84f1b41c9ad4d45ba6029b7ce.jpg',
    'https://www.wishkaro.in/cdn/shop/files/WhatsApp_Image_2025-07-06_at_10.07.49_PM.jpg?v=1757157322',
    'https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/2025/MAY/24/dKaAJtCp_ab1df72e14cb43339fbfd131c8688974.jpg'
  ]
};

let activeSection = new URLSearchParams(location.search).get('section') || 'women';
if(!departments[activeSection]) activeSection = 'women';
let activeCategory = 'all';
let searchTerm = '';
let cart = loadJSON(CART_KEY, {});
let wishlist = loadJSON(WISHLIST_KEY, []);

function loadJSON(key, fallback){
  try{ return JSON.parse(localStorage.getItem(key)) || fallback; }catch(e){ return fallback; }
}

function saveJSON(key, value){
  localStorage.setItem(key, JSON.stringify(value));
}

function productsFor(sectionKey){
  const department = departments[sectionKey];
  let index = 0;
  return Object.entries(department.categories).flatMap(([category, items])=>items.map(([name, description])=>{
    index += 1;
    const base = sectionKey === 'home' ? 349 : sectionKey === 'kids' ? 299 : sectionKey === 'men' ? 499 : 399;
    const price = base + (index * 70) + (category.length % 5) * 45;
    const discount = 10 + (index % 6) * 5;
    return {
      id: sectionId(sectionKey, category, name),
      section: sectionKey,
      category,
      name,
      description,
      price,
      oldPrice: Math.round(price * (100 + discount) / 100),
      discount,
      rating: (4.1 + (index % 8) / 10).toFixed(1),
      sizes: department.sizes,
      image: imageFor(sectionKey, index),
      colors: colorSets[sectionKey]
    };
  }));
}

function imageFor(sectionKey, index){
  const images = departmentImages[sectionKey];
  if(!images?.length) return '';
  return images[(index - 1) % images.length];
}

function sectionId(section, category, name){
  const raw = `${section}-${category}-${name}`;
  let hash = 0;
  for(let i = 0; i < raw.length; i += 1) hash = ((hash << 5) - hash) + raw.charCodeAt(i);
  return 900000 + Math.abs(hash % 90000);
}

function money(value){
  return `Rs.${Number(value).toLocaleString('en-IN')}`;
}

function renderPage(){
  const department = departments[activeSection];
  document.title = `${department.title} | Nandi Garments`;
  document.body.dataset.department = activeSection;
  renderDepartmentVisual(department);
  document.getElementById('department-kicker').textContent = department.kicker;
  document.getElementById('department-title').textContent = department.title;
  document.getElementById('department-intro').textContent = department.intro;
  document.getElementById('department-visual-label').textContent = department.label;
  document.getElementById('department-count').textContent = productsFor(activeSection).length;
  document.getElementById('department-whatsapp').href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi Nandi Garments, I need help ordering from ${department.title}.`)}`;
  document.querySelectorAll('[data-section-link]').forEach(link=>{
    link.classList.toggle('active', link.dataset.sectionLink === activeSection);
  });
  renderFilters();
  renderProducts();
  renderCart();
  renderWishlist();
}

function renderDepartmentVisual(department){
  const visual = document.querySelector('.department-visual');
  const images = departmentImages[activeSection];
  if(!visual) return;

  if(images?.length){
    visual.classList.add('has-photos');
    visual.innerHTML = `
      ${images.map((src, index)=>`
        <figure class="department-hero-photo hero-photo-${index + 1}">
          <img src="${src}" alt="${department.label} fashion ${index + 1}" loading="eager">
        </figure>
      `).join('')}
      <div class="department-visual-label" id="department-visual-label">${department.label}</div>
    `;
    return;
  }

  visual.classList.remove('has-photos');
  visual.innerHTML = `
    <span class="fold fold-one"></span>
    <span class="fold fold-two"></span>
    <span class="fold fold-three"></span>
    <span class="fold fold-four"></span>
    <div class="department-visual-label" id="department-visual-label">${department.label}</div>
  `;
}

function renderFilters(){
  const categories = Object.keys(departments[activeSection].categories);
  const panel = document.getElementById('department-filter-list');
  panel.innerHTML = `<button class="active" type="button" data-filter="all">All Products</button>` +
    categories.map(category=>`<button type="button" data-filter="${category}">${category}</button>`).join('');
  panel.querySelectorAll('button').forEach(button=>{
    button.addEventListener('click', ()=>{
      activeCategory = button.dataset.filter;
      panel.querySelectorAll('button').forEach(item=>item.classList.toggle('active', item === button));
      renderProducts();
    });
  });
}

function filteredProducts(){
  return productsFor(activeSection).filter(product=>{
    const categoryMatch = activeCategory === 'all' || product.category === activeCategory;
    const searchMatch = !searchTerm || `${product.name} ${product.description} ${product.category}`.toLowerCase().includes(searchTerm);
    return categoryMatch && searchMatch;
  });
}

function renderProducts(){
  const products = filteredProducts();
  const grid = document.getElementById('department-grid');
  document.getElementById('department-results-title').textContent = activeCategory === 'all' ? 'All categories' : activeCategory;
  document.getElementById('department-results-subtitle').textContent = `${products.length} products ready with sizes, offers, cart and wishlist.`;
  grid.innerHTML = products.map(productCard).join('');
  grid.querySelectorAll('[data-size]').forEach(button=>{
    button.addEventListener('click', ()=>{
      const card = button.closest('[data-product-id]');
      card.querySelectorAll('[data-size]').forEach(item=>item.classList.remove('active'));
      button.classList.add('active');
      card.dataset.selectedSize = button.dataset.size;
    });
  });
  grid.querySelectorAll('[data-add-cart]').forEach(button=>button.addEventListener('click', ()=>addToCart(Number(button.dataset.addCart))));
  grid.querySelectorAll('[data-wishlist]').forEach(button=>button.addEventListener('click', ()=>toggleWishlist(Number(button.dataset.wishlist))));
  grid.querySelectorAll('[data-quick-view]').forEach(button=>button.addEventListener('click', ()=>openQuickView(Number(button.dataset.quickView))));
}

function productCard(product){
  const swatches = product.colors.map(color=>`<span style="background:${color}"></span>`).join('');
  const sizes = product.sizes.slice(0, 6).map((size, index)=>`<button type="button" data-size="${size}" class="${index === 0 ? 'active' : ''}">${size}</button>`).join('');
  const wished = wishlist.includes(product.id);
  return `
    <article class="department-product-card" data-product-id="${product.id}" data-selected-size="${product.sizes[0]}">
      <div class="department-product-media">
        ${product.image ? `<img class="department-product-photo" src="${product.image}" alt="${product.name}" loading="lazy">` : '<div class="cloth-preview" aria-hidden="true"><span></span><span></span><span></span></div>'}
        <button class="department-wishlist-btn ${wished ? 'active' : ''}" type="button" data-wishlist="${product.id}" aria-label="${wished ? 'Remove from wishlist' : 'Add to wishlist'}: ${product.name}" aria-pressed="${wished ? 'true' : 'false'}" title="${wished ? 'Saved to wishlist' : 'Add to wishlist'}">
          <span class="material-symbols-rounded" aria-hidden="true">${wished ? 'favorite' : 'favorite'}</span>
        </button>
        <button class="department-quick-view-btn" type="button" data-quick-view="${product.id}" aria-label="Quick view ${product.name}">
          <span class="material-symbols-rounded" aria-hidden="true">visibility</span>
          <span>Quick View</span>
        </button>
      </div>
      <div class="department-product-body">
        <div class="department-product-meta"><span>${product.category}</span><strong>${product.rating} star</strong></div>
        <h4>${product.name}</h4>
        <p>${product.description}</p>
        <div class="department-price-row"><strong>${money(product.price)}</strong><del>${money(product.oldPrice)}</del><span>${product.discount}% off</span></div>
        <div class="department-swatches" aria-label="Available colors">${swatches}</div>
        <div class="department-size-row" aria-label="Choose size">${sizes}</div>
        <div class="department-card-actions">
          <button class="btn" type="button" data-add-cart="${product.id}">Add to Cart</button>
          <a class="btn secondary" href="${whatsappUrl(product)}" target="_blank" rel="noopener">Place Order</a>
        </div>
      </div>
    </article>`;
}

function findProduct(id){
  return Object.keys(departments).flatMap(productsFor).find(product=>product.id === Number(id));
}

function addToCart(id, sizeOverride){
  const product = findProduct(id);
  const card = document.querySelector(`[data-product-id="${id}"]`);
  const size = sizeOverride || card?.dataset.selectedSize || product.sizes[0];
  if(cart[id]) cart[id].qty += 1;
  else cart[id] = { id: product.id, name: `${product.name} (${size})`, price: product.price, img: product.image || 'nandi-logo.png', qty: 1 };
  saveJSON(CART_KEY, cart);
  renderCart();
  document.getElementById('department-cart-drawer').setAttribute('aria-hidden', 'false');
}

function toggleWishlist(id){
  wishlist = wishlist.includes(id) ? wishlist.filter(item=>item !== id) : [id, ...wishlist];
  saveJSON(WISHLIST_KEY, wishlist);
  renderProducts();
  renderWishlist();
}

function productAngles(product){
  const src = product.image || 'nandi-logo.png';
  return [
    { label: 'Front', className: 'angle-front', src },
    { label: 'Side', className: 'angle-side', src },
    { label: 'Back', className: 'angle-back', src },
    { label: 'Detail', className: 'angle-detail', src }
  ];
}

function ensureQuickViewModal(){
  let modal = document.getElementById('department-quick-view-modal');
  if(modal) return modal;

  modal = document.createElement('div');
  modal.id = 'department-quick-view-modal';
  modal.className = 'department-quick-modal';
  modal.setAttribute('aria-hidden', 'true');
  modal.innerHTML = `
    <div class="department-quick-backdrop" data-quick-close></div>
    <div class="department-quick-panel" role="dialog" aria-modal="true" aria-labelledby="department-quick-title">
      <button class="department-quick-close" type="button" data-quick-close aria-label="Close quick view">x</button>
      <div class="department-quick-content"></div>
    </div>
  `;
  document.body.appendChild(modal);

  modal.addEventListener('click', event=>{
    if(event.target.closest('[data-quick-close]')) closeQuickView();
  });

  document.addEventListener('keydown', event=>{
    if(event.key === 'Escape') closeQuickView();
  });

  return modal;
}

function closeQuickView(){
  document.getElementById('department-quick-view-modal')?.setAttribute('aria-hidden', 'true');
}

function openQuickView(id){
  const product = findProduct(id);
  if(!product) return;

  const modal = ensureQuickViewModal();
  const angles = productAngles(product);
  const wished = wishlist.includes(product.id);
  const swatches = product.colors.map(color=>`<span style="background:${color}"></span>`).join('');
  const sizes = product.sizes.slice(0, 6).map((size, index)=>`<button type="button" data-quick-size="${size}" class="${index === 0 ? 'active' : ''}">${size}</button>`).join('');

  modal.querySelector('.department-quick-content').innerHTML = `
    <div class="department-quick-gallery" data-current-angle="${angles[0].className}">
      <div class="department-quick-main ${angles[0].className}">
        <img src="${angles[0].src}" alt="${product.name} ${angles[0].label} view">
        <span>${angles[0].label} View</span>
      </div>
      <div class="department-quick-thumbs" aria-label="Product angle views">
        ${angles.map((angle, index)=>`
          <button type="button" class="${index === 0 ? 'active' : ''}" data-angle-index="${index}">
            <img src="${angle.src}" alt="${angle.label} view">
            <span>${angle.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
    <div class="department-quick-info">
      <div class="department-product-meta"><span>${product.category}</span><strong>${product.rating} star</strong></div>
      <h3 id="department-quick-title">${product.name}</h3>
      <p>${product.description}</p>
      <div class="department-price-row"><strong>${money(product.price)}</strong><del>${money(product.oldPrice)}</del><span>${product.discount}% off</span></div>
      <div class="department-swatches" aria-label="Available colors">${swatches}</div>
      <div class="department-size-row department-quick-sizes" aria-label="Choose size">${sizes}</div>
      <div class="department-quick-actions">
        <button class="btn" type="button" data-quick-add-cart="${product.id}">Add to Cart</button>
        <button class="btn secondary department-quick-wishlist ${wished ? 'active' : ''}" type="button" data-quick-wishlist="${product.id}" aria-pressed="${wished ? 'true' : 'false'}">
          <span class="material-symbols-rounded" aria-hidden="true">favorite</span>
          <span>${wished ? 'Saved' : 'Wishlist'}</span>
        </button>
        <a class="btn secondary" href="${whatsappUrl(product)}" target="_blank" rel="noopener">Place Order</a>
      </div>
    </div>
  `;

  modal.querySelectorAll('[data-angle-index]').forEach(button=>{
    button.addEventListener('click', ()=>{
      const angle = angles[Number(button.dataset.angleIndex)];
      const main = modal.querySelector('.department-quick-main');
      main.className = `department-quick-main ${angle.className}`;
      main.querySelector('img').src = angle.src;
      main.querySelector('img').alt = `${product.name} ${angle.label} view`;
      main.querySelector('span').textContent = `${angle.label} View`;
      modal.querySelectorAll('[data-angle-index]').forEach(item=>item.classList.toggle('active', item === button));
    });
  });

  modal.querySelectorAll('[data-quick-size]').forEach(button=>{
    button.addEventListener('click', ()=>{
      modal.querySelectorAll('[data-quick-size]').forEach(item=>item.classList.remove('active'));
      button.classList.add('active');
    });
  });

  modal.querySelector('[data-quick-add-cart]')?.addEventListener('click', ()=>{
    const selectedSize = modal.querySelector('[data-quick-size].active')?.dataset.quickSize;
    addToCart(product.id, selectedSize);
  });
  modal.querySelector('[data-quick-wishlist]')?.addEventListener('click', ()=>{
    toggleWishlist(product.id);
    openQuickView(product.id);
  });

  modal.setAttribute('aria-hidden', 'false');
}

function renderCart(){
  const items = Object.values(cart);
  const count = items.reduce((sum, item)=>sum + item.qty, 0);
  const total = items.reduce((sum, item)=>sum + item.price * item.qty, 0);
  document.getElementById('cart-count').textContent = count;
  document.getElementById('cart-total').textContent = money(total);
  document.getElementById('cart-items').innerHTML = items.length ? items.map(item=>`
    <div class="cart-item">
      <img src="${item.img || 'nandi-logo.png'}" alt="${item.name}">
      <div class="info"><strong>${item.name}</strong><div class="meta">${money(item.price)} x ${item.qty}</div></div>
      <div class="qty"><button class="btn small" type="button" data-cart-dec="${item.id}">-</button><button class="btn small" type="button" data-cart-inc="${item.id}">+</button></div>
    </div>`).join('') : '<div class="note">Your cart is empty.</div>';
  document.querySelectorAll('[data-cart-inc]').forEach(button=>button.addEventListener('click', ()=>changeQty(button.dataset.cartInc, 1)));
  document.querySelectorAll('[data-cart-dec]').forEach(button=>button.addEventListener('click', ()=>changeQty(button.dataset.cartDec, -1)));
}

function changeQty(id, delta){
  if(!cart[id]) return;
  cart[id].qty += delta;
  if(cart[id].qty <= 0) delete cart[id];
  saveJSON(CART_KEY, cart);
  renderCart();
}

function renderWishlist(){
  document.getElementById('department-wishlist-count').textContent = wishlist.length;
  const items = wishlist.map(findProduct).filter(Boolean);
  document.getElementById('department-wishlist-items').innerHTML = items.length ? items.map(item=>`
    <div class="wishlist-item">
      <img src="${item.image || 'nandi-logo.png'}" alt="${item.name}">
      <div class="info"><strong>${item.name}</strong><div class="meta">${item.category} | ${money(item.price)}</div></div>
      <div class="actions"><button class="move-to-cart" type="button" data-wish-cart="${item.id}">Move to Cart</button></div>
    </div>`).join('') : '<div class="note">No saved items yet.</div>';
  document.querySelectorAll('[data-wish-cart]').forEach(button=>button.addEventListener('click', ()=>addToCart(Number(button.dataset.wishCart))));
}

function whatsappUrl(product){
  const text = `Hi Nandi Garments, I want to order ${product.name} from ${departments[product.section].title}. Please confirm size, price and availability.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

document.getElementById('department-search').addEventListener('input', (event)=>{
  searchTerm = event.target.value.trim().toLowerCase();
  renderProducts();
});
document.getElementById('department-cart-toggle').addEventListener('click', ()=>document.getElementById('department-cart-drawer').setAttribute('aria-hidden', 'false'));
document.getElementById('department-cart-close').addEventListener('click', ()=>document.getElementById('department-cart-drawer').setAttribute('aria-hidden', 'true'));
document.getElementById('department-wishlist-toggle').addEventListener('click', ()=>document.getElementById('department-wishlist-drawer').setAttribute('aria-hidden', 'false'));
document.getElementById('department-wishlist-close').addEventListener('click', ()=>document.getElementById('department-wishlist-drawer').setAttribute('aria-hidden', 'true'));

renderPage();
