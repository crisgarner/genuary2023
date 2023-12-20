const height = 400;
const width = 850;

let font,
    fontsize = 22;
let reset = false;
var time;
// the interval to wait between time "snapshots": 2s (2000 milliseconds) in this case
var wait = 500;
var blinkWait = 100;
let blink = true;
let step = 1;
let consoleText = "";

let commands = ["yarn test", "yarn debug", "npm start", "forge test", "forge build", "forge deploy"];
let command;
let fresh = true;

function preload() {
    // Ensure the .ttf or .otf font stored in the assets directory
    // is loaded before setup() and draw() are called
    font = loadFont('assets/font.ttf');
}

function setup() {
    createCanvas(width, height);
    // Set text characteristics
    textFont(font);
    textSize(fontsize);
    textAlign(LEFT, CENTER);
    frameRate(5);
    // noLoop();
    loop();
    //store the current time
    time = millis();
}

function draw() {
    background(0);
    fill("#03a062");


    if (fresh == true) {
        const commandVal = random([0, 1, 2, 3, 4, 5]);
        command = commands[commandVal].split(" ");
        fresh = false;
    }

    switch (step) {
        case 1:
            consoleText = "";
            break;
        case 2:
            consoleText = command[0] + " ";
            break;
        case 3:
            consoleText = command[0] + " " + command[1] + " ";
            break;
        default:
            consoleText = "";
            break;
    }

    if (millis() - time >= blinkWait) {
        if (blink == true) {
            consoleText = consoleText + "|"
        }
        blink = !blink;
    }
    text(consoleText, 30, 20);
    if (millis() - time >= wait) {
        time = millis();
        if (reset == false) {
            step = step + 1;
            if (step > 3) {
                reset = true;
                step = 3;
            }
        } else {
            step = step - 1;
            if (step < 1) {
                reset = false;
                step = 0;
                fresh = true;
            }
        }

    }
}
