// Constructor => Singleton object
// const tinderUser = new Object(); 

const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    // nested object
    fullname: { // object as a member of anther object
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    },
}

// console.log(regularUser.fullname.userfullname.firstname)


// const target = {a: 1, b: 2};
// const source = {b: 4, c: 5};
// const returnObject = Object.assign(target, source);
// console.log(target);
// console.log(returnObject === target);
const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
const obj4 = {5: "e", 6: "f"};
// const obj3 = {obj1, obj2};
// Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the modified target object.
// Object.assign(target, source, source2,....)
// const obj3 = Object.assign(obj1, obj2, obj4); // all values of obj2 and obj4 (source) combine into target object obj3
// const obj3 = Object.assign({}, obj1, obj2, obj4); // all value of sources object combine into empty(target) object (prefer)

// spread operator
const obj3 = {...obj1, ...obj2};
console.log(obj3);

// another syntax use when values come from database
// in form of array of objects
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    }
]

// console.log(users[0].email);

console.log(tinderUser);
console.log(Object.keys(tinderUser)); // output will be in form of array
// this array keys useful for many time when developer work on database
// traverse on the array to a particular key etc...
console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser)); // output will be in array of arrays

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // boolean value return
