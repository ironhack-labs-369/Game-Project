class Conquistadores {
    constructor(image) {
        this.image = image;
        this.x = width;
        this.y = height - height / 3;
        this.width = 300;
        this.height = 200;
        this.speed = 2;
    }
    collision(playerInfo) {
        if (
            // condition for 'player is above the conquistadores
            game.player.x + game.player.width >= this.x &&
            game.player.x <= this.x + this.width &&
            game.player.y + game.player.height > this.y
        ) {
            return true;
        }
    }
    draw() {
        image(this.image, this.x, this.y, this.width, this.height);
        this.x -= this.speed;
    }
}
