'use strict';

var game = new Phaser.Game(320,568,Phaser.AUTO,'game',
  {preload:preload,create:create,update:update,render:render});

var strsky
var rktcar
var antrig
var antups
var jumpTimer = 0

function preload() {
  game.stage.backgroundColor = '#bbbbbb';
  game.load.image("strsky","strsky.gif");
  //remember to finish this up
  game.load.spritesheet("rktcar","rktcar.gif");
  game.load.spritesheet("antups","antups.png",128,256);
  game.load.spritesheet("antrig","antrig.png",128,256);
}

function create() {
//background
  strsky = game.add.tileSprite(0,0,320,568,'strsky');
    game.physics.startSystem(Phaser.Physics.ARCADE);
    strsky.autoScroll(-300,0);
//rocketcar
  rktcar = game.add.sprite(20,300,'rktcar');
    
    game.physics.enable(rktcar,Phaser.Physics.ARCADE);
    rktcar.body.gravity.y = 150;
//pipes animated
  antrig = game.add.sprite(320,400,"antrig");
  //animations
    antrig.smoothed = false;
      antrig.animations.add('stand',20, true);
      antrig.play('stand');
  //movement
    game.physics.enable(antrig,Phaser.Physics.ARCADE);
      antrig.body.velocity.x = -100;
    antrig.scale.setTo(1.5,1.5);

  antups = game.add.sprite(320,0,"antups");
  //animation
    antups.smoothed = false;
      antups.animations.add('stand',20, true);
      antups.play('stand');
  //movement
    game.physics.enable(antups,Phaser.Physics.ARCADE);
      antups.body.velocity.x = -100;
    antups.scale.setTo(1.5,1.5);

}

function update() {

  if(game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)){
   rktcar.body.velocity.y = -100;
   jumpTimer = game.time.now + 750;
  }
  
}

function render() {

}
