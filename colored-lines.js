function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 400, 400, 100);
}

function draw() {
  background(0, 0, 255);

  for (var x = 10; x < width - 10; x = x + 21) {
    line(x, height / 2, mouseX, mouseY);
    stroke(x, 400, 100);
  }
}
