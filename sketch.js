var canvas;
var music;
var box1,box2,box3,box4;
var ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
box1=createSprite(0,570,360,50);
box1.shapeColor="pink";
box2=createSprite(295,570,200,50);
box2.shapeColor="red";
box3=createSprite(515,570,200,50);
box3.shapeColor="yellow";
box4=createSprite(740,570,220,50);
box4.shapeColor="blue";
var n=Math.random(30,700);
ball = createSprite(n,10,35,35);
ball.shapeColor= "black"
ball.velocityX=5;
ball.velocityY=5;

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

egdes=createEdgeSprites();
ball.bounceOff(egdes);
if(box1.isTouching(ball)){
    ball.bounceOff(box1);
    ball.shapeColor="pink";
    music.play();
}


if(box2.isTouching(ball)){
    ball.bounceOff(box2);
    ball.shapeColor="red";
    music.stop();
}
if(box3.isTouching(ball)){
    ball.bounceOff(box3);
    ball.shapeColor="yellow";

}
if(box4.isTouching(ball)){
    ball.bounceOff(box4);
    ball.shapeColor="blue";
    
}
 drawSprites();   //add condition to check if box touching surface and make it box
}
