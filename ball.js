class Ball{

    constructor(x,y,w,h){
        var options={
            density:1.3,
            restitution:0.6

        }

       this.body=Bodies.rectangle(x,y,w,h,options)
        this.width=w;
       this.height=h;
        World.add(myWorld,this.body);
        this.image=loadImage("images/Superhero-01.png");
    }

    display(){

      
        var pos = this.body.position
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
        
        
    }
    }

