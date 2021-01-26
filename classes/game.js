class Game {
    constructor() {
        this.backgroundImages;
        this.trunkImage;
        this.coinImage;
        this.grassImages;
    }
    preload() {
        this.backgroundImages = [
            { src: loadImage('assets/background/plx-1.png'), x: 0, speed: 0 },
            { src: loadImage('assets/background/plx-2.png'), x: 0, speed: 0.5 },
            { src: loadImage('assets/background/plx-3.png'), x: 0, speed: 0.5 },
            { src: loadImage('assets/background/plx-4.png'), x: 0, speed: 1 },
            { src: loadImage('assets/background/plx-5.png'), x: 0, speed: 2 },
        ];
        this.grassImages = [
            {
                src: loadImage('assets/background/jungle-grass.png'),
                x: 0,
                y: 400,
                speed: 0.5,
            },
            {
                src: loadImage('assets/background/jungle-grass.png'),
                x: 0,
                y: 400,
                speed: 0.5,
            },
        ];
        this.playerImage = loadImage('assets/player/playerImg.png');
        this.trunkImage = {
            src: loadImage('assets/objects/liana.png'),
        };
        this.coinImage = loadImage('assets/objects/coin.png');
    }
    setup() {
        this.player = new Player();
        this.background = new Background();
        this.trunks = [];
        this.coins = [];
    }
    draw() {
        clear();
        this.background.draw();
        this.player.draw();
        if (frameCount % 360 === 0) {
            this.trunks.push(new Trunk(this.trunkImage));
            this.coins.push(new Coin(this.coinImage));
        }
        this.trunks.forEach((trunk) => {
            trunk.draw();
        });
        this.coins.forEach((coin) => {
            coin.draw();
        });

        // remove coins
        this.coins = this.coins.filter((coin) => {
            // we have to use an arrow function bc of the correct context of 'this'
            // obstacle.collision(this.player)
            if (coin.collision(this.player) || coin.x < 0) {
                return false;
            } else {
                return true;
            }
        });
    }
}
