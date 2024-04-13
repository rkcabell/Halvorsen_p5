// Define global variables
let x = 1.0, y = 0.0, z = 0.0;
let a = 1.4;
let delta = 0.005;
let n = 20000;
let factor = 23;

function setup() {
  // Set up the canvas
  createCanvas(800, 600, WEBGL);
  background(0);
  colorMode(HSB);

  // Initialize coordinates
  x = 1.0;
  y = 0.0;
  z = 0.0;

  // Calculate and draw the attractor
  noFill();
  stroke(255);
  beginShape();
  for (let i = 0; i < n; i++) {
    // Calculate the deltas according to the Halvorsen attractor equations
    let dx = -a * x - 4 * y - 4 * z - y * y;
    let dy = -a * y - 4 * z - 4 * x - z * z;
    let dz = -a * z - 4 * x - 4 * y - x * x;

    // Update coordinates
    x = x + delta * dx;
    y = y + delta * dy;
    z = z + delta * dz;

    // Scale and draw each point
    let vx = x * factor;
    let vz = z * factor;
    let vy = y * factor;
    stroke((i % 256), 255, 255);
    vertex(vx, vy, vz);
  }
  endShape();
}
