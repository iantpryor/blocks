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

function fadeOutRectange(x, y, w, h, r, g, b) {
  var self = document.getElementById("viewport").getContext("2d");
  var steps = 50;
  var dr = (255 - r) / steps; // how much red should be added each time
  var dg = (255 - g) / steps; // green
  var db = (255 - b) / steps; // blue
  var count = 0; // step counter
  var interval = setInterval(function() {
        self.fillStyle = 'rgb(' + Math.round(r + dr * count) + ','
                               + Math.round(g + dg * count) + ','
                               + Math.round(b + db * count) + ')';
        self.fillRect(x, y, w, h); // will redraw the area each time
        count++;
        if(count === steps) { // stop if done
            clearInterval(interval);
            fading = false;
        }
    }, 30);
}

Game.draw = function() {
    
  this.context.clearRect(0, 0, 512, 288);
  
  this.context.fillStyle = "#1F3D5C";
  this.context.fillRect(0, 0, 512, 288);
  
  /*if(timersetflash == false){ //flash timer
    setTimeout(function(){
      light = false;
      timersetflash = false;
    }, 200);
    timersetflash = true;
  }*/
  
  if(light == true ){ 
    this.context.fillStyle = "#FFFFFF";
    this.context.fillRect(0, 0, 512, 288);
    
    if(fading == false){
      fading = true;
      fadeOutRectangle(0, 0, 512, 288, 31, 61, 92);
    }
    
    setTimeout(function() {
      light = false;
      timerset = false;
      flash = 0;
    }, 3000);
  }
  
  
  if(timerset == false){ //if we haven't set a timer yet, set one
    setTimeout(function(){
      light = true;
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
