class Events {
    constructor(dateOfEvent) {
        this.dateOfEvent = dateOfEvent;
    }
    bookEvent() {
        console.log("booking event");
    }
}

class Movie extends Events {
    constructor(nameOfMovie, dateOfEvent) {
        super(dateOfEvent);
        this.nameOfMovie = nameOfMovie;
    }
}

let dp = new Movie("Deadpool", "2026-07-18");

console.log(dp);