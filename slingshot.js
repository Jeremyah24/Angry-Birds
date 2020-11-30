class slingshot
{
    constructor(A,B)
    {
        var connectionOptions={
            bodyA:A,
            pointB:B,
            stiffness:0.05,
            length:30,
            
          }
          this.chain=Constraint.create(connectionOptions)
          this.sling1= loadImage("images/sling1.png")
          this.sling2= loadImage("images/sling2.png")
          this.block= loadImage("images/sling3.png")
          World.add(world,this.chain);
          
          
    }

    display()
    {
        image (this.sling1,200,20)
        image (this.sling2,170,20)
        if(this.chain.bodyA)
        {
            var a=this.chain.bodyA.position
            var b=this.chain.pointB
            if(a.x<=200)
            {
                stroke(48,22,8)
                strokeWeight(5)
            line (a.x-20,a.y,b.x-10,b.y)
            line (a.x-20,a.y,b.x+30,b.y)
            image (this.block,a.x-30,a.y-10,15,30)

            }
            else
            {
                line (a.x-20,a.y,b.x-10,b.y)
                line (a.x-20,a.y,b.x+30,b.y)
                image (this.block,a.x+25,a.y-10,15,30)    
            }
        }
    }
    fly()
    {
     this.chain.bodyA=null
    }
}