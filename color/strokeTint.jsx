// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {
  var counter = 50;
  strokeWeight(7);

  for (var i = 0; i < counter; i++) {
    var y = map(i, 0, counter - 1, 0, height);
    var newStrokeTint = map(i, 0, counter - 1, 100, 0);

    // set stroke tint of current color
    strokeTint(newStrokeTint);
    line(0, y, width, y);
  }
}
