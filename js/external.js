"use strict";
// console.log("Hello from external JavaScript");
//
// alert("Welcome to my website");

// var favoriteColor = prompt("What is your favorite color?")
// alert(favoriteColor + " is my favorite color too")



// var lmRentalDays = parseFloat(prompt("How many days did you rent Little Mermaid?"));
// console.log(lmRentalDays);
//
// var bbRentalDays = parseFloat(prompt("How many days did you Brother Bear?"));
// console.log(bbRentalDays);
//
// var hercRentalDays = parseFloat(prompt("How many days did you rent Hercules?"));
// console.log(hercRentalDays);
//
// var rentalRate= 3;
// var totalDue = alert("You owe " + (lmRentalDays + bbRentalDays + hercRentalDays) * rentalRate);

/**
* var gRate = parseFloat(prompt("What is your Google rate?"));
* console.log(gRate)
* var amazeRate = parseFloat(prompt("What is your Amazon rate?"));
* console.log(amazeRate)
* var faceRate = parseFloat(prompt("What is your Facebook rate?"));
* console.log(faceRate);

* var gHours = parseFloat(prompt("How many hours did you work at Google?"));
* console.log(gHours);
* var amazeHours = parseFloat(prompt("How many hours did you work at Amazon?"));
* console.log(amazeHours);
* var faceHours = parseFloat(prompt("How many hours did you work at Facebook?"));
* console.log(faceHours);

* var payForWeek= (gRate * gHours) + (faceRate * faceHours) + (amazeRate * amazeHours);

* alert("Your pay for the week is " + payForWeek);
* console.log(payForWeek);
 */


//A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.

//
// var classFull = confirm("is the class full?");
// console.log(classFull);
//
// var classConflict = confirm("Any class schedule conflicts?");
// console.log(classConflict);
//
// var canRegister = !(classFull || classConflict);
//
// if (canRegister) {
//  console.log("Awesome you can register");
// } else {
//  console.log("Sorry you are unable to attend at this time")
// }


//A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.

var premiumMember = confirm("Are you a premium member?");
var regularCustomer = true;
console.log(premiumMember);

var itemsNumber = parseFloat(prompt("How many items did you purchase?"));

alert("You qualify for a discount" + (premiumMember || itemsNumber >=2) && regularCustomer);



