class Preload extends Phaser.State {

	preload() {
		/* Preload required assets */
		//this.game.load.image('myImage', 'assets/my-image.png');
		this.game.load.spritesheet('player', 'assets/player.png', 32, 48);
		this.game.load.spritesheet('mereRoyaume', 'assets/mereRoyaume.png', 61, 64);
		this.game.load.spritesheet('mushroom', 'assets/mushroom.png', 16, 16);
		this.game.load.tilemap('niveau1', 'assets/niveau1.json', null, Phaser.Tilemap.TILED_JSON);
		this.game.load.image('tilesn1', 'assets/ground_tileset.png');
		//this.game.load.audio('myAudio', 'assets/my-audio.wav');
		//this.game.load.atlas('myAtlas', 'assets/my-atlas.png', 'assets/my-atlas.json');
	}

	create() {
		//NOTE: Change to GameTitle if required
		this.game.state.start("Main");
	}

}

export default Preload;
