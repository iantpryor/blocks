var Game = {};

Game.fps = 50;

Game.initialize = function() {
  this.entities = [];
  this.context = document.getElementById("viewport").getContext("2d");
  var player = {
    ...
    input: { left: false, right: false, jump: false }
  }

  document.addEventListener('keydown', function(ev) { return onkey(ev, ev.keyCode, true);  }, false);
  document.addEventListener('keyup',   function(ev) { return onkey(ev, ev.keyCode, false); }, false);

  function onkey(ev, key, pressed) {
    switch(key) {
      case KEY.LEFT:  player.input.left  = pressed; ev.preventDefault(); break;
      case KEY.RIGHT: player.input.right = pressed; ev.preventDefault(); break;
      case KEY.SPACE: player.input.jump  = pressed; ev.preventDefault(); break;
    }
  }
};

Game.draw = function() {
  this.context.clearRect(0, 0, 640, 480);
  
  for (var i=0; i < this.entities.length; i++) {
    this.entities[i].draw(this.context);
  }
};

Game.update = function() {
  for (var i=0; i < this.entities.length; i++) {
    this.entities[i].update();
  }
};

Game.addRect = function() {
  Game.entities.push(new Rect());
};

Game.addPlayer = function(){
  Game.entites.push(new Player());
};
