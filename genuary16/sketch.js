let R = (a = 1) => Math.random() * a;

const skyBlue = ["#35D6ED", "#65DDEF", "#7AE5F5", "#97EBF4", "#C9F6FF"];
const darkSkyBlue = ["#3190C5", "#60B7DE", "#87CEEB", "#B0E1F9", "#5CD1FA"];
const neutralBlue = ["#98B6D4", "#ADC4DD", "#CAD5E3", "#8EB1D9", "#7B9FCF"];
const colorsSpring = ["#FFC736", "#D43B99", "#521F95", "#1297C7", "#9FF086"];
const pureSpring = ["#64A3F5", "#7862D1", "#FD7E89", "#FAEFA7", "#9CE08B"];
const tearsOfLove = ["#B065A9", "#995BA4", "#82519E", "#AA7BB9", "#D1A5D4"];
const lovedOnes = ["#D3A1FF", "#FFB8DF", "#FFF5D6", "#FFB08F", "#FF87BB"];
const royalty = ["#82409C", "#82409C", "#F7A961", "#F7A961", "#F7A961"];
const sunsetFlight = ["#6B7FCE", "#CF87C0", "#ECA1AE", "#E8C4AC", "#C2A7CE"];
const underTheBed = ["#4A65BA", "#400F63", "#810066", "#BF1365", "#E47272"];
const holdMeForever = ["#3B3267", "#3B3267", "#903477", "#903477", "#903477"];
const gentlyElectric = ["#7B42EE", "#3DD9D8", "#AFF8CA", "#FCF6E0", "#F6D7CA"];

const palettes = [skyBlue, darkSkyBlue, neutralBlue, colorsSpring, pureSpring, tearsOfLove, lovedOnes, royalty, sunsetFlight, underTheBed, holdMeForever, gentlyElectric];

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
    createCanvas(800, 800);
    // background(0);
    noLoop();
}

function draw() {
    const palette = palettes[random([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])];
    background(palette[0]);
    // noStroke();
    strokeWeight(1);
    stroke([palette[Math.floor(random(1, 5))]])
    let shapes = Math.floor(random(6, 130));

    for (let i = 0; i < shapes; i++) {
        let p = [random(-0.9, 0), random(-0.9, 0)];
        let pMirror = [p[0] * -1, p[1]];
        let pMirror2 = [p[0], p[1] * -1];
        let pMirror3 = [p[0] * -1, p[1] * -1];
        let size = Math.floor(R(80));
        let color = Math.floor(random(1, 5));


        draw_circle(p, size, palette[color]);
        draw_circle(pMirror, size, palette[color]);
        draw_circle(pMirror2, size, palette[color]);
        draw_circle(pMirror3, size, palette[color]);
    }
}
