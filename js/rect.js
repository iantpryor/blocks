function Rect(initX) {
  this.x = initX;
  this.y = 288 - 24;
  this.velocity = 0;
  this.veleftright = 0;
  this.tail = this.x + 32;
  this.level = 0; //rand
  this.prevLevel = this.level;
};

Rect.prototype.draw = function(context) {
  //context.beginPath();
  context.fillStyle="#000000";
  context.fillRect(this.x, this.y, 32, 32);
  //context.stroke();
  //context.closePath();
};

Rect.prototype.update = function() {
  
  
  if(player.input.left == true){
    this.veleftright = 5;
    if(player.input.jump == true){
      this.veleftright += 5;
    }
  }else if(player.input.right == true){
    this.veleftright = -5;
    if(player.input.jump == true){
      this.veleftright -= 5;
    }
  }else{
    this.veleftright = 0;
  }
  
  this.y += this.velocity;
  this.x += this.veleftright;
  this.tail = this.x + 32; 
};
