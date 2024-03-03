// camelCase   
// PascalCase
// snake_case
/*
  constant -> after declaration, can't be change in future
  variable -> after declaration, can be change as per requirement
    memory location named
*/
const accountId = 398348; //constant declaration
// accountId = 887;
// variable declaration
let accountEmail = "rahul@google.com";
var accountPassword = "12345";
accountCity = "Jaipur"; // can do, because js is dynamically typed langauge
// accountId = 3; // TypeError: Assignment to constant variable
// console.log(accountId);
accountEmail = "rs@google.com";
accountPassword = "23456";
accountCity = "Bengaluru";
let accountState; // if not assign value then, undefined
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
// All of above analyzing by node js
// V8 engine before node js, provides in Google chrome for executing js code at client side only

// let keyword introduce in 2015 with EC6, before introduce, it has problem
// js does not know about scope, and doest not work based on scope
/*
  Prefer not to use var 
  because of issue in block scope or functional scope
*/