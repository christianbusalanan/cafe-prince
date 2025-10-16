/* ===== CONTACT PAGE JAVASCRIPT ===== */

/* ===== STAR RATING SYSTEM ===== */
// Get star elements and output display
let stars = document.getElementsByClassName("star");
let output = document.getElementById("output");

/**
 * Update star rating display
 * @param {number} n - Rating value (1-5)
 */
function gfg(n) {
    // Remove existing star styling
    remove();
    
    // Apply styling based on rating
    let cls;
    for (let i = 0; i < n; i++) {
        if (n == 1) cls = "one";
        else if (n == 2) cls = "two";
        else if (n == 3) cls = "three";
        else if (n == 4) cls = "four";
        else if (n == 5) cls = "five";
        stars[i].className = "star " + cls;
    }
    
    // Update rating display text
    output.innerText = "Rating is: " + n + "/5";
}

/**
 * Remove all star styling classes
 */
function remove() {
    let i = 0;
    while (i < 5) {
        stars[i].className = "star";
        i++;
    }
}