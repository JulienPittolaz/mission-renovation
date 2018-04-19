class Ground extends Phaser.Sprite {

	constructor(game, x, y, key, frame){
		super(game, x, y, key, frame);
		this.game = game;
		this.game.physics.arcade.enable(this);
		this.animations.add('run', [5, 6, 7, 8], 2, true);
	}

}

export default Ground;