var bgimg, ball,ballimg,player,playerimg
var wallleft,ground,edge,player2img,player2,bg,bgimg

function preload() {
ballimg= loadAnimation("ball/b1.PNG","ball/b1.PNG","ball/b1.PNG","ball/b1.PNG")
ballmoveimg= loadAnimation("ball/b1.PNG","ball/b2.PNG","ball/b3.PNG","ball/b4.PNG","ball/b5.PNG","ball/b6.PNG","ball/b7.PNG","ball/b8.PNG","ball/b9.PNG","ball/b10.PNG","ball/b11.PNG","ball/b12.PNG")

playerstill=loadAnimation("run/r1.png","run/r1.png")
playerimg= loadAnimation("run/r1.png","run/r2.png","run/r3.png","run/r4.png","run/r5.png","run/r6.png","run/r7.png","run/r8.png","run/r9.png","run/r10.png")
playerleftimg= loadAnimation("run/left/r1.png","run/left/r2.png","run/left/r3.png","run/left/r4.png","run/left/r5.png","run/left/r6.png","run/left/r7.png","run/left/r8.png","run/left/r9.png","run/left/r10.png")
playerstillright=loadAnimation("run/left/r1.png","run/left/r1.png")

player2img=loadAnimation("player2/r1.png","player2/r2.png","player2/r3.png","player2/r4.png","player2/r5.png","player2/r6.png","player2/r7.png","player2/r8.png","player2/r9.png","player2/r10.png")

bgimg=loadImage("bg.png")
}

function setup(){
createCanvas(windowWidth,windowHeight)
ball=createSprite(width/4,height-100)
ball.addAnimation("stop",ballimg)
edge=createEdgeSprites()
ball.addAnimation("play",ballmoveimg)

ball.scale=0.5

player=createSprite(width-80,height-150)
player.addAnimation("left",playerleftimg)

player.addAnimation("still",playerstill)
player.addAnimation("right",playerimg)


player2=createSprite(80,height-150)
player2.addAnimation("stillright",player2img)
//player2.addAnimation("rightmove",playerimg)
player2.scale=1.2

ground=createSprite(width/2,height-10,width,10)
wallleft=createSprite(width/2,height-10,width,10)
//ball.bounce(wallleft)
console.log(edge)

}


function draw(){
background("green")

textSize(50)
fill("red")
stroke(0)
strokeWeight(4)
text("Soccer Game",width/2.5,80)

//player1
if(keyDown("d")){
   player.x +=5
   player.changeAnimation("right",playerimg)

}

if(keyDown("a")){
   player.x -= 5
   player.changeAnimation("left",playerleftimg)
}

if(player.isTouching(ball)){
   ball.changeAnimation("play",ballmoveimg)
ball.velocityX =5
ball.velocityY =-2
}

//player 2


if(keyDown("Right_Arrow")){
   player2.x +=5
   //player2.changeAnimation("right",playerimg)

}

if(keyDown("Left_Arrow")){
   player2.x -= 5
   //player.changeAnimation("left",playerleftimg)
}


if(player2.isTouching(ball)){
   //ball.changeAnimation("play",ballmoveimg)
ball.velocityX =5
ball.velocityY =-2
}



if(player.x>width){
   player.x = 80
}

if (ball.isTouching(edge)){
   ball.bounceOff(edge)
   
}
ball.velocityY= ball.velocityY +0.8

if(player.x<0){
   player.x = width-80
}
drawSprites()
if(ball.velocityX >0){
   ball.changeAnimation("play",ballmoveimg)

}
}