class Ennemi extends Phaser.Sprite {

	constructor(game, x, y, key, frame) {
		super(game, x, y, key, frame);
		this.alive = true;
		this.game = game;
		this.game.physics.arcade.enable(this);
		this.body.collideWorldBounds = true;
		this.animations.add('run', [0, 1], 12, true);
		this.animations.play('run');
		this.body.bounce.y = 0;
		this.body.gravity.y = 2000;
		this.body.gravity.x = 0;
		this.body.acceleration.x = 0;
		this.body.velocity.x = 0;

		this.walk = this.game.add.tween(this)
			.to({
				x: [this.x + 60, this.x]
			}, 2 * Phaser.Timer.SECOND)
			.loop(true)
			.start();
	}

	update() {
	}

	die() {
		this.alive = false;
		this.walk.stop();
		this.animations.stop('run');
		this.body.velocity.y = -500;
		this.body.enable = false;
		this.game.add.tween(this).to({ alpha: 0 }, 1000).start();
	}
}

export default Ennemi;