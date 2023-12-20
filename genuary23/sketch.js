
let y = 0;
let back = false;
function setup() {
    createCanvas(600, 615);
    frameRate(100);
}

function draw() {
    background(255);


    for (let i = 1; i < 20; i++) {
        fill(0);
        strokeWeight(6);
        line(18, 200 + i * 18, 600 - 200, 200 + i * 18);
    }

    for (let i = 1; i < 20; i++) {
        line(100, 100 + i * 18 - y * 2, 520 - 20, 100 + i * 18 - y * 2);
    }

    if (back) {
        y--;
    } else {
        y++;
    }

    if (y > 30) {
        back = true;
    }

    if (y < 0) {
        back = false;
    }

}
