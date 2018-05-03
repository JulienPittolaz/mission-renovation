import $ from 'jquery';
class Player extends Phaser.Sprite {

	constructor(game, x, y, key, frame) {
		super(game, x, y, key, frame);
		this.game = game;
		this.game.physics.arcade.enable(this);
		this.body.collideWorldBounds = true;
		this.animations.add('run', [0, 1, 2, 3], 12, true);
		this.animations.play('run');
		this.animations.add('sit', [5, 6, 7, 8, 9, 10, 11], 15, false);

		this.body.bounce.y = 0.1;
		this.body.gravity.y = 2000;
		this.body.gravity.x = 0;
		this.body.acceleration.x = 10000;
		this.body.velocity.x = 160; //160
		this.body.maxVelocity.x = 160; //160
		this.inputEnabled = true;
		this.jumpTimer = 0;
		this.jumping = false;
		this.health = 3;
		this.alive = true;
		this.height = 55;
		this.width = 45;
		this.hitFlag = false;

		this.spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);


		this.game.input.onDown.add(function () {
			if (this.position.x < 8300) {
				if (!this.game.input.onDown._bindings[0].context.pauseButton.getBounds().contains(this.game.input.x, this.game.input.y)) {
					if (this.game.input.onDown._bindings[0].context.resumeButton && this.game.input.onDown._bindings[0].context.resumeButton.alive) {
						if (this.game.input.onDown._bindings[0].context.resumeButton.getBounds()) {
							if (this.game.input.onDown._bindings[0].context.resumeButton.getBounds().contains(this.game.input.x, this.game.input.y)) {
								return;
							}
						}
					}
					jump(this);
				}
			}
		}, this);

		this.hurtAnimation = this.game.add.tween(this)
			.to({
				alpha: [0.1, 1, 0.1, 1]
			}, 0.66 * Phaser.Timer.SECOND);
	}

	update() {
		//JUMP
		if (!this.body.blocked.down) {
			this.animations.stop('run');
		} else {
			if (this.alive && !this.hitFlag) {
				this.animations.play('run');
			}
		}

		if (this.spaceKey.isDown && this.position.x < 8300) {
				jump(this);
		}
	}

	die() {
		let self = this;
		this.alive = false;
		this.animations.stop('run');
		this.game.sound.stopAll('song');
		this.game.sound.play('gameover');
		setTimeout(function () {
			self.body.velocity.x = 0;
			self.body.maxVelocity.x = 0;
		}, 200);
		let text = this.game.add.text($('canvas').width() / 2, $('canvas').height() / 2 - 60,
			"GAME OVER", {
				font: "40px perfectDOS",
				fill: "#FFFFFF",
				align: "right"
			});
		text.anchor.setTo(0.5);
		text.fixedToCamera = true;
		let restartButton = this.game.add.button($('canvas').width() / 2, $('canvas').height() / 2,
			'restart',
			function () {
				self.game.sound.play('clic');
				self.game.camera.fade('#000000');
				let thegame = self.game;
				self.game.camera.onFadeComplete.add(function () {
					thegame.state.start("Main");
				}, self);
			}, null, null, null, 1, 0);
		restartButton.anchor.setTo(0.5);
		restartButton.scale.set(0.2);
		restartButton.fixedToCamera = true;
	}

	getHurt() {

		this.health -= 1;
		this.game.sound.play('hurt');
		if (this.health === 0) {
			this.die();
		}
		this.hurtAnimation.start();

	}
}

function jump(player) {
	if (player.body.blocked.down && player.alive) {
		player.game.sound.play('jump');
		if (player.body.blocked.right) {
			//player.body.gravity.x = 600;
		}
		player.body.velocity.y = -700;
	}
}

export default Player;