let currentTime = document.getElementById('current-time');
let currentMinute = 0;
let currentHour = 0;
let currentDay = 0;

let basicTasks = ['sleep', 'work', 'exercise', 'recreation'];

let taskSelects = Array.from(document.getElementsByClassName('tasks'));

let schedule = [
    [
	'sleep',
	'sleep',
	'sleep',
	'sleep',
	'sleep',
	'sleep',
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
	'exercise',
	'recreation',
	'recreation',
	'free',
	'free',
	'sleep'
    ],
    [
	'sleep',
	'sleep',
	'sleep',
	'sleep',
	'sleep',
	'sleep',
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
	'exercise',
	'recreation',
	'recreation',
	'free',
	'free',
	'sleep'
    ],
    [
	'sleep',
	'sleep',
	'sleep',
	'sleep',
	'sleep',
	'sleep',
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
	'exercise',
	'recreation',
	'recreation',
	'free',
	'free',
	'sleep'
    ],
    [
	'sleep',
	'sleep',
	'sleep',
	'sleep',
	'sleep',
	'sleep',
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
	'exercise',
	'recreation',
	'recreation',
	'free',
	'free',
	'sleep'
    ],
    [
	'sleep',
	'sleep',
	'sleep',
	'sleep',
	'sleep',
	'sleep',
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
	'exercise',
	'recreation',
	'recreation',
	'free',
	'free',
	'sleep'
    ],
    [
	'sleep',
	'sleep',
	'sleep',
	'sleep',
	'sleep',
	'sleep',
	'exercise',
	'free',
	'free',
	'free',
	'free',
	'free',
	'free',
	'free',
	'free',
	'free',
	'free',
	'exercise',
	'recreation',
	'recreation',
	'free',
	'free',
	'sleep'
    ],
    [
	'sleep',
	'sleep',
	'sleep',
	'sleep',
	'sleep',
	'sleep',
	'exercise',
	'free',
	'free',
	'free',
	'free',
	'free',
	'free',
	'free',
	'free',
	'free',
	'free',
	'exercise',
	'recreation',
	'recreation',
	'free',
	'free',
	'sleep'
    ]
]

function tickMinute(){
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
	if (currentMinute < 10) {
	 currentTime.textContent = `${currentHour}:0${currentMinute}`;   
	} else {
	    currentTime.textContent = `${currentHour}:${currentMinute}`;
	}
    }
}

function tickHour(){
    document.getElementById(`task-${currentHour}`).disabled = false

    if (currentHour == 23) {
	currentHour = 0;
	if ( currentDay < 6) {
	    currentDay = currentDay + 1;
	} else {
	    currentDay = 0;
	}
	setDailySchedule();
    } else {
	currentHour = currentHour + 1;
    }

    document.getElementById(`task-${currentHour}`).disabled = true;
}

function populateTaskOptions(){
    taskSelects.forEach(select => {
	basicTasks.forEach(task => {
	    let option = document.createElement('option');
	    option.textContent = task;
	    select.appendChild(option);
	})
    })
}

function setDailySchedule() {
    let dailySchedule = schedule[currentDay];
    taskSelects.forEach((hour, index) => {
	let options = Array.from(hour.children);
	options.forEach((option) => {
	    if (option.textContent == dailySchedule[index]) {
		option.selected = true;
		return;
	    }
	})
    })
}

populateTaskOptions();
setDailySchedule();

setInterval(tickMinute, 1000);
setInterval(tickHour, 60000);
