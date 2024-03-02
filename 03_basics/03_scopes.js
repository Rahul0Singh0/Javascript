// curly brackes are called scope of that block of code when we used with function,
// conditional statement etc. except object declaration
// var c = 300 // global scope
let a = 300
if(true) { // block scope
    let a = 10
    const b = 20
    console.log("INNER:",a)
    function addnum() { // another scope in scope

    }
    // var c = 30
}

// for(let i = 0; i < array.length; i++) {
//     const element = array[i];
// }

/*
Note: Global scope outside of browser is different from
      global scope of broser
*/

// console.log(a)
// console.log(b)
// console.log(c)

// Nested Scope
function one() {
    const username = "hitesh";
    function two() {
        const website = "youtube";
        console.log(username);
    }
    // console.log(website); // local scope only for two() method
    two();
}
// one();

if(true) {
    const username = "hitesh";
    if(username === "hitesh") {
        const website = " youtube";
        console.log(username + website);
    }
    // console.log(website); // local scope to inner if block
}

// console.log(username); // local scope to if block

// ++++++++++++++++++++++ interesting +++++++++++++++++++++++

// addone(5) // can be call
function addone(num) { // basic function
    return num + 1
}
addone(5)

// later learn about hoisting
// addTwo(5) // can't be call
const addTwo = function(num) { // this function is also called expression
    return num + 2
}
addTwo(5)
