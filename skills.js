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

// these are social skills
skills["charm"] = new Skill({
    name: 'Charm',
    description: "Make people like you",
    catagory: 'Social',
    primary_stat: 'spirit',
})
skills["intimidate"] = new Skill({
    name: "Intimidate",
    description: "Make people afraid of you",
    catagory: 'Social',
    primary_stat: 'spirit',
})
skills["calm"] = new Skill({
    name: "Calm",
    description: "deescalate a situation",
    catagory: 'Social',
    primary_stat: 'spirit'
})
skills["haggle"] = new Skill({
    name: 'Haggle',
    description: 'bargin hunting',
    catagory: 'Social',
    primary_stat: 'spirit'
})
skills["communicate"] = new Skill({
    name: 'Communicate',
    description: 'effectively talk to others',
    catagory: 'Social',
    primary_stat: 'spirit'
})
skills['lead'] = new Skill({
    name: "Leadership",
    description: "Make people follow you",
    catagory: 'Social',
    primary_stat: 'spirit',
})
skills["empathy"] = new Skill({
    name: "Empathy",
    description: "connect with people emotionally",
    catagory: "Social",
    primary_stat: 'spirit'
})
skills["Listen"] = new Skill({
    name: 'Listen',
    description: "actively pay attention to others",
    catagory: 'Social',
    primary_stat: 'spirit'
})
// these are tech skills
skills["coding"] = new Skill({
    name: 'Programming',
    description: "Write computer programs",
    catagory: 'Tech',
    primary_stat: 'mind'
})
skills["networks"] = new Skill({
    name: "Network Architecture",
    description: "Understand and manipulate digital networks",
    catagory: 'Tech',
    primary_stat: "mind"
})
skills["data mining"] = new Skill({
    name: 'Data mining',
    description: "extract data from digital sources",
    catagory: 'Tech',
    primary_stat: "mind"
})
skills["ciruitry"] = new Skill({
    name: 'Circuitry',
    description: 'Design, build, and fix electronics',
    catagory: 'Tech',
    primary_stat: 'mind'
})
// these are weapon skills
skills["unarmed"] = new Skill({
    name: "Unarmed",
    description: "Fighting with your body",
    catagory: 'Combat',
    primary_stat: 'body'
})
skills["small guns"] = new Skill({
    name: "Small Caliber",
    description: "handle small guns",
    catagory: 'Combat',
    primary_stat: 'body'
})
skills["medium guns"] = new Skill({
    name: "Medium Caliber",
    description: "handle medium guns",
    catagory: 'Combat',
    primary_stat: 'body'
})
skills["large guns"] = new Skill({
    name: "Large Caliber",
    description: "handle large guns",
    catagory: 'Combat',
    primary_stat: 'body'
})
skills["small blades"] = new Skill({
    name: "Small Blades",
    description: "handle small single handed blades",
    catagory: 'Combat',
    primary_stat: 'body'
})
skills["medium blades"] = new Skill({
    name: "Medium Blades",
    description: "handle large single handed blades",
    catagory: 'Combat',
    primary_stat: 'body'
})
skills["large blades"] = new Skill({
    name: "Large Blades",
    description: "handle two handed blades",
    catagory: 'Combat',
    primary_stat: 'body'
})
skills["small shields"] = new Skill({
    name: "Small Shields",
    description: "handle small shields",
    catagory: 'Combat',
    primary_stat: 'body'
})
skills["medium shields"] = new Skill({
    name: "Medium Shields",
    description: "Handle medium shields",
    catagory: 'Combat',
    primary_stat: 'body'
})
skills["large shields"] = new Skill({
    name: "Large Shields",
    description: "handle large shields",
    catagory: 'Combat',
    primary_stat: 'body'
})
skills["small bows"] = new Skill({
    name: "Light Bows",
    description: "handle small bows and crossbows",
    catagory: 'Combat',
    primary_stat: 'body'
})
skills["heavy bows"] = new Skill({
    name: "heavy bows",
    description: "handle heavy bows and crossbows",
    catagory: 'Combat',
    primary_stat: 'body'
})
// these are general knowledge skills
skills["reading"] = new Skill({
    name: "Reading",
    description: "how proficent you are at reading",
    catagory: 'Knowledge',
    primary_stat: 'Mind'
})
skills["writing"] = new Skill({
    name: "Writing",
    description: "how proficent you are at writing",
    catagory: 'Knowledge',
    primary_stat: 'Mind'
})
skills["comprehension"] = new Skill({
    name: "Comprehension",
    description: "how proficent you are at understanding",
    catagory: 'Knowledge',
    primary_stat: 'Mind'
})
skills["recall"] = new Skill({
    name: "Recall",
    description: "how proficent you are at remembering details",
    catagory: 'Knowledge',
    primary_stat: 'Mind'
})
skills["memory"] = new Skill({
    name: "Memory",
    description: "how proficent you are at retaining information",
    catagory: 'Knowledge',
    primary_stat: 'Mind'
})
skills["observe"] = new Skill({
    name: "Observation",
    description: "how proficent you are at analyzing your surrounding",
    catagory: 'Knowledge',
    primary_stat: 'Mind'
})
skills["logic"] = new Skill({
    name: "Reasoning",
    description: "how proficent you are at thinking through something logically",
    catagory: 'Knowledge',
    primary_stat: 'Mind'
})
skills["research"] = new Skill({
    name: "Researching",
    description: "how proficent you are at finding information",
    catagory: 'Knowledge',
    primary_stat: 'Mind'
})
skills["casting"] = new Skill({
    name: "Spell Casting",
    description: "how proficent you are at casting spells",
    catagory: 'Magic',
    primary_stat: 'spirit'
})
// these are magic skills
skills["chemistry"] = new Skill({
    name: "Chemistry",
    description: "how proficent you are at understanding, handling, and using chemicals",
    catagory: 'Magic',
    primary_stat: 'spirit'
})
skills["theory"] = new Skill({
    name: 'Magic Theory',
    description: "how proficent you are at understanding magic",
    catagory: 'Magic',
    primary_stat: 'Mind'
})
skills["spell crafting"] = new Skill({
    name: "Spell Crafting",
    description: "how proficent you are at developing or learning spells",
    catagory: 'Magic',
    primary_stat: 'spirit'
})
skills["elemental"] = new Skill({
    name: "Elemental Magic",
    description: "how proficent you are at utilizing maigic based on the base elements",
    catagory: 'Magic',
    primary_stat: 'spirit'
})
skills["psychic"] = new Skill({
    name: "Psychic Magic",
    description: "how proficent you are at utilizing magic of the mind",
    catagory: 'Magic',
    primary_stat: 'spirit'
})
skills["mana"] = new Skill({
    name: "Spirit Control",
    description: "how proficent you are at regulating the energy needed to cast spells",
    catagory: 'Magic',
    primary_stat: 'spirit'
})
// these are physical skills
skills["lifting"] = new Skill({
    name: "Weight Lifting",
    description: "how proficent you are at lifting heavy objects",
    catagory: 'Physical',
    primary_stat: 'body'
})
skills["running"] = new Skill({
    name: "Running",
    description: "how proficent you are at running long distances",
    catagory: 'Physical',
    primary_stat: 'body'
})
skills["flexibility"] = new Skill({
    name: "Flexibility",
    description: "how proficent you are at stretching and twisting your body",
    catagory: 'Physical',
    primary_stat: 'body'
})
skills["balance"] = new Skill({
    name: "Balance",
    description: "how hard is it to knock you off your feet",
    catagory: 'Physical',
    primary_stat: 'body'
})
skills["coordination"] = new Skill({
    name: "Coordination",
    description: "how proficent you are at moving in sync",
    catagory: 'Physical',
    primary_stat: 'body'
})
skills["endurence"] = new Skill({
    name: "Endurence",
    description: "how proficent you are at conserving your energy",
    catagory: 'Physical',
    primary_stat: 'body'
})
skills["evasion"] = new Skill({
    name: "Evasion",
    description: "how proficent you are at avoiding getting hit",
    catagory: 'Physical',
    primary_stat: 'body'
})

export {skills};
