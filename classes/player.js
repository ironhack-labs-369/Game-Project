class Player {
    constructor() {
        this.score = 0;
        this.energies = -100;
        this.gravity = 1.5;
        this.velocity = 0;
        this.width = 100;
        this.height = 140;
        this.x = 50;
        this.y = height - this.height - height / 6;
        this.ground = height - this.height - height / 6;
        this.jumping;
        this.overObstacle = false;
    }
    jump() {
        if (!this.jumping) {
            this.jumping = true;
            this.velocity = -20;
        }
        this.x += 10;
    }
    move() {
        this.x += 100;
    }
    moveBack() {
        this.x -= 25;
    }
    draw() {
        // this gets higher with every loop
        this.velocity += this.gravity;
        // this pushes the player down => gravity
        this.y += this.velocity;

        // checks if the player is over the trunk and makes it stay on top of it
        if (this.overObstacle && this.y >= this.overObstacle.y - this.height) {
            this.y = this.overObstacle.y - this.height;
            this.jumping = false;
            this.gravity = 0.5;
        }
        // this makes sure that player does not move out of the bottom of the screen
        if (this.y >= this.ground) {
            this.y = this.ground;
            this.jumping = false;
            this.gravity = 0.5;
        }

        // let playerXConstrained = constrain(
        //     this.x,
        //     0,
        //     (width * 2) / 3 - this.width
        // );
        // let playerYConstrained = constrain(this.y, 0, height - this.height);

        // if (this.x > trunk.x && this.x < trunk.x + trunk.width) {
        //     yc = constrain(this.y, 0, game.trunk.y - this.height);
        // }

        game.trunks.forEach((trunk) => {
            if (
                // condition for 'player is above the obstacle
                this.x + this.width >= trunk.x &&
                this.x <= trunk.x + trunk.width &&
                this.y - this.height < trunk.y + trunk.height
            ) {
                // this.y = trunk.y - this.height - 5;
                // this.ground = trunk.y + trunk.height + this.height
                this.overObstacle = trunk;
            } else {
                // this.ground = height - this.height - height / 6;
                this.overObstacle = false;
            }
        });

        // bounces the player back when it hits the top
        if (this.y < 1) {
            this.gravity *= 3;
        }
        // restarts from the beginning when going forward
        if (this.x < 1 || this.x > width) {
            this.x = 1;
        }

        /// collision with conquistadores
        // if (game.conquistadores.collision(this.player)) {
        //     this.energies -= 10;
        // }
        image(game.playerImage, this.x, this.y, this.width, this.height);
    }
}
