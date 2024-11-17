// In JS Functions are first class citizen
// In JS Functions can be returned from a function and function can be 
// passed as an argument to another function
function someFunction () {
    // computation
    return function x() {
        return 10;
    }
}

function anotherFunction(f1) {
    f1();
    console.log("called f1");
}

function hello() {
    console.log("hello");
}

anotherFunction(hello); // passing hello function


/** call stack
 * 
 * hello
 * anotherFunction
 */