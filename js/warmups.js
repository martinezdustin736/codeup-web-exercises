

// function fizzy (num){
//
//     for(let i = 1; i <= num; i++ ){
//     if(i % 3 ===0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if(i % 3 === 0) {
//         console.log("Fizz")
//     } else if (i % 5 === 0){
//         console.log("Buzz")
//     } else{
//         console.log(i)
//         }
//
//     }
// }
//
//
// fizzy(30);


// (() => {

    /**
     *
     * Often in programming interviews, you may be asked to solve a problem called “FizzBuzz.” FizzBuzz is a test of your ability to
     * use conditional logic with a loop that counts up by one with every iteration. The challenge asks that you log the word “Fizz” if
     * a number is evenly divisible by 3, “Buzz” if a number is evenly divisible by 5, “FizzBuzz” if it is divisible by both 3 and 5,
     * and finally the number if it is not divisible by 3 or 5.
     *
     * This morning, I’d like you to write FizzBuzz in JavaScript using a for loop that goes until the number 30.
     *
     */
//     const fizzBuzz = numTil => {
//         for (let x = 1; x <= numTil; x++) {
//             if (x % 3 === 0 && x % 5 === 0) {
//                 console.log("FizzBuzz");
//             } else if (x % 3 === 0) {
//                 console.log("Fizz");
//             } else if (x % 5 === 0) {
//                 console.log("Buzz");
//             } else {
//                 console.log(x);
//             }
//         }
//     }
//
//     fizzBuzz(30);
// })();



// function seven (num){
//     return num;
// }
//
// console.log(seven(7));

// const returnSeven = () => 7;


//
// function multiBy5 (num){
//     if(num * 5){
//         return num * 5;
//     } else {
//         return 0;
//     }
// }
//
// console.log(multiBy5(3.5));
// function fizz (num){
//     for(let i = 1; i <=num; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("FizzBuzz");
//         } else if (i % 5 === 0) {
//             console.log("Buzz")
//         }else if (i % 3 === 0){
//             console.log("Fizz")
//         }else console.log(i);
//     }
// }
//
// fizz(50);

function minus (num, num1){
    return num - num1;
}
minus(10,5);

function multi (num, num1){
    return num * num1;
}

console.log(multi(3, 20));


function divi (num1, num2){
    return num1 / num2;
}

console.log(divi(100,10));

function add (num1, num2){
    return num1 + num2;
}

console.log(add(20,30));