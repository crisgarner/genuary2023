let R = (a = 1) => Math.random() * a;


let points = [];
var mult = 0.01;

const palette = ["#3A4140", "#380F34", "#21150F", "#473475", "#EF9010", "#E51F7D", "#251A1D", "#D51306", "#6B1622", "#B4327C"]
let noiseColor;



function draw_square([x, y], w, h, c) {
    noStroke();
    fill(c);
    rect((x + 1) * width / 2, (y + 1) * width / 2, w, h);
}

function draw_circle([x, y], r, c) {
    noStroke();
    fill(c);
    circle((x + 1) * width / 2, (y + 1) * width / 2, r / 2);
}

function draw_arc([x, y], r, c) {
    noStroke();
    fill(c);
    arc((x + 1) * width / 2, (y + 1) * width / 2, r, r, PI, TWO_PI);
}

function draw_triangle([x1, y1], [x2, y2], [x3, y3], c) {
    noStroke();
    fill(c);
    triangle(x1, y1, x2, y2, x3, y3);
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(palette[Math.floor(random(9))]);
    noiseColor = palette[Math.floor(random(9))];
    angleMode(DEGREES);
    noiseDetail(1);
    frameRate(40);
    var density = 40;
    var space = width / density;
    for (let x = 0; x < width; x += space) {
        for (let y = 0; y < height; y += space) {
            var p = createVector(x + random(-10, 10), y + random(-10, 10));
            points.push(p);
        }
    }
}

function draw() {


    let shapes = 10;
    let angleShape = (R(1))
    let willRotate = random([true, false]);
    for (let i = 0; i < shapes; i++) {
        let p = [random(-1, 1), random(-1, 1)];
        let size = Math.floor(R(500));
        let color = Math.floor(random(1, 9));
        if (willRotate) {
            rotate(angleShape);
            rotate(angleShape);
            rotate(angleShape);
        }

        let selectedShape = Math.floor(R(6));
        switch (selectedShape) {
            case 1:
                draw_circle(p, size, palette[color]);
                break;
            case 2:
                draw_square(p, size, size, palette[color]);
                break;
            case 3:
                draw_square(p, size * 2, size, palette[color]);
                break;
            case 4:
                draw_square(p, size * 2, size / 10, palette[color]);
                break;
            case 5:
                draw_triangle([18, 18], [18, 360], [81, 360], palette[color]);
                break;
            case 6:
                draw_arc(p, size, palette[color]);
                break;
            default:
                draw_circle(p, size, palette[color]);
                break;
        }
    }

    noStroke();
    fill(noiseColor)
    for (let i = 0; i < points.length; i++) {
        var angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 0, 720);
        points[i].add(createVector(cos(angle), sin(angle)));
        // stroke(300);
        ellipse(points[i].x, points[i].y, 1);
    }

    for (let i = 0; i < points.length; i++) {
        var angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 0, 720);
        points[i].add(createVector(cos(angle), sin(angle)));
        // stroke(300);
        ellipse(points[i].x, points[i].y, 1);
    }
    for (let i = 0; i < points.length; i++) {
        var angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 0, 720);
        points[i].add(createVector(cos(angle), sin(angle)));
        // stroke(300);
        ellipse(points[i].x, points[i].y, 1);
    }

}
