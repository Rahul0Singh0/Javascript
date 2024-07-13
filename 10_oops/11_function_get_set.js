// function based
function User(email, password) {
    this._email = email
    this._password = password
    // email property define 
    Object.defineProperty(this, 'email', {
        get: function() {
            return this._email.toUpperCase();
        },
        set: function(value) {
            this.email = value
        }
    })  
}

const chai = new User("chai@chai.com", "chai")

console.log(chai.email)