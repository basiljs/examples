// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

// In order to run this example you have to save your InDesign document first and put
// a picture file named 'image-example.jpg' next to it in a folder called 'data'.

function draw() {

  units(PT);
  noStroke();

  // when doc is saved, images can be added by name from data directory in same folder as doc
  // add image and fit image size to width and height
  image("image-example.jpg", 0, 0, 200, 300);

  // add image in original image size
  image("image-example.jpg", 0, 350);

  // change fitoption of the image inside the frame
  var img = image("image-example.jpg", 400, 0, 200, 300);
  /*
  FitOptions.CONTENT_TO_FRAME
  FitOptions.CENTER_CONTENT
  FitOptions.PROPORTIONALLY
  FitOptions.FRAME_TO_CONTENT
  FitOptions.FILL_PROPORTIONALLY
  FitOptions.APPLY_FRAME_FITTING_OPTIONS
  */
  img.fit(FitOptions.PROPORTIONALLY);

  // place image inside an circle
  var circle = ellipse(50, 50, 150, 150);
  image("image-example.jpg", circle);
}
