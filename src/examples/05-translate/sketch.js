var position = { x: 50, y: 50 };

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(200);

  // fill(150);
  // renderMousePosition();

  translate(width/2, height/2);

  renderAxes();

  fill(150);
  renderMousePosition();

  fill(100);
  renderPointPosition();

  line(0, -height, 0, height);
  line(-width, 0, width, 0);
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
  line(mouseX, -height, mouseX, height);
  line(-width, mouseY, width, mouseY);
  var mousePos = '( ' + mouseX + ' , ' + mouseY + ' )';
  text(mousePos, mouseX+10, mouseY-10);
}

function renderPointPosition() {
  ellipse(position.x, position.y, 5, 5);
  var posString = '( ' + position.x + ' , ' + position.y + ' )';
  text(posString, position.x+10, position.y-10);
}

function renderAxes() {
  line(0, -600, 0, 600)
  line(-600, 0, 600, 0);
  var posString = '( 0, 0 )';
  ellipse(0, 0, 10, 10);
  text(posString, 10, 10);
}