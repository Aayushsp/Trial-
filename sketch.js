
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof();

	//Create the Bodies Here.
	fill("red");
	bob1 = new Bob(240,500,80);
	rope1 = new Rope(bob1.body,roof.body,-160,0);

	bob2 = new Bob(320,500,80);
	rope2 = new Rope(bob2.body,roof.body,-80,0);

	bob3 = new Bob(400,500,80);
	rope3 = new Rope(bob3.body,roof.body,0,0);

	bob4 = new Bob(480,500,80);
	rope4 = new Rope(bob4.body,roof.body,80,0);

	bob5 = new Bob(560,500,80);
	rope5 = new Rope(bob5.body,roof.body,160,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);

  // These are all the bobs Sir Newton is supposed to play with. 
  bob1.display();
  rope1.display();

  bob2.display();
  rope2.display();

  bob3.display();
  rope3.display();

  bob4.display();
  rope4.display();

  bob5.display();
  rope5.display();

  // This is the roof that holds the balls.
  roof.display();
  
  drawSprites();
  fill("Black");
  stroke("white");
  textSize(18);
  text("I'm Newton and I wanna play with you. To do so you just have to press the DOWN _ARROW",20,600)
}

function keyPressed(){
	if(keyCode === DOWN_ARROW){
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:150,y:-150});
		
	}
}




