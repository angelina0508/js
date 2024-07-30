class room2intro extends Phaser.Scene {

    constructor() {
        super({
            key: 'room2intro'
        });

        // Put global variable here
    }

    preload() {

        // Preload any images here
        this.load.image("room2intro", "assets/Storyboard2.png");

    }

    create() {
        console.log('*** room2 intro');

        // this.scene.bringToTop("main");

        this.add.image(0, 0, 'room2intro').setOrigin(0, 0);

        // Check for spacebar or any key here
        var spaceDown = this.input.keyboard.addKey('SPACE');

        // On spacebar event, call the world scene        
        spaceDown.on('down', function () {
            console.log('Jump to room3intro scene');

            this.scene.start("room3intro");
        },
        this
        );

        // Key to reload the game
        var aDown = this.input.keyboard.addKey('R');
        aDown.on('down', function () {
            console.log("R pressed (room2intro)");
            this.scene.start("room1intro");
        }, this);
    } /////////////// end of create ///////////////


} /////////////// end of main ///////////////