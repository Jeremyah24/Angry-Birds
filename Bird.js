class Bird extends Base
{
    constructor(x,y,w,h)
    {
        super(x,y,w,h)
        this.image=loadImage("images/bird.png")
        this.smoke= loadImage("images/smoke.png")
        this.arr= []
    }

    display()
    {
  var i  
    super.display()
if(this.body.speed>3&&this.body.position.x>200)
{
    this.arr.push([this.body.position.x,this.body.position.y])
}
for(i=0;i<this.arr.length;i++)
image (this.smoke,this.arr[i][0],this.arr[i][1])
    }
}