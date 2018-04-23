// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {
  units(PT);

  textFont("Helvetica");
  textSize(16);

  var textframeA = text(LOREM, 0, 0, 100, 100);
  var textframeB = text("", 20, 120, 100, 100);
  linkTextFrames(textframeA, textframeB);
  var textframeC = text("", 40, 240, 100, 100);
  linkTextFrames(textframeB, textframeC);
  var textframeD = text("", 60, 360, 100, 100);
  linkTextFrames(textframeC, textframeD);
  var textframeE = text("", 80, 480, 100, 100);
  linkTextFrames(textframeD, textframeE);
  var textframeF = text("", 100, 600, 100, 100);
  linkTextFrames(textframeE, textframeF);
}
