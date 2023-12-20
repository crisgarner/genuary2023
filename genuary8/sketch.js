let R = (a = 1) => Math.random() * a;
let L = (x, y) => (x * x + y * y) ** 0.5; // Elements by Euclid 300 BC

const palette = ["#7B42EE", "#3DD9D8", "#AFF8CA", "#FCF6E0", "#F6D7CA"];
const palette2 = ["#9C51B6", "#8A46A2", "#783C8E", "#67317B", "#552767", "#431C53"];

function setup() {
    createCanvas(800, 800);
    background('#431C53');
}

function draw_circle([x, y], r, c) {
    noStroke(); fill(c);
    circle((x + 1) * width / 2, (y + 1) * width / 2, r / 2);
}

function sdf_circle([x, y], [cx, cy], r) {
    x -= cx;
    y -= cy;
    return L(x, y) - r;
}

function sdf_line(y) {
    return y;
}

function sdf([x, y]) {
    let circle_val = sdf_circle([x, y], [0, 0], .5);

    circle_val = abs(circle_val) - 0.1;
    circle_val = abs(circle_val) - 0.05;
    circle_val = abs(circle_val) - 0.025;
    circle_val = abs(circle_val) - 0.025;
    circle_val = abs(circle_val) - 0.025;
    circle_val = abs(circle_val) - 0.025;
    circle_val = abs(circle_val) - 0.025;
    circle_val = abs(circle_val) - 0.025;
    circle_val = abs(circle_val) - 0.025;
    circle_val = abs(circle_val) - 0.025;
    circle_val = abs(circle_val) - 0.025;
    circle_val = abs(circle_val) - 0.025;

    // circle_val = abs(circle_val) - 0.05/;
    // circle_val = abs(circle_val) - 0.1;
    // circle_val = abs(circle_val) - 0.1;
    // circle_val = abs(circle_val) - 0.1;
    // circle_val = abs(circle_val) - 0.1;
    // circle_val = abs(circle_val) - 0.1;
    // return (Math.min(line_val, circle_val));
    return circle_val;
}

function draw() {
    for (let k = 0; k < 1000; k++) {
        let p = [R(2) - 1, R(2) - 1];
        let d = sdf(p);
        let col = palette[random([0, 1, 2, 3, 4])];
        if (d < -.01) col = palette2[random([0, 1, 2, 3, 4, 5])];
        // if (d > .01) col = '#f80';
        draw_circle(p, 5, col);
    }
}
