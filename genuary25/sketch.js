let R = (a = 1) => Math.random() * a;
let L = (x, y) => (x * x + y * y) ** 0.5; // Elements by Euclid 300 BC

// const palette = [color(247, 181, 47), "#92024B", "#184277"];

function draw_rect([x, y], w, h, c, a) {
    noStroke();
    fill(c[0], c[1], c[2], a);
    rect((x + 1) * width / 2, (y + 1) * width / 2, w, h);
}

function draw_circle([x, y], r, c, a) {
    noStroke();
    fill(c[0], c[1], c[2], a);
    circle((x + 1) * width / 2, (y + 1) * width / 2, r / 2);
}


function setup() {
    createCanvas(800, 800);
    noLoop();
}

function draw() {
    background("#FDBB01");

    stroke("#fff");
    strokeWeight(0.3);
    for (let i = 1; i < 1000; i++) {
        line(i * 2, 0, i * 2, height);
    }

    stroke(0);
    strokeWeight(3);
    line(200, 0, 200, height);
    line(width - 200, 0, width - 200, height);
    // strokeWeight(15);
    line(width / 2, 0, width / 2, height);

    // strokeWeight(5);
    line(0, 200, width, 200);
    line(0, height - 200, width, height - 200);
    // strokeWeight(10);
    line(0, height / 2, width, height / 2);


    for (let i = 0; i < 7; i++) {
        for (let k = 0; k < 8; k++) {
            // let p = [R(k) - 1, R(2) - 1];
            let p = [k * 0.26 - 0.95, i * 0.3 + k * 0.0 - 0.9]
            draw_circle([p[0] + R(0.05), p[1] + R(0.05)], 70, [0, 0, 0], 255);
            draw_circle([p[0] - 0.13 + R(0.05), p[1] + R(0.1)], 35, [0, 0, 0], 255);
            draw_circle([p[0] - 0.05 + R(0.05), p[1] - 0.1 + R(0.05)], 35, [0, 0, 0], 255);
            draw_circle([p[0] - 0.05 + R(0.05), p[1] + 0.1 + R(0.05)], 35, [0, 0, 0], 255);

            draw_circle([p[0] + 0.13 + R(0.05), p[1] + R(0.05)], 35, [0, 0, 0], 255);
            draw_circle([p[0] + 0.05 + R(0.05), p[1] - 0.1 + R(0.05)], 35, [0, 0, 0], 255);
            draw_circle([p[0] + 0.05 + R(0.05), p[1] + 0.1 + R(0.05)], 35, [0, 0, 0], 255);

        }
    }
}
