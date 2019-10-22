//

let gameEnvironment;

function setup() {

  createCanvas(700, 700);

  gameEnvironment = new GameEnvironment();

  gameEnvironment.addGameState("titleScreen", new TitleScreen());
  gameEnvironment.addGameState("mctsTTT1", new mctsTTT(1));
  gameEnvironment.addGameState("mctsTTT-1", new mctsTTT(-1));
  gameEnvironment.addGameState("gameOver", new GameOver());

  gameEnvironment.setGameState("titleScreen");

}


function draw() {

  gameEnvironment.updateAndDraw();

}


function keyPressed() {

  gameEnvironment.keyPressed(key);

}

function keyReleased() {

  gameEnvironment.keyReleased(key);

}

function mousePressed() {

  gameEnvironment.mousePressed();

}

function mouseReleased() {

  gameEnvironment.mouseReleased();

}

















/*
var crosses;
var circles;
var playingState;
var field;
var turn = 1;
var x, y;
var brain;
var gameState1D = [];
var guess;
var bestMove;
var counters = [];
let gameStateFilter;
var checkForWin;
var mcts;

var gameState = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];

var winFilters;


function setup() {

  createCanvas(300, 300);

  field = new PlayingField(0, 0, 300);
  crosses = new GameObjectList();
  circles = new GameObjectList();
  playingState = new GameObjectList();
  playingState.add(crosses);
  playingState.add(circles);
  playingState.add(field);

  brain = new Network(9, 20, 9);

  mcts = new MonteCarloTreeSearch();

  gameStateFilter = new Filter();
  winFilters = [4];
  winFilters[0] = new Filter();
  winFilters[1] = new Filter();
  winFilters[2] = new Filter();
  winFilters[3] = new Filter();
  winFilters[0].setShape([[1, 1, 1]]);
  winFilters[1].setShape([[1],[1],[1]]);
  winFilters[2].setShape([[1, 0, 0],[0, 1, 0],[0, 0, 1]]);
  winFilters[3].setShape([[0, 0, 1],[0, 1, 0],[1, 0, 0]]);

}

function draw() {

  //console.table(yeet.applyFilter(winFilters[2]).shape);

  background(0);

  playingState.update();
  playingState.draw();

  if (turn == 1) {

    //gameState = transpose(gameState);
    //console.table(gameState);
    let solved = mcts.solve(1000000, gameState, turn*-1);
    //console.table(gameState);
    //gameState = transpose(gameState);
    //console.table(mcts.tree.state);
    doTurn(solved[0], solved[1]);
    //console.table(mcts.tree.state);
  //gameState = transpose(gameState);
  //console.table(gameState);

    //gameState = transpose(gameState);
    // gameState1D = [];
    //
    // for (let i = 0; i < 3; i++) {
    //   for (let j = 0; j < 3; j++) {
    //     gameState1D.push(gameState[i][j]);
    //   }
    // }
    //
    // guess = brain.guess(gameState1D);
    //
    // bestMove = 8;
    //
    // while (gameState1D[bestMove] != 0 && bestMove > -1) {
    //   bestMove--;
    // }
    //
    //
    // for (let i = 0; i < guess.length - 1; i++) {
    //
    //   if (gameState1D[i] == 0) {
    //     if (guess[bestMove] < guess[i]) {
    //       bestMove = i;
    //     }
    //   }
    // }
    //
    // y = bestMove % 3;
    // x = floor(bestMove / 3);
    //
    // //print(x, y);
    // //console.table(gameState1D);
    //
    //
    // doTurn(x, y);

    counters["legalMoves"] = 0;

    for (let i = 0; i < 9; i++) {
      counters["legalMoves"] += abs(gameState1D[i]);
    }

    if (counters["legalMoves"] == 8) {
      crosses.clear();
      circles.clear();
      gameState = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ];
      turn = 1;
    }

  }

}

function mousePressed() {

  x = floor(mouseX / 100);
  y = floor(mouseY / 100);
  //x = floor(random(3));
  //y = floor(random(3));
  if (gameState[x][y] == 0) {


    doTurn(x, y);

  }



}

function doTurn(x, y) {

  gameState[x][y] = turn;

  if (turn < 0) {

    circles.add(new Circle(x * 100, y * 100));

  } else {

    crosses.add(new Cross(x * 100, y * 100));

  }

  turn = -turn;

  checkForWin = checkWin();

  if (checkForWin == 1) {

    print("cross wins");
    crosses.clear();
    circles.clear();
    gameState = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ];
    turn = 1;

  } else if (checkForWin == -1) {

    print("circle wins");
    crosses.clear();
    circles.clear();
    gameState = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ];
    turn = 1;

  } else if (checkForWin == 0) {

    print("no winners");

  }

}

function checkWin() {

  gameStateFilter.setShape(gameState);
  gameStateFilter.transpose();
  let winTest = [4];

  for (let i = 0; i < 4; i++) {

    winTest[i] = gameStateFilter.applyFilter(winFilters[i]);


    if (winTest[i].findMax() == 3)
      return 1;
    else if (winTest[i].findMin() == -3)
      return -1;

  }

  return 0;

}

function transpose(input) {

  let result = [input.length];

  for (var i = 0; i < input.length; i++) {
    result[i] = [];
    for (var j = 0; j < input[i].length; j++) {
      result[i][j] = input[j][i];
    }
  }

  return result;

}
*/
