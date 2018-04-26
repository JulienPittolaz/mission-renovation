import $ from 'jquery';

class GameTitle extends Phaser.State {

	create() {
		let self = this;
		this.game.stage.backgroundColor = '#d5f6ff';
		this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'splash1');
		this.continueButton = this.game.add.button($('canvas').width() / 2, $('canvas').height() - 40,
			'start', function() {
				self.camera.fade('#000000');
				self.camera.onFadeComplete.add(self.startIntro, self);
			}, null, null, null, 1, 0);
		this.continueButton.fixedToCamera = true;
		this.continueButton.anchor.setTo(0.5);
		this.continueButton.scale.set(0.2);
	}

	update() {

	}

	startIntro() {
		this.game.state.start("Intro");
	}

}

export default GameTitle;
