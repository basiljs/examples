// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {
  // create new random RGB color
  var newRandomColor = color(random(0, 255),
                             random(0, 255),
                             random(0, 255));

  // fill rect with it
  fill(newRandomColor);
  rect(0, 0, width, height);
}
