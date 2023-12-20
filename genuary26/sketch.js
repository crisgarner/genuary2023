let R = (a = 1) => Math.random() * a;
let L = (x, y) => (x * x + y * y) ** 0.5; // Elements by Euclid 300 BC

// const palette = [color(247, 181, 47), "#92024B", "#184277"];

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
    noLoop();
}

function draw() {
    let mode = random(["mono", "full", "chaos"]);
    if (mode == "chaos") {
        background(255);
    } else {
        background(0);
    }

    noFill();

    switch (mode) {
        case "mono":
            monoRainbow();
            break;
        case "full":
            fullRainbow();
            break;
        case "chaos":
            chaosRainbow();
            break;
        default:
            monoRainbow();
            break;
    }

}

function fullRainbow() {
    for (let i = 0; i < 140; i++) {
        draw_circle([0, 1], width * 2 * i * 0.005 + 800, [255, 0, 0], i);
    }

    for (let i = 0; i < 120; i++) {
        draw_circle([0, 1], width * 2 * i * 0.005 + 800, [255, 165, 0], i);
    }

    for (let i = 0; i < 100; i++) {
        draw_circle([0, 1], width * 2 * i * 0.005 + 800, [255, 255, 0], i);
    }

    for (let i = 0; i < 80; i++) {
        draw_circle([0, 1], width * 2 * i * 0.005 + 800, [0, 255, 0], i);
    }

    for (let i = 0; i < 60; i++) {
        draw_circle([0, 1], width * 2 * i * 0.005 + 800, [0, 0, 255], i + 50);
    }
    for (let i = 0; i < 40; i++) {
        draw_circle([0, 1], width * 2 * i * 0.005 + 800, [75, 0, 130], i + 50);
    }

    for (let i = 0; i < 20; i++) {
        draw_circle([0, 1], width * 2 * i * 0.005 + 800, [238, 130, 238], i + 50);
    }
}

function chaosRainbow() {

    for (let i = 0; i < 140; i++) {
        let col1 = Math.floor(R(255));
        let col2 = Math.floor(R(255));
        let col3 = Math.floor(R(255));
        draw_circle([0, 1], width * 2 * i * 0.005 + 800, [col1, col2, col3], i);
    }

    for (let i = 0; i < 120; i++) {
        let col1 = Math.floor(R(255));
        let col2 = Math.floor(R(255));
        let col3 = Math.floor(R(255));
        draw_circle([0, 1], width * 2 * i * 0.005 + 800, [col1, col2, col3], i);
    }

    for (let i = 0; i < 100; i++) {
        let col1 = Math.floor(R(255));
        let col2 = Math.floor(R(255));
        let col3 = Math.floor(R(255));
        draw_circle([0, 1], width * 2 * i * 0.005 + 800, [col1, col2, col3], i);
    }

    for (let i = 0; i < 80; i++) {
        let col1 = Math.floor(R(255));
        let col2 = Math.floor(R(255));
        let col3 = Math.floor(R(255));
        draw_circle([0, 1], width * 2 * i * 0.005 + 800, [col1, col2, col3], i);
    }

    for (let i = 0; i < 60; i++) {
        let col1 = Math.floor(R(255));
        let col2 = Math.floor(R(255));
        let col3 = Math.floor(R(255));
        draw_circle([0, 1], width * 2 * i * 0.005 + 800, [col1, col2, col3], i);
    }
    for (let i = 0; i < 40; i++) {
        let col1 = Math.floor(R(255));
        let col2 = Math.floor(R(255));
        let col3 = Math.floor(R(255));
        draw_circle([0, 1], width * 2 * i * 0.005 + 800, [col1, col2, col3], i + 50);
    }

    for (let i = 0; i < 20; i++) {
        let col1 = Math.floor(R(255));
        let col2 = Math.floor(R(255));
        let col3 = Math.floor(R(255));
        draw_circle([0, 1], width * 2 * i * 0.005 + 800, [col1, col2, col3], i + 50);
    }
}


function monoRainbow() {
    let col1 = Math.floor(R(255));
    let col2 = Math.floor(R(255));
    let col3 = Math.floor(R(255));
    for (let i = 0; i < 140; i++) {
        draw_circle([0, 1], width * 2 * i * 0.005 + 800, [col1, col2, col3], i);
    }

    for (let i = 0; i < 120; i++) {
        draw_circle([0, 1], width * 2 * i * 0.005 + 800, [col1, col2, col3], i);
    }

    for (let i = 0; i < 100; i++) {
        draw_circle([0, 1], width * 2 * i * 0.005 + 800, [col1, col2, col3], i);
    }

    for (let i = 0; i < 80; i++) {
        draw_circle([0, 1], width * 2 * i * 0.005 + 800, [col1, col2, col3], i);
    }

    for (let i = 0; i < 60; i++) {
        draw_circle([0, 1], width * 2 * i * 0.005 + 800, [col1, col2, col3], i);
    }
    for (let i = 0; i < 40; i++) {
        draw_circle([0, 1], width * 2 * i * 0.005 + 800, [col1, col2, col3], i + 50);
    }

    for (let i = 0; i < 20; i++) {
        draw_circle([0, 1], width * 2 * i * 0.005 + 800, [col1, col2, col3], i + 50);
    }
}
