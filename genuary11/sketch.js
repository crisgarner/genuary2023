let R = (a = 1) => Math.random() * a;

const palette = ["#F2F3F5", "#081130", "#D5435C", "#E9526C", "#FCD365", "#25A793", "#D2252B", "#2C5F8C", "#E77E2E"]


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

function draw_rect() {

}


function setup() {
    createCanvas(800, 800);
    noLoop();

}

function draw() {
    background(palette[0]);
    let shapes = Math.floor(random(6, (30)));
    let angle = (R(1))
    let willRotate = random([true, false]);
    for (let i = 0; i < shapes; i++) {
        let p = [random(-1, 1), random(-1, 1)];
        let size = Math.floor(R(500));
        let color = Math.floor(random(1, 9));
        if (willRotate) {
            rotate(angle);
            rotate(angle);
            rotate(angle);
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
}
