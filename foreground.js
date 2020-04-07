class Foreground {
  constructor() {
    this.layers = [
      { src: loadImage("assets/background/04_grass.png"), x: 0, speed: 4.5 },
      { src: loadImage("assets/background/02_bushes.png"), x: 0, speed: 5 },
      { src: loadImage("assets/background/01_bushes.png"), x: 0, speed: 5.5 },
    ];
  }

  parallaxForeground(layers) {
    layers.x -= layers.speed;
    image(layers.src, layers.x, 0);
    image(layers.src, layers.x + width, 0);
    if (layers.x <= -width) {
      layers.x = 0;
    }
  }

  display() {
    this.layers.forEach((image) => {
      this.parallaxForeground(image);
    });
  }
}
