let walker;

function setup() {
	walker = new Walker(200, 200);

	createCanvas(400, 400);
	background(50);

	walker.show();
}

function draw() {
	walker.update();
	walker.show();
}