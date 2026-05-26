 function add(a, b) {
     return a + b;
 }
    console.log(add(5, 10)); // Output: 15

// Function overloading is not directly supported in JavaScript,
//  but we can achieve similar functionality using default parameters or 
// by checking the number of arguments passed to the function.

// Using default parameters
function add(a, b = 0) {
    return a + b;
}       
console.log(add(5)); // Output: 5
console.log(add(5, 10)); // Output: 15     

// Using arguments object to check the number of arguments
function add() {
    if (arguments.length === 1) {
        return arguments[0];
    } else if (arguments.length === 2) {
        return arguments[0] + arguments[1];
    } else {
        return "Invalid number of arguments";
    }   
}
console.log(add(5)); // Output: 5
console.log(add(5, 10)); // Output: 15
console.log(add(5, 10, 15)); // Output: Invalid number of arguments 

// Using rest parameters(spread operator) to handle variable number of arguments
function add(...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

console.log(add(5)); // Output: 5
console.log(add(5, 10)); // Output: 15
console.log(add(5, 10, 15)); // Output: 30      

