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

    // Add main player here with physics.add.sprite
    var startPoint = map.findObject("object3Layer",(obj) => obj.name === "start");
    this.player = this.physics.add.sprite(startPoint.x,startPoint.y,"mc");
    this.player.setScale(2);
    this.player.setCollideWorldBounds(true);
    window.player = this.player;
    
    this.physics.world.bounds.width =this.platform3Layer.width;
    this.physics.world.bounds.height =this.platform3Layer.height;

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
    this.physics.add.collider(this.platform3Layer,this.player)
    this.platform3Layer.setCollisionByExclusion(-1,true)
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

} //////////// end of class world ////////////////////////
