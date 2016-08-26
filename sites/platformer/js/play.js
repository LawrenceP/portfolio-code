var playState = {

	create: function() {

	    this.gameSetup('sky');

	    this.createPlatformGroup();

	    this.createWorld();

	    this.createPlayer(68, game.world.height - 84);

	    this.createEnemies(
	    	[
	    		{
					eId: 'enemyPig',
					x: 500,
					y: game.world.height - 368,
					type: 'enemy',
					bounce: 0,
					gravity: 400,
					leftFrames: [0,1],
					rightFrames: [2,3],
					frames: 4,
					velocity: 200				
				}
	    	]
	    );

	    console.log(game.world.height);

	    this.createCoins(
	    	[
	    		{ x: 233, y:  game.world.height - 75}, 
	    		{ x: 337, y: (game.world.height - 75) - 100},
	    		{ x: 441, y: (game.world.height - 75) - 200},
	    		{ x: 545, y: (game.world.height - 75) - 300},
	    		{ x: game.world.width - 545 - 36, y: (game.world.height - 75) - 300},
	    		{ x: game.world.width - 441 - 36, y: (game.world.height - 75) - 200},
	    		{ x: game.world.width - 337 - 36, y: (game.world.height - 75) - 100},
	    		{ x: game.world.width - 233 - 36, y:  game.world.height - 75},
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

	    //  Allow the player to jump if they are touching the ground.
	    if (cursors.up.isDown && player.body.touching.down)
	    {
	        player.body.velocity.y = -350;
	    }

       	if(enemy.x > 750){
            enemy.body.velocity.x = -200;    
            enemy.animations.play('left');
        } else if (enemy.x < 520) {
            enemy.body.velocity.x = 200;
            enemy.animations.play('right');
        }

	    game.physics.arcade.collide(enemy, platforms, moveEnemy);
	    game.physics.arcade.collide(enemy, player, this.playerDie);
	    game.physics.arcade.collide(coins, platforms);
	    game.physics.arcade.overlap(player, coins, this.collectCoin, null, this);
	    game.physics.arcade.collide(player, key, this.playerGetsKey);

	    if ( (player.x > 1190 && player.x < 1234) && (player.y > 470 && player.y < 490) && (canExit === true) ) {
	    	player.kill();
	    	game.state.start('play2');
	    }

	},

	createWorld: function() {

		this.createPlatform('grass','upper', (game.world.width / 2) - (70 * 1.5) -35,  game.world.height - 340, 3);
		this.createPlatform('grass','lower', (game.world.width / 2) - (70 * 1.5) -35, (game.world.height - 340) + 40, 3);

		this.createPlatform('grass','upper', (game.world.width / 2) - (70 * 3) -35,  game.world.height - 240, 6);
		this.createPlatform('grass','lower', (game.world.width / 2) - (70 * 3) -35, (game.world.height - 240) + 40, 6);

		this.createPlatform('grass','upper', (game.world.width / 2) - (70 * 4.5) -35,  game.world.height - 140, 9);
		this.createPlatform('grass','lower', (game.world.width / 2) - (70 * 4.5) -35, (game.world.height - 140) + 40, 9);

		this.createFloor('grassHalfMid');

		this.createDoor(game.width - 125, game.height - 150);

		this.createKey((game.world.width / 2) - 35, game.world.height - 390);

		this.createKeyIcon();
	}

};

jQuery.extend(playState, gameFunctions);