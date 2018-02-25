// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  units(MM);
  var tf = text("", width / 2 - 60, height / 2 - 100, 120, 200);
  placeholder(tf);


  // create a new style by name
  paragraphStyle("emptyStyle");


  // create styles by name with custom properties
  var redProps = {
    fillColor: color(255, 0, 0),
    pointSize: 14,
    skew: 15
  };
  var redStyle = paragraphStyle("red", redProps);

  var greenProps = {
    fillColor: color(0, 255, 0),
    pointSize: 18,
    skew: -15
  };
  var greenStyle = characterStyle("green", greenProps);


  // apply styles
  applyParagraphStyle(tf, "red");

  var myWords = words(tf);
  for (var i = 0; i < myWords.length; i += 5) {
    applyCharacterStyle(myWords[i], greenStyle);
  }


  delay(1000);


  // update style with new properties
  characterStyle("green", {fillColor: color(0, 0, 255), name: "blue"});


  // creating an objectStyle by name with custom properties
  var objectProps = {
    topLeftCornerOption: CornerOptions.ROUNDED_CORNER,
    topLeftCornerRadius: 20,
    bottomRightCornerOption: CornerOptions.FANCY_CORNER,
    bottomRightCornerRadius: 20,
    fillColor: gradient(color(255, 255, 220), color(200, 255, 255)),
    gradientFillAngle: 45
  };
  objectStyle("cornerStyle", objectProps);
  applyObjectStyle(tf, "cornerStyle");


  // get style from text object
  var parStyle = characterStyle(tf.characters[10]);
  println("Received character style \"" + parStyle.name + "\".");
}
