// @include ~/Documents/basiljs/basil.js;

function draw() {

  units(PT);

  // get the number of swatches, to see later how many new ones have been created
  var swatchCount = doc().swatches.length;
  println("Document has " + swatchCount + " swatches.");

  println("Default color mode is " + colorMode() + ".");

  // create RGB colors
  colorMode(RGB);
  var red = color(255, 2, 3);
  var green = color(0, 255, 0, "my green"); // set the name of the RBG color, see color window
  var rgbGrey = color(128);

  stroke(rgbGrey);
  fill(red);
  rect(0, 0, width, 50);
  fill(green);
  rect(0, 50, width, 50);


  // create CMYK colors
  colorMode(CMYK);
  var magenta = color(1, 100, 3, 4);
  var yellow = color(0, 0, 100, 0, "my yellow"); // set the name of the CMYK color, see color window
  var cmykGrey = color(80, "my light grey");

  stroke(cmykGrey);
  fill(magenta);
  rect(0, 200, width, 50);
  fill(yellow);
  rect(0, 250, width, 50);

  // get a color from the document via the name
  fill(color("my green"));
  rect(0, 500, width, 50);
  // a few colors like "Black" are predefined in every InDesign document
  var black = color("Black");
  fill(black);
  rect(0, 550, width, 50);

  println(doc().swatches.length - swatchCount + " colors added to the swatches of the document.");
}
