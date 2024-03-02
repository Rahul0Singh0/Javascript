// arrow functin introduce in ES6 in 2015 and many more features
const user = {
    username: "hitesh",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username} welcome to website`);
        console.log(this) // current context (means current values)
    }
    
}

// user.welcomeMessage()
// user.username = "rahul"
// user.welcomeMessage()

// console.log(this) // current cotext is empty => {} because in global scope there is no context

// console.log(this) // in browser, this points the Window object(current context)


// function chai() {
//     let username = "rahul"
//     console.log(this.username) // undefined
//     console.log(this); // in this case, points to Object(global)
// }
// chai() 

// const chai = function() {
//     console.log(this)// global object
//     let username = "rahul"
//     console.log(this.username) // undefined
// }
// chai()

// Arrow Function
const chai = () => {
    let username = "rahul"
    console.log(this) // empty {} doesnot points any values or context
    console.log(this.username)
}
// chai()

// basic arrow function
// () => {}
// store in variable
// const addTwo = () => {}
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// Implicit return 
// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => (num1 + num2); // mostly use in React

const addTwo = (num1, num2) => {usrname: "rahul"}; // return object 
console.log(addTwo(3, 4)); // undefined

// const myArray = [2, 3, 4, 6, 7]
// myArray.forEach() // pass function and also can arrow function
