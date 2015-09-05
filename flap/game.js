'use strict';

var game = new Phaser.Game(800,600,Phaser.AUTO,'game',
  {preload:preload,create:create,update:update,render:render});

var background

function preload() {
  game.stage.backgroundColor = '#bbbbbb';
  game.load.image("background","strsky.gif");
}

function create() {
}

function update() {
}

function render() {
}
