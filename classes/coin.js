class Coin {
    constructor(image) {
        this.image = image;
        this.x = width;
        this.y = random(100, 150);
        this.width = 60;
        this.height = 50;
        this.speed = 1.5;
    }

    collision(playerInfo) {
        let coinX = this.x;
        let coinY = this.y + this.height;
        // get the middle of the player
        // let playerX = playerInfo.x + playerInfo.width ;
        // let playerY = playerInfo.y + playerInfo.height;
        let playerX = playerInfo.x + playerInfo.width / 2;
        let playerY = playerInfo.y;
        // use p5 dist() function to measure distance between two objects
        if (dist(coinX, coinY, playerX, playerY) > 50) {
            return false;
        } else {
            // collision was detected
            game.player.score += 10;
            console.log('Coin! player score: ', game.player.score);
            return true;
        }
    }
    draw() {
        image(this.image, this.x, this.y, this.width, this.height);

        game.coinImage;
        this.x -= this.speed;
    }
}
