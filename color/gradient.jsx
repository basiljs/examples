// @include ~/Documents/basiljs/basil.js;

function draw() {
  clear(doc());
  noStroke();

  var dist = height / 4;

  // create two colors
  var red = color(255, 0, 0);
  var blue = color(0, 0, 255);

  // create array with 10 random colors
  var randomColors = [];
  for (var i = 0; i < 10; i++) {
    randomColors.push(color(random(0, 255), random(0, 255), random(0, 255)));
  }

  // create array with 10 random numbers (0-100)
  var randomNumbers = [];
  for (var j = 0; j < 10; j++) {
    randomNumbers.push(random(0, 100));
  }

  // draw rectangles and fill them with different types of gradients

  // grandient from color1 to color2
  fill(gradient(red, blue, "RedBlueLinear"));
  rect(0, dist * 0, width, dist);

  // gradient from array of colors
  fill(gradient(randomColors, "RandomCol"));
  rect(0, dist * 1, width, dist);

  // gradient from same array of colors with random gradient stop positions
  fill(gradient(randomColors, randomNumbers, "RandomCol/Pos"));
  rect(0, dist * 2, width, dist);

  // radial gradient from color1 to color2
  gradientMode(RADIAL);
  fill(gradient(red, blue, "RedBlueRadial"));
  rect(0, dist * 3, width, dist);

  // stroke gradient
  noFill();
  strokeWeight(4);
  gradientMode(LINEAR);
  stroke(gradient(blue, red, "BlueRedLinear"));
  ellipse(width / 2, height / 2, dist * 2, dist * 2);
}
