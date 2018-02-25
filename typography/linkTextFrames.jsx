// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {
  textFont("Helvetica");
  textSize(16);

  var textframeA = text(LOREM, 0, 0, 100, 100);
  var textframeB = text("", 100, 100, 100, 100);
  linkTextFrames(textframeA, textframeB);
  var textframeC = text("", 200, 200, 100, 100);
  linkTextFrames(textframeB, textframeC);
  var textframeD = text("", 300, 300, 100, 100);
  linkTextFrames(textframeC, textframeD);
  var textframeE = text("", 400, 400, 100, 100);
  linkTextFrames(textframeD, textframeE);
  var textframeF = text("", 500, 500, 100, 100);
  linkTextFrames(textframeE, textframeF);

}
