class Product {
    // Whenever class code are loaded into memory at that time, static variables are created.
    static x = 10; // static members are associated with class not object
    // It does not wait for object creation, it is loaded into memory when class is loaded into memory.
    static #y = 20; // you can also make it private member.
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        // console.log(x); // x is not defined.
        console.log(Product.x, Product.#y);
    }
};

let p1 = new Product("Iphone", 1000);
console.log(p1.x);
Product.x = 20;
console.log(Product.x);