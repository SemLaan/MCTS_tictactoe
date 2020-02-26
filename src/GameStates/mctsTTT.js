class mctsTTT extends GameObjectList {

  constructor(player) {

    super();

    this.player = player;

    this.game = new Tictactoe();
    this.mcts = new MonteCarloTreeSearch(this.game, false, true);

    this.add(this.game);

  }

  update() {

    super.update();

    if (this.game.gameOver) {

      let info = ["mctsTTT" + this.player, this.game.winner * this.player];

      gameEnvironment.setGameState("gameOver", info);

    }

    if (this.game.currentPlayer == this.player && !this.game.gameOver) {

      let pos = this.mcts.solve(1000, this.game.state, this.game.currentPlayer);
      this.game.doTurn(pos[1], pos[0]);

    }

  }

  mousePressed() {

    let x = floor(mouseX / (this.game.background.size / 3));
    let y = floor(mouseY / (this.game.background.size / 3));

    if (x < 3 && y < 3 && this.game.currentPlayer == this.player * -1) {

      this.game.doTurn(x, y);

    }
  }
}
