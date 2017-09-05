var monster_img;
var cookie_img;
var rightscore;
var monster_x, monster_y;
var monster2_x, monster2_y;
var cookie_x, cookie_y;
var leftscore;
var cake_x, cake_y;
var pie_x, pie_y;
var cake_img, pie_img;
var button_y;
var button;
var mushroom_img;
var mushroom_x, mushroom_y;
var winner;

function preload() {
  monster_img = loadImage("assets/cookie_monster.png");
  cookie_img = loadImage("assets/cookie.png");
  cake_img = loadImage("assets/cake.png");
  pie_img = loadImage("assets/pie.png");
  mushroom_img = loadImage("assets/mushroom.png");
}

function setup() {
  createCanvas(720, 400);
  monster_x = 10;
  monster_y = height-150;
  monster2_x = 560;
  monster2_y = height-150;
  cookie_x = 725;
  cookie_y = random(350);
  cake_x = 705;
  cake_y = random(350);
  pie_x = 705;
  pie_y = random(350);
  mushroom_x = 700;
  mushroom_y = random(350);
  leftscore = 0;
  rightscore = 0;
  restart = 0;
  button = createButton('restart');
  button_y = -20;
  button.position(350, button_y);
  
  
  
}

function draw() {
  
  if (rightscore >= 10){
    button_y = 200;
    background(255,255,255);
     
     button.position(350, button_y);
     //button.mousePressed(remove);
     button.mousePressed(reboot);
     
     
     
   
  }
  else  { 
    background(1);
  displayPoints();
  image(monster_img, monster_x, monster_y, 60,60);
  image(monster_img, monster2_x, monster2_y, 60, 60)
  image(cookie_img, cookie_x, cookie_y);
  image(cake_img, cake_x, cake_y);
  image(pie_img, pie_x, pie_y);
  image(mushroom_img, mushroom_x, mushroom_y, 30, 30);
  
  moveMushroom();
  moveCookie();
  movePie();
  moveCake();
  moveMonster();
  moveMonster2();
  dots();
  checkForChomp();
  }
}

function displayPoints() {
  fill(255, 255 ,255);
  textSize(20);
  /*text('points', 15, 390);*/
  textSize(50);
  text(leftscore,280,60);
  fill(255,255,255);
  textSize(20);
  /*text('Misses', 15, 160);*/
  textSize(50);
  text(rightscore, 400, 60);
 
}
function dots() {
  fill(255,255,255);
  rect(350,10,10,30);
  fill(255,255,255);
  rect(350,50,10,30);
  fill(255,255,255);
  rect(350,90,10,30);
  fill(255,255,255);
  rect(350,130,10,30);
  fill(255,255,255);
  rect(350,170,10,30);
  fill(255,255,255);
  rect(350,210,10,30);
  fill(255,255,255);
  rect(350,250,10,30);
  fill(255,255,255);
  rect(350,290,10,30);
  fill(255,255,255);
  rect(350,330,10,30);
  fill(255,255,255);
  rect(350,370,10,30);
  
}

function moveCookie() {
  if(cookie_x < 0) {
    cookie_x = 725;
    cookie_y = random(350);
    rightscore += 1;
    print(rightscore);
  }
  else 
    cookie_x -= 4;
}

function movePie() {
  if(pie_x < 0) {
    pie_x = 725;
    pie_y = random(350);
  }
  else 
    pie_x -= 2;
}
function moveCake() {
  if(cake_x < 0) {
    cake_x = 725;
    cake_y = random(350);
  }
  else 
    cake_x -= 1;
}

  function moveMushroom() {
  if(mushroom_x < 0) {
    mushroom_x = 700;
    mushroom_y = random(350);
  }
  else 
    mushroom_x -= 1;
    
}

function moveMonster() {
  if(keyIsDown(UP_ARROW) && monster_y > 0)
    monster_y -= 2;
  if(keyIsDown(DOWN_ARROW) && monster_y < height-150)
    monster_y += 2;
    /*if(keyIsDown(RIGHT_ARROW) && monster_x < width-150)
    monster_x += 2;
    if(keyIsDown(LEFT_ARROW) && monster_x > 0)
    monster_x -= 2; */
}
function moveMonster2() {
  if(keyIsDown(UP_ARROW) && monster2_y > 0)
    monster2_y -= 2;
  if(keyIsDown(DOWN_ARROW) && monster2_y < height-150)
    monster2_y += 2;
}


function checkForChomp() {
  var d = dist(cookie_x, cookie_y, monster_x, monster_y);
  if (d < 100) {
    leftscore += 1;
    cookie_x = 725;
    cookie_y = random(350);
  }

  
  d = dist(cake_x, cake_y, monster_x, monster_y);
  if (d < 100) {
    rightscore += 1;
    cake_x = 725;
    cake_y = random(350);
  }
   d = dist(pie_x, pie_y, monster_x, monster_y);
  if (d < 100) {
    rightscore += 1;
    pie_x = 725;
    pie_y = random(350);
  }  
  d = dist(mushroom_x, mushroom_y, monster_x, monster_y);
  if (d < 100) {
    leftscore -= 1;
    mushroom_x = 700;
    mushroom_y = random(350);
  }
}
function reboot(){  createCanvas(720, 400);
  monster_x = 150
  monster_y = height-150;
  cookie_x = 725;
  cookie_y = random(350);
  cake_x = 705;
  cake_y = random(350);
  pie_x = 705;
  pie_y = random(350);
  leftscore = 0;
  rightscore = 0;
  restart = 0;
  button_y = -20;
  button.position(350, button_y);
  
}