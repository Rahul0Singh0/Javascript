class Product {
    #name;
    #price;
    #category;
    #description;
    #rating;

    // this type of set the data in the object with massive no. of parameters, this will be issue in design pattern
    // And solution is Builder design pattern
    constructor(productName, productPrice, productCategory, productDescription, productRating) {
        if(productName === undefined || productPrice === undefined || productCategory === undefined
           || productDescription === undefined || productRating === undefined) {
            console.log("Invalid parameters");
        }
        this.#name = productName;
        if(productPrice > 0 && typeof(productPrice) === "number") {
            this.#price = productPrice;
        }
        this.#category = productCategory;
        this.#description = productDescription;
        this.#rating = productRating;
    }

    getPrice() {
        return this.#price;
    }

    setPrice(p) {
        if(p > 0) {
            this.#price = p;
        } else {
            console.log("Invalid price");
        }
    }

    getName() {
        return this.#name;
    }

    setName(n) {
        this.#name = n;
    }

    getCategory() {
        return this.#description;
    }

    get description() {
        return this.#description;
    }

    set description(d) {
        if(d.length === 0) {
            console.log("Invalid Description");
        }
        this.#description = d;
    }
}

let p = new Product();
p.description = "This is best Iphone";
console.log(p.description);