class room1intro extends Phaser.Scene {

    constructor() {
        super({
            key: 'room1intro'
        });

        // Put global variable here
    }

    preload() {

        // Preload any images here
        this.load.image("room1intro", "assets/Storyboard.png");

    }

    create() {
        console.log('*** room1 intro');

        // this.scene.bringToTop("main");

        this.add.image(0, 0, 'room1intro').setOrigin(0, 0);

        // Check for spacebar or any key here
        var spaceDown = this.input.keyboard.addKey('SPACE');

        // On spacebar event, call the world scene        
        spaceDown.on('down', function () {
            console.log('Jump to room2intro scene');

            this.scene.start("room2intro");
        },
        this
        );

        // Key to reload the game
        var aDown = this.input.keyboard.addKey('R');
        aDown.on('down', function () {
            console.log("R pressed (room1intro)");
            this.scene.start("character");
        }, this);
    } /////////////// end of create ///////////////


} /////////////// end of main ///////////////