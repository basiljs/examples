// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

// Example shows how to download an url to a file
// CURRENTYL MAC ONLY!

function draw() {

  println("The project folder: " + projectFolder());

  var url = "https://raw.github.com/basiljs/basil.js/master/changelog.txt";

  // download the url to a default location, filename according to url:
  // -> "the project folder" + data/download/changelog.txt
  download(url);

  // download url to a specific location in the project folder:
  // -> "the project folder" + data/download_txt_files/my changelog.txt
  download(url, "download_txt_files/my_changelog.txt");

  // download url to a specific location e.g. to your desktop
  // -> ~/Desktop/basiljs_changelog.txt
  var newFile = file("~/Desktop/basiljs_changelog.txt");
  download(url, newFile);

}
