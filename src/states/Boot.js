import isMobile from 'ismobilejs';

class Boot extends Phaser.State {

	preload() {

	}

	create() {
		console.log(this);
		
		if (isMobile.any) {
			this.scale.scaleMode = Phaser.ScaleManager.RESIZE;
		} else {
			this.scale.scaleMode = Phaser.ScaleManager.NO_SCALE;
		}
		this.game.state.start("Preload");
	}

}


export default Boot;