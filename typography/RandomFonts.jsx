// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {
  var textFramesCount = 20;
  var fonts = app.fonts;

  for (var i = 0; i < textFramesCount; i++) {
    var posX = random(0, 600);
    var posY = random(0, 850);
    var randomFontSize = round(random(2, 20));
    var randomIndex = floor(random(app.fonts.length));
    var fontName = fonts[randomIndex].fullName;
    println(fontName);

    textSize(randomFontSize);
    textFont(fonts[randomIndex]);
    var textFrame = text(fontName + " " + randomFontSize, posX, posY, 300, 20);
  }
}
