class TitleScreen extends GameObjectList {

  constructor() {

    super();

    this.mctsButton = new Button(width/3.5-100, height/2-25, 200, 70);
    this.mctsButton.setButtonFunc(function toScreen() {
      gameEnvironment.setGameState("mctsTTT-1");
    });
    this.mctsText = new TextGameObject("MCTS player1", this.mctsButton.position.x + this.mctsButton.w/2,
        this.mctsButton.position.y + this.mctsButton.h/2 + 2, 30);

    this.add(this.mctsButton);
    this.add(this.mctsText);

    this.mctsButton2 = new Button(width/3.5*2.5-100, height/2-25, 200, 70);
    this.mctsButton2.setButtonFunc(function toScreen() {
      gameEnvironment.setGameState("mctsTTT1");
    });
    this.mctsText2 = new TextGameObject("MCTS player2", this.mctsButton2.position.x + this.mctsButton2.w/2,
        this.mctsButton2.position.y + this.mctsButton2.h/2 + 2, 30);

    this.add(this.mctsButton2);
    this.add(this.mctsText2);

  }

  update() {

    super.update();

  }

  draw() {

    background(0);
    super.draw();

  }





}
