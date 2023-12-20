let R = (a = 1) => Math.random() * a;
let L = (x, y) => (x * x + y * y) ** 0.5; // Elements by Euclid 300 BC

const palette = ["#f8f9fa", "#e9ecef", "#dee2e6", "#ced4da", "#adb5bd", "#6c757d", "#495057", "#343a40", "#212529"];

function setup() {
    createCanvas(800, 800);
    background('#000');
    noLoop();
}

function draw_circle([x, y], r, c) {
    noStroke(); fill(c);
    circle((x + 1) * width / 2, (y + 1) * width / 2, r / 2);
}

function draw_square([x, y], w, h, c) {
    noStroke();
    fill(c);
    rect((x + 1) * width / 2, (y + 1) * width / 2, w, h);
}


function draw() {
    for (let k = 0; k < 10; k++) {
        let p = [R(1) - 1, R(1) - 1];
        draw_square(p, 400, 400, color(255, k * 19));
    }

}
