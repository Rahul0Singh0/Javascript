// ToNumber(argument)
// The abstract operation ToNumber converts argument to a value of type Number.
// If argument is already a Number, the result is the same Number.

// primitive types are defined as atomic values

console.log(1 - '2'); // => (1-2) => -1 // convert left side string into Number and also same as right side string then perform subtraction

console.log(1 + '2'); // if(leftPrimitive == stringType || rightPrimitive == stringType) { convert both primitivie into string and then return concatenation of both strings }  
// if(leftPrimitive != stringType || rightPrimitive != stringType) { convert both primitive into Number and then return addition of both numbers }
console.log(1 + 2);
console.log(1 + null); // (1 + 0) => 1
console.log(1 + undefined); // (1 + NaN) => NaN

// in case of non primitive, first it convert into primitive then perform same as above