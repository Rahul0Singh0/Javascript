let arr = [1, 2, 3, 4, 5];
it = arr[Symbol.iterator]();
console.log(it.next());
console.log(it.next().value);