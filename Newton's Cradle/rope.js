class Rope {
    constructor(bodyA, bodyB) {
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            stiffness : 0.05,
            length : 350
        }
        this.rope = Matter.Constraint.create (options)
        World.add(world,this.rope);
    }

    display() {
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        strokeWeight(3);
        stroke("purple")
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
};