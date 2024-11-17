let arr = new Array(); // 0 size
console.log(typeof(arr));
console.log(arr.length);
console.log(arr[4]);

let arr1 = new Array(5); // array with size 5
console.log(arr1.length);
console.log(arr1);

let arr2 = new Array(1,2); // [1, 2]
console.log(arr2.length);
console.log(arr2);

let arr3 = new Array(5).fill(10); // filled with 10
console.log(arr3);

let array = [];
array.push(12,23,4,3,1,56); // append element to the end
array.pop(); // remove element from end
console.log(array);
array.shift(); // remove element from start
console.log(array);
array.unshift(1010); // add element at start
console.log(array);

console.log(array.indexOf(100000)); // index return of given element if found, otherwise -1