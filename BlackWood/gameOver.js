class gameOver extends Phaser.Scene {
  constructor() {
    super("gameOver");
  }

  preload() {
    // this.load.image("gameOverImg", "assets/gameOver.jpg");

    // Load sound effect
    // this.load.audio("loseSound", "assets/loseSound.mp3");

  }

  create() {
    this.scene.bringToTop("gameOver");
    console.log("*** gameover scene");

    // Add image and detect spacebar keypress
    this.add.image(0, 0, 'gameOverImg').setOrigin(0, 0);

    // Check for spacebar or any key here
    let enterDown = this.input.keyboard.addKey("ENTER");

    // On spacebar event, call the world scene
    enterDown.on("down", function () {
      console.log("Jump to tutorial scene");
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

    // lose game sound
    this.loseSoundSnd = this.sound.add("loseSound").setVolume(1);
    // play the sound
    this.loseSoundSnd.play()

    // Add a full-screen tint overlay
    this.tintOverlay = this.add.graphics({ x: 0, y: 0, fillStyle: { color: 0x000000, alpha: 0.5 } });
    this.tintOverlay.fillRect(0, 0, this.cameras.main.width, this.cameras.main.height);
    this.tintOverlay.setScrollFactor(0); // Make sure it stays in place with the camera
  }

}