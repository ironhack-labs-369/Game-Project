class Game {
    constructor() {
        this.backgroundImages;
        this.trunkImage;
        this.coinImage;
        this.grassImages;
    }
    preload() {
        this.backgroundImages = [
            {
                src: loadImage('game-project/assets/background/plx-1.png'),
                x: 0,
                speed: 0,
            },
            {
                src: loadImage('game-project/assets/background/plx-2.png'),
                x: 0,
                speed: 0.5,
            },
            {
                src: loadImage('game-project/assets/background/plx-3.png'),
                x: 0,
                speed: 0.5,
            },
            {
                src: loadImage('game-project/assets/background/plx-4.png'),
                x: 0,
                speed: 1,
            },
            {
                src: loadImage('game-project/assets/background/plx-5.png'),
                x: 0,
                speed: 2,
            },
        ];
        this.grassImages = [
            {
                src: loadImage(
                    'game-project/assets/background/jungle-grass.png'
                ),
                x: 0,
                speed: 0.5,
            },
            {
                src: loadImage(
                    'game-project/assets/background/jungle-grass.png'
                ),
                x: 0,
                speed: 0.5,
            },
        ];
        this.waterImages = [
            {
                src: loadImage('game-project/assets/background/water.png'),
                x: 0,
                speed: 0.5,
            },
            {
                src: loadImage('game-project/assets/background/water.png'),
                x: 0,
                speed: 0.5,
            },
        ];
        this.playerImage = loadImage(
            'game-project/assets/player/playerImg3.png'
        );
        this.trunkImage = {
            src: loadImage('game-project/assets/objects/liana.png'),
        };
        this.coinImage = loadImage('game-project/assets/objects/coin.png');
        (this.alligatorImage = loadImage(
            'game-project/assets/objects/alligator.png'
        )),
            (this.conquistadoresImage = loadImage(
                'game-project/assets/objects/conquistadores.png'
            )),
            (this.heartImage = loadImage(
                'game-project/assets/objects/heart.png'
            ));
    }
    setup() {
        this.player = new Player();
        this.background = new Background();
        this.trunks = [];
        this.coins = [];
        this.alligators = [];
        this.conquistadores = [];
    }
    draw() {
        /// MAIN CANVAS

        clear();
        this.background.draw();
        this.player.draw();
        if (frameCount % 360 === 0) {
            this.trunks.push(new Trunk(this.trunkImage));
            this.coins.push(new Coin(this.coinImage));
            this.alligators.push(new Alligator(this.alligatorImage));
        }

        if (frameCount % 1200 === 0) {
            this.conquistadores.push(
                new Conquistadores(this.conquistadoresImage)
            );
        }
        this.trunks.forEach((trunk) => {
            trunk.draw();
        });
        this.coins.forEach((coin) => {
            coin.draw();
        });
        if (this.background.ground == 'water') {
            this.alligators.forEach((alligator) => {
                alligator.draw();
            });
        } else {
            this.conquistadores.forEach((conq) => {
                conq.draw();
                if (conq.collision(this.player)) {
                    game.player.energies -= 2;
                    game.player.jump();
                    console.log(
                        'Collision! player energies: ',
                        game.player.energies
                    );
                    game.player.checkEnergies();
                }
            });
        }

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

        /// SCORE BOARD

        scoreBoard.clear();
        scoreBoard.image(this.coinImage, 30, 10, 30, 30);
        scoreBoard.textSize(30);
        scoreBoard.text(this.player.score, 100, 35);
        scoreBoard.image(this.heartImage, 30, 50, 30, 30);
        scoreBoard.noStroke();
        scoreBoard.fill('#0f0');
        scoreBoard.energyLevel = map(this.player.energies, 0, 100, 120, 200);
        scoreBoard.push();
        scoreBoard.strokeWeight(20);
        scoreBoard.stroke('#0f0');
        scoreBoard.line(100, 65, scoreBoard.energyLevel, 65);
        scoreBoard.pop();
    }
}
