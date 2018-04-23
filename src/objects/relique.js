class Relique extends Phaser.Sprite {

	constructor(game, x ,y , key, frame){
		super(game, x, y, key, frame);
		this.animations.add('run', [0, 1, 2, 3, 4, 5], 6, true);
		this.animations.play('run');
		this.game.physics.arcade.enable(this);
		this.body.collideWorldBounds = true;
		this.body.gravity.y = 0;
		this.body.velocity.y = 0;
		this.body.maxVelocity.y = 0;
	}

}

export default Relique;