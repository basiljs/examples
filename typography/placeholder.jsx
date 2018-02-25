// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  units(MM);

  // filling an empty text frame with placeholder text
  var textFrameA = text("", 0, 0, 60, 60);
  var placeholderA = placeholder(textFrameA);

  // filling a non-empty text frame with placeholder text
  var textFrameB = text("Placeholder text is added behind existing text: ", 0, 80, 60, 60);
  var placeholderB = placeholder(textFrameB);

  // filling linked text frames with placeholder text
  var textFrameC = text("Placeholder text filling linked text frames: ", 0, 160, 60, 60);
  var textFrameD = text("", 60, 220, 60, 60);
  linkTextFrames(textFrameC, textFrameD);
  var placeholderC = placeholder(textFrameC);

  // styling placeholder text
  typo(placeholderA, "fillColor", color(255, 0, 0));
  typo(placeholderB, "fillColor", color(0, 200, 0));
  typo(placeholderC, "fillColor", color(0, 0, 255));

}
