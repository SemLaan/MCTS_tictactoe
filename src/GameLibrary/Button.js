class Button extends GameObject {

  constructor(x, y, w, h) {

    super(x, y);

    this.w = w;
    this.h = h;
    this.buttonFunc = null;

  }

  draw() {

    fill(255, 4, 5);
    rect(this.position.x, this.position.y, this.w, this.h);

  }

  setButtonFunc(func) {

    this.buttonFunc = func;

  }

  mousePressed() {

    if (mouseX > this.position.x && mouseX < this.position.x + this.w &&
        mouseY > this.position.y && mouseY < this.position.y + this.h) {

      if (this.buttonFunc != null) {

        this.buttonFunc();

      }

    }

  }

}
