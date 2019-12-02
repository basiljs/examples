// @include ~/Documents/basiljs/basil.js;

function draw() {
  clear(doc());
  units(PT);

  var red = color(255, 0, 0);
  var lightBlue = color(0, 255, 255);

  fill(red);
  ellipse(width / 2 - 80, height / 2, 333, 333);
  fill(lightBlue);
  var circle = ellipse(width / 2 + 80, height / 2, 333, 333);

  /*
  BlendMode.NORMAL
  BlendMode.MULTIPLY
  BlendMode.SCREEN
  BlendMode.OVERLAY
  BlendMode.SOFT_LIGHT
  BlendMode.HARD_LIGHT
  BlendMode.COLOR_DODGE
  BlendMode.COLOR_BURN
  BlendMode.DARKEN
  BlendMode.LIGHTEN
  BlendMode.DIFFERENCE
  BlendMode.EXCLUSION
  BlendMode.HUE
  BlendMode.SATURATION
  BlendMode.COLOR
  BlendMode.LUMINOSITY
   */

  blendMode(circle, BlendMode.HARD_LIGHT);
}
