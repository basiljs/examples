// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

// In order to run this example you have to save your InDesign document first and put
// a picture file named 'image-example.jpg' next to it in a folder called 'data'.

function draw() {

  units(PT);
  noStroke();

  // default is CORNER, image should be placed at top left corner
  image("image-example.jpg", 0, 0, 200, 200);

  // set to CENTER, image should be just below 1st image
  imageMode(CENTER);
  image("image-example.jpg", 100, 300, 200, 200);

  // set to CORNERS, image should be just below 2nd image and bigger
  imageMode(CORNERS);
  image("image-example.jpg", 0, 400, 300, 700);
}
