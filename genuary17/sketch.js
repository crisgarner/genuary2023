const height = 1000;
const width = 1000;
const keySize = 100;

const rows = 80;
const cols = 80;

const palette = ["#f8f9fa", "#e9ecef", "#dee2e6", "#ced4da", "#adb5bd", "#6c757d", "#495057", "#343a40", "#212529"]

function setup() {
    createCanvas(width, height);
    rectMode(CENTER);
    noLoop();
}

function draw() {
    background(palette[0]);
    // for (let i = 0; i < rows; i++) {
    //     const color = palette[Math.floor(random(1, 8))];
    //     draw_square([0.01 * i, 0.01], keySize, 10, color);
    // }
    drawRect(width / 2, height, 8);
    // resetMatrix();
    // for (let i = 0; i < 8; i++) {
    //     drawRect(keySize, keySize, 10);
    //     translate(keySize * 2, 0);
    // }
}

function drawRect(x, size, level) {
    // 'level' is the variable that terminates the recursion once it reaches
    // a certain value (here, 1). If a terminating condition is not
    // specified, a recursive function keeps calling itself again and again
    // until it runs out of stack space - not a favourable outcome!
    noStroke();
    fill(palette[Math.floor(random(9))]);
    rect(x, height / 2, size * 2, size * 2);
    if (level > 1) {
        // 'level' decreases by 1 at every step and thus makes the terminating condition
        // attainable
        level = level - 1;
        drawRect(x - size / 2, size / 2, level);
        drawRect(x + size / 2, size / 2, level);
    }
}
