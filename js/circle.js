(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2
            //var area = Math.PI * Math.pow(this.radius, 2);

            return Math.PI * this.radius**2; // TODO: return the proper value
        },



        logInfo: function (doRounding) {
            // TODO: complete this method.

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
            var circleArea = this.getArea();
         if (doRounding === true) {
             console.log(Math.round(circleArea))
         }

         else return

            console.log("Area of a circle with radius: " + this.radius + ", is: ");
            console.log(this.getArea())

        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(true);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    var circleRadius = {
        radius: 5,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2

            return Math.PI * this.radius**2; // TODO: return the proper value
        },



        logInfo: function (doRounding) {
            // TODO: complete this method.

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
            var circleArea2 = this.getArea()
            if (doRounding === true) {
                console.log(Math.round(circleArea2))
            }

            else return

            console.log("Area of a circle with radius: " + this.radius + ", is: ");
            console.log(this.getArea())

        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circleRadius.logInfo(true);
    console.log("Circle information rounded to the nearest whole number");
    circleRadius.logInfo(true);
})();
