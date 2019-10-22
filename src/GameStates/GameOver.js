class GameOver extends GameObjectList {

  constructor() {

    super();

    this.playAgainButton = new Button(width/3-40, height/3, 80, 40);
    this.playAgainText = new TextGameObject("Play again", width/3, height/3 + 20);
    this.mainMenuButton = new Button(width/3*2-40, height/3, 80, 40);
    this.mainMenuText = new TextGameObject("Main menu", width/3*2, height/3 + 20);
    this.gameResult = new TextGameObject("test", width/2, height/5, 20);

    this.add(this.playAgainButton);
    this.add(this.playAgainText);
    this.add(this.mainMenuButton);
    this.add(this.mainMenuText);
    this.add(this.gameResult);

  }

  init() {

    super.init();

    let gameOver = this;

    this.playAgainButton.setButtonFunc(function toScreen() {
      gameEnvironment.setGameState(gameOver.info[0]);
    });

    this.mainMenuButton.setButtonFunc(function toScreen() {
      gameEnvironment.setGameState("titleScreen");
    });

    if (this.info[1] == 1) {

      this.gameResult.setText("Loss");

    } else if (this.info[1] == -1) {

      this.gameResult.setText("Win");

    } else {

      this.gameResult.setText("Draw");

    }

  }



}
