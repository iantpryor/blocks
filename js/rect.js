function Rect(initX) {
  this.x = initX;
  this.y = 288 - 32;
  this.velocity = 0;
  this.veleftright = 0;
  this.tail = this.x + 32;
};

Rect.prototype.draw = function(context) {
  //context.beginPath();
  context.strokeRect(this.x, this.y, 32, 32);
  //context.stroke();
  //context.closePath();
};

Rect.prototype.update = function() {
  /*if (this.x < -32) {
    this.x = Game.entites[16].tail;
    
  } else if (this.x > 512) {
    this.x = -32;
  }*/
  
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
