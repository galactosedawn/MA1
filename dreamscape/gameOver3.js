class gameOver3 extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'gameOver3' });
    }
create() {

    this.add.image(400,320,"gameover3")

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