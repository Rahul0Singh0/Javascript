// https://tc39.es/ecma262/2019/#sec-toboolean

console.log(10 && 30); // 30 [L to R] first one is truthy value then second one is return 
console.log(NaN && 30); // first is falsy value so return first one without checking second one
console.log(40 && null); // null
console.log(undefined && 30);

// OR circuit

console.log(10 || 30); // 10 [L to R] first one is truthy then return it without checking another
console.log(NaN || 30); // first is falsy value then return second one
console.log(40 || null); // 40
console.log("" || -0); // -0
console.log(undefined || 30);