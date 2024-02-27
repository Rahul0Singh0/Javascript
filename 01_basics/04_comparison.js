// console.log(2 > 2);
// console.log(2 < 3);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1); // implicitly convert into integer
// console.log("02" > 1); 

console.log(null > 0); // false because null is empty value
console.log(null == 0); // false
console.log(null >= 0); // true because null convert to 0 only in this case

console.log(undefined == 0); // false
console.log(undefined >= 0); // false
console.log(undefined > 0); // false

//  strict check ===  check value as well as data types also
console.log("2" === 2); // false