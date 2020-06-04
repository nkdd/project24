const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbin1,ball1,ground1;	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	dustbin1=new dustbin(1200,650);
	ball1=new ball(200,450,40);
	ground1=new ground(width/2,670,width,20);
		
	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
		 
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  dustbin1.display();
  ball1.display();
  ground1.display();
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {
    	Matter.Body.applyForce(ball1.body,ball1.body.position,{x:85,y:-85}); 
  	}
}