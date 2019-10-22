
class GameState {

  constructor(boardState, player, parent = null) {

    this.state = boardState;
    this.children = null;
    this.parent = parent;
    this.w = 0; // wins from this node
    this.n = 0; // simulations from this node
    this.q = 0; // wins divided by simulations
    this.player = player;
    this.winner = null;

  }

}
