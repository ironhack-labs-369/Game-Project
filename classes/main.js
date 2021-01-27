const game = new Game();

function preload() {
    game.preload();
}
function setup() {
    createCanvas(windowWidth, windowHeight);

    game.setup();
}
function draw() {
    game.draw();
}
function keyPressed() {
    if (keyCode === 32) {
        game.player.jump();
    }
    if (keyCode === 39) {
        game.player.move();
    }
    if (keyCode === 37) {
        game.player.moveBack();
    }
}
