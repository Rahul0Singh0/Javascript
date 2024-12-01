// Inheritance achiving though prototype
class Events {
    bookEvents() {
        console.log("Booking event");
    }
}

class Movie extends Events {
    showTime() {
        console.log("Show time");
    }
}

class Comedy extends Events {
    showTime() {
        console.log("Show time");
    }
}

console.log(Comedy.prototype.bookEvents);