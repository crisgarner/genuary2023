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

let y = 0;
let x = 0;

// The statements in the setup() function
// execute once when the program begins
function setup() {
    createCanvas(height, width); // Size must be the first statement
    stroke(255); // Set line drawing color to white
    frameRate(10);
    loop();
}
// The statements in draw() are executed until the
// program is stopped. Each statement is executed in
// sequence and after the last line is read, the first
// line is executed again.
function draw() {
    background(0); // Set the background to black
    for (let i = 0; i < 70; i++) {
        y = random(1, height);
        x = random(1, width);

        const type = random([1, 2]);

        switch (type) {
            case 1:
                //cross
                //horizontal
                line(x + 5, y, x + 15, y);
                //vertical
                line(x + 10, y + 5, x + 10, y - 5);
                break;
            case 2:
                // X lines
                line(x + 5, y + 5, x + 15, y - 5);
                line(x + 5, y - 5, x + 15, y + 5);
                break;
            case 3:
                // X
                line(x + 5, y + 5, x + 15, y - 5);
                line(x + 5, y - 5, x + 15, y + 5);
                //cross
                //horizontal
                line(x + 5, y, x + 15, y);
                //vertical
                line(x + 10, y + 5, x + 10, y - 5);
                break;
            default:
                //cross
                //horizontal
                line(x + 5, y, x + 15, y);
                //vertical
                line(x + 10, y + 5, x + 10, y - 5);
                break;
        }





    }

    // for ()
}

function mousePressed() {

}
