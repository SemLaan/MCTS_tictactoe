class TextGameObject extends GameObject {

  constructor(text = "", x = 0, y = 0, size = 10, color = [255, 255, 255]) {

    super(x, y);
    this.text = text;
    this.size = size;
    this.color = color;

  }

  setText(text) {

    this.text = text;

  }

  draw() {

    textAlign(CENTER, CENTER);
    fill(this.color[0], this.color[1], this.color[2]);
    textSize(this.size);
    text(this.text, this.position.x, this.position.y+2);

  }

}
