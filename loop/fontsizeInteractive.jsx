#targetengine "loop";
// @include ~/Documents/basiljs/basil.js;

var ctrl, textFramePage;

function setup() {
  units(PT);
  doc();
  textSize(20);
  ctrl = text("move me!", -120, 100, 100, 50);
  textFramePage = text("basil", 0, 0, width, height);
}

function loop() {
  var y = ctrl.geometricBounds[0];
  y = round(y);
  textFramePage.contents = "basil " + y;
  textFramePage.paragraphs[0].pointSize = y;
  ctrl.contents = "move me!\n" + y;
}
