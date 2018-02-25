// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {
  var counter = 50;
  var weightStart = 0.1;
  var weightEnd = 12;

  for (var i = 0; i < counter; i++) {
    var y = map(i, 0, counter - 1, 0, height);
    var weight = map(i, 0, counter - 1, weightStart, weightEnd);

    strokeWeight(weight);
    line(0, y, width, height / 2);
  }
}
