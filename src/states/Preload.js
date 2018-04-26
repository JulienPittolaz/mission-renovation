class Preload extends Phaser.State {

	preload() {

		// GAME TITLE
		this.game.load.image('splash1', 'assets/splash1.jpg');
		this.game.load.image('intro-box', 'assets/intro-box.png');
		this.game.load.spritesheet('restart', 'assets/bouton-recommencer-sprite.png', 1184, 256);
		this.game.load.spritesheet('start', 'assets/bouton-commencer-sprite.png', 1184, 256);
		this.game.load.spritesheet('resume', 'assets/bouton-continuer-sprite.png', 1184, 256);
		this.game.load.spritesheet('next', 'assets/bouton-next-sprite.png', 100, 64);

		/* Preload required assets */
		this.game.load.spritesheet('mereRoyaume', 'assets/mereRoyaume.png', 64, 64);
		this.game.load.spritesheet('mushroom', 'assets/mushroom.png', 32, 32);
		this.game.load.spritesheet('ail', 'assets/ail.png', 32, 32);
		this.game.load.spritesheet('hearts', 'assets/hearts.png', 56, 16);
		this.game.load.spritesheet('poivron', 'assets/poivron.png', 32, 32);
		this.game.load.spritesheet('mobiliteReduite', 'assets/mobiliteReduite.png', 32, 32);
		this.game.load.tilemap('niveau1', 'assets/map3.json', null, Phaser.Tilemap.TILED_JSON);
		this.game.load.tilemap('niveau2', 'assets/niveau1.json', null, Phaser.Tilemap.TILED_JSON);
		this.game.load.spritesheet('tilesn1', 'assets/tileset-v3.png', 32, 32);
		this.game.load.spritesheet('tilesn2', 'assets/tileset-v2.png', 32, 32);
		this.game.load.spritesheet('background', 'assets/tileset-immeubles.png', 32, 32);
		this.game.load.spritesheet('water', 'assets/liquidWater.png', 32, 32);
		this.game.load.spritesheet('gare', 'assets/gareCornavin.png', 32, 32);
		this.game.load.image('gareCache', 'assets/gareCornavin-gauche.png');
		this.game.load.spritesheet('arbre', 'assets/arbre-v2.png', 32, 32);
		this.game.load.image('jetEau', 'assets/jetEau.png');
		this.game.load.image('long-building', 'assets/long-building.png');
		this.game.load.image('geneva-building', 'assets/geneva-building1.png');
		this.game.load.image('geneva-building2', 'assets/geneva-building2.png');
		this.game.load.image('geneva-building3', 'assets/geneva-building3.png');
		this.game.load.image('geneva-building4', 'assets/geneva-building4.png');
		this.game.load.image('drapeau', 'assets/drapeau.png');
		this.game.load.image('building', 'assets/building1.png');
		this.game.load.image('sky', 'assets/sky.png');
		this.game.load.image('horloge-fleurie', 'assets/horloge-fleurie.png');

		//sounds
		this.game.load.audio('clic', 'assets/sounds/clic.mp3');
		this.game.load.audio('gameover', 'assets/sounds/gameover.wav');
		this.game.load.audio('jump', 'assets/sounds/jump.wav');
		this.game.load.audio('kill', 'assets/sounds/kill.wav');
		this.game.load.audio('loot', 'assets/sounds/loot.wav');
		this.game.load.audio('song', 'assets/sounds/song.wav');
		this.game.load.audio('hurt', 'assets/sounds/hurt.wav');
	}

	create() {
		//NOTE: Change to GameTitle if required
		//this.game.state.start("Main");
		this.game.state.start("GameTitle");
	}

}

export default Preload;
