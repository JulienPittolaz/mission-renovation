import Player from 'objects/Player';
import Ground from 'objects/Ground';
import Ennemi from '../objects/ennemi';

class Main extends Phaser.State {

	create() {

		//Enable Arcade Physics
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		this.game.physics.arcade.gravity.y = 250;

		//BACKGROUND
		this.game.stage.backgroundColor = '#ff00ff';

		//ENVIRONNEMENT
		this.map = this.game.add.tilemap("niveau1");
		this.map.addTilesetImage('ground_tileset', 'tilesn1');

		this.layer = this.map.createLayer('myGround', this.game.world.width, this.game.world.height);
        this.layer.resizeWorld();
		this.layer.wrap = true;
		this.map.setCollisionBetween(1, 100, true, 'myGround');

		//CHARACTERS
		this.characters = this.game.add.group();
		this.ennemies = this.game.add.group();

		//MERE ROYAUME
		console.log(this.map);
		
		this.player = new Player(this.game, 20, 700, 'mereRoyaume', 0);
		this.game.camera.follow(this.player);
		this.characters.add(this.player);

		//MUSHROOM
		this.mushroom = new Ennemi(this.game, 200, 700, 'mushroom', 1);
		this.ennemies.add(this.mushroom);
	}

	update() {
		var playerHitPlatform = this.game.physics.arcade.collide(this.characters, this.layer, function() {
			console.log(123);
			
		});
		var ennemiHitPlatform = this.game.physics.arcade.collide(this.ennemies, this.layer);
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

}

export default Main;
