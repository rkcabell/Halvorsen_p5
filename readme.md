# Halvorsen Chaotic Attractor Simulation

This repository contains a visualization of the **Halvorsen Chaotic Attractor** implemented in `p5.js`. Chaotic attractors are mathematical systems that 

## Overview

The Halvorsen attractor is defined by a set of differential equations:

dx/dt = -ax - 4y - 4z - y^2 

dy/dt = -ay - 4z - 4x - z^2 

dz/dt = -az - 4x - 4*y - x^2

Where `a` is a parameter that controls the system's behavior. This simulation demonstrates the attractor's dynamics in 3D space.

## Features

- **3D Visualization**: The attractor is rendered in a dynamic 3D space using `p5.js` with support for rotation, zooming. and pausing.
- **Interactive Controls**: Adjust parameters like the attractor constant (`a`), and scale. Update canvas to apply updates.
- **Draw Modes**: Switch between Rainbow, Ribbon, and Dashed line.
