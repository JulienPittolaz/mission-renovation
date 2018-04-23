import Player from '../objects/Player';
import Ennemi from '../objects/ennemi';
import Relique from '../objects/relique';

class Main extends Phaser.State {

	create() {

		//Enable Arcade Physics
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		this.game.physics.arcade.gravity.y = 250;

		//BACKGROUND
		//this.game.stage.backgroundColor = '#d5f6ff';
		//this.background = this.game.add.tileSprite(0, this.game.world.height, 3200, 3000, 'sky');

		//ENVIRONNEMENT
		this.map = this.game.add.tilemap("niveau1");
		
		this.map.addTilesetImage('ground_tileset', 'tilesn1');
		this.map.addTilesetImage('jetEau', 'jetEau');
		this.map.addTilesetImage('drapeau', 'drapeau');
		this.map.addTilesetImage('building1', 'building');
		
		this.grounds = this.map.createLayer('myGround', this.game.world.width, this.game.world.height);
        this.grounds.resizeWorld();
		this.grounds.wrap = true;
		this.grounds.renderSettings.enableScrollDelta = false;
		
		

		//this.water = this.map.createLayer('eau', this.game.world.width, this.game.world.height);
		//this.water.resizeWorld();

		this.env = this.map.createLayer('env', this.game.world.width, this.game.world.height);
		this.env.resizeWorld();
		this.env.wrap = true;
		this.env.renderSettings.enableScrollDelta = false;

		this.flag = this.map.createLayer('drapeau', this.game.world.width, this.game.world.height);
		this.flag.resizeWorld();
		this.flag.wrap = true;
		this.flag.renderSettings.enableScrollDelta = false;

		//this.map.setCollisionBetween(1, 1000, true, 'myGround');
		//this.map.setCollisionBetween(1, 1000, true, 'eau');
		//this.map.setCollisionBetween(3, 1000, true, 'drapeau');

		//CHARACTERS
		this.characters = this.game.add.group();
		this.ennemies = this.game.add.group();
		this.reliques = this.game.add.group();

		//MERE ROYAUME
		this.player = new Player(this.game, 0, 700, 'mereRoyaume', 0);
		this.game.camera.follow(this.player);
		
		this.characters.add(this.player);
		this.player.debug = true;

		//ENNEMIES
		this.mushroom = new Ennemi(this.game, 200, 700, 'mushroom', 4);
		this.ennemies.add(this.mushroom);
		this.ennemies.add(new Ennemi(this.game, 680, 600, 'poivron', 4));
		this.ennemies.add(new Ennemi(this.game, 1120, 100, 'mushroom', 4));
		this.ennemies.add(new Ennemi(this.game, 1480, 600, 'ail', 4));
		this.ennemies.add(new Ennemi(this.game, 1800, 600, 'poivron', 4));

		//relique
		this.relique = new Relique(this.game, 1240, 450, 'mobiliteReduite', 1);
		this.reliques.add(this.relique);
		
	}

	update() {
		/*var self = this;
		//var playerHitPlatform = this.game.physics.arcade.collide(this.characters, this.grounds);
		//var playerHitFlag = this.game.physics.arcade.collide(this.characters, this.flag);
		//var playerHitWater = this.game.physics.arcade.overlap(this.player, this.water, null, null, this);
		
		//var ennemiHitPlatform = this.game.physics.arcade.collide(this.ennemies, this.grounds);
		var playerHitEnnemi = this.game.physics.arcade.collide(this.ennemies, this.player, null, function (player, ennemi) {
			if (ennemi.alive) {
				if(player.bottom > ennemi.top) {
					player.health -= 1;
				}
				ennemi.die();
			}
			
			if(player.health === 0) {
				player.alive = false;
				this.game.state.start("Main");
			}
			
		}, this);

*/
	}

	render() {
	}

}

export default Main;
