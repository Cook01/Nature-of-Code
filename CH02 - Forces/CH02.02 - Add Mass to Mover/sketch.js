let moverA;
let moverB;

let gravity;
let wind;

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	
	moverA = new Mover(windowWidth/3, 200, 2);
	moverB = new Mover(2 * windowWidth/3, 200, 5);

	moverA.show();
	moverB.show();

	gravity = createVector(0, 0.2);
	wind = createVector(0.1, 0);
}

function draw() {
	background(50);

	if(mouseIsPressed){
		moverA.applyForce(wind);
		moverB.applyForce(wind);
	}

	let weightA = p5.Vector.mult(gravity, moverA.mass);
	let weightB = p5.Vector.mult(gravity, moverB.mass);
	moverA.applyForce(weightA);
	moverB.applyForce(weightB);

	moverA.update();
	moverB.update();
	moverA.show();
	moverB.show();
}