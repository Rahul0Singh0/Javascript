function SetUserName(username) {
    // complex DB calls
    this.username = username
    console.log("called")
}

function createUser(username, email, password) {
    SetUserName.call(username) // technically called by using call
    this.email = email
    this.password = password
}

const chai = new createUser("chai","chai@fb.com","123")
console.log(chai)