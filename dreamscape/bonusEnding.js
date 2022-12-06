class bonusEnding extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'bonusEnding' });
    }
create() {
    this.add.text(150, 100, 'congratulations on completing the game++', { font: '24px Courier', fill: '#dca9ff' });

    this.bsendsound=this.sound.add('ending2_bgm').setVolume(0.1)

    var spaceDown = this.input.keyboard.addKey('SPACE');
        
    this.timedEvent = this.time.addEvent({
        delay: 1000,
        callback: this.bsendsoundplay,
        callbackScope: this,
        loop: false,
      })

      this.timedEvent = this.time.addEvent({
        delay: 0,
        callback: this.bs1,
        callbackScope: this,
        loop: false,
      })

      this.timedEvent = this.time.addEvent({
        delay: 1000,
        callback: this.bs2,
        callbackScope: this,
        loop: false,
      }) 

    this.timedEvent = this.time.addEvent({
        delay: 3000,
        callback: this.bs3,
        callbackScope: this,
        loop: false,
      })   

    this.timedEvent = this.time.addEvent({
        delay: 8000,
        callback: this.bs4,
        callbackScope: this,
        loop: false,
      })  

    this.timedEvent = this.time.addEvent({
        delay: 11000,
        callback: this.bs5,
        callbackScope: this,
        loop: false,
      }) 

      this.timedEvent = this.time.addEvent({
        delay: 21000,
        callback: this.bs6,
        callbackScope: this,
        loop: false,
      }) 

      this.timedEvent = this.time.addEvent({
        delay: 26000,
        callback: this.bs7,
        callbackScope: this,
        loop: false,
      })
      
      this.timedEvent = this.time.addEvent({
        delay: 36000,
        callback: this.continue,
        callbackScope: this,
        loop: false,
      }) 

    spaceDown.on('down', function(){
        this.mainmenu();
        }, this );
}

bsendsoundplay(){
  this.bsendsound.play();
  return null;
}
mainmenu(){
    console.log("thank you for playing")
    this.bsendsound.setVolume(0);
    this.scene.start("preload")
    window.flower=0;
    return false;
}
bs1(){
    this.add.image(400,320,'bs1')
}
bs2(){
    this.add.image(400,320,'bs2')
}
bs3(){
    this.add.image(400,320,'bs3')
}
bs4(){
    this.add.image(400,320,'bs4')
}
bs5(){
    this.add.image(400,320,'bs5')
}
bs6(){
    this.add.image(400,320,'bs6')
}
bs7(){
    this.add.image(400,320,'bs7')
}
continue(){
    this.add.image(400,600,'continueimg')
}
} // end of class