const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;



function preload()
{
   
}

function setup() {
	createCanvas(1000, 500);
 
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	polygon = new Polygon(300,400);
	sling = new Sling(polygon.body,{x:150,y:350});

    
   ground = new Ground(400,500,1500,20);
   platform1 = new Ground(445,350,250,20);
   platform2 = new Ground(815,250,200,20);

   block1 = new Block(340,300);
   block2 = new Block(370,300);
   block3 = new Block(400,300);
   block4 = new Block(430,300);
   block5 = new Block(460,300);
   block6 = new Block(490,300);
   block7 = new Block(520,300);
   block8 = new Block(550,300);

   block9 = new Block(370,250);
   block10 = new Block(400,250);
   block11 = new Block(430,250);
   block12 = new Block(460,250);
   block13 = new Block(490,250);
   block14 = new Block(520,250);

   block15 = new Block(400,210);
   block16 = new Block(430,210);
   block17 = new Block(460,210);
   block18 = new Block(490,210);

   block19 = new Block(430,170);
   block20 = new Block(460,170);

   block21 = new Block(740,230);
   block22 = new Block(770,230);
   block23 = new Block(800,230);
   block24 = new Block(830,230);
   block25 = new Block(860,230);
   block26 = new Block(890,230);

   block27 = new Block(770,190);
   block28 = new Block(800,190);
   block29 = new Block(830,190);
   block30 = new Block(860,190);

   block31 = new Block(800,150);
   block32 = new Block(830,150);

   Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  
  background(48,33,21);
  
  platform1.display();
  platform2.display();
  ground.display();

  polygon.display();

  sling.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();

  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();

  block15.display();
  block16.display();
  block17.display();
  block18.display();

  block19.display();
  block20.display();

  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();

  block27.display();
  block28.display();
  block29.display();
  block30.display();

  block31.display();
  block32.display();

}

function mouseDragged(){
   Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});

}

function mouseReleased(){
   sling.fly();
}



function keyPressed(){

if(keyCode === 32){

Matter.Body.setPosition(polygon.body,{x:300,y:400})
sling.attach(polygon.body);
   
}

}









