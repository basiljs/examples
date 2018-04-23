#targetengine "loop";
// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

var pos, vel;
var ball;
var ballRadius = 40;
var paddle;
var paddleWidth = 300;
var paddleHeight = 40;
var counter = 0;
var countBox;

function setup() {

  units(PX);

  // create ball
  initBall();

  // init paddle
  paddle = rect(width / 2 - paddleWidth / 2, height - paddleHeight - 10, paddleWidth, paddleHeight);

  // init countBox
  countBox = text("0", width - 320, 20, 300, 80);
  typo(countBox, "appliedFont", "Helvetica\tBold");
  typo(countBox, "pointSize", "72");
  typo(countBox, "justification", Justification.RIGHT_ALIGN);

}

function loop() {

  pos.add(vel);

  // detect boundary collision
  // right
  if (pos.x > width - ballRadius * 2) {
    pos.x = width - ballRadius * 2;
    vel.x *= -1;
  }
  // left
  if (pos.x < 0) {
    pos.x = 0;
    vel.x *= -1;
  }
  // top
  if (pos.y < 0) {
    pos.y = 0;
    vel.y *= -1;
  }
  // bottom => you loose
  if (pos.y > height - ballRadius * 2) {
    ball.remove();
    counter = 0;
    initBall();
  }

  // check paddle
  if (paddle !== null
        && pos.y > transform(paddle, "y") - ballRadius * 2
        && pos.x > transform(paddle, "x") - ballRadius
        && pos.x < transform(paddle, "x") + ballRadius + transform(paddle, "width")) {

    vel.y *= -1;
    vel.mult(1.0); // getting harder...
    counter++;
    pos.y = transform(paddle, "y") - ballRadius * 2;

  }

  transform(ball, "position", [pos.x, pos.y]);
  countBox.contents = String(counter);

}

function initBall() {
  pos = new Vector(width / 2, height / 2);
  vel = new Vector(random(-20, 20), -18);
  ball = ellipse(pos.x, pos.y, ballRadius * 2, ballRadius * 2);
  transform(ball, "position", [pos.x, pos.y]);
}

// this is called when the stop.jsx script is invoked. use this to remove all the runtime items.
function cleanUp() {
  ball.remove();
  paddle.remove();
  countBox.remove();
}
