var loadState = {
	preload: function() {
	    game.load.image('sky', 'assets/sky.png');
	    game.load.image('sky2', 'assets/sky2NoClouds.png');
	    game.load.image('ground', 'assets/platform.png');
	    game.load.image('coin', 'assets/Items/coinGold.png');
	    game.load.spritesheet('dude', 'assets/p1_spritesheet_sm_new.png', 35, 48, 50);
	    game.load.spritesheet('enemy', 'assets/baddie.png', 32, 32);
	    game.load.spritesheet('enemyFish', 'assets/fishSprite.png', 55, 37);
	    game.load.spritesheet('door', 'assets/door-sprite.png', 70,110,2);
	    game.load.image('grassHalfLeft', 'assets/grass-half-left-high.png');
	    game.load.image('grassHalfMid', 'assets/grassHalfMid.png');
	    game.load.image('grassHalfRight', 'assets/grass-half-right-high.png');
	    game.load.image('grassHalf', 'assets/grassHalf.png');
	    game.load.image('grassLower', 'assets/grassCenter.png');
	    game.load.image('sandHalfLeft', 'assets/sand-half-left-high.png');
	    game.load.image('sandHalfMid', 'assets/sandHalfMid.png');
	    game.load.image('sandHalfRight', 'assets/sand-half-right-high.png');
	    game.load.image('sandHalf', 'assets/sandHalf.png');
	    game.load.image('sandHalfMidHigh', 'assets/sand-half-mid-high.png');
	    game.load.image('sandLower', 'assets/sandCenter.png');
	    game.load.image('liquidWater', 'assets/liquidWater.png');
	    game.load.image('liquidWaterTop', 'assets/liquidWaterTop_mid.png');
	    game.load.image('key', 'assets/KeyBlue.png');
		game.load.image('tile', 'assets/tile-sm.png');
		game.load.image('emptyBlueKeyIcon', 'assets/hud_keyBlue_disabled.png');
		game.load.image('blueKeyIcon', 'assets/hud_keyBlue.png');
	},

	create: function() {
		game.state.start('menu');
	}
};