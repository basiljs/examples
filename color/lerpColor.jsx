// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {
  var c1 = color(0, 255, 0);
  var c2 = color(255, 128, 0);

  var counter = 10;
  noStroke();
  var rectHeight = height / counter;

  for (var i = 0; i < counter; i++) {
    var y = map(i, 0, counter - 1, 0, height - rectHeight);
    var amt = map(i, 0, counter - 1, 0, 1);

    fill(lerpColor(c1, c2, amt));
    rect(0, y, width, rectHeight);
  }
}
