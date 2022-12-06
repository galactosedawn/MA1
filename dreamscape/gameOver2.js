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
        restart();
        }, this );
        this.cursors = this.input.keyboard.createCursorKeys();
        var xDown = this.input.keyboard.addKey('x');
    
        xDown.on('down', function(){
        console.log("x back to main menu");
        this.mainmenu();
        }, this );
        
}
restart(){
    this.scene.start("level_2")
}
mainmenu(){
    this.scene.start("preload")
    window.flower=0;
    return false;
}
} // end of class