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
        // console.log('collision', playerInfo);
        // get the middle of the conquistadores
        // let conquistadoresX = this.x;
        // let conquistadoresY = this.y;
        // let playerX = playerInfo.x + playerInfo.width;
        // let playerY = playerInfo.y + playerInfo.height;

        // console.log(
        //     'dist',
        //     dist(conquistadoresX, conquistadoresY, playerX, playerY)
        // );

        // use p5 dist() function to measure distance between two objects
        // if (dist(conquistadoresX, conquistadoresY, playerX, playerY) > 150) {
        //     return false;
        // } else {
        //     // collision was detected
        //     game.player.energies -= 1;
        //     game.player.jump();
        //     console.log('Collision! player energies: ', game.player.energies);
        //     return true;
        // }

        if (
            // condition for 'player is above the conquistadores
            game.player.x + game.player.width >= this.x &&
            game.player.x <= this.x + this.width &&
            game.player.y + game.player.height > this.y
        ) {
            // game.player.energies += 0.5;
            // game.player.jump();
            // console.log('Collision! player energies: ', game.player.energies);
            return true;
        }
    }
    draw() {
        image(this.image.src, this.x, this.y, this.width, this.height);
        this.x -= this.speed;
    }
}
