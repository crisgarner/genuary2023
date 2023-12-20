let R = (a = 1) => Math.random() * a;
let L = (x, y) => (x * x + y * y) ** 0.5; // Elements by Euclid 300 BC

const palette = ["#03071e", "#370617", "#6a040f", "#9d0208", "#d00000", "#dc2f02", "#e85d04", "#f48c06", "#faa307", "#ffba08"];

function setup() {
    createCanvas(800, 800);
    background(palette[0]);
    noLoop();
}

function draw_circle([x, y], r, c) {
    noStroke();
    fill(c);
    circle((x + 1) * width / 2, (y + 1) * width / 2, r / 2);
}

function draw_square([x, y], w, h, c) {
    // noStroke();
    fill(c);
    strokeWeight(4);
    rect((x + 1) * width / 2, (y + 1) * width / 2, w, h);
}


function draw() {
    strokeWeight(0);

    let x = 0;
    for (let i = 9; i >= 0; i--) {
        console.log(palette[i]);
        fill(palette[x]);
        rect(0, 60 * i, width, 50);
        x++;
    }

    for (let i = 20; i > 0; i--) {
        const rand = random([1, 2]);
        const p = createVector(random(-1, 1), i * 0.01);
        switch (rand) {
            case 1:
                draw_square([p.x, (p.y)], 100, 810 - (i * 10), color(255));
                draw_square([p.x + 0.025, (p.y)], 80, 810 - (i * 10), color(0));
                break;

            case 2:
                draw_square([p.x, (p.y)], 100, 810 - (i * 10), color(255));
                // draw_square([p.x, (p.y)], 10, 810 - (i * 10), color(255));
                break;

            case 3:
                draw_square([p.x, (p.y)], 100, 810 - (i * 10), color(255));
                draw_square([p.x + 0.11, (p.y)], 10, 810 - (i * 10), color(255));
                break;

            default:
                draw_square([p.x, (p.y)], 100, 810 - (i * 10), color(255));
                draw_square([p.x + 0.025, (p.y)], 80, 810 - (i * 10), color(0));
                break;
        }



    }
}
