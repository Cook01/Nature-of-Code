function setup() {
	createCanvas(400, 400);
	background(50);
}

function draw() {
	let position = createVector(width/2, height/2);
	let mouse = createVector(mouseX, mouseY);

	let vector = p5.Vector.sub(mouse, position);
	vector.setMag(50);

	translate(width/2, height/2);
	strokeWeight(4);
	stroke(255, 50);
	line(0, 0, vector.x, vector.y);
}