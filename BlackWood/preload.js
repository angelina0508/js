class preload extends Phaser.Scene {
  constructor() {
    super("preload");

    // Put global variable here
  }

  preload() {
    // Load character spritesheet
    this.load.spritesheet("MainCharacterIMG", "assets/MainCharacter.png", {
      frameWidth: 64,
      frameHeight: 64,
    });

    this.load.spritesheet("SkeletonIMG", "assets/Skeleton.png", {
      frameWidth: 64,
      frameHeight: 64,
    });

    this.load.spritesheet("JackIMG", "assets/Jack.png", {
      frameWidth: 64,
      frameHeight: 64,
    });

    // Load sound effect
    this.load.audio("bgmusic", "assets/horrorSoundtrack1.mp3");
    this.load.audio("collectItems", "assets/collectitems.mp3");

  } /////////////////// end of preload //////////////////////////////

  create() {
    console.log("*** preload scene");

    // Check for spacebar or any key here
    var spaceDown = this.input.keyboard.addKey("SPACE");

    // On spacebar event, call the world scene
    spaceDown.on(
      "down",
      function () {
        console.log("Jump to world scene");

        this.scene.start("world");
      },
      this
    );

    // Add any text in the main page
    this.add.text(10, 10, "Press spacebar to continue", {
      font: "30px Courier",
      fill: "#FFFFFF",
    });

    // Create all the game animations here

    // Define animations for the main character
    this.anims.create({
      key: "MainCharacter-up",
      frames: this.anims.generateFrameNumbers("MainCharacterIMG", { start: 105, end: 112 }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "MainCharacter-left",
      frames: this.anims.generateFrameNumbers("MainCharacterIMG", { start: 118, end: 125 }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "MainCharacter-down",
      frames: this.anims.generateFrameNumbers("MainCharacterIMG", { start: 131, end: 138 }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "MainCharacter-right",
      frames: this.anims.generateFrameNumbers("MainCharacterIMG", { start: 144, end: 151 }),
      frameRate: 5,
      repeat: -1,
    });

    // Define animations for the Skeleton
    this.anims.create({
      key: "Skeleton-up",
      frames: this.anims.generateFrameNumbers("SkeletonIMG", { start: 105, end: 112 }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "Skeleton-left",
      frames: this.anims.generateFrameNumbers("SkeletonIMG", { start: 118, end: 125 }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "Skeleton-down",
      frames: this.anims.generateFrameNumbers("SkeletonIMG", { start: 131, end: 138 }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "Skeleton-right",
      frames: this.anims.generateFrameNumbers("SkeletonIMG", { start: 144, end: 151 }),
      frameRate: 5,
      repeat: -1,
    });

    // Define animations for Jack
    this.anims.create({
      key: "Jack-up",
      frames: this.anims.generateFrameNumbers("JackIMG", { start: 105, end: 112 }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "Jack-left",
      frames: this.anims.generateFrameNumbers("JackIMG", { start: 118, end: 125 }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "Jack-down",
      frames: this.anims.generateFrameNumbers("JackIMG", { start: 131, end: 138 }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "Jack-right",
      frames: this.anims.generateFrameNumbers("JackIMG", { start: 144, end: 151 }),
      frameRate: 5,
      repeat: -1,
    });

    // turn on loop, adjust the volume
    this.music = this.sound.add("bgmusic", { loop: true }).setVolume(2);
    // start the background music
    this.music.play();

   
  } /////////////////// end of create //////////////////////////////

}
