// Class as a wrapper on the function
// This is traditional way to blueprinting because in older JS, class keyword does not exist
function Product(n, p, d) { // as a constructor
    console.log(this); // empty object here but in browser it will be window object
    this.name = n;
    this.price = p;
    this.description = d;
    this.displayProduct = function () {
        console.log("Name: ",this.name, " Price: ", this.price, " Description: ", this.description);
    }
    // return 1;
    // return {};
    // return [1,2];
}
// step by step wroking of new and this same as class definition
const iphone = new Product('iPhone', 999, 'Best phone');
console.log(iphone);
iphone.displayProduct();