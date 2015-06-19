var Game = {};
var light = false;
Game.fps = 50;

Game.initialize = function() {
  this.entities = [];
  this.context = document.getElementById("viewport").getContext("2d");
  
};

Game.draw = function() {
  this.context.clearRect(0, 0, 512, 288);
  
  this.context.fillStyle = "#0099CC";
  this.context.fillRect(0, 0, 512, 288);
  
  if(light == true){
    this.context.fillStyle = "#000000";
    this.context.fillRect(0, 0, 512, 288);
    light = false;
  }
  
  setTimeout(function() {
    light = true;
  }, 5000);
  
  
  for (var i=0; i < this.entities.length; i++) {
    this.entities[i].draw(this.context);
  }
};

Game.update = function() {
  for (var i=0; i < this.entities.length; i++) {
    this.entities[i].update();
  }
};

Game.addRect = function(initX) {
  Game.entities.push(new Rect(initX));
};
Game.addRain = function() {
  Game.entities.push(new Rain());
};

Game.addPlayer = function(){
  Game.entites.push(new Player());
};
