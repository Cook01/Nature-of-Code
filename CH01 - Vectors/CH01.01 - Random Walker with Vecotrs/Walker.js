class Walker{
    constructor(x, y){
        this.position = createVector(x, y);
    }

    update(){
        this.position.x += random(-1, 1);
        this.position.y += random(-1, 1);

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
        stroke(255, 100);
        strokeWeight(2);
        point(this.position.x, this.position.y);
    }
}