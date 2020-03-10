let mover;

function setup() {
	createCanvas(400, 400);
	
	mover = new Mover(200, 200);
	mover.show();
}

function draw() {
	background(50);

	mover.update();
	mover.show();
}