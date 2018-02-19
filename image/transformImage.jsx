// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

// In order to run this example you have to save your InDesign document first and put
// a picture file named 'image-example.jpg' next to it in a folder called 'data'.

function draw() {

  units(PT);
  noStroke();

  var img = image("image-example.jpg", 100, 350);
  transformImage(img, 0, 0, 500, 500);

}
