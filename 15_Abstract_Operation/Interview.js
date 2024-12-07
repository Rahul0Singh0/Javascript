function fun() {}
console.log("My function name is "+fun);
console.log(fun.valueOf());
console.log(fun.toString());

// Que is : you must do whenever you concate function with string result will be string+functionName only 
// My function name is fun[function name]
fun.toString = function() { return "fun"; }
console.log("My function name is "+fun);

// https://262.ecma-international.org/10.0/index.html#sec-typeof-operator

let x = 10;
// here below apply ToString() abstract operation
console.log(`value of x is ${x}`);
let y = {};
console.log(`value of y is ${y}`);

s = '123';
console.log(typeof(s), s);
console.log(typeof(+s), +s); // manually convert into Number
console.log(typeof(!!s), !!s); // manually convert into Boolean
let n = Number("123");
console.log(n, typeof(n));
console.log(String(0));
console.log(String(-0));

/**
 * Note : -0 and 0
 * Applications: Accelaration can be -0 m/(s^2)
 *               Velocity 
 *
 */