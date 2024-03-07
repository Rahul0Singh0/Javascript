<!-- Mark down (MD) file -->
# Projects related to DOM

## project link
[click here]

# Solution code

## project 1
```javascript
   const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body") // by tag name

// event occur by user
// NodeList, using forEach
buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function(e) {
        console.log(e)
        console.log(e.target)
        if(e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id; // grey
        }
        if(e.target.id === 'white') {
            body.style.backgroundColor = e.target.id; // white
        }
        if(e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id; // blue
        }
        if(e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id; // yellow
        }
        if(e.target.id === 'red') {
            body.style.backgroundColor = e.target.id; // red
        }
    }) // click event
} );
```


## Project 2 solution
```javascript
const form = document.querySelector('form')
// this usecase will give you empty value
// const height = parseInt(document.querySelector('#height').value) 
form.addEventListener('submit', function(e){  // callback function
    e.preventDefault() // pause event for a minute
    const height = parseInt(document.querySelector('#height').value) // string converted into integer
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')
    if(height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please give a valid height ${height}`
    } else if(weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please give a valid height ${weight}`
    } else {
        // Formula
        const bmi = (weight / ((height*height) / 1000)).toFixed(2)
        // show the result
        result.innerHTML = `<span>${bmi}</span>`
    }

}) // submit event


```

## project 3
``` javascript
const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock');

// callback parameter, time parameter
setInterval(function(){
    let date = new Date();
    // console.log(date.toLocaleString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000) // continuously run in given time 1000ms(1sec) interval
```