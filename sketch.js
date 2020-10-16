
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var options,ground,dustbin1,dustbin2,distbin3,ball,stand, dust,dustImg;

function preload()
{
	dustImg=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	stand=createSprite(20,586,30,13);


ground=new Ground(400,600,800,15);	//Create the Bodies Here.

dust=createSprite(700,510,10,10);
dust.addImage(dustImg);
dust.scale=0.5;

dustbin1=new Dustbin(700,590,100,10);
dustbin2=new Dustbin(650,540,10,100);
dustbin3=new Dustbin(750,540,10,100);

ball=new paper(20,100,70);


	Engine.run(engine);
  
}


function draw() {
	
  rectMode(CENTER);
  background("white");
  if(keyCode===UP_ARROW)
{
  


Body.applyForce(ball.body,ball.body.position,{x:400,y:-550});

keyCode=0;



}


  
 

  








  

  ground.display();

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  ball.display();
  drawSprites();
 
}



