class LifeManager extends Phaser.Sprite {

	constructor(game, x, y, key, frame, characterHealth) {
		super(game, x, y, key, frame);
		this.game = game;
		this.health = characterHealth;
		this.anchor.setTo(0.5);
	}

	update() {
		
	}

	setHealth(health) {
		this.frame = health;
		this.game.add.tween(this.scale)
			.to({
				x: [1.3, 1],
				y: [1.3, 1],
			}, 1 * Phaser.Timer.SECOND, Phaser.Easing.Elastic.Out).start();
	}
}

export default LifeManager;