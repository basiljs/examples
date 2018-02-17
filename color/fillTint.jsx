// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {
  var counter = 50;
  noStroke();
  var rectHeight = height / counter;

  for (var i = 0; i < counter; i++) {
    var y = map(i, 0, counter - 1, 0, height - rectHeight);
    var tint = map(i, 0, counter - 1, 100, 0);

    fillTint(tint);
    rect(0, y, width, rectHeight);
  }
}
