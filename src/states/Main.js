import Player from 'objects/Player';
import Ground from 'objects/Ground';
import Ennemi from '../objects/ennemi';

class Main extends Phaser.State {

	create() {
		console.log(this);
		
		this.scaleRatio = 2;

		//Enable Arcade Physics
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		this.game.physics.arcade.gravity.y = 250;

		//BACKGROUND
		this.game.stage.backgroundColor = '#d5f6ff';
		this.background = this.game.add.tileSprite(0, this.game.world.height, 3200, 3000, 'sky');

		//ENVIRONNEMENT
		this.map = this.game.add.tilemap("niveau1");
		
		this.map.addTilesetImage('ground_tileset', 'tilesn1');
		this.map.addTilesetImage('jetEau', 'jetEau');

		this.grounds = this.map.createLayer('myGround', this.game.world.width, this.game.world.height);
        this.grounds.resizeWorld();
		this.grounds.wrap = true;
		this.grounds.visible = false;
		this.levelbg = this.game.add.image(0, this.game.world.height, 'ground');
		console.log(this.levelbg);
		

		this.water = this.map.createLayer('eau', this.game.world.width, this.game.world.height);
        this.water.resizeWorld();
		this.water.wrap = true;

		this.env = this.map.createLayer('env', this.game.world.width * 100, this.game.world.height);
		this.env.resizeWorld();
		this.env.wrap = true;

		this.map.setCollisionBetween(1, 1000, true, 'myGround');
		this.map.setCollisionBetween(1, 1000, true, 'eau');

		//CHARACTERS
		this.characters = this.game.add.group();
		this.ennemies = this.game.add.group();
		//this.characters.scale.setTo(this.scaleRatio, this.scaleRatio);
		//this.ennemies.scale.setTo(this.scaleRatio, this.scaleRatio);

		//MERE ROYAUME
		this.player = new Player(this.game, 20, 700, 'mereRoyaume', 0);
		this.game.camera.follow(this.player);
		
		this.characters.add(this.player);

		//MUSHROOM
		this.mushroom = new Ennemi(this.game, 200, 700, 'mushroom', 4);
		this.ennemies.add(this.mushroom);
	}

	update() {
		var self = this;
		//this.background.tilePosition.x = -(this.game.camera.x * 0.9);
		var playerHitPlatform = this.game.physics.arcade.collide(this.characters, this.grounds);
		var playerHitWater = this.game.physics.arcade.collide(this.characters, this.water, function(player, water) {
			self.map.setCollisionBetween(1, 1000, false, 'eau');
			player.die();
		});
		var ennemiHitPlatform = this.game.physics.arcade.collide(this.ennemies, this.grounds);
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


	}

	render() {
		this.game.debug.cameraInfo(this.game.camera, 32, 32);
	}

}

export default Main;
