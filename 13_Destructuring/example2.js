const product = {
    name: 'Iphone 14 Pro',
    price: 125000,
    category: {
        name: "Mobiles",
        categoryId: 12
    }
};

// const { category } = product;
// console.log(category);
// const { categoryId } = category;
// console.log(categoryId);

// Or
const { category: {categoryId} } = product;
console.log(categoryId);