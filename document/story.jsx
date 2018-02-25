// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear(doc());

  units(PT);
  noStroke();

  // create some shapes
  fill(255, 0, 0);
  var myRect = rect(-100, 0, 50, 50);
  fill(0, 255, 0);
  var myCircle = ellipse(-100, 0, 50, 50);
  stroke(0, 0, 255);
  strokeWeight(15);
  var myLine = line(-100, 0, -50, 0);

  noStroke();
  fill(0);

  // collect shapes in an array
  var myRandomObjects = [myRect, myCircle, myLine];


  // create two text frames
  var txtFrameA = text("hi this is txtFrameA! ", 0, 0, 400, 120);
  var txtFrameB = text("this is text from txtFrameB! ", 100, 150, 400, 120);

  // link both text frames into one story
  linkTextFrames(txtFrameA, txtFrameB);

  // add random shapes to the story of the linked text frames
  for (var i = 0; i < 20; i++) {
    var randomShape = myRandomObjects[floor(random(3))];
    addToStory(txtFrameA.parentStory, randomShape);
    addToStory(txtFrameA.parentStory, " | ");
  }

  // add some text to the end
  addToStory(txtFrameA.parentStory, " - and some text at the end --> ");

  // You can control the position of the insert via the last parameter.
  // It accepts either an insertion point or one the following constants: AT_BEGINNING and AT_END.
  addToStory(txtFrameA.parentStory, "<-- some text at the front - ", AT_BEGINNING);
}
