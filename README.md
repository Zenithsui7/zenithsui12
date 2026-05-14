# ZenithSui — Premium Silk Sarees

> A fully static, pixel-perfect silk saree storefront — no backend, no build tools, no dependencies.  
> Open `index.html` in any browser and it works.

---

## ✨ Features

| Feature | Detail |
|---|---|
| 📄 3 full pages | Homepage · Product Listing · Product Detail |
| 🛒 Cart system | Add, remove, quantity control — auto discount applied |
| 🔍 Search | Live product search across name, fabric, tags |
| 📦 Bundle discounts | Buy 2 → 15% · Buy 3 → 20% · Buy 4 → 25% |
| 🎨 Gold / maroon palette | Matches premium silk saree brand aesthetics |
| 📱 Fully responsive | Mobile, tablet, and desktop — hamburger menu included |
| 🔡 Elegant typography | Cormorant Garamond + EB Garamond + Josefin Sans |
| 💾 Cart persistence | LocalStorage keeps cart across page reloads |
| 🚀 GitHub Pages ready | Auto-deploy workflow included |

---

## 📁 File Structure

```
zenithsui/
├── index.html               # Homepage — hero, products, offers, reviews, newsletter
├── products.html            # Product listing — filters, sort, collection hero
├── product-detail.html      # Product detail — image gallery, variants, add to cart
├── 404.html                 # Custom 404 page
├── style.css                # Full responsive stylesheet (1 file, no frameworks)
├── script.js                # Products data, cart, search, gallery, filters, UI
├── assets/
│   ├── zenithsui-logo.svg   # Brand logo (gold-on-maroon "Z" monogram)
│   └── favicon.svg          # Browser tab icon
└── .github/
    └── workflows/
        └── pages.yml        # Auto-deploy to GitHub Pages on push to main
```

---

## 🚀 Publish to GitHub Pages

### Option A — Auto deploy (recommended)

1. Create a new **public** GitHub repository
2. Upload all files (drag & drop or `git push`)
3. Go to **Settings → Pages**
4. Set **Source** to `GitHub Actions`
5. Push to `main` — the workflow deploys automatically
6. Your site goes live at `https://<your-username>.github.io/<repo-name>/`

### Option B — Manual (branch deploy)

1. Upload all files to repo root
2. Go to **Settings → Pages**
3. Set source: `Deploy from a branch` → `main` → `/ (root)`
4. Save — site is live in ~60 seconds

### Option C — Local preview

Just open `index.html` in your browser. No server needed.

---

## 🗂️ Pages Overview

### `index.html` — Homepage
- Scrolling announcement bar ("BUY 2 @10% OFF …")
- Sticky header with dropdown nav (Weaving ▾, Printed ▾)
- Full-width hero banner with CTA buttons
- "Trend This Week" product grid (dynamic from `PRODUCTS` data)
- Buy More Save More offer cards
- Collection highlight story cards
- Customer reviews section
- Newsletter signup
- Full footer

### `products.html` — Listing Page
- Collection hero with dynamic title & description
- Sidebar filters (Collection + Fabric checkboxes)
- Sort control (Featured / Price / Alphabetical)
- Responsive product grid with live count
- All filter/sort state is in-memory — no URL rewrite needed

### `product-detail.html` — Product Detail
- Vertical thumbnail strip → large main image gallery
- Color swatch variant selector
- Quantity stepper (+ / −)
- Add to Cart → opens cart drawer immediately
- Product perks list (free delivery, returns, bundle discount)
- "You May Also Like" related products grid

---

## 🛒 Cart System

```
Cart lives in localStorage key: "zenithsui_cart"

Discount tiers (auto-calculated):
  2 items  →  15% off subtotal
  3 items  →  20% off subtotal
  4+ items →  25% off subtotal
```

Cart icon shows live item count. Cart drawer slides in from the right with mini quantity controls and remove buttons.

---

## 🎨 Design Tokens

```css
--maroon-950: #240506   /* darkest background */
--maroon-900: #3b0909   /* primary brand maroon */
--maroon-700: #7a1c1c   /* badge / button accent */
--gold-700:   #a77918   /* eyebrow / price labels */
--gold-600:   #c89c32   /* gold accent mid */
--gold-200:   #f8e9b1   /* pale gold on dark backgrounds */
--cream-100:  #fffaf0   /* page background */
--cream-200:  #f8edd7   /* section background */
--ink:        #2a0d0d   /* body text */
```

---

## 🧩 Adding More Products

Edit the `PRODUCTS` array in `script.js`:

```js
{
  id: "zs-your-unique-id",
  name: "Your Product Name",
  price: 1299,               // sale price in INR
  original: 11999,           // crossed-out price
  badge: "-89% New Arrival",
  tags: ["new", "trending", "festive", "weaving", "brocade"],
  fabric: "Silk brocade",
  colors: ["Wine Maroon", "Emerald", "Royal Blue"],
  images: [
    "https://images.unsplash.com/photo-XXXXXXXX?auto=format&fit=crop&w=900&q=85",
    // add up to 4 images
  ],
  description: "A rich description of the saree."
}
```

Tags control which collection pages show this product.  
Available tag values match the `collection=` URL parameter.

---

## 🔗 Navigation Tags Reference

| URL param | Collection shown |
|---|---|
| `festive` | Festive Sale |
| `new` | New Arrivals |
| `trending` | Trending |
| `weaving` | Weaving (all) |
| `brocade` | Silks in Brocade |
| `kanjivaram` | Silk in Kanjivaram |
| `contrast` | Silk in Contrast |
| `zari-butti` | Silk with Zari Butti |
| `zari-work` | Silk with Zari Work |
| `contrast-pallu` | Silk with Contrast Pallu |
| `traditional-mysore-silks` | Traditional Mysore Silks |
| `printed` | Printed (all) |
| `hand-painted` | Hand Painted Design |
| `modern-print` | Modern Print |
| `kalamkari` | Kalamkari Prints |
| `flowers` | Flowers Prints |
| `pallu-prints` | Pallu Prints |
| `dresses` | Trendy Dresses |
| `silk-borderline` | Silk Borderline |

---

## 📝 Branding

All original "Mysore Pattu" / "mysorepattu.com" references have been replaced:

| Original | Replaced with |
|---|---|
| Mysore Pattu | ZenithSui |
| mysorepattu.com | zenithsui.com |
| All footer mentions | ZenithSui |
| Email domain | care@zenithsui.com |

---

## 📄 License

Static demo site — not affiliated with any real brand.  
Product images sourced from [Unsplash](https://unsplash.com) (free to use).

&copy; 2026 ZenithSui
