
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

}

function setup() {
  createCanvas(1000, 600);
  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.
  ground = new Ground(500, 580, 990, 20)
  left_wall = new Ground(680, 500, 20, 180)
  right_wall = new Ground(850, 500, 20, 180)

  var options = {
    isStatic: false,
    restitution: 0.3,
    friction: 0,
    density: 1.2,
    
  }

  ball = Bodies.circle(100, 200, 25, options)
  ellipseMode(RADIUS)
  World.add(world, ball)
  Engine.run(engine);

}

function draw() {
  rectMode(CENTER);
  background(0);
  ground.show();
  left_wall.show();
  right_wall.show();



  ellipse(ball.position.x, ball.position.y, 30,);

  drawSprites();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(ball, { x: 0, y: 0 }, { x: 110, y: -110 })
  }
}

