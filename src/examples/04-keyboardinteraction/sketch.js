
function setup() {
  createCanvas(600, 400);
}

function draw() {

  background(200);

  fill(150);
  renderMousePosition();

  fill(100);
  renderPointPosition();
}

function keyPressed() {
  if(keyCode === UP_ARROW) {
    position.y += 10;
  } else if(keyCode === DOWN_ARROW) {
    position.y -= 10;
  } else if (keyCode === RIGHT_ARROW) {
    position.x += 10;
  } else if(keyCode === LEFT_ARROW) {
    position.x -= 10;
  }
}

function renderMousePosition() {
  line(mouseX, 0, mouseX, 400);
  line(0, mouseY, 600, mouseY);
  var mousePos = '( ' + mouseX + ' , ' + mouseY + ' )';
  text(mousePos, mouseX+10, mouseY-10);
}

function renderPointPosition() {
  ellipse(position.x, position.y, 5, 5);
  var posString = '( ' + position.x + ' , ' + position.y + ' )';
  text(posString, position.x+10, position.y-10);
}