let R = (a = 1) => Math.random() * a;
let L = (x, y) => (x * x + y * y) ** 0.5; // Elements by Euclid 300 BC

const palette = ["#D8D7CE", "#DAB057", "#CE715F", "#AF4B30", "#212021", "#4A82B4"]

function draw_rect([x, y], w, h, c, a) {
    noStroke();
    fill(c[0], c[1], c[2], a);
    rect((x + 1) * width / 2, (y + 1) * width / 2, w, h);
}

function draw_circle([x, y], r, c, a) {
    // noStroke();
    // fill(c[0], c[1], c[2], a);
    stroke(c[0], c[1], c[2], a);
    circle((x + 1) * width / 2, (y + 1) * width / 2, r / 2);
}



function setup() {
    createCanvas(800, 800);
    angleMode(DEGREES);
    noLoop();
    background(palette[3]);

}

function draw() {
    noStroke();

    fill(palette[0]);
    arc(width / 2, height / 2, 400, 400, 90, -90);
    fill(palette[4]);
    arc(width / 2, height / 2, 250, 250, 90, -90);
    fill(palette[5]);
    arc(width / 2, height / 2, 400, 400, -90, 90);
    fill(palette[1]);
    arc(width / 2, height / 2, 250, 250, -90, 90);
    fill(palette[2]);
    arc(width / 2, height / 2, 125, 125, -90, 90);

    fill(palette[4]);
    triangle(width / 2, height / 2, width / 2 + 3, height / 2 + 5, width / 2, height / 2 + 5);

    fill(palette[3]);
    triangle(width / 2, height / 2, width / 2 - 3, height / 2 + 5, width / 2, height / 2 + 5);


}
