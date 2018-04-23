// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear(doc());
  units(PT);
  size(1720, 290);

  textFont("Arial");
  textSize(18);
  textAlign(Justification.LEFT_ALIGN, VerticalJustification.BOTTOM_ALIGN);

  var shapes = createShapes(20, color(255, 255, 0), color(255, 255, 240));
  text("No arranging", 20, 0, 160, 20);

  var shapesForward = createShapes(260, color(255, 255, 0), color(255, 255, 240));
  arrange(shapesForward[3], FORWARD);
  text("#3 forward", 260, 0, 160, 20);

  var shapesBackward = createShapes(500, color(255, 255, 0), color(255, 255, 240));
  arrange(shapesBackward[3], BACKWARD);
  text("#3 backward", 500, 0, 160, 20);

  var shapesFront = createShapes(740, color(255, 255, 0), color(255, 255, 240));
  arrange(shapesFront[3], FRONT);
  text("#3 to the front", 740, 0, 160, 20);

  var shapesBack = createShapes(980, color(255, 255, 0), color(255, 255, 240));
  arrange(shapesBack[3], BACK);
  text("#3 to the back", 980, 0, 160, 20);

  var shapesFrontReference = createShapes(1220, color(255, 255, 0), color(255, 255, 240));
  arrange(shapesFrontReference[3], FRONT, shapesFrontReference[6]);
  text("#3 in front of #6", 1220, 0, 160, 20);

  var shapesBackReference = createShapes(1460, color(255, 255, 0), color(255, 255, 240));
  arrange(shapesBackReference[3], BACK, shapesBackReference[1]);
  text("#3 behind #1", 1460, 0, 160, 20);
}

// helper function to create the shapes
function createShapes (xOffset, startColor, endColor) {
  var shapes = [];
  for (var i = 0; i < 8; i++) {

    var mf = text(" " + i, xOffset + i * 20, 30 + i * 20, 100, 100);
    typo( words( mf )[0], "baselineShift", 4 );

    mf.fillColor = lerpColor(startColor, endColor, i / 7);
    mf.strokeWeight = 1;

    shapes.push(mf);
  }

  // reposition and resize #3 slightly to be able to see arrangements better
  transform(shapes[3], "y", 40);
  transform(shapes[3], "height", 150);

  return shapes;
}