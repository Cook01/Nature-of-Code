class Mover{
    constructor(x, y, m=1){
        //Position of the mover
        this.position = createVector(x, y);
        //Velocity of the mover
        this.velocity = createVector();
        //Acceleration of the mover
        this.acceleration = createVector();

        //Mass of the mover
        this.mass = m;

        //Radius of the mover (depend of Mass)
        this.radius = sqrt(m) * 10;
    }

    applyForce(force){
        this.acceleration.add(p5.Vector.div(force, this.mass));
    }

    drag(dragCoef){

        //=== Get Drag Direction ===
        // Get Velocity from mover
        let drag = this.velocity.copy();
        //Normalize Velocity to get Velocity Unit
        drag.normalize();
        //Multiply by -1
        drag.mult(-1);

        let speedSq = this.velocity.magSq();
        drag.setMag(dragCoef * speedSq);

        this.applyForce(drag);
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