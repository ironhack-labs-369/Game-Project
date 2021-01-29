const game = new Game();

function preload() {
    game.preload();
}
function setup() {
    createCanvas(windowWidth, windowHeight);
    // canvas.parent('canvas');
    scoreBoard = createGraphics(300, 100);
    scoreBoard.clear();

    game.setup();
}
function draw() {
    game.draw();
    image(scoreBoard, 0, 0);
}
function keyPressed() {
    if (keyCode === UP_ARROW || keyCode === 32) {
        game.player.jump();
    }
    if (keyCode === RIGHT_ARROW) {
        game.player.move();
    }
    if (keyCode === LEFT_ARROW) {
        game.player.moveBack();
    }
}
function startGame() {
    document.querySelector('.btn').addEventListener('click', () => {
        document.querySelector('#canvas').classList.remove('hidden');
        document.querySelector('header').classList.add('hidden');
        draw();
    });
}
