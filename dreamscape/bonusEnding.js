class bonusEnding extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'bonusEnding' });
    }
create() {
    this.endsound=this.sound.add('ending2_bgm').setVolume(0.3)

    var spaceDown = this.input.keyboard.addKey('SPACE');
        
    this.timedEvent = this.time.addEvent({
        delay: 1000,
        callback: this.endsoundplay,
        callbackScope: this,
        loop: false,
      })
    
    this.timedEvent = this.time.addEvent({
        delay: 0,
        callback: this.frame0,
        callbackScope: this,
        loop: false,
      })
      this.timedEvent = this.time.addEvent({
        delay: 3000,
        callback: this.frame1,
        callbackScope: this,
        loop: false,
      }) 
    
    this.timedEvent = this.time.addEvent({
        delay: 7000,
        callback: this.frame2,
        callbackScope: this,
        loop: false,
      })   
    this.timedEvent = this.time.addEvent({
        delay: 12000,
        callback: this.frame3,
        callbackScope: this,
        loop: false,
      })  
    this.timedEvent = this.time.addEvent({
        delay: 18000,
        callback: this.frame4,
        callbackScope: this,
        loop: false,
      }) 
      this.timedEvent = this.time.addEvent({
        delay: 22000,
        callback: this.frame5,
        callbackScope: this,
        loop: false,
      }) 
      this.timedEvent = this.time.addEvent({
        delay: 30000,
        callback: this.frame6,
        callbackScope: this,
        loop: false,
      })

      this.timedEvent = this.time.addEvent({
        delay: 35000,
        callback: this.continue,
        callbackScope: this,
        loop: false,
      }) 
    spaceDown.on('down', function(){
        this.mainmenu();
        }, this );
}
endsoundplay(){
  this.endsound.play();
  return null;
}
mainmenu(){
    console.log("thank you for playing")
    this.endsound.setVolume(0);
    this.scene.start("preload")
    window.flower=0;
    return false;
}
frame0(){
    this.add.image(400,320,'bs1')
}
frame1(){
    this.add.image(400,320,'bs2')
}
frame2(){
    this.add.image(400,320,'bs3')
}
frame3(){
    this.add.image(400,320,'bs4')
}
frame4(){
    this.add.image(400,320,'bs5')
}
frame5(){
    this.add.image(400,320,'bs6')
}
frame6(){
    this.add.image(400,320,'bs7')
}
continue(){
    this.add.image(400,600,'continueimg')
}
} // end of class