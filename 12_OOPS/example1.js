const obj = {
    this: "abc",
    new: 'hello',
    function() {
        console.log(this);
    },
};
// we can use all the reserved keywords as a property name
// this is not good practice 
// because you are doing to use reserved keyword as custom identifier
console.log(obj);
console.log(obj.this);
console.log(obj.new);

let constructor = 10;

// function constructor () {
//     console.log("We are using constructor keyword as function name");
// }

// constructor();
console.log(constructor);