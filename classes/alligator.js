class Alligator {
    constructor(image) {
        this.image = image;
        this.x = width;
        this.y = random(height, height - height / 6);
        this.width = random(150, 200);
        this.height = 50;
        this.speed = 1.5;
    }
    draw() {
        image(this.image, this.x, this.y, this.width, this.height);
        this.x -= this.speed;
    }
}
