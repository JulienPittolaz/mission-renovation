import Boot from 'states/Boot';
import Preload from 'states/Preload';
import GameTitle from 'states/GameTitle';
import Main from 'states/Main';
import GameOver from 'states/GameOver';
import isMobile from 'ismobilejs';
import Intro from './states/Intro';
import $ from 'jquery';
var GENEVA = null;

class Game extends Phaser.Game {

	constructor() {
		
		if(isMobile.any) {
			super(667, 375, Phaser.CANVAS);
		} else {
			super(667, 375, Phaser.CANVAS);
		}
		this.state.add('Boot', Boot, false);
		this.state.add('Preload', Preload, false);
		this.state.add('GameTitle', GameTitle, false);
		this.state.add('Intro', Intro, false);
		this.state.add('Main', Main, false);
		this.state.add('GameOver', GameOver, false);
		
		this.state.start('Boot');
	}

}

if(window.innerHeight > window.innerWidth){
	$('canvas').css('visibility', 'hidden');
	$('#turn').css('visibility', 'visible');
} else {
	GENEVA = new Game();
	$('#turn').css('visibility', 'hidden');
}

$(window).on('resize', function() {
	if(window.innerHeight > window.innerWidth){
		if(GENEVA) {		
			GENEVA.paused = true;
			$('canvas').css('visibility', 'hidden');
			$('#turn').css('visibility', 'visible');
		} else {
			$('canvas').css('visibility', 'visible');
			$('#turn').css('visibility', 'hidden');
		}
	} else {
		if(GENEVA) {
			GENEVA.paused = false;
			$('canvas').css('visibility', 'visible');
			$('#turn').css('visibility', 'hidden');
		} else {
			GENEVA = new Game();
			$('canvas').css('visibility', 'visible');
			$('#turn').css('visibility', 'hidden');
		}
	}
});