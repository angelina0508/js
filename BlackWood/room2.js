class room2 extends Phaser.Scene {

  constructor() {
    super('room2');
  }

  // Incoming data from the previous scene
  init(data) {
    this.player = data.player;
    this.inventory = data.inventory;
  }

  preload() {
    // Load the JSON map file
    // this.load.tilemapTiledJSON("room2", "assets/Maze_map.tmj");

    // // Load images for the tilesets
    // this.load.image("pipoyaIMG", "assets/pipoya.png");
    // this.load.image("plantIMG", "assets/plant.png");
    // this.load.image("StairsIMG", "assets/Stairs.png");
    // this.load.image("trees-greenIMG", "assets/trees-green.png");
    // this.load.image("Bow2IMG", "assets/Bow.png");
    // this.load.image("Map2IMG", "assets/Map.png");

    // Load character spritesheet
    this.load.spritesheet("MainCharacterIMG", "assets/MainCharacter.png", {
      frameWidth: 64,
      frameHeight: 64,
    });
  } /////////////////// end of preload //////////////////////////////

  create() {
    console.log("*** room2 scene");
    // Create the map
    let map = this.make.tilemap({ key: "room2" });



    // Define animations for the main character
    // this.anims.create({
    //   key: "MainCharacter-up",
    //   frames: this.anims.generateFrameNumbers("MainCharacterIMG", { start: 105, end: 112 }),
    //   frameRate: 5,
    //   repeat: -1,
    // });

    // this.anims.create({
    //   key: "MainCharacter-left",
    //   frames: this.anims.generateFrameNumbers("MainCharacterIMG", { start: 118, end: 125 }),
    //   frameRate: 5,
    //   repeat: -1,
    // });

    // this.anims.create({
    //   key: "MainCharacter-down",
    //   frames: this.anims.generateFrameNumbers("MainCharacterIMG", { start: 131, end: 138 }),
    //   frameRate: 5,
    //   repeat: -1,
    // });

    // this.anims.create({
    //   key: "MainCharacter-right",
    //   frames: this.anims.generateFrameNumbers("MainCharacterIMG", { start: 144, end: 151 }),
    //   frameRate: 5,
    //   repeat: -1,
    // });

    // Load the game tiles
    let pipoyaTiles = map.addTilesetImage("pipoya", "pipoyaIMG");
    let plantTiles = map.addTilesetImage("plant", "plantIMG");
    let StairsTiles = map.addTilesetImage("Stairs", "StairsIMG");
    let treesgreenTiles = map.addTilesetImage("trees-green", "trees-greenIMG");

    let tilesArray = [pipoyaTiles, plantTiles, StairsTiles, treesgreenTiles];

    // Load layers from the map
    this.groundLayer = map.createLayer("ground", tilesArray, 0, 0);
    this.ground2Layer = map.createLayer("ground2", tilesArray, 0, 0);
    this.Trees_BackLayer = map.createLayer("Trees_Back", tilesArray, 0, 0);
    this.TreesLayer = map.createLayer("Trees", tilesArray, 0, 0);
    this.Trees_BigLayer = map.createLayer("Trees_Big", tilesArray, 0, 0);
    this.MudgroundLayer = map.createLayer("Mudground", tilesArray, 0, 0);
    this.MazeLayer = map.createLayer("Maze", tilesArray, 0, 0);
    this.CemeteryLayer = map.createLayer("Cemetery", tilesArray, 0, 0);
    this.FenceLayer = map.createLayer("Fence", tilesArray, 0, 0);
    this.TinyThingsLayer = map.createLayer("TinyThings", tilesArray, 0, 0);

    // Set world bounds
    this.physics.world.bounds.width = this.groundLayer.width;
    this.physics.world.bounds.height = this.groundLayer.height;

    // Create collect objects
    let Key1 = map.findObject("ObjectLayer1", (obj) => obj.name === "Key1");
    this.Bow1 = this.physics.add.sprite(Key1.x, Key1.y, 'Bow2IMG').play("BowAnim")

    let Key2 = map.findObject("ObjectLayer1", (obj) => obj.name === "Key2");
    this.Map1 = this.physics.add.sprite(Key2.x, Key2.y, 'Map2IMG').play("MapAnim")

    let Key3 = map.findObject("ObjectLayer1", (obj) => obj.name === "Key3");
    this.Bow2 = this.physics.add.sprite(Key3.x, Key3.y, 'Bow2IMG').play("BowAnim")

    let Key4 = map.findObject("ObjectLayer1", (obj) => obj.name === "Key4");
    this.Bow3 = this.physics.add.sprite(Key4.x, Key4.y, 'Bow2IMG').play("BowAnim")

    let Key5 = map.findObject("ObjectLayer1", (obj) => obj.name === "Key5");
    this.Map2 = this.physics.add.sprite(Key5.x, Key5.y, 'Map2IMG').play("MapAnim")

    // Create the player sprite at the Start object position
    let Start = map.findObject("ObjectLayer2", (obj) => obj.name === "Start");
    this.player = this.physics.add.sprite(Start.x, Start.y, 'MainCharacterIMG');
    this.player.setCollideWorldBounds(true);

    this.player.body.setSize(this.player.width * 0.6, this.player.height * 0.8)

    // Debug player
    window.player = this.player;

    // Add any text to the game
    this.add.text(10, 10, "Add any text here", {
      font: "30px Courier",
      fill: "#00FFFF",
    });

    // Create the cursor keys for player movement
    this.cursors = this.input.keyboard.createCursorKeys();

    // Make the camera follow the player
    this.cameras.main.startFollow(this.player);

    this.Bow1.postFX.addGlow(0xffffff, 4, 0, false, 0.1, 32);
    this.Bow2.postFX.addGlow(0xffffff, 4, 0, false, 0.1, 32);
    this.Bow3.postFX.addGlow(0xffffff, 4, 0, false, 0.1, 32);
    this.Map1.postFX.addGlow(0xffffff, 4, 0, false, 0.1, 32);
    this.Map2.postFX.addGlow(0xffffff, 4, 0, false, 0.1, 32);

    // Add collision detection
    this.groundLayer.setCollisionByProperty({ collides: true });
    this.MazeLayer.setCollisionByExclusion(-1, true);
    this.FenceLayer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.MazeLayer)
    this.physics.add.collider(this.player, this.FenceLayer);

    // Add overlap with objects that trigger scene transitions
    map.findObject("ObjectLayer2", (obj) => {
      if (obj.name === "RoomTransition") {
        this.physics.add.overlap(this.player, this.physics.add.sprite(obj.x, obj.y), this.room1, null, this);
      }
    });

    // Call to update inventory items
    this.time.addEvent({
      delay: 100,
      callback: updateInventory,
      callbackScope: this,
      loop: false,
    });

    // start another scene in parallel
    this.scene.launch("showInventory");

    // // Call globalFunction globalHitFire on overlap
    // this.physics.add.overlap(this.player, [this.Enemy1, this.Enemy2, this.Enemy3, this.Enemy4, this.Enemy5, this.Enemy6], globalHitEnemy, null, this);

    // collect items
    this.physics.add.overlap(this.player, [this.Bow1, this.Bow2, this.Bow3], globalCollectBow, null, this);
    this.physics.add.overlap(this.player, [this.Map1, this.Map2], globalCollectMap2, null, this);


    // // Key to reload the game
    // var cDown = this.input.keyboard.addKey('C');
    // cDown.on('down', function () {
    //   console.log("C pressed (room2)");
    //   this.scene.start("room3");
    // }, this);

    // Add a full-screen tint overlay
    this.tintOverlay = this.add.graphics({ x: 0, y: 0, fillStyle: { color: 0x000000, alpha: 0.5 } });
    this.tintOverlay.fillRect(0, 0, this.cameras.main.width, this.cameras.main.height);
    this.tintOverlay.setScrollFactor(0); // Make sure it stays in place with the camera
  } /////////////////// end of create //////////////////////////////

  update() {
    let speed = 200;

    if (
      this.player.x > 1260 &&
      this.player.y < 326 &&
      this.player.y > 137
    ) {
      console.log("Go to Room2 function");
      this.world();
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

  // Function to jump to room2
  world(player, tile) {
    console.log("world function");
    this.scene.start("world");
  }

}//////////// end of class world ////////////////////////
