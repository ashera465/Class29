const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground,rope, fruit,con;

function setup() 
{
  engine = Engine.create();
  world = engine.world;
  
  createCanvas(500,700);
  frameRate(80);
  var options = {
    density:0.001,

  }
  fruit = Bodies.circle(200, 200, 20,options);
  World.add(world, fruit);
  
  ground = new Ground(200,680,600,20);
  rope = new Rope(6,{x:245, y:30});
  con = new Link(rope,fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(51);
  ground.show();
  rope.show();

  ellipse(fruit.position.x, fruit.position.y, 15, 15);
  Engine.update(engine);
  

 
   
}
