# ColorPop — Vibrant E-Commerce Demo

A colorful, animated online shopping website built with **only HTML5, CSS3, and vanilla JavaScript**. No frameworks, no libraries, no backend. Created as a college project.

---

## Features

- **Colorful hero section** with animated gradient blobs and a Shop Now button
- **100 sample products** across 5 categories (20 per category): Fashion, Electronics, Home & Living, Beauty, and Accessories
- **Product search** by name or category
- **Category filters** and **price sorting** (low to high, high to low, A–Z, Z–A)
- **Quick View modal** for each product with description, rating, and add-to-cart
- **Shopping cart** with add, remove, quantity controls, and live total calculation
- **Wishlist** with a live item count badge
- **Coupon codes**: `SAVE10` (10% off) and `WELCOME50` (Rs. 50 off) with validated discounts
- **Free shipping** on orders above Rs. 2,000
- **Checkout form** with validation for:
  - Full name
  - Email address
  - Indian phone number (10 digits, starts with 6–9)
  - Address
  - City
  - State
  - PIN code (6 digits)
- **Demo-only payment selection** (Cash on Delivery / UPI / Card) — no real payment, no card details collected
- **Order confirmation** modal with order ID
- **Order history** saved and displayed
- **localStorage persistence** — cart, wishlist, and orders survive page reloads
- **Responsive mobile menu** with hamburger toggle
- **Empty states** for cart, wishlist, and orders
- **Toast notifications** for user feedback
- **Keyboard support** — Escape closes any modal or drawer

---

## Files

| File         | Purpose                                      |
| ------------ | -------------------------------------------- |
| `index.html` | Page structure: nav, hero, shop, modals      |
| `style.css`  | All styling, animations, responsive layout   |
| `script.js`  | All logic: products, cart, checkout, etc.    |
| `README.md`  | This file                                     |

---

## How to Run

### Option 1: Open directly
1. Download all four files into the same folder.
2. Open `index.html` in any modern browser (Chrome, Firefox, Edge, Safari).

That's it — no server, no installation, no dependencies.

### Option 2: With a local server (optional)
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (npx)
npx serve
```
Then open `http://localhost:8000` in your browser.

---

## How to Export / Download

1. Copy all files (`index.html`, `style.css`, `script.js`, `README.md`) into a folder.
2. Zip the folder and submit or share.
3. To host online for free, drag the folder into [Netlify Drop](https://app.netlify.com/drop) or push to GitHub and enable GitHub Pages.

---

## Testing Checklist

| Feature              | How to Test                                             |
| -------------------- | ------------------------------------------------------- |
| Search               | Type a product name in the search bar                   |
| Category filter      | Select a category from the dropdown                     |
| Price sort           | Choose a sort option from the sort dropdown             |
| Add to cart          | Click "Add to Cart" on any product                      |
| Change quantity      | Use +/− buttons in the cart drawer                      |
| Remove from cart     | Click the trash icon next to a cart item                |
| Coupon               | Enter `SAVE10` or `WELCOME50` in the cart and click Apply |
| Wishlist             | Click the heart icon on a product; check the badge      |
| Quick view           | Click "Quick View" on any product card                  |
| Checkout             | Click "Proceed to Checkout" and fill the form           |
| Form validation      | Try submitting with empty or invalid fields             |
| Order confirmation   | Complete checkout to see the confirmation modal         |
| Order history        | Scroll to the Orders section after placing an order     |
| Persistence          | Reload the page — cart, wishlist, and orders persist     |
| Mobile layout        | Resize the browser or use DevTools mobile mode          |
| Mobile menu          | Click the hamburger icon on small screens               |

---

## Coupon Codes

| Code        | Discount     |
| ----------- | ------------ |
| `SAVE10`    | 10% off      |
| `WELCOME50` | Rs. 50 off   |

---

## Tech Stack

- HTML5 (semantic structure)
- CSS3 (custom properties, grid, flexbox, animations, gradients, media queries)
- Vanilla JavaScript (ES5-compatible, no modules required)
- Google Fonts (Poppins + Quicksand)
- Product images from [Pexels](https://www.pexels.com) (free to use)
- `localStorage` for data persistence

---

## Browser Support

Works in all modern browsers that support CSS Grid, Flexbox, and ES5 JavaScript.

---

## License

This is a college demo project. All product images are from Pexels (free license).
