class level_3 extends Phaser.Scene {
  constructor() {
    super({
      key: "level_3",
    });

    // Put global variable here
  }

  preload() {

    this.load.tilemapTiledJSON("lvl3", "assets/level_3_tiles.tmj");
  
    this.music = this.sound.add('lvl3_bgm').setVolume(0.3)
    this.load.image("background3img", "assets/level_3_bg.png");
    this.load.image("tileset4img", "assets/tileset4.png")
    this.load.image("tileset6img", "assets/tileset6.png")
  }

  create() {
    console.log("lvl3_scene");
    

    let map = this.make.tilemap({key: "lvl3"})

    this.add.image(6400,320,"background3img");
    // Step 4 Load the game tiles
    // 1st parameter is name in Tiled,
    // 2nd parameter is key in Preload
    //let buildingTiles = map.addTilesetImage("Buildings32x32", "building");
    //let streetTiles = map.addTilesetImage("Street32x32", "street");

    this.Hit_snd=this.sound.add("lowtone")
    this.Collect_snd=this.sound.add("hightone")
    this.lvl3sound=this.sound.add('lvl3_bgm',{loop:true}).setVolume(0.3)

    let deco3Tiles = map.addTilesetImage("tileset6","tileset6img");
    let platform3Tiles = map.addTilesetImage("tileset4","tileset4img");

    // Step 5  create an array of tiles
    // let tilesArray = [
    //   buildingTiles,
    //   streetTiles,
    // ];
    let tilesArray = [deco3Tiles,platform3Tiles];
    // Step 6  Load in layers by layers
    //this.groundLayer = map.createLayer("groundLayer",tilesArray,0,0);
    //this.streetLayer = map.createLayer("streetLayer",tilesArray,0,0);
    //this.buildingLayer = map.createLayer("buildingLayer",tilesArray,0,0);

    this.platform3Layer = this.physics.add.staticGroup();
    this.platform3Layer = map.createLayer('platform3Layer',tilesArray,0,0);
    this.deco3Layer = map.createLayer('deco3Layer',tilesArray,0,0);
    this.add.sprite(12572,500,'lastdoor').play('door-glow').setScale(2);
    // Add main player here with physics.add.sprite
    var startPoint = map.findObject("object3Layer",(obj) => obj.name === "start");
    var bee3_1 = map.findObject("object3Layer",(obj) => obj.name ==="bee3-1")
    var bee3_2 = map.findObject("object3Layer",(obj) => obj.name ==="bee3-2")
    var bee3_3 = map.findObject("object3Layer",(obj) => obj.name ==="bee3-3")
    var bee3_4 = map.findObject("object3Layer",(obj) => obj.name ==="bee3-4")

    var slug3_1 = map.findObject("object3Layer",(obj) => obj.name ==="slug3-1")
    var slug3_2 = map.findObject("object3Layer",(obj) => obj.name ==="slug3-2")
    var slug3_3 = map.findObject("object3Layer",(obj) => obj.name ==="slug3-3")
    var slug3_4 = map.findObject("object3Layer",(obj) => obj.name ==="slug3-4")

    var flower3_1 = map.findObject("object3Layer",(obj) => obj.name ==="item3-1")
    var flower3_2 = map.findObject("object3Layer",(obj) => obj.name ==="item3-2")
    var flower3_3 = map.findObject("object3Layer",(obj) => obj.name ==="item3-3")
    var flower3_4 = map.findObject("object3Layer",(obj) => obj.name ==="item3-4")
    var flower3_5 = map.findObject("object3Layer",(obj) => obj.name ==="item3-5")
    var flower3_6 = map.findObject("object3Layer",(obj) => obj.name ==="item3-6")
    var flower3_7 = map.findObject("object3Layer",(obj) => obj.name ==="item3-7")
    var flower3_8 = map.findObject("object3Layer",(obj) => obj.name ==="item3-8")
    var flower3_9 = map.findObject("object3Layer",(obj) => obj.name ==="item3-9")
    var flower3_10 = map.findObject("object3Layer",(obj) => obj.name ==="item3-10")
    var flower3_11 = map.findObject("object3Layer",(obj) => obj.name ==="item3-11")
    var flower3_12 = map.findObject("object3Layer",(obj) => obj.name ==="item3-12")
    var flower3_13 = map.findObject("object3Layer",(obj) => obj.name ==="item3-13")
    var flower3_14 = map.findObject("object3Layer",(obj) => obj.name ==="item3-14")
    var flower3_15 = map.findObject("object3Layer",(obj) => obj.name ==="item3-15")

    this.add.text(250, 350, '... I do not like this', { font: '18px Courier', fill: '#dca9ff' });
    this.add.image(1850,150,'threatimg')
    this.add.text(1850,275,'...Huh?', { font: '18px Courier', fill: '#dca9ff' })
    this.add.text(12255,500,'I choose...',{ font: '18px Courier', fill: '#dca9ff' })

    this.player = this.physics.add.sprite(startPoint.x,startPoint.y,"mc");
    this.enemyPoint12=this.physics.add.sprite(bee3_1.x, bee3_1.y,'bee').play('bee-move')
    this.enemyPoint13=this.physics.add.sprite(bee3_2.x, bee3_2.y,'bee').play('bee-move')
    this.enemyPoint14=this.physics.add.sprite(bee3_3.x, bee3_3.y,'bee').play('bee-move')
    this.enemyPoint15=this.physics.add.sprite(bee3_4.x, bee3_4.y,'bee').play('bee-move')

    this.enemyPoint16=this.physics.add.sprite(slug3_1.x, slug3_1.y,'slug').play('slug-move')
    this.enemyPoint17=this.physics.add.sprite(slug3_2.x, slug3_2.y,'slug').play('slug-move')
    this.enemyPoint18=this.physics.add.sprite(slug3_3.x, slug3_3.y,'slug').play('slug-move')
    this.enemyPoint19=this.physics.add.sprite(slug3_4.x, slug3_4.y,'slug').play('slug-move')

    this.itemPoint23=this.physics.add.sprite(flower3_1.x, flower3_1.y,'item3')
    this.itemPoint24=this.physics.add.sprite(flower3_2.x, flower3_2.y,'item3')
    this.itemPoint25=this.physics.add.sprite(flower3_3.x, flower3_3.y,'item3')
    this.itemPoint26=this.physics.add.sprite(flower3_4.x, flower3_4.y,'item3')
    this.itemPoint27=this.physics.add.sprite(flower3_5.x, flower3_5.y,'item3')
    this.itemPoint28=this.physics.add.sprite(flower3_6.x, flower3_6.y,'item3')
    this.itemPoint29=this.physics.add.sprite(flower3_7.x, flower3_7.y,'item3')
    this.itemPoint30=this.physics.add.sprite(flower3_8.x, flower3_8.y,'item3')
    this.itemPoint31=this.physics.add.sprite(flower3_9.x, flower3_9.y,'item3')
    this.itemPoint32=this.physics.add.sprite(flower3_10.x, flower3_10.y,'item3')
    this.itemPoint33=this.physics.add.sprite(flower3_11.x, flower3_11.y,'item3')
    this.itemPoint34=this.physics.add.sprite(flower3_12.x, flower3_12.y,'item3')
    this.itemPoint35=this.physics.add.sprite(flower3_13.x, flower3_13.y,'item3')
    this.itemPoint36=this.physics.add.sprite(flower3_14.x, flower3_14.y,'item3')
    this.itemPoint37=this.physics.add.sprite(flower3_15.x, flower3_15.y,'item3')
    
    this.physics.add.overlap(this.player,[this.enemyPoint12,this.enemyPoint13,this.enemyPoint14,this.enemyPoint15,this.enemyPoint16,this.enemyPoint17,this.enemyPoint18,this.enemyPoint19],this.hit_enemy,null,this);
    this.physics.add.overlap(this.player,[this.itemPoint23,this.itemPoint24,this.itemPoint25,this.itemPoint26,this.itemPoint27,this.itemPoint28,this.itemPoint29,this.itemPoint30,this.itemPoint31,this.itemPoint32,this.itemPoint33,this.itemPoint34,this.itemPoint35,this.itemPoint36,this.itemPoint37],this.collect_flowers,null,this);
    this.player.setScale(2);
    this.player.setCollideWorldBounds(true);
    window.player = this.player;
    this.flowernum=this.add.text(50,50,window.flower,{font:'20px Courier',fill:'#ffffff'}).setScrollFactor(0);

    this.physics.world.bounds.width =this.platform3Layer.width;
    this.physics.world.bounds.height =this.platform3Layer.height;

    // Add time event / movement here
    this.timedEvent = this.time.addEvent({
      delay: 1000,
      callback: this.moving_sides12,
      callbackScope: this,
      loop: false
    })
    this.timedEvent = this.time.addEvent({
      delay: 1000,
      callback: this.moving_sides13,
      callbackScope: this,
      loop: false
    })
    this.timedEvent = this.time.addEvent({
      delay: 1000,
      callback: this.moving_sides14,
      callbackScope: this,
      loop: false
    })
    this.timedEvent = this.time.addEvent({
      delay: 1000,
      callback: this.moving_sides15,
      callbackScope: this,
      loop: false
    })
    this.timedEvent = this.time.addEvent({
      delay: 1000,
      callback: this.moving_sides16,
      callbackScope: this,
      loop: false
    })
    this.timedEvent = this.time.addEvent({
      delay: 1000,
      callback: this.moving_sides17,
      callbackScope: this,
      loop: false
    })
    this.timedEvent = this.time.addEvent({
      delay: 1000,
      callback: this.moving_sides18,
      callbackScope: this,
      loop: false
    })
    this.timedEvent = this.time.addEvent({
      delay: 1000,
      callback: this.moving_sides19,
      callbackScope: this,
      loop: false
    })
    this.timedEvent = this.time.addEvent({
      delay: 1000,
      callback: this.lvl3soundplay,
      callbackScope: this,
      loop: false,
    })
    // get the tileIndex number in json, +1
    //mapLayer.setTileIndexCallback(11, this.room1, this);

    // Add custom properties in Tiled called "mouintain" as bool

    // What will collider witg what layers
    //this.physics.add.collider(mapLayer, this.player);
    this.physics.add.collider(this.platform3Layer,this.player)
    this.platform3Layer.setCollisionByExclusion(-1,true)
    // create the arrow keys
    this.cursors = this.input.keyboard.createCursorKeys();

    // camera follow player
    this.cameras.main.startFollow(this.player);

    //set boundary sp camera won't go outside the game world
    this.cameras.main.setBounds(0,0, map.widthInPixels, map.heightInPixels);

    var spaceDown = this.input.keyboard.addKey('SPACE');
    spaceDown.on('down', function(){
      console.log("test");
      this.bonusending();
      }, this );
  
  } /////////////////// end of create //////////////////////////////

