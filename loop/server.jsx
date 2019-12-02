#targetengine "loop";
// @include ~/Documents/basiljs/basil.js;

// note: use telnet on terminal to send strings after the server was started
// telnet localhost 1024
// then type and press return

var server = null;
var conn = null;

var tWidth;
var tHeight;

function setup() {
  units(PT);
  server = new Socket();
  server.listen(1024);
  server.timeout = 999999;
  println("server started at localhost 1024");

  tWidth = width - 150;
  tHeight = 400;

  textFont("Helvetica", "Bold");
  textSize(72);
  textAlign(Justification.CENTER_ALIGN);
}

function loop() {

  if(conn === null) {
    conn = server.poll();
  }
  if(conn !== null && conn.connected) {
    conn.timeout = 0.05; // time for connected client to wait for linefeed, otherwise blocks InDesign for 10 seconds
    var s = conn.readln();
    if (s !== null && s !== "") {
      println(s);

      addPage();
      var tf = text(s, width / 2 - tWidth / 2, height / 2 - tHeight / 2, tWidth, tHeight);
    }
  }

}

function cleanUp() {
  if(conn !== null) {
    conn.close();
  }
  if(server !== null) {
    server.close();
  }
  server = null;
  conn = null;
  println("stopped server");
}
