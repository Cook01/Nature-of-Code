
let incrementSlider;
let start = 0;

function setup() {
	createCanvas(400, 400);

	incrementSlider = createSlider(0, 0.1, 0.01, 0.001);
}

function draw() {
	
	let increment = incrementSlider.value();
	let yOffset = start;

	background(50);

	stroke(255);
	noFill();

	beginShape();
	for (let x = 0; x < width; x++) {

		let y = map(noise(yOffset), 0, 1, 0, height);
		yOffset += increment;

		vertex(x, y);
	}
	endShape();

	start += increment;

	//noLoop();
}