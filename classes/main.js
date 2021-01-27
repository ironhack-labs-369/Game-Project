const game = new Game();

function preload() {
    game.preload();
}
function setup() {
    createCanvas(windowWidth, windowHeight);
    scoreBoard = createGraphics(300, 100);
    scoreBoard.background('#000');
    scoreBoard.clear();

    game.setup();
}
function draw() {
    game.draw();
    image(scoreBoard, 0, 0);
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
