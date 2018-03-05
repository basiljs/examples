// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function setup() {
  clear(doc());
  units(PT);

  var contents = "This is the first paragraph of the text frame.\rThis is the second one.";
  text(contents, 0, 0, 150, 100);
  text(contents, 0, 200, 150, 100);

  var myDoc = doc();

  stories(myDoc, function(story, si) {
    println("Story " + si);
  });

  paragraphs(myDoc, function(para, pi) {
    println("Paragraph " + pi);
  });

  lines(myDoc, function(line, li) {
    println("Line " + li);
  });

  words(myDoc, function(word, wi) {
    println("Word " + wi);
  });

  characters(myDoc, function(ch, ci) {
    println("Character " + ci);
  });
}
