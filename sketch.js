var bgImg, bg
var alien
var ast
var invGround
var bar
var barGroup

function preload(){
bgImg = loadImage("assets/bg.png")


}

function setup(){

  createCanvas(windowWidth - 20, windowHeight - 20)
//background image
bg = createSprite(165,485,1,1);
 bg.addImage(bgImg);
bg.scale = 1.5
bg.x = bg.width/2
bg.velocityX = -10

ast = createSprite(windowWidth - 1350, 700 , 50, 50)
ast.shapeColor = "black"

//creating an invisible ground
invGround = createSprite(200,700,400,20)
invGround.visible = false

barGroup = createGroup()


}

function draw() {
  
  background("blue");
    
 if (bg.x < 0) {
   bg.x = bg.width/2
 }

 //jump the astronaut
 if (keyDown("Space")) {
  ast.velocityY = -13
 }
 
//making the astronaut collide with the bar
barGroup.collide(ast)

 // adding gravity
ast.velocityY=ast.velocityY+ 0.7

  // making the astronaut collide with ground
ast.collide(invGround)

spawnBars()

   drawSprites()   
}

function spawnBars() {
  if (frameCount%40===0) {
    
bar = createSprite(windowWidth + 10, Math.round(random(500, 200)), 100, 10)
bar.velocityX = -10
barGroup.add(bar)
  }
}




  
