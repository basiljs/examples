// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {
  units(PT);

  var tileCount = 10;
  var randomX = random(0, width);
  var randomY = random(0, height);

  strokeWeight(2);

  for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {
      var posX = width / tileCount * gridX;
      var posY = height / tileCount * gridY;
      line(posX, posY, randomX, randomY);
    }
  }

  fill(0, 255, 0);
  ellipse(randomX, randomY, 30, 30);
}
