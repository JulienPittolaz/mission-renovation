!function t(e,i,r){function o(a,s){if(!i[a]){if(!e[a]){var u="function"==typeof require&&require;if(!s&&u)return u(a,!0);if(n)return n(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var c=i[a]={exports:{}};e[a][0].call(c.exports,function(t){var i=e[a][1][t];return o(i?i:t)},c,c.exports,t,e,i,r)}return i[a].exports}for(var n="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(t,e,i){!function(t){var i=/iPhone/i,r=/iPod/i,o=/iPad/i,n=/(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,a=/Android/i,s=/(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,u=/(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,l=/Windows Phone/i,c=/(?=.*\bWindows\b)(?=.*\bARM\b)/i,f=/BlackBerry/i,p=/BB10/i,h=/Opera Mini/i,d=/(CriOS|Chrome)(?=.*\bMobile\b)/i,y=/(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,b=new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)","i"),v=function(t,e){return t.test(e)},m=function(t){var e=t||navigator.userAgent,m=e.split("[FBAN");if("undefined"!=typeof m[1]&&(e=m[0]),m=e.split("Twitter"),"undefined"!=typeof m[1]&&(e=m[0]),this.apple={phone:v(i,e),ipod:v(r,e),tablet:!v(i,e)&&v(o,e),device:v(i,e)||v(r,e)||v(o,e)},this.amazon={phone:v(s,e),tablet:!v(s,e)&&v(u,e),device:v(s,e)||v(u,e)},this.android={phone:v(s,e)||v(n,e),tablet:!v(s,e)&&!v(n,e)&&(v(u,e)||v(a,e)),device:v(s,e)||v(u,e)||v(n,e)||v(a,e)},this.windows={phone:v(l,e),tablet:v(c,e),device:v(l,e)||v(c,e)},this.other={blackberry:v(f,e),blackberry10:v(p,e),opera:v(h,e),firefox:v(y,e),chrome:v(d,e),device:v(f,e)||v(p,e)||v(h,e)||v(y,e)||v(d,e)},this.seven_inch=v(b,e),this.any=this.apple.device||this.android.device||this.windows.device||this.other.device||this.seven_inch,this.phone=this.apple.phone||this.android.phone||this.windows.phone,this.tablet=this.apple.tablet||this.android.tablet||this.windows.tablet,"undefined"==typeof window)return this},g=function(){var t=new m;return t.Class=m,t};"undefined"!=typeof e&&e.exports&&"undefined"==typeof window?e.exports=m:"undefined"!=typeof e&&e.exports&&"undefined"!=typeof window?e.exports=g():"function"==typeof define&&define.amd?define("isMobile",[],t.isMobile=g()):t.isMobile=g()}(this)},{}],2:[function(t,e,i){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=function(t,e,i){for(var r=!0;r;){var o=t,n=e,a=i;r=!1,null===o&&(o=Function.prototype);var s=Object.getOwnPropertyDescriptor(o,n);if(void 0!==s){if("value"in s)return s.value;var u=s.get;if(void 0===u)return;return u.call(a)}var l=Object.getPrototypeOf(o);if(null===l)return;t=l,e=n,i=a,r=!0,s=l=void 0}},s=t("states/Boot"),u=r(s),l=t("states/Preload"),c=r(l),f=t("states/GameTitle"),p=r(f),h=t("states/Main"),d=r(h),y=t("states/GameOver"),b=r(y),v=t("ismobilejs"),m=r(v),g=function(t){function e(){o(this,e),m["default"].any?a(Object.getPrototypeOf(e.prototype),"constructor",this).call(this,window.innerWidth*window.devicePixelRatio,window.innerHeight*window.devicePixelRatio,Phaser.CANVAS):a(Object.getPrototypeOf(e.prototype),"constructor",this).call(this,480,320,Phaser.CANVAS),this.state.add("Boot",u["default"],!1),this.state.add("Preload",c["default"],!1),this.state.add("GameTitle",p["default"],!1),this.state.add("Main",d["default"],!1),this.state.add("GameOver",b["default"],!1),this.state.start("Boot")}return n(e,t),e}(Phaser.Game);new g},{ismobilejs:1,"states/Boot":6,"states/GameOver":7,"states/GameTitle":8,"states/Main":9,"states/Preload":10}],3:[function(t,e,i){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function n(t){t.body.blocked.down&&t.alive&&(t.body.blocked.right&&(t.body.gravity.x=600),t.body.velocity.y=-700)}Object.defineProperty(i,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,i,r){return i&&t(e.prototype,i),r&&t(e,r),e}}(),s=function(t,e,i){for(var r=!0;r;){var o=t,n=e,a=i;r=!1,null===o&&(o=Function.prototype);var s=Object.getOwnPropertyDescriptor(o,n);if(void 0!==s){if("value"in s)return s.value;var u=s.get;if(void 0===u)return;return u.call(a)}var l=Object.getPrototypeOf(o);if(null===l)return;t=l,e=n,i=a,r=!0,s=l=void 0}},u=function(t){function e(t,i,o,a,u){r(this,e),s(Object.getPrototypeOf(e.prototype),"constructor",this).call(this,t,i,o,a,u),this.game=t,this.game.physics.arcade.enable(this),this.body.collideWorldBounds=!0,this.animations.add("run",[0,1,2,3],12,!0),this.animations.play("run"),this.body.bounce.y=.1,this.body.gravity.y=2e3,this.body.gravity.x=0,this.body.acceleration.x=1e4,this.body.velocity.x=160,this.body.maxVelocity.x=160,this.inputEnabled=!0,this.jumpTimer=0,this.jumping=!1,this.health=3,this.alive=!0,this.height=40,this.width=36,this.game.input.onTap.add(function(){n(this)},this)}return o(e,t),a(e,[{key:"update",value:function(){!this.alive,this.body.blocked.down?this.alive&&this.animations.play("run"):this.animations.stop("run")}},{key:"die",value:function(){this.alive=!1,this.animations.stop("run");var t=this;setTimeout(function(){t.body.velocity.x=0,t.body.maxVelocity.x=0},200);var e=this.game.add.text(this.game.camera.view.x+this.game.camera.view.width/2,this.game.camera.view.y+this.game.camera.view.height/3,"GAME OVER",{font:"40px minecraft",fill:"#FFFFFF",align:"right"});e.anchor.setTo(.5);var i=this.game.add.button(this.game.camera.view.x+this.game.camera.view.width/2,this.game.camera.view.y+this.game.camera.view.height/2,"restart",function(){this.game.state.start("Main")});i.anchor.setTo(.5)}}]),e}(Phaser.Sprite);i["default"]=u,e.exports=i["default"]},{}],4:[function(t,e,i){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(i,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,i,r){return i&&t(e.prototype,i),r&&t(e,r),e}}(),a=function(t,e,i){for(var r=!0;r;){var o=t,n=e,a=i;r=!1,null===o&&(o=Function.prototype);var s=Object.getOwnPropertyDescriptor(o,n);if(void 0!==s){if("value"in s)return s.value;var u=s.get;if(void 0===u)return;return u.call(a)}var l=Object.getPrototypeOf(o);if(null===l)return;t=l,e=n,i=a,r=!0,s=l=void 0}},s=function(t){function e(t,i,o,n,s){r(this,e),a(Object.getPrototypeOf(e.prototype),"constructor",this).call(this,t,i,o,n,s),this.alive=!0,this.game=t,this.game.physics.arcade.enable(this),this.body.collideWorldBounds=!0,this.animations.add("runRight",[4,5,6,7],12,!0),this.animations.add("runLeft",[0,1,2,3],12,!0),this.animations.play("runRight"),this.body.bounce.y=0,this.body.gravity.y=2e3,this.body.gravity.x=0,this.body.acceleration.x=0,this.body.velocity.x=0,this.startWalkRight=this.game.add.tween(this).to({x:[this.x+60]},1*Phaser.Timer.SECOND),this.walkLeft=this.game.add.tween(this).to({x:[this.x-60]},2*Phaser.Timer.SECOND),this.finishWalkRight=this.game.add.tween(this).to({x:[this.x]},1*Phaser.Timer.SECOND),this.startWalkRight.chain(this.walkLeft),this.walkLeft.chain(this.finishWalkRight),this.startWalkRight.start(),this.startWalkRight.onComplete.add(function(t){t.animations.stop("runRight"),t.animations.play("runLeft")}),this.walkLeft.onComplete.add(function(t){t.animations.stop("runLeft"),t.animations.play("runRight")}),this.finishWalkRight.onComplete.add(function(t){t.startWalkRight.start()})}return o(e,t),n(e,[{key:"update",value:function(){}},{key:"die",value:function(){this.alive=!1,this.startWalkRight.stop(),this.finishWalkRight.stop(),this.walkLeft.stop(),this.animations.stop("runRight"),this.animations.stop("runLeft"),this.body.velocity.y=-500,this.body.enable=!1,this.game.add.tween(this).to({alpha:0},1e3).start(),this.kill()}}]),e}(Phaser.Sprite);i["default"]=s,e.exports=i["default"]},{}],5:[function(t,e,i){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(i,"__esModule",{value:!0});var n=function(t,e,i){for(var r=!0;r;){var o=t,n=e,a=i;r=!1,null===o&&(o=Function.prototype);var s=Object.getOwnPropertyDescriptor(o,n);if(void 0!==s){if("value"in s)return s.value;var u=s.get;if(void 0===u)return;return u.call(a)}var l=Object.getPrototypeOf(o);if(null===l)return;t=l,e=n,i=a,r=!0,s=l=void 0}},a=function(t){function e(t,i,o,a,s){r(this,e),n(Object.getPrototypeOf(e.prototype),"constructor",this).call(this,t,i,o,a,s),this.animations.add("run",[0,1,2,3,4,5],6,!0),this.animations.play("run")}return o(e,t),e}(Phaser.Sprite);i["default"]=a,e.exports=i["default"]},{}],6:[function(t,e,i){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(i,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,i,r){return i&&t(e.prototype,i),r&&t(e,r),e}}(),s=function(t,e,i){for(var r=!0;r;){var o=t,n=e,a=i;r=!1,null===o&&(o=Function.prototype);var s=Object.getOwnPropertyDescriptor(o,n);if(void 0!==s){if("value"in s)return s.value;var u=s.get;if(void 0===u)return;return u.call(a)}var l=Object.getPrototypeOf(o);if(null===l)return;t=l,e=n,i=a,r=!0,s=l=void 0}},u=t("ismobilejs"),l=r(u),c=function(t){function e(){o(this,e),s(Object.getPrototypeOf(e.prototype),"constructor",this).apply(this,arguments)}return n(e,t),a(e,[{key:"preload",value:function(){}},{key:"create",value:function(){console.log(this),l["default"].any?this.scale.scaleMode=Phaser.ScaleManager.RESIZE:this.scale.scaleMode=Phaser.ScaleManager.NO_SCALE,this.game.state.start("Preload")}}]),e}(Phaser.State);i["default"]=c,e.exports=i["default"]},{ismobilejs:1}],7:[function(t,e,i){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(i,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,i,r){return i&&t(e.prototype,i),r&&t(e,r),e}}(),a=function(t,e,i){for(var r=!0;r;){var o=t,n=e,a=i;r=!1,null===o&&(o=Function.prototype);var s=Object.getOwnPropertyDescriptor(o,n);if(void 0!==s){if("value"in s)return s.value;var u=s.get;if(void 0===u)return;return u.call(a)}var l=Object.getPrototypeOf(o);if(null===l)return;t=l,e=n,i=a,r=!0,s=l=void 0}},s=function(t){function e(){r(this,e),a(Object.getPrototypeOf(e.prototype),"constructor",this).apply(this,arguments)}return o(e,t),n(e,[{key:"create",value:function(){}},{key:"restartGame",value:function(){this.game.state.start("Main")}}]),e}(Phaser.State);i["default"]=s,e.exports=i["default"]},{}],8:[function(t,e,i){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(i,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,i,r){return i&&t(e.prototype,i),r&&t(e,r),e}}(),a=function(t,e,i){for(var r=!0;r;){var o=t,n=e,a=i;r=!1,null===o&&(o=Function.prototype);var s=Object.getOwnPropertyDescriptor(o,n);if(void 0!==s){if("value"in s)return s.value;var u=s.get;if(void 0===u)return;return u.call(a)}var l=Object.getPrototypeOf(o);if(null===l)return;t=l,e=n,i=a,r=!0,s=l=void 0}},s=function(t){function e(){r(this,e),a(Object.getPrototypeOf(e.prototype),"constructor",this).apply(this,arguments)}return o(e,t),n(e,[{key:"create",value:function(){}},{key:"startGame",value:function(){this.game.state.start("Main")}}]),e}(Phaser.State);i["default"]=s,e.exports=i["default"]},{}],9:[function(t,e,i){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(i,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,i,r){return i&&t(e.prototype,i),r&&t(e,r),e}}(),s=function(t,e,i){for(var r=!0;r;){var o=t,n=e,a=i;r=!1,null===o&&(o=Function.prototype);var s=Object.getOwnPropertyDescriptor(o,n);if(void 0!==s){if("value"in s)return s.value;var u=s.get;if(void 0===u)return;return u.call(a)}var l=Object.getPrototypeOf(o);if(null===l)return;t=l,e=n,i=a,r=!0,s=l=void 0}},u=t("../objects/Player"),l=r(u),c=t("../objects/ennemi"),f=r(c),p=t("../objects/relique"),h=r(p),d=function(t){function e(){o(this,e),s(Object.getPrototypeOf(e.prototype),"constructor",this).apply(this,arguments)}return n(e,t),a(e,[{key:"create",value:function(){this.game.physics.startSystem(Phaser.Physics.ARCADE),this.game.physics.arcade.gravity.y=250,this.map=this.game.add.tilemap("niveau1"),this.map.addTilesetImage("ground_tileset","tilesn1"),this.map.addTilesetImage("jetEau","jetEau"),this.map.addTilesetImage("drapeau","drapeau"),this.map.addTilesetImage("building1","building"),this.env=this.map.createLayer("env",this.game.world.width,this.game.world.height),this.env.resizeWorld(),this.env.wrap=!0,this.env.renderSettings.enableScrollDelta=!1,this.flag=this.map.createLayer("drapeau",this.game.world.width,this.game.world.height),this.flag.resizeWorld(),this.flag.wrap=!0,this.flag.renderSettings.enableScrollDelta=!1,this.characters=this.game.add.group(),this.ennemies=this.game.add.group(),this.reliques=this.game.add.group(),this.player=new l["default"](this.game,0,700,"mereRoyaume",0),this.game.camera.follow(this.player),this.characters.add(this.player),this.player.debug=!0,this.mushroom=new f["default"](this.game,200,700,"mushroom",4),this.ennemies.add(this.mushroom),this.ennemies.add(new f["default"](this.game,680,600,"poivron",4)),this.ennemies.add(new f["default"](this.game,1120,100,"mushroom",4)),this.ennemies.add(new f["default"](this.game,1480,600,"ail",4)),this.ennemies.add(new f["default"](this.game,1800,600,"poivron",4)),this.relique=new h["default"](this.game,1240,450,"mobiliteReduite",1),this.reliques.add(this.relique)}},{key:"update",value:function(){}},{key:"render",value:function(){}}]),e}(Phaser.State);i["default"]=d,e.exports=i["default"]},{"../objects/Player":3,"../objects/ennemi":4,"../objects/relique":5}],10:[function(t,e,i){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(i,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,i,r){return i&&t(e.prototype,i),r&&t(e,r),e}}(),a=function(t,e,i){for(var r=!0;r;){var o=t,n=e,a=i;r=!1,null===o&&(o=Function.prototype);var s=Object.getOwnPropertyDescriptor(o,n);if(void 0!==s){if("value"in s)return s.value;var u=s.get;if(void 0===u)return;return u.call(a)}var l=Object.getPrototypeOf(o);if(null===l)return;t=l,e=n,i=a,r=!0,s=l=void 0}},s=function(t){function e(){r(this,e),a(Object.getPrototypeOf(e.prototype),"constructor",this).apply(this,arguments)}return o(e,t),n(e,[{key:"preload",value:function(){this.game.load.spritesheet("mereRoyaume","assets/mereRoyaume.png",64,64),this.game.load.spritesheet("mushroom","assets/mushroom.png",32,32),this.game.load.spritesheet("ail","assets/ail.png",32,32),this.game.load.spritesheet("poivron","assets/poivron.png",32,32),this.game.load.spritesheet("mobiliteReduite","assets/mobiliteReduite.png",32,32),this.game.load.tilemap("niveau1","assets/niveau1.json",null,Phaser.Tilemap.TILED_JSON),this.game.load.image("tilesn1","assets/ground_tileset.png"),this.game.load.image("jetEau","assets/jetEau.png"),this.game.load.image("drapeau","assets/drapeau.png"),this.game.load.image("building","assets/building1.png"),this.game.load.image("sky","assets/sky.png"),this.game.load.image("restart","assets/restart.png")}},{key:"create",value:function(){this.game.state.start("Main")}}]),e}(Phaser.State);i["default"]=s,e.exports=i["default"]},{}]},{},[2]);