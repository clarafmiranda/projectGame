class Game {
  constructor() {
    this.rupeesArray = [];
    this.batsArray = [];
    this.soundRupee;
    this.soundDead;
    this.soundJump;

    // this.bgPianoArray = [];
    this.bgSoundPiano;
    this.bgSoundBirds;
    // this.manaArray = [];
    this.score = 0;
    this.start = false;
    this.gameOver = false;
  }

  loading() {
    //this.startingScreenGif = createImg("assets/startingScreen.gif", width, height).hide();
    this.startingScreenImg = loadImage("assets/startingScreen.png");
    this.endingScreenImg = loadImage("assets/endingScreen.png");
    this.pixelFont = loadFont("assets/Planes_ValMore.ttf");

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

    this.soundRupee = loadSound("assets/sounds/rupee.mp3");
    this.soundDead = loadSound("assets/sounds/dead.mp3");
    this.soundJump = loadSound("assets/sounds/jump.mp3");

    /* this.bgPianoSong = [];
    for (let i = 0; i <= 5; i++) {
      this.bgPianoArray.push(loadSound("assets/sounds/bgSoundPiano.mp3"));
    } */
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
        this.soundRupee.play();
        this.score += 10;
      }
    });

    this.rupeesArray = this.rupeesArray.filter((rupee) => {
      return !rupee.checkCollision(this.character);
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

    // BATS & GAME OVER ////////////////////////////////////////

    if (frameCount === 1 || frameCount % 60 === 0) {
      this.batsArray.push(new Bat());
    }

    this.batsArray.forEach((bat) => {
      bat.display();
    });

    if (this.gameOver === true) {
      image(this.endingScreenImg, 0, 0);
      noLoop();
    }

    this.batsArray.forEach((rupee) => {
      rupee.checkCollision(this.character);
      if (rupee.checkCollision(this.character)) {
        this.soundDead.play();
        this.gameOver = true;
        this.bgSoundPiano.stop();
      }
    });

    if (frameCount % 15 === 0) {
      this.score++;
    }

    textFont(this.pixelFont);
    textSize(18);
    textAlign(CENTER);
    fill(255, 255, 255);
    text(`score: ${this.score}`, 0, 60, width);

    /* textSize(16);
    text("score", 0, 48, width);
    textSize(20);
    text(`${this.score}`, 0, 72, width); */
  }
}
