// if statement
// if(true) {
//    inner code executes
// }
// if(false) {
//    inner code does not executes
// }
// const isUserLoggedIn = true
// const temperature = 41
// if(temperature < 50) {
//     console.log("less than 50");
// }
// else {
//     console.log("temperature is greater than 50")
// }
// console.log("Execute");
// comparison operators : < , > , <= , >= , == , != , ===(also check type)
// also called strict check ===

// const score = 200

// if(score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);

// const balance = 1000
// // if(balance > 500) console.log("test"),console.log("test2");
// if(balance < 500) {
//     console.log("less than 500");
// } else if(balance < 750) {
//     console.log("less than 750");
// } else {
//     console.log("less than 1200");
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
// left to right condition check
if(userLoggedIn && debitCard) {
    console.log("Allow to buy course");
}
if(loggedInFromEmail || loggedInFromGoogle) {
    console.log("User logged in");
}