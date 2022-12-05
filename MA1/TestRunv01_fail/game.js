﻿var config = {
    type: Phaser.AUTO,
    // pixel size * tile map size * zoom 
    width: 25 * 32,
    height: 25 * 32,
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
    scene: [preloadScene,main, world, room1]
};

var game = new Phaser.Game(config);