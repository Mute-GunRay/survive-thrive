let currentMinute = 0;
let currentHour = 0;
let currentDay = 0;

let taskSelects = Array.from(document.getElementsByClassName('tasks'));

let player = new Player({});

document.getElementById("player_name").value = player.player_name
document.getElementById("player_mind").textContent = player.mind[0]
document.getElementById("player_body").textContent = player.body[0]
document.getElementById("player_spirit").textContent = player.spirit[0]
document.getElementById("health").textContent = player.health[0]
document.getElementById("energy").textContent = player.energy[0]
document.getElementById("hunger").textContent = player.hunger[0]
document.getElementById("thirst").textContent = player.thirst[0]

function tickMinute(){
    currentMinute == 59 ? currentMinute = 0 : currentMinute++;
    player.energy = player.energy - 1;
    console.log(player.energy)
}

function tickHour(){
    document.getElementById(`task-${currentHour}`).disabled = false;
    currentHour == 23 ? currentHour = 0 : currentHour++;
    document.getElementById(`task-${currentHour}`).disabled = true;
}

setInterval(tickMinute, 1000);
setInterval(tickHour, 60000);
