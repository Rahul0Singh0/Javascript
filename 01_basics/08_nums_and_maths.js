const score = 400;
const balance = new Number(100);
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(4)); // priority to before decimal value
// toPrecision() used to round off the number

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++++++++ Maths ++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.4));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(3,2,5,1));
console.log(Math.max(4,5,62,7,8));

console.log(Math.random()); // it given random number between (0, 1)
console.log(Math.random()*10); // shift one digit from right side to left side of decimal
// in above case, generate number can be zero
console.log(Math.floor((Math.random()*10)) + 1) // min value 1

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // min number is 10

