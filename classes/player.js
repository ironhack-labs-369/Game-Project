class Player {
    constructor() {
        this.energies = 0;
        this.gravity = 0.5;
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
            this.velocity = -15;
        }
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
            // this.jumping = false;
        }
        // this makes sure that player does not move out of the bottom of the screen
        if (this.y >= height - this.height - height / 6) {
            this.y = this.ground;
            this.jumping = false;

            this.gravity = 0.5;
            // this is the starting y of the player
            // this.y = height - this.height - height / 6;
        }

        let playerXConstrained = constrain(this.x, 0, width - this.width);
        let playerYConstrained = constrain(this.y, 0, height - this.height);

        // if (this.x > trunk.x && this.x < trunk.x + trunk.width) {
        //     yc = constrain(this.y, 0, game.trunk.y - this.height);
        // }
        game.trunks.forEach((trunk) => {
            if (
                // condition for 'player is above the obstacle
                this.x + this.width >= trunk.x &&
                this.x <= trunk.x + trunk.width &&
                this.y - this.height < trunk.y + trunk.height
                // and
            ) {
                // this.y = trunk.y - this.height - 5;
                // this.ground = trunk.y + trunk.height + this.height
                this.overObstacle = trunk;

                // console.log(this.ground);
            } else {
                // this.ground = height - this.height - height / 6;
                this.overObstacle = false;
            }
        });

        // if (
        //         yc <= trunk.y - this.height &&
        //         xc > trunk.x - this.width &&
        //         xc < trunk.x + trunk.width
        //     ) {
        //         console.log(
        //             'higher than trunk',
        //             this.y <= trunk.y - this.height
        //         );
        //         console.log(
        //             'in the trunk width',
        //             this.x > trunk.x && this.x < trunk.x + trunk.width
        //         );
        //         yc = trunk.y - this.height - 5;
        //     }
        // });

        if (this.y < 1) {
            this.gravity *= 1.5;
        }

        image(
            game.playerImage,
            playerXConstrained,
            playerYConstrained,
            this.width,
            this.height
        );
    }
}
