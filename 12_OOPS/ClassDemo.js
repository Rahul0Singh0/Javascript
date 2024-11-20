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
        // nothing returns then JS automatically returns object which is stored in this Keyword 
        // return 10; // anything apart from object
        // return {a : 10, b : 20}; // this object return
        // return [1,2,2]; // array is a type of object
    }
    // constructor(productName, productPrice, productCategory, productDescription, productRating) {
    //     this.name = productName; // just like adding new key-value pair in existing object in this.
    //     this.price = productPrice;
    //     this.category = productCategory;
    //     this.description = productDescription;
    //     this.rating = productRating;
    // }
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
// let iphone = new Product('iphone 12', 80000, 'mobile', 'mobile phone', '5 star');
iphone.name = "Iphone 14";
iphone.price = 12000;
iphone.category = "mobiles";
iphone.rating = "4 stars"
console.log(iphone);
// console.log(typeof iphone); // object
// console.log(typeof Product); // function


class Teacher {
    // teaching() {
    //     console.log("Teaching");
    // }
}

let sanket = new Teacher();
sanket.subjects = "MERN, DSA";
console.log(sanket);