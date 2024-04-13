
"use strict";

//Constants
const a = 1.89;
const dt = 0.005;

//Holds all Vectors
let allPositions = [];

function setup() {

  createCanvas(650, 650, WEBGL);
  noFill();

  initAnimation();

  createEasyCam();
}

function draw() {

  background(0);

  translate(0, 0, -80);

  //Calculates next Position
  calcNextPos(allPositions[allPositions.length - 1]);

  scale(20) //Scale drawing bigger

  //Draw Line
  stroke(0, 200, 0);
  beginShape();
  allPositions.forEach(v => vertex(v.x, v.y, v.z))
  endShape();

  //Draw Dot
  stroke(0, 255, 0);
  translate(allPositions[allPositions.length - 1].x, allPositions[allPositions.length - 1].y, allPositions[allPositions.length - 1].z)
  sphere(0.5);
}

//Initializes & Resets the Animation
function initAnimation() {
  allPositions = [];
  //Initial Vector
  allPositions.push(createVector(1, 0, 0));
}

//Calculates the next X, Y and Z Coordinates
function calcNextPos(v) {

  //Calculate the Difference from the current to the next Point
  const diffX = (-a * v.x - 4 * v.y - 4 * v.z - v.y * v.y) * dt;
  const diffY = (-a * v.y - 4 * v.z - 4 * v.x - v.z * v.z) * dt;
  const diffZ = (-a * v.z - 4 * v.x - 4 * v.y - v.x * v.x) * dt;

  //Create a new Vector(X,Y,Z) by adding the calculated Differences to the current Vector
  allPositions.push(createVector(v.x + diffX, v.y + diffY, v.z + diffZ));
}