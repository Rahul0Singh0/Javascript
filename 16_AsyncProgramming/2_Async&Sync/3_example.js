// https://www.jsv9000.app/

setTimeout(function() {
    console.log("Hello");
}, 10); // 10ms

setTimeout(function() {
    console.log("Hello1");
}, 5); // 5ms

let x = 0;
for(let i = 0; i < 1000000000; i++) { // Sync
    x = x + i;
}
console.log(x);