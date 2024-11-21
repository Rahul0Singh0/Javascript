class Product {
    // data member (properties)
    #name; // private member
    #price; // private member
    category;
    description;
    rating;

    // member functions
    constructor(productName, productPrice, productCategory, productDescription, productRating) {
        this.#name = productName; // just like adding new key-value pair in existing object in this.
        this.#price = productPrice;
        this.category = productCategory;
        this.description = productDescription;
        this.rating = productRating;
    }

    getPrice() {
        return this.#price;
    }

    setPrice(p) {
        if (p > 0) {
            this.#price = p;
        } else {
            console.log("Invalid Price");
        }
    }

    #addToCart() { // private method
        console.log("Product add to cart");
    }
    removeFromCart() {
        console.log("Product removed from cart");
    }
    displayProduct() {
        console.log("Product displayed", this.#name, this.#price, this.category, this.description, this.rating);
    }
    buyProduct() {
        console.log("Product bought");
    }
}


let iphone = new Product('iphone 12', 80000, 'mobile', 'Best iphone ever', '4.5/5');
console.log(iphone);
iphone.displayProduct();
iphone.name = "Iphone 13"; // here adding a new key:value pair
console.log(iphone);
// iphone.#name = 'Something'; // SyntaxError: reference to undeclared private field or method #name
iphone.displayProduct();
iphone.setPrice(15000);
iphone.displayProduct();
console.log(iphone.getPrice());