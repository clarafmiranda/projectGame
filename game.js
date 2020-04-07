class Game {
  constructor() {
    this.rupeesArray = [];
  }

  loading() {
    this.background = new Background();
    this.character = new Character();
    this.foreground = new Foreground();
  }

  setup() {
    this.character.characterSetup();
  }

  display() {
    clear();
    this.background.display();

    if (frameCount % 180 === 0) {
      this.rupeesArray.push(new Rupee());
    }
    this.rupeesArray.forEach((rupee) => {
      rupee.display();
    });

    this.character.display();
    this.foreground.display();
  }
}
