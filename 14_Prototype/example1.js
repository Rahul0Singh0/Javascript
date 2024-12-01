function Product(n) {
    this.name = n;
}

Product.prototype.display = function() {
    console.log(this);
}

let p = new Product("Rahul");
p.display();

// Dynamically update the class or function using prototype at runtime
Product.prototype.display = function() {
    console.log("Updated ", this);
}

p.display();