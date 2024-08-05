class main extends Phaser.Scene {

    constructor() {
        super({
            key: 'main'
        });

        // Put global variable here
    }

    preload() {

        // Preload any images here
        // this.load.image("mainScene", "assets/Intro.png");

    }

    create() {
        this.scene.bringToTop("main");
        // console.log('*** main scene');

        // this.scene.bringToTop("main");

        this.add.image(0, 0, 'mainScene').setOrigin(0, 0);

        // Check for spacebar or any key here
        var spaceDown = this.input.keyboard.addKey('SPACE');

        // On spacebar event, call the world scene        
        spaceDown.on('down', function () {
            // console.log('Jump to storyline scene');

            this.scene.start("storyline");
        },
        this
        );
    } /////////////// end of create ///////////////


} /////////////// end of main ///////////////