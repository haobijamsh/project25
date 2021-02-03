
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var dustbin1,dustbin2,dustbin3;
var ball;
var dustbin;


function preload()
{
	dustbin = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1500, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = new Ground(750,height,1500,20);
  
  

	dustbin1 = new Dustbin(1000,300,300,30);
	dustbin2 = new Dustbin(990,300,30,300);
	dustbin3 = new Dustbin(1010,300,30,300);

    ball = new Ball(300,300,150,150)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");
  image(dustbin,850,350,300,300);
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ball.display();

  
keyPressed();
  
  drawSprites();
 
}
function keyPressed(){
  if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(ballObject.body,ballObject.body.position,{x:85,y:-85})
  }
}


