const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,350,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(300,0,30,40);
  console.log(block1);
  block2 = new Block(330,0,30,40);
  block3 = new Block(360,0,30,40);
  block4 = new Block(390,0,30,40);
  block5 = new Block(420,0,30,40);
  block6 = new Block(450,0,30,40);
  block7 = new Block(480,0,30,40);
  //level two
  block8 = new Block(330,40,30,40);
  block9 = new Block(360,40,30,40);
  block10 = new Block(390,40,30,40);
  block11 = new Block(420,40,30,40);
  block12 = new Block(450,40,30,40);
  //level three
  block13 = new Block(360,80,30,40);
  block14 = new Block(390,80,30,40);
  block15 = new Block(420,80,30,40);
  //top
  block16 = new Block(390,120,30,40);

  //set 2 for second stand
  //level one
  blocks1 = new Block(640,0,30,40);
  blocks2 = new Block(670,0,30,40);
  blocks3 = new Block(700,0,30,40);
  blocks4 = new Block(730,0,30,40);
  blocks5 = new Block(760,0,30,40);
  //level two
  blocks6 = new Block(670,40,30,40);
  blocks7 = new Block(700,40,30,40);
  blocks8 = new Block(730,40,30,40);
  //top
  blocks9 = new Block(700,80,30,40);

  //ball holder with slings
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new Slingshot(this.ball,{x:100,y:200});

}
function draw() {
  background(56,44,44); 
 
  fill("red")
  strokeWeight(4);
  stroke("yellow");
  ground.display();
  fill("yellow")
  strokeWeight(4);
  stroke("red");
  stand1.display();
  stand2.display();
  strokeWeight(4);
  stroke("grey");
  fill("blue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("red");
  strokeWeight(4);
  stroke("lightgreen");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("lightgreen");
  strokeWeight(4);
  stroke("grey");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  strokeWeight(4);
  stroke("black");
  block16.display();
  fill("blue");
  strokeWeight(4);
  stroke("red");
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  fill("red");
  strokeWeight(4);
  stroke("lightgreen");
  blocks6.display();
  blocks7.display();
  blocks8.display();
  fill("lightgreen")
  strokeWeight(4);
  stroke("blue");
  blocks9.display();
  fill("orange");
  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);
  fill("blue")
  strokeWeight(4);
  stroke("red");
  slingShot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}