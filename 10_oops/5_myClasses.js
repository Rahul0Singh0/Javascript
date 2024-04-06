// From ES6
class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }
    // here it is call method not function
    encryptPassword() {
        return `${this.password}abc`
    }
    changeUsername() {
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("chai","chai@gmail.com","123")

console.log(chai.encryptPassword())
console.log(chai.changeUsername())

// Behind the scene

function User(username, email, password) { // we known, function behave like object in js
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function() {
    return `${this.password}abc`
}
User.prototype.changeUsername = function() {
    return `${this.username.toUpperCase()}`
}

const tea = new User("tea","tea@gmail.com","123")
console.log(tea.encryptPassword())
console.log(tea.changeUsername())