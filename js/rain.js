function Rain() {
  this.x = Math.floor(Math.random() * (1024 - 0 + 1)) + 0; // this will get a number between 0 and 1024;
  this.x -= 256;  //this will put it in the range we want
  this.y = Math.floor(Math.random() * (288 - 0  + 1)) + 0;
  this.velocity = 5;
  this.veleftright = -1;
};

Rain.prototype.draw = function(context) {
  //context.beginPath();
  context.fillStyle = "#000000";
  context.fillRect(this.x, this.y, 1, 2);
  //context.strokeRect(this.x, this.y, 30, 30);
  //context.stroke();
  //context.closePath();
};

Rain.prototype.update = function() {
  if (this.y > 288) {
    this.y = - 5;
    this.x = Math.floor(Math.random() * (1024 - 0 + 1)) + 0; // this will get a number between 0 and 1024;
    this.x -= 256;  //this will put it in the range we want
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
    this.veleftright = -1;
  }
  
  this.y += this.velocity;
  this.x += this.veleftright;
};
