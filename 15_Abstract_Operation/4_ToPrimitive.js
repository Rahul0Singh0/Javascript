// To call ToPrimitive using ToNumber
x = 10;
y = {a: 10};
console.log(x-y); // NaN
// x - y // y.valueOf() -> y -> y.toString() -> '[object Object]' ==> 10 - '[object Object]' => 10 - NaN = NaN
// if(ToNumber('[object Object') can't make it valid Number) return NaN 
y.toString = function() {
    return "99";
}
// y.valueOf -> y -> y.toString() -> '99' ==> 10 - '99' => -89
console.log(x - y); // -89

class Product {
    constructor(n, p) {
        this.price = p;
        this.name = n;
    }
    valueOf() {
        // return this.p; // p is undefined because of p doesn't exist
        return this.price;
    }
};

p = new Product('Iphone', 2000);

// p.valueOf() -> undefined ===> (10 - undefined) -> NaN
console.log(10 - p);

p1 = new Product('Iphone 11', 2000);
p2 = new Product('Iphone 12', 3000);
console.log(p1 < p2);