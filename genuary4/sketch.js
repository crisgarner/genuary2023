const height = 1000;
const width = 1000;

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

function setup() {
    createCanvas(width, height);
    noLoop();
}

function draw() {
    const palette = palettes[random([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])];
    background(palette[0]);
    rectMode(CENTER);
    let randRepetitions = random(1, 200);
    let randSize = random(1, 15);
    translate(width * 0.5, height * 0.5);
    noFill();
    for (let i = randRepetitions; i >= 0; i--) {
        const color = random([0, 1, 2, 3, 4]);
        const withFill = random([0, 1]);
        if (withFill == 0) {
            // fill(palette[color]);
            noFill();
        } else {
            noFill();
        }
        stroke(palette[color]);
        const size = width * (randSize * 0.01 * i);
        rect(0, 0, size * 2, size);
        rect(0, 0, size, size * 2);
    }
}
