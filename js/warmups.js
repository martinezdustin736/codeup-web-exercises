
//
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

// function minus (num, num1){
//     return num - num1;
// }
// minus(10,5);
//
// function multi (num, num1){
//     return num * num1;
// }
//
// console.log(multi(3, 20));
//
//
// function divide (num1, num2){
//     return num1 / num2;
// }
//
// console.log(divide(100,10));
//
// function add (num1, num2){
//     return num1 + num2;
// }
//
// console.log(add(20,30));
//
//
// function loop (nums){
// for(let i = 1; i < nums.length; i++) {
//     console.log(i);
// }
// }
//
// function car (name){
//      return name = 'Tacoma';
// }
//
// console.log(name);


// fizzBuzz

// function fizz (nums){
//     for (let i = 1; i < nums; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("fizzBuzz");
//         } else if (i % 3 === 0) {
//             console.log("fizz");
//         } else if (i % 5 === 0) {
//             console.log("buzz");
//         } else console.log(i);
//
//     }
//
// }

// console.log(fizz(100));

//
// more plindrome practice
// const palindrome = str => {
//     str = str.toLowerCase()
//     console.log(str === str.split('').reverse().join(''))
// }
// palindrome('kayak');
//
// const palindrome = str => {
//     let checker = "";
//     str = str.toLowerCase()
//     checker = str;
//     console.log(checker);
//     checker=str.split('')
//     console.log(checker);
//     checker = checker.reverse();
//     console.log(checker);
//     checker = checker.join('');
//
//     console.log(str === str.split('').reverse().join(''))
// }
// palindrome('kayak');


// var info = {"name": "Charles", "age": "20","city":"San Diego", "state": "CA"};
// console.log(info.city);

//
// vowels = ['a','e','i','o','u']
// bucket= [];
//
// function remove (ltrs){
//     let split = ltrs.split('')
//     for (let i = 0; i < ltrs.length; i++) {
//         console.log(split);
//         for (let j = 0; j < vowels.length; j++){
//             console.log(vowels)
//             if (split[i] !== vowels[j]) {
//                 bucket.push(split[i]);
//                 console.log(bucket)
//             }
//             return bucket.join('');
//
//         }
//
//
//     }
// }
// console.log(remove("Hello how are you"));
//
// function remove(str) {
//     var vowels = ['a', 'e', 'i', 'o', 'u'];
//
//     return str.split('').filter(function(el) {
//         return vowels.indexOf(el.toLowerCase()) == -1;
//     }).join('');
// }
//
// console.log(remove("hello have a great day"));

//
// function removeVowels(str) {
//     let splitStr = str.split('');
//     let noVowels = [];
//     for(let i = 0; i < str.length; i++){
//         if(splitStr[i].toLowerCase() != 'a' && splitStr[i].toLowerCase() != 'e' && splitStr[i].toLowerCase() != 'i' && splitStr[i].toLowerCase() != 'o' && splitStr[i].toLowerCase() != 'u') {
//             noVowels.push(splitStr[i]);
//         }
//     }
//     return noVowels.join('');
// }
//
// console.log(removeVowels("Hello how are you"));

//
// function removeVow (str) {
//     let strSplit = str.split('');
//     let vowels = [];
//     for (let i = 0; i < str.length; i++){
//         if(strSplit[i] !== 'a' && strSplit[i] !== 'e' && strSplit[i] !== 'i'&& strSplit[i] !== 'o'&& strSplit[i] !== 'u') {
//             vowels.push(strSplit[i])
//         }
//     }
//     return vowels.join('');
// }
//
// console.log(removeVow("Hi my name is Dustin"));

const fibonacci = num => {
    const result = [0, 1]

    for (let i = 2; i <= num; i++){
        const prevNum1 = result [i-1]
        const prevNum2 = result [i-2]
        result.push(prevNum1 + prevNum2)
    }
    console.log(result[num])
}

fibonacci(5);




