// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

// The size([width,[height]]) function allows to get/set the size of
// the current document.

// If no argument is given it returns the current values of
// width and height in an object {"width": Number, "height": Number}.
//
// If one argument is provided, the width and height both get set to this value.
//
// If two arguments are provided, the first value is the width the second is the height.
//
// Lets try this out:

function draw() {
  // For starters - lets get the size
  var documentSize = size();
  inspect(documentSize); // lets see what we've got

  // to see the changes of that document we add a text in the exact size
  text(documentSize.toSource(), 0, 0, documentSize.width, documentSize.height);

  // next we pass only one argument
  size(documentSize.width * 2);
  // let's get the size again for the next text frame.
  documentSize = size();
  // and draw the text again
  text(documentSize.toSource(), 0, 0, documentSize.width, documentSize.height);

  // finally lets set the size for width and height separately
  size(documentSize.width, documentSize.height * 3);
  // get the size again
  documentSize = size();
  // and draw another box
  text(documentSize.toSource(), 0, 0, documentSize.width, documentSize.height);
}
