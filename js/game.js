var Game = {};
var light = false;
var timerset = false;
var timersetflash = false;
Game.fps = 50;

function fadeOutRectangle(x, y, w, h, r, g, b) {
    var steps = 50,
        dr = (31 - r) / steps, // how much red should be added each time
        dg = (61 - g) / steps, // green
        db = (92 - b) / steps, // blue
        i = 0, // step counter
        interval = setInterval(function() {
            this.context.fillStyle = 'rgb(' + Math.round(r + dr * i) + ','
                                   + Math.round(g + dg * i) + ','
                                   + Math.round(b + db * i) + ')';
            this.context.fillRect(x, y, w, h); // will redraw the area each time
            i++;
            if(i === steps) { // stop if done
                clearInterval(interval);
            }
        }, 30);
}

Game.initialize = function() {
  this.entities = [];
  this.context = document.getElementById("viewport").getContext("2d");
  
};

Game.draw = function() {
  this.context.clearRect(0, 0, 512, 288);
  
  this.context.fillStyle = "#1F3D5C";
  this.context.fillRect(0, 0, 512, 288);
  
  if(timersetflash == false){ //flash timer
    setTimeout(function(){
      light = false;
      timersetflash = false;
    }, 200);
    timersetflash = true;
  }
  
  if(light == true ){ 
    this.context.fillStyle = "#FFFFFF";
    this.context.fillRect(0, 0, 512, 288);
    
    fadeOutRectangle(0,0,512,288,255,255,255)
    
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
