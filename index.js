console.log("Hello World!")

let currentTime = document.getElementById('current-time');
let currentMinute = 0
let currentHour = 0;


function tickMinute(){
    console.log('ticking minutes');
    if (currentMinute == 59) {
	currentMinute = 0;
	tickHour();
    } else {
	currentMinute = currentMinute + 1;
    }
    
    if (currentHour < 10 && currentMinute < 10) {
	currentTime.textContent = `0${currentHour}:0${currentMinute}`;
    } else {
	currentTime.textContent = `${currentHour}:${currentMinute}`;
    }

    console.log('minute ticked');
}

function tickHour(){
    document.getElementById(`task-${currentHour}`).disabled = false

    if (currentHour == 23) {
	currentHour = 0
    }

    currentHour = currentHour + 1;

    document.getElementById(`task-${currentHour}`).disabled = true;
}

setInterval(1000, tickMinute());
