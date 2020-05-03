const nbMovers = 10
const mu = 0.05;

let movers = [];

let gravity;
let wind;

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	
	for(i = 0; i < nbMovers; i++){
		movers[i] = new Mover(random(windowWidth), 200, random(1, 8));
	}

	gravity = createVector(0, 0.2);
	wind = createVector(0.1, 0);
}

function draw() {
	background(50);

	for(mover of movers){
		if(mouseIsPressed){
			mover.applyForce(wind);
		}
	
		let weight = p5.Vector.mult(gravity, mover.mass);
		mover.applyForce(weight);
	
		mover.friction(mu);
	
		mover.update();
		mover.show();
	}
}