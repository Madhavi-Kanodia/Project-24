
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var box1,box2,box3;
var gr;

function preload()
{
	
}

function setup() {
	createCanvas(1400,700);
	engine = Engine.create();
	world = engine.world;

  
	//Create the Bodies Here.
 
  
 dustbinObj=new Dustbin(1300,550,40,220);
 dustbin2Obj=new Dustbin(1000,550,40,220);
 dustbin3Obj=new Dustbin(1150,640,300,40);
	paperObject=new Paper(200,450,20);
	groundObject=new Ground(1700,670,4000,20);
  //box1 = new Dustbin(650,540,200,260);
  //box2 = new box(550,540,25,260);
  //box3 = new box(600,540,25,260);
  //box4 = new box(650,540,20,260);
  //box5 = new box(700,540,20,260);
  //box6 = new box(750,540,20,260);

  //box7 = new box(650,400,260,50);
  //box8 = new box(650,650,230,35);
 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(0);

  Engine.update(engine);

  paperObject.display();
  groundObject.display();
  dustbin3Obj.display();
  dustbinObj.display();
  dustbin2Obj.display();
 
  //box1.display();
  //box2.display();
  //box3.display();
  //box4.display();
  //box5.display();
  //box6.display();
 // box7.display();
  //box8.display();

 

  
  drawSprites();
 
}
function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
    
  	}
}
