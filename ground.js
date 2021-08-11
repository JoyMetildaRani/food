class Ground 
{
  constructor(x, y, w,h) 
  {
    let options = {
     isStatic:true
    };
    this.image = loadImage("ground.png");
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }

  show() {
    let pos = this.body.position;
    push();
    imageMode(CENTER);
    noStroke();
    fill(148,127,146);
    image(this.image,0,0,this.w,this.h);
    pop();
  }
}
