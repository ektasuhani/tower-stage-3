
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var score=0;
function preload()
{
	
}


function setup() {
  createCanvas(1200,800);
  stroke(255)
  
  engine = Engine.create();
	world = engine.world;

 
  ground = new Ground(500,780,width+200,20);
  ground2 = new Ground(900,250,300,20);
  ground3 = new Ground(500,500,300,20)
  box = new Box(800,100);
  box1 = new Box(850,100);
  box2 = new Box(900,100);
  box3 = new Box(950,100);
  box4 = new Box(1000,100);
  box5 = new Box(800,50);
  box6 = new Box(850,50);
  box7 = new Box(900,50);
  box8 = new Box(950,50);
  box9 = new Box(800,30);
  box10 = new Box(850,30);
  box11 = new Box(900,30);
  box12 = new Box(800,10);
  box13 = new Box(850,10);
  box14 = new Box(800,5);
  box15 = new Box (400,200);
  box16 = new Box(450,200);
  box17 = new Box(500,200);
  box18 = new Box(550,200);
  box19 = new Box(400,150)
  box20 = new Box(450,150)
  box21 = new Box(500,150)
  box22 = new Box(400,100)
  box23 = new Box(450,100)
  box24 = new Box(400,50)
  hexagon = new Hexagon(200,200)
  slingshot=new SlingShot(hexagon.body,{x:100,y:360})

}

function draw() {
 
  background("red");  
  
  Engine.update(engine)
 
ground.display();
ground2.display();
ground3.display();
box.display();
box.score()
box1.display();
box1.score()
box2.display();
box2.score()
box3.display();
box3.score()
box4.display();
box4.score()
box5.display()
box5.score()
box6.display()
box6.score()
box7.display()
box7.score()
box8.display()
box8.score()
box9.display()
box9.score()
box10.display()
box10.score()
box11.display()
box11.score()
box12.display()
box12.score()
box13.display()
box13.score()
box14.display()
box14.score()
box15.display()
box15.score()
box16.display()
box16.score()
box17.display()
box17.score()
box18.display()
box18.score()
box19.display()
box19.score()
box20.display()
box20.score()
box21.display()
box21.score()
box22.display()
box22.score()
box23.display()
box23.score()
box24.display()
box24.score()
hexagon.display();
slingshot.display();
textSize(20)
fill ("black")
text ("SCORE:"+ score ,650,40);

 
 drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(hexagon.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
slingshot.fly()
}

function keyPressed ()
{
  if(keyCode === 32)
  slingshot.attach(hexagon.body);
  {
  }

} 
