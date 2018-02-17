// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {
  clear(doc());
  units(PT);

  fill(255, 0, 0);
  ellipse(width / 2, height / 2, 333, 333);

  fill(0);
  var myRect = rect(width / 2, 0, width / 2, height);

  // set the opacity
  opacity(myRect, 37);
}
