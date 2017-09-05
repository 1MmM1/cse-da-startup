var right_paddle_y, left_paddle_y, right_paddle_x, left_paddle_x;
var paddle_width = 10; 
var paddle_height = 50;
var ball_size = 10;
var ball_x, ball_y;
var right_score, left_score;
var direction_x, direction_y;
var speed = 2;
var bounces, rounds;

function setup() {
  createCanvas(700, 400);
  
  right_score = 0;
  left_score = 0;
  bounces = 0;
  
  // might need this variable later
  rounds = 0;
  
  right_paddle_y = height / 2 - paddle_height / 2;
  left_paddle_y = height / 2 - paddle_height / 2;
  left_paddle_x = 0;
  right_paddle_x = width - paddle_width;
  initializeBall()
}

function draw() {
  background(0, 0, 0);
  if(right_score + left_score <= 5) {
    fieldSetup();
    
    fill(255, 0, 0);
    rect(left_paddle_x, left_paddle_y, paddle_width, paddle_height);
    fill(0, 255, 0);
    rect(right_paddle_x, right_paddle_y, paddle_width, paddle_height);
    
    fill(255, 255, 0);
    ellipse(ball_x, ball_y, ball_size, ball_size);
    
    displayPoints();
    movePaddles();
    moveBall();
  }
  else {
    text("GAME OVER", 300, 200);
  }
}

function fieldSetup() {
  var dash_width = 4;
  var dash_height = 20;
  
  fill(255, 255, 255);
  
  for(var i = dash_height / 2; i < height; i += 2 * dash_height) {
    rect(width / 2 - dash_width / 2, i, dash_width, dash_height);
  }
}

function displayPoints() {
  fill(0, 255, 0);
  textSize(70);
  text(right_score, width / 2 + textSize() / 2, textSize());
  fill(255, 0, 0);
  text(left_score, width / 2 - textSize(), textSize());
  
  textSize(20);
  text("Left", width / 2 - 4 * textSize(), 5 * textSize());
  fill(0, 255, 0);
  text("Right", width / 2 + textSize(), 5 * textSize());
  
  fill(0, 255, 255);
  textSize(70);
  text(bounces, width / 2 + textSize() / 2, height - textSize() / 2);
  text(right_score + left_score, width / 2 - textSize(), height - textSize() / 2);
  
  textSize(20);
  text("Bounces", width / 2 + textSize(), height - textSize() / 4);
  text("Rounds", width / 2 - 4 * textSize(), height - textSize() / 4);
}

// side = -1 is left
// side = 1 is right
function addScore(side) {
  if(side == 1) {
    right_score++;
  }
  else if(side == -1) {
    left_score++;
  }
  //print("left: " + left_score + "; right: "  + right_score);
}

function initializeBall() {
  bounces = 0;
  ball_x = width / 2;
  ball_y = height / 2;
  direction_x = round(random());
  direction_y = round(random());
}

function moveBall() {
  if(ball_x + ball_size / 2 >= right_paddle_x) {
    // See if ball intersects with right paddle
    if(ball_y >= right_paddle_y && ball_y <= right_paddle_y + paddle_height) {
      //print("hi " + paddle_y);
      direction_x = abs(direction_x - 1);
      // if you don't move it once it will just be stuck there
      ball_x -= speed * pow(-1, direction_x);
      bounces++;
    }
    else {
      addScore(-1);
      initializeBall();
    }
  }
  else if(ball_x - ball_size / 2 <= left_paddle_x + paddle_width) {
    // See if ball intersects with left paddle
    if(ball_y >= left_paddle_y && ball_y <= left_paddle_y + paddle_height) {
      //print("bye " + paddle_y);
      direction_x = abs(direction_x - 1);
      // if you don't move it once it will just be stuck there
      ball_x -= speed * pow(-1, direction_x);
      bounces++;
    }
    else {
      addScore(1);
      initializeBall();
    }
  }
  else if(ball_y - ball_size / 2 <= 0 || ball_y + ball_size / 2 >= height) {
    // See if ball is going off the top/bottom of the screen
    direction_y = abs(direction_y - 1);
    // if you don't move it once it will just be stuck there
    ball_y -= speed * pow(-1, direction_y);
    bounces++;
  }
  else {
    ball_x -= speed * pow(-1, direction_x);
    ball_y -= speed * pow(-1, direction_y);
  }
}

function movePaddles() {
  if(right_paddle_y > 0 && keyIsDown(UP_ARROW)) {
    right_paddle_y--;  
  }
  if(right_paddle_y + paddle_height < height && keyIsDown(DOWN_ARROW)) {
    right_paddle_y++;
  }
  if(left_paddle_y > 0 && keyIsDown(87)) {
    left_paddle_y--;  
  }
  if(left_paddle_y + paddle_height < height && keyIsDown(83)) {
    left_paddle_y++;
  }
}