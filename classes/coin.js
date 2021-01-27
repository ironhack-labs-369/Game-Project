class Coin {
    constructor(image) {
        this.image = image;
        this.x = width;
        this.y = 50;
        this.width = 60;
        this.height = 50;
        this.speed = 1.5;
    }
    setup() {
        coin = createGraphics(this.width, this.height);
    }
    collision(playerInfo) {
        // console.log('collision', playerInfo);
        // get the middle of the coin
        let coinX = this.x + this.width / 2;
        let coinY = this.y + this.height / 2;
        // get the middle of the player
        let playerX = playerInfo.x + playerInfo.width / 2;
        let playerY = playerInfo.y + playerInfo.height / 2;
        // use p5 dist() function to measure distance between two objects
        if (dist(coinX, coinY, playerX, playerY) > 30) {
            return false;
        } else {
            // collision was detected
            game.player.score += 10;
            console.log('Collision! player score: ', game.player.energies);
            return true;
        }
    }
    draw() {
        image(this.image, this.x, this.y, this.width, this.height);

        // coin.ellipse(this.x, this.y, this.width, this.height);

        // image(this.coin, this.x, this.y, this.width, this.height);
        // coin.mask(this.image);

        game.coinImage;
        this.x -= this.speed;
    }
}
