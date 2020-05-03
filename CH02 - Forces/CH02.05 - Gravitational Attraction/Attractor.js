class Attractor{
    constructor(x, y, m=1){
        //Position of the Attractor
        this.position = createVector(x, y);
        //Velocity of the Attractor
        this.velocity = createVector();
        //Acceleration of the Attractor
        this.acceleration = createVector();

        //Mass of the Attractor
        this.mass = m;

        //Radius of the Attractor (depend of Mass)
        this.radius = sqrt(m) * 2;
    }

    attract(mover){
        let force = p5.Vector.sub(this.position, mover.position);
        let distanceSq = constrain(force.magSq(), 25, 1000);

        let G = 5;

        let strength = G * ((this.mass * mover.mass) / distanceSq);
        force.setMag(strength);

        mover.applyForce(force);    
    }

    update(){
        this.position.x = mouseX;
        this.position.y = mouseY;
    }

    show(){
        stroke(191, 128, 255);
        strokeWeight(2);

        fill(191, 128, 255, 100);
        ellipse(this.position.x, this.position.y, this.radius*2);
    }
}