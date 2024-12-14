function fun(c, d) {
    let m = 10;
    function gun() {
        let x = 99;
        console.log("Addition of m and c is ", m+c);
    }
    return gun;
}

const g = fun(8, 5);
console.dir(g); // accessibility of gun
g();
// Closure (fun)
// c: 8
// m: 10

// closure is a mechanism using which any inner function remembers
// all those variables which are defined in the outer function scopes,
// even when the outer function execution is completed.