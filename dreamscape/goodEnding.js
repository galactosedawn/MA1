class goodEnding extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'goodEnding' });
    }
create() {

    this.add.text(10, 10, 'Good Ending', { font: '24px Courier', fill: '#FFFF00' });
    this.add.text(10, 34, 'thank you for playing', { font: '24px Courier', fill: '#FFFF00' });
    this.add.text(10, 100, 'press SPACEBAR to replay', { font: '24px Courier', fill: '#FFFF00' });
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