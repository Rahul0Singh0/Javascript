const form = document.querySelector('form')
// this usecase will give you empty value
// not fetch height and weight here because whenever load the page the empty value will be stored
// And we require submit values by user
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
