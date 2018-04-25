class GameTitle extends Phaser.State {

	create() {
		this.game.stage.backgroundColor = '#d5f6ff';
		this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'splash1');
		this.startIntro();
	}

	update() {

	}

	startIntro() {
		this.game.state.start("Intro");
	}

}

export default GameTitle;
