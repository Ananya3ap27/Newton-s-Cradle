class Ball {
  constructor(x, y,radius) {
    var options = {
      'density':2.0,
      'friction': 1.0,
      'restitution':1.2
    }
    this.body = Bodies.circle(x, y, radius/2, options);
    this.radius = radius;
    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
    fill ("lightblue");
    ellipse(pos.x,pos.y,this.radius,this.radius);
  }
}; 