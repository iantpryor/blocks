(function(window, document, undefined) { 
    window.onload = init;
    function init() {
        //get the canvas
        var canvas = document.getElementById("mapcanvas");
        var c = canvas.getContext("2d");
        var width = 512;
        var height = 288;
        var blockSize = 16;
    
        document.getElementById("startbtn").onclick = paintscreen;
        
        //paint a block
        function paintblock(x, y) {
            for(var i = 0; i < blockSize; i++) {
                for(var j = 0; j< blockSize; j++) {
                    if(i == 0 || i == blockSize -1){
                        c.fillStyle = "#000000";
                        c.fillRect(i*x, j*y, 1, 1);
                    }
                    if(j == 0 || j == blockSize -1){
                        c.fillStyle = "#000000";
                        c.fillRect(i*x, j*y, 1, 1);
                        
                    }
                    
                }
            }
        }
        
        //paint the screen
        function paintscreen() {
            for(var i = 0; i< 32; i++) {
                for(var j = 0; j < 18; j++) {
                    paintblock(i, j);
                }
            }
        }
        
        
    }
})(window, document, undefined);
