const height = 1000;
const width = 1000;

let yoff = 0.0; // 2nd dimension of perlin noise
let yoff2 = 10.0; // 2nd dimension of perlin noise
let yoff3 = 121210.0; // 2nd dimension of perlin noise
let yoff4 = 111220.0; // 2nd dimension of perlin noise
let yoff5 = 0.0; // 2nd dimension of perlin noise

function setup() {
    createCanvas(width, height);
    background(0);
    // noLoop();
}

function draw() {
    background(0);

    fill(255);
    // We are going to draw a polygon out of the wave points
    beginShape();

    let xoff = 0; // Option #1: 2D Noise
    // let xoff = yoff; // Option #2: 1D Noise

    // Iterate over vertical pixels
    for (let y = 0; y <= height; y += 10) {
        // Calculate a y value according to noise, map to

        // Option #1: 2D Noise
        let x = map(noise(xoff, yoff), 0, 1, width / 2, 300);

        // Option #2: 1D Noise
        // let y = map(noise(xoff), 0, 1, 200, 300);

        // Set the vertex
        vertex(x, y);
        // Increment x dimension for noise
        xoff += 0.05;
    }
    // increment y dimension for noise
    yoff += 0.1;
    vertex(width, height);
    vertex(width, 0);
    endShape(CLOSE);

    let randomRed = random(1);
    if (randomRed < 0.5) {
        fill("#ff0000");
        beginShape();
        let xoff2 = 0; // Option #1: 2D Noise
        // let xoff = yoff; // Option #2: 1D Noise

        // Iterate over vertical pixels
        for (let y = 0; y <= height; y += 10) {
            // Calculate a y value according to noise, map to

            // Option #1: 2D Noise
            let x = map(noise(xoff2, yoff2), 0, 1, (width / 2), 300);

            // Option #2: 1D Noise
            // let y = map(noise(xoff), 0, 1, 200, 300);

            // Set the vertex
            vertex(x, y);
            // Increment x dimension for noise
            xoff2 += 0.05;
        }
        // increment y dimension for noise
        yoff2 += 0.1;
        vertex(width, height);
        vertex(width, 0);
        endShape(CLOSE);
    }

    let randomYellow = random(1);
    if (randomYellow < 0.9) {
        fill("#ffff00");
        beginShape();
        let xoff3 = 0; // Option #1: 2D Noise
        // let xoff = yoff; // Option #2: 1D Noise

        // Iterate over vertical pixels
        for (let y = 0; y <= height; y += 10) {
            // Calculate a y value according to noise, map to

            // Option #1: 2D Noise
            let x = map(noise(xoff3, yoff3), 0, 1, (width / 2), 300);

            // Option #2: 1D Noise
            // let y = map(noise(xoff), 0, 1, 200, 300);

            // Set the vertex
            vertex(x, y);
            // Increment x dimension for noise
            xoff3 += 0.05;
        }
        // increment y dimension for noise
        yoff3 += 0.1;
        vertex(width, height);
        vertex(width, 0);
        endShape(CLOSE);
    }

    let randomGreen = random(1);
    if (randomGreen < 0.3) {
        fill("#00ff00");
        beginShape();

        let xoff4 = 0; // Option #1: 2D Noise
        // let xoff = yoff; // Option #2: 1D Noise

        // Iterate over vertical pixels
        for (let y = 0; y <= height; y += 10) {
            // Calculate a y value according to noise, map to

            // Option #1: 2D Noise
            let x = map(noise(xoff4, yoff4), 0, 1, (width / 2), 300);

            // Option #2: 1D Noise
            // let y = map(noise(xoff), 0, 1, 200, 300);

            // Set the vertex
            vertex(x, y);
            // Increment x dimension for noise
            xoff4 += 0.05;
        }
        // increment y dimension for noise
        yoff4 += 0.1;
        vertex(width, height);
        vertex(width, 0);
        endShape(CLOSE);
    }
    fill(0);
    beginShape();
    // fill(0);

    let xoff5 = 1110; // Option #1: 2D Noise
    // let xoff = yoff; // Option #2: 1D Noise

    // Iterate over vertical pixels
    for (let y = 0; y <= height; y += 10) {
        // Calculate a y value according to noise, map to

        // Option #1: 2D Noise
        let x = map(noise(xoff5, yoff5), 0, 1, (width / 2) + 20, 300);

        // Option #2: 1D Noise
        // let y = map(noise(xoff), 0, 1, 200, 300);

        // Set the vertex
        vertex(x, y);
        // Increment x dimension for noise
        xoff5 += 10.05;
    }
    // increment y dimension for noise
    yoff5 += 10.1;
    vertex(width, height);
    vertex(width, 0);
    endShape(CLOSE);



}
