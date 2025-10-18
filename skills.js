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
    constructor(
	name = "name",
	description = "this is a description",
	requirements = {},
    ){
	this.name = name;
	this.description = description;
	this.level_current = 0;
	this.xp_max = 100;
	this.xp_current = 0;
	this.requirements = requirements;
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
core_skills["strength"] = new Skill("Strength");
core_skills["agility"] = new Skill("Agility");
core_skills["constitution"] = new Skill("Constitution");
core_skills["perception"] = new Skill("Perception");
core_skills["dexterity"] = new Skill("Dexterity");
core_skills["intelligence"] = new Skill("Intelligence");
core_skills["guns"] = new Skill("Guns");
core_skills["blades"] = new Skill("Blades");
core_skills["armor"] = new Skill("Armor");
core_skills["bow"] = new Skill("Bows");
core_skills["shields"] = new Skill("Shields");
core_skills["crafting"] = new Skill("Crafting");
// Gun Skills
gun_skills["hand_guns"] = new Skill("Hand Guns");
gun_skills["submachine_guns"] = new Skill("Submachine Guns");
gun_skills["rifles"] = new Skill("Rifles");
gun_skills["battle_rifles"] = new Skill("Battle Rifles");
gun_skills["assult_rifles"] = new Skill("Assult Rifles");
gun_skills["sniper_rifles"] = new Skill("Sniper Rifles");
//Blade Skills
blade_skills["knives"] = new Skill("Knives");
blade_skills["short_swords"] = new Skill("Short Swords");
blade_skills["straight_swords"] = new Skill("Straight Swords");
blade_skills["curved_swords"] = new Skill("Curved Swords");
blade_skills["long_swords"] = new Skill("Long Swords");
blade_skills["great_swords"] = new Skill("Great Swords");
//Armor Skills
armor_skills["light_armor"] = new Skill("Light Armor");
armor_skills["medium_armor"] = new Skill("Medium Armor");
armor_skills["heavy_armor"] = new Skill("Heavy Armor");
armor_skills["light_shields"] = new Skill("Light Sheilds");
armor_skills["medium_shields"] = new Skill("Medium Shields");
armor_skills["heavy_shields"] = new Skill("Heavy Shields");
//Body Skills
body_skills["resist"] = new Skill("Resistance");
body_skills["dodge"] = new Skill("Dodge");
body_skills["block"] = new Skill("Block");
body_skills["strike"] = new Skill("Strike");
body_skills["grapple"] = new Skill("Grapple");
body_skills["sneak"] = new Skill("Sneak");
body_skills["acrobatics"] = new Skill("Acrobatics");
body_skills["endurance"] = new Skill("Endurance");
//Mind Skills
mind_skills["learning"] = new Skill("Learning");
mind_skills["prediction"] = new Skill("Prediction");
mind_skills["memory"] = new Skill("Memory");
mind_skills["comprehension"] = new Skill("Comprehension");
//Spell Skills 
spell_skills["spell_casting"] = new Skill("Casting");
spell_skills["mana_control"] = new Skill("Mana Control");
spell_skills["summoning"] = new Skill("Summoning");
spell_skills["elemental_spells"] = new Skill("Elemenal");
spell_skills["healing_spells"] = new Skill("Healing");
//Bow Skills
bow_skills["short_bows"] = new Skill("Short Bows");
bow_skills["long_bows"] = new Skill("Long Bows");
bow_skills["heavy_bows"] = new Skill("Heavy Bows");
bow_skills["light_crossbows"] = new Skill("Light Crossbows");
bow_skills["medium_crossbows"] = new Skill("Medium Crossbows");
bow_skills["heavy_crossbows"] = new Skill("Heavy Crossbows");
// Crafting
crafting_skills["chemisty"] = new Skill("Chemistry");
crafting_skills["electronics"] = new Skill("Electronics");
crafting_skills["gunsmithing"] = new Skill("Gunsmithing");
crafting_skills["bladesmithing"] = new Skill("Bladesmithing");
crafting_skills["armorsmithing"] = new Skill("ArmorSmithing");
crafting_skills["bow_making"] = new Skill("Bow Crafting");
crafting_skills["spell_crafting"] = new Skill("Spell Crafting");
crafting_skills["enchanting"] = new Skill("Enchanting");

