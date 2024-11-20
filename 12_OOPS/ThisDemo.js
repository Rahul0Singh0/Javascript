// let obj = {
//     x: 10,
//     y: 20,
//     fn: function () {
//         console.log(this.x, this.y);
//     }
// }
// obj.z.fn(); // here obj is a call site.


// let obj = {
//     x: 10,
//     y: 20,
//     z: {  // this keyword having accessibility of z
//         x: 90,
//         // fn: function () {
//         //     console.log(this.x, this.y);
//         // }
//         // It has an exception, this keyword will not refer to the callsite. if used inside an arrow function
//         // fn: () => {
//         //     console.log(this.x, this.y);
//         // }

//     }
// }
// obj.z.fn(); // here z is the call site.

let obj = {
    x: 10,
    y: 20,
    fn: function () {
        const f = () => {
            console.log(this.x, this.y);
        }
        f();
    }
}

obj.fn();