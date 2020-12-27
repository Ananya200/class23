const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world,box1,box2,ground;

function setup() {
  createCanvas(600,600);
  engine = Engine.create();
  world = engine.world

  box1 = new Box(310,350,50,60);
  box2 = new Box(300,150,50,100);
  ground= new Ground(300,590,400,20);
}

function draw() {
  background("purple"); 
  Engine.update(engine)
  box1.display();
  box2.display();
  ground.display();
}