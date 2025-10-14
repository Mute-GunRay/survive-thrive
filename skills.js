/*
  NOTES:
  - Should skills have level caps?(what benefit is there?)
  - Need to figure out EXP Curve. (Simple exponential curve?)
  - skills should be locked and hidden by default.
  - stat requirements should be an object with Stat/Skill:Level format
  - What catagories should exist? (Physical, Magical, Crafting, Observational; but what others?)
  - should I make each catagory its own skill object? (would make organizing easier, and would require less logic to render them)
  - unlocking/showing a skill should be a class method as well as checking if requirements are met. (requirements object should have a way to to flag each specific requirement as being met)
  - effects should be tied directly to an attribute. (atrribute values should be fields in the player class)
 */


const skills = {};

class Skill {
    constructor({
	description,
	catagory = 'misc',
	requirements = {},
	effects = {}
    }){
	this.description = description;
	this.catagory = catagory;
	this.level_current = 0;
	this.xp_cost = 100;
	this.xp_current = 0;
	this.requirements = requirements;
	this.is_visible = false;
	this.is_unlocked = false;
	this.effects = effects;
    }

    increase_xp(xp_delta = 0) {
	if(xp_delta == 0 || !this.is_unlocked){
	    return;
	} else {
	    this.xp_current += xp_delta;
	}
    }
}

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
    catagory: 'mental',
    primary_stat: 'spirit'
})
// Perception
skills["observe"] = new Skill({
    name: "Observation",
    description: "how proficent you are at analyzing your surrounding",
    catagory: 'mental',
    primary_stat: 'Mind'
})
skills["predict"] = new Skill({
    name: "Prediction",
    description: "how proficent you are at anticipating events",
    catagory: 'mental',
    primary_stat: 'spirit'
})
//Agility
skills["dodge"] = new Skill({
    name: "Dodge",
    description: "how proficent you are at avoiding blows",
    catagory: 'combat',
    primary_stat: 'spirit'
})
skills["block"] = new Skill({
    name: "Block",
    description: "how proficent you are at absorbing blows",
    catagory: 'combat',
    primary_stat: 'spirit'
})
// Strength
skills["strike"] = new Skill({
    name: "Strike",
    description: "how hard you hit",
    catagory: 'combat',
    primary_stat: 'spirit'
})
skills["grapple"] = new Skill({
    name: "Grapple",
    description: "how proficent you are at grabbing and holding ",
    catagory: 'combat',
    primary_stat: 'spirit'
})
// Dexterity
skills["sneak"] = new Skill({
    name: "Stealth",
    description: "how proficent you are at moving without being seen",
    catagory: 'physical',
    primary_stat: 'spirit'
})
skills["acrobatics"] = new Skill({
    name: "Acrobatics",
    description: "how proficent you are at moving",
    catagory: 'physical',
    primary_stat: 'spirit'
})
// Constitution
skills["endurance"] = new Skill({
    name: "Endurence",
    description: "how well you use your stamina",
    catagory: 'physical',
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
    description: "how you handle poisons and other maladies",
    catagory: 'physical',
    primary_stat: 'spirit'
})
// Crafting
skills["alchemy"] = new Skill({
    name: "Chemistry",
    description: "how proficent you are at crafting potions, poisons, and elixers",
    catagory: 'Crafting',
    primary_stat: 'spirit'
})
skills["guns"] = new Skill({
    name: "Gun Smithing",
    description: "how proficent you are at making weapons and armor",
    catagory: 'crafting',
    primary_stat: 'spirit'
})
skills["blades"] = new Skill({
    name: "Blade Smithing",
    description: "how proficent you are at making weapons and armor",
    catagory: 'crafting',
    primary_stat: 'spirit'
})
skills["armor"] = new Skill({
    name: "Armor Smithing",
    description: "how proficent you are at making weapons and armor",
    catagory: 'crafting',
    primary_stat: 'spirit'
})
skills["tech"] = new Skill({
    name: "Tech",
    description: "how proficent you are at making gadgets and gizmos",
    catagory: 'crafting',
    primary_stat: 'spirit'
})

