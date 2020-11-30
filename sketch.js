const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;
var engine,world,ground,ball
var chain
var stick5
var box1,box2,box3,box4,box5
var stick1,stick2,stick3,stick4
var pig1,pig2
var bird
var platform
var backgroundImage
var gamestate="onSling"
function preload(){
decidebackground()
}
  

function setup() {
  createCanvas(1200,400);
  engine=Engine.create();
  world=engine.world;
  
  ground=new Ground(600,400,1200,20)
  platform=new Ground(150,305,300,170)
  box1=new Box(700,320,70,70)
  box2=new Box(920,320,70,70)
  box3=new Box(700,240,70,70)
  box4=new Box(920,240,70,70)
  box5=new Box(810,160,70,70)
stick1= new Stick(810,260,300,PI/2)
stick2=new Stick(810,180,300,PI/2)
stick3=new Stick(760,120,150,PI/7)
stick4=new Stick(870,120,150,-PI/7)
pig1=new Pig(810,350)
pig2=new Pig(810,220)
bird=new Bird(200,50,50,50)
chain=new slingshot(bird.body,{x:200,y:50})

}



function draw() {
  if(backgroundImage)
  background(backgroundImage);
  else
  {
   backgroundImage=loadImage("images/bg.png") 
   background(backgroundImage)
  } 
  Engine.update(engine);
  box1.display()
  ground.display()
  box2.display()
  stick1.display()
  stick2.display()
  stick3.display()
  stick4.display()
  box3.display()
  box4.display()
  box5.display()
  pig1.display()
  pig2.display()
  bird.display()
  chain.display()
  platform.display()
}
function mouseDragged ()

{
  if(gamestate=="onSling")
  Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}
function mouseReleased()
{
  chain.fly()
  gamestate="offSling"
}
async function decidebackground()
{
  var responce=await fetch("http://worldtimeapi.org/api/timezone/Australia/Victoria")
  var data=await responce.json()
  var time=data.datetime
  var hour=time.slice(11,13)
  if(hour>=6&&hour<=16)
  {
    backgroundImage=loadImage("images/bg2.jpg")
  }
  else
  {
    backgroundImage=loadImage("images/bg.png")
  }
}
