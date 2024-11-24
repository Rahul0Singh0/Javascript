class Product {
    #price;
    #name;
    #description;

    constructor(builder) {
        console.log("Calling Product constructor");
        this.#name = builder.name;
        if(builder.price > 0 && typeof(builder.price) === "number") {
            this.#price = builder.price;
        } else {
            return {};
        }
        this.#description = builder.description;
    }

    displayProduct() {
        console.log("Product displayed", this.name, this.price, this.description);
    }

    static get Builder() {
        class Builder {
            constructor() {
                this.name = ''; //default values
                this.price = 0;
                this.description = '';
            }

            setName(incomingName) {
                this.name = incomingName;
                return this;
            }

            setPrice(incomingPrice) {
                this.price = incomingPrice;
                return this;
            }

            setDescription(incomingDescription) {
                this.description = incomingDescription;
                return this;
            }

            build() {
                return new Product(this);
            }
        };
        return Builder;
    }
};

/**
 * Product.Builder() calls the builder getter
 */

// const p = Product.Builder; 
// constructor call should be using new, without new u can't
const builder = new Product.Builder()
                           .setName("Iphone")
                           .setPrice(120000)
                           .setDescription("in top 10 phone")
                           .build(); 
// builder.setPrice(120000);
// builder.setDescription("in top 10 phone");
console.log(builder);