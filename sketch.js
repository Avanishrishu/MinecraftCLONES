 var steveImg, steve ;
 var wallImg, wall ;
 var dragonImg, dragon;
 var zombieImg, zombie;
 var creeperImg, creeper
 var spiderImg, spider;
 var gameOverImg, gameOver;
 var steveArmourImg;
 var wallGroup, zombieGroup, spiderGroup, creeperGroup,arrowGroup;
var bgImg, bg;
var floorImg;
var life = 3;
var heartImg3
var heartImg2
var heartImg1, heart1, heart2, heart3,resetImg,reset 
var bowImg, bow;
var arrowImg, arrow;
var score = 0;
var gameState = "play";

 function preload(){

 steveImg = loadImage("steve.png");
 gameOverImg = loadImage("gameOver.jpg");
 steveArmourImg = loadImage("steveArmour.jpg");
 wallImg = loadImage("wall.png");
 dragonImg = loadImage("ender dragon.png")
 spiderImg = loadImage("spider.png");
 creeperImg = loadImage("creeper.png");
 zombieImg = loadImage("zombie.png");
 bgImg = loadImage("background.jpg");
 floorImg = loadImage("floor.png");
 heartImg3 = loadImage("heart_3.png");
 heartImg2 = loadImage("heart_2.png");
 heartImg1 = loadImage("heart_1.png");
 resetImg = loadImage("reset.png");
 arrowImg = loadImage("arrow.png");
 bowImg = loadImage("bow.png");

 }

 



function setup() {
  createCanvas(windowWidth, windowHeight);

  bg = createSprite(0, height, width,10);
  bg.velocityX = -8;
  bg.shapeColor = "green";
 

  steve = createSprite(100, height-50, 50, 50);
  steve.addImage(steveImg);
  steve.scale = 0.3;

  bow = createSprite(steve.x+70, steve.y+100, 50, 50);
  bow.addImage(bowImg);
  bow.scale = 0.6
  bow.visible = false;

  wallGroup = new Group();
  spiderGroup = new Group();
  zombieGroup = new Group();
  creeperGroup = new Group();
  arrowGroup = new Group();

  

  heart1 = createSprite(displayWidth-150,40,20,20)
  heart1.visible = false
   heart1.addImage("heart1",heartImg1)
   heart1.scale = 0.4

   heart2 = createSprite(displayWidth-100,40,20,20)
   heart2.visible = false
   heart2.addImage("heart2",heartImg2)
   heart2.scale = 0.4

   heart3 = createSprite(displayWidth-150,40,20,20)
   heart3.addImage("heart3",heartImg3)
   heart3.scale = 0.4
  
   gameOver = createSprite(width/2, height/2, 50, 50);
   gameOver.addImage(gameOverImg);
   gameOver.scale = 0.5;
   gameOver.visible = false ; 

   reset = createSprite(width/2, height/2+00, 50, 50);
   reset.addImage(resetImg);
   reset.scale = 0.1;
   reset.visible = false;
  

}

