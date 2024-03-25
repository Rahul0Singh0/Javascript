const promiseOne = new Promise(function(resolve, reject) {
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function() {
        console.log('Async task is complete')
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Async task 2")
        resolve()
    }, 1000)
}).then(function() {
    console.log("Async 2 resolved"); 
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function() {
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
}) 

promiseThree.then(function(user) {
    console.log(user)
})


const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true
        if(!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

// promiseFour.then().catch()
promiseFour.then((user) => {
    console.log(user)
    return user.username
}).then((username) => { // return user.username into username
    console.log(username)
}).catch(function(error) {
    console.log(error)
}).finally(() => console.log("The promise either resolved or rejected"))

const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true
        if(!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

async function consumePromiseFive() {
    // const response = await promiseFive
    // console.log(response)
    try {
        const response = await promiseFive
        console.log(respose)
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response)
//         const data = await response.json() // to convert, take few time
//         console.log(data)
//     } catch(error) {
//         console.log("E: ", error)
//     }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => console.log(error))


// Fetch is feature available in NodeJS(before node also in Browser)
