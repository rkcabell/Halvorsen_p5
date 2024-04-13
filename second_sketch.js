
"use strict";

// Define global variables
let a = 1.4;
let timestep = 0.005;
let n = 10000;
let scale = 25;
let tracer;

function setup() {
    createCanvas(800, 800, WEBGL);
    background(0);
    colorMode(HSB);
    console.log('Canvas size:', '800x800');
    console.log('Canvas mode:', 'WEBGL');
    console.log('Background:', '0');
    console.log('Color mode:', 'HSB');
    init();
}

function init() {
    // Initialize coordinates
    tracer = createVector(1.0, 0.0, 0.0);
}

// Executed at framerate
// draw is called automatically and should never be called
// controlled with noLoop(), redraw(), and loop()
function draw() {

    "use strict";

    // Define global variables
    let a = 1.4;
    let timestep = 0.005;
    let n = 10000;
    let scale = 25;
    let tracer;
    
    function setup() {
        createCanvas(800, 800, WEBGL);
        background(0);
        colorMode(HSB);
        console.log('Canvas size:', '800x800');
        console.log('Canvas mode:', 'WEBGL');
        console.log('Background:', '0');
        console.log('Color mode:', 'HSB');
        init();
    }
    
    function init() {
        // Initialize coordinates
        tracer = createVector(1.0, 0.0, 0.0);
        console.log('Tracer initialized:', tracer);
    }
    
    // Executed at framerate
    // draw is called automatically and should never be called
    // controlled with noLoop(), redraw(), and loop()
    function draw() {
        noFill();
        stroke(255);
        strokeWeight(3);
        //frameRate(10);
        beginShape();
    
        // Use local variables for performance
        let x = tracer.x, y = tracer.y, z = tracer.z;
    
        for (let i = 0; i < n; i++) {
            // Calculate the deltas according to the Halvorsen attractor equations
            let dx = -a * x - 4 * y - 4 * z - y * y;
            let dy = -a * y - 4 * z - 4 * x - z * z;
            let dz = -a * z - 4 * x - 4 * y - x * x;
    
            // Update coordinates
            x = x + timestep * dx;
            y = y + timestep * dy;
            z = z + timestep * dz;
    
            // Scale and draw each point
            let vx = x * scale;
            let vz = z * scale;
            let vy = y * scale;
            stroke((i % 256), 255, 255);
            vertex(vx, vy, vz);
        }
        endShape();
    
        // Update global state after drawing
        tracer.set(x, y, z)
    
        noLoop();
    }
    
    function mousePressed() {
        clear();
        background(0);
        redraw(); // for one draw() execution
        //loop(); // for continuous loop until noLoop()
    }
    
    

    // Use local variables for performance
    let x = tracer.x, y = tracer.y, z = tracer.z;

    for (let i = 0; i < n; i++) {
        // Calculate the deltas according to the Halvorsen attractor equations
        let dx = -a * x - 4 * y - 4 * z - y * y;
        let dy = -a * y - 4 * z - 4 * x - z * z;
        let dz = -a * z - 4 * x - 4 * y - x * x;

        // Update coordinates
        x = x + timestep * dx;
        y = y + timestep * dy;
        z = z + timestep * dz;

        // Scale and draw each point
        let vx = x * scale;
        let vz = z * scale;
        let vy = y * scale;
        stroke((i % 256), 255, 255);
        vertex(vx, vy, vz);
    }
    endShape();

    // Update global state after drawing
    tracer.set(x, y, z)

    noLoop();
}

function mousePressed() {
    clear();
    background(0);
    redraw(); // for one draw() execution
    //loop(); // for continuous loop until noLoop()
}

