let myName = "hitesh  ";

console.log(myName.trim().length)

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function() {
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.hitesh = function() {
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function() {
    console.log(`Hitesh says hello`);
}

myHeros.hitesh()
myHeros.heyHitesh();
heroPower.hitesh()

// Inheritance

const User = {
    name: "chai",
    emial: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// Modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher) // TeachingSupport inherits from Teacher

let anotherUsername = "ChaiAurCode"

String.prototype.trueLength = function() {
    console.log(`${this}`)
    console.log(`${this.name}`)
    console.log(`True length is: ${this.trim().length}`)
}

anotherUsername.trueLength()
"Hitesh".trueLength()
"iceTea".trueLength()
