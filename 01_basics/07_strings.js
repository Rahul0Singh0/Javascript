const name = "hitesh";
const repoCount = 50;

// console.log(name + repo + " value"); // not recommended this syntax to concenate strings
// console.log("Hello ${name}") 

// recommended backtick to concenate the strings
console.log(`Hello my name us ${name} and my repo count is ${repoCount}`); // using backtick

// String object has length and many more methods
const gameName = new String('hiteshhc'); // String is an Object store in form of (key: value) pair

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase()); // not change in original value
console.log(gameName.charAt(4)); // get char by given index

console.log(gameName.indexOf('t')); // give index of given character

const newString = gameName.substring(2,5); // from to n-1
console.log(newString); 

const anotherString = gameName.slice(-8,4); // can access by giving negative values
console.log(anotherString);

const newStringOne = "    hitesh   ";
console.log(newStringOne);
console.log(newStringOne.trim()); // remove starting and ending space 

const url = "https://rahul.com/rahul%20singh"; // doesnot require anything
console.log(url.replace('%20','-'));
console.log(url.includes('hitesh'));

const newGame = new String('hitesh-hc-com');
console.log(newGame.split('-')); // by default, split individuals chars 