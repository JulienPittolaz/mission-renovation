import $ from 'jquery';

class Relique extends Phaser.Sprite {

	constructor(game, x, y, key, frame) {
		super(game, x, y, key, frame);
		const self = this;

		this.animations.add('run', [0, 1, 2, 3, 4, 5], 6, true);
		this.animations.play('run');
		this.game.physics.arcade.enable(this);
		this.body.collideWorldBounds = true;
		this.body.gravity.y = 0;
		this.body.velocity.y = 0;
		this.body.maxVelocity.y = 0;
		this.continueButton;
		this.looted = false;

		this.phase1 = this.game.add.tween(this)
			.to({
				y: [this.y - 300],
				x: this.x + 200
			}, 0.7 * Phaser.Timer.SECOND, Phaser.Easing.Cubic.Out);

		this.phase2 = this.game.add.tween(this.cameraOffset)
			.to({
				x: [this.game.camera.width - 80, this.game.camera.width - 50],
				y: [-50, 30]
			}, 0.5 * Phaser.Timer.SECOND, Phaser.Easing.Cubic.Out);

		this.phase1.onComplete.add(function (relique) {
			relique.fixedToCamera = true;
		});

		this.phase1.chain(this.phase2)
		this.game.input.onDown.add(this.resume, this);
	}

	update() {

	}

	loot() {
		if (!this.looted) {
			const self = this;
			this.looted = true;
			this.phase1.start();
			self.game.paused = true;
			self.openPopup("Bravo ! Vous avez récupére l'accès aux personnes à mobilité réduite ! Une fois ramenée au Grand Conseil, tout le monde pourra accèder à la nouvelle salle !");
		}
	}

	resume() {
		const self = this;
		if (this.game.paused && this.continueButton) {
			if (this.continueButton.getBounds().contains(this.game.input.x, this.game.input.y)) {
				this.continueButton.setFrame(1);
				this.box.kill();
				this.continueButton.kill();
				this.textPopup.kill();
				this.body.checkCollision = false;
				let timer = setInterval(function () {
					if (self.timerText.text == "3") {
						self.timerText.text = "2";
					} else if (self.timerText.text == "2") {
						self.timerText.text = "1";
					} else if (self.timerText.text == "1") {
						self.timerText.kill();
						self.game.paused = false;
						self.game.sound.play('clic');
						self.game.sound.play('loot');
						clearInterval(timer);
					}
				}, 1000);
			}
		}
	}

	openPopup(text) {
		console.log(2);

		this.timerText = this.game.add.text($('canvas').width() / 2, $('canvas').height() / 2, "3", {
			font: 'bold 32pt perfectDOS',
			fill: 'black',
			align: 'left',
			wordWrap: true,
			wordWrapWidth: 440
		});
		console.log(3);

		this.timerText.anchor.set(0.5);
		this.timerText.fixedToCamera = true;
		console.log(this.timerText);
		this.box = this.game.add.image($('canvas').width() / 2, $('canvas').height() / 2 - 30, 'intro-box', 0);
		this.box.fixedToCamera = true;
		this.box.anchor.set(0.5);
		this.continueButton = this.game.add.button($('canvas').width() / 2, $('canvas').height() - 40, 'resume', null, null, null, null, 1, 0);
		//this.box.addChild(this.continueButton);
		this.continueButton.fixedToCamera = true;
		this.continueButton.anchor.setTo(0.5);
		this.continueButton.scale.set(0.2);
		this.continueButton.events.onInputDown.add(this.resume);
		this.textPopup = this.game.add.text($('canvas').width() / 2, $('canvas').height() / 2 - 30, text, {
			font: 'bold 14pt perfectDOS',
			fill: 'white',
			align: 'left',
			wordWrap: true,
			wordWrapWidth: 440
		});
		this.textPopup.fixedToCamera = true;
		this.textPopup.anchor.set(0.5);
	}

}

export default Relique;