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
    if (keyCode === UP_ARROW) {
        game.player.jump();
    }
    if (keyCode === RIGHT_ARROW) {
        game.player.move();
    }
    if (keyCode === LEFT_ARROW) {
        game.player.moveBack();
    }
}
