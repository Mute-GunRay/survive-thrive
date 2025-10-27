/*
  PROBLEM: Skills should be rendered dynamically as they become unlocked for training.
  PROBLEM: When a skill levels up the system should check the requirements for any locked skills.
  PROBLEM: When a skill levels up attributes should be updated.
  PROBLEM: skills should modify the XP gain of lesser skills.
 */


let current_minute = 0;
let current_hour = 0;
let current_day = 1;

let activities = Array.from("x".repeat(24));
let prefered_training = [];
let prefered_gigs = [];

/*
[...document.getElementsByClassName("button")].forEach((button) => {
    button.addEventListener("click", (event) => {
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
*/
function render_skills(){
    Object.keys(skills).forEach(skill_name => {
	let skill = skills[skill_name];
	let skill_container = document.getElementById(skill.catagory);
	let skill_block = document.createElement("div");
	let skill_name_span = document.createElement("span");
	let skill_level_span = document.createElement("span");
	let skill_level_progress = document.createElement("progress");
	let skill_train_select = document.createElement("input");

	skill_block.className = "skill_block";
	skill_block.id = skill_name + "_skill";
	
	skill_name_span.textContent = skill.name;
	skill_name_span.className = "skill_name";
	
	skill_level_span.textContent = skill.level;
	skill_level_span.className = "skill_level";
	skill_level_span.id = skill_name + "_level";

	skill_train_select.type = "checkbox";
	skill_train_select.className = "skill_train_check";
	skill_train_select.id = skill_name + "_train_check";
	skill_train_select.name = skill_name;
	if(skill.auto_train) {
	    skill_train_select.checked = true;
	};
	skill_train_select.addEventListener("change", event => {
	    if(event.target.checked){
		prefered_training.push(event.target.name)
		for(let i = 0; i < activities.length; i++){
		    if(activities[i] === "x"){
			activities[i] = event.target.name;
			return;
		    }
		}
	    } else {
		let activity_index = prefered_training.indexOf(event.target.name);
		prefered_training.splice(activity_index, 1);
	    }
    })
	
	skill_level_progress.value = skill.xp_current;
	skill_level_progress.max = skill.xp_max;
	skill_level_progress.className = "skill_progress";
	skill_level_progress.id = skill_name + "_progress"
	
	skill_block.appendChild(skill_name_span);
	skill_block.appendChild(skill_level_span);
	skill_block.appendChild(skill_train_select);
	skill_block.appendChild(skill_level_progress);

	skill_container.appendChild(skill_block);
    })
}

function set_daily_activities(){
    activities = Array.from("x".repeat(24));
    set_training_schedule();
    prefered_training.forEach((training, i) => {
	for(let i = 0; i < activities.length; i++){
	    if(activities[i] !== "x"){
		continue;
	    }
	    activities[i] = training;
	    return;
	}
    })
}

function set_training_schedule(){
    prefered_training.forEach((training, i) => {
	if(i + 1 === prefered_training.length){
	    return;
	}
	let skill = skills[training]
	let next_skill = skills[prefered_training[i + 1]];
	if(skill.level > next_skill.level){
	    prefered_training[i] = prefered_training[i + 1];
	    prefered_training[i + 1] = training;
	}

	if(skill.level === next_skill.level){
	    let skill_xp_dif = skill.xp_max - skill.xp_current;
	    let next_skill_xp_dif = next_skill.xp_max - skill.xp_current;
	    if(skill_xp_dif > next_skill_xp_dif){
		prefered_training[i] = prefered_training[i + 1];
		prefered_training[i + 1] = training;
	    } else {
		return;
	    }
	}
    })
}

function tick(){
    if(current_minute === 60){
	current_minute = 0;
	if(current_hour === 23){
	    current_hour = 0;
	    set_daily_activities();
	} else {
	    current_hour++;
	}
	
    } else {
	current_minute++;
    }
    if(skills[activities[current_hour]]){
	skills[activities[current_hour]].increase_xp();
	let skill_xp = document.getElementById(activities[current_hour] + "_progress");
	skill_xp.value = skills[activities[current_hour]].xp_current;
	let level_value = document.getElementById(activities[current_hour] + "_level").textContent;
	if(level_value !== skills[activities[current_hour]].level){
	    level_value.textContent = skills[activities[current_hour]].level
	}
    }
}

render_skills();
setInterval(tick, 1000);
//setInterval(tick_hour, 60000);
