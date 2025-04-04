let currentMinute = 0;
let currentHour = 0;
let currentDay = 0;

let basicTasks = ['sleep', 'work', 'exercise', 'recreation'];

let taskSelects = Array.from(document.getElementsByClassName('tasks'));

let player = {
    'health': [100, 100],
    'energy': [100, 100],
    'hunger': [100, 100],
    'thirst': [100, 100],
    'energy modifier': 0.1,
    'hunger modifier': 0.1,
    'thirst modifier': 0.1,
}

let schedule = [
    [
	'sleep', 'sleep', 'sleep', 'sleep', 'sleep',
	'sleep', 'exercise', 'work', 'work', 'work',
	'work', 'work', 'work', 'work', 'work', 'work',
	'work', 'exercise', 'recreation', 'recreation',
	'free', 'free', 'sleep'
    ],
    [
	'sleep', 'sleep', 'sleep', 'sleep', 'sleep', 'sleep',
	'exercise', 'work', 'work', 'work', 'work', 'work', 'work',
	'work', 'work', 'work', 'work', 'exercise', 'recreation',
	'recreation', 'free', 'free', 'sleep'
    ],
    [
	'sleep', 'sleep', 'sleep', 'sleep', 'sleep', 'sleep',
	'exercise', 'work', 'work', 'work', 'work', 'work', 'work',
	'work', 'work', 'work', 'work', 'exercise', 'recreation',
	'recreation', 'free', 'free', 'sleep'
    ],
    [
	'sleep', 'sleep', 'sleep', 'sleep', 'sleep', 'sleep',
	'exercise', 'work', 'work', 'work', 'work', 'work', 'work',
	'work', 'work', 'work', 'work', 'exercise', 'recreation',
	'recreation', 'free', 'free', 'sleep'
    ],
    [
	'sleep', 'sleep', 'sleep', 'sleep', 'sleep', 'sleep',
	'exercise', 'work', 'work', 'work', 'work', 'work',
	'work', 'work', 'work', 'work', 'work', 'exercise',
	'recreation', 'recreation', 'free', 'free', 'sleep'
    ],
    [
	'sleep', 'sleep', 'sleep', 'sleep', 'sleep', 'exercise',
	'free', 'free', 'free', 'free', 'free', 'free', 'free',
	'free', 'free', 'free', 'exercise', 'recreation',
	'recreation', 'free', 'free', 'sleep'
    ],
    [
	'sleep', 'sleep', 'sleep', 'sleep', 'sleep', 'sleep',
	'exercise', 'free', 'free', 'free', 'free', 'free', 'free',
	'free', 'free', 'free', 'exercise', 'recreation',
	'recreation', 'free', 'free', 'sleep'
    ]
]

function tickMinute(){
    if (currentMinute == 59) {
	currentMinute = 0;
    } else {
	currentMinute = currentMinute + 1;
    }
    
    tickResource('energy', 0.01);
    tickResource('hunger', 0.01);
    tickResource('thirst', 0.01);

    updateUI('energy', player['energy']);
    updateUI('hunger', player['hunger']);
    updateUI('thirst', player['thirst']);
    updateUI('current-time', formatCurrentTime());
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
    let days = Array.from(document.getElementById('days').children);
    days[currentDay].selected = true;
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

function tickResource(resource, amount){
    console.log(player[resource] - amount);
    player[resource][0] = player[resource][0] - amount;
}

function formatCurrentTime(){
    let formattedMinute;
    let formattedHour;

    if(currentMinute < 10){
	formattedMinute = `0${currentMinute}`;
    } else {
	formattedMinute = currentMinute.toString();
    }
    if(currentHour < 10){
	formattedHour = `0${currentHour}`;
    } else {
	formattedHour = currentHour.toString();
    }

    return `${formattedHour}:${formattedMinute}`;
}

function updateUI(element, value){
    document.getElementById(element).textContent = value;
}

function start() {
    document.getElementById('health').textContent = player['health'][0];
    document.getElementById('energy').textContent = player['energy'][0];
    document.getElementById('hunger').textContent = player['hunger'][0];
    document.getElementById('thirst').textContent = player['thirst'][0];
    populateTaskOptions();
    setDailySchedule();
}

start();

setInterval(tickMinute, 1000);
setInterval(tickHour, 60000);
