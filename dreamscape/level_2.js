class level_2 extends Phaser.Scene {
  constructor() {
    super({
      key: "level_2",
    });

    // Put global variable here
  }

  preload() {
    // Step 1, load JSON
    //this.load.tilemapTiledJSON("world1", "assets/Tutorial1.json");
    this.load.tilemapTiledJSON("lvl2", "assets/level_2_tiles.tmj");
    // Step 2 : Preload any images here
    this.load.image("background2img", "assets/level_2_bg.png");
    this.load.image("tileset3img", "assets/tileset3.png")
    this.load.image("tileset5img", "assets/tileset5.png")
    //this.load.image("building", "assets/Buildings32x32.png");
    //this.load.image("street", "assets/Street32x32.png");
  }

  create() {
    console.log("lvl2_scene");
    let map = this.make.tilemap({key: "lvl2"})

    this.add.image(6400,320,"background2img")
    
    
    let deco2Tiles = map.addTilesetImage("tileset3","tileset3img")
    let platform2Tiles = map.addTilesetImage("tileset5","tileset5img")

   
    let tilesArray = [deco2Tiles,platform2Tiles];

    this.Hit_snd=this.sound.add("lowtone")
    this.Collect_snd=this.sound.add("hightone")
    this.lvl2sound=this.sound.add('lvl2_bgm',{loop:true}).setVolume(0.3)

    this.platform2Layer = this.physics.add.staticGroup();
    this.platform2Layer = map.createLayer('platform2Layer',tilesArray,0,0);
    this.deco2Layer = map.createLayer('deco2Layer',tilesArray,0,0);

    // Add main player here with physics.add.sprite
    var startPoint = map.findObject("object2Layer",(obj) => obj.name === "start")
    var bee2_1 = map.findObject("object2Layer",(obj) => obj.name ==="bee2-1")
    var bee2_2 = map.findObject("object2Layer",(obj) => obj.name ==="bee2-2")
    var bee2_3 = map.findObject("object2Layer",(obj) => obj.name ==="bee2-3")
    
    var slug2_1 = map.findObject("object2Layer",(obj) => obj.name ==="slug2-1")
    var slug2_2 = map.findObject("object2Layer",(obj) => obj.name ==="slug2-2")
    var slug2_3 = map.findObject("object2Layer",(obj) => obj.name ==="slug2-3")

    var flower2_1 = map.findObject("object2Layer",(obj) => obj.name ==="item2-1")
    var flower2_2 = map.findObject("object2Layer",(obj) => obj.name ==="item2-2")
    var flower2_3 = map.findObject("object2Layer",(obj) => obj.name ==="item2-3")
    var flower2_4 = map.findObject("object2Layer",(obj) => obj.name ==="item2-4")
    var flower2_5 = map.findObject("object2Layer",(obj) => obj.name ==="item2-5")
    var flower2_6 = map.findObject("object2Layer",(obj) => obj.name ==="item2-6")
    var flower2_7 = map.findObject("object2Layer",(obj) => obj.name ==="item2-7")
    var flower2_8 = map.findObject("object2Layer",(obj) => obj.name ==="item2-8")
    var flower2_9 = map.findObject("object2Layer",(obj) => obj.name ==="item2-9")
    var flower2_10 = map.findObject("object2Layer",(obj) => obj.name ==="item2-10")
    var flower2_11 = map.findObject("object2Layer",(obj) => obj.name ==="item2-11")

    this.add.text(50, 550, 'I have been wondering for what felt like hours', { font: '18px Courier', fill: '#edd4ff' });
    this.add.text(50, 575, 'but this time its different,', { font: '18px Courier', fill: '#edd4ff' });
    this.add.text(50, 600, 'the scenery is unrecognisable from the previous one', { font: '18px Courier', fill: '#edd4ff' });
    this.add.text(4500, 510, 'Do I even have a family to go back to?', { font: '18px Courier', fill: '#dca9ff' });
    this.add.text(7040, 250, 'But it feels nice here. I would not want to wake up.', { font: '18px Courier', fill: '#ba7bd6' });
    this.add.text(9200, 160, 'what if reality is worse than this', { font: '18px Courier', fill: '#dca9ff' });
    this.add.text(10190, 415, 'What if life gets too hard again?', { font: '18px Courier', fill: '#dca9ff' });
    this.add.text(12450, 150, 'I miss them', { font: '18px Courier', fill: '#dca9ff' });

    this.player = this.physics.add.sprite(startPoint.x,startPoint.y,"mc")
    this.enemyPoint6=this.physics.add.sprite(bee2_1.x, bee2_1.y,'bee').play('bee-move')
    this.enemyPoint7=this.physics.add.sprite(bee2_2.x, bee2_2.y,'bee').play('bee-move')
    this.enemyPoint8=this.physics.add.sprite(bee2_3.x, bee2_3.y,'bee').play('bee-move')

    this.enemyPoint9=this.physics.add.sprite(slug2_1.x, slug2_1.y,'slug').play('slug-move')
    this.enemyPoint10=this.physics.add.sprite(slug2_2.x, slug2_2.y,'slug').play('slug-move')
    this.enemyPoint11=this.physics.add.sprite(slug2_3.x, slug2_3.y,'slug').play('slug-move')

    this.itemPoint12=this.physics.add.sprite(flower2_1.x, flower2_1.y,'item2')
    this.itemPoint13=this.physics.add.sprite(flower2_2.x, flower2_2.y,'item2')
    this.itemPoint14=this.physics.add.sprite(flower2_3.x, flower2_3.y,'item2')
    this.itemPoint15=this.physics.add.sprite(flower2_4.x, flower2_4.y,'item2')
    this.itemPoint16=this.physics.add.sprite(flower2_5.x, flower2_5.y,'item2')
    this.itemPoint17=this.physics.add.sprite(flower2_6.x, flower2_6.y,'item2')
    this.itemPoint18=this.physics.add.sprite(flower2_7.x, flower2_7.y,'item2')
    this.itemPoint19=this.physics.add.sprite(flower2_8.x, flower2_8.y,'item2')
    this.itemPoint20=this.physics.add.sprite(flower2_9.x, flower2_9.y,'item2')
    this.itemPoint21=this.physics.add.sprite(flower2_10.x, flower2_10.y,'item2')
    this.itemPoint22=this.physics.add.sprite(flower2_11.x, flower2_11.y,'item2')
    this.player.setScale(2)
    this.player.setCollideWorldBounds(true);
    window.player = this.player;
    this.flowernum=this.add.text(50,50,window.flower,{font:'20px Courier',fill:'#ffffff'}).setScrollFactor(0);
    this.physics.world.bounds.width =this.platform2Layer.width;
    this.physics.world.bounds.height =this.platform2Layer.height;

    // Add time event / movement here
    this.timedEvent = this.time.addEvent({
      delay: 1000,
      callback: this.moving_sides6,
      callbackScope: this,
      loop: false
    })
    this.timedEvent = this.time.addEvent({
      delay: 1000,
      callback: this.moving_sides7,
      callbackScope: this,
      loop: false
    })
    this.timedEvent = this.time.addEvent({
      delay: 1000,
      callback: this.moving_sides8,
      callbackScope: this,
      loop: false
    })
    this.timedEvent = this.time.addEvent({
      delay: 1000,
      callback: this.moving_sides9,
      callbackScope: this,
      loop: false
    })
    this.timedEvent = this.time.addEvent({
      delay: 1000,
      callback: this.moving_sides10,
      callbackScope: this,
      loop: false
    })
    this.timedEvent = this.time.addEvent({
      delay: 1000,
      callback: this.moving_sides11,
      callbackScope: this,
      loop: false
    })
    this.timedEvent = this.time.addEvent({
      delay: 1000,
      callback: this.lvl2soundplay,
      callbackScope: this,
      loop: false,
    })
    // get the tileIndex number in json, +1
    //mapLayer.setTileIndexCallback(11, this.room1, this);

    // Add custom properties in Tiled called "mouintain" as bool

    // What will collider witg what layers
    //this.physics.add.collider(mapLayer, this.player);
    this.physics.add.collider(this.platform2Layer,this.player)

    this.physics.add.overlap(this.player,[this.enemyPoint6,this.enemyPoint7,this.enemyPoint8,this.enemyPoint9,this.enemyPoint10,this.enemyPoint11],this.hit_enemy,null,this);
    this.physics.add.overlap(this.player,[this.itemPoint12,this.itemPoint13,this.itemPoint14,this.itemPoint15,this.itemPoint16,this.itemPoint17,this.itemPoint18,this.itemPoint19,this.itemPoint20,this.itemPoint21,this.itemPoint22],this.collect_flowers,null,this);
    this.platform2Layer.setCollisionByExclusion(-1,true)
    // create the arrow keys
    this.cursors = this.input.keyboard.createCursorKeys();

    // camera follow player
    this.cameras.main.startFollow(this.player);

    //set boundary sp camera won't go outside the game world
    this.cameras.main.setBounds(0,0, map.widthInPixels, map.heightInPixels);

  
    // // Show colliding tiles as different colours

    // const debugGraphics = this.add.graphics().setAlpha(0.75);

    // this.platformLayer.renderDebug(debugGraphics, {
    // tileColor: null, 
    // // Color of non-colliding tiles
    // collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255), // Color of colliding tiles
    // faceColor: new Phaser.Display.Color(40, 39, 37, 255) // Color of colliding face edges
    // });
    
  } /////////////////// end of create //////////////////////////////

  update(){
    if(this.player.y>604)
    {
      this.gameOver2()
    }
    if(this.player.y<35)
    {
      this.gameOver2()
    }
    if(this.player.x>12734.10)
    {
      this.level_3()
    }
    if (this.cursors.left.isDown)
    {
        console.log("left")
        this.player.setVelocityX(-250);
        this.player.anims.play('walk-left', true);
    }
    else if (this.cursors.right.isDown)
    {
        console.log("right")
        this.player.setVelocityX(250);
        this.player.anims.play('walk-right', true);
    }
    else
    {
        this.player.setVelocity(0);
        this.player.setVelocityY(200)
        this.player.anims.play('idle',true)
    }
    if (this.cursors.up.isDown)
    {
        console.log("up")
        this.player.setVelocityY(-200)
        this.player.anims.play('jump-right', true);
    }
    if (this.cursors.up.isDown&&this.cursors.right.isDown)
    {
        console.log("up-right")
        this.player.setVelocityX(160);
        this.player.setVelocityY(-200)
        this.player.anims.play('jump-right', true);
    }
    if (this.cursors.up.isDown&&this.cursors.left.isDown)
    {
        console.log("up-left")
        this.player.setVelocityX(-160);
        this.player.setVelocityY(-200)
        this.player.anims.play('jump-left', true);
    }
   
} /////////////////// end of update //////////////////////////////
moving_sides6(){
  console.log("moving-sides6")
  this.tweens.timeline({
    targets: this.enemyPoint6,
    loop:-1,
    ease:"Linear",
    duration: 5000,
    tweens:[
      {
        x:5528,
      },
      {
        x:5938,
      }
    ],
  });
}
moving_sides7(){
  console.log("moving-sides7")
  this.tweens.timeline({
    targets: this.enemyPoint7,
    loop:-1,
    ease:"Linear",
    duration: 5000,
    tweens:[
      {
        x:6578,
      },
      {
        x:7625,
      }
    ],
  });
}
moving_sides8(){
  console.log("moving-sides8")
  this.tweens.timeline({
    targets: this.enemyPoint8,
    loop:-1,
    ease:"Linear",
    duration: 5000,
    tweens:[
      {
        x:3957,
      },
      {
        x:4576,
      }
    ],
  });
}
moving_sides9(){
  console.log("moving-sides9")
  this.tweens.timeline({
    targets: this.enemyPoint9,
    loop:-1,
    ease:"Linear",
    duration: 5000,
    tweens:[
      {
        x:4942,
      },
      {
        x:5294,
      }
    ],
  });
}
moving_sides10(){
  console.log("moving-sides10")
  this.tweens.timeline({
    targets: this.enemyPoint10,
    loop:-1,
    ease:"Linear",
    duration: 5000,
    tweens:[
      {
        x:7578,
      },
      {
        x:7977,
      }
    ],
  });
}
moving_sides11(){
  console.log("moving-sides11")
  this.tweens.timeline({
    targets: this.enemyPoint11,
    loop:-1,
    ease:"Linear",
    duration: 5000,
    tweens:[
      {
        x:10024,
      },
      {
        x:10388,
      }
    ],
  });
}
level_3(){
  console.log("next_scene")
  this.lvl2sound.setVolume(0);
  this.scene.start("level_3")
}
gameOver2(){
  this.Hit_snd.play();
  this.lvl2sound.setVolume(0);
  this.scene.start("gameOver2")
}
hit_enemy(player,enemy){
  console.log("hit")
  enemy.disableBody(true,true);
  this.gameOver2();
}
collect_flowers(player,item){
  console.log("collect")
  window.flower++
  this.flowernum.setText(window.flower)
  console.log("window.flower",window.flower)
  item.disableBody(true,true);
  this.Collect_snd.play()
}
lvl2soundplay(){
  this.lvl2sound.play();
  return null;
}
} //////////// end of class world ////////////////////////
