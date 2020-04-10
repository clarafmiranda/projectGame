let game = new Game();

function preload() {
  game.loading();
}

function setup() {
  createCanvas(928, 403);
  game.setup();

  game.bgSoundPiano.loop();
  game.bgSoundBirds.loop();
}

function draw() {
  if (game.start === true) {
    //game.startingScreenGif.hide();
    game.display();
  } else {
    //game.startingScreenGif.show();
    image(game.startingScreenImg, 0, 0);
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
