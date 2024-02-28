// Dates

let myDate = new Date(); // object of Date refer to myData
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate); // object imp for interview


// let myCreatedDate = new Date(2023, 0, 23);
// console.log(myCreatedDate.toDateString());
// let myCreatedDate = new Date(2023, 0, 23, 5, 3);
// let myCreatedDate = new Date("2023-01-14");
let myCreatedDate = new Date("01-14-2023");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp); // millisecond values
// console.log(myCreatedDate.getTime()); // millisecond values
console.log(Math.floor(Date.now()/1000)); // convert ms to sec


let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

// console.log(`${newDate.getDay()} and the time`); 

newDate.toLocaleString('default', { // we can customize
    weekday: "long"
})

