class instruction extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'instruction' });
    }
create() {

    this.add.text(10, 10, 'I am trapped within a dream', { font: '24px Courier', fill: '#FFFF00' });
    this.add.text(10, 34, 'Do not Touch the sky or the ground, or the enemies.', { font: '24px Courier', fill: '#FFFF00' });
    this.add.image(200,85,"bee");
    this.add.image(250,85,"slug");
    this.add.text(10, 150, 'Use Arrow Keys To move, Up for jumping for example.', { font: '24px Courier', fill: '#FFFF00' });
    this.add.text(10, 400, 'Good Luck Helping Me Escape.', { font: '24px Courier', fill: '#FFFF00' });
    this.add.text(10, 450, '[Spacebar]to continue.', { font: '24px Courier', fill: '#FFFF00' });
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