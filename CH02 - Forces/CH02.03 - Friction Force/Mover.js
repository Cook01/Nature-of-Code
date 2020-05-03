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

    friction(mu){
        //If touch the floor
        if((height - (this.position.y + this.radius)) < 1){

            /** ==== F-> = -1 * µ * N * v-> ====
            *   F->   = Friction force
            *   µ     = Coef of Friction
            *   N     = Normal from surface
            *   v->   = Velocity Unit from mover
            * ================================== **/

            //=== Get Friction Direction ===
            // Get Velocity from mover
            let friction = this.velocity.copy();
            //Normalize Velocity to get Velocity Unit
            friction.normalize();
            //Multiply by -1
            friction.mult(-1);

            //=== Get Friction Magnitude ===
            //Get N
            let normal = this.mass;
            //Apply µ * N to F->
            friction.setMag(mu * normal);


            this.applyForce(friction);
        }
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