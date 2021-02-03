class Ball{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.5,
            'friction':0.2,
            'density':0.2
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("paper.png")
        
        World.add(world, this.body);
      }
      display(){
        push()
        var pos =this.body.position;
        imageMode();
        fill("red");
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        image(this.image,0,0,this.width,this.height);
        pop();
      }
    };
    




