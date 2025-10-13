let currentMinute = 0;
let currentHour = 0;
let currentDay = 0;

let player = new Player({});

// wrap this is a function?

document.getElementById("player_title").textContent = player.title;
document.getElementById("str_value").textContent = player.strength;
document.getElementById("agi_value").textContent = player.agility;
document.getElementById("int_value").textContent = player.intelligence;
document.getElementById("con_value").textContent = player.constitution;
document.getElementById("per_value").textContent = player.perception;
document.getElementById("dex_value").textContent = player.dexterity;

document.getElementById("level_value").textContent = player.level;
document.getElementById("exp_current_value").textContent = player.exp_current;
document.getElementById("exp_needed_value").textContent = player.exp_needed;

document.getElementById("hp_current_value").textContent = player.health_current
document.getElementById("hp_max_value").textContent = player.health_max;

document.getElementById("sp_current_value").textContent = player.energy_current;
document.getElementById("sp_max_value").textContent = player.energy_max;

document.getElementById("mp_current_value").textContent = player.mana_current;
document.getElementById("mp_max_value").textContent = player.mana_max;

document.getElementById("health_bar").value = player.health_current;
document.getElementById("health_bar").max = player.health_max;

document.getElementById("stamina_bar").value = player.energy_current;
document.getElementById("stamina_bar").max = player.energy_max;

document.getElementById("mana_bar").value = player.mana_current;
document.getElementById("mana_bar").max = player.mana_max;

[...document.getElementsByClassName("button")].forEach((button) => {
    button.addEventListener("click", (event) => {
	event.preventDefault;
	let siblings = [...event.target.parentElement.children]
	let class_list = [...event.target.classList];
	if(!class_list.includes("button_active")) {
	    siblings.forEach(sibling => {
		if([...sibling.classList].includes("button_active")){
		    sibling.className = "button";
		    document.getElementById(sibling.innerText).className = "";
		    return;
		}
	    })
	    document.getElementById(event.target.innerText).className = "show";
	}
	event.target.className = "button button_active";
    })
})

function renderSkills(){
    let skill_keys = Object.keys(skills);
    
    skill_keys.forEach(skill_key => {
	let skill_shard = document.createElement('li');
	let skill_name_shard = document.createElement('span')
	let skill_level_shard = document.createElement('span')
	let skill = skills[skill_key]

	skill_name_shard.textContent = skill['name']
	skill_level_shard.textContent = skill['level_current']

	skill_shard.appendChild(skill_name_shard);
	skill_shard.appendChild(skill_level_shard);
	
	switch(skill['catagory']){
	case "physical":
	    physical_skills_list.appendChild(skill_shard);
	    break;
	case "social":
	    social_skills_list.appendChild(skill_shard);
	    break;
	case "tech":
	    tech_skills_list.appendChild(skill_shard);
	    break;
	case "combat":
	    combat_skills_list.appendChild(skill_shard);
	    break;
	case "knowledge":
	    knowledge_skills_list.appendChild(skill_shard);
	    break;
	default:
	    magic_skills_list.appendChild(skill_shard);
	    break;
	}
    })
}
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

//setInterval(tickMinute, 1000);
//setInterval(tickHour, 60000);
