//game will have only 1 state
var GameState = {
    //initiate game settings
    init: function() {
        //adapt to screen size, fit all the game
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.physics.arcade.gravity.y = 1000
        this.cursors = this.game.input.keyboard.createCursorKeys();
        this.game.world.setBounds(0, 0, 600, 375);
    },

    preload: function() {
        this.load.image("arrow", "assets/images/arrow-19-512.png");
    },

    create: function() {
        var style = {
            font: "25px helvetica",
            fill: "#ffffff",
            align: "center"
        }
        var ripped = "The 1.4 million dollar TSA APP\nTap the Arrow.";
        var taxPayersGotOwned = game.add.text(game.width / 2, game.height / 2 - 150, ripped, style);
        taxPayersGotOwned.anchor.setTo(0.5);
        taxPayersGotOwned.stroke = '#000000';
        taxPayersGotOwned.strokeThickness = 8;

        //var money = predictions[game.rnd.between(0, 1)];
        var money = Math.floor(Math.random() * 2);
        var imRich;

        //million dollas right here.
        this.millionDollaFunction(money);
    },

     fadeOut: function() {
        if (this.arrowButton.input.enabled === true) {
            this.arrowButton.input.enabled = false;
            this.arrowButton.alpha = 0.1;
           
            console.log("hello");
            game.time.events.add(Phaser.Timer.SECOND * 0.1, function(randomText, arrowButton){
                this.arrowButton.destroy();
                var money = Math.floor(Math.random() * 2);
                this.millionDollaFunction(money);
                this.arrowButton.input.enable = true;
            }, this);
        }
    },

    millionDollaFunction: function (showMeTheMoney) {
        imRich = (showMeTheMoney <1 ) ? this.rightArrow():this.leftArrow();
    },

        rightArrow: function() {
            this.arrowButton = game.add.button(game.width / 2, game.height - 150, "arrow", this.fadeOut, this);
            this.arrowButton.anchor.set(0.5);
            this.arrowButton.scale.setTo(-1, 0.5);
    },

        leftArrow: function() {
            this.arrowButton = game.add.button(game.width / 2, game.height - 150, "arrow", this.fadeOut, this);
            this.arrowButton.anchor.set(0.5);
            this.arrowButton.scale.setTo(1, 0.5);
    },
};

var game = new Phaser.Game(600, 375, Phaser.AUTO);
game.state.add('GameState', GameState);
game.state.start('GameState');