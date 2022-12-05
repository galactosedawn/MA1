var config = {
    type: Phaser.AUTO,
    width: 32*20,
    height: 32*20,
    /////////////////////////////////////
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
    //////////////////////scene: [preloadscene, gameScene,EndScene]//////////////////////
}
var game = new Phaser.Game(config);