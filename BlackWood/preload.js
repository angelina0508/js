 class preload extends Phaser.Scene {
  constructor() {
    super("preload");

    // Put global variable here
  }

  preload() {
    // Load the JSON map file
    this.load.tilemapTiledJSON("world", "assets/Blackwood.tmj");
    this.load.tilemapTiledJSON("room1", "assets/HotelInn_map.tmj");
    this.load.tilemapTiledJSON("room2", "assets/Maze_map.tmj");
    this.load.tilemapTiledJSON("room3", "assets/OldMansion.tmj");

    // Load images for the tilesets
    this.load.image("pipoyaIMG", "assets/pipoya.png");
    this.load.image("plantIMG", "assets/plant.png");
    this.load.image("StairsIMG", "assets/Stairs.png");
    this.load.image("trees-greenIMG", "assets/trees-green.png");
    this.load.image("horror22IMG", "assets/horrorCollection22.png");
    
    this.load.image("hFurnitureIMG", "assets/horrorFurniture.png");
    this.load.image("pipoyafIMG", "assets/pipoyafaded.png");
    this.load.image("pipoya2IMG", "assets/pipoya2.png");

    // load images for storyborad
    this.load.image("mainScene", "assets/Intro.png");
    this.load.image("storyline", "assets/Storyline.png");
    this.load.image("character", "assets/Character.png");
    this.load.image("room1intro", "assets/Storyboard.png");
    this.load.image("room2intro", "assets/Storyboard2.png");
    this.load.image("room3intro", "assets/Storyboard3.png");
    this.load.image("gameOverImg", "assets/gameOver.jpg");
    this.load.image("winScene", "assets/Win.png");
    

    // Items
    // this.load.image("Key2IMG", "assets/Key.png");
    // this.load.image("Journal2IMG", "assets/Journal.png");
    // this.load.image("Bow2IMG", "assets/Bow.png");
    // this.load.image("Map2IMG", "assets/Map.png");


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

     // Load items spritesheet
     this.load.spritesheet("Key2IMG", "assets/Key2.png", {
      frameWidth: 35,
      frameHeight: 35,
    });

    this.load.spritesheet("Journal2IMG", "assets/Journal2.png", {
      frameWidth: 35,
      frameHeight: 35,
    });

    this.load.spritesheet("Bow2IMG", "assets/Bow2.png", {
      frameWidth: 35,
      frameHeight: 35,
    });

    this.load.spritesheet("Map2IMG", "assets/Map2.png", {
      frameWidth: 35,
      frameHeight: 35,
    });

    // Load sound effect
    this.load.audio("bgmusic", "assets/horrorSoundtrack1.mp3");
    this.load.audio("collectItems", "assets/collectitems.mp3");
    this.load.audio("loseSound", "assets/loseSound.mp3");
    this.load.audio("hitSound", "assets/hitSound.mp3");
    this.load.audio("victorySnd", "assets/gameSuccess.mp3");
    this.load.audio("arrowShoot", "assets/arrowShoot.mp3");
    
    

  } /////////////////// end of preload //////////////////////////////

  create() {
    // console.log("*** preload scene");

    // Check for spacebar or any key here
    var spaceDown = this.input.keyboard.addKey("SPACE");

    // On spacebar event, call the world scene
    spaceDown.on(
      "down",
      function () {
        // console.log("Jump to world scene");

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

    // Define animations for the items
    this.anims.create({
      key: "KeyAnim",
      frames: this.anims.generateFrameNumbers("Key2IMG", { start: 0, end: 1 }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "JournalAnim",
      frames: this.anims.generateFrameNumbers("Journal2IMG", { start: 0, end: 1 }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "BowAnim",
      frames: this.anims.generateFrameNumbers("Bow2IMG", { start: 0, end: 1 }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "MapAnim",
      frames: this.anims.generateFrameNumbers("Map2IMG", { start: 0, end: 1 }),
      frameRate: 5,
      repeat: -1,
    });

    // turn on loop, adjust the volume
    window.music = this.sound.add("bgmusic", { loop: true }).setVolume(2);
    // start the background music
    window.music.play();

   this.scene.start("main")

  } /////////////////// end of create //////////////////////////////

}
