// triangle problem
// check given sides a,b,c are forming a triangle or not
function triangle(a, b, c) {
    if(a+b > c && b+c > a && a+c > b) {
        // valid triangle
        // check type of triangle (scalene, Isosceles, or euilateral)
        console.log("Given sides are formed a triangle");
        if(a == b && b == c && c == a) {
            console.log("Equilateral Triangle");
        } else if(a == b || b == c || a == c) {
            console.log("Isosceles Triangle");
        } else {
            console.log("Scalene Triangle");
        }
    } else {
        console.log("Not a triangle!!!");
    }
}

triangle(5, 3, 5);