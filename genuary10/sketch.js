let R = (a = 1) => Math.random() * a;

const shakira = ["#0C94D0", "#0B75AC", "#002040", "#034442", "#0DA680", "#501BAC"];
const bg = "#001739";

function setup() {
    createCanvas(800, 800);
    background(bg);
    frameRate(10);
}


function draw_square([x, y], w, h) {
    rect((x + 1) * width / 2, (y + 1) * width / 2, w, h);
}

function draw() {
    let x = 0.99;
    let y = 0.99;
    for (let i = 0; i < 20; i++) {
        y = 0.99;
        let amount = R(50);
        // stroke(1);
        let color = R(6);
        console.log(color);
        fill(shakira[Math.floor(color)]);
        for (let j = 0; j < amount; j++) {
            y = y - 0.03
            let p = [-x, (y)];
            draw_square(p, 20, 10);
        }
        noStroke();
        fill(bg);
        for (let j = amount; j > 1; j--) {
            y = y - 0.03
            let p = [-x, (y)];
            draw_square(p, 20, 10);
        }
        x = x - (0.1);
    }

}
