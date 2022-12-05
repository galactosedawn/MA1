
class animationScene extends Phaser.Scene {
    constructor ()
    {
        super({ key: 'animationScene' });
    }

    preload() {

        this.load.spritesheet('coin', 'assets/coin.png',{ frameWidth:32, frameHeight:32 });
        this.load.spritesheet('fire','assets/fire.png',{frameWidth:40, frameHeight:70}) 
        this.load.spritesheet('monkid','assets/monkid.png',{frameWidth:72, frameHeight:72}) 
        this.load.spritesheet('mouse','assets/mouse.png',{frameWidth:320, frameHeight:320}) 
    } // end of preload //

    create (){

    console.log("animationScene")

    this.anims.create({
        key:'spin',
        frames:this.anims.generateFrameNumbers('coin',
        { start:0, end:5 }),
        frameRate:10,
        repeat:-1
    });
    
    this.anims.create({
        key:'fast_spin',
        frames:this.anims.generateFrameNumbers('coin',
        { start:0, end:5 }),
        frameRate:30,
        repeat:-1
    });

    this.anims.create({
        key:'burn',
        frames:this.anims.generateFrameNumbers('fire',
        { start:0, end:3 }),
        frameRate:10,
        repeat:-1
    });

    this.anims.create({
        key:'walkleft',
        frames:this.anims.generateFrameNumbers('monkid',
        { start:0, end:2 }),
        frameRate:10,
        repeat:-1
    });
    this.anims.create({
        key:'walkback',
        frames:this.anims.generateFrameNumbers('monkid',
        { start:3, end:5 }),
        frameRate:10,
        repeat:-1
    });
    this.anims.create({
        key:'walkfront',
        frames:this.anims.generateFrameNumbers('monkid',
        { start:6, end:8 }),
        frameRate:10,
        repeat:-1
    });
    this.anims.create({
        key:'walkright',
        frames:this.anims.generateFrameNumbers('monkid',
        { start:9, end:11 }),
        frameRate:10,
        repeat:-1
    });
    this.anims.create({
        key:'dance',
        frames:this.anims.generateFrameNumbers('mouse',
        { start:0, end:11 }),
        frameRate:10,
        repeat:-1
    });
    this.add.sprite(100, 100, 'coin')
    
    // this.add.sprite(200, 100, 'coin').setScale(2)
    // this.add.sprite(300, 100, 'coin').setScale(4)
    this.add.sprite(500,500, 'mouse').play('dance')
    this.add.sprite(100, 300, 'coin').play('fast_spin')
    this.add.sprite(200, 300, 'coin').play('spin')
    this.add.sprite(100,400,'monkid').play('walkleft')
    this.add.sprite(200,400,'monkid').play('walkback')
    this.add.sprite(300,400,'monkid').play('walkfront')
    this.add.sprite(400,400,'monkid').play('walkright')
    this.fireGroup = this.add.group({     key: 'fire',     repeat: 10,     setXY: { x: 50, y: 50, stepX: 100 } }); 
    this.fireGroup.children.iterate(c=>{
        c.play('burn').setScale(2)
    })

    this.add.sprite(100,200, 'fire').play('burn')
    this.add.sprite(200,200, 'fire').play('burn')
    this.add.sprite(300,200, 'fire').play('burn')
    this.add.sprite(400,200, 'fire').play('burn')
    this.add.sprite(500,200, 'fire').play('burn')
    // this.add.sprite(200, 300, 'coin').setScale(2).play('spin')
    // this.add.sprite(300, 300, 'coin').setScale(4).play('spin')


    } // end of create //

    update () {

    } // end of update // 
}