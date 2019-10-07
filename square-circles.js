function setup() {
  createCanvas(400, 400);
  rectMode(RADIUS);
}

var x = []; // new empty array
var y = []; // new empty array

function draw() {
  background(255);
  noFill();
  //frameRate(60);

  x.push(mouseX);
  y.push(mouseY);

  for (var i = 0; i < x.length; i = i + 10) {
    rect(x[i], y[i], 2*(x.length - i), 2*(x.length - i));
  }

  x = x.slice(-100); // remove all but the last 50 x values
  y = y.slice(-100); // remove all but the last 50 y values
}
