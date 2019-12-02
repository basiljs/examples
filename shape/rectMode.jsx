// @include ~/Documents/basiljs/basil.js;

function draw() {
  units(PT);

  rectMode(CORNER); // default
  rect(0, 0, 100, 100);

  rectMode(CENTER);
  rect(0, 0, 100, 100);

  rectMode(CORNERS);
  rect(200, 250, 300, 300);

  rectMode(RADIUS);
  rect(0, 400, 100, 100);
}
