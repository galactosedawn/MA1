class gameOver2 extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'gameOver2' });
    }
create() {

    this.add.image(400,320,"gameover2")

    var spaceDown = this.input.keyboard.addKey('SPACE');
        
    // this.input.on('pointerdown', function (pointer) {
    //     this.scene.start("level1");
    //     }, this);

    spaceDown.on('down', function(){
        console.log("spacebar_next");
        this.scene.start("level_2");
        }, this );
}

} // end of class