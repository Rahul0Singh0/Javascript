const o1 = { name: 'Iphone' };
const o2 = { price: 125000 };
const product = { ...o1, ...o2 }; //combining multiple objects using spread operator
console.log(product);