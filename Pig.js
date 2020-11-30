class Pig extends Base
{
    constructor(x,y)
    {
     super(x,y,50,50)
     this.image=loadImage("images/enemy.png") 
    this.t= 255  
    }
display ()
{
 if( this.body.speed<3) 
{
  super.display()  
} 
else
{
    World. remove(world,this.body)
    push()
  tint (255,this.t)
  image(this.image,this.body.position.x,this.body.position.y,50,50)
  this.t=this.t-5
  pop ()
} 
}
     
    
}