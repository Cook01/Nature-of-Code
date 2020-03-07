let xOffset = 0;
let yOffset = 1000;

function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(50);

  //let x = random(width);
  let x = map(noise(xOffset), 0, 1, 0, width);
  let y = map(noise(yOffset), 0, 1, 0, height);

  xOffset += 0.01;
  yOffset += 0.01;

  ellipse(x, y, 25, 25);
}