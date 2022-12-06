class preload extends Phaser.Scene {

    constructor() {
        super({
            key: 'preload'
        });

        // Put global variable here
    
    }

    preload() {

        // Preload all the assets here

        // Preload any images here
        this.load.spritesheet("mc","assets/mc.png",{frameWidth:32,frameHeight:32})
        this.load.spritesheet("bee","assets/bee.png",{frameWidth:74,frameHeight:78})
        this.load.spritesheet("slug","assets/slug.png",{frameWidth:64,frameHeight:42})
        this.load.spritesheet("mainpage","assets/mainpage.png",{frameWidth:800,frameHeight:640})
        this.load.spritesheet("lastdoor","assets/lastdoor.png",{frameWidth:50,frameHeight:50})
        this.load.spritesheet("goodending","assets/goodending.png",{frameWidth:800,frameHeight:640})

        this.load.image("item1","assets/lvl1_item.png")
        this.load.image("item2","assets/lvl2_item.png")
        this.load.image("item3","assets/lvl3_item.png")
       
        this.load.image("gameover","assets/gameover.png")
        this.load.image("gameover2","assets/gameover2.png")
        this.load.image("gameover3","assets/gameover3.png")

        this.load.image("end0img","assets/end0.png")
        this.load.image("end1img","assets/end1.png")
        this.load.image("end2img","assets/end2.png")
        this.load.image("end3img","assets/end3.png")
        this.load.image("end4img","assets/end4.png")
        this.load.image("end5img","assets/end5.png")
        this.load.image("end6img","assets/end6.png")
        this.load.image("end7img","assets/end7.png")
        this.load.image("continueimg","assets/press [space bar] to continue_.png")

        this.load.image("threatimg","assets/threat.png")

        this.add.image('bs1',"assets/bs-1.png")
        this.add.image('bs2',"assets/bs-2.png")
        this.add.image('bs3',"assets/bs-3.png")
        this.add.image('bs4',"assets/bs-4.png")
        this.add.image('bs5',"assets/bs-5.png")
        this.add.image('bs6',"assets/bs-6.png")
        this.add.image('bs7',"assets/bs-7.png")

        // Preload any sound and music here
        this.load.audio('lowtone','assets/lowtone.wav')
        this.load.audio('hightone','assets/hightone.wav')

        this.load.audio('lvl1_bgm', 'assets/level 1 cinematic-documentary-115669.mp3');
        this.load.audio('lvl2_bgm', 'assets/level 2 ancient-wind-112528.mp3');
        this.load.audio('lvl3_bgm', 'assets/level 3 inspiring-cinematic-ambient-116199.mp3');
        
        this.load.audio('ending1_bgm', 'assets/memories-118996++++intended ending+++.mp3');
        this.load.audio('ending2_bgm', 'assets/sleepy-cat-118974+++bonus ending+++.mp3');
        this.load.audio('ending3_bgm','assets/split-screen-awoke-119111++++level 3 gameover++++.mp3')
    }

    create() {

        console.log('main scene');

        // Add image and detect spacebar keypress
        //this.add.image(0, 0, 'main').setOrigin(0, 0);

        // Check for spacebar or any key here
        var spaceDown = this.input.keyboard.addKey('SPACE');

        // On spacebar event, call the world scene        
        spaceDown.on('down', function () {
            console.log('keyboard controls page');

            this.scene.start('instruction',
                // Optional parameters
                {

                }
            );
        }, this);

        // Create all the game animations here
    this.anims.create({
        key: "titlescene",
        frames: this.anims.generateFrameNumbers("mainpage", { start: 0, end: 1 }),
        frameRate: 2,
        repeat: -1,
        });
    

     this.anims.create({
        key: "slug-move",
        frames: this.anims.generateFrameNumbers("slug", { start: 0, end: 3 }),
        frameRate: 5,
        repeat: -1,
        });
        
      this.anims.create({
        key: "bee-move",
        frames: this.anims.generateFrameNumbers("bee", { start: 0, end: 6 }),
        frameRate: 5,
        repeat: -1,
        });

      this.anims.create({
        key: "walk-left",
        frames: this.anims.generateFrameNumbers("mc", { start: 1, end: 3 }),
        frameRate: 5,
        repeat: -1,
        });
  
        this.anims.create({
        key: "idle",
        frames: this.anims.generateFrameNumbers("mc", { start: 0, end: 0 }),
        frameRate: 5,
        repeat: -1,
        });
  
        this.anims.create({
        key: "walk-right",
        frames: this.anims.generateFrameNumbers("mc", { start: 4, end: 6 }),
        frameRate: 5,
        repeat: -1,
        });
    
        this.anims.create({
        key: "jump-left",
        frames: this.anims.generateFrameNumbers("mc", { start: 7, end: 9 }),
        frameRate: 5,
        repeat: -1,
        });
    
        this.anims.create({
        key: "jump-right",
        frames: this.anims.generateFrameNumbers("mc", { start: 10, end: 12 }),
        frameRate: 5,
        repeat: -1,
        });

        this.anims.create({
        key: "door-glow",
        frames: this.anims.generateFrameNumbers("lastdoor", { start: 0, end: 1 }),
        frameRate: 2,
        repeat: -1,
        });

        // this.anims.create({
        // key: "ending-play",
        // frames: this.anims.generateFrameNumbers("goodending", { start: 0, end: 5 }),
        // frameRate: 1,
        // repeat: -1,
        // });
    
        // Add any text in the main page
        this.add.sprite(400,320,"mainpage").play("titlescene")
    
    }
}
