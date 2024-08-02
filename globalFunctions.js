////////////////////////////////////////////////////////
//
// access this function using updateInventory.call(this)
// Uses a JS function to prevent repeated codes
// 
///////////////////////////////////////////////////////
function updateInventory() {
  console.log("*** updateInventory()")
  // Emit events showInventory
  this.inventory = {}
  this.inventory.key = window.key
  this.inventory.journal = window.journal
  this.inventory.bow = window.bow
  this.inventory.pam = window.pam
  this.inventory.heart = window.heart

  console.log('*** updateInventory() Emit event', this.inventory)
  this.invEvent = (event, data) => {
    this.scene.get('showInventory').events.emit(event, data);
  }
  this.invEvent("inventory", this.inventory);
}

////////////////////////////////////////////////////////
//
// access this function with globalHitFire
// Uses a JS function to prevent repeated codes
// 
///////////////////////////////////////////////////////
function globalHitEnemy(player, item) {
  console.log("*** player overlap enemy");

  // Shake screen
  this.cameras.main.shake(100);

  //this.hitenemySnd.play();

  // deduct heart
  window.heart--;
  console.log(window.heart)
  item.disableBody(true, true);

  this.hitEnemySnd = this.sound.add("hitSound").setVolume(1);
  this.hitEnemySnd.play()

  // Call globalFunctions.js updateInventory
  updateInventory.call(this)

  if (window.heart == 0) {
    console.log("*** player gameOver");
    this.scene.start("gameOver");
    //this.loselifeSnd.play();


  }
}

////////////////////////////////////////////////////////
//
// access this function with globalCollectKey
// Uses a JS function to prevent repeated codes
// 
/////////////////////////////////////////////////////// 
function globalCollectKey(player, item) {
  console.log("*** player overlap key");

  // Shake screen
  this.cameras.main.shake(100);
  // collect items sound
  this.collectKeySnd = this.sound.add("collectItems").setVolume(1);
  // play the sound
  this.collectKeySnd.play()


  //this.hitenemySnd.play();

  // increase key count
  window.key++;
  item.disableBody(true, true);
  updateInventory.call(this)
}

function globalCollectJournal(player, item) {
  console.log("*** player overlap key");

  // Shake screen
  this.cameras.main.shake(100);
  // collect items sound
  this.collectKeySnd = this.sound.add("collectItems").setVolume(1);
  // play the sound
  this.collectKeySnd.play()


  //this.hitenemySnd.play();

  // increase key count
  window.journal++;
  item.disableBody(true, true);
  updateInventory.call(this)
}

function globalCollectBow(player, item) {
  console.log("*** player overlap key");

  // Shake screen
  this.cameras.main.shake(100);
  // collect items sound
  this.collectKeySnd = this.sound.add("collectItems").setVolume(1);
  // play the sound
  this.collectKeySnd.play()


  //this.hitenemySnd.play();

  // increase key count
  window.bow++;
  item.disableBody(true, true);
  updateInventory.call(this)
}

function globalCollectMap2(player, item) {
  console.log("*** player overlap key");

  // Shake screen
  this.cameras.main.shake(100);
  // collect items sound
  this.collectKeySnd = this.sound.add("collectItems").setVolume(1);
  // play the sound
  this.collectKeySnd.play()


  //this.hitenemySnd.play();

  // increase key count
  window.pam++;
  item.disableBody(true, true);
  updateInventory.call(this)
}

function globalShootEnemy(player, item) {
  console.log("*** bullet overlap enemy");

  // Shake screen
  this.cameras.main.shake(100);
  // arrow shoot sound
  // this.arrowShootSnd = this.sound.add("arrowShoot").setVolume(1);
  // play the sound
  // this.arrowShootSnd.play()

  window.enemy++

  //this.hitenemySnd.play();

  // // deduct heart
  // window.heart--;
  // item.disableBody(true, true);

  // this.hitEnemySnd = this.sound.add("hitSound").setVolume(1);
  // this.hitEnemySnd.play()

  // if (window.heart == 0) {
  //   console.log("*** player gameOver");
  //   this.scene.start("gameOver");
  //   //this.loselifeSnd.play();

  // increase key count
  item.disableBody(true, true);
  updateInventory.call(this)
}
