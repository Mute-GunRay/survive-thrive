// Need to add a currency/expenses system
// 
let player;
let current_minute = 0;
let current_hour = 0;
let current_day = 0;
let current_activity;
let prefered_skills = [];
let prefered_gigs = [];

let gig_keys = Object.keys(gigs);
let skill_keys = Object.keys(skills);

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
function render_levelable(levelable_key, levelable_type, levelable){
    let container = document.createElement("div");
    let name_span = document.createElement("span");
    let level_span = document.createElement("span");

    let progress = document.createElement("progress");
    
    container.className = levelable_key + "_container";
    container.id = levelable_key + "_" + levelable_type;
	
    name_span.textContent = levelable.name;
    name_span.className = "levelable_name";
    container.appendChild(name_span);
    
    level_span.textContent = levelable.level;
    level_span.className = levelable_type + "_level";
    level_span.id = levelable_key + "_level";
    container.appendChild(level_span);
    
    progress.value = levelable.xp_current;
    progress.max = levelable.xp_max;
    progress.className = "xp_progress";
    progress.id = levelable_key + "_progress";
    container.appendChild(progress)

    return container;
}

function render_checkbox(checkbox_name, prefered_array){
    let select = document.createElement("input");
    select.type = "checkbox";
    select.className = "workable_check";
    select.id = checkbox_name + "_check";
    select.name = checkbox_name;
    select.addEventListener("change", event => {
	if(event.target.checked){
	    prefered_array.push(event.target.name)
	} else {
	    let index = prefered_array.indexOf(event.target.name);
	    prefered_array.splice(index, 1);
	}
    })

    return select;
}
function render_gigs(){
    gig_keys.forEach(gig_name =>{
	let gig = player.gigs[gig_name];
	let block = render_levelable(gig_name, "gig", gig);
	block.appendChild(render_checkbox(gig_name, prefered_gigs));
	document.getElementById("gigs").appendChild(block);
 })   
}
function render_skills(){
    skill_keys.forEach(skill_name =>{
	if(!player.skills[skill_name].is_unlocked){
	    return;
	}
	let skill = player.skills[skill_name];
	let block = render_levelable(skill_name, "skill ", skill);
	block.appendChild(render_checkbox(skill_name, prefered_skills));
	document.getElementById(skill.type + "_skills").appendChild(block);
    })
    // should also hide any skill catagories without any children
}

//this needs a refactor to simply spit out the proper skill to train instead of sorting the array.
// would that be more efficient?
function sort_trainings(){
    for(let i = 0; i < prefered_training.length; i++){
	let training = prefered_training[i]
	let skill = skills[trainings[training][primary_skill]]
	let next_skill = skill[trainings[prefered_training[i + 1]][primary_skill]];
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
    }
}

function sort_gigs(){
    console.log("gigs before sorting" + prefered_gigs)
    for(let i = 0; i < prefered_gigs.length - 1; i++){
	let prefered_gig = prefered_gigs[i];
	let gig = gigs[prefered_gig];
	let next_gig = gigs[prefered_gigs[i + 1]];
	if(gig.day > next_gig.day){
	    prefered_gigs[i] = prefered_gigs[i + 1];
	    prefered_gigs[i + 1] = prefered_gig;
	}

	if(gig.day === next_gig.day){
	    if(gig.start_time > next_gig.start_time){
		prefered_gigs[i] = prefered_gigs[i + 1];
		prefered_gigs[i + 1] = prefered_gig;
	    } else {
		return;
	    }
	}
    }

    console.log("gigs after sorting" + prefered_gigs)
}

function tick(){
    if(current_minute === 60){
	current_minute = 0;
	if(current_hour === 23){
	    current_hour = 0;
	} else {
	    current_hour++;
	}
	if(gigs_keys.indexOf(current_activity)  && gigs[current_activity][end_time] === current_hour){
	    let gig_index = gigs_keys.indexOf(current_activity);
	    gig_index === prefered_gigs.length - 1 ? gig_index = 0 : gig_index++
	    if(gig[prefered_gigs[gig_index]][start_time] === current_hour){
		current_activity = prefered_gigs[gig_index]
	    } else {
		//sort_training();
		current_activity = prefered_training[0]
	    }
	} else if(training_keys.indexOf(current_activity)){
	    for(let i = 0; i < prefered_gigs.length; i++){
		let gig = gigs[prefered_gigs[i]]
		if(gig[start_time] === current_hour){
		    current_activity = prefered_gigs[i];
		    return;
		}else if(i === prefered_gigs.length - 1){
		    //sort_training();
		    current_activity = prefered_training[0]
		}
	    }
	}
    } else {
	current_minute++;
    }
    //this should tick xp based on the current activity
}

function initialize_player(){
    // create a copy skills, consumables, equipment, attributes, spells, furniture, and gear
    // create a new player instance passing in copies as params
    // save that player to local storage
    player = new Player(structuredClone(skills), //skills
			    {}, //consumables
			    {}, // equipment
			    {}, // spells
			    {}, //attributes
			    0,
			    {}, //furniture
			    {}, //gear
			structuredClone(gigs)); //gigs
    localStorage.setItem("player", JSON.stringify(player));
}

initialize_player()
render_skills()
render_gigs()
//setInterval(tick, 1000);
