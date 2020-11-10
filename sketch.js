
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground


function preload(){
  
  score = 0;
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
 
}



function setup() {
  createCanvas(800, 400)
  
  
  monkey = createSprite(100, 350);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.15;
  
  ground = createSprite(100, 390, 1500, 5)
  ground.velocityX = -10;
 ground.x = ground.width/2
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
  
  
  
  

  
}


function draw() {
  
  background("white");
  
  stroke("black");
  fill("black")
  text("Score: "+ score, 740, 50);
  
  score = Math.ceil(frameCount/frameRate())

  
  if(ground.x < 0) {
  
  ground.x = ground.width /2;
    
    }
  
  if(keyDown("Space") && monkey.y>= 341.45){
    
    monkey.velocityY = -15;
    
  }
  
  console.log(monkey.y);
  
  monkey.velocityY = monkey.velocityY + 0.8;

  monkey.collide(ground);
  
  spawnBanana();
  
  spawnObstacle();
  
  drawSprites();
}

function spawnBanana() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    var banana= createSprite(800,120,40,10);
    banana.y = Math.round(random(150,200));
    banana.addImage(bananaImage);
    banana.scale = 0.15;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 300;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each cloud to the group
    FoodGroup.add(banana);
  }
}

function spawnObstacle() {
  //write code here to spawn the clouds
  if (frameCount % 300 === 0) {
    var obstacle= createSprite(800,345,50,50);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.25;
    obstacle.velocityX = -3;
    
     //assign lifetime to the variable
    obstacle.lifetime = 300;
    //add each cloud to the group
    obstacleGroup.add(obstacle);
  }
}




