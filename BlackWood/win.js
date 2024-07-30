class win extends Phaser.Scene {
    constructor() {
      super("win");
    }
  
    preload(){
      this.load.image("winScene", "assets/Win.png");
    }

    create() {
  
      console.log("*** win");
  
      // turn on loop, adjust the volume
      this.music = this.sound.add("victorySnd", { loop: false }).setVolume(1);
      // start the background music
      this.music.play();
  
      // Add image and detect spacebar keypress
      this.add.image(0, 0, 'winScene').setOrigin(0, 0);
  
      let enterDown = this.input.keyboard.addKey("SPACE");
  
      // On spacebar event, call the world scene
      enterDown.on("down", function () {
        console.log("Jump to main scene");
        window.heart = 3;
        window.key = 0;
  
        this.scene.start("main");
      },
        this
      );
  
    }
  
  }