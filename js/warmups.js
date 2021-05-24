

function fizzy (num){
    for(let i = 1; i <=30; i++ ){
    if(num % 3 ===0 && num % 5 === 0) {
        console.log("FizzBuzz");
    } else if(num % 3 === 0) {
        console.log("Fizz")
    } else if (num % 5 === 0){
        console.log("Buzz")
    } else{
        console.log(num)
        }

    }
}

console.log(fizzy());

