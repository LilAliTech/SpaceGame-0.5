var ufo;
var Asteroid;
var Background;
var Rlauncer;
var SpaceShip;
var GameState = "Play";

function preload(){
  ufo = loadImage("Images/ufo1.png");
  Asteroid = loadImage("Images/Asteroid.png");
  Rlauncer = loadImage("Images/Rlauncher.png");
  spaceShip = loadImage("Images/SpaceShip.png");
  Background = loadImage("Images/Background.png");
}

function setup() {
  createCanvas(1000,600);
  SpaceShip = createSprite(400, 470, 50, 50);
  SpaceShip.addImage(spaceShip);
  SpaceShip.scale = 0.3;

  
}

function draw() {
  background(Background); 
  
 if (GameState === "Play"){
  if (keyDown(LEFT_ARROW)){
    SpaceShip.x = SpaceShip.x-4;
  }

  if(keyDown(RIGHT_ARROW)){
    SpaceShip.x = SpaceShip.x+4;
  }



  }
  drawSprites();
}


function Obstacles(){
  
}
