# Cafe Prince

A modern cafe website showcasing products, services, and online ordering capabilities for Cafe Prince, a coffee shop located in Taguig, Philippines.

## Features

- **Homepage**: Interactive landing page with animated GIF background and featured products
- **Product Gallery**: Organized product showcase with categories (Products, Branches, Craft)
- **Online Shop**: Shopping cart functionality with 22+ menu items including beverages and cookies
- **Contact System**: Contact information display with interactive star rating system
- **User Authentication**: Login and signup forms with modern styling
- **Checkout Process**: Complete order form with receipt generation popup
- **Responsive Design**: Mobile-friendly layout across all pages
- **Social Media Integration**: Links to Instagram and Facebook pages

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla JS)
- **Styling**: Modular CSS architecture with global and page-specific stylesheets
- **Storage**: Browser LocalStorage for user authentication
- **Assets**: Organized image directory structure
- **Comments**: Comprehensive CSS and JavaScript comments for maintainability

## Project Structure

```
cafe-prince/
├── HTML Files
│   ├── index.html         # Homepage/landing page
│   ├── shop.html          # Shopping cart and product ordering
│   ├── gallery.html       # Product gallery (20 products)
│   ├── branches.html      # Branch locations gallery (4 branches)
│   ├── craft.html         # Craft/artisanal products (10 items)
│   ├── contact.html       # Contact information and ratings
│   ├── checkout.html      # Order checkout and receipt
│   ├── signup.html        # User authentication
│   └── menu.html          # Alternative menu layout
│
├── CSS Files (styles/)
│   ├── global.css         # Shared styles across all pages
│   │   ├── Header & navigation
│   │   ├── Footer & social media
│   │   ├── Form elements
│   │   ├── Gallery components
│   │   ├── Utility classes
│   │   └── Responsive breakpoints
│   │
│   ├── index.css          # Homepage styles
│   │   ├── Hero section with fullscreen GIF
│   │   ├── Featured products grid
│   │   └── Call-to-action button
│   │
│   ├── shop.css           # Shop page styles
│   │   ├── Product grid layout (3 columns)
│   │   ├── Shopping cart sidebar
│   │   ├── Cart quantity badge
│   │   └── Checkout buttons
│   │
│   ├── gallery.css        # Gallery page styles
│   │   ├── Photo grid (5 columns)
│   │   ├── Image hover effects
│   │   └── Gray background theme
│   │
│   ├── branches.css       # Branches page styles
│   │   ├── Photo grid (2 columns)
│   │   ├── Branch photo displays
│   │   └── Hover animations
│   │
│   ├── craft.css          # Craft page styles
│   │   ├── Photo grid (5 columns)
│   │   ├── Craft product displays
│   │   └── Image transitions
│   │
│   ├── contact.css        # Contact page styles
│   │   ├── Contact info boxes
│   │   ├── Star rating system
│   │   ├── Review textarea
│   │   └── Submit button
│   │
│   ├── checkout.css       # Checkout page styles
│   │   ├── Order form layout
│   │   ├── Popup modal styling
│   │   ├── Receipt display
│   │   └── Background GIF pattern
│   │
│   ├── signup.css         # Signup page styles
│   │   ├── Authentication form
│   │   ├── Centered container
│   │   ├── Background overlay
│   │   └── Form group styling
│   │
│   └── menu.css           # Menu page styles
│       ├── Fixed header layout
│       ├── Menu items grid
│       ├── Shopping cart sidebar
│       └── Card transitions
│
├── JavaScript Files (scripts/)
│   ├── shop.js            # Shopping cart functionality
│   ├── contact.js         # Star rating system
│   └── checkout.js        # Order form and receipt popup
│
└── Images (images/)
    ├── logo.jpg           # Main cafe logo
    ├── prince.png         # Favicon
    ├── slide.gif          # Background animation
    ├── cart.jpg           # Shopping cart icon
    ├── fb.png & ig.png    # Social media icons
    ├── product1-20.jpg    # Product gallery images
    ├── branch1-4.jpg      # Branch photos
    ├── craft1-10.jpg      # Craft product images
    ├── list1-22.PNG       # Shop product images
    ├── photo1-6.jpg       # Homepage gallery images
    └── shopping.svg       # Shopping cart SVG icon
```

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/christianbusalanan/cafe-prince.git
   cd cafe-prince
   ```

2. **Verify file structure**
   ```
   cafe-prince/
   ├── index.html
   ├── styles/
   │   ├── global.css
   │   └── [page-specific CSS files]
   ├── scripts/
   │   └── [JavaScript files]
   └── images/
       └── [all image assets]
   ```

3. **Add JavaScript to pages**
   ```html
   <!-- Shop page -->
   <script src="scripts/shop.js"></script>
   
   <!-- Contact page -->
   <script src="scripts/contact.js"></script>
   
   <!-- Checkout page -->
   <script src="scripts/checkout.js"></script>
   ```

4. **Open in a web browser**
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   
   # Using VS Code Live Server
   # Right-click index.html → "Open with Live Server"
   ```

