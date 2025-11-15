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
    remove();

    // Class name map
    const classMap = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five"
    };

    const cls = classMap[n];

    for (let i = 0; i < n; i++) {
        stars[i].className = "star " + cls;
    }

    output.innerText = `Rating is: ${n}/5`;
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
