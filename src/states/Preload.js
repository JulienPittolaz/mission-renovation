class Preload extends Phaser.State {

	preload() {
		/* Preload required assets */
		this.game.load.spritesheet('mereRoyaume', 'assets/mereRoyaume.png', 61, 64);
		this.game.load.spritesheet('mushroom', 'assets/mushroom.png', 32, 32);
		this.game.load.tilemap('niveau1', 'assets/niveau1.json', null, Phaser.Tilemap.TILED_JSON);
		this.game.load.image('tilesn1', 'assets/ground_tileset.png');
		this.game.load.image('jetEau', 'assets/jetEau.png');
		this.game.load.image('sky', 'assets/sky.png');
		this.game.load.image('restart', 'assets/restart.png');
	}

	create() {
		//NOTE: Change to GameTitle if required
		this.game.state.start("Main");
	}

}

export default Preload;
