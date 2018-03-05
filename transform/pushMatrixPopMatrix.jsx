// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {
  var tileCount = 10;
  var rectWidth = 80;
  var randomX = random(0, width);
  var randomY = random(0, height);

  noStroke();
  rectMode(CENTER);

  var black = color("Black");
  var red = color(255, 0, 0);
  var green = color(0, 255, 0);
  var white = color(0); // cmyk white

  textSize(9);

  for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {
      var posX = width / tileCount * gridX;
      var posY = height / tileCount * gridY;
      var angle = atan2(randomY - posY, randomX - posX);

      pushMatrix();
      translate(posX, posY);
      rotate(angle);

      fill(black);
      rect(0, 0, rectWidth, 10);

      fill(white);
      ellipse(0, 0, 5, 5);

      pushMatrix();
      translate(rectWidth / 2, 0);
      fill(red);
      ellipse(0, 0, 12, 12);
      popMatrix();

      rotate(HALF_PI);
      fill(black);
      text(nfc(posX, 1) + "/" + nfc(posY, 1), 0, 0, rectWidth * 0.5, 15);
      popMatrix();
    }
  }

  fill(green);
  ellipse(randomX, randomY, 30, 30);
}
