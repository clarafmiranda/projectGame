class Rupee {
  constructor() {
    this.imgs = game.rupeeImgs;
    this.index = 0;
    this.width = this.imgs[0].width;
    this.height = this.imgs[0].height;
    this.marginBottom = 43;
    this.x = width;
    this.y = random(150, height - (this.height + this.marginBottom));
  }

  checkCollision(obj) {
    let left = this.x;
    let right = this.x + this.width;
    let top = this.y;
    let bottom = this.y - this.height;
    let characterLeft = game.character.x;
    let characterRight = game.character.x + game.character.width;
    let characterTop = game.character.y;
    let characterBottom = game.character.y + game.character.height;

    let xCollision =
      (left > characterLeft && left < characterRight) || (right > characterLeft && right < characterRight);

    let yCollision =
      (this.y > game.character.y && this.y < game.character.y + game.character.height) ||
      (this.y + this.height > game.character.y && this.y + this.height < game.character.y + game.character.height);

    let collision = xCollision && yCollision;
    return collision;
  }

  display() {
    if (frameCount % 6 === 0) {
      this.index++;
    }
    this.x -= 10;
    rect(this.x, this.y, this.width, this.height);
    image(this.imgs[this.index % this.imgs.length], this.x, this.y);
  }
}

class Bat {
  constructor() {
    this.imgs = game.batImgs;
    this.index = 0;
    this.width = this.imgs[0].width;
    this.height = this.imgs[0].height;
    this.marginBottom = 43;
    this.x = width;
    this.y = random(150, height - (this.height + this.marginBottom));
  }

  checkCollision(obj) {
    let left = this.x;
    let right = this.x + this.width;
    let top = this.y;
    let bottom = this.y - this.height;
    let characterLeft = game.character.x;
    let characterRight = game.character.x + game.character.width;
    let characterTop = game.character.y;
    let characterBottom = game.character.y + game.character.height;

    let xCollision =
      (left > characterLeft && left < characterRight) || (right > characterLeft && right < characterRight);

    let yCollision =
      (this.y > game.character.y && this.y < game.character.y + game.character.height) ||
      (this.y + this.height > game.character.y && this.y + this.height < game.character.y + game.character.height);
    // (top > characterTop && top < characterBottom) || (bottom > characterTop && bottom < characterBottom);

    let collision = xCollision && yCollision;
    return collision;
  }

  display() {
    if (frameCount % 8 === 0) {
      this.index++;
    }
    this.x -= 8;
    rect(this.x, this.y, this.width, this.height);
    image(this.imgs[this.index % this.imgs.length], this.x, this.y);
  }
}

/* class Mana {
  constructor() {
    this.imgs = game.manaImgs;
    this.index = 0;
    this.width = this.imgs[0].width;
    this.height = this.imgs[0].height;
    this.marginBottom = 43;
    this.x = width;
    this.y = random(150, height - (this.height + this.marginBottom));
  }

  display() {
    if (frameCount % 8 === 0) {
      this.index++;
    }
    this.x--;
    image(this.imgs[this.index % this.imgs.length], this.x, this.y);
  }
} */
