// @include ~/Documents/basiljs/basil.js;

// In order to run this example you have to save your InDesign document first and put
// a text file 'some_test_file.txt' with some plain content in a folder 'data' next to
// your saved InDesign document

function draw() {

  println("Put some text file in the data folder.");
  units(PT);

  // load lines of the file in array and create a text frame for each line
  var linesArray = loadStrings("some_test_file.txt");
  for (var i = 0; i < linesArray.length; i++) {
    text(linesArray[i], 0, i * 100, width, 100);
  }

  // load file content
  var textString = loadString("some_test_file.txt");

  // if you prefer not to use the data folder mechanism
  // you can use the file() function
  // var textFile = file("~/Desktop/some_test_file.txt");
  // var textString = loadString(textFile);

  println(textString);
}
