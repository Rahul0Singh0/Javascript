// truthy and falsy values
const userEmail = "h@hitesh.ai"; // truthy value
if(userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// Falsy value: false, 0, -0, BigInt => 0n, "", null, undefined, NaN
// all values truthy except flasy value
// trythy: "0", 'false', " ", [empty Array], {empty Object}, function(){}

// const emptyObj = {};
// if(Object.keys(emptyObj).length === 0) { // return an array
//     console.log("Object is empty");
// }
// if(false == 0 && false == '' && 0 == '') {
//     console.log("true");
// }

// Nullish or null Coalescing Operator (??): null undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10;
// val1 = undefined ?? 15;
val1 = null ?? 10 ?? 15 // first truthy value assign from left to right
console.log(val1);
// null coalescing operator(??) and ternary operator(?:) both are different

// Ternary Operator
// condition ? true : false
const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
