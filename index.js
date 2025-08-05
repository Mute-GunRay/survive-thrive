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
}

function tickHour(){
    currentHour == 23 ? currentHour = 0 : currentHour++;
}

setInterval(tickMinute, 1000);
setInterval(tickHour, 60000);
