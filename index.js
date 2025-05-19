let currentMinute = 0;
let currentHour = 0;
let currentDay = 0;

let taskSelects = Array.from(document.getElementsByClassName('tasks'));

let player = new Player({});

document.getElementById("player_name").value = player.player_name
document.getElementById("player_mind").textContent = player.mind
document.getElementById("player_body").textContent = player.body
document.getElementById("player_spirit").textContent = player.spirit

function tickMinute(){
    currentMinute == 59 ? currentMinute = 0 : currentMinute++;
}

function tickHour(){
    document.getElementById(`task-${currentHour}`).disabled = false;
    currentHour == 23 ? currentHour = 0 : currentHour++;
    document.getElementById(`task-${currentHour}`).disabled = true;
}

setInterval(tickMinute, 1000);
setInterval(tickHour, 60000);
