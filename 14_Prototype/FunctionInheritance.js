function Events(dateOfEvent) {
    this.dateOfEvent = dateOfEvent;
}

Events.prototype.bookEvent = function() {
    console.log("booking event");
}

function Movie(movieName, movieDate) {
    // super(movieDate); // Error
    Events.call(this, movieDate);
    this.movieName = movieName;
}

let dp = new Movie("Deadpool", "2026-07-18");

console.log(dp);