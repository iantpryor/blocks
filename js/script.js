(function(window, document, undefined) { 
    window.onload = init;
    function init() {
        //get the canvas
        var canvas = document.getElementById("mapcanvas");
        var c = canvas.getContext("2d");
        var width = 720;
        var height = ;
        var blockSize = 16;
    
        document.getElementById("startbtn").onclick = paintblock(0,0);
        //paint the map
        function paintblock(x,y) {
            for(var i = 0; i < width; i++) {
                for(var j = 0; j< height; j++) {
                    c.fillStyle = "#000000";
                    c.fillRect(i, j, 1, 1);
                }
            }
        }
    }
})(window, document, undefined);