  update(){
    if(this.player.y>604)
    {
      this.gameOver3()
    }
    if(this.player.y<35)
    {
      this.gameOver3()
    }
    if(this.player.x < 12580 &&this.player.x > 12565 && this.player.y < 515 && this.player.y > 505)
    {
      console.log("end-game");
      this.goodending();
    }
    if(this.player.x < 12580 &&this.player.x > 12565 && this.player.y < 515 && this.player.y > 505&&window.flower>80)
    {
      console.log("bonus");
      this.bonusending();
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
moving_sides12(){
  console.log("moving-sides12")
  this.tweens.timeline({
    targets: this.enemyPoint12,
    loop:-1,
    ease:"Linear",
    duration: 5000,
    tweens:[
      {
        x:72,
      },
      {
        x:648,
      }
    ],
  });
}
moving_sides13(){
  console.log("moving-sides13")
  this.tweens.timeline({
    targets: this.enemyPoint13,
    loop:-1,
    ease:"Linear",
    duration: 5000,
    tweens:[
      {
        x:5892,
      },
      {
        x:7310,
      }
    ],
  });
}
moving_sides14(){
  console.log("moving-sides14")
  this.tweens.timeline({
    targets: this.enemyPoint14,
    loop:-1,
    ease:"Linear",
    duration: 5000,
    tweens:[
      {
        x:8612,
      },
      {
        x:9198,
      }
    ],
  });
}
moving_sides15(){
  console.log("moving-sides15")
  this.tweens.timeline({
    targets: this.enemyPoint15,
    loop:-1,
    ease:"Linear",
    duration: 5000,
    tweens:[
      {
        x:11294,
      },
      {
        x:11798,
      }
    ],
  });
}
moving_sides16(){
  console.log("moving-sides16")
  this.tweens.timeline({
    targets: this.enemyPoint16,
    loop:-1,
    ease:"Linear",
    duration: 5000,
    tweens:[
      {
        x:1066,
      },
      {
        x:1582,
      }
    ],
  });
}
moving_sides17(){
  console.log("moving-sides17")
  this.tweens.timeline({
    targets: this.enemyPoint17,
    loop:-1,
    ease:"Linear",
    duration: 5000,
    tweens:[
      {
        x:3712,
      },
      {
        x:3958,
      }
    ],
  });
}
moving_sides18(){
  console.log("moving-sides18")
  this.tweens.timeline({
    targets: this.enemyPoint18,
    loop:-1,
    ease:"Linear",
    duration: 5000,
    tweens:[
      {
        x:5914,
      },
      {
        x:6552,
      }
    ],
  });
}
moving_sides19(){
  console.log("moving-sides19")
  this.tweens.timeline({
    targets: this.enemyPoint19,
    loop:-1,
    ease:"Linear",
    duration: 5000,
    tweens:[
      {
        x:10882,
      },
      {
        x:11452,
      }
    ],
  });
}
gameOver3(){
  this.Hit_snd.play()
  this.lvl3sound.setVolume(0);
  this.scene.start("gameOver3")
  return false;
}
goodending(){
  this.lvl3sound.setVolume(0);
  this.scene.start('goodEnding')
}
bonusending(){
  this.lvl3sound.setVolume(0);
  this.scene.start('bonusEnding')
}
hit_enemy(player,enemy){
  console.log("hit")
  enemy.disableBody(true,true);
  this.gameOver3();
}
collect_flowers(player,item){
  console.log("collect")
  window.flower++
  this.flowernum.setText(window.flower)
  console.log("window.flower",window.flower)
  item.disableBody(true,true);
  this.Collect_snd.play()
}
lvl3soundplay(){
  this.lvl3sound.play();
  return null;
}
} //////////// end of class world ////////////////////////
