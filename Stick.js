class Stick extends Base
{
    constructor(x,y,h,a)
    {
       super(x,y,20,h) 
          Matter .Body.setAngle(this.body,a)
          this.image=loadImage("images/wood2.png")
          
    }

    
    
}