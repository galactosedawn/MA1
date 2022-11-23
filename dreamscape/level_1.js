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
    this.music = this.sound.add('hightone').setVolume(0.3)
    this.music = this.sound.add('lowtone').setVolume(0.3)
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
    var bee1_1 = map.findObject("objectLayer",(obj) => obj.name ==="bee1-1")
    var bee1_2 = map.findObject("objectLayer",(obj) => obj.name ==="bee1-2")

    var slug1_1 = map.findObject("objectLayer",(obj) => obj.name ==="slug1-1")
    var slug1_2 = map.findObject("objectLayer",(obj) => obj.name ==="slug1-2")
    var slug1_3 = map.findObject("objectLayer",(obj) => obj.name ==="slug1-3")

    var flower1_1 = map.findObject("objectLayer",(obj) => obj.name ==="item1-1")
    var flower1_2 = map.findObject("objectLayer",(obj) => obj.name ==="item1-2")
    var flower1_3 = map.findObject("objectLayer",(obj) => obj.name ==="item1-3")
    var flower1_4 = map.findObject("objectLayer",(obj) => obj.name ==="item1-4")
    var flower1_5 = map.findObject("objectLayer",(obj) => obj.name ==="item1-5")
    var flower1_6 = map.findObject("objectLayer",(obj) => obj.name ==="item1-6")
    var flower1_7 = map.findObject("objectLayer",(obj) => obj.name ==="item1-7")
    var flower1_8 = map.findObject("objectLayer",(obj) => obj.name ==="item1-8")
    var flower1_9 = map.findObject("objectLayer",(obj) => obj.name ==="item1-9")
    var flower1_10 = map.findObject("objectLayer",(obj) => obj.name ==="item1-10")
    var flower1_11 = map.findObject("objectLayer",(obj) => obj.name ==="item1-11")

    this.player = this.physics.add.sprite(startPoint.x,startPoint.y,"mc")
    this.player.setScale(2)
    
    this.player.setCollideWorldBounds(true);
    window.player = this.player;
    
    this.physics.world.bounds.width =this.platformLayer.width;
    this.physics.world.bounds.height =this.platformLayer.height;
   
    this.enemyPoint1=this.physics.add.sprite(bee1_1.x, bee1_1.y,'bee').play('bee-move')
    this.enemyPoint2=this.physics.add.sprite(bee1_2.x, bee1_2.y,'bee').play('bee-move')
    this.enemyPoint3=this.physics.add.sprite(slug1_1.x, slug1_1.y,'slug').play('slug-move')
    this.enemyPoint4=this.physics.add.sprite(slug1_2.x, slug1_2.y,'slug').play('slug-move')
    this.enemyPoint5=this.physics.add.sprite(slug1_3.x, slug1_3.y,'slug').play('slug-move')

    this.itemPoint1=this.physics.add.sprite(flower1_1.x, flower1_1.y,'item1')
    this.itemPoint2=this.physics.add.sprite(flower1_2.x, flower1_2.y,'item1')
    this.itemPoint3=this.physics.add.sprite(flower1_3.x, flower1_3.y,'item1')
    this.itemPoint4=this.physics.add.sprite(flower1_4.x, flower1_4.y,'item1')
    this.itemPoint5=this.physics.add.sprite(flower1_5.x, flower1_5.y,'item1')
    this.itemPoint6=this.physics.add.sprite(flower1_6.x, flower1_6.y,'item1')
    this.itemPoint7=this.physics.add.sprite(flower1_7.x, flower1_7.y,'item1')
    this.itemPoint8=this.physics.add.sprite(flower1_8.x, flower1_8.y,'item1')
    this.itemPoint9=this.physics.add.sprite(flower1_9.x, flower1_9.y,'item1')
    this.itemPoint10=this.physics.add.sprite(flower1_10.x, flower1_10.y,'item1')
    this.itemPoint11=this.physics.add.sprite(flower1_11.x, flower1_11.y,'item1')

    // Add time event / movement here
    this.timedEvent = this.time.addEvent({
      delay: 1000,
      callback: this.moving_sides,
      callbackScope: this,
      loop: false,
      
    })
    // get the tileIndex number in json, +1
    //mapLayer.setTileIndexCallback(11, this.room1, this);

    // Add custom properties in Tiled called "mouintain" as bool

    // What will collider witg what layers
    //this.physics.add.collider(mapLayer, this.player);
    this.physics.add.collider(this.platformLayer,this.player)

    this.physics.add.overlap(this.player,this.enemyPoint1,this.hit_enemy,null,this);
    this.physics.add.overlap(this.player,this.enemyPoint2,this.hit_enemy,null,this);
    this.physics.add.overlap(this.player,this.enemyPoint3,this.hit_enemy,null,this);
    this.physics.add.overlap(this.player,this.enemyPoint4,this.hit_enemy,null,this);
    this.physics.add.overlap(this.player,this.enemyPoint5,this.hit_enemy,null,this);

    this.physics.add.overlap(this.player,this.itemPoint1,this.collect_flowers,null,this);
    this.physics.add.overlap(this.player,this.itemPoint2,this.collect_flowers,null,this);
    this.physics.add.overlap(this.player,this.itemPoint3,this.collect_flowers,null,this);
    this.physics.add.overlap(this.player,this.itemPoint4,this.collect_flowers,null,this);
    this.physics.add.overlap(this.player,this.itemPoint5,this.collect_flowers,null,this);
    this.physics.add.overlap(this.player,this.itemPoint6,this.collect_flowers,null,this);
    this.physics.add.overlap(this.player,this.itemPoint7,this.collect_flowers,null,this);
    this.physics.add.overlap(this.player,this.itemPoint8,this.collect_flowers,null,this);
    this.physics.add.overlap(this.player,this.itemPoint9,this.collect_flowers,null,this);
    this.physics.add.overlap(this.player,this.itemPoint10,this.collect_flowers,null,this);
    this.physics.add.overlap(this.player,this.itemPoint11,this.collect_flowers,null,this);
    this.platformLayer.setCollisionByExclusion(-1,true)
    // create the arrow keys
    this.cursors = this.input.keyboard.createCursorKeys();

    // camera follow player
    this.cameras.main.startFollow(this.player);

    //set boundary sp camera won't go outside the game world
    this.cameras.main.setBounds(0,0, map.widthInPixels, map.heightInPixels);

    this.physics.add.collider(this.player,this.platformLayer)
    // this.physics.add.collider(this.platformLayer,this.enemyPoint)
    // this.physics.add.collider(this.platformLayer,this.itemPoint)
        
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
      this.gameOver()
    }
    if(this.player.y<35)
    {
      this.gameOver()
    }
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

moving_sides(){
  console.log("moving-sides")
  this.tweens.timeline({
    targets: this.bee1_1,
    loop:-1,
    duration: 5000,
    tweens:[
      {
        x:100,
        ease:"Sine.easeInOut",
        duration: 2000,
        yoyo:true,
      },
      {
        x:100,
        ease:"Sine.easeOut",
        offset:0,
      }
    ],
  });
}
hit_enemy(player,enemyPoint1,enemyPoint2,enemyPoint3,enemyPoint4,enemyPoint5){
  console.log("hit")
  this.cameras.main.shake(500);
  this.music = this.sound.add('lowtone').setVolume(0.3)
  this.scene.start("gameOver")
}
collect_flowers(player,itemPoint1,itemPoint2,itemPoint3,itemPoint4,itemPoint5,itemPoint6,itemPoint7,itemPoint8,itemPoint9,itemPoint10,itemPoint11){
  console.log("collect")
  itemPoint1.disableBody(true,true);
}
level_2(){
  console.log("next_scene")
  this.scene.start("level_2")
}
gameOver(){
  this.scene.start("gameOver")
}
} //////////// end of class world ////////////////////////
