// Solution of massive no. of params in constructor is getter setter but in case of you set validation at the
// time of Object Creation then you can use constructor but here already having problem of code readability and maintainbility.
// So, solution is BuilderPatter:- 

class Product {
    constructor(builder) {
        this.name = builder.name;
        if(builder.price > 0 && typeof(builder.price) === "number") {
            this.price = builder.price;
        } else {
            return {};
        }
        this.category = builder.category;
        this.description = builder.description;
        this.rating = builder.rating;
    }
};

const p= new Product({
    name: 'Iphone',
    price: 12000,
    category: 'Mobile Phone',
    description: 'Best Phone',
    rating: '4.5'
});

console.log(p);