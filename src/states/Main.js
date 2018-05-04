import Player from '../objects/Player';
import Ennemi from '../objects/ennemi';
import Relique from '../objects/relique';
import LifeManager from '../objects/lifeManager';
import $ from 'jquery';

class Main extends Phaser.State {

	create() {
		this.resumeButton;
		this.game.camera.fade('#000000', 1, true);
		this.game.camera.flash('#000000', 500, true);
		this.music = this.game.sound.play('song', 0.6, true);

		//Enable Arcade Physics
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		this.game.physics.arcade.gravity.y = 250;

		//BACKGROUND
		this.game.stage.backgroundColor = '#d5f6ff';
		this.background = this.game.add.tileSprite(0, this.game.height * 0.8, this.game.world.width * 100, 1000, 'sky');


		//ENVIRONNEMENT

		this.map = this.game.add.tilemap("tilemap");

		//TIlESETS
		this.map.addTilesetImage('tileset-building', 'buildings');
		this.map.addTilesetImage('tileset-elementsville', 'ville');
		this.map.addTilesetImage('tileset-nature', 'nature');
		this.map.addTilesetImage('tileset-V5', 'platform');
		this.map.addTilesetImage('tileset-water', 'water');
		this.map.addTilesetImage('tileset-gareCornavin-V2', 'gare');


		this.env = this.map.createLayer('background', this.game.world.width, this.game.world.height);
		this.env.resizeWorld();
		this.env.wrap = true;
		this.env.renderSettings.enableScrollDelta = false;

		this.water = this.map.createLayer('water', this.game.world.width, this.game.world.height);
		this.water.renderSettings.enableScrollDelta = false;
		this.env.wrap = true;
		this.water.resizeWorld();

		this.grounds = this.map.createLayer('PLATFORM V2', this.game.world.width, this.game.world.height);
		this.grounds.resizeWorld();
		this.env.wrap = true;
		this.grounds.renderSettings.enableScrollDelta = false;

		this.chair = this.game.add.sprite(this.game.world.width - 160, this.game.world.height - 160, 'chair', 0);
		this.jetEau = this.game.add.sprite(5400, this.game.world.height - 95, 'jetEau', 0);
		this.jetEau.anchor.set(0, 1);
		this.jetEau.animations.add('anim', [0, 1, 2], 12, true);
		this.jetEau.animations.play('anim');
		this.jetEau.scale.setTo(2);
		this.map.setCollisionByExclusion([], true, 'PLATFORM V2');
		this.map.setCollisionByExclusion([], true, 'water');

		//CHARACTERS
		this.characters = this.game.add.group();
		this.ennemies = this.game.add.group();
		this.reliques = this.game.add.group();
		//relique
		this.reliques.add(new Relique(this.game, 4500, 550, 'mobiliteReduite', 1));


		//MERE ROYAUME
		this.heartHurt = this.game.add.sprite(0, -40, 'heart-hurt', 4);
		this.hurtAnim = this.heartHurt.animations.add('hurt', [0, 1, 2, 3, 4], 10, false);
		this.player = new Player(this.game, 0, 600, 'mereRoyaume', 10, 100);
		this.player.addChild(this.heartHurt);

		//this.player = new Player(this.game, this.game.world.width - 650, 600, 'mereRoyaume', 0);
		this.game.camera.follow(this.player);
		this.characters.add(this.player);


		//ENNEMIES
		this.ennemies.add(new Ennemi(this.game, 680, 630, 'poivron', 4));
		this.ennemies.add(new Ennemi(this.game, 1380, 630, 'ail', 4));
		this.ennemies.add(new Ennemi(this.game, 1800, 630, 'poivron', 4));
		this.ennemies.add(new Ennemi(this.game, 2650, 630, 'poivron', 4));
		this.ennemies.add(new Ennemi(this.game, 3360, 630, 'ail', 4));
		this.ennemies.add(new Ennemi(this.game, 4560, 630, 'poivron', 4));
		this.ennemies.add(new Ennemi(this.game, 4580, 630, 'ail', 4));
		this.ennemies.add(new Ennemi(this.game, 4590, 630, 'mushroom', 4));
		this.ennemies.add(new Ennemi(this.game, 5900, 500, 'mushroom', 4));
		this.ennemies.add(new Ennemi(this.game, 6260, 630, 'ail', 4));
		this.ennemies.add(new Ennemi(this.game, 7000, 630, 'ail', 4));
		this.ennemies.add(new Ennemi(this.game, 8300, 630, 'mushroom', 4));

		this.gare = this.game.add.image(0, this.game.world.height - 545, 'gareCache');
		this.gare.bringToTop();
		this.life = this.game.add.existing(new LifeManager(this.game, 45, 30, 'hearts', 3));
		this.life.fixedToCamera = true;
		this.life.bringToTop();
		var self = this;
		this.pauseButton = this.game.add.button(30, $('canvas').height() - 30,
			'pause', function () { self.pause(this) }, null, 1, 0, 1, 0);
		this.pauseButton.anchor.set(0.5);
		this.pauseButton.scale.setTo(0.8);
		this.pauseButton.fixedToCamera = true;
		this.pauseButton.bringToTop();
		this.game.input.onDown.add(this.resume, this);
	}

