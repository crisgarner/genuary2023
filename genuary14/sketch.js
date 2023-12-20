let points = [];
let scribles = [];
var mult = 0.5;

let pencils = ["#b01f35", "#338cc7", "#000000", "#085838"];
let color;
function setup() {
    createCanvas(windowWidth, windowHeight);
    background("#efefe4");
    angleMode(DEGREES);
    noiseDetail(1);
    frameRate(10000);
    var density = 30;
    var space = width / density;
    for (let x = 0; x < width; x += space) {
        for (let y = 0; y < height; y += space) {
            var p = createVector(x, y);
            var s = createVector(x + 5, y + 5);
            points.push(p);
            scribles.push(s);
        }

    }
    color = pencils[Math.floor(random(0, 3))]
}

function draw() {
    // noStroke();
    strokeWeight(3);
    var density = 30;
    var space = width / density;
    for (let i = 0; i < points.length; i++) {
        fill(0);
        scribles[i].add(createVector(cos(angle), sin(angle)));
        ellipse(points[i].x, points[i].y, 1);
    }

    strokeWeight(0);
    fill(color);
    for (let i = 0; i < scribles.length; i++) {

        var angle = map(noise(scribles[i].x * mult, scribles[i].y * mult), 0, 1, 0, 720);
        scribles[i].add(createVector(cos(angle), sin(angle)));
        ellipse(scribles[i].x, scribles[i].y + (space / 2), 1);

    }
}
