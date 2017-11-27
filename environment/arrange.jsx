// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.size(1720, 290);

  b.textFont("Arial");
  b.textSize(18);
  b.textAlign(Justification.LEFT_ALIGN, VerticalJustification.BOTTOM_ALIGN);

  var shapes = createShapes(20, b.color(255, 255, 0), b.color(255, 255, 240));
  b.text("No arranging", 20, 0, 160, 20);

  var shapesForward = createShapes(260, b.color(255, 255, 0), b.color(255, 255, 240));
  b.arrange(shapesForward[3], b.FORWARD);
  b.text("#3 forward", 260, 0, 160, 20);

  var shapesBackward = createShapes(500, b.color(255, 255, 0), b.color(255, 255, 240));
  b.arrange(shapesBackward[3], b.BACKWARD);
  b.text("#3 backward", 500, 0, 160, 20);

  var shapesFront = createShapes(740, b.color(255, 255, 0), b.color(255, 255, 240));
  b.arrange(shapesFront[3], b.FRONT);
  b.text("#3 to the front", 740, 0, 160, 20);

  var shapesBack = createShapes(980, b.color(255, 255, 0), b.color(255, 255, 240));
  b.arrange(shapesBack[3], b.BACK);
  b.text("#3 to the back", 980, 0, 160, 20);

  var shapesFrontReference = createShapes(1220, b.color(255, 255, 0), b.color(255, 255, 240));
  b.arrange(shapesFrontReference[3], b.FRONT, shapesFrontReference[6]);
  b.text("#3 in front of #6", 1220, 0, 160, 20);

  var shapesBackReference = createShapes(1460, b.color(255, 255, 0), b.color(255, 255, 240));
  b.arrange(shapesBackReference[3], b.BACK, shapesBackReference[1]);
  b.text("#3 behind #1", 1460, 0, 160, 20);
}

b.go();

// helper function to create the shapes
function createShapes (xOffset, startColor, endColor) {
  var shapes = [];
  for (var i = 0; i < 8; i++) {


    var mf = b.text(" " + i, xOffset + i * 20, 30 + i * 20, 100, 100);
    b.typo( b.words( mf )[0], "baselineShift", 4 );

    mf.fillColor = b.lerpColor(startColor, endColor, i / 7);
    mf.strokeWeight = 1;

    shapes.push(mf);
  }

  // reposition and resize #3 slightly to be able to see arrangements better
  b.itemY(shapes[3], 40);
  b.itemHeight(shapes[3], 150);

  return shapes;
}