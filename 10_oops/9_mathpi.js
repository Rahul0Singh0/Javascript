// this getOwnPropertyDescriptor method tells hidden things about Object
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor)


// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,
    orderChai: function() {
        console.log("chai nahi bani")
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"))

Object.defineProperty(chai, 'name', {
    // writable: false,
    enumerable: true
})

console.log(Object.getOwnPropertyDescriptor(chai,"name"))

// chai is not iterable because it is object
// for(const[key, value] of chai) {
//     console.log(`${key} : ${value}`)
// }

for(let [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}