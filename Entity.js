class Entity {
    constructor(
	skills,
	consumables,
	equipment,
	spells,
	attributes,
	essence){
	this.skills = skills;
	this.consumables = consumables;
	this.equipment = equipment;
	this.spells = spells;
	this.attributes = attributes;
	this.essence = essence;
	this.hp_max = 100;
	this.hp_current = 100;
	this.sp_max = 100;
	this.sp_current = 100;
	this.mp_max = 100;
	this.mp_current = 100;
    }
}

class Player extends Entity{
    constructor	(skills,
		 consumables,
		 equipment,
		 spells,
		 attributes,
		 essence,
		 furniture,
		 gear,
		 gigs
	       ){
	super(skills,
	      consumables,
	      equipment,
	      spells,
	      attributes,
	      essence)
	this.expenses = 0;
	this.funriture = furniture;
	this.gear = gear;
	this.gigs = gigs;
    }
}

class Monster extends Entity{
    constructor(title,
		skills,
		consumables,
		equipment,
		spells,
		attributes,
		essence,
		prefix,
		suffix,
	       ){
	super(skills,
	      consumables,
	      equipment,
	      spells,
	      attributes,
	      essence)
	this.title = title;
	this.prefix = prefix;
	this.suffix = suffix;
    }
}

class Merchant extends Entity{}
class Mercenary extends Entity{}
