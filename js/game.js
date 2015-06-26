var Game = {};
var light = false;
var timerset = false;
var timersetflash = false;
var fading = false;
var currContext = "#1F3D5C";
Game.fps = 50;



Game.initialize = function() {
  this.entities = [];
  this.context = document.getElementById("viewport").getContext("2d");
  
  for(i =0; i< 17; i++){
    Game.addRect(i*32);
  }
      
  for(i =0; i< 800; i++){
    Game.addRain();
  }
  
};


Game.draw = function() {

  this.context.clearRect(0, 0, 512, 288);
  
  this.context.fillStyle = currContext;
  this.context.fillRect(0, 0, 512, 288);
  
  
  if(light == true && fading == false){
    fading = true; // we're starting to fade, so don't run this function more than once
    var r = 255, g = 255, b = 255; // starting color (white)
    var steps = 50;
    var dr = (31 - r) / steps; // how much red should be added each time
    var dg = (61 - g) / steps; // green
    var db = (92 - b) / steps; // blue
    var count = 0; // step counter
    var interval = setInterval(function() {
      currContext = 'rgb(' + Math.round(r + dr * count) + ',' 
                  + Math.round(g + dg * count) + ',' 
                  + Math.round(b + db * count) + ')';
      count++;
      if(count === steps) { // stop if done
          clearInterval(interval);
          fading = false; // we're done fading
          light = false; // light is now off
      }
    }, 30);
  }
  
  var lightTime = Math.floor(Math.random() * (7000 - 1000 + 1)) + 1000; // random amount of time between 3 and 7 seconds
  if(light == false && timerset == false){ //if the light is off, set a timer to light it after 5 sec
    setTimeout(function(){
      light = true;
      timerset = false;
    }, lightTime);
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
  //update blocks in a repeating pattern
  for(var i = 0; i< 17; i++){
    if (this.entities[i].x < -32) {
      if(i == 0){
        this.entities[i].x = this.entities[16].tail;
      }else{
        this.entities[i].x = this.entities[i-1].tail;
      }
      this.entities[i].prevLevel = this.entities[i].level; //save the prev value
      this.entities[i].level = Math.floor(Math.random() * (8 - 0 + 1)) + 0; //rand between 1 and 8
    } else if (this.entities[i].x > 512) {
      if(i == 16){
        this.entities[i].x = this.entities[0].tail - 64;
      }else{
        this.entities[i].x = this.entities[i+1].tail - 64;
      }
      this.entities[i].level = this.entities[i].prevLevel; //return to prev.
    }
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
