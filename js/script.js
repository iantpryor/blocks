(function(window, document, undefined) { 
    window.onload = init;
    function init() {
        //get the canvas
        var canvas = document.getElementById("mapcanvas");
        var c = canvas.getContext("2d");
        var width = 512;
        var height = 288;
        var blockSize = 16;
    
        document.getElementById("startbtn").onclick = paintblock;
        //paint the map
        function paintblock() {
            for(var i = 0; i < blockSize; i++) {
                for(var j = 0; j< blockSize; j++) {
                    c.fillStyle = "#000000";
                    c.fillRect(i, j, 1, 1);
                }
            }
        }
    }
})(window, document, undefined);
