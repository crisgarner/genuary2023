
function setup() {
    createCanvas(800, 400, WEBGL);

}


function draw() {
    background(255);

    let locX = mouseX - height / 2;
    let locY = mouseY - width / 2;
    // ambientLight(150);
    // directionalLight(255, 0, 0, 0.50);
    pointLight(0, 20, 155, -400, 500);

    push();
    translate(-width / 4, 0, 0);
    rotateZ(1);
    rotateX(1);
    specularMaterial(250);
    // box(100, 100, 100);
    sphere(80, 100, 100)
    pop();

    noStroke();
    fill("#ccc");
    ellipse(-250, 100, 150, 21)

}
