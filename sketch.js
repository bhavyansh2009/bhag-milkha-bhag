
var path,runner,power,coin,bomb,energyDrink;
var pathImg,runnerImg1,coinImg,bombImg,energyDrinkImg,powerImg,runnerImg2;
var coinCollection = 0;
var coinG,bombG,energyDrinkG;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("path.png");
  runnerImg1 = loadAnimation("Runner-1.png","Runner-2.png");
  coinImg = loadImage("coin.png");
  energyDrinkImg = loadImage("energyDrink.png");
  bombImg = loadImage("bomb.png");
  endImg =loadAnimation("power.png");
}

function setup(){
  
  createCanvas(400,600);
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;


//creating boy running
runner = createSprite(70,580,20,20);
runner.addAnimation("sahilRunning",runnerImg1,);
runner.scale=0.08;
  
  
coinG=new Group();
powerG=new Group();
energyDrinkG=new Group();
bombGroup=new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
  runner.x = World.mouseX;
  
  edges= createEdgeSprites();
  runner.collide(edges);
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
} 
  
function setup(){
  createCanvas(400,400);
  //create sprites here
  createCoin();
  createBomb();
  createEnergyDrink();
  
  }
}

 if (energyDrinkG.isTouching(runner)) {
  energyDrinkG.destroyEach();
  coinCollection=coinCollection+150;
  addAnimation("powerImg")
}
else{
  if(bombG.isTouching(runner)) {

    gameState=END;
    runner.addAnimation("Sahilrunnig",endImg)
    runner.x=200
    runner.y=350
    coinG.destroyEach();
    coinG.setVelocityEach(0)
    energyDrinkG.destroyEach();
    energyDrinkG .setVelocityEach(0)
    bombGroup.destroyEach();
    bombGroup.setVelocityEach(0)

  }
}

function createCoin() {
  if (World.frameCount % 100 == 0) {
  var coin = createSprite(Math.round(random(50, 350),40, 10, 10));
  coin.addImage(coinImg);
  coin.scale=0.12;
  coin.velocityY = 3;
  coin.lifetime = 150;
  coinG.add(coin);
  }
}
   

function createEnergyDrink() {
  if (World.frameCount % 200 == 0) {
  var energyDrink = createSprite(Math.round(random(50, 350),40, 10, 10));
  energyDrink.addImage(energyDrinkImg);
  energyDrink.scale=0.12;
  energyDrink.velocityY = 3;
  energyDrink.lifetime = 150;
  energyDrink.add(energyDrink);
  }
}
function createBomb() {
  if (World.frameCount % 200 == 0) {
  var bomb = createSprite(Math.round(random(50, 350),40, 10, 10));
  bomb.addImage(bombImg);
  bomb.scale=0.12;
  bomb.velocityY = 3;
  bomb.lifetime = 150;
  bombG.add(bomb);
  }
}














  