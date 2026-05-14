"use strict";

// Static product data keeps the site upload-ready for GitHub Pages.
const PRODUCTS = [
  {
    id: "zs-royal-brocade-maroon",
    name: "Royal Brocade Silk Saree - Wine Maroon",
    price: 1299,
    original: 11999,
    badge: "-89% New Arrival",
    tags: ["new", "trending", "festive", "weaving", "brocade", "zari-work"],
    fabric: "Silk brocade",
    colors: ["Wine Maroon", "Antique Gold", "Deep Plum"],
    images: [
      "https://images.unsplash.com/photo-1641699862936-3626f6fd264c?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1630443357238-d4e235563745?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1610209843753-b7bd6c6ec1e2?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1532664189809-e02133fee698?auto=format&fit=crop&w=900&q=85"
    ],
    description: "A rich brocade silk saree with luminous zari-inspired motifs, a grand pallu, and a regal drape for weddings, receptions, and festive evenings."
  },
  {
    id: "zs-kanjivaram-emerald",
    name: "Kanjivaram Inspired Silk Saree - Emerald Gold",
    price: 1499,
    original: 12999,
    badge: "-88% New Arrival",
    tags: ["new", "festive", "weaving", "kanjivaram", "silk-borderline", "zari-butti"],
    fabric: "Soft silk",
    colors: ["Emerald", "Temple Gold", "Peacock Blue"],
    images: [
      "https://images.unsplash.com/photo-1610209843753-b7bd6c6ec1e2?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1709912305741-3bb372689f0e?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1549417229-aa67d3263c4f?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1631983097767-099c77bf880d?auto=format&fit=crop&w=900&q=85"
    ],
    description: "Temple-border styling meets a modern soft-silk finish. The body feels light, while the border keeps the traditional look crisp and festive."
  },
  {
    id: "zs-floral-printed-rose",
    name: "Modern Floral Printed Silk Saree - Rose Beige",
    price: 999,
    original: 8999,
    badge: "-89% New Arrival",
    tags: ["new", "printed", "modern-print", "flowers", "trending"],
    fabric: "Crepe silk",
    colors: ["Rose Beige", "Blush Pink", "Ivory"],
    images: [
      "https://images.unsplash.com/photo-1669192324363-1ae5412cce34?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1732544893739-cf939e0ae81d?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1631137826736-a803bd2f79a0?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1733423096251-0d7703972e96?auto=format&fit=crop&w=900&q=85"
    ],
    description: "A graceful printed silk saree with painterly floral details and an easy drape for brunches, gifting, and lighter celebration days."
  },
  {
    id: "zs-contrast-pallu-sapphire",
    name: "Contrast Pallu Silk Saree - Sapphire Ruby",
    price: 1199,
    original: 10999,
    badge: "-89% New Arrival",
    tags: ["trending", "weaving", "contrast", "contrast-pallu", "festive"],
    fabric: "Art silk",
    colors: ["Sapphire Ruby", "Royal Blue", "Garnet"],
    images: [
      "https://images.unsplash.com/photo-1532664189809-e02133fee698?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1641699862936-3626f6fd264c?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1709912305741-3bb372689f0e?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1630443357238-d4e235563745?auto=format&fit=crop&w=900&q=85"
    ],
    description: "A bold contrast pallu saree designed to photograph beautifully, finished with a sheen that catches evening light."
  },
  {
    id: "zs-kalamkari-ivory",
    name: "Kalamkari Print Silk Saree - Ivory Crimson",
    price: 1099,
    original: 9999,
    badge: "-89% New Arrival",
    tags: ["printed", "kalamkari", "pallu-prints", "new"],
    fabric: "Silk blend",
    colors: ["Ivory Crimson", "Charcoal", "Burnt Sienna"],
    images: [
      "https://images.unsplash.com/photo-1732544893739-cf939e0ae81d?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1669192324363-1ae5412cce34?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1631137826736-a803bd2f79a0?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1549417229-aa67d3263c4f?auto=format&fit=crop&w=900&q=85"
    ],
    description: "Heritage-inspired Kalamkari patterning on a lightweight silk blend, made for artful festive styling."
  },
  {
    id: "zs-zari-butti-saffron",
    name: "Zari Butti Silk Saree - Saffron Gold",
    price: 1399,
    original: 11999,
    badge: "-88% New Arrival",
    tags: ["weaving", "zari-butti", "zari-work", "traditional-mysore-silks", "festive"],
    fabric: "Silk with zari butti",
    colors: ["Saffron Gold", "Copper", "Marigold"],
    images: [
      "https://images.unsplash.com/photo-1631983097767-099c77bf880d?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1610209843753-b7bd6c6ec1e2?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1549417229-aa67d3263c4f?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1709912305741-3bb372689f0e?auto=format&fit=crop&w=900&q=85"
    ],
    description: "A warm saffron silk saree with delicate butti detailing and a festive gold-toned finish."
  },
  {
    id: "zs-hand-painted-lilac",
    name: "Hand Painted Design Silk Saree - Lilac Wine",
    price: 1199,
    original: 10499,
    badge: "-89% New Arrival",
    tags: ["printed", "hand-painted", "modern-print", "trending"],
    fabric: "Soft crepe silk",
    colors: ["Lilac Wine", "Mauve", "Lotus Pink"],
    images: [
      "https://images.unsplash.com/photo-1631137826736-a803bd2f79a0?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1669192324363-1ae5412cce34?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1733423096251-0d7703972e96?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1732544893739-cf939e0ae81d?auto=format&fit=crop&w=900&q=85"
    ],
    description: "A soft, feminine printed saree with hand-painted styling and a refined wine-toned pallu."
  },
  {
    id: "zs-trendy-dress-gold",
    name: "Silk Festive Dress Set - Antique Gold",
    price: 1599,
    original: 13999,
    badge: "-89% New Arrival",
    tags: ["dresses", "trending", "festive"],
    fabric: "Silk blend dress set",
    colors: ["Antique Gold", "Cocoa", "Black Gold"],
    images: [
      "https://images.unsplash.com/photo-1709912305741-3bb372689f0e?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1641699862936-3626f6fd264c?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1610209843753-b7bd6c6ec1e2?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1532664189809-e02133fee698?auto=format&fit=crop&w=900&q=85"
    ],
    description: "A dress set for shoppers who want silk-inspired festive texture with faster styling and an easy fit."
  }
];

