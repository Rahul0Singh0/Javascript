// In arrow fun, this keyword resolve lexically whereas other than this keyword
// resloved by callsite
// const obj = { 
//     firstName: "Sanket",
//     greet: () => {
//         // check in current scope, this is defined or not
//         // if not then check it in outer scope(global scope)
//         // in global scope it is defined but firstName is not defined in this keyword
//         console.log("hello, my name is", this.firstName);
//     }
// }
// in most cases this keyword refers to the call site.
// obj.greet(); // callsite is obj

// const newObj = {firstName: 'Sarthak'};
// newObj.greet.call(newObj);

const obj = {  
    firstName: "Sanket",
    greet: function() {
        console.log("Hello, my name is", this.firstName);
    }
};

// In most cases this keyword refers to the call site.
obj.greet(); // callsite is obj
const newObj = {firstName: 'Sarthak'};
newObj.greet.call(newObj);