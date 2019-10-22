class GameObject {

  //var position, velocity;

  constructor(x = 0, y = 0, vx = 0, vy = 0, g = createVector(0, 0)) {

    this.position = createVector(x, y);
    this.velocity = createVector(vx, vy);
    this.visible = true;
    this.parent = null;
    this.gravity = g;

  }

  init() {}

  update() {

    this.velocity.x += this.gravity.x;
    this.velocity.y += this.gravity.y;
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

  }

  draw() {



  }

  keyPressed(key) {}

  keyReleased(key) {}

  mousePressed() {}

  mouseReleased() {}

}
