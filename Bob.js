class Bob{
    constructor(x,y,diameter){

        var options = {
            isStatic:false,
            restitution:0.8,
            friction:1,
            density:0.8
        }
        this.body = Bodies.circle(x,y,diameter/2,options)

        World.add(world,this.body);

        this.diameter = diameter;
     }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push()
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        ellipse(0,0,this.diameter,this.diameter);
        pop();
    }
}