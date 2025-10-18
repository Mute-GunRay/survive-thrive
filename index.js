/*
  Extract all DOM manipulation out into its on file.
  This file should only be used for invoking functionality defined in other files.
 */

let current_minute = 0;
let current_hour = 0;
let current_day = 1;
let current_month = 1;
let current_year = 1;

/*
  document.getElementById("player_title").textContent = player.title;
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
*/

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

function render_skills(catagory, skill_collection){
    if(!skill_collection || !catagory){
	console.log("error encountered: missing params")
	return;
    };
    let skill_container = document.getElementById(catagory);
    let skill_keys = Object.keys(skill_collection);
    skill_keys.forEach(skill_name => {
	let skill = skill_collection[skill_name];
	let skill_block = document.createElement("div");
	let skill_name_span = document.createElement("span");
	let skill_level_span = document.createElement("span");
	let skill_level_progress = document.createElement("progress");

	skill_block.className = "skill_block";
	skill_block.id = skill_name + "_skill";
	
	skill_name_span.textContent = skill.name;
	skill_name_span.className = "skill_name";
	
	skill_level_span.textContent = skill.level_current;
	skill_level_span.className = "skill_level";
	skill_level_span.id = skill_name + "_level";
	
	skill_level_progress.value = skill.xp_current;
	skill_level_progress.max = skill.xp_max;
	skill_level_progress.className = "skill_progress";
	skill_level_progress.id = skill_name + "_progress"
	
	skill_block.appendChild(skill_name_span);
	skill_block.appendChild(skill_level_span);
	skill_block.appendChild(skill_level_progress);

	skill_container.appendChild(skill_block);
    })
}

render_skills("core", core_skills);
render_skills("body", body_skills);
render_skills("mind", mind_skills);
render_skills("guns", gun_skills);
render_skills("blades", blade_skills);
render_skills("bows", bow_skills);
render_skills("spells", spell_skills);
render_skills("crafts", crafting_skills);
render_skills("armor", armor_skills);
