var loseState = {

	create: function() {
		game.input.mouse.capture = true;
		game.add.text(530, 200, 'GAME OVER', { fontSize: '32px', fill: '#FFF' });	
		game.add.text(420, 250, 'Click anywhere to start again', { fontSize: '32px', fill: '#FFF' });
	},

	update: function() {
		if (game.input.activePointer.leftButton.isDown) {
			score = 0;
			game.state.start('play');
		}
	}
	
}