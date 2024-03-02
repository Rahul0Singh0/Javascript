// Immediately Invoked Function Expressions (IIFE)

// In Scope, there are many variables, function etc...
// We don't need polute through global scope 
// and want to immediately executes

(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // must be use semi-colon because in this case node does not know where we stop or terminate the context


// many times, problem occured of polution of global scope
// so, use it

// (definition of function)(execution call)

// ( () => {
//     // simple IIFE
//     console.log(`DB CONNECTED TWO`)
// } )()

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`)
} )('rahul')