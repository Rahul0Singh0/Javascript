class Product {
    // data member (properties)
    name;
    price;
    category;
    description;
    rating;

    // member functions
    constructor() {
        console.log('constructor called');
    }
    addToCart() {
        console.log("Product add to cart");
    }
    removeFromCart() {
        console.log("Product removed from cart");
    }
    displayProduct() {
        console.log("Product displayed");
    }
    buyProduct() {
        console.log("Product bought");
    }
}

let iphone = new Product();
console.log(typeof iphone);

console.log(typeof Product); // function