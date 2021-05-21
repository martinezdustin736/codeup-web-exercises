"use strict";

// function showMultiplicationTable (num) {
//     num = 7;
//     for (var i = 1; i <= 10; i++) {
//         console.log(num + " * " + i + " = " + num * i);
//     }
// }
//
// console.log(showMultiplicationTable(7))





    // for (var i = 1; i <= 10; i++) {
    //     var evenOrOdd = Math.floor(Math.random() * 180) + 20;
    //
    //     if (evenOrOdd % 2 === 0) {
    //         console.log(evenOrOdd + " number is even")
    //     } else console.log(evenOrOdd + " number is odd")
    //
    // }


for (var i = 1; i <= 9; i++) {
    console.log(i.toString().repeat(i));
}

function generatePyramid() {
    let totalNumberofRows = 10;
    let output = '';
    for (var i = 1; i <= totalNumberofRows; i++) {
        let j = i.toString()
        output += j.repeat(i)
        output += '\n'
    }
}
        console.log(output);


// for (var i = 1; i < 10; i++) {
//     var number = i;
// // console.log(stringNumber);
//     var count = 0;
//     var outputString = "";
//     while(count < number) {
//         outputString = outputString + number.toString();
//         // console.log("Time " + count + " through the loop " + stringNumber);
//         count = count + 1;
//     }
//     console.log(outputString);
// }

// for (var i = 20; i >= 1; i-- ) {
//     console.log(i * 5);
// }


