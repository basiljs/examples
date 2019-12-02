// @include ~/Documents/basiljs/basil.js;

// In order to run this example you have to save your InDesign document first

function draw() {
  var words = split("apple bear cat dog", " ");

  // when doc is saved, files can be saved to the same folder as the InDesign file
  saveStrings("saveStrings-example.txt", words);
}
