/* ===== SHOP PAGE JAVASCRIPT ===== */

/* ===== SHOPPING CART FUNCTIONALITY ===== */
// DOM element references
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');
let warning = document.querySelector('.warning');


/* ===== PRODUCT DATA ===== */
let products = [
    // Beverages
    { id: 1, name: 'Spanish Latte', image: 'images/list1.png', price: 125 },
    { id: 2, name: 'Matcha Latte', image: 'images/list2.png', price: 125 },
    { id: 3, name: 'White Mocha', image: 'images/list3.png', price: 125 },
    { id: 4, name: 'Americano', image: 'images/list4.png', price: 125 },
    { id: 5, name: 'Mocha', image: 'images/list5.png', price: 125 },
    { id: 6, name: 'Latte', image: 'images/list6.png', price: 125 },
    { id: 7, name: 'Caramel Macchiato', image: 'images/list7.png', price: 130 },
    { id: 8, name: 'Hibiscus Tea', image: 'images/list8.png', price: 125 },
    { id: 9, name: 'White Chocolate', image: 'images/list9.png', price: 125 },
    { id: 10, name: 'Strawberry Milk', image: 'images/list10.png', price: 125 },
    { id: 11, name: 'Vanilla Cold Brew', image: 'images/list11.png', price: 150 },
    { id: 12, name: 'Hazelnut Latte', image: 'images/list12.png', price: 110 },
    { id: 13, name: 'Hazelnut Mocha Macchiato', image: 'images/list13.png', price: 100 },
    { id: 14, name: 'Black Tea Strawberry', image: 'images/list14.png', price: 140 },
    { id: 15, name: 'Golden CarMach', image: 'images/list15.png', price: 150 },
    { id: 16, name: 'Barista Drink', image: 'images/list16.png', price: 130 },
    
    // Cookies
    { id: 17, name: 'Chocolate Chip Cookie', image: 'images/list17.png', price: 40 },
    { id: 18, name: 'Chocolate Marshmallow Cookie', image: 'images/list18.png', price: 45 },
    { id: 19, name: 'White Chocolate Macadamia Cookie', image: 'images/list19.png', price: 45 },
    { id: 20, name: 'Red Velvet Cookie', image: 'images/list20.png', price: 45 },
    { id: 21, name: 'Double Choco Cookie', image: 'images/list21.png', price: 45 },
    { id: 22, name: 'Matcha Almond Cookie', image: 'images/list22.png', price: 45 }
];

// Shopping cart storage
let listCards = JSON.parse(localStorage.getItem('myCart')) || [];

/* ===== PRODUCT DISPLAY FUNCTIONS ===== */
/**
 * Initialize product display on page load
 */
function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="${value.image}" alt="${value.name}">
            <div class="title">${value.name}</div>
            <div class="price">₱${value.price}</div>
            <button onclick="addToCart(${key}, this)">Add To Cart</button>
            <div class="confirmation">Added to Cart</div>`;
        list.appendChild(newDiv);
        reloadCart();
    });
}

/* ===== CART MANAGEMENT FUNCTIONS ===== */
/**
 * Add product to shopping cart
 * @param {number} key - Product index
 * @param {HTMLElement} btn - Button element that was clicked
 */
function addToCart(key, btn) {
    if (listCards[key] == null) {
        // Add new item to cart
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    } else {
        // Increase quantity of existing item
        listCards[key].quantity++;
    }

    // Update cart display
    saveCart();
    reloadCart();

    // Show confirmation feedback
    btn.classList.add('added');
    btn.nextElementSibling.style.display = 'block';

    // Hide confirmation after 2 seconds
    setTimeout(() => {
        btn.nextElementSibling.style.display = 'none';
    }, 2000);
}

/**
 * Update cart display with current items
 */
function reloadCart() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;

    // Process each item in cart
    listCards.forEach((value, key) => {
        if (value != null) {
            totalPrice += value.price * value.quantity;
            count += value.quantity;

            // Create cart item element
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.image}" alt="${value.name}"></div>
                <div>${value.name}</div>
                <div>₱${(value.price * value.quantity)}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
            listCard.appendChild(newDiv);
        }
    });

    // Update totals display
    total.innerText = `Total: ₱${totalPrice}`;
    quantity.innerText = count;
}

/**
 * Change quantity of item in cart
 * @param {number} key - Product index
 * @param {number} quantity - New quantity
 */
function changeQuantity(key, quantity) {
    if (quantity <= 0) {
        // Remove item from cart
        delete listCards[key];
    } else {
        // Update item quantity
        listCards[key].quantity = quantity;
    }

    // Refresh cart display
    saveCart();
    reloadCart();
}

/* ===== CHECKOUT FUNCTIONS ===== */
/**
 * Redirect to checkout page if cart has items
 */
function redirectToCheckout(event) {
    // Prevent the link's default click behavior
    if (event) event.preventDefault();

    let totalAmount = parseInt(total.innerText.split('₱')[1] || '0');
    
    if (totalAmount === 0) {
        // Show warning if cart is empty
        warning.style.display = 'block';
        setTimeout(() => {
            warning.style.display = 'none';
        }, 2000);
        return; // Stop here if cart is empty
    }
    
    // If cart is not empty, proceed to checkout
    window.location.href = 'checkout.html';
}

/* ===== LOCAL STORAGE FUNCTIONS ===== */
function saveCart() {
    localStorage.setItem('myCart', JSON.stringify(listCards));
}

/* ===== INITIALIZATION ===== */
// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initApp();
});