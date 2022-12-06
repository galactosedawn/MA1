class gameOver extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'gameOver' });
    }
create() {

    // this.add.text(10, 10, 'Try Again', { font: '24px Courier', fill: '#FFFF00' });
    // this.add.text(10, 34, 'Click or space to continue', { font: '24px Courier', fill: '#FFFF00' });
    this.add.image(400,320,"gameover")
    var spaceDown = this.input.keyboard.addKey('SPACE');
        
    // this.input.on('pointerdown', function (pointer) {
    //     this.scene.start("level1");
    //     }, this)
    spaceDown.on('down', function(){
        console.log("spacebar_next");
        this.restart();
        }, this );

    this.cursors = this.input.keyboard.createCursorKeys();
    var xDown = this.input.keyboard.addKey('x');

    xDown.on('down', function(){
    console.log("x back to main menu");
    this.mainmenu();
    }, this );
}

restart(){
    this.scene.start("level_1")
}
mainmenu(){
    this.scene.start('preload');
    window.flower=0;
    return false;
}
} // end of class
