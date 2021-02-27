class Building{

    constructor(x,y){
        var options={
            restitution:0.4,
            friction:0.9,
            density:1.3,
        }
    this.body=Bodies.rectangle(x,y,70,70,options);
    this.width=70;
    this.hight=70;
    World.add(myWorld,this.body);   
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        fill("beige");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}