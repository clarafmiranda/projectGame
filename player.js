class Runner {
  constructor() {
    this.imgRun = loadImage("assets/player/runner.gif");
  }
  display() {
    console.log("working");
    image(this.imgRun, 32, height - (this.imgRun.height + 32)); // 48px
  }
}
