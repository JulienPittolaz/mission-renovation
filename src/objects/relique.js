class Relique extends Phaser.Sprite {

	constructor(game, x ,y , key, frame){
		super(game, x, y, key, frame);
		this.animations.add('run', [0, 1, 2, 3, 4, 5], 6, true);
		this.animations.play('run');
	}

}

export default Relique;