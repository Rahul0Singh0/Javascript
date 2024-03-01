// there are two ways to create object 
// 1. literals (non-singleton object)
// 2. constructor (singleton object)
// singleton object(single instance) => whenever create object using constructor method
// when we create or declare object like literals, it means has multiple instances not a singleton

// Object literals
// Object.create() => object created through constructor method
// const JsUser = {}; // empty object

const mySym = Symbol("key1");

const JsUser = { // unlike array, can define key and value both
    name: "Hitesh", // by default system store keys(ex: name) as a string (ex: "name")
    "full name": "Hitesh Choudhary",
    age: 18,
    mySym: "mykey1", // key as a string not symbol
    [mySym]: "mykey2", // key as a symbol 
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};

console.log(JsUser.email);
console.log(JsUser["email"]);
// console.log(JsUser.full name); // SyntaxError // can't be access like this
console.log(JsUser["full name"]);
console.log(JsUser.mySym); // key access as a string
console.log(JsUser[mySym]); // key access as a symbol

JsUser.email = "rahul@google.com";
console.log(JsUser.email);
// Object.freeze(JsUser); // changes are not propogate
JsUser.email = "Hitesh@google.com";
console.log(JsUser);

// functions are treats as a variable
JsUser.greeting = function() { // refer a method
    console.log("Hello JS User");
}
JsUser.greeting2 = function() {
    console.log(`Hello Js user, ${this.name}`);
}
console.log(JsUser.greeting); // anonymous function
console.log(JsUser.greeting());
console.log(JsUser.greeting2());
