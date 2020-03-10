class Mover{
    constructor(x, y){
        this.position = createVector(x, y);
        this.velocity = p5.Vector.random2D();
        this.acceleration = p5.Vector.random2D();
    }

    update(){
        let mouse = createVector(mouseX, mouseY);
        this.acceleration = p5.Vector.sub(mouse, this.position);
        this.acceleration.setMag(1);
        
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);

        this.velocity.limit(10);

        // if(this.position.x > width)
        //     this.position.x = 0;
        // else if(this.position.x < 0)
        //     this.position.x = width;

        // if(this.position.y > height)
        //     this.position.y = 0;
        // else if(this.position.y < 0)
        //     this.position.y = height;
    }

    show(){
        stroke(255);
        strokeWeight(2);

        fill(255, 100);
        ellipse(this.position.x, this.position.y, 32);
    }
}