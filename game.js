class Game {
  constructor() {
    this.rupees = [];
  }
  loading() {
    this.background = new Background();
    this.character = new Character();
    this.foreground = new Foreground();
    this.obstacles = new Obstacle();
  }

  setup() {
    this.character.characterSetup();
    this.obstacles.rupeeSetup();
  }

  display() {
    clear();
    this.background.display();
    this.character.display();
    this.foreground.display();

    if (frameCount % 60 === 0) {
      this.rupees.push(new Obstacle());
    }
    this.rupees.forEach((rupee) => {
      this.obstacles.display();
    });
  }
}
