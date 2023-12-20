let theta;
let x = 0;
let reverse = false;
function setup() {
    createCanvas(710, 800);
}

function draw() {
    background("#F0FFFE");
    // frameRate(15);
    stroke(255);

    if (reverse) {
        x--;
    } else {
        x++;
    }
    if (x > 200) {
        reverse = true;
    }
    if (x < 50) {
        reverse = false;
    }
    let a = (x / width) * 90;
    // Convert it to radians
    theta = radians(a);
    // Start the tree from the bottom of the screen
    translate(width / 2, height);
    stroke("#AF6E4C")
    for (let i = 0; i < 50; i++) {
        line(i, 0, i, -120);
        if (i % 2 == 0) {
            stroke("#654322")
        } else if (i % 3 == 0) {
            stroke("#784E2D")
        } else {
            stroke("#AF6E4C")
        }
        line(-i, 0, -i, -120);
    }
    stroke("#00000");
    // Move to the end of that line
    translate(0, -120);
    // Start the recursive branching!
    branch(240);

}

function branch(h) {
    // Each branch will be 2/3rds the size of the previous one
    h *= 0.66;
    stroke("#B8E3A8");
    // All recursive functions must have an exit condition!!!!
    // Here, ours is when the length of the branch is 2 pixels or less
    if (h > 2) {

        push();    // Save the current state of transformation (i.e. where are we now)
        rotate(theta);   // Rotate by theta

        line(0, 0, 0, -h);  // Draw the branch
        translate(0, -h); // Move to the end of the branch
        branch(h);       // Ok, now call myself to draw two new branches!!
        pop();     // Whenever we get back here, we "pop" in order to restore the previous matrix state

        // Repeat the same thing, only branch off to the "left" this time!
        push();
        rotate(-theta);

        line(10, 0, 0, -h);
        translate(0, -h);
        branch(h);
        pop();
    }
}
