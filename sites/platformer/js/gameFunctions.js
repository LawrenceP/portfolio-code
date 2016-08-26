var gameFunctions = {

	createFloor: function(tile) {
		var forX = 0;
		for (var i = 0; i <= 18; i++) {
			ledgeProperties.push({ x:forX, y:game.world.height - 40});
			forX += 70;
		}
		for (i = 0; i < ledgeProperties.length; i++) {
		    var ledge = platforms.create(ledgeProperties[i].x, ledgeProperties[i].y, tile);

			ledge.body.immovable = true;
		}
	},
	playerGetsKey: function() {
		key.kill();
		blueKeyIcon = game.add.image(25,50,'blueKeyIcon');

		door.frame = 1;
		canExit = true;
	},

	collectCoin: function(player, coin) {

	    coin.kill();

	    score += 1;
	    scoreText.text = 'coins: ' + score;

	},

    playerDie: function(enemy, player) {
    	var heightDiff = Math.abs(player.height - enemy.height);

    	enemyHalfHeight = enemy.height / 2;
    	playerY = Math.abs(player.y - game.world.height);
    	playerY = playerY - player.height;
    	enemyY = Math.abs(enemy.y  - game.world.height);
    	enemyY = enemyY - enemyHalfHeight;

    	console.log(playerY);
    	console.log(enemyY);

    	if (playerY  > enemyY) {
    		enemy.kill();
    	} else {
    		player.kill();
    		game.state.start('lose');
    	}

    },

	createPlatformGroup: function() {
		platforms = game.add.group();
		platforms.enableBody = true;
	},

	lowerPlatform: function(startX, startY, subType, length) {
		for (var i = length; i >= 0; i--) {
			grass = platforms.create(startX, startY, subType);
			grass.body.immovable = true;
			startX += 70;
		}		
	},

	upperPlatform: function(startX, startY, subTypeLeft, subTypeMid, subTypeRight, length) {

		platformHalfLeft = platforms.create(startX, startY, subTypeLeft);
		platformHalfLeft.body.immovable = true;
		startX += 70;

		for (var i = length -2; i >= 0; i--) {
			platformHalfMid = platforms.create(startX, startY, subTypeMid);
			platformHalfMid.body.immovable = true;
			startX += 70;
		}

		platformHalfRight = platforms.create(startX, startY, subTypeRight);
		platformHalfRight.body.immovable = true;
	},

	lowerWater: function(startX, startY, length) {
		for (var i = length - 2; i >= 0; i--) {
			liquidWater = game.add.image(startX, startY, 'liquidWater');
			startX += 70;
		}			
	},

	upperWater: function(startX, startY, length) {
		for (var i = length - 2; i >= 0; i--) {
			liquidWaterTop = game.add.image(startX, startY, 'liquidWaterTop');
			startX += 70;
		}				
	},

	createPlatform: function(type, upperOrLower, startX, startY, length, heightLength) {

		if (type == 'grass') {
			if (upperOrLower == 'upper') {
				this.upperPlatform(startX, startY, 'grassHalfLeft', 'grassHalfMid', 'grassHalfRight', length);
			}
			if (upperOrLower == 'lower') {
				this.lowerPlatform(startX, startY, 'grassLower', length);
			}
		}

		if (type == 'sand') {
			if (upperOrLower == 'upper') {
				this.upperPlatform(startX, startY, 'sandHalfLeft', 'sandHalfMid', 'sandHalfRight', length);
			}
			if (upperOrLower == 'lower') {
				this.lowerPlatform(startX, startY, 'sandLower', length);
			}
		}

		if (type == 'water') {
			if (upperOrLower == 'upper') {
				this.upperWater(startX, startY, length);
			}
			if (upperOrLower == 'lower') {
				this.lowerWater(startX, startY, length);
			}
		}

	},

	createDoor: function(doorX, doorY, door2X, door2Y) {
		door = game.add.sprite(doorX, doorY, 'door');
		door.frame = 2;

		if (door2X) {
			door2 = game.add.sprite(door2X, door2Y, 'door');
			door2.frame = 2;
		}
	},

	createKey: function(keyX, keyY) {
		key = game.add.sprite(keyX, keyY, 'key');
		game.physics.arcade.enable(key);
	},

	createPlayer: function(playerX, playerY) {

	    player = game.add.sprite(playerX, playerY, 'dude');	    

	    game.physics.arcade.enable(player);

	    player.body.gravity.y = 500;
	    player.body.collideWorldBounds = true;

	    player.animations.add('left', [0, 1, 2, 3], 30, true);
	    player.animations.add('right', [5, 6, 7, 8], 30, true);

	},

	createEnemies: function(enemyDetails) {

		for (var i = 0; i < enemyDetails.length; i++) {

			enemyDetail = enemyDetails[i];

	        enemy = game.add.sprite(enemyDetail.x, enemyDetail.y, enemyDetail.type); 
		    game.physics.arcade.enable(enemy);	    
		    enemy.body.bounce.y = enemyDetail.bounce;
		    enemy.body.gravity.y = enemyDetail.gravity;
		    enemy.body.collideWorldBounds = true;
		    enemy.animations.add('left', enemyDetail.leftFrames, enemyDetail.frames, true);
	        enemy.animations.add('right', enemyDetail.rightFrames, enemyDetail.frames, true);   
	        enemy.animations.play('right');
	        enemy.body.velocity.x = enemyDetail.velocity;	
	        enemy.eId = enemyDetail.eId;		
				
		}
	},

	createCoins: function(coinXY) {

		coins = game.add.group();

		coins.enableBody = true;

		for (var i = 0; i < coinXY.length; i++)
		{
		    var coin = coins.create(coinXY[i].x, coinXY[i].y, 'coin');
		}

	},

	gameSetup: function(background) {
	    game.physics.startSystem(Phaser.Physics.ARCADE);

	    game.add.image(0, 0, background);

	    scoreText = game.add.text(25, 16, 'coins: ' + score, { fontSize: '20px', fill: '#333' });

	    cursors = game.input.keyboard.createCursorKeys();
	},

	createKeyIcon: function() {
		emptyBlueKeyIcon = game.add.image(25,50,'emptyBlueKeyIcon');
	}
};