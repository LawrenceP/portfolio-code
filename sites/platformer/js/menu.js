var menuState = {
	create: function() {
		game.input.mouse.capture = true;
		game.add.text(450, 250, 'Click anywhere to start', { fontSize: '32px', fill: '#FFF' });		
	},

	update: function() {
		if (game.input.activePointer.leftButton.isDown) {
			game.state.start('play');
		}
	}
};