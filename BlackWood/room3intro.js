class room3intro extends Phaser.Scene {

    constructor() {
        super({
            key: 'room3intro'
        });

        // Put global variable here
    }

    preload() {

        // Preload any images here
        // this.load.image("room3intro", "assets/Storyboard3.png");

    }

    create() {
        this.scene.bringToTop("room3intro");
        // console.log('*** room3 intro');


        this.add.image(0, 0, 'room3intro').setOrigin(0, 0);

        // Check for spacebar or any key here
        var spaceDown = this.input.keyboard.addKey('SPACE');

        // On spacebar event, call the world scene        
        spaceDown.on('down', function () {
            // console.log('Jump to world scene');

            this.scene.start("world");
        },
            this
        );

        // Key to reload the game
        var aDown = this.input.keyboard.addKey('R');
        aDown.on('down', function () {
            // console.log("R pressed (room3intro)");
            this.scene.start("room2intro");
        }, this);
    } /////////////// end of create ///////////////


} /////////////// end of main ///////////////