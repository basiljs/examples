// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  var myUnits = units();
  println("page size: " + width + myUnits + " x " + height + myUnits);
  rect(0, 0, width, height);
}
