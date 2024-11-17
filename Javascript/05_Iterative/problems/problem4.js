// check given no is prime or non prime
// [2 to x-1]
// function isPrime(x) {
//     for(let i = 2; i <= x-1; i++) {
//         if(x%i == 0) {
//             return false;
//         }
//     }
//     return true;
// }
function isPrime(x) {
    // for(let i = 2; i < Math.sqrt(x); i++) {
    //     if(x%i == 0) return false;
    // }
    for(let i = 2; i*i < x; i++) {
        if(x%i == 0) return false;
    }
    return true;
}
let x = 13;
if(isPrime(x)) {
    console.log(`${x} is the prime number.`);
} else {
    console.log(`${x} is not a prime number.`);
}