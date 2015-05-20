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
        
        document.onkeypress = myKeyPress(event);
        
        function myKeyPress(e){

            var keynum;

            if(window.event){ // IE					
            	keynum = e.keyCode;
            }else
                if(e.which){ // Netscape/Firefox/Opera					
            		keynum = e.which;
                 }
            alert(String.fromCharCode(keynum));
        }
        
        
        
        //paint a block
        function paintblock(x, y) {
            for(var i = 0; i < blockSize; i++) {
                for(var j = 0; j< blockSize; j++) {
                    if(i == 0 || j == 0 ){
                        c.fillStyle = "#000000";
                        c.fillRect(x+i, y+j, 1, 1);
                    }
                }
            }
        }
        
        //paint the screen
        function paintscreen() {
            for(var i = 0; i< 32; i++) {
                for(var j = 0; j < 18; j++) {
                    if(i ==0 || i==1 || i == 32-1 || i == 32-2 || j ==0 || j==1 || j == 18-1 || j == 18-2){
                        paintblock(i*blockSize, j*blockSize);
                    }
                }
            }
        }
    }
})(window, document, undefined);
