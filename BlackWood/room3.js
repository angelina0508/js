class room3 extends Phaser.Scene {

  constructor() {
    super('room3');
  }

  // Incoming data from the previous scene
  init(data) {
    this.player = data.player;
    this.inventory = data.inventory;
  }

  preload() {
    // Step 1, load JSON
    // this.load.tilemapTiledJSON("room3", "assets/OldMansion.tmj");

    // // this.load.image("road", "assets/road.png");
    // this.load.image("horror22IMG", "assets/horrorCollection22.png");
    // this.load.image("hFurnitureIMG", "assets/horrorFurniture.png");
    // this.load.image("pipoyaIMG", "assets/pipoya.png");
    // this.load.image("pipoya2IMG", "assets/pipoya2.png");
    // this.load.image("StairsIMG", "assets/Stairs.png");
    // this.load.image("trees-greenIMG", "assets/trees-green.png");
    this.load.image("bullet", "assets/Arrow.png");


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
  } /////////////////// end of preload //////////////////////////////

  create() {
    this.scene.bringToTop("room3");
    console.log("*** room3 scene");

    // Create the map
    let map = this.make.tilemap({ key: "room3" });

    // Load the game tiles
    // 1st parameter is name in Tiled,
    // 2nd parameter is key in Preload
    let horror22Tiles = map.addTilesetImage("horrorCollection22", "horror22IMG");
    let hFurnitureTiles = map.addTilesetImage("horrorFurniture", "hFurnitureIMG");
    let pipoyaTiles = map.addTilesetImage("pipoya", "pipoyaIMG");
    let pipoya2Tiles = map.addTilesetImage("pipoya2", "pipoya2IMG");
    let StairsTiles = map.addTilesetImage("Stairs", "StairsIMG");
    let treesgreenTiles = map.addTilesetImage("trees-green", "trees-greenIMG");

    let tilesArray = [horror22Tiles, hFurnitureTiles, pipoyaTiles, pipoya2Tiles, StairsTiles, treesgreenTiles];

    // Load in layers by layers
    this.groundLayer = map.createLayer("ground", tilesArray, 0, 0);
    this.FloorLayer = map.createLayer("FloorTiles", tilesArray, 0, 0);
    this.FootprintsLayer = map.createLayer("Footprints", tilesArray, 0, 0);
    this.Wall2Layer = map.createLayer("Wall2", tilesArray, 0, 0);
    this.WindowsLayer = map.createLayer("Windows", tilesArray, 0, 0);
    this.CurtainLayer = map.createLayer("Curtain", tilesArray, 0, 0);
    this.FurnitureLayer = map.createLayer("Furniture", tilesArray, 0, 0);
    this.DecorationLayer = map.createLayer("Decoration", tilesArray, 0, 0);
    this.Wall3Layer = map.createLayer("Wall3", tilesArray, 0, 0);
    this.Wall4Layer = map.createLayer("Wall4", tilesArray, 0, 0);
    this.FenceLayer = map.createLayer("Fence", tilesArray, 0, 0);
    this.TreesSmallLayer = map.createLayer("Trees_Small", tilesArray, 0, 0);
    this.TreesLayer = map.createLayer("Trees", tilesArray, 0, 0);


    this.physics.world.bounds.width = this.groundLayer.width;
    this.physics.world.bounds.height = this.groundLayer.height;


    // Create the player sprite at the Start object position
    let Start = map.findObject("Object Layer 1", (obj) => obj.name === "Start");
    this.player = this.physics.add.sprite(Start.x, Start.y, 'MainCharacterIMG');
    this.player.setCollideWorldBounds(true);

    this.player.body.setSize(this.player.width * 0.6, this.player.height * 0.8)

    // Create the enemy sprites
    let Enemy1 = map.findObject("Object Layer 1", (obj) => obj.name === "Enemy1");
    this.Enemy1 = this.physics.add.sprite(Enemy1.x, Enemy1.y, 'SkeletonIMG').play("Skeleton-left")

    this.Enemy1.body.setSize(this.Enemy1.width * 0.6, this.Enemy1.height * 0.8)

    this.tweens.add({
      targets: this.Enemy1,
      x: 330,
      flipX: true,
      yoyo: true,
      duration: 1800,
      repeat: -1
    })

    let Enemy2 = map.findObject("Object Layer 1", (obj) => obj.name === "Enemy2");
    this.Enemy2 = this.physics.add.sprite(Enemy2.x, Enemy2.y, 'JackIMG');
    this.Enemy2.body.setSize(this.Enemy2.width * 0.6, this.Enemy2.height * 0.8)

    this.tweens.add({
      targets: this.Enemy2,
      y: 460,
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

    let Enemy3 = map.findObject("Object Layer 1", (obj) => obj.name === "Enemy3");
    this.Enemy3 = this.physics.add.sprite(Enemy3.x, Enemy3.y, 'SkeletonIMG').play("Skeleton-left")
    this.Enemy3.body.setSize(this.Enemy3.width * 0.6, this.Enemy3.height * 0.8)

    this.tweens.add({
      targets: this.Enemy3,
      x: 720,
      flipX: true,
      yoyo: true,
      duration: 4000,
      repeat: -1
    })

    let Enemy4 = map.findObject("Object Layer 1", (obj) => obj.name === "Enemy4");
    this.Enemy4 = this.physics.add.sprite(Enemy4.x, Enemy4.y, 'JackIMG').play("Jack-right")
    this.Enemy4.body.setSize(this.Enemy4.width * 0.6, this.Enemy4.height * 0.8)

    this.tweens.add({
      targets: this.Enemy4,
      x: 920,
      flipX: true,
      yoyo: true,
      duration: 4000,
      repeat: -1
    })

    let Enemy5 = map.findObject("Object Layer 1", (obj) => obj.name === "Enemy5");
    this.Enemy5 = this.physics.add.sprite(Enemy5.x, Enemy5.y, 'JackIMG');
    this.Enemy5.body.setSize(this.Enemy5.width * 0.6, this.Enemy5.height * 0.8)

    this.tweens.add({
      targets: this.Enemy5,
      y: 350,
      flipY: false,
      yoyo: true,
      duration: 3500,
      repeat: -1,

      onYoyo: () => {
        // console.log('onYoyo, play Enemy5-up anims');
        this.Enemy5.play("Jack-down")

      },
      onRepeat: () => {
        // console.log('onRepeat, play Enemy5-down anims');
        this.Enemy5.play("Jack-up")
      },
    })

    let Enemy6 = map.findObject("Object Layer 1", (obj) => obj.name === "Enemy6");
    this.Enemy6 = this.physics.add.sprite(Enemy6.x, Enemy6.y, 'SkeletonIMG').play("Skeleton-left")
    this.Enemy6.body.setSize(this.Enemy6.width * 0.6, this.Enemy6.height * 0.8)

    this.tweens.add({
      targets: this.Enemy6,
      x: 320,
      flipX: true,
      yoyo: true,
      duration: 5000,
      repeat: -1
    })


    // Enable debugging
    window.player = this.player;

    this.bullet = this.physics.add.sprite(
      this.player.x,
      this.player.y,
      "bullet"
    )
    this.bullet.setVisible(false);

    let attackLeft = this.input.keyboard.addKey("z");
    let attackRight = this.input.keyboard.addKey("x");

    attackLeft.on(
      "down",
      function () {
        this.attackLeft();
      },
      this
    );

    attackRight.on(
      "down",
      function () {
        this.attackRight();
      },
      this
    );

    this.player.setCollideWorldBounds(true); // don't go out of the this.map

    // create the arrow keys
    this.cursors = this.input.keyboard.createCursorKeys();

    // camera follow player
    this.cameras.main.startFollow(this.player);

    // add collider
    // this.Wall.setCollideWorldBounds(-1, true)
    this.Wall2Layer.setCollisionByExclusion(-1, true);
    this.Wall3Layer.setCollisionByExclusion(-1, true);
    this.Wall4Layer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.Wall2Layer)
    this.physics.add.collider(this.player, this.Wall3Layer)
    this.physics.add.collider(this.player, this.Wall4Layer)


    // this.physics.add.collider(this.player, [this.Wall])

    // this.physics.add.overlap(this.player, [this.Enemy1, this.Enemy2, this.Enemy3, this.Enemy4, this.Enemy5, this.Enemy6], this.hitEnemy, null, this);

    // Call to update inventory items
    this.time.addEvent({
      delay: 100,
      callback: updateInventory,
      callbackScope: this,
      loop: false,
    });

    // start another scene in parallel
    this.scene.launch("showInventory");

    // Call globalFunction globalHitFire on overlap
    this.physics.add.overlap(this.player, [this.Enemy1, this.Enemy2, this.Enemy3, this.Enemy4, this.Enemy5, this.Enemy6], globalHitEnemy, null, this);
    this.physics.add.overlap(this.player, [this.key1, this.key2], globalCollectKey, null, this);
    this.physics.add.overlap(this.bullet, [this.Enemy1, this.Enemy2, this.Enemy3, this.Enemy4, this.Enemy5, this.Enemy6], globalShootEnemy, null, this);



    // // Key to reload the game
    // var bDown = this.input.keyboard.addKey('B');
    // bDown.on('down', function () {
    //   console.log("C pressed (room3)");
    //   this.scene.start("room3");
    // }, this);

    // Add a full-screen tint overlay
    this.tintOverlay = this.add.graphics({ x: 0, y: 0, fillStyle: { color: 0x000000, alpha: 0.5 } });
    this.tintOverlay.fillRect(0, 0, this.cameras.main.width, this.cameras.main.height);
    this.tintOverlay.setScrollFactor(0); // Make sure it stays in place with the camera

  }/////////////////// end of create //////////////////////////////

  update() {
    let speed = 200;

    // if (
    //   this.player.x < 60 &&
    //   this.player.y < 486 &&
    //   this.player.y > 473
    // ) {
    //   console.log("Go to world function");
    //   this.world();
    // }

    if (window.enemy > 5) {
      this.win()
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

  attackLeft() {

    console.log("attack left");

    this.bullet.x = this.player.x;
    this.bullet.y = this.player.y;

    this.bullet.setVisible(true);
    this.bullet.body.setEnable(true);

    // speed of the bullet
    this.bullet.body.setVelocityX(-500);
  }

  attackRight() {

    console.log("attack right");

    this.bullet.x = this.player.x;
    this.bullet.y = this.player.y;

    this.bullet.setVisible(true);
    this.bullet.body.setEnable(true);

    // speed of the bullet
    this.bullet.body.setVelocityX(500);
  }


  //  // Function to jump to room1
  //  world(player, tile) {
  //   console.log("world function");
  //   this.scene.start("world");
  // }

  // Function to jump to room1
  win(player, tile) {
    console.log("win function");
    this.scene.start("win");
  }

}
