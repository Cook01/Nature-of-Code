const nbMover = 10;

let movers = [];
let attractor;

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	
	for(let i = 0; i < nbMover; i++)
		movers[i] = new Mover(random(width), random(height), 50);

	attractor = new Attractor(width/2, height/2, 50);

	background(50);
}

function draw() {
	background(50, 5);

	//attractor.update();
	attractor.show();

	for(mover of movers){
		attractor.attract(mover);

		mover.update();
		mover.show();
	}
}