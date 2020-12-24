 
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var survivalTime;
var ground;
function preload(){
   createCanvas(600, 600);
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 obstacleGroup = new Group();
  FoodGroup = new Group();
}



function setup() {
  createCanvas(600, 600);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("run",monkey_running);
  monkey.scale=0.1;
  // monkey.debug = true;    
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
}


function draw() {
  background(260);
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("survivalTime:"+survivalTime,100,50);
  
 obstacles();
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  if(keyDown("space")) {
       monkey.velocityY = -12;
  } 
     
      monkey.velocityY =  monkey .velocityY + 0.4;
  monkey.collide(ground);
  
 
 Food();
  
    if(obstacleGroup.isTouching(monkey)){
        //set velcity of each game object to 0
    ground.velocityX = 0;
    monkey.velocityX = 0;
    obstacleGroup.setVelocityXEach(-1);
   FoodGroup.setVelocityXEach(-1);
      score=0;
    }

  if (FoodGroup.isTouching(monkey)){
      monkey.scale=+0.1; 
    FoodGroup.destroyEach();
      }
drawSprites();
}


function obstacles(){

   if(World.frameCount%200===0){
  var obstacles = createSprite(400,310,10,10); 
       obstacles.addImage("obstac",obstacleImage);
  obstacles.velocityX = -3;
    obstacles.y = Math.round(random(310,310));
  obstacles.scale = 0.2;
   obstacles.lifetime=150;
     
   obstacleGroup.add(obstacles);
  
     
   }   
 
}

function Food(){
  if(World.frameCount%200===0){
 var banana = createSprite(390,590,10,10);
    
     banana.velocityX = -3;
     banana.scale = 0.1;
     banana .lifetime=300;
 
    banana.depth  = monkey.depth;
       monkey.depth=monkey.depth+1;
    banana .y= Math.round(random(120,120));
    banana.addImage(bananaImage);
        FoodGroup.add(banana);
    }
  
}








