(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2

            return; // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            console.log("Area of a circle with radius: " + this.radius + ", is: ");
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();

//console.log(Math.trunc(Math.random() * 6 + 1));
//console.log(Math.round(Math.PI));
//console.log(Math.round(Math.3.14159)); to round up in any position * 1000
//to round down "divide" and round up multiply by using Math.round(1000)

//e.g. roundFloat(3.1459, 3) -> 3.142
function roundFloat(floatNum, decimalDigit){
    // 1. multiply floatNum by 10 to the power of the decimalDigit
    //2. call Math.round on floatNum
    //3. divide floatNum by 10 to the power of decimalDigit
  floatNum = floatNum * (10 ** decimalDigit);
  floatNum = Math.round(floatNum);
  floatNum = floatNum / (10 ** decimalDigit);
  return floatNum;
}
console.log(roundFloat(floatNum))