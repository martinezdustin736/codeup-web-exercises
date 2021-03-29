"use strict";



   var chosenNumber = parseFloat(prompt("Please give me an odd number between 1 and 50"))


while(chosenNumber % 2 !== 1 || chosenNumber < 1 || chosenNumber > 50) {
    chosenNumber= parseFloat(prompt("Please give me an odd number between 1 and 50"))
}

for (var i = 1; i < 50; i = i + 2) {
    if (i === chosenNumber) {
        console.log("Yikes! Skipping number: " + chosenNumber);
    }
    console.log(i);
}