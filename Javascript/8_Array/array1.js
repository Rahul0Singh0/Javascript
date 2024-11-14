let arr1 = []; // empty array
let arr2 = ['rahul',1,null, true];
console.log(arr1, arr2);
console.log(typeof(arr1));

console.log(arr1[0]); // access
arr1[0] = 90; // modify

arr1[2] = 's';
console.log(arr1[1]); // undefined
console.log(arr1['length']);

const a = {
    1 : "key as a symbol",
    key : "Key as a string"
};

console.log(a["key"]);
console.log(a.key);
console.log(a[1]);