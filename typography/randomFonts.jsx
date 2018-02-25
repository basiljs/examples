// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {
  units(PT);

  var count = 20;
  var tfWidth = 300;
  var tfHeight = 20;

  // load all installed fonts into a variable
  var fonts = app.fonts;

  for (var i = 0; i < count; i++) {
    var posX = random(width - tfWidth);
    var posY = random(height - tfHeight);
    var randomFontSize = round(random(2, 20));
    var randomIndex = floor(random(app.fonts.length));
    var fontName = fonts[randomIndex].fullName;
    println(fontName);

    textSize(randomFontSize);
    textFont(fonts[randomIndex]);
    var textFrame = text(fontName + " " + randomFontSize, posX, posY, tfWidth, tfHeight);
  }
}
