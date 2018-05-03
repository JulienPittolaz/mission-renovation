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
		if(!Phaser.Device.desktop && window.innerWidth < 1000) {
			if(window.innerWidth < 700) {
				$('.flex .ui-column').css('display', 'none');
			}
			super(window.innerWidth, window.innerHeight, Phaser.CANVAS, 'game');
			
		} else {
			super(667, 375, Phaser.CANVAS, 'game');
		}
		this.config.enableDebug = false;
		this.state.add('Boot', Boot, false);
		this.state.add('Preload', Preload, false);
		this.state.add('GameTitle', GameTitle, false);
		this.state.add('Intro', Intro, false);
		this.state.add('Main', Main, false);
		this.state.add('GameOver', GameOver, false);
		this.state.start('Boot');
	}

}

if(window.innerHeight > window.innerWidth && window.innerWidth < 700){
	$('.flex').css('display', 'none');
	$('#turn').css('display', 'block');
} else {
	GENEVA = new Game();
	$('#turn').css('display', 'none');
}

$(window).on('resize', function() {
	if(window.innerHeight > window.innerWidth && window.innerWidth < 700){
		if(GENEVA) {		
			GENEVA.paused = true;
			$('.flex').css('display', 'none');
			$('#turn').css('display', 'block');
		} else {
			$('.flex').css('display', 'flex');
			$('#turn').css('display', 'none');
		}
	} else {
		if(GENEVA) {
			GENEVA.paused = false;
			$('.flex').css('display', 'flex');
			$('#turn').css('display', 'none');
		} else {
			GENEVA = new Game();
			$('.flex').css('display', 'flex');
			$('#turn').css('display', 'none');
		}
	}
});