class Player {
    constructor() {
        this.score = 0;
        this.energies = 10;
        this.gravity = 1.5;
        this.velocity = 0;
        this.width = 100;
        this.height = 140;
        this.x = 50;
        this.y = height - this.height - height / 6;
        this.ground = height - this.height - height / 6;
        this.jumping;
        this.overObstacle = false;
        this.underObstacle = false;
    }
    jump() {
        if (!this.jumping) {
            this.jumping = true;
            this.velocity = -18;
        }
        this.x += 10;
    }
    move() {
        this.x += 100;
    }
    moveBack() {
        this.x -= 25;
    }
    checkEnergies() {
        if (this.energies === 0) {
            console.log('You died');
            window.location.reload();
        }
    }
    draw() {
        // this gets higher with every loop
        this.velocity += this.gravity;

        // this pushes the player down => gravity
        this.y += this.velocity;

        // this makes sure the player does not go through the trunk when under the trunk and jumping
        if (
            this.underObstacle &&
            this.y <= this.underObstacle.y + this.underObstacle.height &&
            this.jumping
        ) {
            this.y = this.underObstacle.y + this.underObstacle.height;
            this.velocity = 1;
        }
        // checks if the player is over the trunk and makes it stay on top of it
        if (
            !this.underObstacle &&
            this.overObstacle &&
            this.y >= this.overObstacle.y - this.height
        ) {
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
                this.x -= trunk.speed;
            } else {
                // this.ground = height - this.height - height / 6;
                this.overObstacle = false;
            }
            // condition for if the player is under the obstacle
            if (
                this.x + this.width >= trunk.x &&
                this.x <= trunk.x + trunk.width &&
                this.y > trunk.y - trunk.height
            ) {
                this.underObstacle = trunk;
            } else {
                this.underObstacle = false;
            }
        });

        // bounces the player back when it hits the top
        if (this.y < 1) {
            this.gravity *= 3;
        }
        // restarts from the beginning of screen when going too forward
        if (this.x < 1 || this.x > width) {
            this.x = 1;
        }

        image(game.playerImage, this.x, this.y, this.width, this.height);
    }
}
