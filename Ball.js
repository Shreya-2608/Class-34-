class Ball {
    constructor(x,y) {
      var options = {
          frictionAir:0.05,
          density:1
      }
      this.body = Bodies.circle(x,y,40,options);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill("red");
      ellipse(0,0,this.radius, this.radius);
      pop();
    }
  };
