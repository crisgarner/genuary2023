const height = 810;
const width = 810;
const keySize = 80;
var lastPrint;
const rows = 10;
const cols = 10;
var keys;
var currentPress = false;

const palette = ["#F6B0A0", "#F8F9F4", "#D54C5C", "#FCD264", "#EAE5D8", "#285C7D"];


function setup() {
    createCanvas(width, height);
    keys = new Array(rows); // create an empty array of length n
    for (var i = 0; i < rows; i++) {
        keys[i] = Array.from({ length: cols }).fill(false); // make each element an array
    }
    noLoop();
    // frameRate(5);
}

function draw() {
    strokeWeight(3)
    background(palette[4]);
    // noStroke();
    rectMode(CENTER);
    // stroke(30, 20, 85, 75); // changes how strong is the stroke
    // stroke(30, 20, 85, 85); // changes how strong is the stroke

    //columns
    const c = Math.floor(random(5));
    const r = random([true, false]);

    for (let i = 0; i < rows; i++) {

        resetMatrix()
        translate(0, keySize * i)
        // createKey(keyColor);
        // fill("#444444");
        // rect(keySize / 2, keySize / 2, keySize, keySize, 1)
        // fill("#555555");
        // rect(keySize / 2, keySize / 2, keySize / 1.5, keySize / 1.5, 1)
        // fill("#ffffff");
        // line(0, 0, keySize, keySize)

        // rows

        for (let j = 0; j < cols; j++) {

            let keyColor = color(palette[c]);
            if (r) {
                if (j % 2 == 0) {
                    if (c + 1 == 6) {
                        keyColor = color(palette[0]);
                    } else {
                        keyColor = color(palette[c + 1]);
                    }
                }
            } else {
                if (i % 2 == 0) {
                    if (c + 1 == 6) {
                        keyColor = color(palette[0]);
                    } else {
                        keyColor = color(palette[c + 1]);
                    }
                }
            }

            // fill("#444444");
            // // strokeWeight(5)
            // rect(keySize / 2, keySize / 2, keySize, keySize, 1)
            // // strokeWeight(1)
            // fill("#555555");
            // rect(keySize / 2, keySize / 2, keySize / 1.5, keySize / 1.5, 1)

            createKey(keyColor);
            translate(keySize, 0)
        }
    }



    //    //colums
    //    for (let i = 0; i < 5; i++) {
    //     resetMatrix()
    //     translate(0, keySize * i)
    //     fill("#444444");
    //     rect(keySize / 2, keySize / 2, keySize, keySize, 7)
    //     fill("#555555");
    //     rect(keySize / 2, keySize / 2, keySize / 1.5, keySize / 1.5, 7)
    //     fill("#ffffff");
    //     line(0, 0, keySize, keySize)

    //     // rows
    //     for (let j = 0; j < 14; j++) {

    //         fill("#444444");
    //         rect(keySize / 2, keySize / 2, keySize, keySize, 7)
    //         fill("#555555");
    //         rect(keySize / 2, keySize / 2, keySize / 1.5, keySize / 1.5, 7)
    //         line(0, 0, keySize / 6, keySize / 5)
    //         // line(0, keySize, keySize / 5, keySize / 5)
    //         translate(keySize, 0)
    //     }
    // }

    // //colums
    // for (let i = 0; i < 5; i++) {
    //     resetMatrix()
    //     translate(0, keySize * i)
    //     line(0, 0, keySize, keySize)

    //     // rows
    //     for (let j = 0; j < 14; j++) {
    //         line(0, 0, keySize, keySize)
    //         translate(keySize, 0)

    //     }
    // }


    // fill("#444444");
    // rect(keySize / 2, keySize / 2, keySize, keySize, 7)
    // fill("#555555");
    // rect(keySize / 2, keySize / 2, keySize / 1.5, keySize / 1.5, 7)

    // translate(0, keySize)
    // fill("#444444");
    // rect(keySize / 2, keySize / 2, keySize, keySize, 7)
    // fill("#555555");
    // rect(keySize / 2, keySize / 2, keySize / 1.5, keySize / 1.5, 7)

    // translate(0, keySize)
    // fill("#444444");
    // rect(keySize / 2, keySize / 2, keySize, keySize, 7)
    // fill("#555555");
    // rect(keySize / 2, keySize / 2, keySize / 1.5, keySize / 1.5, 7)

    // translate(0, keySize)
    // fill("#444444");
    // rect(keySize / 2, keySize / 2, keySize, keySize, 7)
    // fill("#555555");
    // rect(keySize / 2, keySize / 2, keySize / 1.5, keySize / 1.5, 7)

    // translate(0, keySize)
    // fill("#444444");
    // rect(keySize / 2, keySize / 2, keySize, keySize, 7)
    // fill("#555555");
    // rect(keySize / 2, keySize / 2, keySize / 1.5, keySize / 1.5, 7)

    // resetMatrix()
    // translate(keySize, 0)
    // fill("#444444");
    // rect(keySize / 2, keySize / 2, keySize, keySize, 7)
    // fill("#555555");
    // rect(keySize / 2, keySize / 2, keySize / 1.5, keySize / 1.5, 7)
    // rect(keySize / 2, keySize / 2, keySize / 1.5, keySize / 1.5, 7)
    // translate(keySize, 0)
    // fill("#444444");
    // rect(keySize / 2, keySize / 2, keySize, keySize, 7)
    // fill("#555555");
    // rect(keySize / 2, keySize / 2, keySize / 1.5, keySize / 1.5, 7)
    // rect(keySize / 2, keySize / 2, keySize / 1.5, keySize / 1.5, 7)
    // translate(keySize, 0)
    // fill("#444444");
    // rect(keySize / 2, keySize / 2, keySize, keySize, 7)
    // fill("#555555");
    // rect(keySize / 2, keySize / 2, keySize / 1.5, keySize / 1.5, 7)
    // rect(keySize / 2, keySize / 2, keySize / 1.5, keySize / 1.5, 7)
    // translate(keySize, 0)
    // fill("#444444");
    // rect(keySize / 2, keySize / 2, keySize, keySize, 7)
    // fill("#555555");
    // rect(keySize / 2, keySize / 2, keySize / 1.5, keySize / 1.5, 7)
    // rect(keySize / 2, keySize / 2, keySize / 1.5, keySize / 1.5, 7)
    // translate(keySize, 0)
    // fill("#444444");
    // rect(keySize / 2, keySize / 2, keySize, keySize, 7)
    // fill("#555555");
    // rect(keySize / 2, keySize / 2, keySize / 1.5, keySize / 1.5, 7)
    // rect(keySize / 2, keySize / 2, keySize / 1.5, keySize / 1.5, 7)

    // for (let index = 0; index < 5; index++) {
    //     square(0, keySize * index, keySize)
    //     for (let j = 0; j < 14; j++) {
    //         square(keySize * j, keySize * index, keySize)
    //     }
    // }
    // for (let index = 0; index < 5; index++) {
    //     square(keySize - (keySize / 1.13), ((index * keySize) + 8), (keySize / 1.3))

    // }
}

function createKey(keyColor) {


    const darkerColor = color(keyColor.levels[0], keyColor.levels[1] + 30, keyColor.levels[2]);
    fill(keyColor);
    rect(keySize / 2, keySize / 2, keySize, keySize, 1)

    fill(darkerColor);
    rect(keySize / 2, keySize / 2, keySize / 1.5, keySize / 1.5, 1)
    fill(keyColor);

    // Line
    strokeWeight(3)
    line(0, 0, keySize / 6, keySize / 6)
    line(0, keySize, keySize / 6, keySize / 1.2)

    line(keySize - keySize / 6, keySize - keySize / 6, keySize, keySize)
    line(keySize - keySize / 6, keySize / 6, keySize, 0)
}
