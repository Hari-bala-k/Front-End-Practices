var a = 10;
console.log(a); 
var a = 20; // Redeclaring 'a' is allowed with 'var', and it will overwrite the previous value.
console.log(a);

let b =10;
console.log(b);
b = 20;// Reassigning 'b' is allowed with 'let', but redeclaring 'b' with 'let' in the same scope would cause an error.
console.log(b);

const c = 10;
console.log(c);
c = 20; 
console.log(c); // This will throw an error because 'c' is a constant and cannot be reassigned.

//scope
function test() {
    if(true){
      var x = 10; // 'x' is function-scoped     
    }
    console.log(x); // This will log 10 because 'x' is accessible within the function
}
test();
console.log(x); // This will throw an error because 'x' is not defined outside the function.    

if (true) {
    let y = 20; // 'y' is block-scoped
    console.log(y); // This will work because 'y' is accessible within the block
}   
console.log(y); // This will throw an error because 'y' is not defined outside the block.


if (true) {
    const z = 30; // 'z' is block-scoped
    console.log(z); // This will work because 'z' is accessible within the block
}
console.log(z); // This will throw an error because 'z' is not defined outside the block.  