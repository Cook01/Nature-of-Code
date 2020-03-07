let incrementSlider;

function setup() {
	createCanvas(400, 400);

	incrementSlider = createSlider(0, 0.1, 0.01, 0.001);
}

function draw() {
	let increment = incrementSlider.value();
	let xOffset = 0;

	loadPixels();
	for (let x = 0; x < width; x++) {
		let yOffset = 0;

		for (let y = 0; y < height; y++) {
			let brightness = map(noise(xOffset, yOffset), 0, 1, 0, 255);

			let index = (x + y * width) * 4;
			pixels[index + 0] = brightness; // Red
			pixels[index + 1] = brightness; // Green
			pixels[index + 2] = brightness; // Blue
			pixels[index + 3] = 255; // Alpha

			yOffset += increment;
		}
		xOffset += increment;		
	}
	updatePixels();
}