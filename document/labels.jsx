// @include ~/Documents/basiljs/basil.js;

// you can get all elements you have marked with a script label (Window -> Utilities -> Script Label)
// there a two different ways to use the labels() function
// to try the script, first create a few page items, assign the script label "basil" to some, then run the script

function draw() {
  var myScriptLabel = "basil";
  println("script label: " + myScriptLabel);
  println("---");

  // a
  var myTaggedItems = labels(myScriptLabel);
  for (var i = 0; i < myTaggedItems.length; i++) {
    println("element " + i + " is a: " + myTaggedItems[i]);
  }

  println("---");

  // b
  labels(myScriptLabel, function(item, counter) {
    println("element " + counter + " is a: " + item);
  });

}
