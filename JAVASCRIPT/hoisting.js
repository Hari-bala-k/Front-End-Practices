 console.log(a); // This will log 'undefined' due to hoisting, as the declaration of 'a' is hoisted but not its assignment.
var a = 10;
console.log(a); // This will log 10, as 'a' has been assigned the value 10 after the hoisting.      

console.log(b); // This will throw a ReferenceError because 'b' is not defined at this point due to the temporal dead zone of 'let'.
let b = 10;
console.log(b); // This will log 10, as 'b' has been assigned the value 10 after the declaration.

console.log(c); // This will throw a ReferenceError because 'c' is not defined at this point due to the temporal dead zone of 'const'.
const c = 10;
console.log(c); // This will log 10, as 'c' has been assigned the value 10 after the declaration.

function test() {
    console.log(d); // This will log 'undefined' due to hoisting, as the declaration of 'd' is hoisted but not its assignment.
    var d = 10;
    console.log(d); // This will log 10, as 'd' has been assigned the value 10 after the hoisting.
}   

test();

e();

let e = function add() {
    console.log("good morning");
}