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


    for (let y = 0; y < height; y += space) {
        var p = createVector(0, y);
        var s = createVector(0 + 5, y + 5);
        points.push(p);
        scribles.push(s);
    }
    color = pencils[Math.floor(random(0, 3))];
    noLoop();
}

function draw() {
    // noStroke();
    strokeWeight(1);
    stroke(0, 0, 0, 70);

    var density = 30;
    var space = width / density;
    for (let i = 0; i < points.length; i++) {
        line(0, points[i].y, width, points[i].y);
    }
    strokeWeight(0.8);
    stroke(255, 10, 10, 70);
    line(30, 0, 30, height);

    // strokeWeight(1);
    noStroke();
    fill(color);
    for (let i = 0; i < width; i++) {
        // sin function =  A sin(wt + p)
        let rand = random(1, 10);
        for (let j = 1; j < points.length - 1; j++) {
            // sin function =  A sin(wt + p)
            const y = (5 * sin(20 * (i) + rand) + (space) * j);
            ellipse(i + 50, y + 15, 2, 2);
        }
        // ellipse(i + 50, 5 * sin(20 * (i) + 10) + space / 2, 1, 1);
    }
}
