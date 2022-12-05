
class animationScene extends Phaser.Scene {
    constructor ()
    {
        super({ key: 'animationScene' });
    }

    preload() {
        this.load.tilemapTiledJSON('world', 'assets/tilemap.level_1_test_2.tmj')
        this.load.spritesheet('mc', 'assets/mc.png',{ frameWidth:32, frameHeight:32 });
        // this.load.spritesheet('fire','assets/fire.png',{frameWidth:40, frameHeight:70}) 
        // this.load.spritesheet('monkid','assets/monkid.png',{frameWidth:72, frameHeight:72}) 
        // this.load.spritesheet('mouse','assets/mouse.png',{frameWidth:320, frameHeight:320}) 

        this.load.image('lvl1bgimg','assets/level_1_bg.png')
        this.load.image('lvl1platformimg','assets/level_1_platform.png',)
    } // end of preload //

    create (){

    console.log("animationScene")

    this.anims.create({
        key:'walk_left',
        frames:this.anims.generateFrameNumbers('mc',
        { start:0, end:3 }),
        frameRate:5,
        repeat:-1
    });
    
    this.anims.create({
        key:'walk_right',
        frames:this.anims.generateFrameNumbers('mc',
        { start:4, end:6 }),
        frameRate:5,
        repeat:-1
    });

    this.anims.create({
        key:'jump_left',
        frames:this.anims.generateFrameNumbers('mc',
        { start:7, end:9 }),
        frameRate:5,
        repeat:-1
    });

    this.anims.create({
        key:'jump_right',
        frames:this.anims.generateFrameNumbers('mc',
        { start:10, end:12 }),
        frameRate:5,
        repeat:-1
    });

    // this.anims.create({
    //     key:'walkback',
    //     frames:this.anims.generateFrameNumbers('monkid',
    //     { start:3, end:5 }),
    //     frameRate:10,
    //     repeat:-1
    // });

    // this.anims.create({
    //     key:'walkfront',
    //     frames:this.anims.generateFrameNumbers('monkid',
    //     { start:6, end:8 }),
    //     frameRate:10,
    //     repeat:-1
    // });

    // this.anims.create({
    //     key:'walkright',
    //     frames:this.anims.generateFrameNumbers('monkid',
    //     { start:9, end:11 }),
    //     frameRate:10,
    //     repeat:-1
    // });

    // this.anims.create({
    //     key:'dance',
    //     frames:this.anims.generateFrameNumbers('mouse',
    //     { start:0, end:11 }),
    //     frameRate:10,
    //     repeat:-1
    // });

    this.add.sprite(100, 100, 'mc')
    
    // this.add.sprite(200, 100, 'coin').setScale(2)
    // this.add.sprite(300, 100, 'coin').setScale(4)
    // this.add.sprite(500,500, 'mouse').play('dance')

    this.add.sprite(500,500, 'mc').play('jump_left')

    // this.add.sprite(100, 300, 'coin').play('fast_spin')
    // this.add.sprite(200, 300, 'coin').play('spin')
    // this.add.sprite(100,400,'monkid').play('walkleft')
    // this.add.sprite(200,400,'monkid').play('walkback')
    // this.add.sprite(300,400,'monkid').play('walkfront')
    // this.add.sprite(400,400,'monkid').play('walkright')

    // this.fireGroup = this.add.group({     key: 'fire',     repeat: 10,     setXY: { x: 50, y: 50, stepX: 100 } }); 
    // this.fireGroup.children.iterate(c=>{
    //     c.play('burn').setScale(2)
    // })

    // this.add.sprite(100,200, 'fire').play('burn')
    // this.add.sprite(200,200, 'fire').play('burn')
    // this.add.sprite(300,200, 'fire').play('burn')
    // this.add.sprite(400,200, 'fire').play('burn')
    // this.add.sprite(500,200, 'fire').play('burn')
    // this.add.sprite(200, 300, 'coin').setScale(2).play('spin')
    // this.add.sprite(300, 300, 'coin').setScale(4).play('spin')

    } // end of create //

    update () {

    } // end of update // 
}