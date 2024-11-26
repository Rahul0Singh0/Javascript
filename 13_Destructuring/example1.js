const product = { name: 'Iphone 14 Pro', price: 125000, category: 'Mobiles' };
// const { name, price, category } = product;
// const { productName } = product; // This will put undefined inside productName
// console.log(productName);

// We have to give exact name of keys as the vatiables
const { name, price } = product;
// console.log(name, price, category); // category is not defined
console.log(name, price);

// To give original keys some other names in the destructured variables,
// we can use alias. To put an alias, we just say {originalName: alias} while destructuring objects

const { name: productName, price: productPrice, category } = product;
console.log(productName, productPrice, category);