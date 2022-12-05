class level1 extends Phaser.Scene {
  constructor() {
    super({ key: "level1" });
  }

  preload() {
    this.load.tilemapTiledJSON('map', 'assets/level_1_testing.tmj');
    // All preload in preloadScene.js
    this.load.image('bgimg','level_1_bg.png');
    this.load.image('platformimg','level_1_platform.png');

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

  }

  create() {
    // load the this.map
    var map = this.make.tilemap({ key: "level1" });

    window.map = map;

    // tiles for the ground layer
    var groundTiles = map.addTilesetImage("tiles");
    // create the ground layer
    this.background = map.createLayer("bakcground", groundTiles, 0, 0);
    this.collide = map.createLayer("collide", groundTiles, 0, 0);

    // set the boundaries of our game world
    this.physics.world.bounds.width = this.groundLayer.width;
    this.physics.world.bounds.height = this.groundLayer.height;

    // Object layers
    // Put Tiled object layer here
    //  var startPoint = map.findObject("objectLayer",(obj) => obj.name === "startPoint");
    // var fire1 = map.findObject("objectLayer", (obj) => obj.name === "fire1");

    // create the this.playersprite
    //this.player = this.physics.add.sprite(100, 200, 'girl')
    //this.player = this.physics.add.sprite(startPoint.x, startPoint.y, "girl");

    this.player = this.physics.add.sprite(100, 200, 'girl')
    this.player.setScale(2);
    //this.player.setCollideWorldBounds(true); // don't go out of the this.map

    window.player = this.player;

    this.timedEvent = this.time.addEvent({
      delay: 1000,
      callback: this.delayOneSec,
      callbackScope: this,
      loop: false,
    });


    // Add fire sprites below
    //this.enemy1 = this.physics.add.sprite(fire1.x, fire1.y, 'fire').play('fireAnim');


    // this.physics.add.overlap(
    //   this.player,
    //   this.fireGroup,
    //   this.hitFire,
    //   null,
    //   this
    // );
    // this.physics.add.overlap(
    //   this.player,
    //   this.fireGroup2,
    //   this.hitFire,
    //   null,
    //   this
    // );


    ///////////////////////
    // setTileIndexCallback
    //this.itemLayer.setTileIndexCallback(4, this.removeItem, this);

    // the this.player will collide with this layer
    //this.groundLayer.setCollisionByProperty({ walls: true });
    //this.groundLayer.setCollisionByProperty({ pillars: true });
    
    // this.itemLayer.setCollisionByProperty({ item1: true });

    // this.playerwill collide with the level tiles
    // this.physics.add.collider(this.itemLayer, this.player);

    // this.physics.add.collider(this.groundLayer, this.player);



    this.cursors = this.input.keyboard.createCursorKeys();

    // set bounds so the camera won't go outside the game world
    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    // make the camera follow the player
    this.cameras.main.startFollow(this.player);

    // set background color, so the sky is not black
    this.cameras.main.setBackgroundColor("#ccccff");

    // this text will show the score
    var text = this.add.text(20, 570, "0", {
      fontSize: "20px",
      fill: "#ffffff",
    });
    // fix the text to the camera
    text.setScrollFactor(0);

    /////////////////////////////////
  } // end of create()

  update(time, delta) {


    if (this.cursors.left.isDown) {
      this.player.body.setVelocityX(-200);
      this.player.anims.play("left", true); // walk left
      this.player.flipX = false; // flip the sprite to the left
      //console.log('left');
    } else if (this.cursors.right.isDown) {
      this.player.body.setVelocityX(200);
      this.player.anims.play("left", true);
      this.player.flipX = true; // use the original sprite looking to the right
      //console.log('right');
    } else if (this.cursors.up.isDown) {
      this.player.body.setVelocityY(-200);
      this.player.anims.play("up", true);
      //console.log('up');
    } else if (this.cursors.down.isDown) {
      this.player.body.setVelocityY(200);
      this.player.anims.play("down", true);
      //console.log('down');
    } else {
      this.player.anims.stop();
      this.player.body.setVelocity(0, 0);
      //console.log('idle');
    }

    // this.leftZone = new Phaser.Geom.Rectangle(
    //   this.leftZone.x,
    //   this.leftZone.y,
    //   this.leftZone.width,
    //   this.leftZone.height
    // );

    // if (
    //   this.leftZone.contains(
    //     this.player.x + this.player.width / 2,
    //     this.player.y + this.player.height / 2
    //   )
    // ) {
    //   console.log("left zone");
    // }


  } // end of update()

  delayOneSec() {
    console.log("1 sec later...adjust body size");
    this.player.body.setSize(28, 50);
    //this.player.body.setOffset(8,8)
  }

  // this function will be called when the this.playertouches a coin
  hitFire(player, fire) {
    console.log("Hit fire!!!");
    this.cameras.main.shake(200);
    fire.disableBody(true, true); // remove fire
    return false;
  }

  removeItem(player, tile) {
    console.log("remove item", tile.index);
    this.itemLayer.removeTileAt(tile.x, tile.y); // remove the item
    return false;
  }
} // end of class
