# Cafe Prince

A modern cafe website showcasing products, services, and online ordering capabilities for Cafe Prince, a coffee shop located in Taguig, Philippines.

## Features

- **Homepage**: Interactive landing page with animated GIF background and call-to-action buttons
- **Product Gallery**: Organized product showcase with categories (Products, Branches, Craft)
- **Online Shop**: Shopping cart functionality with 22+ menu items including beverages and cookies
- **Contact System**: Contact form with star rating system and embedded Google Maps
- **User Authentication**: Login and signup functionality with local storage
- **Checkout Process**: Complete order form with receipt generation
- **Responsive Design**: Mobile-friendly layout across all pages
- **Social Media Integration**: Links to Instagram and Facebook pages

## Technologies Used

- **Frontend: HTML5, CSS3, JavaScript (Vanilla JS)
- **Styling**: Custom CSS with responsive grid layouts
- **Storage**: Browser LocalStorage for user authentication
- **External APIs**: Google Maps embedded iframe
- **Assets**: Custom images, GIFs, and product photos

## Project Structure

```
cafe-prince/
├── HTML Files
│   ├── cafe.html          # Homepage/landing page
│   ├── shop.html          # Shopping cart and product ordering
│   ├── gallery.html       # Product gallery (main products)
│   ├── branches.html      # Branch locations gallery
│   ├── craft.html         # Craft/artisanal products gallery
│   ├── contact.html       # Contact form and information
│   ├── checkout.html      # Order checkout and receipt
│   ├── signup.html        # User authentication
│   ├── menu.html          # Alternative menu layout (legacy)
│   └── signup.php         # PHP version of signup (incomplete)
├── JavaScript Files
│   └── script.js          # Authentication logic
├── Backup Files (.txt)
│   ├── cafe.txt           # Backup of cafe.html
│   ├── shop.txt           # Backup of shop.html
│   ├── contact.txt        # Backup of contact.html
│   ├── checkout.txt       # Backup of checkout.html
│   ├── gallery.txt        # Backup of gallery.html
│   ├── branches.txt       # Backup of branches.html
│   ├── craft.txt          # Backup of craft.html
│   ├── menu.txt           # Backup of menu.html
│   └── signup.txt         # Backup of signup.html
└── Assets (Referenced)
    ├── logo.jpg           # Main cafe logo
    ├── prince.png         # Favicon
    ├── slide.gif          # Background animation
    ├── cafeprince.png     # Brand image
    ├── cart.jpg           # Shopping cart icon
    ├── fb.png & ig.png    # Social media icons
    ├── product1-20.jpg    # Product gallery images
    ├── branch1-4.jpg      # Branch photos
    ├── craft1-10.jpg      # Craft product images
    ├── list1-22.PNG       # Shop product images
    └── photo1-6.jpg       # Homepage gallery images
```

## Installation & Setup

1. **Download/Clone the project**
   ```bash
   git clone https://github.com/christianbusalanan/cafe-prince.git
   cd cafe-prince
   ```

2. **Ensure all assets are in place**
   - Verify all image files are in the root directory
   - Check that all referenced images exist (logo.jpg, slide.gif, etc.)

3. **Open in a web browser**
   ```
   # Open any of these files directly in your browser:
   cafe.html     # Start here for the homepage
   shop.html     # For shopping functionality
   gallery.html  # For product browsing
   ```

4. **For local development**
   - Use a local server (Live Server extension in VS Code recommended)
   - Or use Python: `python -m http.server 8000`
   - Or use Node.js: `npx http-server`

## 🎯 Usage Guide

### For Customers
1. **Browse Products**: Start at `cafe.html` and navigate to Gallery
2. **Shop Online**: Use `shop.html` to add items to cart and checkout
3. **Contact**: Use `contact.html` to send messages and rate services
4. **Account**: Create account via `signup.html` for exclusive promos

### For Developers
1. **Homepage**: `cafe.html` - Main landing page with hero section
2. **Shopping**: `shop.html` - Complete e-commerce functionality
3. **Gallery Pages**: `gallery.html`, `branches.html`, `craft.html` - Product showcases
4. **User System**: `signup.html` + `script.js` - Authentication logic

## 📋 Menu Items (Shop)

**Beverages** (₱100-₱150):
- Spanish Latte, Matcha Latte, White Mocha, Americano
- Caramel Macchiato, Hibiscus Tea, Vanilla Cold Brew
- Hazelnut varieties, Black Tea Strawberry, Golden CarMach

**Cookies** (₱40-₱45):
- Chocolate Chip, White Chocolate Macadamia
- Red Velvet, Double Choco, Matcha Almond
- Chocolate Marshmallow varieties

## Known Issues & Improvements Needed

Based on mentor feedback from Aleczandra Tuiod:

### Code Organization Issues
1. **CSS Duplication**: Each HTML file contains embedded CSS with repeated styles
2. **Missing Global CSS**: No centralized stylesheet (global.css) for common styles
3. **Code Comments**: Lack of explanatory comments throughout the codebase

### Recommended Improvements
1. **Create a global.css file** with common styles (header, footer, navigation, buttons)
2. **Extract page-specific CSS** into separate files (home.css, shop.css, etc.)
3. **Add comprehensive comments** explaining functions and style purposes
4. **Consolidate JavaScript** into organized modules
5. **Implement proper error handling** for form submissions

### Quick Fix Guide
```css
/* Create: css/global.css */
/* Move common styles here: header, footer, navigation, buttons */

/* Create: css/pages/ directory */
/* home.css, shop.css, gallery.css, contact.css */

/* Update HTML files to link external stylesheets */
<link rel="stylesheet" href="css/global.css">
<link rel="stylesheet" href="css/pages/home.css">
```

## Live Demo

**Social Media Links**:
- Instagram: [@cafeprinceph.official](https://www.instagram.com/cafeprinceph.official/)
- Facebook: [Cafe Prince](https://www.facebook.com/cafeprince.ph/)

**Location**: Block 21 Lot 4 Italy St. EP Housing Brgy Pinagsama Phase 2, Taguig, Philippines

## Contact Information

- **Phone**: 0915-895-6883
- **Email**: cafeprince@gmail.com
- **Address**: Block 21 Lot 4 Italy St. EP Housing Brgy Pinagsama Phase 2, Taguig, Philippines

## Developer

**Christian Busalanan**
- GitHub: [@christianbusalanan](https://github.com/christianbusalanan)
- Project: Cafe Prince Website

## Development Notes

- **Authentication**: Uses browser localStorage (not production-ready)
- **Forms**: Client-side validation only
- **Images**: Ensure all referenced images are uploaded to repository
- **Backup Files**: .txt files contain backup copies of all HTML files

## Version Control

This project includes backup files (.txt) for all main HTML files. These serve as version history and can be useful for rollback purposes.

---

**Note**: This is a student project showcasing web development skills. For production use, implement proper backend authentication, database storage, and security measures.
