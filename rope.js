class Rope{

    constructor(bodyA,PointB){
        var options={

            bodyA:bodyA,
            pointB:PointB,
            stiffness:0.2,
            length:300
        }
        this.rope=Matter.Constraint.create(options);
        this.pointB=PointB;
        World.add(myWorld,this.rope);



    }

    display(){
var posA= this.rope.bodyA.position;
var posB=this.pointB;
strokeWeight(3);
line(posA.x,posA.y,posB.x,posB.y);

    }

}


