function Rain() {
  this.x = Math.floor(Math.random() * (512 - 0 + 1)) + 0;
  this.y = (480 - 30);
  this.velocity = Math.floor(Math.random() * (5 - 1 + 1)) + 1;;
  this.veleftright = 0;
  this.tail = this.x + 30;
};

Rain.prototype.draw = function(context) {
  //context.beginPath();
  context.fillStyle = "#F00";
  context.fillRect(this.x, this.y, 1, 2);
  //context.strokeRect(this.x, this.y, 30, 30);
  //context.stroke();
  //context.closePath();
};

Rain.prototype.update = function() {
  if (this.y > 288) {
    this.y = - 5;
    this.x = Math.floor(Math.random() * (512 - 0 + 1)) + 0;
    this.velocity = Math.floor(Math.random() * (5 - 1 + 1)) + 1;;
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
