// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

// groups can be handled in a number a different ways
// finding, creating, ungrouping

function draw() {

  // create array of objects
  var arr = [];

  arr.push(rect(20, 20, 20, 20));
  arr.push(rect(60, 20, 20, 20));
  arr.push(rect(100, 20, 20, 20));

  // group them and modify group
  var circles = group(arr, "rects");
  transform(circles, "position", [0, 0]);
  circles.fillColor = color(0, 255, 178);

	// print the width of our group
  println(bounds(circles).width);

	// ungroup our selected items
  var items = ungroup("rects");
  println(items);

}
