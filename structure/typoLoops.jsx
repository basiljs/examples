// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function setup() {
  clear(doc());
  units(PT);

  text("Lorem ipsum is dolor\rsit amet", 0, 0, 150, 100);
  text("consectetur\radipisicing elit", 0, 200, 150, 100);

  var myDoc = doc();

  stories(myDoc, function(story, si) {
    println("Story " + si + ": " + story.contents);
  });

  paragraphs(myDoc, function(para, pi) {
    println("Paragraph " + pi + ": " + para.contents);
  });

  lines(myDoc, function(line, li) {
    println("Line " + li + ": " + line.contents);
  });

  words(myDoc, function(word, wi) {
    println("Word " + wi + ": " + word.contents);
  });

  characters(myDoc, function(ch, ci) {
    println("Character " + ci  + ": " + ch.contents);
  });
}
