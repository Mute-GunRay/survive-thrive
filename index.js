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

// what are some basic skills that fit within the setting of this game?
let skills = [
    [ // these are social skills
	'charm', 'intimidate', 'calm', 'haggle', 'communication',
	'leadership', 'empathy', 'listening',
    ],
    [ // these are tech skills
	'programming', 'network architecture', 'data mining', 'data analytics',
	'network security', 'circuit design', 
    ],
    [ // these are fighting skills
	'unarmed', 'evasion', 'small arms', 'rifles', 'heavy guns',
	'small blades', 'straight blades', 'curved blades', 'shields',
	'small bows', 'large bows', 'heavy bows', 
    ],
    [ // these are knowledge skills
	'reading', 'writing', 'comprehension', 'recall', 'memory', 'observation',
	'logic', 'discipline', 'research'
    ],
    [ // these are magic skills
	'casting', 'theory', 'alchemy', 'spell crafting', 'elemental',
	'psychic', 'mana control', 'astrology', 'augury', 
    ],
    [ // these are physical skills
	'weight lifting', 'running', 'flexibility', 'balance',
	'corrdination', 'endurance',
    ],
]

function tickMinute(){
    currentMinute = currentMinute == 59 ? 0 : currentMinute + 1
    
    tickResource('energy', 0.01);
    tickResource('hunger', 0.01);
    tickResource('thirst', 0.01);

    updateUI('energy', player['energy'][0]);
    updateUI('hunger', player['hunger'][0]);
    updateUI('thirst', player['thirst'][0]);
    updateUI('current-time', formatCurrentTime());
}

function tickHour(){
    document.getElementById(`task-${currentHour}`).disabled = false;

    if (currentHour == 23) {
	currentHour = 0;
	currentDay = currentDay < 6 ? currentDay + 1 : 0
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
    // test that selected day changes properly
    // suspect that it does not
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

function tickResource(resource, amount){
    player[resource][0] = (player[resource][0] - amount).toFixed(2);
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
