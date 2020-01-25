function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {}

class Particle {
  constructor() {
    // Position
    this.pos = createVector(random(width), random(height));
    // Size
    this.size = 10;
  }

  draw() {
    noStroke();
    fill("rgba(255, 255, 255, 0.5)");
    circle(this.pos.x, this.pos.y, this.size);
  }
}
