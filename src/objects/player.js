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
		this.width = 36

		this.game.input.onTap.add(function() {
			jump(this);
		}, this);
	}

	update() {
		//CHECK IF ALIVE
		if(!this.alive) {
			//TO DO
		}

		//GET HURT
		/*if() {
			this.health --;
			if(this.health === 0) {
				this.alive = false;
			}
		}*/


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
		this.alive = false;
		this.animations.stop('run');
		let self = this;
		setTimeout(function(){
			self.body.velocity.x = 0;
			self.body.maxVelocity.x = 0;
		}, 200);
		let text = this.game.add.text(this.game.camera.view.x + (this.game.camera.view.width / 2), this.game.camera.view.y + (this.game.camera.view.height / 3),
		"GAME OVER", {
            font: "40px minecraft",
			fill: "#FFFFFF",
			align: "right"
		});
		text.anchor.setTo(0.5);

		let restartButton = this.game.add.button(this.game.camera.view.x + (this.game.camera.view.width / 2), this.game.camera.view.y + (this.game.camera.view.height / 2),
		'restart',
		function() {
			this.game.state.start("Main");
		});
		restartButton.anchor.setTo(0.5);
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