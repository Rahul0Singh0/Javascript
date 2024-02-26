// not necessory to write the below second line because it is done automatically today
"use strict"; // treat all JS code as newer version
// alert(3 + 5); // we are using node js, not browser
// ReferenceError: alert is not defined-> this is done only in browser has engineV8 in document form
// alert is available also in node -> talki about it later

// Code readability that should be high
// programmer must write code in proper readability
// console.log(3 + 3); console.log(4 + 5); // not readability to other programmers

// original documentation proviedes by ECMAScript
// Initially JS standards are different for every browser
// Build a organization called ECMAScript to standardized the code of JS

// Data Types
let name = "Rahul";
let age = 18;
let isLoggedIn = false;
let state;

// number => range ±(2^-1074 to 2^1024)
// bigint => also numeric primitive type for beyond the limit of number
// string => "" immutable(unable to be changed) in JS like Java
// boolean => true/false
// null => datatype also a standalone value in JS
// null is representation of empty value
// undefined => give when don't assign a value to a variable rather than declaration
// symbol => unique & immutable

// object

console.log(typeof "Rahul"); // string
console.log(typeof null); // object
console.log(typeof undefined); // undefined