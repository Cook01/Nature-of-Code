let x = 200, y = 200;

let r = 0, g = 0, b = 0;
let colorOffset = 0;

function setup() {
	createCanvas(400, 400);
	background(50);
}

function draw() {
	stroke(r, g, b);
	strokeWeight(25);

	point(x, y);

	let rand = floor(random(4));

	switch (rand) {
		case 0:
			x++;
			break;
		
		case 1:
			y++;
			break;
		
		case 2:
			x--;
			break;
		
		case 3:
			y--;
			break;
	}

	x %= width;
	y %= height;

	r = floor(map(sin(colorOffset + 2 * (PI/3)), -1, 1, 0, 255));
	g = floor(map(sin(colorOffset + 2 * (2 * PI/3)), -1, 1, 0, 255));
	b = floor(map(sin(colorOffset + 2 * PI), -1, 1, 0, 255));

	colorOffset += 0.01;
}