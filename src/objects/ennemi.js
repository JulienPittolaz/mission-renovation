class Ennemi extends Phaser.Sprite {

	constructor(game, x, y, key, frame) {
		super(game, x, y, key, frame);
		this.alive = true;
		this.game = game;
		this.game.physics.arcade.enable(this);
		this.body.collideWorldBounds = true;
		this.animations.add('runRight', [4 ,5 ,6 ,7], 12, true);
		this.animations.add('runLeft', [0 ,1 ,2 ,3], 12, true);
		this.animations.play('runRight');
		this.body.bounce.y = 0;
		this.body.gravity.y = 2000;
		this.body.gravity.x = 0;
		this.body.acceleration.x = 0;
		this.body.velocity.x = 0;

		this.startWalkRight = this.game.add.tween(this)
			.to({
				x: [this.x + 60]
			}, 1 * Phaser.Timer.SECOND);

		this.walkLeft = this.game.add.tween(this)
		.to({
			x: [this.x - 60]
		}, 2 * Phaser.Timer.SECOND);

		this.finishWalkRight = this.game.add.tween(this)
		.to({
			x: [this.x]
		}, 1 * Phaser.Timer.SECOND);

		this.startWalkRight.chain(this.walkLeft);
		this.walkLeft.chain(this.finishWalkRight);
		this.startWalkRight.start();

		this.startWalkRight.onComplete.add(function(ennemi) {
			ennemi.animations.stop('runRight');
			ennemi.animations.play('runLeft');
		});
		
		this.walkLeft.onComplete.add(function(ennemi) {
			ennemi.animations.stop('runLeft');
			ennemi.animations.play('runRight');
		});

		this.finishWalkRight.onComplete.add(function(ennemi) {
			console.log(ennemi.x);
			ennemi.startWalkRight.start();
		});
	}

	update() {
	}

	die() {
		this.alive = false;
		this.startWalkRight.stop();
		this.finishWalkRight.stop();
		this.walkLeft.stop();
		this.animations.stop('runRight');
		this.animations.stop('runLeft');
		this.body.velocity.y = -500;
		this.body.enable = false;
		this.game.add.tween(this).to({ alpha: 0 }, 1000).start();
		this.kill();
	}
}

export default Ennemi;