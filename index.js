// TODO: consider using fragments when rendering or bulk updating

let gameData = {
    'player': {
	'name': '',
	'birth day': 1,
	'birth month': 1,
	'current job': ['title', 0],
	'hunger': 100,
	'thirst': 100,
	'energy': 100,
	'money': 0,
	'age': 18,
	'stats': {
	    'strength': 0,
	    'charisma': 0,
	    'agility': 0,
	    'endurance': 0,
	    'intelligence': 0,
	},
	'path': 'street'
    },
    'jobs': {
	'job title': {
	    'level': 0,
	    'xp': 0,
	    'ding': 100,
	    'income': 10
	}
	
    },
    'skills': {
	'skill name': {
	    'level': 0,
	    'xp': 0,
	    'ding': 100,
	},
    },
    'inventory': {
	'item name': 0,
    },
    shop: {
	
    }
};

function loadGame(){
    gameData = JSON.parse(localStorage.getItem('thriveData'));

    if(gameData){
	// call updateUIValues passing in player keys array
	// call updateUIValues passing in stats keys array
	// call updateUIValues passing in timeslots keys array
    } else {
	startGame()
    }
}

function startGame(){
    drawModal();
    populateData();
    
}

function populateData(dataSet = 'basic'){
    // how should dataSets be handled
    if (dataSet == 'basic'){
	
    } else {
	
    }
}

function updateUIValue(keys){
    // iterate through keys array and set text content with values
}

function drawModal(type = 'start'){
    // should utilize fragments
    if (type == 'start'){
	// create modal for initialization inputs
    } else if (type == 'event'){
	// instantiate an event
	// create modal populated with event data
    } else if (type == 'death'){
	// instantiate a death
	// populate modal with death data
    }
}

// interval callback for tracking hours
function updateTimeSlot(){
    // update the active time slot
    // disable ability to change value of active time slot
    // evaluate the value of the active time slot
    // update values of hunger, thirst, energy gain/loss
    // update value of activeXpgain (how to handle what xp should grow during a time slot)
    randomEvent();
}

// interval callback for passive xp
function experianceGain(){
    randomEvent();
}

// interval callback for random events
function randomEvent(){
    // should call 
}

loadGame();

setInterval(1000, experianceGain());
setInterval(60000, updateTimeSlot());

// if every 1m == 1h then 24m == 1d
// 24m * 365 == 1y
// will want a variable to track the day of the year
// this will be evaluated every day to update
