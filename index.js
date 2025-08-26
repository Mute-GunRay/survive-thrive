let currentMinute = 0;
let currentHour = 0;
let currentDay = 0;

// begin renderer extraction
let taskSelects = Array.from(document.getElementsByClassName('tasks'));

let player = new Player({});
document.getElementById("player_title").textContent = player.title;
document.getElementById("strength_number").textContent = player.strength;
document.getElementById("agility_number").textContent = player.agility;
document.getElementById("int_number").textContent = player.intelligence;
document.getElementById("con_number").textContent = player.constitution;
document.getElementById("obs_number").textContent = player.observation;

function renderSkills(){
    let skill_keys = Object.keys(skills);
    let social_skills_block = document.getElementById("social")
    let tech_skills_block = document.getElementById("tech")
    let combat_skills_block = document.getElementById("combat")
    let knowledge_skills_block = document.getElementById("knowledge")
    let magic_skills_block = document.getElementById("magic")
    let physical_skills_block = document.getElementById("physical")
    let social_skills_list = document.createElement('ul')
    let tech_skills_list = document.createElement('ul')
    let combat_skills_list = document.createElement('ul')
    let knowledge_skills_list = document.createElement('ul')
    let magic_skills_list = document.createElement('ul')
    let physical_skills_list = document.createElement('ul')
    
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

    social_skills_block.appendChild(social_skills_list)
    tech_skills_block.appendChild(tech_skills_list)
    combat_skills_block.appendChild(combat_skills_list)
    knowledge_skills_block.appendChild(knowledge_skills_list)
    magic_skills_block.appendChild(magic_skills_list)
    physical_skills_block.appendChild(physical_skills_list)
}
// end renderer extraction

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

renderSkills();

setInterval(tickMinute, 1000);
setInterval(tickHour, 60000);
