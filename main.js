let game = new Game();

function preload() {
  game.loading();
}

function setup() {
  createCanvas(928, 403);
  game.setup();
  game.bgSoundPiano.play();
  game.bgSoundBirds.play();
}

function draw() {
  if (game.start === true) {
    game.display();
  } else {
    background(255, 204, 0);
    text("Press enter to start", 100, 100);
  }

  if (keyIsDown(32)) {
    game.character.jump();
  }
}

function keyPressed() {
  let enterCode = 13;
  if (keyCode === enterCode) {
    game.start = true;
  }
  if (game.gameOver === true && keyCode === enterCode) {
    window.location.reload();
  }
  let spacebarCode = 32;
  if (keyCode === spacebarCode) {
    game.soundJump.play();
  }
}
