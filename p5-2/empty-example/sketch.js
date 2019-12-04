function setup() {
  createCanvas (500,500);

}

function draw() {
  background("#ff0000");
  fill("#000");
  stroke("#000");
  strokeWeight(5);
  ellipse (250,250,250,250);
  fill ("#000");
  ellipse(100,110,180,180);
  ellipse(400,110,180,180);

if (mouseIsPressed) {
  textSize(100);
  textFont("Georgia");
  textStyle(ITALIC);
  fill(random(255), random(255), random(255));
  text('MOUSE',mouseX,mouseY,65,475);
}



}
