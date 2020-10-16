
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var fruitGroup;
var survivaltime=0
function preload(){
  
  
  monkey_running =      loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(450, 300); 
monkey = createSprite(40,250,20,50);
  monkey.addAnimation( "running",monkey_running);
  //monkey.addAnimation("collided", trex_collided);
  monkey.scale=0.1;
  
  ground=createSprite(450,285,900,10)
  fruitGroup=new Group();
 
  
  
}


function draw() {
background("red");
  ground.velocityX = -3; 
    if(ground.x<0){ 
       ground.x = ground.width/2;
      
    }
  monkey.collide(ground);
   
  if(keyDown("space")&& monkey.y >= 230){
    monkey.velocityY=-12
   
  }
  
   monkey.velocityY = monkey.velocityY + 0.8;
  spawnfruit();
  spawnrock();
  drawSprites();
  
  
  stroke ("black");
  textSize (20);
  fill ("black")
  survivaltime=Math.ceil(frameCount/frameRate());
  text("survivaltime:"+survivaltime,150,50);
}
function spawnfruit(){
  if(frameCount %50===0){
          fruit= createSprite(400,150,20,20)//40,40) 
     
      fruit.addImage(bananaImage);
        fruit.velocityX=-5
        fruit.lifetime=100
         fruit.scale=0.1
         fruitGroup.add(fruit);
  }
       }

function spawnrock(){
  if(frameCount %200===0){
          rock= createSprite(400,265,20,20)//40,40) 
     
      rock.addImage(obstacleImage );
        rock.velocityX=-5
        rock.lifetime=100
         rock.scale=0.1
        // fruitGroup.add(fruit);
  }
       }




