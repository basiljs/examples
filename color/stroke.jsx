// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {
  // create new random RGB color
  var newRandomColor = color(random(0, 255),
                             random(0, 255),
                             random(0, 255));

  stroke(newRandomColor);
  strokeWeight(10);
  // draw a cross with random color
  line(0, 0, width, height);
  line(0, height, width, 0);
}
