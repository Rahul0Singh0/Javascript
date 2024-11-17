function f(x) {
    console.log(x);
    x += 2;
    x -= 2;
    x *= 2;
    
    return x * 10;
}

function g(y) {
    console.log(y*2);
    return f(y);
}

let ans = g(10);
console.log(ans);

function test() {
    let x = 10;
    x += 1;
}
let ans1 = test();
console.log(ans1); // JS automatically return undefined value