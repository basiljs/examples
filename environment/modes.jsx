// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear(doc());
  noStroke();

  // By default, each basil script is run in mode(VISIBLE). During processing
  // the screen will be redrawn and the user can watch the process.

  // draw some red circles
  fill(255, 0, 0);
  for (var i = 0; i < 50; i++) {
    var x = random(width);
    var y = random(height);
    ellipse(x, y, 17, 17);
    println("Drawing a red circle at", nf(x, 1, 2), "/", nf(y, 1, 2));
  }

  // The mode() function can be used to enter different screen redraw modes.

  // -- MODEHIDDEN --
  // Processes document in background mode. While in this mode, document will
  // not be visible. If you are using this on a open, unsaved document, you'll
  // be prompted to save before entering this mode. The document will be removed
  // from the display list and added again after you switch back to another
  // mode or after the script is done. In this mode you might look at InDesign
  // with no open document for quite some time - do not work in InDesign during
  // this time. You may want to use println("yourMessage") in your script and
  // look at the panel that opens to get information about the process.
  mode(HIDDEN);

  // draw some green circles
  fill(0, 255, 0);
  for (var i = 0; i < 50; i++) {
    var x = random(width);
    var y = random(height);
    ellipse(x, y, 17, 17);
    println("Drawing a green circle at", nf(x, 1, 2), "/", nf(y, 1, 2));
  }

  // -- MODEVISIBLE --
  // Processes document with screen redraw, use this option to see direct
  // results during the process. This will slow down the process in terms
  // of processing time.
  mode(VISIBLE);

  // draw some blue circles
  fill(0, 0, 255);
  for (var i = 0; i < 50; i++) {
    var x = random(width);
    var y = random(height);
    ellipse(x, y, 17, 17);
    println("Drawing a blue circle at", nf(x, 1, 2), "/", nf(y, 1, 2));
  }


  // -- MODESILENT --
  // Disables screen redraw during processing. A bit faster, as the document is
  // not redrawn during processing.
  mode(SILENT);

  // draw some yellow circles
  fill(255, 255, 0);
  for (var i = 0; i < 50; i++) {
    var x = random(width);
    var y = random(height);
    ellipse(x, y, 17, 17);
    println("Drawing a yellow circle at", nf(x, 1, 2), "/", nf(y, 1, 2));
  }

}
