var x = 10; // global scopped
console.log(x, y);
if(true) {
    var x = 20; // global scopped
    var y = 30; // global scopped
    console.log(x, y); // 
}
console.log(x, y);

// acc. to official ECMAScrpt doc, hoisting concept does't exist
// Hoisting is the consequence of the scopping mechanism in JS execution/interpretation phase. 