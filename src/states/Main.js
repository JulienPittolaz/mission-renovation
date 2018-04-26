import Player from '../objects/Player';
import Ennemi from '../objects/ennemi';
import Relique from '../objects/relique';
import LifeManager from '../objects/lifeManager';

class Main extends Phaser.State {

	create() {
		this.game.camera.fade('#000000', 1, true);
		this.game.camera.flash('#000000', 500, true);
		this.music = this.game.sound.play('song', 0.6, true);

		//Enable Arcade Physics
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		this.game.physics.arcade.gravity.y = 250;

		//BACKGROUND
		this.game.stage.backgroundColor = '#d5f6ff';
		this.background = this.game.add.tileSprite(0, this.game.height * 0.3, this.game.world.width * 100, 1000, 'sky');


		//ENVIRONNEMENT

		this.map = this.game.add.tilemap("niveau1");


		//this.map.addTilesetImage('ground_tileset', 'tilesn1');
		//this.map.addTilesetImage('jetEau', 'jetEau');
		//this.map.addTilesetImage('drapeau', 'drapeau');
		//this.map.addTilesetImage('background', 'background');
		//this.map.addTilesetImage('building1', 'building');
		//this.map.addTilesetImage('long-building', 'long-building');
		//this.map.addTilesetImage('geneva-building1', 'geneva-building');
		//this.map.addTilesetImage('geneva-building2', 'geneva-building2');
		//this.map.addTilesetImage('geneva-building3', 'geneva-building3');
		//this.map.addTilesetImage('geneva-building4', 'geneva-building4');
		//this.map.addTilesetImage('horloge-fleurie', 'horloge-fleurie');
		this.map.addTilesetImage('liquidWater', 'water');
		this.map.addTilesetImage('tileset-immeubles', 'background');
		this.map.addTilesetImage('gare', 'gare');
		this.map.addTilesetImage('tileset-v3', 'tilesn1');
		this.map.addTilesetImage('tileset-v2', 'tilesn2');
		this.map.addTilesetImage('arbre-v2', 'arbre');


		this.env = this.map.createLayer('background', this.game.world.width, this.game.world.height);
		this.env.resizeWorld();
		this.env.wrap = true;
		this.env.renderSettings.enableScrollDelta = false;

		this.water = this.map.createLayer('water', this.game.world.width, this.game.world.height);
		this.water.renderSettings.enableScrollDelta = false;
		this.water.resizeWorld();

		this.grounds = this.map.createLayer('platform', this.game.world.width, this.game.world.height);
		this.grounds.resizeWorld();
		this.grounds.renderSettings.enableScrollDelta = false;

		/*this.foreground = this.map.createLayer('foreground', this.game.world.width, this.game.world.height);
		this.foreground.renderSettings.enableScrollDelta = false;
		this.foreground.bringToTop();*/

		this.flag = this.game.add.sprite(this.game.world.width - 200, 434, 'drapeau', 0);
		this.chair = this.game.add.sprite(this.game.world.width - 160, this.game.world.height - 160, 'chair', 0);

		this.map.setCollisionByExclusion([], true, 'platform');
		this.map.setCollisionByExclusion([], true, 'water');

		//CHARACTERS
		this.characters = this.game.add.group();
		this.ennemies = this.game.add.group();
		this.reliques = this.game.add.group();
		//relique
		this.reliques.add(new Relique(this.game, 1540, 500, 'mobiliteReduite', 1));


		//MERE ROYAUME
		this.player = new Player(this.game, 0, 600, 'mereRoyaume', 0);
		//this.player = new Player(this.game, this.game.world.width - 30, 600, 'mereRoyaume', 0);
		this.game.camera.follow(this.player);
		this.characters.add(this.player);
		this.life = this.game.add.existing(new LifeManager(this.game, 45, 30, 'hearts', this.player.health, this.player.health));
		this.life.fixedToCamera = true;


		//ENNEMIES
		this.ennemies.add(new Ennemi(this.game, 200, 630, 'mushroom', 4));
		this.ennemies.add(new Ennemi(this.game, 680, 630, 'poivron', 4));
		this.ennemies.add(new Ennemi(this.game, 1120, 630, 'mushroom', 4));
		this.ennemies.add(new Ennemi(this.game, 1480, 630, 'ail', 4));
		this.ennemies.add(new Ennemi(this.game, 1800, 630, 'poivron', 4));

		this.gare = this.game.add.image(0, this.game.world.height - 545, 'gareCache');
		this.gare.bringToTop();
	}

	update() {
		var self = this;
		//this.background.tilePosition.x -= 0.6;
		var playerHitPlatform = this.game.physics.arcade.collide(this.characters, this.grounds);

		var playerHitChair = this.flag.overlap(this.player);
		if (playerHitChair) {

		}


		var playerHitWater = this.game.physics.arcade.collide(this.player, this.water, function (player, water) {
			this.map.setCollisionBetween(1, 1000, false, 'water');
			if (player.alive) {
				this.life.setHealth(0);
				player.die();
			}
		}, null, this);

		var playerHitRelique = this.game.physics.arcade.overlap(this.characters, this.reliques, function (player, relique) {
			let self = this;
			relique.loot();
		}, null, this);


		var ennemiHitPlatform = this.game.physics.arcade.collide(this.ennemies, this.grounds);
		var playerHitEnnemi = this.game.physics.arcade.collide(this.ennemies, this.player, null, function (player, ennemi) {
			if (ennemi.alive) {
				if (player.bottom > ennemi.top) {
					player.getHurt();
					this.life.setHealth(player.health);
				} else {
					this.game.sound.play('kill');
				}
				ennemi.die();
			}

		}, this);

	}

	render() {
		//this.game.debug.spriteInfo(this.player, 32, 32);
	}

}

export default Main;
