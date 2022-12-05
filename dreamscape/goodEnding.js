class goodEnding extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'goodEnding' });
    }
create() {
    this.add.text(150, 100, 'congratulations on completing the game', { font: '24px Courier', fill: '#dca9ff' });
    // this.add.sprite(400,320,"goodending").play("ending-play")
    var spaceDown = this.input.keyboard.addKey('SPACE');
        
    // this.input.on('pointerdown', function (pointer) {
    //     this.scene.start("level1");
    //     }, this);

    spaceDown.on('down', function(){
        console.log("spacebar_next");
        this.scene.start("preload");
        }, this );
}

} // end of class