class Background {
    constructor() {
        this.mx = 0;
        this.ground = 'grass';
    }
    // if (frameCount % 10000 == 0) {
    //     if (this.ground == 'grass') {
    //         this.ground = 'water';
    //         noLoop();
    //     } else if (this.ground == 'water') {
    //         this.ground = 'grass';
    //         noLoop();
    //     }
    //     this.changeGround();
    //     frameCount = 0;
    // }
    changeGround() {
        if (this.ground == 'grass') {
            game.grassImages.forEach((img) => {
                img.x -= img.speed;
                img.y = 0;
                image(img.src, img.x, height - height / 6, width, height / 6);
                image(
                    img.src,
                    img.x + width,
                    height - height / 6,
                    width,
                    height / 6
                );
                if (img.x <= -width) {
                    img.x = 0;
                }
            });
        } else if (this.ground == 'water') {
            game.waterImages.forEach((img) => {
                img.x -= img.speed;
                img.y = 0;
                image(img.src, img.x, height - height / 6, width, height / 6);
                image(
                    img.src,
                    img.x + width,
                    height - height / 6,
                    width,
                    height / 6
                );
                if (img.x <= -width) {
                    img.x = 0;
                }
            });
        }
    }

    draw() {
        game.backgroundImages.forEach((img) => {
            // here we use the speed property of the image instead of
            // a specific value so that every image moves at a different speed
            img.x -= img.speed;
            img.y = height / 6;
            image(img.src, img.x, 0, width, height - img.y);
            // this puts a second image after the first
            image(img.src, img.x + width, 0, width, height - img.y);
            // if the image leaves the screen we set it back to it's starting
            // position
            if (img.x <= -width) {
                img.x = 0;
            }
        });

        this.changeGround();

        // setTimeout(() => {
        //     if (this.ground == 'grass') this.ground = 'water';
        //     else if (this.ground == 'water') this.ground = 'grass';
        //     this.changeGround();
        // }, 10000);
    }
}
