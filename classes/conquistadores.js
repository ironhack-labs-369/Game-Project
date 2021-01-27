class Conquistadores {
    constructor(image) {
        this.image = image;
        this.x = width;
        this.y = height - height / 3;
        this.width = 300;
        this.height = 200;
        this.speed = 1;
    }
    draw() {
        image(this.image.src, this.x, this.y, this.width, this.height);
        this.x -= this.speed;
    }
}
