// @include ~/Documents/basiljs/basil.js;

// The example shows how to select a page item on a specific page by its name.
// Hint: you can manually name a page item in the layers panel (Window -> Layer).

function draw() {
  textSize(220);

  // -- create something to play with --
  // add 4 new pages, now threre a 5 pages in the document
  for (var i = 0; i < 4; i++) {
    addPage();
  }

  // -- create a text frame on every page --
  // give the text frame a name for future reference
  // you can change/check the names in the layers panel of InDesign
  for (var j = 1; j <= 5; j++) {
    page(j);
    var txtFrame = text("this is page #" + j, 0, 0, width, height);
    txtFrame.name = "page count big";
  }


  // -- let's change the text frame on page 3 --
  // go to the page
  page(3);
  // select the the text frame with the name "page count big"
  var txtOnPage3 = nameOnPage("page count big");
  // change it
  txtOnPage3.contents = "Found it! :)";

}
