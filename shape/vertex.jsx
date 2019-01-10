// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {
  units(PT);
  noFill();

  // open shape
  beginShape();
  vertex(30, 20);
  vertex(85, 20);
  vertex(85, 75);
  endShape();

  // closed shape
  beginShape();
  vertex(130, 20);
  vertex(185, 20);
  vertex(185, 75);
  endShape(CLOSE);

  // bezier shape
  // vertex(x, y, xAnchorLeft, yAnchorLeft, xAnchorRight, yAnchorRight)
  // you can also mix the two approaches:
  beginShape();
  vertex(230, 320);
  vertex(285, 320, 270, 290, 300, 350);
  vertex(285, 375);
  endShape();

  translate(200, 0); // just move down a bit


  // multi-component shape (~30% faster than adding multiple PageItems)
  beginShape();
  vertex(30, 20);
  vertex(85, 20);
  vertex(85, 75);
  addPath();
  vertex(130, 120);
  vertex(185, 120);
  vertex(185, 175);
  addPath();
  vertex(230, 220);
  vertex(285, 220);
  vertex(285, 275);
  endShape();

}
