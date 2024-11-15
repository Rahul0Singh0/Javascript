// Given a number x, check if the number is even or odd
function fun(x) {
    if(x%2 == 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log(fun(24));

// using xor bitwise operator

function f1(x) {
    if((x^1) == x+1) {
        return "even";
    } else if((x^1) == x-1) {
        return "odd";
    }
}

console.log(f1(100));

// AND operator
function f2(x) {
    if((x&1) == 0) {
        return "even";
    } else {
        return "odd";
    }
}

console.log(f2(100));

// OR Operator
function f3(x) {
    if((x|1) > x) {
        return "even";
    } else {
        return "odd";
    }
}

console.log(f3(100));

// Right(>>) and left(<<) shif operator
function f4(x) {
    if(((x>>1)<<1) == x) {
        return "even";
    } else {
        return "odd";
    }
}

console.log(f4(100));