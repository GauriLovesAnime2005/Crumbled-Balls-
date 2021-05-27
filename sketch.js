const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObject=new Paper(200,190,70);
	groundObject=new Ground(width/ 2,670,width,20);
	dustbinObj=new Dustbin(1200,650);
	launcher = new Launcher(paperObject.body,{x:200, y:100});
	


	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  
  paperObject.display();
  groundObject.display();
  dustbinObj.display();
  launcher.display();

  
}

function mouseDragged() {
	Matter.Body.setPosition(paperObject.body,{x: mouseX, y:mouseY});
}

function mouseReleased() {
	launcher.fly();
}

