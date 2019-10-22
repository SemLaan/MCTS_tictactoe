class GameEnvironment {

  constructor() {

    this.gameStates = [];
    this.currentGameState = null;

  }

  addGameState(name, gameState) {

    this.gameStates[name] = gameState;

  }

  setGameState(name, info = null) {

    background(0);
    this.currentGameState = this.gameStates[name];
    this.currentGameState.info = info;
    this.currentGameState.init();

  }

  updateAndDraw() {

    background(0);
    this.currentGameState.update();
    this.currentGameState.draw();

  }

  keyPressed(key) {

    this.currentGameState.keyPressed(key);

  }

  keyReleased(key) {

    this.currentGameState.keyReleased(key);

  }

  mousePressed(key) {

    this.currentGameState.mousePressed(key);

  }

  mouseReleased(key) {

    this.currentGameState.mouseReleased(key);

  }

}
