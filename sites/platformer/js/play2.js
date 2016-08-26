var play2State = {

	create: function() {

	    this.gameSetup('sky2');

	    this.createPlatformGroup();

	    this.createWorld();

	    this.createPlayer(78, game.world.height - 155);

	    this.createEnemies(
			[
				{
					eId: 'fishEnemy',
					x: 500,
					y: game.world.height - 55,
					type: 'enemyFish',
					bounce: 0,
					gravity: 0,
					leftFrames: [0,1],
					rightFrames: [2,3],
					frames: 4,
					velocity: 200
				}
			]
	    );

	    this.createCoins(
	    	[
	    		{ x: 195, y:  game.world.height - 144}, 
	    		{ x: 367, y: (game.world.height - 75) - 160},
	    		{ x: game.world.width - 367 - 36, y: (game.world.height - 75) - 160},
	    		{ x: game.world.width - 195 - 36, y:  game.world.height - 144},
	    	]
	    );

	},

	update: function() {

	    game.physics.arcade.collide(player, platforms);

	    player.body.velocity.x = 0;

	    if (cursors.left.isDown)
	    {
	        player.body.velocity.x = -150;

	        player.animations.play('left');

	        game.camera.x--;
	    }
	    else if (cursors.right.isDown)
	    {
	        player.body.velocity.x = 150;

	        player.animations.play('right');

	        game.camera.x++;
	    }
	    else
	    {
	        player.animations.stop();

	        player.frame = 4;
	    }

	    if (cursors.up.isDown && player.body.touching.down)
	    {
	        player.body.velocity.y = -350;
	    }

       	if(enemy.x > 990){
            enemy.body.velocity.x = -200;    
            enemy.animations.play('left');
        } else if (enemy.x < 250) {
            enemy.body.velocity.x = 200;
            enemy.animations.play('right');
        }

	    game.physics.arcade.collide(enemy, platforms, moveEnemy);
	    game.physics.arcade.collide(enemy, player, this.playerDie);
	    game.physics.arcade.collide(coins, platforms);
	    game.physics.arcade.overlap(player, coins, this.collectCoin, null, this);
	    game.physics.arcade.collide(player, key, this.playerGetsKey);

	    if ( (player.x > 1175 && player.x < 1205) && (player.y > 400 && player.y < 420) && (canExit === true) ) {
	    	player.kill();
	    	game.state.start('win');
	    }

	    console.log(player.x, player.y);

	},

	createWorld: function() {

		platformLength = 13;
		platformHeight =  game.world.height - 110;
		platformX = 230;
		
		this.createPlatform('water', 'upper', platformX, platformHeight, 	platformLength);
		this.createPlatform('water', 'lower', platformX, (platformHeight += 70), 			platformLength);

		platFormHalfXY = [
			{
				x: 350,
				y: game.height - 200
			},
			{
				x: game.width - 350 - 70,
				y: game.height - 200
			},
			{
				x: (game.width / 2) - 35,
				y: game.height - 200
			}
		];

		for (var i = 0; i < platFormHalfXY.length; i++) {
			platFormHalf = platforms.create(platFormHalfXY[i].x, platFormHalfXY[i].y, 'sandHalf');
			platFormHalf.body.immovable = true;
		}

		platformLength = 3;
		platformHeight = 110;
		platformX = -50;
		this.createPlatform('sand', 'upper', platformX, game.world.height - (platformHeight), 		platformLength);
		for (var i = 0; i < 1; i++) {
			this.createPlatform('sand', 'lower', platformX, game.world.height - (platformHeight -= 40), platformLength);	
		}

		platformLength = 3;
		platformHeight = 110;
		platformX = game.world.width - 230;
		this.createPlatform('sand', 'upper', platformX, game.world.height - (platformHeight), 		platformLength);
		for (var i = 0; i < 1; i++) {
			this.createPlatform('sand', 'lower', platformX, game.world.height - (platformHeight -= 40), platformLength);	
		}

		this.createDoor(
			game.width - 130, 
			game.height - 220,   

			130 - 70, 
			game.height - 220
		);

		this.createKey((game.world.width / 2) - 35, game.world.height - 250 );

		this.createKeyIcon();
	}

};

jQuery.extend(play2State, gameFunctions);