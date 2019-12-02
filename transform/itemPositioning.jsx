// @include ~/Documents/basiljs/basil.js;

function draw() {

  clear(doc());

  units(MM); // use millimeter
  noStroke();
  fill(255, 0, 0);

  rectMode(CORNER); // Please note that only CORNER positioning is fully supported for moving around items
  var ell = rect(width / 2, height / 2, 30, 30);

  delay(1000);

  transform(ell, "x", 30);
  delay(1000);

  transform(ell, "y", 30);
  delay(1000);

  transform(ell, "position", [width / 2, height / 2]);
  delay(1000);

  transform(ell, "width", 50);
  delay(1000);

  transform(ell, "height", 50);
  delay(1000);

  transform(ell, "size", [30, 30]);
  delay(1000);

  for(var i = 0; i < 50; i++) {
    transform(ell, "x", transform(ell, "x") + 2);
    delay(30);
  }

  remove(ell);

}
