let points = [];
var mult = 0.0001;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background("#000");
    angleMode(DEGREES);
    noiseDetail(1);
    frameRate(100);
    var density = 20;
    var space = width / density;
    for (let x = 0; x < width; x += space) {
        for (let y = 0; y < height; y += space) {
            var p = createVector(x + random(-10, 10), y + random(-10, 10));
            points.push(p);
        }

    }
}

function draw() {
    let r1 = random(255);
    let r2 = random(255);
    let g1 = random(255);
    let g2 = random(255);
    let b1 = random(255);
    let b2 = random(255);
    noStroke();
    for (let i = 0; i < points.length; i++) {
        var r = map(points[i].x, 0, width, 100, r2);
        var g = map(points[i].y, 0, height, 50, g2);
        var b = map(points[i].x, 0, width, 50, b2);
        fill(r, g, b);
        var angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 0, 720);
        points[i].add(createVector(cos(angle), sin(angle)));
        ellipse(points[i].x, points[i].y, 1);

    }
}
