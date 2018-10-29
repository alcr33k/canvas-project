var numberOfDots = 100;
var multiplier = 2;

var circleRadius = 200;
var dotRadius = 10;
var lineWidth = 1;
var offset = 50;

var pointX = [];
var pointY = [];


$(document).ready(function() {
    $(document).on('input', '#multiplySlide', function() {
        multiplier =  $(this).val();
        draw();
    });
});

function draw() { 
    var canvas = document.querySelector("canvas");
    var context = canvas.getContext("2d");
    context.clearRect(0,0, canvas.width, canvas.height);
    // rita tunn grå circel
    drawCircle(context);
    // rita ut punkter på cirkel
    drawDots(context);
    // rita linjer mellan punkerna på cirklen
    drawLines(context);
}

/**
 * 
 * @param {CanvasRenderingContext2D} context 
 */
function drawCircle(context) {
    context.lineWidth = lineWidth;
    context.strokeStyle = "lightGrey";
    var circleCenterPoint = circleRadius + offset;
    context.arc(circleCenterPoint, circleCenterPoint, circleRadius, 0, 2*Math.PI);
    context.stroke();
}

/**
 * 
 * @param {CanvasRenderingContext2D} context 
 */
function drawDots(context) {
    // använd numberofDots, for loop med 12, så 12 dots
    // x cosv, y sinv, 2pi / numberofdots, match.cos, math.sin, vinkel är 2pi/12
    var angle = 2* Math.PI / numberOfDots;
    for (var i = 0; i < numberOfDots; i++) {
        context.beginPath();
        var newAngle = angle * i;
        var x = Math.cos(newAngle) * circleRadius;
        var y = Math.sin(newAngle) * circleRadius;
        var circleCenterPoint = circleRadius + offset;
        pointX.push(x+circleCenterPoint);
        pointY.push(y+circleCenterPoint);
        context.arc(circleCenterPoint + x,circleCenterPoint + y, 3, 0, 2*Math.PI);
        context.fill();
        // radien + radien * cos v

    }

}

/**
 * 
 * @param {CanvasRenderingContext2D} context 
 */
function drawLines(context) {
    context.beginPath();
    for (var i = 0; i < numberOfDots; i++) {
        // punktens värde * multiplier
        // drar mellan 1 till 2
        // 2 till 4
        // multiplicerar vad vi står på
        // dra linjer mellan punkter
        // spara punkter
/*         var drawTo = i * multiplier;
        var newAngle = angle * i;
        if (drawTo < numberOfDots) {
            var startX =  Math.cos(newAngle) * circleRadius;
            var startY = Math.sin(newAngle) * circleRadius;
            var endX = startX * multiplier;
            var endY = startY * multiplier;
            var circleCenterPoint = circleRadius + offset;
            context.moveTo(startX+circleCenterPoint, startY+circleCenterPoint);
            context.lineTo(endX+circleCenterPoint, endY+circleCenterPoint);
            context.stroke();
        } */
/*         if ((i*multiplier) < numberOfDots) {
                context.moveTo(pointX[i], pointY[i]);
                context.lineTo(pointX[i*multiplier], pointY[i*multiplier]);
        } */
/*         if (i*multiplier > pointX.length) {
            var rest = i*multiplier % pointX.length;
            context.moveTo(pointX[i], pointY[i]);
            context.lineTo(pointX[rest], pointY[rest]);

        } else {
            context.moveTo(pointX[i], pointY[i]);
            context.lineTo(pointX[i*multiplier], pointY[i*multiplier]);
            // måste resetta arrayen när den går över maxLängd
        } */

        var rest = i*multiplier % pointX.length;
        context.moveTo(pointX[i], pointY[i]);
        context.lineTo(pointX[rest], pointY[rest]);
    }
    context.stroke();
}