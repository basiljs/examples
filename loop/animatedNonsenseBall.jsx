#targetengine "loop";
// @include ~/Documents/basiljs/basil.js;


var pos, vel;
var myEllipse;
var ellipseRadius = 20;

function setup() {
  units(PT);
  pos = new Vector(random(width), random(height));
  vel = new Vector(random(3, 10), random(3, 10));
  myEllipse = ellipse(pos.x, pos.y, ellipseRadius * 2, ellipseRadius * 2);
  fillTint(50);
  rectMode(CENTER);
}

function loop() {
  pos.add(vel);

  // detect boundary collision
  // right
  if (pos.x > width - ellipseRadius) {
    pos.x = width - ellipseRadius;
    vel.x *= -1;
  }
  // left
  if (pos.x < ellipseRadius) {
    pos.x = ellipseRadius;
    vel.x *= -1;
  }
  // top
  if (pos.y < ellipseRadius) {
    pos.y = ellipseRadius;
    vel.y *= -1;
  }
  // bottom
  if (pos.y > height - ellipseRadius) {
    pos.y = height - ellipseRadius;
    vel.y *= -1;
  }

  rect(pos.x, pos.y, 10, 10);
  // [y1, x1, y2, x2]
  myEllipse.geometricBounds = [pos.y - ellipseRadius, pos.x - ellipseRadius, pos.y + ellipseRadius, pos.x + ellipseRadius];
}
