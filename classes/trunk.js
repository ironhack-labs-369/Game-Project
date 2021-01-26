class Trunk {
    constructor(image) {
        this.image = image;
        this.x = width;
        this.y = random(180, 400);
        this.width = random(100, 200);
        this.height = 50;
        this.speed = 1.5;
    }
    setup() {
        this.image.style('border-radius', '5px');
    }
    draw() {
        image(this.image.src, this.x, this.y, this.width, this.height);
        game.trunkImage;
        this.x -= this.speed;
    }
}
