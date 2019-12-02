// @include ~/Documents/basiljs/basil.js;

function draw() {
  units(PT);
  noFill();

  rectMode(CENTER); // show bounding boxes
  stroke(128);
  rect(35, 35, 50, 50);
  rect(105, 35, 50, 50);
  rect(175, 35, 50, 50);
  rect(105, 105, 100, 50);

  stroke(0);
  arc(35, 35, 50, 50, 0, HALF_PI); // lower quarter circle
  arc(105, 35, 50, 50, -PI, 0);  // upper half of circle
  arc(175, 35, 50, 50, -PI / 6, PI / 6); // 60 degrees
  arc(105, 105, 100, 50, HALF_PI, 3 * HALF_PI); // 180 degrees


  arc(35, 175, 50, 50, 0, HALF_PI);
  arc(35, 175, 60, 60, HALF_PI, PI);
  arc(35, 175, 70, 70, PI, PI + QUARTER_PI);
  arc(35, 175, 80, 80, PI + QUARTER_PI, TWO_PI);

  arc(175, 175, 80, 80, 0, PI + QUARTER_PI, OPEN);

  arc(315, 175, 80, 80, 0, PI + QUARTER_PI, CHORD);

  arc(455, 175, 80, 80, 0, PI + QUARTER_PI, PIE);

}
