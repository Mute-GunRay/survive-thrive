const skills = {};

class Skill {
    constructor({
	name,
	description,
	level_max = 100,
	xp_cost_base = 100,
	xp_cost_scaler = 1.1,
	catagory = 'misc',
	primary_stat,
	is_visible = false,
	is_unlocked = true,
    }){
	this.name = name;
	this.description = description;
	this.catagory = catagory;
	this.level_max = level_max,
	this.level_current = 0;
	this.xp_cost_base = xp_cost_base;
	this.xp_cost_next_level = xp_cost_base;
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

skills['lead'] = new Skill({
    name: "Leadership",
    description: "Make people follow you",
    catagory: 'social',
    primary_stat: 'spirit',
})
// these are weapon skills
skills["unarmed"] = new Skill({
    name: "Unarmed",
    description: "Fighting with your body",
    catagory: 'combat',
    primary_stat: 'body'
})
skills["small guns"] = new Skill({
    name: "Guns",
    description: "handle guns",
    catagory: 'combat',
    primary_stat: 'body'
})
skills["blades"] = new Skill({
    name: "Blades",
    description: "handle blades",
    catagory: 'combat',
    primary_stat: 'body'
})
skills["small shields"] = new Skill({
    name: "Shields",
    description: "handle shields",
    catagory: 'combat',
    primary_stat: 'body'
})
skills["bows"] = new Skill({
    name: "Bows",
    description: "handle bows and crossbows",
    catagory: 'combat',
    primary_stat: 'body'
})
// these are intelligence skills
skills["casting"] = new Skill({
    name: "Casting",
    description: "how proficent you are at using spells",
    catagory: 'magic',
    primary_stat: 'spirit'
})
skills["learning"] = new Skill({
    name: "learning",
    description: "how proficent you are at retaining information",
    catagory: 'magic',
    primary_stat: 'spirit'
})
// Perception
skills["observe"] = new Skill({
    name: "Observation",
    description: "how proficent you are at analyzing your surrounding",
    catagory: 'knowledge',
    primary_stat: 'Mind'
})
skills["predict"] = new Skill({
    name: "Prediction",
    description: "how proficent you are at anticipating events",
    catagory: 'magic',
    primary_stat: 'spirit'
})
//Agility
skills["dodge"] = new Skill({
    name: "Dodge",
    description: "how proficent you are at avoiding blows",
    catagory: 'magic',
    primary_stat: 'spirit'
})
skills["block"] = new Skill({
    name: "Block",
    description: "how proficent you are at absorbing blows",
    catagory: 'magic',
    primary_stat: 'spirit'
})
skills["speed"] = new Skill({
    name: "Speed",
    description: "how quick you are",
    catagory: 'magic',
    primary_stat: 'spirit'
})
// Strength
skills["strike"] = new Skill({
    name: "Strike",
    description: "how hard you hit",
    catagory: 'magic',
    primary_stat: 'spirit'
})
skills["grapple"] = new Skill({
    name: "Grapple",
    description: "how proficent you are at grabbving and holding ",
    catagory: 'magic',
    primary_stat: 'spirit'
})
// Dexterity
skills["sneak"] = new Skill({
    name: "Stealth",
    description: "how proficent you are at sneaking",
    catagory: 'magic',
    primary_stat: 'spirit'
})
skills["acrobatics"] = new Skill({
    name: "Acrobatics",
    description: "how proficent you are at moving",
    catagory: 'magic',
    primary_stat: 'spirit'
})
// Constitution
skills["endurance"] = new Skill({
    name: "Endurence",
    description: "how well you use your stamina",
    catagory: 'magic',
    primary_stat: 'spirit'
})
skills["control"] = new Skill({
    name: "Mana Control",
    description: "how well you use your mana",
    catagory: 'magic',
    primary_stat: 'spirit'
})
skills["resist"] = new Skill({
    name: "Resistance",
    description: "how you handle poisons",
    catagory: 'magic',
    primary_stat: 'spirit'
})
// Crafting
skills["alchemy"] = new Skill({
    name: "Chemistry",
    description: "how proficent you are at crafting potions, poisons, and elixers",
    catagory: 'magic',
    primary_stat: 'spirit'
})
skills["guns"] = new Skill({
    name: "Gun Smithing",
    description: "how proficent you are at making weapons and armor",
    catagory: 'magic',
    primary_stat: 'spirit'
})
skills["blades"] = new Skill({
    name: "Blade Smithing",
    description: "how proficent you are at making weapons and armor",
    catagory: 'magic',
    primary_stat: 'spirit'
})
skills["armor"] = new Skill({
    name: "Armor Smithing",
    description: "how proficent you are at making weapons and armor",
    catagory: 'magic',
    primary_stat: 'spirit'
})
skills["tech"] = new Skill({
    name: "Tech",
    description: "how proficent you are at making gadgets and gizmos",
    catagory: 'magic',
    primary_stat: 'spirit'
})

