class Game {
  constructor() {
    this.rupeesArray = [];
    this.batsArray = [];
    this.soundCoin;
    this.soundDead;
    this.soundJump;
    this.bgSoundPiano;
    this.bgSoundBirds;
    // this.manaArray = [];
    this.score = 0;
    this.start = false;
    this.gameOver = false;
  }

  loading() {
    this.rupeeImgs = [];
    for (let i = 0; i <= 5; i++) {
      this.rupeeImgs.push(loadImage(`assets/rupees/rupee${i}.png`));
    }

    this.batImgs = [];
    for (let i = 0; i <= 3; i++) {
      this.batImgs.push(loadImage(`assets/bat/bat${i}.png`));
    }

    /* this.manaImgs = [];
    for (let i = 0; i <= 4; i++) {
      this.manaImgs.push(loadImage(`assets/mana/mana${i}.png`));
    } */

    this.soundCoin = loadSound("assets/sounds/rupee.mp3");
    this.soundDead = loadSound("assets/sounds/dead.mp3");
    this.soundJump = loadSound("assets/sounds/jump.mp3");
    this.bgSoundPiano = loadSound("assets/sounds/bgSoundPiano.mp3");
    this.bgSoundBirds = loadSound("assets/sounds/bgSoundBirds.mp3");

    this.background = new Background();
    this.character = new Character();
    this.foreground = new Foreground();
  }

  setup() {
    this.character.setup();
  }

  display() {
    clear();
    this.background.display();

    // RUPEES ////////////////////////////////////////

    if (frameCount === 1 || frameCount % 120 === 0) {
      this.rupeesArray.push(new Rupee());
    }

    this.rupeesArray.forEach((rupee) => {
      rupee.display();
    });

    this.rupeesArray.forEach((rupee) => {
      rupee.checkCollision(this.character);
      if (rupee.checkCollision(this.character)) {
        this.soundCoin.play();
      }
    });

    this.rupeesArray = this.rupeesArray.filter((rupee) => {
      return !rupee.checkCollision(this.character);
    });

    // BATS & GAME OVER ////////////////////////////////////////

    if (frameCount === 1 || frameCount % 90 === 0) {
      this.batsArray.push(new Bat());
    }

    this.batsArray.forEach((bat) => {
      bat.display();
    });

    if (this.gameOver === true) {
      background(255, 204, 0);
      text("Game Over", 100, 100);
      noLoop();
    }

    this.batsArray.forEach((rupee) => {
      rupee.checkCollision(this.character);
      if (rupee.checkCollision(this.character)) {
        this.soundDead.play();
        this.gameOver = true;
      }
    });

    // MANA ////////////////////////////////////////

    /*
    if (frameCount % 900 === 0) {
      this.manaArray.push(new Mana());
    }
    this.manaArray.forEach((mana) => {
      mana.display();
    }); 
    */
    this.character.display();
    this.foreground.display();

    this.score++;
    text(`Score: ${this.score} `, width - 200, 100);
  }
}
