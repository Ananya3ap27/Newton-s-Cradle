
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball1,rope1,platform1,body1,body2;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

  //platform3= new Platform(300,200,100,50);
  //platform2= new Platform(400,200,100,50);
  platform1= new Platform(500,200,600,50);
  //platform4= new Platform(600,200,100,50);
  //platform5= new Platform(700,200,100,50);

  ball1=new Ball(300,550,100);
  ball2=new Ball(400,550,100);
  ball3=new Ball(500,550,100);
  ball4=new Ball(600,550,100);
  ball5=new Ball(700,550,100);

  rope1=new Constrant(ball1,platform1,-200,200);
  rope2=new Constrant(ball2,platform1,-100,200);
  rope3=new Constrant(ball3,platform1,0,200);
  rope4=new Constrant(ball4,platform1,100,200);
  rope5=new Constrant(ball5,platform1,200,200);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");

  platform1.display();
  //platform2.display();
  //platform3.display();
  //platform4.display();
  //platform5.display();

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  strokeWeight(3);
  line (ball1.body.position.x,ball1.body.position.y,300,200);
  line (ball2.body.position.x,ball2.body.position.y,400,200);
  line (ball3.body.position.x,ball3.body.position.y,500,200);
  line (ball4.body.position.x,ball4.body.position.y,600,200);
  line (ball5.body.position.x,ball5.body.position.y,700,200);

  if(keyDown("space")){
    Matter.Body.applyForce(ball1.body, ball1.body.position, {x:-200.5,y:108.53});
  }
  console.log(ball1.x);




  drawSprites();
 
}



