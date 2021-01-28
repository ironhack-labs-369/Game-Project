class Conquistadores {
    constructor(image) {
        this.image = image;
        this.x = width;
        this.y = height - height / 3;
        this.width = 300;
        this.height = 200;
        this.speed = 1;
    }
    collision(playerInfo) {
        if (
            // condition for 'player is above the conquistadores
            game.player.x + game.player.width >= this.x &&
            game.player.x <= this.x + this.width &&
            game.player.y + game.player.height > this.y
        ) {
            // game.player.energies += 0.2;
            // game.player.jump();
            // console.log('Collision! player energies: ', game.player.energies);
            return true;
        }
    }
    draw() {
        image(this.image, this.x, this.y, this.width, this.height);
        this.x -= this.speed;
    }
}
