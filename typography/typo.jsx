// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {
  units(PT);

  var content = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,\r";
  content += "sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.";

  var myDoc = doc();

  // add 5 pages to doc
  for (var i = 0; i < 5; i++) {
    myDoc.pages.add();
  }

  // add 2 text frame on each page
  for (var j = 0, len = myDoc.pages.length; j < len; j++) {
    page(j);
    text(content, 0, 0, 600, 300);
    text(content, 0, 350, 600, 300);
  }

  var green = color(0, 255, 0, "green");
  var red = color(255, 0, 0, "red");

  // change pointSize in all text frames in document
  typo(myDoc, "pointSize", 48);

  // change fillColor on 2nd spread
  typo(myDoc.spreads[1], "fillColor", red);

  // change strokeColor on 4th page
  typo(myDoc.pages[3], "strokeColor", green);

  // change some more fine granular stuff in text frame on 1st page
  var textFrame = myDoc.pages[0].textFrames[0];
  typo(textFrame, "pointSize", 36);
  typo(textFrame.words[1], "appliedFont", "Helvetica\tBold");
  typo(textFrame.words[1], "underline", true);
  typo(textFrame.lines[1], "pointSize", 48);
  typo(textFrame.characters[50], "pointSize", 96);
  typo(textFrame.paragraphs[1], "strokeColor", red);

}