const COLLECTIONS = {
  festive: ["Festive Sale", "Rich occasionwear with dramatic pallu, luminous borders, and bundle savings."],
  new: ["New Arrivals", "Fresh silk sarees, ornate brocades, printed pallus, and festive borders ready for this season."],
  trending: ["Trending", "Customer-favorite silk styles in deep festive colors and easy drapes."],
  weaving: ["Weaving", "Explore brocade, zari, contrast pallu, and traditional weaving-inspired edits."],
  printed: ["Printed", "Painterly florals, Kalamkari-inspired motifs, and modern printed silk looks."],
  brocade: ["Silks in Brocade", "Opulent brocade pieces with rich motifs and celebratory shine."],
  kanjivaram: ["Silk in Kanjivaram", "Temple border styling and heritage-inspired silk sarees."],
  contrast: ["Silk in Contrast", "Bold color pairings built around striking borders and pallus."],
  "zari-butti": ["Silk with Zari Butti", "Tiny butti details and festive gold-toned accents."],
  "zari-work": ["Silk with Zari Work", "Ornate zari-style shine for receptions and ceremonies."],
  "contrast-pallu": ["Silk with Contrast Pallu", "Statement pallus with memorable color blocking."],
  "traditional-mysore-silks": ["Traditional Mysore Silks", "Classic silk saree silhouettes with graceful heritage cues."],
  "hand-painted": ["Hand Painted Design", "Artful printed sarees with brushstroke-inspired motifs."],
  "modern-print": ["Modern Print", "Contemporary prints made for light festive styling."],
  kalamkari: ["Kalamkari Prints", "Heritage art motifs reimagined for modern wardrobes."],
  flowers: ["Flowers Prints", "Floral silk sarees in soft colors and elegant repeats."],
  "pallu-prints": ["Pallu Prints", "Printed pallus that make the drape the focal point."],
  dresses: ["Trendy Dresses", "Silk-inspired festive dresses and ready-to-style pieces."],
  "silk-borderline": ["Silk Borderline", "Border-led sarees with refined festive finishing."]
};

const CART_KEY = "zenithsui_cart";
let selectedDetailColor = "";
let toastTimer;

document.addEventListener("DOMContentLoaded", () => {
  initHeader();
  initMobileMenu();
  initDrawers();
  initSearch();
  initNewsletter();
  renderHomeProducts();
  renderProductsPage();
  renderDetailPage();
  updateCartUI();
  document.addEventListener("click", handleDocumentClick);
});

function formatMoney(value) {
  return `Rs. ${Number(value).toLocaleString("en-IN")}`;
}

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch {
    return [];
  }
}

function setCart(items) {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
}

function getProduct(id) {
  return PRODUCTS.find((product) => product.id === id) || PRODUCTS[0];
}

