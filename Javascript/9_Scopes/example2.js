// "use strict"; // to prevent auto global to ignore this problem many time occured
// otherwise it will be sloppy mode by default
var teacher = "Sanket Singh";
function fun() {
    teacher = "Sarthak";
    content = "JS"; // LHS
    console.log("wow",teacher,content);
}
// console.log(content, teacher); // here content is as RHS So, canot auto global scoped
fun();
console.log(content, teacher);