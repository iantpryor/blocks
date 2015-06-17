function Rect(initX) {
  this.x = initX;
  this.y = (480 - 30);
  this.velocity = 0;
  this.veleftright = 0;
  this.tail = this.x + 30;
};

Rect.prototype.draw = function(context) {
  //context.beginPath();
  context.strokeRect(this.x, this.y, 30, 30);
  //context.stroke();
  //context.closePath();
};

Rect.prototype.update = function() {
  if (this.x < -30) {
    this.x =450;
  } else if (this.x > 450) {
    this.x = -30;
  }
  
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
};
