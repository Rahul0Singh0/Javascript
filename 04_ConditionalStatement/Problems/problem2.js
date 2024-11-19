// Given three numbers, find out minimum number among them
function f(a,b,c) {
    return a>b ? a>c ? a : c : b>c ? b : c;
}
console.log(f(1,2,3));