class preloadScene extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'preloadScene' });
    }

create () {
    // // this.mapmade with Tiled in JSON format
    this.load.tilemapTiledJSON('map', 'assets/level_1_test_2.tmj');
    // // tiles in spritesheet 
    // this.load.spritesheet('tiles', 'assets/tiles.png', {frameWidth: 70, frameHeight: 70});
    // // simple coin image
    // this.load.image('coin', 'assets/coinGold.png');

    this.load.image('bgimg','level_1_bg.png');
    this.load.image('platformimg','level_1_platform.png');

    ///HELL ON FIRE IMAGES??
    // this.load.image('seaimg', 'assets/sea.png');
    // this.load.image('skyimg', 'assets/sky.png');
    // this.load.image('cloudimg', 'assets/cloud bg.png');
    // this.load.image('farlandsimg', 'assets/far-grounds bg.png');
    // this.load.image('platformimg', 'assets/collide blocks.png');
    // this.load.image('lvl1tilesetimg', 'assets/level 1 tileset.png');
    // this.load.image('space1img', 'assets/space bg 1.png');
    // this.load.image('space2img', 'assets/space bg 2.png');
    // this.load.image('space3img', 'assets/space bg 3.png');
    // this.load.image('space4img', 'assets/space bg 4.png');
    // this.load.image('forestmidimg','assets/middle forest bg.png')
    // this.load.image('forestbackimg','assets/back forest bg.png')
    // this.playeranimations
    //this.load.atlas('player', 'assets/player.png', 'assets/player.json');
    // this.load.atlas('girl', 'assets/girl.png', 'assets/girl.json');

    // // Anna is 64x64 9 frames per animation
    // this.load.spritesheet('girl', 'assets/anna.png', {frameWidth: 64, frameHeight: 64});

    // this.load.spritesheet('fire', 'assets/fire.png',{ frameWidth:40, frameHeight:70 });
}

create() {

    this.add.text(10, 10, 'This is preload Scene', { font: '24px Courier', fill: '#FFFF00' });
    this.add.text(10, 34, 'Click or space to continue', { font: '24px Courier', fill: '#FFFF00' });

    var spaceDown = this.input.keyboard.addKey('SPACE');
        
    this.input.on('pointerdown', function (pointer) {
        this.scene.start("level1");
        }, this);

    spaceDown.on('down', function(){
        console.log("Spacebar pressed, go to level1");
        this.scene.start("level1");
        }, this );

     this.anims.create({
            key:'walk-left',
            frames:this.anims.generateFrameNumbers('mc',
            { start:0, end:3 }),
            frameRate:5,
            repeat:-1
        });
        
     this.anims.create({
            key:'walk-right',
            frames:this.anims.generateFrameNumbers('mc',
            { start:4, end:6 }),
            frameRate:5,
            repeat:-1
        });
    
     this.anims.create({
            key:'jump-left',
            frames:this.anims.generateFrameNumbers('mc',
            { start:7, end:9 }),
            frameRate:5,
            repeat:-1
        });
    
     this.anims.create({
            key:'jump-right',
            frames:this.anims.generateFrameNumbers('mc',
            { start:10, end:12 }),
            frameRate:5,
            repeat:-1
        });


}

} // end of class