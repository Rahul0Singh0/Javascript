const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock');

// callback parameter, time parameter
setInterval(function(){
    let date = new Date();
    // console.log(date.toLocaleString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000) // continuously run in given time 1000ms(1sec) interval