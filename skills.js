const skill_catagories = [
    'misc', 'combat', 'physical',
    'work', 'mental', 'magical',
    'social', 'tech', 'knowledge',
]
class skill {
    constructor({
	name,
	desciption,
	level_max,
	xp_cost_base,
	xp_cost_scaler,
	catagory = 'misc',
	primary_stat,
	is_visible = false,
	is_unlocked = true,
    }){
	this.name = name;
	this.description = description;
	this.level_max,
	this.level_current = 0;
	this.xp_cost_base = xp_cost_base;
	this.xp_cost_next_level = 10;
	this.xp_cost_scaler = xp_cost_scaler;
	this.primary_stat = primary_stat;
	this.is_visible = is_visible;
	this.is_unlocked = is_unlocked;
	this.xp_current = 0;
	this.is_visible_threshhold = 10;
    }

    increase_xp(xp_delta = 0) {
	if(xp_delta == 0 || !this.is_unlocked){
	    return {};
	}

	if(this.current_level < this.max_level){
	    this.xp_current = this.xp_current + xp_delta;
	    let level_delta = 0;
	    while (xp_current >= xp_cost_next_level) {
		level_delta++;
		xp_cost_next_level = ((100*current_level)*xp_scaler)/level_max;
	    }
	    if(level_delta == 0){
		return {};
	    } else {
		this.level_current = this.level_current + level_delta
	    }
	} else {
	    console.log("Max level reached");
	    return {};
	}
    }
}
