const nbMovers = 10
const dragCoef = 0.2;

let movers = [];

let gravity;
let wind;

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	
	for(i = 0; i < nbMovers; i++){
		movers[i] = new Mover(random(width), 100, random(1, 8));
	}

	gravity = createVector(0, 0.2);
	wind = createVector(0.1, 0);
}

function draw() {
	background(50);

	fill(255, 125);
	noStroke();
	rect(0, height / 2, width, height /2);

	for(mover of movers){
		if(mouseIsPressed){
			mover.applyForce(wind);
		}
	
		let weight = p5.Vector.mult(gravity, mover.mass);
		mover.applyForce(weight);
	
		if(mover.position.y > height /2)
			mover.drag(dragCoef);
	
		mover.update();
		mover.show();
	}
}