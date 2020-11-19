class Rope{
    constructor(bodyA, bodyB, offsetX, offsetY){

        this.offsetX = offsetX
        this.offsetY = offsetY
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x:this.offsetX, y:this.offsetY}
            /*stiffness: 0.04,
            length: 10*/
        }
        this.bodyB = bodyB
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }



    display() {
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        
       
        
        

    
    }

}    