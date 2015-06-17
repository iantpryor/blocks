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
