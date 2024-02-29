const marvel_heros = ["ironman","spiderman","thor"];
const dc_heros = ["superman","flash","batman"];
// marvel_heros.push(dc_heros); // array insert as a single element in array 
// push() will be work on existing array
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const a = [23, 3, 3];
// const allHeros = marvel_heros.concat(dc_heros,a); // combile two or more array  and returns a new array without modifying any existing arrays
// console.log(allHeros);

// spread operator prefer to combine two or more arrays
const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// flat() => Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// use to spread
// const real_another_array = another_array.flat(1);
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("Hitesh")); // false
console.log(Array.from("Hitesh")); // convert into array
console.log(Array.from({name: "hitesh"})); // interesting because must mention the array will create based on key or value
// if not given then it will create empty array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // convert all elements into array