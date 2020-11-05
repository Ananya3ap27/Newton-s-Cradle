class Constrant{
    constructor(a,b,offsetx,offsety){
        this.bx=offsetx;
        this.by=offsety;
        var option= {
            bodyA:a.body,
            bodyB:b.body,
            pointB:{x:this.bx,y:this.by},
            stiffness:1.9,
            length:300
        }
        this.rope=Constraint.create(option);
        World.add(world,this.rope);
    }
    display(){
        
    }
}