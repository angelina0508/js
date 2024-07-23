class gameOver extends Phaser.Scene {
    constructor() {
      super("gameOver");
    }
  
  preload() {
    this.load.image("gameOverImg", "assets/gameOver.jpg");

    // Load sound effect
    this.load.audio("loseSound", "assets/horrorLose.mp3");

  }
  
  create() {
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
    
    this.scene.start("world");
      },
      this
    );
    
    // // collect items sound
    // this.loseGameSnd = this.loseSound.add("losegame").setVolume(1);
    // // play the sound
    // this.loseSound.play()
    }
  
  }