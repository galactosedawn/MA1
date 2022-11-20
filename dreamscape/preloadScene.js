class preloadScene extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'preloadScene' });
    }
create() {

    this.add.text(10, 10, 'I am trapped within a dream', { font: '24px Courier', fill: '#FFFF00' });
    this.add.text(10, 34, 'Click or space to continue', { font: '24px Courier', fill: '#FFFF00' });

    var spaceDown = this.input.keyboard.addKey('SPACE');
        
    // this.input.on('pointerdown', function (pointer) {
    //     this.scene.start("level1");
    //     }, this);

    spaceDown.on('down', function(){
        console.log("spacebar_next");
        this.scene.start("level_1");
        }, this );
}

} // end of class