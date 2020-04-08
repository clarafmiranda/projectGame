class Character {
  constructor() {
    this.imgRun = loadImage("assets/character/run.gif");
    this.gravity = 0.5;
    this.motionSpeed = 0;
  }

  setup() {
    this.height = this.imgRun.height;
    this.width = this.imgRun.width;
    this.marginBottom = 43;
    this.x = 48;
    this.y = height - (this.height + this.marginBottom);
  }

  jump() {
    this.motionSpeed = -8;
    /* if (this.y === 100) {
      this.motionSpeed = 10;
    } */
  }

  display() {
    this.motionSpeed += this.gravity;
    this.y += this.motionSpeed;
    if (this.y > height - (this.height + this.marginBottom)) {
      this.y = height - (this.height + this.marginBottom);
    }

    image(this.imgRun, this.x, this.y);
  }
}
