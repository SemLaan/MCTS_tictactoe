class Tictactoe extends GameObjectList {

  constructor() {

    super();

    this.state = math.zeros([3, 3]);
    this.currentPlayer = 1;
    this.moveObjects = new GameObjectList();
    this.background = new PlayingField(0, 0, width);
    this.gameOver = false;
    this.winner = 0;
    this.currentGame = new StoredGame();
    this.currentGame.addState(this.state, this.currentPlayer);

    this.add(this.background);
    this.add(this.moveObjects);

  }

  init() {

    super.init();

    this.state = math.zeros([3, 3]);
    this.currentPlayer = 1;
    this.gameOver = false;
    this.winner = 0;
    this.moveObjects.clear();
    this.currentGame = new StoredGame();
    this.currentGame.addState(this.state, this.currentPlayer);

  }

  doTurn(x, y) {

    if (this.state[y][x] == 0 && !this.gameOver) {

      this.state[y][x] = this.currentPlayer;
      this.currentGame.addState(this.state, this.currentPlayer * -1);

      let screend3 = this.background.size / 3;

      if (this.currentPlayer == 1) {

        this.moveObjects.add(new Cross(screend3 * x, screend3 * y, screend3));

      } else {

        this.moveObjects.add(new Circle(screend3 * x, screend3 * y, screend3));

      }

      this.currentPlayer *= -1;

    }

    let win = this.checkWin();

    if (win[0]) {

      this.currentGame.setWinner(win[1]);
      this.currentGame.gameStates.pop();

      if (win[1] == 1) {

        console.log("cross");
        this.gameOver = true;
        this.winner = 1;

      } else if (win[1] == -1) {

        console.log("circle");
        this.gameOver = true;
        this.winner = -1;

      } else {

        console.log("draw");
        this.gameOver = true;
        this.winner = 0;

      }

    }

  }


  legalMoves(state = this.state, player = this.currentPlayer, states = true) {

    let currentState = math.clone(state);
    let validMoveCoordinates = [];
    let validStates = [];

    // Put the board coordinates of all the possible moves in an array
    for (let i = 0; i < currentState.length; i++) {
      for (let j = 0; j < currentState[0].length; j++) {
        if (currentState[i][j] == 0)
          validMoveCoordinates.push([i, j]);
      }
    }

    // If the function was asked to produce coordinates return coordinates otherwise return states
    if (!states)
      return validMoveCoordinates;

    // Make board states for all possible moves
    for (let i = 0; i < validMoveCoordinates.length; i++) {

      let newState = math.clone(state);
      let x = validMoveCoordinates[i][0];
      let y = validMoveCoordinates[i][1];
      newState[x][y] = player;
      validStates.push(newState);

    }

    return validStates;

  }


  checkWin(state = this.state) {

    let winner = 0;
    let endGame = true;

    let diag1 = state[0][0] + state[1][1] + state[2][2];
    let diag2 = state[0][2] + state[1][1] + state[2][0];

    let hor = [];
    let ver = [];

    for (let i = 0; i < 3; i++) {

      hor[i] = state[i][0] + state[i][1] + state[i][2];
      ver[i] = state[0][i] + state[1][i] + state[2][i];

    }

    let max = math.max(hor[0], hor[1], hor[2], ver[0], ver[1], ver[2], diag1, diag2);
    let min = math.min(hor[0], hor[1], hor[2], ver[0], ver[1], ver[2], diag1, diag2);

    state.forEach(function (value) {
      value.forEach(function (val) {
        if (val == 0) {
          endGame = false;
        }
      })
    });

    if (max == 3) {

      winner = 1;
      endGame = true;

    } else if (min == -3) {

      winner = -1;
      endGame = true;

    }

    return [endGame, winner];

  }

}
