let xOffset = 0;

function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(50);

  //let x = random(width);
  let x = map(noise(xOffset), 0, 1, 0, width);
  xOffset += 0.01;

  ellipse(x, 200, 25, 25);
}