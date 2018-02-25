// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  textSize(64);
  var tf = text("this content will be overwritten", width / 2 - 250, height / 2 - 150, 500, 300);

  for(var i = 0; i < 20; i++) {
    tf.contents = "hello pdf " + i;
    savePDF("hello-pdf-" + i + ".pdf");
  }

  // show export options
  // savePDF("hello.pdf",true);
}