5. **Navigate the site**
   - Homepage: `http://localhost:8000/index.html`
   - Shop: `http://localhost:8000/shop.html`
   - Gallery: `http://localhost:8000/gallery.html`

## JavaScript Architecture

### Overview
All JavaScript uses vanilla JS with no external dependencies. Code is organized into three modular files with comprehensive comments following the same documentation standards as the CSS.

### shop.js - Shopping Cart System
**Complete e-commerce functionality with 22 products**

**Core Features:**
- Product data array with 16 beverages and 6 cookies
- Dynamic product grid generation on page load
- Add to cart with visual confirmation feedback
- Quantity adjustment (+/- buttons)
- Real-time price calculation
- Cart sidebar toggle (slides in from right)
- Empty cart validation before checkout
- Automatic redirect to checkout page

**Key Functions:**
- `initApp()` - Generates product display from data array
- `addToCart(key, btn)` - Adds item to cart with confirmation
- `reloadCart()` - Updates cart display and totals
- `changeQuantity(key, quantity)` - Adjusts item quantities or removes items
- `redirectToCheckout()` - Validates cart and navigates to checkout

**Product Data Structure:**
```javascript
{ 
  id: 1, 
  name: 'Spanish Latte', 
  image: 'images/list1.png', 
  price: 125 
}
```

### contact.js - Interactive Rating System
**5-star rating functionality with color-coded feedback**

**Core Features:**
- Click-based star rating (1-5 stars)
- Dynamic color changes based on rating level
- Real-time rating display update
- Reset functionality for re-rating

**Key Functions:**
- `gfg(n)` - Updates star display for rating value 1-5
- `remove()` - Clears all star styling classes

**Rating Classes:**
- `one` through `five` - Color-coded rating states

### checkout.js - Order Processing
**Order form handling with confirmation popup**

**Core Features:**
- Form data extraction and validation
- Order timestamp generation
- Receipt popup modal display
- Order confirmation display
- Return to homepage navigation

**Key Functions:**
- `showPopup(event)` - Displays order confirmation with form data
- `closePopup()` - Hides confirmation modal
- `redirectToHome()` - Returns user to homepage

**Form Fields Processed:**
- First/Last Name, Email, Phone, Address, Payment Method

## Technical Implementation

### Code Quality Standards
All JavaScript files follow consistent documentation practices:
- **Section headers**: `/* ===== SECTION NAME ===== */`
- **Function documentation**: JSDoc-style comments with parameters
- **Inline comments**: Explaining complex logic
- **Clear variable naming**: Descriptive and purposeful

### No External Dependencies
- **Pure vanilla JavaScript** - No jQuery, React, or frameworks
- **No npm packages** - package-lock.json is empty
- **Browser-native APIs only** - localStorage, DOM manipulation
- **Lightweight and fast** - No bundle size concerns

## CSS Architecture

### Global Styles (global.css)
Shared styles used across all pages with detailed comments:

- **Header & Navigation**: Fixed navigation bar with hover effects
- **Footer**: Consistent footer layout with social media links
- **Form Elements**: Standardized input, select, and button styles
- **Gallery Components**: Reusable gallery header and button styles
- **Utility Classes**: Text alignment, colors, spacing helpers
- **Responsive Design**: Mobile breakpoints (768px)

### Page-Specific Styles
Each page has dedicated CSS with section comments:

**index.css** - Homepage styling
- Fullscreen hero section with overlay
- Featured products grid (3 columns)
- Call-to-action button styling

**shop.css** - E-commerce functionality
- Product grid layout (3 columns)
- Sliding cart sidebar (500px width)
- Cart quantity badge positioning
- Product hover states