function productMatches(product, token) {
  if (!token) return true;
  return product.tags.includes(token);
}

function handleDocumentClick(event) {
  const addButton = event.target.closest("[data-add-to-cart]");
  if (addButton) {
    event.preventDefault();
    const id = addButton.dataset.addToCart;
    const detailRoot = addButton.closest("[data-product-detail]");
    const qtyInput = detailRoot?.querySelector("[data-qty-input]");
    const qty = qtyInput ? Math.max(1, Number(qtyInput.value) || 1) : 1;
    const color = selectedDetailColor || getProduct(id).colors[0];
    addToCart(id, color, qty);
  }

  const qtyButton = event.target.closest("[data-qty]");
  if (qtyButton) {
    const input = document.querySelector("[data-qty-input]");
    if (!input) return;
    const change = qtyButton.dataset.qty === "plus" ? 1 : -1;
    input.value = Math.max(1, Number(input.value || 1) + change);
  }

  const cartQty = event.target.closest("[data-cart-qty]");
  if (cartQty) {
    updateCartItem(cartQty.dataset.id, cartQty.dataset.color, Number(cartQty.dataset.cartQty));
  }

  const remove = event.target.closest("[data-remove-item]");
  if (remove) {
    removeCartItem(remove.dataset.id, remove.dataset.color);
  }
}

function productCard(product) {
  const savings = Math.round(((product.original - product.price) / product.original) * 100);
  return `
    <article class="product-card">
      <div class="product-card__media">
        <span class="badge">${product.badge}</span>
        <a href="product-detail.html?id=${product.id}" aria-label="${product.name}">
          <img src="${product.images[0]}" alt="${product.name}" loading="lazy">
        </a>
        <button class="quick-add button button--gold" type="button" data-add-to-cart="${product.id}">Add to Cart</button>
      </div>
      <div class="product-card__body">
        <a class="product-card__title" href="product-detail.html?id=${product.id}">${product.name}</a>
        <div class="price-row">
          <span class="sale-price">${formatMoney(product.price)}</span>
          <span class="compare-price">${formatMoney(product.original)}</span>
          <span class="save-pct">Save ${savings}%</span>
        </div>
        <div class="product-card__meta">Buy More Save More</div>
      </div>
    </article>
  `;
}

function renderHomeProducts() {
  const grid = document.querySelector("[data-home-products]");
  if (!grid) return;
  grid.innerHTML = PRODUCTS.filter((product) => product.tags.includes("trending")).slice(0, 4).map(productCard).join("");
}

function renderProductsPage() {
  const grid = document.querySelector("[data-products-grid]");
  if (!grid) return;

  const params = new URLSearchParams(window.location.search);
  const collection = params.get("collection") || "new";
  const checkboxes = [...document.querySelectorAll("[data-filter]")];
  const sort = document.querySelector("[data-sort]");
  const clear = document.querySelector("[data-clear-filters]");
  const title = document.querySelector("[data-collection-title]");
  const copy = document.querySelector("[data-collection-copy]");
  const count = document.querySelector("[data-product-count]");

  if (COLLECTIONS[collection]) {
    title.textContent = COLLECTIONS[collection][0];
    copy.textContent = COLLECTIONS[collection][1];
  }

  checkboxes.forEach((box) => {
    if (box.value === collection) box.checked = true;
    box.addEventListener("change", draw);
  });
  sort?.addEventListener("change", draw);
  clear?.addEventListener("click", () => {
    checkboxes.forEach((box) => { box.checked = false; });
    draw();
  });

  function draw() {
    const active = checkboxes.filter((box) => box.checked).map((box) => box.value);
    let items = PRODUCTS.filter((product) => !active.length || active.some((token) => productMatches(product, token)));

    const sortValue = sort?.value || "featured";
    if (sortValue === "price-low") items = [...items].sort((a, b) => a.price - b.price);
    if (sortValue === "price-high") items = [...items].sort((a, b) => b.price - a.price);
    if (sortValue === "name") items = [...items].sort((a, b) => a.name.localeCompare(b.name));

    count.textContent = items.length;
    grid.innerHTML = items.length ? items.map(productCard).join("") : `<p class="cart-empty">No styles found for this filter.</p>`;
  }

  draw();
}

