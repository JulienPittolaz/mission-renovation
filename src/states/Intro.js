import $ from 'jquery';

class Intro extends Phaser.State {

	create() {
		this.game.camera.fade('#000000', 1, true);
		this.game.camera.flash('#000000', 500, true);
		const texts = [
			"Le bâtiment du grand Conseil, l’organe qui crée et valide les lois du canton, n’a pas été rénové depuis 1962.",
			"C’est pourquoi le Grand Conseil a décidé de faire appel à la Mère Royaume qu’ils jugent suffisamment courageuse pour relever un défi majeur. Elle aura besoin de ton aide pour récupérer des reliques, protégées par divers monstres, qui permettront de rénover la salle. ",
			"Le grand conseil est allé la chercher en train, dans son monde, directement en 1602. Elle arrive à la gare dans une ville qui a complétement changé depuis son époque et elle se retrouve un peu perdue…",
			"Aide la mère royaume à récupérer les reliques « durant ses péripéties à travers la ville ». Une fois que tu auras récupéré toutes les reliques tu pourras les amener à la salle du Grand Conseil qui pourra enfin être rénové.",
		]
		const self = this;
		this.game.stage.backgroundColor = '#d5f6ff';
		this.box = this.game.add.image($('canvas').width() / 2, $('canvas').height() / 2 - 30, 'intro-box', 0);
		this.box.anchor.set(0.5);
		this.player = this.game.add.sprite(580, 230, 'mereRoyaume', 0);
		this.player.anchor.setTo(0.5);
		this.player.scale.setTo(-1.5, 1.5);
		this.page = 0;
		this.text = this.game.add.text($('canvas').width() / 2, $('canvas').height() / 2 - 30, texts[0], {
			font: "Minecraft",
			fontSize: 18,
			fill: 'white',
			align: 'left',
			wordWrap: true,
			wordWrapWidth: 440
		});
		this.text.anchor.set(0.5);
		let next = this.game.add.button($('canvas').width() - 115, $('canvas').height() - 40,
		'next',
		function() {
			if(self.page == texts.length - 1) {
				self.camera.fade('#000000');
				self.camera.onFadeComplete.add(self.startGame, self);
			} else {
				self.page ++;
				self.text.text = texts[self.page];
			}
		}, null, null, null, 1, 0);
		next.anchor.setTo(0.5);

	}

	update() {

	}

	startGame() {
		this.game.state.start("Main");
	}

}

export default Intro;
