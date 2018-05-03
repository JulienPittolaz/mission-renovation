import isMobile from 'ismobilejs';
import $ from 'jquery';
class Boot extends Phaser.State {

	preload() {
		
		this.game.load.image('loadingbar', 'assets/loading-bar.jpg');
		this.game.load.image('splash1', 'assets/ecran-accueil.jpg');
	}

	create() {
		
		if (!Phaser.Device.desktop && !window.innerWidth > 1000) {
			
			this.scale.scaleMode = Phaser.ScaleManager.RESIZE;
		} else {
			
			this.scale.scaleMode = Phaser.ScaleManager.NO_SCALE;
		}

		this.game.state.start("Preload");
	}

}


export default Boot;