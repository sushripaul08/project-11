var run , power , path;
var bomb, coin, energyDrink;
var run_running , pathImage;
var bombImage,coinImg,energyDrinkImg; 
var pwrImg , runImg
var invigr1 , r1 ,r2;
var invigr2 , invigr3,invigr4;

function preload(){
  //pre-load images
 r1 = loadAnimation("Runner-1.png");
  bomb = loadImage("bomb.png");
   energyDrink = loadImage("energyDrink.png")
coin = loadImage("coin.png");
path=loadImage("path.png"); 
power=loadImage("power.png");
r2 = loadImage("Runner-2.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here
run = creatSprites(200,200,20,50);
run.addAnimation("running",run_running);

run.velocityY =-4;
path = creatSprites(200,200,10,100)
path.scale=1.2;
run.x=100
coin= creatSprites(50,40,10,30)
coin.addImage(coinImg);
bomb = creatSprites(100,50,20,10)
bomb.scale=0.5;;
bomb.addImage(bombImage);
energyDrink= creatSprites(30,40,10,30)
energyDrink.addImage(coinImg);

power = creatSprites(50,40,50,10)
power.scale=0.5;
 invigr1 = creatSprites(190,180,10,100)

power.addImage(pwrImg);
path.velocityY = 4;
invigr2 = creatSprites(10,10,10,100)
invigr3 = creatSprites(10,180,10,100)
invigr4 = creatSprites(190,10,10,100)
 invigr2.visible = false; 
 invigr3.visible = false;
 invigr4.visible = false;
invigr1.visible = false;


run.collied(invigr1,invigr2,invigr3,invigr4)
}

function draw() {
  background(pathImage);

if (path.y > 200){

  path.y=hieght/2
}


drawSprites();


}
