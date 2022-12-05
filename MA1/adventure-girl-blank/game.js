var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 800,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: false,
            debug: true
        }
    },
    scale: {
        mode: Phaser.Scale.NONE,
        //mode: Phaser.Scale.FIT,
        //autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [ preloadScene, level1 ]
}
var game = new Phaser.Game(config);