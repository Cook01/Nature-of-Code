class Walker{
    constructor(x, y){
        this.position = createVector(x, y);
        this.velocity = createVector(1, 0);
    }

    update(){
        this.position.add(this.velocity);

        this.position.x %= width;
        this.position.y %= height;
    }

    show(){
        stroke(255);
        strokeWeight(2);

        fill(255, 100);
        ellipse(this.position.x, this.position.y, 32);
    }
}