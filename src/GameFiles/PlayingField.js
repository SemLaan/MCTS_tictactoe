
class PlayingField extends GameObject {

  constructor(x, y, _size) {

    super(x, y);

    this.size = _size;

  }

  draw() {

    if (this.visible) {

      stroke(255);

      line(this.position.x + this.size/3, this.position.y, this.position.x + this.size/3, this.position.y + this.size);
      line(this.position.x + this.size/3*2, this.position.y, this.position.x + this.size/3*2, this.position.y + this.size);
      line(this.position.x, this.position.y + this.size/3, this.position.x + this.size, this.position.y + this.size/3);
      line(this.position.x, this.position.y + this.size/3*2, this.position.x + this.size, this.position.y + this.size/3*2);


    }

  }

}
