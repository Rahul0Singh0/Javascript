// array
// (parenthesis), {braces or curly braces} and [brakets]
// JS arraya are resizable, mix of different data types
// zero based indexing
// JS Array copy operations create shallow copy.
// Shallow copy of an object is a copy whose properties share the same reference as those 
// of the source object from which the copy was made.
// Deep copy of an object is a copy whose properties do not share the same reference as those
// of the source object from which the copy was made.

const myArr = [0, 1, 2, 3, 4, 5];
// console.log(myArr[1]);
const myHeros = ["shaktiman", "naagraj"];
const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr2[1]);

// Array Methods

// myArr.push(60);
// myArr.pop();

// myArr.unshift(9); // insert at front-> time consuming operation by shifting numbers
// myArr.shift(); // first element remove

// console.log(myArr.includes(8));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join(); // add all the elements in the form of string(change its type)
// console.log(newArr);
// console.log(myArr);


// slice, splice

console.log("A ", myArr); 

const myn1 = myArr.slice(1, 3);

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3);
console.log(myn2);
console.log("C ", myArr);

// slice() method return array from [r1 to r2-1]
// splice() method manupulate original array and
//          create subarray from given range [r1 to r2]