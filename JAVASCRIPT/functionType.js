 // function declaration
let a=10;
let b=20;
let c=30;
 function greet() {
     console.log("Hello, World!");
 }
greet(); // Output: Hello, World!

// function expression
const add = function(a, b, c) {
    return a + b + c;
};
console.log(add(a, b, c)); // Output: 60

// arrow function reduces the syntax of a function expression and does not have its own 'this' context.
const multiply = (a, b, c) => a * b * c;
console.log(multiply(a, b, c)); // Output: 6000

//IIFE (Immediately Invoked Function Expression) no need to call the function separately, it executes immediately after it's defined.
(function() {
    console.log("This is an IIFE!");
})(); // Output: This is an IIFE!