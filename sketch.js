var apple, appleGroup, appleImg
var redApple, redAppleGroup, redAppleImg
var orange, orangeGroup, orangeImg
var watermelon, watermelonGroup, watermelonImg
var mango, mangoGroup, mangoImg
var knife, knifeImg


function preload(){
 appleImg= loadAnimation("apple-project.png");
 redSplash= loadAnimation("red splash.png")
 greenSplash= loadAnimation("green splash.png")
 yellowSplash= loadAnimation("yellow splash.png")
 orangeSplash= loadAnimation("orange splash.png")
 redAppleImg= loadAnimation("red_apple-project.png");
 orangeImg= loadAnimation("orange-project.png");
 mangoImg= loadAnimation("mango-project.png");
 watermelonImg= loadAnimation("watermelon.png");
 knifeImg= loadImage("knife-project.png");

}

function setup() {
    createCanvas(windowWidth, windowHeight)
    knife=createSprite(width/2, height/2)
    knife.addImage("k", knifeImg)   
    knife.rotation=-125;
    knife.scale=0.3
    appleGroup=createGroup()
    orangeGroup=createGroup()
    redAppleGroup=createGroup()
    watermelonGroup=createGroup()
    mangoGroup=createGroup()
}

function draw() {
    background("blue")
 drawSprites();
 knife.x=mouseX;
 knife.y=mouseY;
 var selectSprite = Math.round(random(1,5))
 if (frameCount%100===0){
    if (selectSprite==1){
        createApples()
     }
    if (selectSprite==2){
        createOranges()
    }
    if (selectSprite==3){
        createRedApples()
    }
    if (selectSprite==4){
        createMangoes()
    }
    if (selectSprite==5){
        createWatermelons()
    }
 }
 
 if (knife.isTouching(appleGroup)){
     appleGroup.changeAnimation("ars", greenSplash)
 }
 if (knife.isTouching(orangeGroup)){
    orangeGroup.changeAnimation("os", orangeSplash)
}
if (knife.isTouching(redAppleGroup)){
    redAppleGroup.changeAnimation("As", redSplash)
}
if (knife.isTouching(mangoGroup)){
    mangoGroup.changeAnimation("ms", yellowSplash)
}
if (knife.isTouching(watermelonGroup)){
    watermelonGroup.changeAnimation("wms", redSplash)
}
}
function createApples(){
    apple=createSprite(Math.round(random(windowWidth-50,50)),Math.round(random(windowHeight-50,50)))
    apple.addAnimation("a", appleImg)
    appleGroup.addAnimation("ars", greenSplash)
    apple.velocityY=Math.round(random(-6,6));
    apple.velocityX=Math.round(random(-6,6));
    apple.scale=0.45
    apple.lifetime=600;
    apple.add(apple)
}
function createOranges(){
    orange=createSprite(Math.round(random(windowWidth-50,50)),Math.round(random(windowHeight-50,50)))
    orange.addAnimation("or", orangeImg)
    orangeGroup.addAnimation("os", orangeSplash)
    orange.velocityX=Math.round(random(-6,6));
    orange.velocityY=Math.round(random(-6,6));
    orange.scale=0.2
    orange.lifetime=600;
    orange.add(orange)
}
function createRedApples(){
    rApple=createSprite(Math.round(random(windowWidth-50,50)),Math.round(random(windowHeight-50,50)))
    rApple.addAnimation("Apple", redAppleImg)
    rApple.addAnimation("As", redSplash)
    rApple.velocityX=Math.round(random(-6,6));
    rApple.velocityY=Math.round(random(-6,6));
    rApple.scale=0.45
    rApple.lifetime=600;
    redAppleGroup.add(rApple)
}
function createMangoes(){
    mangoes=createSprite(Math.round(random(windowWidth-50,50)),Math.round(random(windowHeight-50,50)))
    mangoes.addAnimation("mango", mangoImg)
    mangoes.addAnimation("ms", yellowSplash)
    mangoes.velocityX=Math.round(random(-6,6));
    mangoes.velocityY=Math.round(random(-6,6));
    mangoes.scale=0.45
    mangoes.lifetime=600;
    mangoGroup.add(mangoes)
}
function createWatermelons(){
    waterM=createSprite(Math.round(random(windowWidth-50,50)),Math.round(random(windowHeight-50,50)))
    waterM.addAnimation("wm", watermelonImg)
    waterM.addAnimation("wms", redSplash)
    waterM.velocityX=Math.round(random(-6,6));
    waterM.velocityY=Math.round(random(-6,6));
    waterM.scale=0.35
    waterM.lifetime=600;
    watermelonGroup.add(waterM)
}



