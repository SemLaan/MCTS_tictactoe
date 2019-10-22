class StoredGame {

  constructor() {

    this.gameStates = [];
    this.winner = null;

  }

  addState(_boardState, player) {

    let boardState = math.clone(_boardState);
    let gameState = new GameState(boardState, player);

    this.gameStates.push(gameState);

  }

  setWinner(winner) {

    for (let i = 0; i < this.gameStates.length; i++) {

      if (this.gameStates[i].player == winner) {

        this.gameStates[i].winner = true;

      } else {

        this.gameStates[i].winner = false;

      }
    }
  }
}
