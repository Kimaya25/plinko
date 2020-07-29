class particle{
    constructor(x,y){
        var options = {
            restitution : 0.2, 
            density : 0.01, 
            friction : 0.01
        }
        this.body = Bodies.circle(x,y,5,options);
        this.radius = 5;
        this.color = color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        rotate(angle);
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        fill(this.color)
        ellipse(0,0,this.radius,this.radius);
        pop();

    }
}