function renderDetailPage() {
  const root = document.querySelector("[data-product-detail]");
  if (!root) return;

  const params = new URLSearchParams(window.location.search);
  const product = getProduct(params.get("id"));
  const related = document.querySelector("[data-related-products]");
  const crumb = document.querySelector("[data-breadcrumb-product]");
  selectedDetailColor = product.colors[0];

  document.title = `${product.name} | ZenithSui`;
  if (crumb) crumb.textContent = product.name;

  root.innerHTML = `
    <div class="gallery">
      <div class="thumbs" data-thumbs>
        ${product.images.map((image, index) => `
          <button type="button" class="${index === 0 ? "is-active" : ""}" data-gallery-image="${image}" aria-label="View image ${index + 1}">
            <img src="${image}" alt="${product.name} thumbnail ${index + 1}">
          </button>
        `).join("")}
      </div>
      <div class="main-image">
        <img src="${product.images[0]}" alt="${product.name}" data-main-image>
      </div>
    </div>
    <div class="product-info">
      <p class="eyebrow">${product.fabric}</p>
      <h1>${product.name}</h1>
      <div class="price-row">
        <span class="sale-price">${formatMoney(product.price)}</span>
        <span class="compare-price">${formatMoney(product.original)}</span>
      </div>
      <p class="product-desc">${product.description}</p>
      <div class="variant-group">
        <label>Color</label>
        <div class="swatches">
          ${product.colors.map((color, index) => `<button type="button" class="swatch ${index === 0 ? "is-active" : ""}" data-color="${color}">${color}</button>`).join("")}
        </div>
      </div>
      <div class="qty-control">
        <label>Quantity</label>
        <div class="qty-stepper">
          <button type="button" data-qty="minus" aria-label="Decrease quantity">-</button>
          <input type="number" min="1" value="1" data-qty-input aria-label="Quantity">
          <button type="button" data-qty="plus" aria-label="Increase quantity">+</button>
        </div>
      </div>
      <div class="detail-actions">
        <button class="button button--gold button--full" type="button" data-add-to-cart="${product.id}">Add to Cart</button>
        <a class="button button--outline button--full" href="products.html?collection=trending">Continue Shopping</a>
      </div>
      <div class="product-perks">
        <span>Free delivery on prepaid orders</span>
        <span>Buy more save more auto-applied in cart</span>
        <span>Easy 7 day return window</span>
      </div>
    </div>
  `;

  root.querySelectorAll("[data-gallery-image]").forEach((button) => {
    button.addEventListener("click", () => {
      root.querySelector("[data-main-image]").src = button.dataset.galleryImage;
      root.querySelectorAll("[data-gallery-image]").forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
    });
  });

  root.querySelectorAll("[data-color]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedDetailColor = button.dataset.color;
      root.querySelectorAll("[data-color]").forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
    });
  });

  if (related) {
    related.innerHTML = PRODUCTS.filter((item) => item.id !== product.id).slice(0, 4).map(productCard).join("");
  }
}

function initHeader() {
  const header = document.querySelector("[data-header]");
  if (!header) return;

  const toggle = () => header.classList.toggle("is-scrolled", window.scrollY > 6);
  toggle();
  window.addEventListener("scroll", toggle, { passive: true });
}

function initMobileMenu() {
  const menu = document.querySelector("[data-mobile-menu]");
  const open = document.querySelector("[data-menu-toggle]");
  const close = document.querySelector("[data-menu-close]");
  const overlay = document.querySelector("[data-page-overlay]");
  if (!menu || !open || !overlay) return;

  open.addEventListener("click", () => {
    menu.classList.add("is-open");
    overlay.classList.add("is-open");
    document.body.classList.add("is-locked");
    open.setAttribute("aria-expanded", "true");
  });

  close?.addEventListener("click", closeAllPanels);
  menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeAllPanels));
}

function initDrawers() {
  document.querySelectorAll("[data-cart-open]").forEach((button) => {
    button.addEventListener("click", openCart);
  });
  document.querySelectorAll("[data-cart-close]").forEach((button) => {
    button.addEventListener("click", closeAllPanels);
  });
  document.querySelector("[data-page-overlay]")?.addEventListener("click", closeAllPanels);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeAllPanels();
  });
}

function openCart() {
  document.querySelector("[data-cart-drawer]")?.classList.add("is-open");
  document.querySelector("[data-page-overlay]")?.classList.add("is-open");
  document.body.classList.add("is-locked");
  renderCartItems();
}

function closeAllPanels() {
  document.querySelector("[data-cart-drawer]")?.classList.remove("is-open");
  document.querySelector("[data-mobile-menu]")?.classList.remove("is-open");
  document.querySelector("[data-search-modal]")?.classList.remove("is-open");
  document.querySelector("[data-page-overlay]")?.classList.remove("is-open");
  document.body.classList.remove("is-locked");
  document.querySelector("[data-menu-toggle]")?.setAttribute("aria-expanded", "false");
}

