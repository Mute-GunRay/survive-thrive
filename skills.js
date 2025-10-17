const core_skills = {};
const gun_skills = {};
const blade_skills = {};
const body_skills = {};
const mind_skills = {};
const spell_skills = {};
const armor_skills = {};
const crafting_skills = {};
const bow_skills = {};

class Skill {
    constructor({
	description,
	requirements = {},
    }){
	this.description = description;
	this.level_current = 0;
	this.xp_cost = 100;
	this.xp_current = 0;
	this.requirements = requirements;
	this.is_visible = true;
	this.is_unlocked = false;
    }

    increase_xp(xp_delta = 0) {
	if(xp_delta == 0 || !this.is_unlocked){
	    return;
	} else {
	    this.xp_current += xp_delta;
	}
    }
}
//Core Skills
core_skills["strength"]
core_skills["agility"]
core_skills["constitution"]
core_skills["perception"]
core_skills["dexterity"]
core_skills["intelligence"]
core_skills["guns"]
core_skills["blades"]
core_skills["armor"]
core_skills["bow"]
core_skills["shields"]
core_skills["crafting"]
// Gun Skills
gun_skills["hand guns"]
gun_skills["submachine guns"]
gun_skills["rifles"]
gun_skills["battle rifles"] 
gun_skills["assult rifles"]
gun_skills["sniper rifles"]
//Blade Skills
blade_skills["knives"]
blade_skills["short swords"]
blade_skills["straight swords"]
blade_skills["curved swords"]
blade_skills["long swords"]
blade_skills["great swords"]
//Armor Skills
armor_skills["light armor"]
armor_skills["medium armor"]
armor_skills["heavy armor"]
armor_skills["light shields"]
armor_skills["medium shields"]
armor_skills["heavy shields"]
//Body Skills
body_skills["resist"]
body_skills["dodge"]
body_skills["block"]
body_skills["strike"]
body_skills["grapple"]
body_skills["sneak"]
body_skills["acrobatics"]
body_skills["endurance"]
//Mind Skills
mind_skills["learning"]
mind_skills["prediction"]
mind_skills["memory"]
mind_skills["comprehension"]
//Spell Skills
spell_skills["spell casting"]
spell_skills["mana control"]
spell_skills["summoning"]
spell_skills["elemental spells"]
spell_skills["healing spells"]
//Bow Skills
bow_skills["short bows"]
bow_skills["long bows"]
bow_skills["heavy bows"]
bow_skills["light crossbows"]
bow_skills["medium crossbows"]
bow_skills["heavy crossbows"]
// Crafting
crafting_skills["chemisty"]
crafting_skills["electronics"]
crafting_skills["gunsmithing"]
crafting_skills["bladesmithing"]
crafting_skills["armorsmithing"]
crafting_skills["bow making"]
crafting_skills["spell crafting"]
crafting_skills["enchanting"]
