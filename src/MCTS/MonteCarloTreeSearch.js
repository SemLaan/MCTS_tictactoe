class MonteCarloTreeSearch {

  constructor(ttt, probabilities = false, metrics = false) {

    this.metrics = metrics;
    // Allows mcts to access certain functions from the tictactoe class
    this.ttt = ttt;
    this.tree = null;
    // When true mcts picks the move to play according to a probability distribution
    this.probability = probabilities;

  }

  // Empty's the tree and makes a root node with the desired state
  reset(boardState, player) {

    this.tree = null;
    this.tree = new GameState(boardState, player);

  }

  solve(simulations, _boardState, player) {

    let boardState = math.clone(_boardState);

    // Reseting the tree and making the current state the root node
    this.reset(boardState, -player);

    // Doing i simulations
    for (let i = 0; i < simulations; i++) {

      let leafNode = this.selection();
      let simNode = this.expansion(leafNode);
      let simValue = this.simulation(simNode);
      this.backprop(simNode, simValue);

    }

    if (this.metrics)
      console.log(this.tree);

    // Array holding all the possible moves
    let possibleNodes = this.tree.children;

    // Index of the node with the most sims
    let mostSims = 0;

    // Picking the best move deterministically
    if (!this.probability) {

      // Getting the index of the node with the most sims
      for (let i = 1; i < possibleNodes.length; i++) {

        if (possibleNodes[i].n > possibleNodes[mostSims].n)
          mostSims = i;

      }

      // Picking the best move stochastically
    } else if (this.probability) {

      let probabilities = [];

      for (let i = 0; i < possibleNodes.length; i++) {

        probabilities.push(possibleNodes[i].n);

      }

      probabilities = math.divide(probabilities, this.tree.n);

      let randomNumber = random(1);
      let totalP = 0;
      let moveFound = false;

      for (let i = 0; i < probabilities.length; i++) {

        totalP += probabilities[i];
        if (!moveFound && randomNumber < totalP) {

          moveFound = true;
          mostSims = i;

        }

      }

    }

    // The matrix of the best game state
    let bestMoveState = math.clone(possibleNodes[mostSims].state);

    // Calculating a matrix with a 1/-1 at the position that is the best move
    for (let i = 0; i < bestMoveState.length; i++) {
      for (let j = 0; j < bestMoveState[0].length; j++) {
        bestMoveState[i][j] -= boardState[i][j];
      }
    }

    // Calculating and returning the board position of the best move
    for (let i = 0; i < bestMoveState.length; i++) {
      for (let j = 0; j < bestMoveState[0].length; j++) {
        if (bestMoveState[i][j] != 0) {
          return [i, j];
        }
      }
    }
  }

  selection() {

    let childFound = false;

    // Sets the node from where the tree is going to be traversed as the current game state
    let currentNode = this.tree;

    // While uct hasn't found a leaf node it's going to keep traversing
    while (!childFound) {

      if (currentNode.children != null) {

        // Calculating uct values for every possible child node
        let childrenValues = [];

        for (let i = 0; i < currentNode.children.length; i++) {

          let iNode = currentNode.children[i];
          // The exploitation value of the node
          let q = iNode.q;
          let n = iNode.n;
          if (n == 0)
            n = 0.0001;
          let totalN = iNode.parent.n;

          // Calculating the exploration value
          let exploration = sqrt(2 * log(totalN) / n);

          childrenValues.push(q + exploration);

        }

        // Picking the best child
        let bestChild = 0;

        for (let i = 1; i < childrenValues.length; i++) {

          if (childrenValues[i] > childrenValues[bestChild]) {

            bestChild = i;

          }

        }

        // Setting the current node as the best child
        currentNode = currentNode.children[bestChild];

      } else /*if the current node doesn't have children explore it*/ {

        childFound = true;

      }

    }

    // Returning the selected node
    return currentNode;

  }

  expansion(node) {

    // Checks if the selected node is a terminal state
    let isTerminal = this.ttt.checkWin(node.state);

    // If the selected node is already a terminal state, it gets backpropagated
    if (isTerminal[0])
      return node;

    // Get all the valid moves from the current state, returns an array with new game states
    let validStates = this.ttt.legalMoves(node.state, node.player * -1);

    // If the selected node is already a terminal state, it gets backpropagated
    if (validStates.length == 0)
      return node;

    // Initializes the nodes children
    node.children = [];

    // Puts all the valid states in node.children
    for (let i = 0; i < validStates.length; i++) {

      node.children.push(new GameState(validStates[i], node.player * -1, node));

    }

    // Selects a random child to be simulated
    return random(node.children);

  }


  simulation(node) {

    // Initializing current gamestate for simulation
    let currentPlayer = node.player;
    let currentState = math.clone(node.state);
    let terminalStateFound = false;
    let isTerminal;


    while (!terminalStateFound) {

      // Checking if currentState is a terminal state
      isTerminal = this.ttt.checkWin(currentState);

      // If currentState is terminal
      if (isTerminal[0])
        terminalStateFound = true;

      // If currentState is not terminal make a next random move
      if (!terminalStateFound) {

        let moves = this.ttt.legalMoves(currentState, currentPlayer);

        currentPlayer *= -1;
        currentState = random(moves);

      }

    }

    // Return if the simulated node won or lost
    if (isTerminal[1] == node.player) {

      return 1;

    } else if (isTerminal[1] == -node.player) {

      return -1;

    } else /*if draw*/ {

      return 0;

    }

  }


  backprop(node, value) {

    // Initializing backprop
    let currentNode = node;
    let currentValue = value;
    let backpropFinished = false;

    while (!backpropFinished) {

      // Add gameEnd and simulation values
      currentNode.n++;
      currentNode.w += currentValue;
      currentNode.q = currentNode.w / currentNode.n;

      // Check if the currentNode has a parent
      if (currentNode.parent == null)
        backpropFinished = true;

      if (!backpropFinished) {

        // Go up one node in the tree
        currentValue *= -1;
        currentNode = currentNode.parent;

      }
    }
  }
}
