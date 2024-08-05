class win extends Phaser.Scene {
  constructor() {
    super("win");
  }

  preload() {
    // this.load.image("winScene", "assets/Win.png");
  }

  create() {
    this.scene.bringToTop("win");
    // console.log("*** win");

    window.music.setVolume(0);

    // Add image and detect spacebar keypress
    this.add.image(0, 0, 'winScene').setOrigin(0, 0);

    let enterDown = this.input.keyboard.addKey("SPACE");

    // On spacebar event, call the world scene
    enterDown.on("down", function () {
      // console.log("Jump to world scene");
      window.heart = 3;
      window.key = 0;
      window.enemy = 0;
      window.key = 0;
      window.journal = 0;
      window.bow = 0;
      window.pam = 0;

      this.scene.start("world");
    },
      this
    );

    // turn on loop, adjust the volume
    this.music = this.sound.add("victorySnd", { loop: false }).setVolume(0.5);
    // start the background music
    this.music.play();

  }

}