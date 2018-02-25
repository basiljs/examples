// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

// Example shows how to executes a shell command ...
// CURRENTYL MAC ONLY!
// BE CAREFUL!

function draw() {

  println("-- get the current time from the shell --");
  println(shellExecute("date"));
  println("");

  println("-- list all files on your desktop --");
  println(shellExecute("ls ~/Desktop"));
  println("");

  println("-- some around in the internetz? --");
  println(shellExecute("ping -c 1 www.basiljs.ch"));
}
