// Mainly datatypes are categories into two types 
// 1. Primitive or built-in data types
// 2. Non-Primitive or userdefined data types
// The data type is a collection of data with values
// having fixed values, meaning as well as its characteristics.

// In JavaScript

// Primitive Types
// 7 Types: 
//    String(Immutable not give reference of that memory, give access of copy of original)
//    Number, Boolean, null, undefined, Symbol(unique), BigInt(Some Scientific values or larger integer values)

// Note: JS is Dynamically Typed Language because don't require to tell to JS which types of value can store u=in variable
const score = false; // JS
// Where as TypeScript is Statically Typed Language
// const score:number = 100; // TS
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTemp = null; // empty
let userEmail;

// same value pass but return different or unique value
const id = Symbol('123'); // unique returnType is also Symbol
const anotherId = Symbol('123'); // differ value return 
console.log(id === anotherId); // false

const bigNumber = 3740349852848349843848934983489n; // at last n represent to make BigInt
console.log(typeof(bigNumber)); // bigint 
// console.log(bigNumber);

// Reference Type (Non-Primitive) in JS
// Types: Array, Objects, Functions

const heros = ["shaktiman","naagraj","doga"]; // Array 
// Object pair(key:value) form
let myObj = {
    name: "hitesh",
    age: 22
}
// 1st way of Function declaration like variable
const myFunction = function() {
    console.log("Hello World");
}
console.log(typeof heros); // object
console.log(typeof myObj); // object
console.log(typeof myFunction); // function
console.log(typeof null); // object
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined

// https://262.ecma-international.org/5.1/#sec-11.4.3