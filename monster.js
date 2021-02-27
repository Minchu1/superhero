class Monster{

    constructor(x,y,radius){
       var options={
           restitution:1,
           friction:1,
           density:0.9
       } 
       this.body=Bodies.rectangle(x,y,radius,radius,options);
       this.radius=radius
       World.add(myWorld,this.body);
       this.image=loadImage("images/Monster-01.png");

    }
    display(){
        var pos = this.body.position
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);
        pop();

    }
}