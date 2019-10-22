class Cross extends GameObject {

  constructor(x = 0, y = 0, size = 100) {

    super(x, y);
    this.size = size;

  }

  draw() {

    if (this.visible) {
      stroke(255);
      line(this.position.x, this.position.y, this.position.x + this.size, this.position.y + this.size);
      line(this.position.x + this.size, this.position.y, this.position.x, this.position.y + this.size);
    }
  }

}
