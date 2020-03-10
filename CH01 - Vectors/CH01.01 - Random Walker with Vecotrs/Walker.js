class Walker{
    constructor(x, y){
        this.position = createVector(x, y);
    }

    update(){
        this.position.x += random(-1, 1);
        this.position.y += random(-1, 1);

        this.position.x %= width;
        this.position.y %= height;
    }

    show(){
        stroke(255, 100);
        strokeWeight(2);
        point(this.position.x, this.position.y);
    }
}