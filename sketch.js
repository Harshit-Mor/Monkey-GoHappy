var monkey , monkey_running,ground,backgrounds
var banana ,bananaImage, obstacle, obstacleImage,backgroundImade
var FoodGroup, obstacleGroup
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  backgroundImage=loadImage("jungle.jpg");
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}
function setup() {
  createCanvas(600, 600);
  
  backgrounds=createSprite(300,300,600,600);
  backgrounds.addImage(backgroundImage);
  
  monkey = createSprite(50,160,20,50);
  monkey.addAnimation("running", monkey_running);

  monkey.scale = 0.1;
  
  ground = createSprite(600,600,600,20);
  ground.x = ground.width /2;
  
  
  obstaclesGroup = new Group();
  bananaGroup = new Group();

  
  score = 0;
  
}

function draw() {
  
  background(255);
     
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    if(keyDown("space")&& monkey.y >= 500  ) {
        monkey.velocityY = -20;
    }
  if(bananaGroup.isTouching(monkey)){
    bananaGroup.destroyEach();
    score=score+1;
  }
    
    monkey.velocityY = monkey.velocityY + 0.8
  
    spawnbanana();
    
    spawnObstacles();
    
    if(obstaclesGroup.isTouching(monkey)){
        monkey.scale=0.1;  
    } 
  monkey.collide(ground);
  
  drawSprites();
  
  stroke("white");
  fill("white");
  textSize(20);
  text("Score="+score,500,50);
}

function spawnObstacles(){
 if (frameCount % 200 === 0){
   var obstacle = createSprite(600,580,10,40);
   obstacle.addImage(obstaceImage);
   obstacle.velocityX=-3
              
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;
   
    obstaclesGroup.add(obstacle);
 }
}

function spawnbanana() {

  if (frameCount % 150 === 0) {
    var banana = createSprite(600,500,40,10);
    banana.y = Math.round(random(390,450));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
    banana.lifetime = 200;
    
    bananaGroup.add(banana);
  }
}