class level_1 extends Phaser.Scene {
  constructor() {
    super({
      key: "level_1",
    });

    // Put global variable here
  }

  preload() {
    // Step 1, load JSON
    //this.load.tilemapTiledJSON("world1", "assets/Tutorial1.json");
    this.load.tilemapTiledJSON("lvl1", "assets/level_1_tiles.tmj");
    // Step 2 : Preload any images here
  
    this.load.image("backgroundimg", "assets/level_1_bg.png");
    this.load.image("tileset1img", "assets/tileset1.png")
    this.load.image("tileset2img", "assets/tileset2.png")
    //this.load.image("building", "assets/Buildings32x32.png");
    //this.load.image("street", "assets/Street32x32.png");
  }

  create() {
    console.log("lvl1_scene");
    
    //Step 3 - Create the map from main
    //let map = this.make.tilemap({ key: "world1" });
    let map = this.make.tilemap({key: "lvl1"})
    this.music = this.sound.add('lvl1_bgm').setVolume(0.3)
    this.add.image(6400,320,"backgroundimg")
    // Step 4 Load the game tiles
    // 1st parameter is name in Tiled,
    // 2nd parameter is key in Preload
    //let buildingTiles = map.addTilesetImage("Buildings32x32", "building");
    //let streetTiles = map.addTilesetImage("Street32x32", "street");
    
    let decoTiles = map.addTilesetImage("tileset1","tileset1img")
    let platformTiles = map.addTilesetImage("tileset2","tileset2img")

    // Step 5  create an array of tiles
    // let tilesArray = [
    //   buildingTiles,
    //   streetTiles,
    // ];
    let tilesArray = [decoTiles,platformTiles];
    // Step 6  Load in layers by layers
    //this.groundLayer = map.createLayer("groundLayer",tilesArray,0,0);
    //this.streetLayer = map.createLayer("streetLayer",tilesArray,0,0);
    //this.buildingLayer = map.createLayer("buildingLayer",tilesArray,0,0);

    this.platformLayer = this.physics.add.staticGroup();
    this.platformLayer = map.createLayer('platformLayer',tilesArray,0,0);
    this.decoLayer = map.createLayer('decoLayer',tilesArray,0,0);

    // Add main player here with physics.add.sprite
    var startPoint = map.findObject("objectLayer",(obj) => obj.name === "start")
    this.player = this.physics.add.sprite(startPoint.x,startPoint.y,"mc")
    this.player.setScale(2)
    this.player.setCollideWorldBounds(true);
    window.player = this.player;
    
    this.physics.world.bounds.width =this.platformLayer.width;
    this.physics.world.bounds.height =this.platformLayer.height;
  
    

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
    this.physics.add.collider(this.platformLayer,this.player)
    this.platformLayer.setCollisionByExclusion(-1,true)
    // create the arrow keys
    this.cursors = this.input.keyboard.createCursorKeys();

    // camera follow player
    this.cameras.main.startFollow(this.player);

    //set boundary sp camera won't go outside the game world
    this.cameras.main.setBounds(0,0, map.widthInPixels, map.heightInPixels);

    this.physics.add.collider(this.player,this.platformLayer)

    
        
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
  
    if(this.player.x>12734.10)
    {
      console.log("level_2_function");
      this.scene.start("level_2");
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
        this.player.setVelocityY(150)
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
    // if (cursors.up.isDown && this.player.body.touching.platformLayer)
    // {
    //     player.setVelocityY(-330);
    //     this.player.anims.play('jump',true);
    // }
} /////////////////// end of update //////////////////////////////
level_2(){
  console.log("next_scene")
  this.scene.start("level_2")
}
} //////////// end of class world ////////////////////////
