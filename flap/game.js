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
  game.load.spritesheet("strsky","strsky.png",800,600);
  //remember to finish this up
  game.load.spritesheet("rktcar","rktcar.png",64,64);
  game.load.spritesheet("antups","antups.png",128,256);
  game.load.spritesheet("antrig","antrig.png",128,256);
}

function create() {
//background
  strsky = game.add.tileSprite(0,0,320,568,'strsky');
    game.physics.startSystem(Phaser.Physics.ARCADE);
    strsky.smoothed = false;
    strsky.animations.add('twinkle',10,true);
    strsky.play('twinkle');
    strsky.autoScroll(-300,0);
//rocketcar
  rktcar = game.add.sprite(20,300,'rktcar');
    rktcar.smoothed = false;
    rktcar.animations.add('fly',20,true);
    rktcar.play('fly');
    game.physics.enable(rktcar,Phaser.Physics.ARCADE);
    rktcar.body.gravity.y = 150;
//pipes animated
  antrig = game.add.sprite(320,0,"antrig");
  //animations
    antrig.smoothed = false;
      antrig.animations.add('stand',20, true);
      antrig.play('stand');
  //movement
    game.physics.enable(antrig,Phaser.Physics.ARCADE);
      antrig.body.velocity.x = -100;
    antrig.scale.setTo(1.2,1.2);

  antups = game.add.sprite(320,300,"antups");
  //animation
    antups.smoothed = false;
      antups.animations.add('stand',20, true);
      antups.play('stand');
  //movement
    game.physics.enable(antups,Phaser.Physics.ARCADE);
      antups.body.velocity.x = -100;
    antups.scale.setTo(1.2,1.2);

}

function update() {  
  if(game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)){
   rktcar.body.velocity.y = -100;
   jumpTimer = game.time.now + 750;
  }
  if(antups.x < -50){
  var ant = game.rnd.integerInRange(25,300);  
  antups.x = 400;
  antrig.x = 400;
  antrig.y = ant;
  antups.y = antrig.y + 300;

  }
}

function render() {

}

