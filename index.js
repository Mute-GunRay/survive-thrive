console.log("Hello World!")

let currentTime = document.getElementById('current-time');
let currentMinute = 0
let currentHour = 0;

let basicTasks = ['sleep', 'work', 'exercise', 'recreation'];

let schedule = {
    monday: [
	'sleep',
	'sleep',
	'sleep',
	'sleep',
	'sleep',
	'exercise',
	'exercise',
	'work',
	'work',
	'work',
	'work',
	'work',
	'work',
	'work',
	'work',
	'work',
	'work',
	'work',
	'exercise',
	'recreation',
	'recreation',
	'recration',
	'sleep',
    ]
}

function tickMinute(){
    console.log('ticking minutes');
    if (currentMinute == 59) {
	currentMinute = 0;
    } else {
	currentMinute = currentMinute + 1;
    }
    
    if (currentHour < 10) {
	if (currentMinute < 10) {
	    currentTime.textContent = `0${currentHour}:0${currentMinute}`;   
	} else {
	    currentTime.textContent = `0${currentHour}:${currentMinute}`;
	}
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

function populateTaskOptions(){
    let taskSelects = Array(document.getElementsByClassName('tasks'));
    for (select in taskSelects){
	for (task in basicTasks){
	    let option = document.createElement('option');
	    option.textContent = task;
	    select.appendChild(task);
	}
    }  
}

populateTaskOptions();

setInterval(tickMinute, 1000);
setInterval(tickHour, 60000);
