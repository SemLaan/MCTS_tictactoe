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