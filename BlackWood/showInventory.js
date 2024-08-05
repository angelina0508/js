class showInventory extends Phaser.Scene {

    constructor() {
        super({
            key: 'showInventory',
            active: false
        });
    }

    init(data) {
        this.player = data.player;
        this.inventory = data.inventory;
    }

    preload() {
        //Load heart image
        this.load.image('heart', 'assets/heart.png');
        this.load.image('key', 'assets/Key.png');
        this.load.image('journal', 'assets/Journal.png');
        this.load.image("bow", "assets/Bow.png");
        this.load.image("pam", "assets/Map.png");
    }

    create() {

        //Place hearts at the top screen
        // console.log("***showInventory");
        this.scene.bringToTop("showInventory");

        //black bar
        // var rect = new Phaser.Geom.Rectangle(29, 10, 500, 80);
        // var graphics = this.add.graphics({ fillStyle: { color: '0xffffff' } });
        // graphics.fillRectShape(rect).setScrollFactor(0)

        // Setup heart but visible to false
        this.heartimg1 = this.add.image(60, 43, 'heart').setScrollFactor(0).setVisible(false).setScale(0.15);
        this.heartimg2 = this.add.image(130, 43, 'heart').setScrollFactor(0).setVisible(false).setScale(0.15);
        this.heartimg3 = this.add.image(200, 43, 'heart').setScrollFactor(0).setVisible(false).setScale(0.15);

        this.key = this.add.image(570, 50, 'key').setScrollFactor(0).setVisible(true).setScale(1.25);
        this.key = this.add.image(670, 50, 'journal').setScrollFactor(0).setVisible(true).setScale(1.25);
        this.key = this.add.image(770, 50, 'bow').setScrollFactor(0).setVisible(true).setScale(1.25);
        this.key = this.add.image(870, 50, 'pam').setScrollFactor(0).setVisible(true).setScale(1.25);


        // Recv an event, call the method
        this.events.on('inventory', this.updateScreen, this)

        //Setup key VideoType Regular

        this.keyNum = this.add.text(600, 25, window.key, { font: '35px VideoType Regular', fill: '#FFFFFF' }).setScrollFactor(0);
        this.journalNum = this.add.text(700, 25, window.journal, { font: '35px VideoType Regular', fill: '#FFFFFF' }).setScrollFactor(0);
        this.bowNum = this.add.text(800, 25, window.bow, { font: '35px VideoType Regular', fill: '#FFFFFF' }).setScrollFactor(0);
        this.pamNum = this.add.text(900, 25, window.pam, { font: '35px VideoType Regular', fill: '#FFFFFF' }).setScrollFactor(0);


    } //end of create

    updateScreen(data) {
        // console.log('Received event inventory', data);

        this.keyNum.setText(data.key);
        this.journalNum.setText(data.journal)
        this.bowNum.setText(data.bow)
        this.pamNum.setText(data.pam)

        switch (data.heart) {

            case 3:
                this.heartimg1.setVisible(true)
                this.heartimg2.setVisible(true)
                this.heartimg3.setVisible(true)
                break;

            case 2:
                this.heartimg1.setVisible(true)
                this.heartimg2.setVisible(true)
                this.heartimg3.setVisible(false)
                break;

            case 1:
                this.heartimg1.setVisible(true)
                this.heartimg2.setVisible(false)
                this.heartimg3.setVisible(false)
                break;

            case 0:
                this.heartimg1.setVisible(false)
                this.heartimg2.setVisible(false)
                this.heartimg3.setVisible(false)
                break;

            default:
                break;
        }

    }

} // end of class
