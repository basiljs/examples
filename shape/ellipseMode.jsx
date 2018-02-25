// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {
  units(PT);

  ellipseMode(CENTER); // default
  ellipse(0, 0, 100, 100);

  ellipseMode(RADIUS);
  ellipse(200, 200, 100, 100);

  ellipseMode(CORNER);
  ellipse(0, 0, 100, 100);

  ellipseMode(CORNERS);
  ellipse(0, 300, 400, 350);
}
