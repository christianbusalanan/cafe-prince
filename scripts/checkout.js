/* ===== CHECKOUT PAGE JAVASCRIPT ===== */

/* ===== ORDER FORM HANDLING ===== */
/**
 * Display order confirmation popup with form data
 * @param {Event} event - Form submission event
 */
function showPopup(event) {
    // Prevent default form submission
    event.preventDefault();

    // Get current date and time
    let now = new Date();
    let date = now.toDateString();
    let time = now.toLocaleTimeString();

    // Extract form data
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let address = document.getElementById('address').value;
    let payment = document.getElementById('payment').value;

    // Update popup content with form data
    document.getElementById('order-date').textContent = date;
    document.getElementById('order-time').textContent = time;
    document.getElementById('receipt-fname').textContent = fname;
    document.getElementById('receipt-lname').textContent = lname;
    document.getElementById('receipt-email').textContent = email;
    document.getElementById('receipt-phone').textContent = phone;
    document.getElementById('receipt-address').textContent = address;
    document.getElementById('receipt-payment').textContent = payment;

    // Display the confirmation popup
    document.getElementById('popup').style.display = 'flex';
}

/**
 * Close the order confirmation popup
 */
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

/**
 * Redirect user to home page after order completion
 */
function redirectToHome() {
    window.location.href = 'index.html';
}