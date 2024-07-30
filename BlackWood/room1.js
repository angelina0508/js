class room1 extends Phaser.Scene {

  constructor() {
    super('room1');
  }

  // Incoming data from the previous scene
  init(data) {
    this.player = data.player;
    this.inventory = data.inventory;
  }

  preload() {
    // Step 1, load JSON
    // this.load.tilemapTiledJSON("room1", "assets/HotelInn_map.tmj");

    // // this.load.image("road", "assets/road.png");
    // this.load.image("horror22IMG", "assets/horrorCollection22.png");
    // this.load.image("hFurnitureIMG", "assets/horrorFurniture.png");
    // this.load.image("pipoyaIMG", "assets/pipoya.png");
    // this.load.image("pipoyafIMG", "assets/pipoyafaded.png");
    // this.load.image("StairsIMG", "assets/Stairs.png");
    // this.load.image("Key2IMG", "assets/Key.png");
    // this.load.image("Journal2IMG", "assets/Journal.png");


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
  }    /////////////////// end of preload //////////////////////////////

  create() {
    console.log("*** room1 scene");

    // Create the map
    let map = this.make.tilemap({ key: "room1" });

    // Load the game tiles
    // 1st parameter is name in Tiled,
    // 2nd parameter is key in Preload
    let horror22Tiles = map.addTilesetImage("horrorCollection22", "horror22IMG");
    let hFurnitureTiles = map.addTilesetImage("horrorFurniture", "hFurnitureIMG");
    let pipoyaTiles = map.addTilesetImage("pipoya", "pipoyaIMG");
    let pipoyafTiles = map.addTilesetImage("pipoyafaded", "pipoyafIMG");
    let StairsTiles = map.addTilesetImage("Stairs", "StairsIMG");

    let tilesArray = [horror22Tiles, hFurnitureTiles, pipoyaTiles, pipoyafTiles, StairsTiles];

    // Load in layers by layers
    this.GroundLayer = map.createLayer("Ground", tilesArray, 0, 0);
    this.FenceLayer = map.createLayer("Fence", tilesArray, 0, 0);
    this.TilesLayer = map.createLayer("Tiles", tilesArray, 0, 0);
    this.MatLayer = map.createLayer("Mat", tilesArray, 0, 0);
    this.StairsLayer = map.createLayer("Stairs", tilesArray, 0, 0);
    this.ToiletLayer = map.createLayer("Toilet", tilesArray, 0, 0);
    this.WallLayer = map.createLayer("Wall", tilesArray, 0, 0);
    this.Wall2Layer = map.createLayer("Wall2", tilesArray, 0, 0);
    this.Wall1Layer = map.createLayer("Wall1", tilesArray, 0, 0);
    this.FurnitureLayer = map.createLayer("Furniture", tilesArray, 0, 0);

    this.physics.world.bounds.width = this.GroundLayer.width;
    this.physics.world.bounds.height = this.GroundLayer.height;

    // Create collect objects
    let Key1 = map.findObject("Object Layer 2", (obj) => obj.name === "Key1");
    this.Key1 = this.physics.add.sprite(Key1.x, Key1.y, 'Key2IMG').play("KeyAnim")

    let Key2 = map.findObject("Object Layer 2", (obj) => obj.name === "Key2");
    this.Key2 = this.physics.add.sprite(Key2.x, Key2.y, 'Key2IMG').play("KeyAnim")

    let Key3 = map.findObject("Object Layer 2", (obj) => obj.name === "Key3");
    this.Journal1 = this.physics.add.sprite(Key3.x, Key3.y, 'Journal2IMG').play("JournalAnim")

    let Key4 = map.findObject("Object Layer 2", (obj) => obj.name === "Key4");
    this.Journal2 = this.physics.add.sprite(Key4.x, Key4.y, 'Journal2IMG').play("JournalAnim")

    let Key5 = map.findObject("Object Layer 2", (obj) => obj.name === "Key5");
    this.Key5 = this.physics.add.sprite(Key5.x, Key5.y, 'Key2IMG').play("KeyAnim")


    // Create the player sprite at the Start object position
    let Start = map.findObject("Object Layer 1", (obj) => obj.name === "Start");
    this.player = this.physics.add.sprite(Start.x, Start.y, 'MainCharacterIMG');
    this.player.setCollideWorldBounds(true);

    this.player.body.setSize(this.player.width * 0.6, this.player.height * 0.8)

    // Create the enemy sprites
    let Enemy1 = map.findObject("Object Layer 2", (obj) => obj.name === "Enemy1");
    this.Enemy1 = this.physics.add.sprite(Enemy1.x, Enemy1.y, 'SkeletonIMG').play("Skeleton-right")
    this.Enemy1.body.setSize(this.Enemy1.width * 0.6, this.Enemy1.height * 0.8)
    this.tweens.add({
      targets: this.Enemy1,
      x: 280,
      flipX: true,
      yoyo: true,
      duration: 1800,
      repeat: -1
    })

    let Enemy2 = map.findObject("Object Layer 2", (obj) => obj.name === "Enemy2");
    this.Enemy2 = this.physics.add.sprite(Enemy2.x, Enemy2.y, 'JackIMG');
    this.Enemy2.body.setSize(this.Enemy2.width * 0.6, this.Enemy2.height * 0.8)
    this.tweens.add({
      targets: this.Enemy2,
      y: 800,
      flipY: false,
      yoyo: true,
      duration: 4000,
      repeat: -1,

      onYoyo: () => {
        console.log('onYoyo, play Enemy2-up anims');
        this.Enemy2.play("Jack-up")

      },
      onRepeat: () => {
        console.log('onRepeat, play Enemy2-down anims');
        this.Enemy2.play("Jack-down")
      },
    })

    let Enemy3 = map.findObject("Object Layer 2", (obj) => obj.name === "Enemy3");
    this.Enemy3 = this.physics.add.sprite(Enemy3.x, Enemy3.y, 'SkeletonIMG').play("Skeleton-left")
    this.Enemy3.body.setSize(this.Enemy3.width * 0.6, this.Enemy3.height * 0.8)
    this.tweens.add({
      targets: this.Enemy3,
      x: 280,
      flipX: true,
      yoyo: true,
      duration: 4000,
      repeat: -1
    })

    let Enemy4 = map.findObject("Object Layer 2", (obj) => obj.name === "Enemy4");
    this.Enemy4 = this.physics.add.sprite(Enemy4.x, Enemy4.y, 'JackIMG');
    this.Enemy4.body.setSize(this.Enemy4.width * 0.6, this.Enemy4.height * 0.8)
    this.tweens.add({
      targets: this.Enemy4,
      y: 300,
      flipY: false,
      yoyo: true,
      duration: 4000,
      repeat: -1,

      onYoyo: () => {
        console.log('onYoyo, play Enemy4-up anims');
        this.Enemy4.play("Jack-down")

      },
      onRepeat: () => {
        console.log('onRepeat, play Enemy4-down anims');
        this.Enemy4.play("Jack-up")
      },
    })


    // Enable debugging
    window.player = this.player;

    this.player.setCollideWorldBounds(true); // don't go out of the this.map

    // create the arrow keys
    this.cursors = this.input.keyboard.createCursorKeys();

    // camera follow player
    this.cameras.main.startFollow(this.player);

    // glow effect
    this.Key1.postFX.addGlow(0xffffff, 4, 0, false, 0.1, 32);
    this.Key2.postFX.addGlow(0xffffff, 4, 0, false, 0.1, 32);
    this.Journal1.postFX.addGlow(0xffffff, 4, 0, false, 0.1, 32);
    this.Journal2.postFX.addGlow(0xffffff, 4, 0, false, 0.1, 32);
    this.Key5.postFX.addGlow(0xffffff, 4, 0, false, 0.1, 32);

    // add collider
    // this.Wall.setCollideWorldBounds(-1, true)
    this.WallLayer.setCollisionByExclusion(-1, true);
    this.Wall1Layer.setCollisionByExclusion(-1, true);
    this.Wall2Layer.setCollisionByExclusion(-1, true);
    this.FenceLayer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.WallLayer)
    this.physics.add.collider(this.player, this.Wall1Layer)
    this.physics.add.collider(this.player, this.Wall2Layer)
    this.physics.add.collider(this.player, this.FenceLayer)

    // Call to update inventory items
    this.time.addEvent({
      delay: 100,
      callback: updateInventory,
      callbackScope: this,
      loop: false,
    });

    // start another scene in parallel
    this.scene.launch("showInventory");

    // Call globalFunction globalHitEnemy on overlap
    this.physics.add.overlap(this.player, [this.Enemy1, this.Enemy2, this.Enemy3, this.Enemy4], globalHitEnemy, null, this);

    // collect items
    this.physics.add.overlap(this.player, [this.Key1, this.Key2, this.Key5], globalCollectKey, null, this);
    this.physics.add.overlap(this.player, [this.Journal1, this.Journal2], globalCollectJournal, null, this);

    // this.physics.add.overlap(this.player, [this.Enemy1, this.Enemy2, this.Enemy3, this.Enemy4], globalHitEnemy, null, this);
    // this.physics.add.overlap(this.player, [this.key1, this.key2], globalCollectKey, null, this);
    // this.physics.add.overlap(this.player, [this.key1, this.key2], globalCollectKey, null, this);



    // // Key to reload the game
    // var bDown = this.input.keyboard.addKey('B');
    // bDown.on('down', function () {
    //   console.log("B pressed (room1)");
    //   this.scene.start("room2");
    // }, this);

    // Add a full-screen tint overlay
    this.tintOverlay = this.add.graphics({ x: 0, y: 0, fillStyle: { color: 0x000000, alpha: 0.5 } });
    this.tintOverlay.fillRect(0, 0, this.cameras.main.width, this.cameras.main.height);
    this.tintOverlay.setScrollFactor(0); // Make sure it stays in place with the camera

  }/////////////////// end of create //////////////////////////////

  update() {
    let speed = 200;

    if (
      this.player.x < 20 &&
      this.player.y < 550 &&
      this.player.y > 409
    ) {
      console.log("Go to Room1 function");
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
  hitEnemy(player, enemy) {
    console.log("Player hit enemy");

    // shake screen
    this.cameras.main.shake(300);

    // disable enemy body
    enemy.disableBody(true, true);
  }


  // Function to jump to room1
  world(player, tile) {
    console.log("world function");
    this.scene.start("world");
  }

}
