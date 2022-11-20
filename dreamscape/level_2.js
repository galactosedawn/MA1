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
    this.music = this.sound.add('lvl2_bgm').setVolume(0.3)
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


    this.platform2Layer = this.physics.add.staticGroup();
    this.platform2Layer = map.createLayer('platform2Layer',tilesArray,0,0);
    this.deco2Layer = map.createLayer('deco2Layer',tilesArray,0,0);

    // Add main player here with physics.add.sprite
    var startPoint = map.findObject("object2Layer",(obj) => obj.name === "start")
    this.player = this.physics.add.sprite(startPoint.x,startPoint.y,"mc")
    this.player.setScale(2)
    this.player.setCollideWorldBounds(true);
    window.player = this.player;
    
    this.physics.world.bounds.width =this.platform2Layer.width;
    this.physics.world.bounds.height =this.platform2Layer.height;

    // Add time event / movement here
    this.timedEvent = this.time.addEvent({
      delay: 1000,
      callback: this.delayOneSec,
      callbackScope: this,
      loop: false
    })
    // get the tileIndex number in json, +1
    //mapLayer.setTileIndexCallback(11, this.room1, this);

    // Add custom properties in Tiled called "mouintain" as bool

    // What will collider witg what layers
    //this.physics.add.collider(mapLayer, this.player);
    this.physics.add.collider(this.platform2Layer,this.player)
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
    var spaceDown = this.input.keyboard.addKey('SPACE');
    spaceDown.on('down', function(){
      console.log("spacebar_next");
      this.scene.start("level_3");
      }, this ); 
  } /////////////////// end of create //////////////////////////////

  update(){
    if(this.player.x>12734.10)
    {
      console.log("level_3_function");
      this.scene.start("level_3");
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
    // if (cursors.up.isDown && player.body.touching.platformLayer)
    // {
    //     player.setVelocityY(-330);
    //     this.player.anims.play('jump',true);
    // }
} /////////////////// end of update //////////////////////////////
level_3(){
  console.log("next_scene")
  this.scene.start("level_3")
}
} //////////// end of class world ////////////////////////
