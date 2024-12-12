function createTimer(time, timerId) {
    console.log("Creating a new timer with id", timerId);
    setTimeout(function () {
        console.log("Timer with a id ".concat(timerId, " is done"));
    }, time);
    console.log("Successfully created a new timer with id", timerId);
}
console.log("Starting the code");
createTimer(2000, 1);
createTimer(0, 2);
console.log('Starting a loop');
for (var i = 0; i < 1000000000; i++) {
    // something is going on
}
console.log("Loop is done");
console.log("Last line of code done");
