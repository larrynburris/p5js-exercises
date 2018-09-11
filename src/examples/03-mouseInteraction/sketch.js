var points = [];

function setup() {
  createCanvas(600, 400);
}

function draw() {

  if(mouseIsPressed) {
    background(150);
  }
  else{
    background(200);
  }

  line(mouseX, 0, mouseX, 400);
  line(0, mouseY, 600, mouseY);
  var mousePos = '( ' + mouseX + ' , ' + mouseY + ' )';
  text(mousePos, mouseX+10, mouseY-10);

  for(var i = 0; i < points.length; i++) {
    var point = points[i];
    ellipse(point.x, point.y, 3, 3);
  }
}

function mousePressed() {
  points.push({
    x: mouseX,
    y: mouseY
  });
}