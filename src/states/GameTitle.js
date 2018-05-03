import $ from 'jquery';

class GameTitle extends Phaser.State {

	create() {
		let self = this;
		this.background =this.game.add.image(0, 0, 'splash1');
		this.background.width = $('canvas').width();
		this.background.height = $('canvas').height();
		this.continueButton = this.game.add.button($('canvas').width() / 2, $('canvas').height() - 80,
			'start', function() {
				self.game.sound.play('clic');
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