	update() {
		var self = this;
		//this.game.physics.arcade.moveToObject(this.heartHurt, this.player, 1);
		this.background.tilePosition.x -= 0.6;
		var playerHitPlatform = this.game.physics.arcade.collide(this.characters, this.grounds);
		var playerHitChair = this.chair.overlap(this.player);
		if (playerHitChair) {

			if ((Math.floor(this.player.position.x) == this.chair.position.x || Math.floor(this.player.position.x) + 1 == this.chair.position.x || Math.floor(this.player.position.x) - 1 == this.chair.position.x) && !this.player.hitFlag) {
				this.player.hitFlag = true;
				this.player.body.velocity.x = 0;
				this.player.body.acceleration.x = 0;
				this.player.body.acceleration.y = 0;
				this.player.body.gravity.y = 0;
				this.player.body.gravity.x = 0;
				this.player.animations.stop('run');
				this.chair.kill();
				this.game.sound.stopAll();
				this.game.sound.play('success');
				this.player.animations.play('sit');
				this.game.camera.unfollow();
				setTimeout(function () {
					self.finish = self.game.add.tween(self.player)
						.to({
							x: [self.game.world.width + 800],
							y: 100
						}, 3 * Phaser.Timer.SECOND, Phaser.Easing.Cubic.In).start();

					self.finish.onComplete.add(function () {
						self.player.alpha = 0;
						self.box = self.game.add.image($('canvas').width() / 2, $('canvas').height() / 2 - 30, 'intro-box', 0);
						self.box.anchor.set(0.5);
						let text = "Tu es arrivé au jardin anglais et tu as récupéré la relique. La chaise magique du grand conseil va te transporter jusqu'au lieu de la prochaine relique de la salle !"
						self.text = self.game.add.text($('canvas').width() / 2, $('canvas').height() / 2 - 10, text, {
							font: "perfectDOS",
							fontSize: 18,
							fill: 'white',
							align: 'center',
							wordWrap: true,
							wordWrapWidth: 440
						});
						self.text.anchor.set(0.5);
						self.box.fixedToCamera = true;
						self.text.fixedToCamera = true;
						self.title = self.game.add.text($('canvas').width() / 2, $('canvas').height() / 2 - 100, 'Bravo !', {
							font: "perfectDOS",
							fontSize: 32,
							fill: 'white',
							align: 'center',
							wordWrap: true,
							wordWrapWidth: 440
						});
						self.title.anchor.set(0.5);
						self.title.fixedToCamera = true;

						self.nextLevel = self.game.add.button($('canvas').width() / 2, $('canvas').height() - 60,
							'next-level', function () {
								self.game.sound.play('clic');
								self.camera.fade('#000000');
								self.camera.onFadeComplete.add(self.game.state.start("GameTitle"), self);
							}, null, null, null, 1, 0);
						self.nextLevel.fixedToCamera = true;
						self.nextLevel.anchor.setTo(0.5);
						self.nextLevel.scale.set(0.2);
					});
				}, 1500);
			}
		}


		var playerHitWater = this.game.physics.arcade.collide(this.player, this.water, function (player, water) {
			this.map.setCollisionByExclusion([], false, 'water');
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
					this.heartHurt.animations.play('hurt');

					this.life.setHealth(player.health);

				} else {
					this.game.sound.play('kill');
				}
				ennemi.die();
			}

		}, this);

	}

	render() {
	}

	pause(state) {
		var self = this;
		if (this.game.paused == false) {
			self.game.sound.play('clic');
			self.timerText = this.game.add.text($('canvas').width() / 2, $('canvas').height() / 2 - 20, "3", {
				font: 'bold 32pt perfectDOS',
				fill: 'black',
				align: 'left',
				wordWrap: true,
				wordWrapWidth: 440
			});
			self.timerText.fixedToCamera = true;
			self.text = this.game.add.text($('canvas').width() / 2, $('canvas').height() / 2 - 60,
				"PAUSE", {
					font: "40px perfectDOS",
					fill: "#FFFFFF",
					align: "right"
				});
			self.text.anchor.setTo(0.5);
			self.text.fixedToCamera = true;
			this.resumeButton = self.game.add.button($('canvas').width() / 2, $('canvas').height() / 2,
				'resume',
				function () {
					self.game.paused = false;
				}, null, null, null, 1, 0);
			this.resumeButton.anchor.setTo(0.5);
			this.resumeButton.scale.set(0.2);
			this.resumeButton.fixedToCamera = true;
			setTimeout(function () {
				self.game.paused = true;
				self.resumeButton.events.onInputDown.add(self.resume);
			}, 10);
		}
	}

	resume() {
		var self = this;
		if (this.game.paused) {
			if (this.resumeButton.getBounds().contains(this.game.input.x, this.game.input.y)) {
				this.resumeButton.setFrame(1);
				this.resumeButton.destroy();
				this.text.destroy();

				let timer = setInterval(function () {
					if (self.timerText.text == "3") {
						self.timerText.text = "2";
					} else if (self.timerText.text == "2") {
						self.timerText.text = "1";
					} else if (self.timerText.text == "1") {
						self.timerText.destroy();
						self.game.paused = false;
						self.game.sound.play('clic');
						clearInterval(timer);
					}
				}, 1000);
			}
		}
	}

}

export default Main;
