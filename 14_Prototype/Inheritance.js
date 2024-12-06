function Events(dateOfEvent) {
    this.dateOfEvent = dateOfEvent;
}

Events.prototype.bookEvent = function() {
    console.log("booking event");
}

Events.prototype

function Movie(name) {
    this.name = name;
}

Movie.prototype.__proto__ = Events.prototype;

new Movie("Avengers");
c = new Movie("Deadpool");
c.bookEvent();