**gallery.css** - Product showcase
- Photo grid (5 columns for products)
- Image hover zoom effects
- Gray background (#808080)

**branches.css** - Branch locations
- Photo grid (2 columns for larger images)
- Branch-specific styling
- Hover animations

**craft.css** - Artisanal products
- Photo grid (5 columns)
- Craft product displays
- Consistent with gallery styling

**contact.css** - Contact page
- Contact info box layouts
- Interactive star rating system
- Review textarea and submit button

**checkout.css** - Order processing
- Checkout form container (800px max-width)
- Modal popup for order confirmation
- Receipt display styling

**signup.css** - User authentication
- Centered auth container (400px width)
- Form overlay with transparency
- Login/signup form groups

**menu.css** - Alternative menu
- Fixed header layout
- Menu items grid
- Shopping cart integration

## Features by Page

### Homepage (index.html)
- Hero section with fullscreen GIF background
- "Discover the Perfect Blend" heading
- "Order Now" call-to-action button
- Featured products grid (6 photos)

### Shop (shop.html)
- 22 products with images, names, and prices
- Shopping cart icon with quantity badge
- Sliding cart sidebar from right
- Add to cart with confirmation messages
- Total price calculation
- Checkout redirect

### Gallery Pages
- **gallery.html**: 20 product images in 5-column grid
- **branches.html**: 4 branch photos in 2-column grid
- **craft.html**: 10 craft items in 5-column grid
- Category navigation tabs
- Hover zoom effects on all images

### Contact (contact.html)
- Contact information boxes (Address, Phone, Email)
- Interactive 5-star rating system
- Review textarea
- Submit button

### Checkout (checkout.html)
- Order form (Name, Email, Phone, Address)
- Payment method selection (COD, GCash, PayMaya)
- Order confirmation popup modal
- Receipt with order details and timestamp

### Signup (signup.html)
- Login form (Username, Password)
- Signup form (Username, Password, Email)
- Centered overlay design
- Background GIF pattern

## Menu Items (Shop)

**Beverages** (₱100-₱150):
- Spanish Latte, Matcha Latte, White Mocha
- Americano, Mocha, Latte
- Caramel Macchiato, Hibiscus Tea
- White Chocolate, Strawberry Milk
- Vanilla Cold Brew, Hazelnut Latte
- Hazelnut Mocha Macchiato
- Black Tea Strawberry, Golden CarMach
- Barista Drink

**Cookies** (₱40-₱45):
- Chocolate Chip
- Chocolate Marshmallow
- White Chocolate Macadamia
- Red Velvet
- Double Choco
- Matcha Almond

## Responsive Design

Mobile breakpoint at 768px with adjustments for:
- Vertical navigation menu
- Stacked footer elements
- Reduced logo sizes
- Single-column layouts
- Touch-friendly spacing

## Live Information

**Social Media**:
- Instagram: [@cafeprinceph.official](https://www.instagram.com/cafeprinceph.official/)
- Facebook: [Cafe Prince](https://www.facebook.com/cafeprince.ph/)

**Contact**:
- Phone: 0915-895-6883
- Email: cafeprince@gmail.com
- Address: Block 21 Lot 4 Italy St. EP Housing Brgy Pinagsama Phase 2, Taguig, Philippines

## Development Team

**Christian Busalanan**
- GitHub: @lr.cnbusalanan@mmdc.mcl.edu.ph

**Aleczandra Tulod**
- GitHub: @lr.atulod@mmdc.mcl.edu.ph

**Christenne Jsele Herrera**
- GitHub: @lr.cjherrera@mmdc.mcl.edu.ph
  
**Jason Bryan Tan**
- GitHub: @lr.jbtan@mmdc.mcl.edu.ph
  
**John Vincent Tapec**
- GitHub: @lr.jvtapec@mmdc.mcl.edu.ph

**Mikko Jerome Bautista**
- GitHub: @lr.mjbautista@mmdc.mcl.edu.ph

## Key Takeaways

This project demonstrates:
- **Modular Architecture**: Separation of HTML, CSS, and JavaScript into organized files
- **Code Organization**: Proper file structure with dedicated directories
- **Comprehensive Documentation**: Clear comments throughout CSS and JavaScript files
- **Vanilla JavaScript**: No dependencies, pure browser-native code
- **Responsive Design**: Mobile-first approach with breakpoints
- **Maintainability**: Easy to update and extend codebase
