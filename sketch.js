var bob, hiimage, alienYellowWalkImage, alienYellowWalkLeftImage, arrowImage;
var knifeImage, bobJumpImage;
var bobWalkImage, bobWalkLeftImage, bobDeadImage, bobDuckLeftImage;
var doorImage, guardStopImage, youWinImage
var gameState;
var guard, guardnum = 0, downnum = 0;
function preload(){
  hiimage = loadImage("BobSaysHi.png")
  bobWalkImage = loadAnimation("alien1.png","alien2.png");
  alienYellowWalkImage = loadImage("yellowalien.png");
  doorImage = loadImage("door.png")
  knifeImage = loadImage("knife1.png")
  bobDeadImage = loadImage("bobDead.png")
}

function setup() {
  createCanvas(400,400);
  bob=createSprite(68,336);
  bob.scale=0.8
  bob.addImage(hiimage);
  bob.x=58
  bob.y=80
  guard = createSprite(202,70,50,50);
  guard.addImage( "alien", alienYellowWalkImage);
  gameState = "intro";
}


function draw() {
  if (gameState === "intro") {
    background(25, 255, 0);
    textSize(20);
    text("Hi, my name is Bob. I was kidnapped by the ", 10, 150);
    textSize(20);
    text("evil yellow aliens. Help me escape!", 10, 180);
    textSize(20);
    text("The yellow button is for jumping.", 10, 210);
    textSize(20);
    text("The joystick is for walking...", 10, 240);
    textSize(20);
    text("But the bottom make me duck", 10, 280);
    textSize(20);
    text("Press the yellow button to continue", 10, 360);
    textSize(20);
    text("If I die, press the yellow button to restart", 10, 340);
    textSize(20);
    text("Go through the door to win!", 10, 300);
  }
  if(gameState == "intro" && keyDown("space")){
    gameState="play";
    guard.x=30;
     guard.y=352;
    bob.x=58;
    bob.y=80;
  }
    if(gameState==="lose"&&keyDown("space")){
    gameState="play";
    bob.x=58;
    bob.y=80;
  }
  if(gameState==="play"){
    background(72, 61, 139);
    var wall1=createSprite(150,148,380,40);
    var wall2=createSprite(250,268,380,40);
    var sword1=createSprite(250,148);
    var door=createSprite(198,342);
    var sword2=createSprite(150,148);
    door.addImage(doorImage);
    door.scale=1.5;
    sword1.scale=0.6;
    sword1.addImage(knifeImage);
    sword2.scale=0.6;
    sword2.addImage(knifeImage);
    if(keyDown("space")){
      bob.addImage(hiimage);
      downnum=0;
      bob.velocityY=-10;
    }
    if(bob.isTouching(sword1)||bob.isTouching(sword2)||bob.isTouching(guard)){
      bob.velocityX=0;
      bob.velocityY=0;
      gameState="lose";
    }
    //gravity
    bob.velocityY = bob.velocityY + 0.8;
  }
  if(gameState==="lose"){
    background(72, 61, 139);
    bob.addImage(bobDeadImage);
    guard.addImage(alienYellowWalkImage);
    guard.velocityX=0;

  }
  drawSprites();
}
  