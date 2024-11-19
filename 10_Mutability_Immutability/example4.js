const product = {
    name: "Iphone 14 pro",
    price: 125000
};
// granulan control over key value pair
Object.defineProperty(product, 'name', {configurable: false, writable: false});
product.name = "Iphone 15"; // can't
delete product.name; // can't

console.log(product);