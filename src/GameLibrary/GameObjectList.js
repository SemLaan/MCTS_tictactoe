
class GameObjectList extends GameObject {

  constructor() {

    super();
    this.children = [];
    this.info = null;

  }

  init() {

    for (let i = 0; i < this.children.length; i++) {

      this.children[i].init();

    }

  }

  update() {

    for (let i = 0; i < this.children.length; i++) {

      this.children[i].update();

    }

  }

  draw() {

    for (let i = 0; i < this.children.length; i++) {

      this.children[i].draw();

    }

  }

  keyPressed(key) {

    for (let i = 0; i < this.children.length; i++) {

      this.children[i].keyPressed(key);

    }

  }

  keyReleased(key) {

    for (let i = 0; i < this.children.length; i++) {

      this.children[i].keyReleased(key);

    }

  }

  mousePressed(key) {

    for (let i = 0; i < this.children.length; i++) {

      this.children[i].mousePressed(key);

    }

  }

  mouseReleased(key) {

    for (let i = 0; i < this.children.length; i++) {

      this.children[i].mouseReleased(key);

    }

  }

  add(object) {

    this.children.push(object);
    object.parent = this;

  }

  clear() {

    this.children = [];

  }

}
