alert("Hello, World!");
function showPopup() {
    alert("This is a popup message!");
}
function showCustomPopup(message) {
    alert(message);
}

function confirmAction() {
    var userConfirmed = confirm("Are you sure you want to proceed?");      
    if (userConfirmed) {
        alert("You chose to proceed!");
    }
    else {      
        alert("You canceled the action.");
    }
}

function promptUser() {
    var userInput = prompt("Please enter your name:");      
    if (userInput) {
        alert("Hello, " + userInput + "!");
    }
    else {
        alert("You didn't enter your name.");
    }   
}

function add(){
    var num1 = parseInt(prompt("Enter the first number:"));
    var num2 = Number(prompt("Enter the second number:"));
    var sum = num1 + num2;
    alert("The sum of " + num1 + " and " + num2 + " is: " + sum);
}
