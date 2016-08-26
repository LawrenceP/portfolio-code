if (window.screen.availHeight < 562 || window.screen.availWidth < 1300) {
	window.location.href = "mobile.html";
}

var game = new Phaser.Game(1300, 562, Phaser.AUTO, 'game');

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);
game.state.add('play2', play2State);
game.state.add('lose', loseState);
game.state.add('win', winState);

game.state.start('boot');