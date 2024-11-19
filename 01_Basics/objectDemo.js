let product = {
    name: "Apple Iphone",
    price: 159999,
    discount: 500,
    isAvailable: false
};

// store number of likes of different plateform of a person
let socialHandle = {
    fb: 9000,
    insta: 10000,
    linkedin: 57854,
    x: 47893, // key as string
    "fb": 347987,
    10: 1010010,
    x: 123
};

// key always going to be unique
// latest value will be updated

console.log(product);
console.log(socialHandle);
console.log(socialHandle["x"]);
// console.log(socialHandle[X]);