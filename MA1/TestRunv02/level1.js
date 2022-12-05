class level1 extends Phaser.Scene {

  constructor() {
      super({ key: "level1" });
  }

  preload(){
      //this.mapmade with Tiled in JSON format
      this.load.tilemapTiledJSON('map', 'assets/level_1_test_2.tmj');
      //load image
      this.load.image("platformimg", "assets/level_1_platform.png");
      this.load.image("backgroundimg", "assets/level_1_bg.png");
     
      this.load.spritesheet('mc', 'assets/mc.png', {frameWidth: 32, frameHeight: 32});

  } // end of preload

  create() {
      var map = this.make.tilemap({ key: "map"});

      var startPoint = map.findObject("objectLayer", (obj) => obj.name === "start");
      this.player = this.physics.add.sprite(startPoint.x, startPoint.y, "mc");
    
      this.player.setCollideWorldBounds(true);

      window.map = map;
      window.player = this.player;

      let collideTiles = map.addTilesetImage("platformimg", "platformimg");
      let backgroundTiles = map.addTilesetImage("backgroundimg", "backgroundimg");
      

      let tilesArray = [collideTiles, backgroundTiles];
  
      //Ground Layer    
      this.backgroundLayer = map.createLayer("backgroundTiles", tilesArray, 0,0);
      this.collideLayer = map.createLayer("collideTiles", tilesArray, 0,0);
  
      this.timedEvent = this.time.addEvent({
          delay: 1000,
          callback: this.delayOneSec,
          callbackScope: this,
          loop: false,
        });

      this.backgroundLayer.setCollisionByExclusion(-1, true);
      this.collideLayer.setCollisionByExclusion(-1, true);


      this.physics.world.bounds.width = this.collideLayer.width;
      this.physics.world.bounds.height = this.backgroundLayer.height;

      this.cursors = this.input.keyboard.createCursorKeys();

      //set boundary sp camera won't go outside the game world
      this.cameras.main.setBounds(0,0, map.widthInPixels, map.heightInPixels);
    
      //make camera follow player
      this.cameras.main.startFollow(this.player);

      //BG color
      this.cameras.main.setBackgroundColor("#ccccff");

      //Jollie anims create
      this.anims.create({
          key:'walk-left',
          frames:this.anims.generateFrameNumbers('mc',
          { start:1, end:3 }),
          frameRate:5,
          repeat:-1});
          
          this.anims.create({
          key:'walk-right',
          frames:this.anims.generateFrameNumbers('mc',
          { start:4, end:6 }),
          frameRate:5,
          repeat:-1});
          
          this.anims.create({
          key:'jump-left',
          frames:this.anims.generateFrameNumbers('mc',
          { start:7, end:9 }),
          frameRate:5,
          repeat:-1});
          
          this.anims.create({
          key:'jump-right',
          frames:this.anims.generateFrameNumbers('mc',
          { start:10, end:12 }),
          frameRate:5,
          repeat:-1});

  } // end of create

  update() {

      if (this.cursors.left.isDown)
      {
          console.log("left")
          this.player.setVelocityX(-160);
          this.player.anims.play('walk-left', true);
      }
      else if (this.cursors.right.isDown)
      {
          console.log("right")
          this.player.setVelocityX(160);
          this.player.anims.play('walk-right', true);
      }
      else if (this.cursors.up.isDown)
      {
          this.player.setVelocityY(-160);
          this.player.anims.play('jump-left', true);
      }
      else if (this.cursors.down.isDown)
      {
          this.player.setVelocityY(160);
          this.player.anims.play('jump-right', true);
      }
      else
      {
          this.player.setVelocity(0);
      }

  } // end of update

  delayOneSec() {
      console.log("1 sec later...adjust body size");
      this.player.body.setSize(28, 50);
      //this.player.body.setOffset(8,8)
    }

}
