// ... is used at function definition that time called REST operator
// ... is used for combine arrays or objects that time is called Spread operator
// all the arguments passed to combine in an array and use it
// function calculateCartPrice(...num1) {
//     return num1
// }
// console.log(calculateCartPrice(2, 3, 4));

function calculateCartPrice(a, b, c, ...num1) {
    return num1
}
// console.log(calculateCartPrice(2,3,4,5,6));

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject) {
    // type checking
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleObject(user)
handleObject({ // direct object pass
    username: "same",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[2]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 100, 200])); // direct array pass