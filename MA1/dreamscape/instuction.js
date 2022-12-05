class instruction extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'instruction' });
    }
create() {

    this.add.text(150, 100, 'It felt like walking forever... but', { font: '24px Courier', fill: '#dca9ff' });
    this.add.text(180, 150, 'I think I am trapped in a dream', { font: '24px Courier', fill: '#dca9ff' }); 
    this.add.text(190, 175, 'and I have a few reasons why', { font: '24px Courier', fill: '#dca9ff' });
    this.add.text(210, 250, 'Keyboard controls:', { font: '16px Courier', fill: '#ffffff' });
    this.add.sprite(225,350,'mc').play("walk-left").setScale(3)
    this.add.sprite(400,350,'mc').play("jump-right").setScale(3)
    this.add.sprite(575,350,'mc').play("walk-right").setScale(3)
    this.add.text(100, 450, '<- left arrow key', { font: '16px Courier', fill: '#ffffff'});
    this.add.text(550, 450, '-> right arrow key', { font: '16px Courier', fill: '#ffffff'});
    this.add.text(400, 450, '^', { font: '16px Courier', fill: '#ffffff'});
    this.add.text(400, 455, '|', { font: '16px Courier', fill: '#ffffff'});
    this.add.text(350,475,'up arrow key',{font:'16px Courier',fill:"#ffffff"});
    this.add.text(225,590,'press [spacebar] to continue',{font:'20px Courier',fill:"#ffffff"});
    // this.add.image(200,85,"bee");
    // this.add.image(300,85,"slug");
    // this.add.text(10, 150, 'Use Arrow Keys To move, Up for jumping for example.', { font: '24px Courier', fill: '#FFFF00' });
    // this.add.text(10, 400, 'Good Luck Helping Me Escape.', { font: '24px Courier', fill: '#FFFF00' });
    // this.add.text(10, 450, '[Spacebar]to continue.', { font: '24px Courier', fill: '#FFFF00' });
    // this.add.text(10, 550, 'p.s. you can collect the flowers if you want to, my friend probably likes it.', { font: '12px Courier', fill: '#FFFF00' });
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