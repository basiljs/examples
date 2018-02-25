// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {
  units(PT);

  textSize(21);
  var oval = ellipse(400, 50, 150, 80);

  var textFrame = text(LOREM, 50, 70, 300, 500);

  typo(textFrame, "hyphenation", false);

  // text related bounds
  noFill();
  words(textFrame, function (word) {
    var textBounds = bounds(word);
    rect(textBounds.left, textBounds.top, textBounds.width, textBounds.height);
    ellipse(textBounds.left, textBounds.xHeight, 3, 3);
  });

  fill(255, 0, 0);

  // bounds of the oval
  var ovalBounds = bounds(oval);
  text("ovalBounds", ovalBounds.left, ovalBounds.top, ovalBounds.width, ovalBounds.height);

  // bounds of a page
  var pageBounds = bounds(page());
  inspect(pageBounds);

  text("pageBounds", pageBounds.left, pageBounds.top, pageBounds.width, pageBounds.height);
}
