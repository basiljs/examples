// @include ~/Documents/basiljs/basil.js;

function draw() {
  var myColor = color(10, 20, 30, "blackmagic");
  fill(myColor);
  textFont("Helvetica", "Bold");
  textSize(96);
  text("why hello basil.js", 0, 0, 350, 350);

  var myString = "i love \nusing variables \nin basil.js"; // note the \n for a newline
  fill(color(255, 25, 25, "redspecial"));
  textAlign(Justification.RIGHT_ALIGN, VerticalJustification.CENTER_ALIGN);
  textLeading(150);
  textTracking(1000);
  textSize(24);
  text(myString, 0, height / 2, width, height / 2);
}
