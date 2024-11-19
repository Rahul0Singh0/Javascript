let product = {
    name: "Iphone 14 Pro",
    company: "Apple",
    price: 125000,
    warranty: "one year",
    color: "black"
};

// few important methods of Object
console.log(Object.keys(product)); // it returns an array of strings represents a unique keys
console.log(Object.values(product)); // it returns an array of strings represents a values corresponding to some key in the product object
console.log(Object.entries(product));