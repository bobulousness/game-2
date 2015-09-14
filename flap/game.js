'use strict';

var game = new Phaser.Game(320,568,Phaser.AUTO,'game',
  {preload:preload,create:create,update:update,render:render});

var strsky
var rktcar
var atnrig
var atnwro
var jumpTimer = 0
function preload() {
  game.stage.backgroundColor = '#bbbbbb';
  game.load.image("strsky","strsky.gif");
  game.load.image("rktcar","rktcar.gif");
}

function create() {

strsky = game.add.tileSprite(0,0,320,568,'strsky');
game.physics.startSystem(Phaser.Physics.ARCADE);
strsky.autoScroll(-300,0);
rktcar = game.add.sprite(20,300,'rktcar');
game.physics.enable(rktcar,Phaser.Physics.ARCADE);
rktcar.body.gravity.y = 150;;
}

function update() {
 if(game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
  rktcar.body.velocity.y = -100;
  jumpTimer = game.time.now + 750;
 }
  
}

function render() {
}
