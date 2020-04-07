class Background {
  constructor() {
    this.layers = [
      { src: loadImage("assets/background/15_background.png"), x: 0, speed: 0 },
      { src: loadImage("assets/background/14_lastTrees.png"), x: 0, speed: 0.5 },
      { src: loadImage("assets/background/13_fourthTrees.png"), x: 0, speed: 1 },
      { src: loadImage("assets/background/12_lastLights.png"), x: 0, speed: 1.5 },
      { src: loadImage("assets/background/11_thirdTrees.png"), x: 0, speed: 2 },
      // { src: loadImage("assets/background/10_lastParticles.png"), x: 0, speed: 2.5 },
      { src: loadImage("assets/background/09_secondTrees.png"), x: 0, speed: 2.5 },
      { src: loadImage("assets/background/08_firstLights.png"), x: 0, speed: 3 },
      { src: loadImage("assets/background/07_firstTrees.png"), x: 0, speed: 3.5 },
      // { src: loadImage("assets/background/06_firstParticles.png"), x: 0, speed: 6 },
      { src: loadImage("assets/background/05_treeTops.png"), x: 0, speed: 4 },
      { src: loadImage("assets/background/03_mist.png"), x: 0, speed: 4.5 },
    ];
  }

  parallax(layers) {
    layers.x -= layers.speed;
    image(layers.src, layers.x, 0);
    image(layers.src, layers.x + width, 0);
    if (layers.x <= -width) {
      layers.x = 0;
    }
  }

  display() {
    /* this is looping over the array using a for loop, instead of crating the function parallax().
      for (let i = 0; i < this.layers.length; i++) {
      this.layers[i].x -= this.layers[i].speed; // this moves the layers to the left at the layers speed
      image(this.layers[i].src, this.layers[i].x, 0);
      image(this.layers[i].src, this.layers[i].x + width, 0); // this will repeat the image again after the first but only once.
      if (this.layers[i].x <= -width) {
        this.layers[i].x = 0;
      }
    } */

    this.layers.forEach((image) => {
      this.parallax(image);
    });

    /* also a forEach loop but without the arrow function:
    this.layers.forEach(function (image) {
        console.log(this);
        this.parallax(image);
      }.bind(this)
    ); */
  }
}
