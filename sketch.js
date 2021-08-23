var bg,sleep, brush,eat;
var gym, drink,bath;
var astronaut, bg1;
var move;

function preload(){
bg = loadImage("images/iss.png");
sleep = loadAnimation("images/sleep.png");
brush = loadAnimation("images/brush.png");
gym = loadAnimation("images/gym11.png","images/gym12.png");
eat = loadAnimation("images/eat1.png","images/eat2.png");
drink = loadAnimation("images/drink1.png","images/drink2.png");
move = loadAnimation("images/move.png","images/move1.png");
bath = loadAnimation("images/bath1.png","images/bath2.png");
}

function setup() {
  createCanvas(800,400);
  bg1 = createSprite(400, 200, 50, 50);
  bg1.addImage("background",bg);
  
  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale = 0.1;
}

function draw() {
  background(255,255,255);  

  if (keyDown("UP_ARROW")) {
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming",gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 250;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if (keyDown("LEFT_ARROW")) {
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating");
    astronaut.x = 300;
    astronaut.velocityX=  0;
    astronaut.velocityY = 0;
  }
  
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing",bath);
    astronaut.changeAnimation("bathing");
    astronaut.x =650;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
 
  if(keyDown("m")){
    astronaut.addAnimation("moving",move1);
    astronaut.changeAnimation("moving");
    astronaut.y = 250;
    astronaut.velocityY=0;
    astronaut.velocityX=0;
  }

  if(keyDown("d")){
    astronaut.addAnimation("drinking",drink);
    astronaut.changeAnimation("drinking");
    astronaut.x = 275;
    astronaut.velocityY=0;
    astronaut.velocityX=0;
  }
  drawSprites();
}