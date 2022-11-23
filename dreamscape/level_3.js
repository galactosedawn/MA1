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

    this.player = this.physics.add.sprite(startPoint.x,startPoint.y,"mc");
    this.enemyPoint=this.physics.add.sprite(bee3_1.x, bee3_1.y,'bee').play('bee-move')
    this.enemyPoint=this.physics.add.sprite(bee3_2.x, bee3_2.y,'bee').play('bee-move')
    this.enemyPoint=this.physics.add.sprite(bee3_3.x, bee3_3.y,'bee').play('bee-move')
    this.enemyPoint=this.physics.add.sprite(bee3_4.x, bee3_4.y,'bee').play('bee-move')

    this.enemyPoint=this.physics.add.sprite(slug3_1.x, slug3_1.y,'slug').play('slug-move')
    this.enemyPoint=this.physics.add.sprite(slug3_2.x, slug3_2.y,'slug').play('slug-move')
    this.enemyPoint=this.physics.add.sprite(slug3_3.x, slug3_3.y,'slug').play('slug-move')
    this.enemyPoint=this.physics.add.sprite(slug3_4.x, slug3_4.y,'slug').play('slug-move')

    this.itemPoint=this.physics.add.sprite(flower3_1.x, flower3_1.y,'item3')
    this.itemPoint=this.physics.add.sprite(flower3_2.x, flower3_2.y,'item3')
    this.itemPoint=this.physics.add.sprite(flower3_3.x, flower3_3.y,'item3')
    this.itemPoint=this.physics.add.sprite(flower3_4.x, flower3_4.y,'item3')
    this.itemPoint=this.physics.add.sprite(flower3_5.x, flower3_5.y,'item3')
    this.itemPoint=this.physics.add.sprite(flower3_6.x, flower3_6.y,'item3')
    this.itemPoint=this.physics.add.sprite(flower3_7.x, flower3_7.y,'item3')
    this.itemPoint=this.physics.add.sprite(flower3_8.x, flower3_8.y,'item3')
    this.itemPoint=this.physics.add.sprite(flower3_9.x, flower3_9.y,'item3')
    this.itemPoint=this.physics.add.sprite(flower3_10.x, flower3_10.y,'item3')
    this.itemPoint=this.physics.add.sprite(flower3_11.x, flower3_11.y,'item3')
    this.itemPoint=this.physics.add.sprite(flower3_12.x, flower3_12.y,'item3')
    this.itemPoint=this.physics.add.sprite(flower3_13.x, flower3_13.y,'item3')
    this.itemPoint=this.physics.add.sprite(flower3_14.x, flower3_14.y,'item3')
    this.itemPoint=this.physics.add.sprite(flower3_15.x, flower3_15.y,'item3')

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
    if(this.player.y>604)
    {
      this.gameOver3()
    }
    if(this.player.y<35)
    {
      this.gameOver3()
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
gameOver3(){
  this.scene.start("gameOver3")
}
} //////////// end of class world ////////////////////////
