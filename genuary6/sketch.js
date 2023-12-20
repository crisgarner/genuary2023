const height = 3000;
const width = 2400;

const palette = ["#db4f54", "#d12a2f", "#e57d32", "#fcd265", "#fcbc19", "#f7b1a1", "#e0d7c5", "#b8d9ce", "#29a691", "#121a33", "#1f3359", "#315f8c", "#7ca9bf", "#543e2e", "#3b2b20", "#261c15"];

function setup() {
    createCanvas(width, height);
    noLoop();
}

function draw() {
    background(palette[6]);
    rectMode(CENTER);
    noFill();
    translate(250, 250);
    let randomY;
    let randomX;
    let pair = true;
    for (let x = 0; x < 18; x++) {
        if (pair) {
            for (let y = 0; y < 11; y++) {
                const color = random([0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
                const color2 = random([0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
                strokeWeight(5);
                let yposition = x * 150;
                createCircle(6, palette[color], 0, yposition);
                createCircle(6, palette[color2], -4, yposition - 4);
                randomY = random(-5, 5);
                randomX = random(-15, 15);
                translate(180 + randomX, randomY);
                pair = false;
            }
            resetMatrix();
            translate(250, 250);
        } else {
            translate(100, 0);
            for (let y = 0; y < 10; y++) {
                const color = random([0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
                const color2 = random([0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
                strokeWeight(5);
                let yposition = x * 150;
                createCircle(6, palette[color], 0, yposition);
                createCircle(6, palette[color2], -4, yposition - 4);
                randomY = random(-5, 5);
                translate(180, randomY);
                pair = true;
            }
            resetMatrix();
            translate(250, 250);
        }

    }

}

function createCircle(repetitions, fillColor, x, y) {
    for (let i = repetitions; i >= 0; i--) {
        const size = 600 * (2 * 0.01 * i);
        stroke(fillColor);
        circle(x, y, size, size);
    }
}
