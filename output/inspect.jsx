// @include ~/Documents/basiljs/basil.js;

function draw() {
  clear(doc());

  var textFrame = text("hi!", 0, 0, 50, 50);
  var someObject = {prop: "hello", fun: function() {}, num: 5, arr: [0, 1, 2, 3, 4, 5, function() {}], c: new Color()};

  inspect(someObject);
  // inspect( textFrame );
  // inspect( doc().allPageItems );
}
