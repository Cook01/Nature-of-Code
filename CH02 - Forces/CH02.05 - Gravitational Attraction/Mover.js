class Mover{
    constructor(x, y, m=1){
        //Position of the mover
        this.position = createVector(x, y);
        //Velocity of the mover
        this.velocity = p5.Vector.random2D();
        this.velocity.mult(5);
        //Acceleration of the mover
        this.acceleration = createVector();

        //Mass of the mover
        this.mass = m;

        //Radius of the mover (depend of Mass)
        this.radius = sqrt(m) * 2;
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

    update(){
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.set(0, 0);
    }

    show(){
        stroke(255);
        strokeWeight(2);

        fill(255, 100);
        ellipse(this.position.x, this.position.y, this.radius*2);
    }
}