// @include ~/Documents/basiljs/basil.js;

function draw() {

  clear(doc());

  for (var i = 0; i < 23; i++) {
    var x = random(0, width);
    var y = random(0, height);
    var size = random(10, 123);
    ellipse(x, y, size, size);
  }
}