function draw() {
  background(bgImg);  

  if(keyDown("UP_ARROW")||touches.length>0){
    bow.visible = false;
    steve.y = steve.y-30
  }
  if(keyDown("DOWN_ARROW")||touches.length>0){
   steve.y = steve.y+30
   bow.visible = false;
  }
 
  if(bg.x<0){
  bg.x = width/2
  }
 
  if(keyWentDown("space")){
    bow.visible = false;
    arrow = createSprite(bow.x, bow.y, 50, 50);
    arrow.velocityX = 5; 
    arrow.addImage(arrowImg);
    arrow.scale = 0.2;
    arrowGroup.add(arrow);
  }
  
  //player goes back to original standing image once we stop pressing the space bar
  else if(keyWentUp("space")){
    bow.visible = true;
    bow.x = steve.x+70;
    bow.y = steve.y-30;
  }
 

  if(score >= 5){
    dragon = createSprite(width-150, height-150, 100, 100);
    dragon.velocityX = -3
    dragon.addImage(dragonImg);
  
    dragon.scale = 0.5;
  }
  steve.collide(bg);

  if(frameCount%140==0){
    var randomNumber = Math.floor(random(1, 5));
    console.log(randomNumber)
    if(randomNumber==1){
      zombieCreation()     
    }
    else if (randomNumber==2){
      creeperCreation()
      
    }
    else if (randomNumber==3){
      spiderCreation()
    }
    else{
      wallCreation();
    }
  }
 
  if(zombieGroup.isTouching(arrowGroup)){
  
    for(var i=0;i<zombieGroup.length;i++){     
       
     if(zombieGroup[i].isTouching(arrowGroup)){
       zombieGroup[i].destroy()
       arrowGroup[i].destroy();
        score= score+1;
        } 
    }
  }

  if(creeperGroup.isTouching(arrowGroup)){
  
    for(var i=0;i<creeperGroup.length;i++){     
       
     if(creeperGroup[i].isTouching(arrowGroup)){
       creeperGroup[i].destroy()
       arrowGroup[i].destroy();
         score = score +2 } 
    }
  }

  if(spiderGroup.isTouching(arrowGroup)){
  
    for(var i=0;i<spiderGroup.length;i++){     
       
     if(spiderGroup[i].isTouching(arrowGroup)){
       spiderGroup[i].destroy()
       arrowGroup[i].destroy();
         score= score+1 } 
    }
  }

  if(wallGroup.isTouching(arrowGroup)){
  
    for(var i=0;i<wallGroup.length;i++){     
       
     if(wallGroup[i].isTouching(arrowGroup)){
       wallGroup[i].destroy()
       arrowGroup[i].destroy();
         score= score+3 } 
    }
  }

  if(zombieGroup.isTouching(steve)){
 

    for(var i=0;i<zombieGroup.length;i++){     
         
     if(zombieGroup[i].isTouching(steve)){
          zombieGroup[i].destroy()
         life = life-1;
          
          } 
    }
   }

   if(creeperGroup.isTouching(steve)){
 

    for(var i=0;i<creeperGroup.length;i++){     
         
     if(creeperGroup[i].isTouching(steve)){
          creeperGroup[i].destroy()
         life = life-1;
          
          } 
    }
   }

   if(spiderGroup.isTouching(steve)){
 

    for(var i=0;i<spiderGroup.length;i++){     
         
     if(spiderGroup[i].isTouching(steve)){
          spiderGroup[i].destroy()
         life = life-1;
          
          } 
    }
   }

   if(wallGroup.isTouching(steve)){
 

    for(var i=0;i<wallGroup.length;i++){     
         
     if(wallGroup[i].isTouching(steve)){
          wallGroup[i].destroy()
         life = life-1;
          
          } 
    }
   }

   if(life==3){
    heart3.visible = true;
    heart2.visible = false;
    heart1.visible = false;
  }
  if(life == 2){
   heart3.visible = false;
   heart2.visible = true;
   heart1.visible = false;
  }
  if(life==1){
   heart3.visible = false;
   heart2.visible = false;
   heart1.visible = true;
  }
  if(life==0){
  heart3.visible = false;
  heart2.visible = false;
  heart1.visible = false;
  
  zombieGroup.destroyEach();
  creeperGroup.destroyEach();
  spiderGroup.destroyEach();
  wallGroup.destroyEach();

  gameOver.visible = true;
     
  reset.visible = true;
  gameState="end";
  }

  drawSprites();

  
  textSize(30);
  fill("red");
  text("score:"+score,width/2,100);
}



function zombieCreation(){
  if(frameCount%140===0){
    
    

    //giving random x and y positions for zombie to appear
    zombie = createSprite(width,500,40,40)

    zombie.y = Math.round(random(height-50, height/2-100));
    zombie.addImage(zombieImg)
    zombie.scale =  0.43;
    zombie.velocityX = -3
    zombie.debug= true
    zombie.setCollider("rectangle",0,0,200,200)
   
    zombie.lifetime = 600
   zombieGroup.add(zombie)
  }
  
  
}

function creeperCreation(){
  if(frameCount%140===0){
    
    

    //giving random x and y positions for zombie to appear
    creeper = createSprite(width,500,40,40)

    creeper.y = Math.round(random(height-50, height/2-100));
    creeper.addImage(creeperImg)
    creeper.scale = 0.45
    creeper.velocityX = -3
    creeper.debug= true
    creeper.setCollider("rectangle",0,0,200,200)
   
    creeper.lifetime = 600
   creeperGroup.add(creeper)
  }
  
  
}



function spiderCreation(){
  if(frameCount%140===0){
    
    

    //giving random x and y positions for zombie to appear
    spider = createSprite(width,500,40,40)

    spider.y = Math.round(random(height-50, height/2-100));
    spider.addImage(spiderImg)
    spider.scale = 0.40
    spider.velocityX = -3
    spider.debug= true
    spider.setCollider("rectangle",0,0,200,200);
   
    spider.lifetime = 600
   spiderGroup.add(spider)
  }
  
  
}

function wallCreation(){
  if(frameCount%140===0){
    
    

    //giving random x and y positions for zombie to appear
    wall = createSprite(width,500,40,40)

    wall.y = Math.round(random(height-50, height/2-100));
    wall.addImage(wallImg)
    wall.scale = 0.40
    wall.velocityX = -3
    wall.debug= true
    wall.setCollider("rectangle",0,0,200,200)
   
    wall.lifetime = 600
   wallGroup.add(wall)
  }
  
  
}