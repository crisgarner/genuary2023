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
    const palette = [[247, 181, 47], [146, 2, 75], [24, 66, 119]];
    // background(0);
    colIndex = random([0, 1, 2]);
    for (let x = 0; x < 20; x++) {

        for (let y = 0; y < 20; y++) {
            draw_rect([(y * 0.25) - 1, (x * 0.25) - 1], 100, 100, palette[colIndex], 250);
        }
        colIndex++;
        if (colIndex > 2) {
            colIndex = 0;
        }
    }

    for (let x = 0; x < 20; x++) {
        for (let y = 0; y < 20; y++) {
            draw_rect([(x * 0.25) - 1, (y * 0.25) - 1], 100, 100, palette[colIndex], 70);
        }
        colIndex++;
        if (colIndex > 2) {
            colIndex = 0;
        }
    }

    for (let k = 0; k < 155000; k++) {
        let p = [R(2) - 1, R(2) - 1];

        draw_circle(p, 3, palette[0], 70);

    }

    // for (let k = 0; k < 15000; k++) {
    //     let p = [R(2) - 1, R(2) - 1];
    //     let col = palette[random([0, 1, 2, 3, 4, 5])];
    //     draw_rect(p, 5, 5, col);
    // }


}