function addToCart(productId, color, qty = 1) {
  const product = getProduct(productId);
  const cart = getCart();
  const existing = cart.find((item) => item.id === product.id && item.color === color);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: product.id, color, qty });
  }
  setCart(cart);
  updateCartUI();
  renderCartItems();
  openCart();
  showToast("Added to cart");
}

function removeCartItem(id, color) {
  setCart(getCart().filter((item) => item.id !== id || item.color !== color));
  updateCartUI();
  renderCartItems();
}

function updateCartItem(id, color, delta) {
  const cart = getCart();
  const item = cart.find((entry) => entry.id === id && entry.color === color);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  setCart(cart);
  updateCartUI();
  renderCartItems();
}

function getCartTotals() {
  const cart = getCart();
  const enriched = cart.map((item) => ({ ...item, product: getProduct(item.id) }));
  const count = enriched.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = enriched.reduce((sum, item) => sum + item.product.price * item.qty, 0);
  const rate = count >= 4 ? .25 : count >= 3 ? .20 : count >= 2 ? .15 : 0;
  const discount = Math.round(subtotal * rate);
  return { count, subtotal, discount, total: subtotal - discount, items: enriched };
}

function updateCartUI() {
  const totals = getCartTotals();
  document.querySelectorAll("[data-cart-count]").forEach((node) => {
    node.textContent = totals.count;
  });
  document.querySelectorAll("[data-cart-subtotal]").forEach((node) => {
    node.textContent = formatMoney(totals.subtotal);
  });
  document.querySelectorAll("[data-cart-discount]").forEach((node) => {
    node.textContent = `-${formatMoney(totals.discount)}`;
  });
  document.querySelectorAll("[data-cart-total]").forEach((node) => {
    node.textContent = formatMoney(totals.total);
  });
}

function renderCartItems() {
  const container = document.querySelector("[data-cart-items]");
  if (!container) return;
  const totals = getCartTotals();
  if (!totals.items.length) {
    container.innerHTML = `<p class="cart-empty">Your cart is empty. Add a silk favorite to begin.</p>`;
    updateCartUI();
    return;
  }

  container.innerHTML = totals.items.map(({ product, color, qty }) => `
    <article class="cart-item">
      <img src="${product.images[0]}" alt="${product.name}">
      <div>
        <h3>${product.name}</h3>
        <p>${color} | ${formatMoney(product.price)}</p>
        <div class="cart-item__row">
          <div class="mini-qty" aria-label="Quantity">
            <button type="button" data-cart-qty="-1" data-id="${product.id}" data-color="${color}" aria-label="Decrease">-</button>
            <span>${qty}</span>
            <button type="button" data-cart-qty="1" data-id="${product.id}" data-color="${color}" aria-label="Increase">+</button>
          </div>
          <button class="remove-item" type="button" data-remove-item data-id="${product.id}" data-color="${color}">Remove</button>
        </div>
      </div>
    </article>
  `).join("");
  updateCartUI();
}

function initSearch() {
  const modal = document.querySelector("[data-search-modal]");
  const input = document.querySelector("[data-search-input]");
  const results = document.querySelector("[data-search-results]");
  if (!modal || !input || !results) return;

  document.querySelectorAll("[data-search-open]").forEach((button) => {
    button.addEventListener("click", () => {
      modal.classList.add("is-open");
      document.body.classList.add("is-locked");
      input.focus();
      drawSearch("");
    });
  });

  document.querySelector("[data-search-close]")?.addEventListener("click", closeAllPanels);
  input.addEventListener("input", () => drawSearch(input.value));

  function drawSearch(query) {
    const term = query.trim().toLowerCase();
    const matches = PRODUCTS.filter((product) => {
      const text = `${product.name} ${product.fabric} ${product.tags.join(" ")}`.toLowerCase();
      return !term || text.includes(term);
    }).slice(0, 6);

    results.innerHTML = matches.map((product) => `
      <a class="search-result" href="product-detail.html?id=${product.id}">
        <img src="${product.images[0]}" alt="${product.name}">
        <span><strong>${product.name}</strong><span>${formatMoney(product.price)}</span></span>
        <span class="button button--outline">View</span>
      </a>
    `).join("");
  }
}

function initNewsletter() {
  document.querySelectorAll("[data-newsletter]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      form.reset();
      showToast("Subscribed to ZenithSui");
    });
  });
}

function showToast(message) {
  const toast = document.querySelector("[data-toast]");
  if (!toast) return;
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2200);
}
