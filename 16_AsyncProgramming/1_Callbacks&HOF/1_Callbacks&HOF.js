// HOF -> High Order Function
const arr = [1, 2, 3, 4, 5];
// arr.map( function f() {} );

function myMap(arr, fn) {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i));
    }
    return result;
}

console.log(myMap(arr, function g(element) {
    return element**2;
}));
 