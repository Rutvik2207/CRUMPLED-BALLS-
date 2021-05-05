
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
var ground
var dustbin1,dustbin2,dustbin3;




function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(400,690,800,20);
	dustbin1=new Dustbin(600,670,200,30);
	dustbin2=new Dustbin(500,570,30,200);
	dustbin3=new Dustbin(700,570,30,200);
	ball=new Ball(120,30,30);
     

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


  ground.display();
 dustbin1.display();
 dustbin2.display();
 dustbin3.display();
 ball.display();
}
 function keyPressed(){
	 if(keyCode===UP_ARROW){

		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-120})
	 }
 }



