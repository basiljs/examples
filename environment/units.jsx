// @include ~/Documents/basiljs/basil.js;

function draw() {

  // initially the script works with the units that are already set in the document
  text("document units: " + units(), 0, 0, 50, 50);

  // the units() function can be used to set the units to PT, PX, MM, CM or IN
  units(PT);
  text("points", 10, 20, 50, 50);

  units(PX);
  text("pixels", 10, 20, 50, 50);

  units(MM);
  text("millimenters", 10, 20, 50, 50);

  units(CM);
  text("centimenters", 10, 20, 50, 50);

  units(IN);
  text("inches", 1, 2, 50, 50);

  // in the end of each script, units are automatically reset to the original document units
}
