class Game {
  constructor() {
    this.rupeesArray = [];
    this.batsArray = [];
    this.soundCoin;

    // this.manaArray = [];
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

    if (frameCount === 1 || frameCount % 90 === 0) {
      this.batsArray.push(new Bat());
    }

    this.character.display();
    this.foreground.display();

    this.batsArray.forEach((bat) => {
      bat.display();
    });

    /*
    if (frameCount % 900 === 0) {
      this.manaArray.push(new Mana());
    }
    this.manaArray.forEach((mana) => {
      mana.display();
    }); 
    */
  }
}
