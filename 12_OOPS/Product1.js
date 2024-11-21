class Product {
    #description;
    // used by industries
    get description() {
        return this.#description;
    }
    set description(d) {
        if(d.length === 0) {
            console.log("invalid description");
            return;
        }
        this.#description = d;
    }
};

let p = new Product();
console.log(p);
p.description = "This is description";
console.log(p.description);
console.log(p);