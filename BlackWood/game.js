var config = {
    type: Phaser.AUTO,
    // pixel size * tile map size * zoom 
    width: 32 * 30,
    height: 32 * 20,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: false,
            debug: true
        }
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    backgroundColor: '#000000',
    pixelArt: true,
    scene: [preload, main, storyline, character, room1intro, room2intro, room3intro, world, room1, room2, room3, gameOver, win, showInventory]
};

var game = new Phaser.Game(config);
window.heart = 3
window.key = 0
window.journal = 0
window.bow = 0
window.pam = 0