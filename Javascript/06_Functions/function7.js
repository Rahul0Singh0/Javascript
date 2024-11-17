// The rest parameter in JavaScript allows you to represent an indefinite number of arguments as an array. 
// It is used in function definitions to gather the remaining arguments into a single array, 
// making it a flexible and concise way to handle variable numbers of inputs.

function fun(...values) {
    // ...values represents rest parameters
    console.log(values);
}

console.log(fun(10, 20, 30, 40, 50, 60));