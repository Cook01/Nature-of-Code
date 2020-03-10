function setup() {
	createCanvas(400, 400);
	background(50);
}

function draw() {
	translate(width/2, height/2);

	let vector = p5.Vector.random2D().mult(random(50, 100));

	strokeWeight(4);
	stroke(255, 50);
	line(0, 0, vector.x, vector.y);
}