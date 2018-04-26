import $ from 'jquery';
class Player extends Phaser.Sprite {

	constructor(game, x, y, key, frame) {
		super(game, x, y, key, frame);
		this.game = game;
		this.game.physics.arcade.enable(this);
		this.body.collideWorldBounds = true;
		this.animations.add('run', [0, 1, 2, 3], 12, true);
		this.animations.play('run');
		this.body.bounce.y = 0.1;
		this.body.gravity.y = 2000;
		this.body.gravity.x = 0;
		this.body.acceleration.x = 10000;
		this.body.velocity.x = 160;
		this.body.maxVelocity.x = 160;
		this.inputEnabled = true;
		this.jumpTimer = 0;
		this.jumping = false;
		this.health = 3;
		this.alive = true;
		this.height = 40;
		this.width = 36;

		this.game.input.onTap.add(function() {
			jump(this);
		}, this);

		this.hurtAnimation = this.game.add.tween(this)
			.to({
				alpha: [0.1, 1, 0.1, 1]
			}, 0.66 * Phaser.Timer.SECOND);
	}

	update() {
		//JUMP
		if(!this.body.blocked.down) {
			this.animations.stop('run');
		} else {
			if(this.alive) {
				this.animations.play('run');
			}
		}
	}

	die() {
		let self = this;
		this.alive = false;
		this.animations.stop('run');
		setTimeout(function(){
			self.body.velocity.x = 0;
			self.body.maxVelocity.x = 0;
		}, 200);
		let text = this.game.add.text($('canvas').width() / 2, $('canvas').height() / 2 - 60,
		"GAME OVER", {
            font: "40px minecraft",
			fill: "#FFFFFF",
			align: "right"
		});
		text.anchor.setTo(0.5);
		text.fixedToCamera = true;
		let restartButton = this.game.add.button($('canvas').width() / 2, $('canvas').height() / 2,
		'restart',
		function() {
			self.game.camera.fade('#000000');
			let thegame = self.game;
			self.game.camera.onFadeComplete.add(function() {
				thegame.state.start("Main");	
			}, self);
		}, null, null, null, 1, 0);
		restartButton.anchor.setTo(0.5);
		restartButton.scale.set(0.2);
		restartButton.fixedToCamera = true;
	}

	getHurt() {
		
		this.health -= 1;
		
		if (this.health === 0) {
			this.die();
		}
		this.hurtAnimation.start();
		
	}
}

function jump(player) {
	
	if(player.body.blocked.down && player.alive) {
		
		if(player.body.blocked.right) {
			player.body.gravity.x = 600;
		}
		player.body.velocity.y = -700;
	}
}

export default Player;