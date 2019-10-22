class Circle extends GameObject {

  constructor(x = 0, y = 0, size = 100) {

    super(x, y);
    this.size = size;

  }

  draw() {

    if (this.visible) {
      ellipse(this.position.x + this.size / 2, this.position.y + this.size / 2, this.size, this.size);
    }
  }

}
