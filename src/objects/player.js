class Player extends Phaser.Sprite {

	constructor(game, x, y, key, frame) {
		super(game, x, y, key, frame);
		this.game = game;
		this.game.physics.arcade.enable(this);
		this.body.collideWorldBounds = true;
		this.animations.add('run', [0, 1, 2, 3], 12, true);
		this.animations.play('run');
		this.body.bounce.y = 0;
		this.body.gravity.y = 2000;
		this.body.gravity.x = 0;
		this.body.acceleration.x = 1000;
		this.body.velocity.x = 150;
		this.body.maxVelocity.x = 150;
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
		if(!this.body.touching.down) {
			//this.animations.stop('run');
		} else {
			//this.animations.play('run');
		}
	}
}

function jump(player) {
	console.log(player.body);
	
	if(player.body.blocked.down) {
		
		if(player.body.blocked.right) {
			player.body.gravity.x = 600;
		}
		player.body.velocity.y = -700;
	}
}

export default Player;