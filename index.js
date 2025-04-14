import {skills} from "./skills.js"

let currentMinute = 0;
let currentHour = 0;
let currentDay = 0;

let basicTasks = ['sleep', 'work', 'exercise', 'recreation'];

let taskSelects = Array.from(document.getElementsByClassName('tasks'));

let player = {
    'health': [100, 100],
    'energy': [0.01, 100, 100],
    'hunger': [0.01, 100, 100],
    'thirst': [0.01, 100, 100],
    'mind': [0, 0, 100],
    'body': [0, 0, 100],
    'spirit': [0, 0, 100],
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

let activities = [
    [ // general activities
	'sleeping', 'working', 'exercising', 'free', 'study'
    ],
    [ // physical activities
	'run', 'lift weights', 'play sports', 
    ]
];

function tickMinute(){
    currentMinute == 59 ? currentMinute = 0 : currentMinute++;

    // extract these invocations into a seperate function
    tickResource('energy');
    tickResource('hunger');
    tickResource('thirst');

    updateUI('energy', player['energy'][0]);
    updateUI('hunger', player['hunger'][0]);
    updateUI('thirst', player['thirst'][0]);
    updateUI('current-time', formatCurrentTime());
}

function tickHour(){
    document.getElementById(`task-${currentHour}`).disabled = false;
    currentHour == 23 ? currentHour = 0 : currentHour++;
    currentHour == 0 ? setDailySchedule() : null;
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
    currentDay < 6 ? currentDay++ : currentDay = 0
    let dailySchedule = schedule[currentDay];
    let days = Array.from(document.getElementById('days').children);
    days[currentDay].selected = true;
    taskSelects.forEach((hour, index) => {
	Array.from(hour.children).forEach((option) => {
	    if (option.textContent == dailySchedule[index]) {
		option.selected = true;
		return;
	    }
	})
    })
}

function tickResource(resource){
    player[resource][1] = (player[resource][1] - player[resource][0]).toFixed(2);
}

function calculateResourceDelta(resource){
    
}

function formatCurrentTime(){
    let minute = currentMinute < 10 ? `0${currentMinute}` : currentMinute.toString();
    let hour = currentHour < 10 ? `0${currentHour}` : currentHour.toString();
    return `${hour}:${minute}`;
}

function updateUI(element, value){
    document.getElementById(element).textContent = value;
}

function start() {
    updateUI('health', player['health'][0]);
    updateUI('energy', player['energy'][0]);
    updateUI('hunger', player['hunger'][0]);
    updateUI('thirst', player['thirst'][0]);
    updateUI('mind', player['mind'][0]);
    updateUI('body', player['body'][0]);
    updateUI('spirit', player['spirit'][0]);
    populateTaskOptions();
    setDailySchedule();
}

start();

setInterval(tickMinute, 1000);
setInterval(tickHour, 60000);
