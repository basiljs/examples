// @include ~/Documents/basiljs/basil.js;

function draw() {

  doc(app.documents.add()); // use a fresh document
  doc().documentPreferences.facingPages = true;
  units(PT);

  noFill();
  stroke(0, 255, 0);
  strokeWeight(4);
  margins(20);
  bleeds(20);

  page(1);

  canvasMode(MARGIN);
  rect(0, 0, width, height);

  canvasMode(PAGE);
  rect(0, 0, width, height);

  canvasMode(BLEED);
  rect(0, 0, width, height);

  addPage();
  addPage();

  page(2);

  canvasMode(FACING_MARGINS);
  rect(0, 0, width, height);

  canvasMode(FACING_PAGES);
  rect(0, 0, width, height);

  canvasMode(FACING_BLEEDS);
  rect(0, 0, width, height);

}
