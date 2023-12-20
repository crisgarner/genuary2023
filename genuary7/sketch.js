const height = 1000;
const width = 1000;

const lotr = ["#251d18", "#402f21", "#5a452e", "#72593d", "#896f4c", "#a0855e", "#b79c71", "#c9b18a", "#e7d9bd", "#f3ead8"];
const mugenTrain = ["#F1EEEE", "#141316", "#211B28", "#166996", "#E9C3A5", "#282F33", "#B96A73", "#202229", "#C21126", "#1C3247"]


const palettes = [lotr, mugenTrain];

function setup() {
    createCanvas(width, height);
    noLoop();
}

function draw() {
    const palette = palettes[random([0, 1])];
    const shape = random(["circle"]);
    background(palette[0]);
    rectMode(CENTER);
    let randRepetitions = 500;
    let randSize = 1;
    translate(width * 0.5, height * 0.5);
    noFill();
    for (let i = randRepetitions; i >= 0; i--) {
        const color = random([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
        const withFill = random([0, 1]);
        if (withFill == 0) {
            fill(palette[color]);
        } else {
            noFill();
        }
        stroke(palette[color]);
        const size = width * (randSize * 0.01 * i);
        if (shape == "rect") {
            rect(0, 0, size, size);
        } else {
            circle(0, 0, size, size);
        }
    }
}
