// Write code to loop through the array of numbers
// At each iteration, if a number is evenly divisible by 3 print "Fizz"
// If a number is evenly divisible by 5 print "Buzz"
// If a number is evenly divisible by both 3 AND 5, print "Fizz Buzz"
// If a number is not divisible by 3 or 5, print the number

var fizzBuzz = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
            console.log("Fizz Buzz");
        } else if (arr[i] % 5 === 0) {
            console.log("Buzz");
        } else if (arr[i] % 3 === 0) {
            console.log("Fizz");
        } else {
            console.log(arr[i]);
        }
    }
};

/*

Note: this condition kind of works, except for number 15, number 15 is divisible by 3 AND 5, but
the way it's set up here causes 15 to pass the first condition instead and print a "Fizz".
The AND condition needs to come first to catch any numbers that fit both conditions.

if (arr[i] % 3 === 0) {
            console.log("Fizz");
        } else if (arr[i] % 5 === 0) {
            console.log("Buzz");
        } else if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
            console.log("Fizz Buzz");
        } else {
            console.log(arr[i]);
        }

*/
