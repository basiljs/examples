// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

// you can get all the elements you have selected in InDesign via the selections() function
// there a two different ways to use the selections() function
// to try the script, select a few page items, then run the script

function draw() {
  // a
  var mySelection = selections();
  for (var i = 0; i < mySelection.length; i++) {
    println("element " + i + " is a: " + mySelection[i]);
  }

  println("---");

  // b
  selections(function(item, counter) {
    println("element " + counter + " is a: " + item);
  });

}
