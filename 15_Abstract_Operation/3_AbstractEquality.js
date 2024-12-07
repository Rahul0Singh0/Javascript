// Abstract Equality Operation (==)
// https://262.ecma-international.org/10.0/index.html#sec-abstract-equality-comparison
// difference between Abstract equality operation and strict equality operation: 
// In abstract equality operation, there is capability of implicit type conversion(coercion). whereas in Strict equality operation, there is no type conversion
// In algo, there is conversion like !ToNumber(x) here ! is not refers logical not operator
// https://stackoverflow.com/questions/55821192/whats-the-meaning-of-in-7-2-14-abstract-equality-comparison-of-ecmascript-s
// https://262.ecma-international.org/9.0/#sec-returnifabrupt-shorthands
// Its shows that ToNumber operation is performing/calling until we get a specific value of occur any error

// NaN is the only Number that is not equal to itself.
console.log(NaN == NaN); // both same then call === return false
console.log(NaN === NaN); // false