const user = {
    // properties
    username: "hitesh",
    loginCount: 8,
    signedIn: true,
    // methods
    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`)
        console.log(this)
    }
} // object

// console.log(user.username)
// console.log(user.getUserDetails())
// user.getUserDetails()
// console.log(this) // nothing in global context


// constructor function
function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function() {
        console.log(`Welcome ${this.username}`)
    }
    // return this;
    // implicitly return this
}

// const userOne = User("hitesh", 12, true);
// const userTwo = User("chai aur code", 12, true); // changes on original function
// So, using constructor function by using new keyword
const userOne = new User("hitesh", 12, true); // every time creates new instance
const userTwo = new User("chai aur code", 12, true);
console.log(userOne.constructor);
console.log(userTwo);

// whenever using 'new'
// 1. Firstly create new empty object/instance
// 2. Second invoked constructor function with the help of new keyword