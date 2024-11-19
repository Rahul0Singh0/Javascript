// we can make fully immutable Object
const obj = {x:10, y:20};
Object.seal(obj);
obj.z = 40; // new addition not allowed
obj.x = 100; // updation is allowed
delete obj.y; // not allowed
console.log(obj);

const product = {name:"iphone", price: 125000};
Object.freeze(product);
product.category = "mobile phone"; // addition not allowed
product.name = "Iphone 14 Pro"; // update not allowed
delete product.price; // deletion not allowed
console.log(product);

// Object.preventExtension(): helps us to achieve 50% of seal method
// we can't add new key value pair
// we can remove existing key value pair
// update is allowed