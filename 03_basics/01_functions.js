function sayMyName() {
    console.log("R");
    console.log("A");
    console.log("H");
    console.log("U");
    console.log("L");
}
// sayMyName() // call it
// sayMyName without parenthesis is a refernce not a call it


// function addTwoNumbers(number1, number2) { // parameters
//     console.log(number1 + number2); 
// }
// addTwoNumbers(3,4) // arguments
// const result = addTwoNumbers(null, null); // 0
// console.log(result); // undefined

function addTwoNumbers(number1, number2) { // parameters
    let result = number1 + number2;
    return result;
}

const result = addTwoNumbers(3, 4); //// arguments
// console.log(result);

// function loginUserMessage(username) {
//     return `${username} just logged in`; // string interpolation
// }
// console.log(loginUserMessage("hitesh"));
// console.log(loginUserMessage("")); // just logged in
// console.log(loginUserMessage()); // undefined just logged in


/*
string interpolation (or variable interpolation, variable substitution, or variable expansion)
is the process of evaluating a string literal containing one or more placeholders,
yielding a result in which the placeholders are replaced with their corresponding values.
*/

function loginUserMessage(username) {
    // if(username === undefined) 
    if(!username) {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`; // string interpolation
}
// undefined is a false value
// console.log(loginUserMessage());

// modified function with given default value
function loginUserMessage(username = "rahul") {
    if(!username) {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`; // string interpolation
}
console.log(loginUserMessage());