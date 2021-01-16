class Block{
    constructor(x, y) {
        var options = {
            
            isStatic : false,
            friction: 0 ,
             density: 1.0

        }
        this.body = Bodies.rectangle(x, y, 30,40, options);
        this.width = 20;
        this.height = 30;
        
        World.add(world, this.body);
        
      }
      display(){
        var pos = this.body.position
        var angle = this.body.angle
        fill("lightBlue");
        rect(pos.x, pos.y, 30,40);
        
      }
}