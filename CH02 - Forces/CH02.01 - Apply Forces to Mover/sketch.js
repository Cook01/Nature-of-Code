let mover;

let gravity;
let wind;

function setup() {
	createCanvas(400, 400);
	
	mover = new Mover(200, 200);
	mover.show();

	gravity = createVector(0, 0.2);
	wind = createVector(0.1, 0);
}

function draw() {
	background(50);

	if(mouseIsPressed)
		mover.applyForce(wind);

	mover.applyForce(gravity);
	mover.update();
	mover.show();
}