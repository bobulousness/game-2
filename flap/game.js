'use strict';

var game = new Phaser.Game(320,568,Phaser.AUTO,'game',
  {preload:preload,create:create,update:update,render:render});

var background
var rktcar
var atnrig
var atnwro

function preload() {
  game.stage.backgroundColor = '#bbbbbb';
  game.load.image("background","strsky.gif");
  game.load.image("rktcar","rktcar.gif");
}

function create() {

strsky = game.add.tileSprite(0,0,320,568,'strsky');
game.physics.startSystem(Phaser.Physics.ARCADE);
strsky.autoScroll(-500,0);
game.add.sprite(20,300,'rktcar');
}

function update() {
}

function render() {
}
