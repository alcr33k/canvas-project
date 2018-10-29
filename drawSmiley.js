function drawSmiley() {
        
    var canvas = document.querySelector("canvas");
    var context = canvas.getContext("2d");
/*     context.fillStyle = "red";
    context.fillRect(10, 10, 400, 300);
    context.lineWidth = 5;
    context.strokeStyle = "black";
    context.strokeRect(100,150,200,150);

    context.beginPath();
    context.moveTo(10, 100);
    context.lineTo(300, 100);
    context.stroke();  */
    context.lineWidth="5";
    context.beginPath();
    drawHead(context);
    drawEyes(context);
    drawMouth(context);
    drawNose(context);
    context.stroke();
}

function drawHead(context) {
    context.arc(300, 300, 100, 0, 2*Math.PI);  
}

function drawEyes(context) {
    context.moveTo(250, 250);
    context.arc(250, 250, 5, 0, 2*Math.PI, true);  
    context.moveTo(350, 250);
    context.arc(350, 250, 5, 0, 2*Math.PI, true);  
}

function drawMouth(context) {
    context.moveTo(370, 300);
    context.arc(300, 300, 70, 0,Math.PI, false); 
}

/**
 * 
 * @param {CanvasRenderingContext2D} context 
 */
function drawNose(context) {    
    context.moveTo(300, 300);
    context.arc(300, 300, 10, 0, 2*Math.PI, true); 
}