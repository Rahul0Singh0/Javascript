// +++++++++++++++++++++++++++++++++++++++++++++++++++
// Memory work in JS
// Stack(Primitive) = whenever use stack memory means we get copy of declared variables
// Heap(Non-Primitive) = whenever use heap memory means we get reference of original value
let myYoutubename = "hiteshchoudharydotcom";
let anothername = myYoutubename; // as a copy not give reference of orginal value where store it
anothername = "chaiaurcode";
console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
};

let userTwo = userOne; // give a reference of memory location where original value stored in heap memory

// https://excalidraw.com/#json=RqN9kBi66obEmyASeGCUT,K1Y95QrBA5CnRz_0GNRoXA
