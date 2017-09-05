// Brown, chesnut: 139, 69, 19
// Brown, sandy 244, 164, 96

var r, g, b;
var eyelid;
var closing = true;
var time = 0;
var darken = 0;

function setup() {
  // Create the canvas
  createCanvas(400, 270);
  
  // Start main color as brown, chesnut
  r = 139;
  g = 69;
  b = 19;
  eyelid = 0;
}

function makeEar(center_x, center_y) {
  fill(r, g, b);
  ellipse(center_x, center_y, 40, 40);
  
  fill(244, 164, 96); 
  ellipse(center_x, center_y, 20, 20);
} 

function makeEye(x_pos, y_pos) {
  fill(0, 0, 0);
  rect(x_pos, y_pos, 20, 30);
  
  fill(255, 255, 255);
  rect(x_pos + 5, y_pos + 10 + eyelid, 10, 10 - eyelid);
}

// side = -1 means left side
// side = 1 means right side 
function makeWhiskers(side) {
  stroke(244, 164, 96);
  line(230 + 90 * side, 110, 230 + 50 * side, 130);
  line(230 + 100 * side, 140, 230 + 50 * side, 140);
  line(230 + 90 * side, 170, 230 + 50 * side, 150);
  noStroke();
}

function makeHill(x_pos, y_pos, w, h) {
  fill(0, 255 - darken, 0);
  stroke(0, 0, 0);
  arc(x_pos + (w / 2), y_pos, w, h, PI, 0, PIE);
}

function makeCloud(x_pos, y_pos, w, h) {
  fill(255, 255, 255);
  noStroke();
  arc(x_pos + (w / 3), y_pos, w, h, PI, 0, PIE);
  arc(x_pos, y_pos, w, h / 2, PI, 0, PIE);
  arc(x_pos + (w / 2), y_pos, w, h / 3, PI, 0, PIE);
}

function makeFangs() {
  fill(255, 0, 0);
  triangle(210, 160, 210, 170, 215, 165);
  triangle(250, 160, 250, 170, 245, 165);
}

function makeNoseAndMouth() {
  // Make nose
  fill(0, 0, 0);
  triangle(220, 140, 230, 150, 240, 140);
  
  // Make mouth
  stroke(0, 0, 0);
  line(230, 150, 230, 170);
  line(210, 160, 230, 170);
  line(250, 160, 230, 170);
}

function makeMuzzle() {
  fill(244, 164, 96); 
  ellipse(230, 160, 80, 60);
  makeWhiskers(-1);
  makeWhiskers(1);
  makeNoseAndMouth();
  makeFangs();
}

function makeScenery() {
  fill(255, 255, 0);
  ellipse(375, 10, 100, 100);
  
  makeCloud(25 + time % 900 - 400, 50, 100, 80);
  makeCloud(100 + time % 900 - 400, 90, 50, 50);
  makeCloud(225 + time % 900 - 400, 60, 125, 50);
  makeCloud(150 + time % 900 - 400, 30, 150, 70);
  
  makeHill(25, 320, 400, 500);
  makeHill(-100, 300, 200, 300);
  makeHill(225, 300, 250, 400);
  makeHill(50, 300, 250, 200);
}

function draw() {
  if(time % 900 > 400 && time % 900 < 800) {
    darken += (600 - (time % 900)) / 200;
  }
  
  background(100, 225 - darken, 255);
  
  makeScenery();

  makeEar(190, 70);
  makeEar(270, 70);
  
  // Make face and body
  fill(r, g, b);
  stroke(0, 0, 0);
  ellipse(230, 130, 140, 120);
  triangle(170, 250, 230, 180, 290, 250);
  
  if(mouseIsPressed) {
    if(closing) {
      if(eyelid >= 9) {
        closing = false;
      }
      else {
        eyelid += 0.1;
      }
    }
    else {
      if(eyelid <= 0) {
        closing = true;
      }
      else {
        eyelid -= 0.1;
      }
    }
  }
  
  makeEye(190, 100);
  makeEye(250, 100);
  
  makeMuzzle();
  
  time++;
}

function keyPressed() {
  if (keyCode == ENTER) {
    r = random(255);
    g = random(255);
    b = random(255);
  }
}