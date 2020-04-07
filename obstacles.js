class Obstacle {
  constructor() {
    this.imgRupee = loadImage("assets/crystals/rupee.gif");
  }

  rupeeSetup() {
    this.height = this.imgRupee.height;
    this.width = this.imgRupee.width;
    this.marginBottom = 36;
    this.x = width;
    this.y = random(0, height - this.height);
  }

  display() {
    this.x--;
    image(this.imgRupee, this.x, this.y);
  }
}
