class goodEnding extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'goodEnding' });
    }
create() {
    this.endsound=this.sound.add('ending1_bgm').setVolume(0.3)

    var spaceDown = this.input.keyboard.addKey('SPACE');
        
    this.timedEvent = this.time.addEvent({
        delay: 1000,
        callback: this.endsoundplay,
        callbackScope: this,
        loop: false,
      })
    
    this.timedEvent = this.time.addEvent({
        delay: 0,
        callback: this.end0,
        callbackScope: this,
        loop: false,
      })
      this.timedEvent = this.time.addEvent({
        delay: 1000,
        callback: this.end1,
        callbackScope: this,
        loop: false,
      }) 
    
    this.timedEvent = this.time.addEvent({
        delay: 3000,
        callback: this.end2,
        callbackScope: this,
        loop: false,
      })   
    this.timedEvent = this.time.addEvent({
        delay: 8000,
        callback: this.end3,
        callbackScope: this,
        loop: false,
      })  
    this.timedEvent = this.time.addEvent({
        delay: 11000,
        callback: this.end4,
        callbackScope: this,
        loop: false,
      }) 
      this.timedEvent = this.time.addEvent({
        delay: 21000,
        callback: this.end5,
        callbackScope: this,
        loop: false,
      }) 
      this.timedEvent = this.time.addEvent({
        delay: 26000,
        callback: this.end6,
        callbackScope: this,
        loop: false,
      })
      this.timedEvent = this.time.addEvent({
        delay: 33000,
        callback: this.end7,
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
endsoundplay(){
  this.bsendsound.setVolume(0);
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
end0(){
    this.add.image(400,320,'end0img')
}
end1(){
    this.add.image(400,320,'end1img')
}
end2(){
    this.add.image(400,320,'end2img')
}
end3(){
    this.add.image(400,320,'end3img')
}
end4(){
    this.add.image(400,320,'end4img')
}
end5(){
    this.add.image(400,320,'end5img')
}
end6(){
    this.add.image(400,320,'end6img')
}
end7(){
    this.add.image(400,320,'end7img')
}
continue(){
    this.add.image(400,600,'continueimg')
}
} // end of class