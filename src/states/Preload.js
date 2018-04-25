class Preload extends Phaser.State {

	preload() {

		// GAME TITLE
		this.game.load.image('splash1', 'assets/splash1.jpg');
		this.game.load.image('intro-box', 'assets/intro-box.png');
		this.game.load.image('restart', 'assets/recommencer.png');
		this.game.load.image('resume', 'assets/continuer.png');
		this.game.load.image('next', 'assets/next.png');

		/* Preload required assets */
		this.game.load.spritesheet('mereRoyaume', 'assets/mereRoyaume.png', 64, 64);
		this.game.load.spritesheet('mushroom', 'assets/mushroom.png', 32, 32);
		this.game.load.spritesheet('ail', 'assets/ail.png', 32, 32);
		this.game.load.spritesheet('hearts', 'assets/hearts.png', 56, 16);
		this.game.load.spritesheet('poivron', 'assets/poivron.png', 32, 32);
		this.game.load.spritesheet('mobiliteReduite', 'assets/mobiliteReduite.png', 32, 32);
		this.game.load.tilemap('niveau1', 'assets/niveau1.json', null, Phaser.Tilemap.TILED_JSON);
		this.game.load.image('tilesn1', 'assets/ground_tileset.png');
		this.game.load.image('jetEau', 'assets/jetEau.png');
		this.game.load.image('long-building', 'assets/long-building.png');
		this.game.load.image('geneva-building', 'assets/geneva-building1.png');
		this.game.load.image('geneva-building2', 'assets/geneva-building2.png');
		this.game.load.image('geneva-building3', 'assets/geneva-building3.png');
		this.game.load.image('geneva-building4', 'assets/geneva-building4.png');
		this.game.load.image('drapeau', 'assets/drapeau.png');
		this.game.load.image('building', 'assets/building1.png');
		this.game.load.image('sky', 'assets/sky.png');
	}

	create() {
		//NOTE: Change to GameTitle if required
		this.game.state.start("GameTitle");
	}

}

export default Preload;
