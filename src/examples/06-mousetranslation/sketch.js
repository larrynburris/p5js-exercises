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
  checkDirectionalKeys();
  updateForm()

  translate(offset.x, offset.y);

  renderAxes();

  fill(150);
  renderMousePosition();
  updateForm()
}

function checkDirectionalKeys() {
  if(keyIsDown(UP_ARROW)) {
    offset.y += 10;
  } else if(keyIsDown(DOWN_ARROW)) {
    offset.y -= 10;
  } else if (keyIsDown(RIGHT_ARROW)) {
    offset.x += 10;
  } else if(keyIsDown(LEFT_ARROW)) {
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
  line(0, -height, 0, height)
  line(-width, 0, width, 0);
  var increment = (width/4.0);
  renderPointAndLabel(0, 0);
  renderPointAndLabel(0, increment);
  renderPointAndLabel(0, -increment);
  renderPointAndLabel(-increment, 0);
  renderPointAndLabel(increment, 0);
}

function renderPointAndLabel(x, y) {
  var posString = getCoordinateString(x,y);
  ellipse(x, y, 10, 10);
  var xloc = x+15.0;
  var yloc = y+15.0;
  text(posString, xloc.toFixed(0), yloc.toFixed(0));
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