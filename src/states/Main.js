import Player from 'objects/Player';
import Ground from 'objects/Ground';
import Ennemi from '../objects/ennemi';

class Main extends Phaser.State {

	create() {

		//Enable Arcade Physics
		this.game.physics.startSystem(Phaser.Physics.ARCADE);

		//BACKGROUND
		this.game.stage.backgroundColor = '#ff00ff';

		//ENVIRONNEMENT
		this.platforms = this.game.add.group();
		this.platforms.enableBody = true;
		this.ground = this.platforms.create(0, document.body.offsetHeight - 11, 'ground');
		this.ground.body.immovable = true;

		//CHARACTERS
		this.characters = this.game.add.group();
		this.ennemies = this.game.add.group();

		//MERE ROYAUME
		this.player = new Player(this.game, 20, 30, 'player', 5);
		this.game.camera.follow(this.player);
		this.characters.add(this.player);

		//MUSHROOM
		this.mushroom = new Ennemi(this.game, 300, 120, 'mushroom', 1);
		this.ennemies.add(this.mushroom);
	}

	update() {
		var playerHitPlatform = this.game.physics.arcade.collide(this.characters, this.platforms);
		var ennemiHitPlatform = this.game.physics.arcade.collide(this.ennemies, this.platforms);
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
