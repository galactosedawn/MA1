var config = {
    type: Phaser.AUTO,
    ////// pixel size * tile map size 
    width: 32 * 40,
    height: 32 * 20,
    /////////////////////////////////////////
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    backgroundColor: '#000000',
    pixelArt: true,
    //// Add all scenes below in the array
    scene: [preloadScene, gameScene, endScene]
};

var game = new Phaser.Game(config);



