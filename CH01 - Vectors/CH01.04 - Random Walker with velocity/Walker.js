class Walker{
    constructor(x, y){
        this.position = createVector(x, y);
        this.velocity = p5.Vector.random2D().mult(random(3));
    }

    update(){
        this.position.add(this.velocity);

        if(this.position.x > width)
            this.position.x = 0;
        else if(this.position.x < 0)
            this.position.x = width;

        if(this.position.y > height)
            this.position.y = 0;
        else if(this.position.y < 0)
            this.position.y = height;
    }

    show(){
        stroke(255);
        strokeWeight(2);

        fill(255, 100);
        ellipse(this.position.x, this.position.y, 32);
    }
}