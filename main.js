let game = new Game();

function preload() {
  game.loading();
}

function setup() {
  createCanvas(928, 403);
  game.setup();
}

function draw() {
  // frameRate(40);
  game.display();

  if (keyIsDown(32)) {
    game.character.jump();
  }
}

/* function keyPressed() {
  let spacebarCode = 32;
  if (keyCode === spacebarCode) {
    game.character.jump();
  }
  console.log("spacebar pressed");
} */
