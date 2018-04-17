class Player extends Phaser.Sprite {

	constructor(game, x, y, key, frame) {
		super(game, x, y, key, frame);
		this.game = game;
		this.game.physics.arcade.enable(this);
		this.body.collideWorldBounds = true;
		this.animations.add('run', [5, 6, 7, 8], 12, true);
		this.animations.play('run');
		this.body.bounce.y = 0;
		this.body.gravity.y = 2000;
		this.body.gravity.x = 0;
		this.body.acceleration.x = 0;
		this.body.velocity.x = 120;
		this.inputEnabled = true;
		this.jumpTimer = 0;
		this.jumping = false;
		this.health = 3;
		this.alive = true;

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
		if(!this.body.touching.down) {
			this.animations.stop('run');
		} else {
			console.log('touching');
			
			this.animations.play('run');
		}
	}
}

function jump(player) {
	
	if(player.body.touching.down) {
		player.body.velocity.y = -700;
	}
}

export default Player;