// reduce() method
const myNums = [1, 2, 3]
// acc => accumulator
// const myTotal = myNums.reduce(function(acc, currVal){
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc + currVal
// }, 0) // given accumulator value is 0

const myTotal = myNums.reduce((acc, curr) => acc + curr, 0)

console.log(`Total value ${myTotal}`)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "mobile dev course",
        price: 3999
    },
    {
        itemName: "python course",
        price: 4999
    },
    {
        itemName: "Data Science",
        price: 12999
    }
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);