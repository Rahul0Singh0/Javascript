let a = 10;
a = 20; // mutable
let b;
b = 10;
console.log(a, b);

// const constant; // SyntaxError: Missing initializer in const declaration
const constant = undefined;
constant = 10;
console.log(constant); // TypeError: Assignment to constant variable at compile time(Phase 1)
// this above code occur an error because this variable is immutable
const const1 = 10;
const const2 = 10;
console.log("At runtime")
const2 = 20;
console.log(const1, const2); 