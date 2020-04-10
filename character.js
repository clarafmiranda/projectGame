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
    this.x = 100;
    this.y = height - (this.height + this.marginBottom);
  }

  jump() {
    if (this.y < 150) {
    } else {
      this.motionSpeed = -7;
    }
  }

  display() {
    this.motionSpeed += this.gravity;
    this.y += this.motionSpeed;
    if (this.y > height - (this.height + this.marginBottom)) {
      this.y = height - (this.height + this.marginBottom);
    }

    image(this.imgRun, this.x, this.y);
  }

  /* jump() {
    if (this.y < 100) {
    } else {
      this.motionSpeed = -2;
    }
  }

  display() {
    this.motionSpeed += this.gravity;
    this.y += this.motionSpeed;

    if (this.y > height - (this.height + this.marginBottom)) {
      this.y = height - (this.height + this.marginBottom);
    }

    image(this.imgRun, this.x, this.y);
  } */
}
