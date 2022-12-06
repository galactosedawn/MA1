class gameOver3 extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'gameOver3' });
    }

create() {

    this.add.image(400,320,"gameover3")
    var spaceDown = this.input.keyboard.addKey('SPACE');
    this.bdendsound=this.sound.add('ending3_bgm').setVolume(0.3)    
    // this.input.on('pointerdown', function (pointer) {
    //     this.scene.start("level1");
    //     }, this);
    this.timedEvent = this.time.addEvent({
        delay: 0,
        callback: this.bdendsoundplay,
        callbackScope: this,
        loop: false,
      })
    spaceDown.on('down', function(){
        console.log("restart level");
        this.restart();
        }, this );

    this.cursors = this.input.keyboard.createCursorKeys();
    var xDown = this.input.keyboard.addKey('x');
    
        xDown.on('down', function(){
        console.log("x back to main menu");
        this.mainmenu();
        }, this );
}
bdendsoundplay(){
    this.bdendsound.play();
    return null;
  }
mainmenu(){
    this.scene.start("preload")
    this.bdendsound.setVolume(0);
    window.flower=0;
    return false;
}
restart(){
    this.bdendsound.setVolume(0);
    this.scene.start("level_1")
}
} // end of class