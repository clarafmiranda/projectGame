let game = new runnerGame();

function preload() {
  game.initialize();
}

function setup() {
  createCanvas(928, 403);
  
}

function draw() {
  // frameRate(40);
  game.display();
}