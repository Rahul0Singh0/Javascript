// function scope with var
function fun() {
    console.log(x);
    // function scoped variable
    var x = 10;
    console.log(x);
}

fun();

// function scope does not work with let 
function gun() {
    console.log(x);
    let x = 10;
    console.log(x);
}
// gun();