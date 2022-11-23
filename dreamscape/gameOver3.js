class gameOver3 extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'gameOver3' });
    }
create() {

    this.add.text(10, 10, 'Bad Ending', { font: '24px Courier', fill: '#FFFF00' });
    this.add.text(10, 34, 'You will have to restart everything now', { font: '24px Courier', fill: '#FFFF00' });
    this.add.text(10, 100, 'Click or Space to continue', { font: '24px Courier', fill: '#FFFF00' });

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