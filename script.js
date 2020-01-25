let p;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  p = new Particle();
}

function draw() {
  background(55, 100, 144);
  p.update();
  p.draw();
}

class Particle {
  constructor() {
    // Position
    this.pos = createVector(random(width), random(height));
    // Velocity
    this.vel = createVector(random(-2, 2), random(-2, 2));
    // Size
    this.size = 10;
  }

  // update movement
  update() {
    this.pos.add(this.vel);
  }

  // draw particle
  draw() {
    noStroke();
    fill("rgba(255, 255, 255, 0.5)");
    circle(this.pos.x, this.pos.y, this.size);
  }

  // detect edges
  edges() {
    if (this.pos.x < 0 || this.pos.x > width) {
      this.vel.x *= -1;
    }

    if (this.pos.y < 0 || this.pos.y > height) {
      this.vel.y *= -1;
    }
  }
}
