// for each loop
const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach(function(val) {
//     console.log(val)
// })

// coding.forEach((val) => { 
//     console.log(val)
// })

// function printMe(item) {
//     console.log(item);
// }
// coding.forEach(printMe) // pass the reference of function

// coding.forEach((item, index, arr)=> { // forEach have access of value, index, and array
//     console.log(item, index, arr)
// })

const myCoding = [ // in this array, there are three object
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})