class Rupee {
  constructor() {
    this.imgRupee = loadImage("assets/crystals/rupee.gif");
    // this.height = this.imgRupee.height + 50;
    this.x = width;
    this.y = random(150, height - 100);
  }

  display() {
    console.log(height, width, this.imgRupee.height, this.imgRupee.width);
    this.x--;
    image(this.imgRupee, this.x, this.y);
  }
}
