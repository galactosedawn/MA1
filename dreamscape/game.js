var config = {
    type: Phaser.AUTO,
    // pixel size * tile map size * zoom 
    width: 32 * 25,
    height: 32 * 20
    ,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 100},
            debug: false
        }
    },
    // scale: {
    //     mode: Phaser.Scale.FIT,
    //     autoCenter: Phaser.Scale.CENTER_BOTH
    // },
    backgroundColor: '#000000',
    pixelArt: true,
    scene: [main, level_1,level_2,level_3, preloadScene]
};

var game = new Phaser.Game(config);