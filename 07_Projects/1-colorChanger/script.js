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