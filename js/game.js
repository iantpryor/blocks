var Game = {};
var light = false;
var timerset = false;
var timersetflash = false;
var fading = false;
Game.fps = 50;



Game.initialize = function() {
  this.entities = [];
  this.context = document.getElementById("viewport").getContext("2d");
  
};


Game.draw = function() {

  this.context.clearRect(0, 0, 512, 288);
  
  if(light == false && fading == false){//if we're not lit up and not fading, put regular background
    this.context.fillStyle = "#1F3D5C";
    this.context.fillRect(0, 0, 512, 288);
  }
  
  
  if(light == true && fading == false){ 
    this.context.fillStyle = "#FFFFFF";
    this.context.fillRect(0, 0, 512, 288);
    fading = true;
    var r = 255, g = 255, b = 255; // starting color
    var self = document.getElementById("viewport").getContext("2d");
    var steps = 50;
    var dr = (31 - r) / steps; // how much red should be added each time
    var dg = (61 - g) / steps; // green
    var db = (92 - b) / steps; // blue
    var count = 0; // step counter
    var interval = setInterval(function() {
        self.fillStyle = 'rgb(' + Math.round(r + dr * count) + ',' + Math.round(g + dg * count) + ',' + Math.round(b + db * count) + ')';
        self.fillRect(0, 0, 512, 288); // will redraw the area each time
        count++;
        if(count === steps) { // stop if done
            clearInterval(interval);
            fading = false;
            light = false;
        }
    }, 30);
  }
  
  if(light == false && timerset == false){ //if the light is off, set a timer to light it after 5 sec
    setTimeout(function(){
      light = true;
      timerset = false;
    }, 5000);
    timerset = true;
  }
  
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
