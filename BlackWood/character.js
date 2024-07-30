class character extends Phaser.Scene {
    constructor() {
        super("character");
    }

preload(){
    this.load.image("character", "assets/Character.png");
}

    create() {
        console.log("*** character");

        this.scene.bringToTop("character");

        // Add image and detect spacebar keypress
        this.add.image(0, 0, 'character').setOrigin(0, 0);

        let enterDown = this.input.keyboard.addKey("SPACE");

        // On spacebar event, call the world scene
        enterDown.on("down", function () {
            console.log("Jump to room1intro scene");
            window.heart = 3;
            window.key = 0;

            this.scene.start("room1intro");
        },
            this
        );

        // Key to reload the game
        var aDown = this.input.keyboard.addKey('R');
        aDown.on('down', function () {
            console.log("R pressed (character)");
            this.scene.start("storyline");
        }, this);

    } /////////////// end of create ///////////////


}