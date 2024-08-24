// Set up how many balls we want
const ballCount = 1000;

// Set up x and y position variable to equal an empty array
const x = [];
const y = [];

// Set up speed, size and color variable to equal an empty array
const xSpeed = [];
const ySpeed = [];
const size = [];
const r = [];
const g = [];
const b = [];

function setup() {
	createCanvas(windowWidth, windowHeight);

	// Create a for loop that iterates through i until it reaches the ball count value
	for (let i = 0; i < ballCount; i++) {
		// Inside the for loop:

		// Set x and y position to be the center
		x.push(windowWidth / 2)
		y.push(windowHeight / 2)

		// Set the speeds to be random
		xSpeed.push(Math.random() * (10) - 5);
		ySpeed.push(Math.random() * (10) - 5);

		// Set the size to be random
		size.push(Math.random() * (40) + 10);

		// Set the colors to be random      
		r.push(Math.floor(Math.random() * 256));
		g.push(Math.floor(Math.random() * 256));
		b.push(Math.floor(Math.random() * 256));
	}


}

function draw() {
	background(0, 50);

	// Iterate through a new for loop to change the properties in order to animate the balls
	for (let i = 0; i < ballCount; i++) {
		// Inside the for loop:
		// Increment speed for x position
		x[i] = x[i] + xSpeed[i]

		// Increment speed for y position
		y[i] = y[i] + ySpeed[i]


		// Reverse x direction if ball hits left or right sides
		if (x[i] < 0 || windowWidth < x[i]) {
			xSpeed[i] = xSpeed[i] * -1
		}

		// Reverse y direction if ball hits top or bottom sides
		if (y[i] < 0 || windowHeight < y[i]) {
			ySpeed[i] = ySpeed[i] * -1
		}


		// Set random R, G, B values
		fill(r[i], g[i], b[i])


		// Style to have no strokes
		noStroke()


		// Draw the bouncing balls
		ellipse(x[i], y[i], (size[i] / 2), (size[i] / 2));


	}



} 