class world extends Phaser.Scene {
  constructor() {
    super({
      key: "world",
    });

    // Put global variables here
  }

  // Incoming data from the previous scene
  init(data) {
    this.player = data.player;
    this.inventory = data.inventory;
  }

  preload() {
    // Load the JSON map file
    // this.load.tilemapTiledJSON("world", "assets/Blackwood.tmj");

    // // Load images for the tilesets
    // this.load.image("pipoyaIMG", "assets/pipoya.png");
    // this.load.image("plantIMG", "assets/plant.png");
    // this.load.image("StairsIMG", "assets/Stairs.png");
    // this.load.image("trees-greenIMG", "assets/trees-green.png");
    // this.load.image("horror22IMG", "assets/horrorCollection22.png");

    // sound effect
    this.load.audio("bgmusic", "assets/horrorSoundtrack1.mp3");

    // Load character spritesheet
    this.load.spritesheet("MainCharacterIMG", "assets/MainCharacter.png", {
      frameWidth: 64,
      frameHeight: 64,
    });
  } /////////////////// end of preload //////////////////////////////

  create() {
    console.log("*** world scene");
    window.music.setVolume(2);

    // Create the map
    let map = this.make.tilemap({ key: "world", });
    console.log("Map created");

    // Load the game tiles
    let horror22Tiles = map.addTilesetImage("horrorCollection22", "horror22IMG");
    let pipoyaTiles = map.addTilesetImage("pipoya", "pipoyaIMG");
    let plantTiles = map.addTilesetImage("plant", "plantIMG");
    let StairsTiles = map.addTilesetImage("Stairs", "StairsIMG");
    let treesgreenTiles = map.addTilesetImage("trees-green", "trees-greenIMG");

    let tilesArray = [horror22Tiles, pipoyaTiles, plantTiles, StairsTiles, treesgreenTiles];
    console.log("Tilesets loaded");

    // Load layers from the map
    this.groundLayer = map.createLayer("Ground", tilesArray, 0, 0);
    console.log("Ground layer created");

    // Check if layers are properly created
    // console.log("Ground layer width:", this.groundLayer.width);
    // console.log("Ground layer height:", this.groundLayer.height);

    this.Tree4Layer = map.createLayer("Tree4", tilesArray, 0, 0);
    this.Tree3Layer = map.createLayer("Tree3", tilesArray, 0, 0);
    this.Tree2Layer = map.createLayer("Tree2", tilesArray, 0, 0);
    this.Tree1Layer = map.createLayer("Tree1", tilesArray, 0, 0);
    this.MudGLayer = map.createLayer("MudG", tilesArray, 0, 0);
    this.BuildingsLayer = map.createLayer("Buildings", tilesArray, 0, 0);
    this.WindowsLayer = map.createLayer("Windows", tilesArray, 0, 0);

    // Set world bounds
    this.physics.world.bounds.width = this.groundLayer.width;
    this.physics.world.bounds.height = this.groundLayer.height;
    this.cameras.main.setBounds(0, 0, this.groundLayer.width, this.groundLayer.height);


    // Create the player sprite at the Start object position
    let Start = map.findObject("Object Layer 1", (obj) => obj.name === "Start");
    this.player = this.physics.add.sprite(Start.x, Start.y, 'MainCharacterIMG');
    this.player.setCollideWorldBounds(true);
    this.player.body.setSize(this.player.width * 0.6, this.player.height * 0.8);


    // Debug player
    window.player = this.player;

    // Add any text to the game
    // this.add.text(10, 10, "Add any text here", {
    //   font: "30px Courier",
    //   fill: "#00FFFF",
    // });

    // Create the cursor keys for player movement
    this.cursors = this.input.keyboard.createCursorKeys();

    // Make the camera follow the player
    this.cameras.main.startFollow(this.player);

    // Add collision detection
    this.groundLayer.setCollisionByProperty({ collides: true });
    this.Tree1Layer.setCollisionByExclusion(-1, true);
    this.Tree2Layer.setCollisionByExclusion(-1, true);
    this.Tree3Layer.setCollisionByExclusion(-1, true);
    this.Tree4Layer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.Tree1Layer)
    this.physics.add.collider(this.player, this.Tree2Layer)
    this.physics.add.collider(this.player, this.Tree3Layer)
    this.physics.add.collider(this.player, this.Tree4Layer)

    // Add overlap with objects that trigger scene transitions
    map.findObject("Object Layer 1", (obj) => {
      if (obj.name === "RoomTransition") {
        this.physics.add.overlap(this.player, this.physics.add.sprite(obj.x, obj.y), this.room1, null, this);
      }
    });

    // Key to reload the game
    var aDown = this.input.keyboard.addKey('R');
    aDown.on('down', function () {
      console.log("R pressed (world)");
      this.scene.start("room3intro");
    }, this);

    // Call to update inventory items
    this.time.addEvent({
      delay: 100,
      callback: updateInventory,
      callbackScope: this,
      loop: false,
    });

    // start another scene in parallel
    this.scene.launch("showInventory");

    // Add a full-screen tint overlay
    this.tintOverlay = this.add.graphics({ x: 0, y: 0, fillStyle: { color: 0x000000, alpha: 0.5 } });
    this.tintOverlay.fillRect(0, 0, this.cameras.main.width, this.cameras.main.height);
    this.tintOverlay.setScrollFactor(0); // Make sure it stays in place with the camera
  } /////////////////// end of create //////////////////////////////

  update() {
    let speed = 200;

    // room1
    if (
      this.player.x > 220 &&
      this.player.x < 313 &&
      this.player.y < 395
    ) {
      console.log("Go to Room1 function");
      this.room1();
    }

    // room2
    if (
      this.player.x > 596 &&
      this.player.x < 680 &&
      this.player.y < 395
    ) {
      console.log("Go to Room2 function");
      this.room2();
    }

    // room3
    if (
      this.player.x > 990 &&
      this.player.x < 1076 &&
      this.player.y < 395
    ) {
      console.log("Go to Room3 function");
      this.room3();
    }

    // Handle player movement based on cursor keys
    if (this.cursors.left.isDown) {
      this.player.body.setVelocityX(-speed);
      this.player.anims.play("MainCharacter-left", true); // walk left
    } else if (this.cursors.right.isDown) {
      this.player.body.setVelocityX(speed);
      this.player.anims.play("MainCharacter-right", true);
    } else if (this.cursors.up.isDown) {
      this.player.body.setVelocityY(-speed);
      this.player.anims.play("MainCharacter-up", true);
    } else if (this.cursors.down.isDown) {
      this.player.body.setVelocityY(speed);
      this.player.anims.play("MainCharacter-down", true);
    } else {
      this.player.anims.stop();
      this.player.body.setVelocity(0, 0);
    }


  } /////////////////// end of update //////////////////////////////

  // Function room1
  room1(player, tile) {
    console.log("Function to jump to room1 scene");
    this.scene.start("room1");
  }

  room2(player, tile) {
    console.log("Function to jump to room2 scene");
    this.scene.start("room2");
  }

  room3(player, tile) {
    console.log("Function to jump to room3 scene");
    this.scene.start("room3");
  }

} //////////// end of class world ////////////////////////
