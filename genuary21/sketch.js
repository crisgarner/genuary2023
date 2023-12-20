let R = (a = 1) => Math.random() * a;
let L = (x, y) => (x * x + y * y) ** 0.5; // Elements by Euclid 300 BC

const palette = ["#454242", "#171929", "#3099A0", "#6A4B3B", "#AF1324", "#FBE3BB", "#683632", "#331F24", "#9C7764", "#343537"];

function setup() {
    createCanvas(800, 400);
    background(palette[0]);
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

function sdf_box([x, y], [cx, cy], [w, h]) {
    x -= cx;
    y -= cy;
    return k(abs(x) - w, abs(y) - h);
}

let k = (a, b) => a > 0 && b > 0 ? L(a, b) : a > b ? a : b;

function sdf_line(y) {
    return y;
}

function sdf([x, y]) {
    // let circle_val = sdf_circle([x, y], [0, 0], .5);
    let box_val = sdf_box([x, y], [-0, -0.5], [0.9, .45]);
    let box_val2 = sdf_box([x, y], [-0, -0.5], [0.8, .35]);


    // circle_val = abs(circle_val) - 0.05/;
    // circle_val = abs(circle_val) - 0.1;
    // circle_val = abs(circle_val) - 0.1;
    // circle_val = abs(circle_val) - 0.1;
    // circle_val = abs(circle_val) - 0.1;
    // circle_val = abs(circle_val) - 0.1;
    box_val = Math.min(abs(box_val), abs(box_val2));
    box_val = abs(box_val) - 0.05;
    // return (Math.min(box_val, box_val2));
    return box_val;
}

function sdf2([x, y]) {
    // let circle_val = sdf_circle([x, y], [0, 0], .5);
    let box_val = sdf_box([x, y], [-0, -0.5], [0.75, .35]);


    // circle_val = abs(circle_val) - 0.05/;
    // circle_val = abs(circle_val) - 0.1;
    // circle_val = abs(circle_val) - 0.1;
    // circle_val = abs(circle_val) - 0.1;
    // circle_val = abs(circle_val) - 0.1;
    // circle_val = abs(circle_val) - 0.1;
    // box_val = Math.min(abs(box_val), abs(box_val2));
    // box_val = abs(box_val) - 0.05;

    return box_val;
}

function sdf3([x, y]) {
    let circle_val = sdf_circle([x, y], [0, -0.5], .25);



    // circle_val = abs(circle_val) - 0.05/;
    // circle_val = abs(circle_val) - 0.1;
    // circle_val = abs(circle_val) - 0.1;
    // circle_val = abs(circle_val) - 0.1;
    // circle_val = abs(circle_val) - 0.1;
    // circle_val = abs(circle_val) - 0.1;
    // box_val = Math.min(abs(box_val), abs(box_val2));
    // box_val = abs(box_val) - 0.05;

    return circle_val;
}

function draw() {
    for (let k = 0; k < 1000; k++) {
        let p = [R(2) - 1, R(2) - 1];
        let d = sdf(p);
        let col = palette[random([1, 2, 3, 4, 5, 6, 7, 8, 9])];
        if (d < -.01) {
            col = palette[random([0, 1, 2, 3, 4, 5])];
            draw_circle(p, 5, col);
        }
    }

    for (let k = 0; k < 1000; k++) {
        let p = [R(2) - 1, R(2) - 1];
        let d = sdf2(p);
        if (d < -.01) {
            col = palette[random([1, 9, 8, 3, 2])]
            draw_circle(p, 5, col);
        }
    }

    for (let k = 0; k < 1000; k++) {
        let p = [R(2) - 1, R(2) - 1];
        let d = sdf3(p);
        if (d < -.01) {
            col = palette[random([4, 5])]
            draw_circle(p, 5, col);
        }
    }
}
