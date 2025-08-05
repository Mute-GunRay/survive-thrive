let currentMinute = 0;
let currentHour = 0;
let currentDay = 0;

let taskSelects = Array.from(document.getElementsByClassName('tasks'));

let player = new Player({});
document.getElementById("player_title").textContent = player.title;
document.getElementById("strength_number").textContent = player.strength;
document.getElementById("agility_number").textContent = player.agility;
document.getElementById("intelligence_number").textContent = player.intelligence;
document.getElementById("constitution_number").textContent = player.constitution;
document.getElementById("observation_number").textContent = player.observation;

function tickMinute(){
    currentMinute == 59 ? currentMinute = 0 : currentMinute++;
    if(currentMinute < 10){
	document.getElementById("current_minute").textContent = "0" + currentMinute;
    } else {
	document.getElementById("current_minute").textContent = currentMinute;
    }
}

function tickHour(){
    currentHour == 23 ? currentHour = 0 : currentHour++;
    document.getElementById("current_hour").textContent = currentHour;
}

setInterval(tickMinute, 1000);
setInterval(tickHour, 60000);
