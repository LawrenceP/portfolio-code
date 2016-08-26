var winState = {

	create: function() {
		game.input.mouse.capture = true;
		game.add.text(195, 200, 'CONGRATULATIONS, YOU HAVE COMPLETED THE GAME!!!', { fontSize: '32px', fill: '#FFF' });	
		game.add.text(430, 250, 'Click anywhere to play again', { fontSize: '32px', fill: '#FFF' });
	},

	update: function() {
		if (game.input.activePointer.leftButton.isDown) {
			score = 0;	
			game.state.start('play');
		}
	}
	
}