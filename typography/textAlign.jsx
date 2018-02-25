// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  /*
  Justification.AWAY_FROM_BINDING_SIDE
  Justification.CENTER_ALIGN
  Justification.CENTER_JUSTIFIED
  Justification.FULLY_JUSTIFIED
  Justification.LEFT_ALIGN
  Justification.RIGHT_ALIGN
  Justification.RIGHT_JUSTIFIED
  Justification.TO_BINDING_SIDE

  VerticalJustification.BOTTOM_ALIGN
  VerticalJustification.CENTER_ALIGN
  VerticalJustification.JUSTIFY_ALIGN
  VerticalJustification.TOP_ALIGN
   */

  var sayThis = "basil.js";
  var changeCol = 180;
  var changeVal = 20;
  var box;
  var strokeW = (0.25);

  fill(changeCol);
  textFont("Helvetica", "Bold");
  textSize(48);

  box = text(sayThis, 0, 0, width, 80);
  changeCol -= changeVal;
  box.strokeWeight = strokeW;

  fill(changeCol);
  textAlign(Justification.CENTER_ALIGN);
  box = text(sayThis, 0, 100, width, 80);
  changeCol -= changeVal;
  box.strokeWeight = strokeW;

  fill(changeCol);
  textAlign(Justification.RIGHT_ALIGN);
  box = text(sayThis, 0, 200, width, 80);
  changeCol -= changeVal;
  box.strokeWeight = strokeW;

  fill(changeCol);
  textAlign(Justification.FULLY_JUSTIFIED);
  box = text(sayThis, 0, 300, width, 80);
  changeCol -= changeVal;
  box.strokeWeight = strokeW;

  fill(changeCol);
  textAlign(Justification.FULLY_JUSTIFIED, VerticalJustification.CENTER_ALIGN);
  box = text(sayThis, 0, 400, width, 80);
  changeCol -= changeVal;
  box.strokeWeight = strokeW;

  fill(changeCol);
  textAlign(Justification.FULLY_JUSTIFIED, VerticalJustification.BOTTOM_ALIGN);
  box = text(sayThis, 0, 500, width, 80);
  box.strokeWeight = strokeW;
}
