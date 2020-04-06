class Game {
  // Iteration 1
  // Draw the grid

  initialize() {
    this.background = new Background();
    this.runner = new Runner();
  }

  display() {
    clear();
    this.background.display();
    this.runner.display();
  }
}
