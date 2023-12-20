let R = (a = 1) => Math.random() * a;



const palette = ["#f8f9fa", "#e9ecef", "#dee2e6", "#ced4da", "#adb5bd", "#6c757d", "#495057", "#343a40", "#212529"]



function draw_square([x, y], w, h, c) {
    noStroke();
    fill(c);
    rect((x + 1) * width / 2, (y + 1) * width / 2, w, h);
}

function draw_circle([x, y], r, c) {
    noStroke();
    fill(c);
    circle((x + 1) * width / 2, (y + 1) * width / 2, r / 2);
}

function draw_arc([x, y], r, c) {
    noStroke();
    fill(c);
    arc((x + 1) * width / 2, (y + 1) * width / 2, r, r, PI, TWO_PI);
}

function draw_triangle([x1, y1], [x2, y2], [x3, y3], c) {
    noStroke();
    fill(c);
    triangle(x1, y1, x2, y2, x3, y3);
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(palette[0]);

}

function draw() {


    draw_circle([0, 0], 1000, palette[8]);
    draw_circle([0, 0], 900, palette[7]);
    draw_circle([0, 0], 800, palette[6]);
    draw_circle([0, 0], 700, palette[5]);
    draw_circle([0, 0], 600, palette[4]);
    draw_circle([0, 0], 500, palette[3]);
    draw_circle([0, 0], 400, palette[2]);
    draw_circle([0, 0], 300, palette[1]);


}
