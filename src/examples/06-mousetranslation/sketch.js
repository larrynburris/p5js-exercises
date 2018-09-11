var offset = { x: 0, y: 0 };
var cscale = { x: 1, y: 1 }

var viewportEl = document.getElementById("viewport");
var mouseAbsEl = document.getElementById("mouseabs");
var mouseRelEl = document.getElementById("mouserel");
var scaleXEl = document.getElementById("scalex");
var scaleYEl = document.getElementById("scaley");

function setup() {
  createCanvas(600, 400);
  updateForm();
}

function draw() {
  background(200);
  updateForm()

  translate(offset.x, offset.y);

  renderAxes();

  fill(150);
  renderMousePosition();

  line(0, -height, 0, height);
  line(-width, 0, width, 0);
  updateForm()
}

function keyPressed() {
  if(keyCode === UP_ARROW) {
    offset.y += 10;
  } else if(keyCode === DOWN_ARROW) {
    offset.y -= 10;
  } else if (keyCode === RIGHT_ARROW) {
    offset.x += 10;
  } else if(keyCode === LEFT_ARROW) {
    offset.x -= 10;
  }
}

function renderMousePosition() {
  var relMouse = getRelativeMousePos();
  line(relMouse.x, -height, relMouse.x, height);
  line(-width, relMouse.y, width, relMouse.y);
  var mousePos = getCoordinateString(relMouse.x, relMouse.y);
  text(mousePos, relMouse.x+10, relMouse.y-10);
}

function renderAxes() {
  line(0, -600, 0, 600)
  line(-600, 0, 600, 0);
  var posString = '( 0, 0 )';
  ellipse(0, 0, 10, 10);
  text(posString, 10, 10);
}

function getCoordinateString(x, y) {
  return "( " + x + " , " + y + " )";
}

function updateForm() {
  viewportEl.value = getCoordinateString(offset.x, offset.y);
  mouseAbsEl.value = getCoordinateString(mouseX, mouseY);
  var relMouse = getRelativeMousePos();
  mouseRelEl.value = getCoordinateString(relMouse.x, relMouse.y);
  scaleXEl.value = cscale.x;
  scaleYEl.value = cscale.y;
}

function getRelativeMousePos() {
  return {
    x: mouseX-offset.x,
    y: mouseY-offset.y
  }
}