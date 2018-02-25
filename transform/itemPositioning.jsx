// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear(doc());

  units(MM); // use millimeter
  noStroke();
  fill(255, 0, 0);

  rectMode(CORNER); // Please note that only CORNER positioning is fully supported for moving around items
  var ell = rect(width / 2, height / 2, 30, 30);

  delay(1000);

  itemX(ell, 30);
  delay(1000);

  itemY(ell, 30);
  delay(1000);

  itemPosition(ell, width / 2, height / 2);
  delay(1000);

  itemWidth(ell, 50);
  delay(1000);

  itemHeight(ell, 50);
  delay(1000);

  itemSize(ell, 30, 30);
  delay(1000);

  for(var i = 0; i < 50; i++) {
    itemX(ell, itemX(ell) + 2);
    delay(30);
  }

  ell.remove();

}
