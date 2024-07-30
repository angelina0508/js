class storyline extends Phaser.Scene {

    constructor() {
        super({
            key: 'storyline'
        });

        // Put global variable here
    }

    preload() {

        // Preload any images here
        // this.load.image("storyline", "assets/Storyline.png");

    }

    create() {
        this.scene.bringToTop("storyline");
        console.log('*** storyline');

        // this.scene.bringToTop("main");

        this.add.image(0, 0, 'storyline').setOrigin(0, 0);

        // Check for spacebar or any key here
        var spaceDown = this.input.keyboard.addKey('SPACE');

        // On spacebar event, call the world scene        
        spaceDown.on('down', function () {
            console.log('Jump to character scene');

            this.scene.start("character");
        },
        this
        );
    } /////////////// end of create ///////////////


} /////////////// end of main ///////////////