class Mover{
    constructor(x, y){
        this.position = createVector(x, y);
        this.velocity = createVector();
        this.acceleration = createVector();

        this.radius = 16;
    }

    applyForce(force){
        this.acceleration.add(force);
    }

    checkEdges(){
        if(this.position.y >= height - this.radius){
            this.position.y = height - this.radius;
            this.velocity.y *= -1;
        }

        if(this.position.x >= width - this.radius){
            this.position.x = width - this.radius;
            this.velocity.x *= -1;
        }else if(this.position.x <= 0 + this.radius){
            this.position.x = 0 + this.radius;
            this.velocity.x *= -1;
        }
    }

    update(){
        this.velocity.add(this.acceleration);

        this.position.add(this.velocity);
        this.checkEdges();

        this.acceleration.set(0, 0);
    }

    show(){
        stroke(255);
        strokeWeight(2);

        fill(255, 100);
        ellipse(this.position.x, this.position.y, this.radius*2);
    }
}