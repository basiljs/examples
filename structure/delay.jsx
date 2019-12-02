// @include ~/Documents/basiljs/basil.js;

function draw() {
  // printing current time
  // the function nf(number, 2) is used to add a leading zero to single digits (9 -> 09)
  println(nf(hour(), 2) + ":" + nf(minute(), 2) + ":" + nf(second(), 2));

  // wait 3 sec
  delay(3000);

  println(nf(hour(), 2) + ":" + nf(minute(), 2) + ":" + nf(second(), 2));
}
