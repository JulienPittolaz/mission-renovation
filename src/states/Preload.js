import $ from 'jquery';
class Preload extends Phaser.State {

	preload() {
		this.splashScreen = this.game.add.sprite(0, 0, 'splash1');
		this.splashScreen.width = $('canvas').width();
		this.splashScreen.height = $('canvas').height();
		this.loadingbar = this.game.add.sprite($('canvas').width() / 2 - 100, $('canvas').height() - 85, 'loadingbar');
		this.loadingbar.anchor.setTo(0);
		this.loadingbar.width = 0;
		// GAME TITLE
		this.game.load.image('intro-box', 'assets/intro-box.png');
		this.game.load.spritesheet('restart', 'assets/bouton-recommencer-sprite.png', 1184, 256);
		this.game.load.spritesheet('start', 'assets/bouton-commencer-sprite.png', 1184, 256);
		this.game.load.spritesheet('resume', 'assets/bouton-continuer-sprite.png', 1184, 256);
		this.game.load.spritesheet('next', 'assets/bouton-next-sprite.png', 100, 64);
		this.game.load.spritesheet('pause', 'assets/pause.png', 66, 64);

		/* Preload required assets */
		this.game.load.spritesheet('mereRoyaume', 'assets/mereRoyaume.png', 64, 64);
		this.game.load.spritesheet('mushroom', 'assets/mushroom.png', 32, 32);
		this.game.load.spritesheet('ail', 'assets/ail.png', 32, 32);
		this.game.load.spritesheet('hearts', 'assets/hearts.png', 53.5, 16);
		this.game.load.spritesheet('heart-hurt', 'assets/heart-hurt.png', 64, 64);
		this.game.load.spritesheet('poivron', 'assets/poivron.png', 32, 32);
		this.game.load.spritesheet('mobiliteReduite', 'assets/mobiliteReduite.png', 32, 32);
		this.game.load.tilemap('niveau1', 'assets/map3.json', null, Phaser.Tilemap.TILED_JSON);
		this.game.load.tilemap('niveau2', 'assets/niveau1.json', null, Phaser.Tilemap.TILED_JSON);
		this.game.load.image('gareCache', 'assets/gareCornavin-gauche.png');
		this.game.load.image('drapeau', 'assets/drapeau.png');
		this.game.load.image('chair', 'assets/chaise.png');
		this.game.load.image('sky', 'assets/sky.png');

		//FINAL
		this.game.load.tilemap('tilemap', 'assets/map-v3.json', null, Phaser.Tilemap.TILED_JSON);
		this.game.load.spritesheet('buildings', 'assets/tileset-building.png', 32, 32);
		this.game.load.spritesheet('ville', 'assets/tileset-elementsville.png', 32, 32);
		this.game.load.spritesheet('nature', 'assets/tileset-nature.png', 32, 32);
		this.game.load.spritesheet('platform', 'assets/tileset-V5.png', 32, 32);
		this.game.load.spritesheet('water', 'assets/tileset-water.png', 32, 32);
		this.game.load.spritesheet('gare', 'assets/tileset-gareCornavin-V2.png', 32, 32);
		this.game.load.spritesheet('jetEau', 'assets/jetEau.png', 64, 128);

		//sounds
		this.game.load.audio('clic', 'assets/sounds/clic.mp3');
		this.game.load.audio('gameover', 'assets/sounds/gameover.wav');
		this.game.load.audio('jump', 'assets/sounds/jump.wav');
		this.game.load.audio('kill', 'assets/sounds/kill.wav');
		this.game.load.audio('loot', 'assets/sounds/loot.wav');
		this.game.load.audio('song', 'assets/sounds/song.wav');
		this.game.load.audio('hurt', 'assets/sounds/hurt.wav');
		this.game.load.audio('success', 'assets/sounds/success.wav');
		this.game.load.onFileComplete.add(this.fileComplete, this);
		this.game.load.onLoadComplete.add(this.loadComplete, this);
	}

	create() {}

	fileComplete(progress, cacheKey, success, totalLoaded, totalFiles) {
		this.loadingbar.width = progress * 2;
	}

	loadComplete(progress, cacheKey, success, totalLoaded, totalFiles) {
		this.game.state.start("GameTitle");
	}

}

export default Preload;
