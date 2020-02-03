function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  noStroke();
  rectMode(CENTER);

}

function draw() {
  background(0);

  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;

  ambientLight(50);
  directionalLight(242, 195, 53);
  pointLight(255, 255, 255, locX, locY, 100);

  push();
  translate(0, 0, 0);
  rotateZ(frameCount * 0.002);
  rotateX(frameCount * 0.002);
  ambientMaterial(150);
  sphere(100, 100);
  pop();

  fill(64, 51, 12);
  translate(-350, -390, 0);
  rect(mouseX, height / 2, mouseY / 2 + 10, mouseY / 2 + 10);
  fill(242, 137, 7);
  let inverseX = width - mouseX;
  let inverseY = height - mouseY;
  rect(inverseX, height / 2, inverseY / 2 + 10, inverseY / 2 + 10);

  fill(255);
  noStroke();
  ellipse(mouseX, mouseY, 40, 40);
  pop();

  fill(242, 212, 121);
  translate(-130, 100, 0);
  arc(479, 300, 280, 280, PI, TWO_PI);

  fill(242, 160, 7);
  translate(0, 100, 0);
  arc(479, 300, 280, 280, PI, TWO_PI);
}
