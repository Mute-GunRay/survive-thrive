const skills = {};

class Skill {
    constructor(
	name = "name",
	description = "this is a description",
	catagory,
	is_unlocked = false,
	xp_gain = 0.1,
	requirements = {},
    ){
	this.name = name;
	this.description = description;
	this.catagory = catagory;
	this.requirements = requirements;
	this.level = 0;
	this.xp_max = 10;
	this.xp_current = 0;
	this.xp_gain = xp_gain;
	this.is_unlocked = this.is_unlocked;
    }
    
    increase_xp() {
	this.xp_current += this.xp_gain;
	if(this.xp_current > this.xp_max){
	    this.xp_current -= this.xp_max;
	    this.level++;
	}
    }
}
//Core Skills
skills["strength"] = new Skill("Strength",
			       "There are few problems that can withstand the application of enough force",
			       "core",
			       true,
			       0.25);
skills["agility"] = new Skill("Agility",
			      "Speed, balance,  grace",
			      "core",
			      true);
skills["constitution"] = new Skill("Constitution",
				   "It's not about how hard you can hit",
				   "core",
				   true,
				  2);
skills["perception"] = new Skill("Perception",
				 "Look with your special eyes",
				 "core",
				 true);
skills["dexterity"] = new Skill("Dexterity",
				"Fine motor skills",
				"core",
				true);
skills["intelligence"] = new Skill("Intelligence",
				   "The ability to speak does not make one intelligent",
				   "core",
				   true,
				  0.7);
skills["endurance"] = new Skill("Endurance",
				"Can you go the distance",
				"core",
				true);
skills["spirit"] = new Skill("Spirit",
			     "The soul is willing",
			     "core",
			     true);

skills["strike"] = new Skill("Strike", "It IS about how hard you can hit", "combat", false, 2.3);
skills["block"] = new Skill("Block", "For those that can't dodge roll", "combat");
skills["dodge"] = new Skill("Dodge", "That looks like its going to hurt", "combat");
skills["mana_control"] = new Skill("Mana Control", "Its a subtle art", "combat");

skills["jump"] = new Skill("Jump", "How High?", "movement");
skills["tumble"] = new Skill("Tumble", "Falling... with style", "movement");
skills["sprint"] = new Skill("Sprint", "Very dangerous over short distances", "movement");
skills["climb"] = new Skill("Climb", "Parquor?", "movement");

skills["guns"] = new Skill("Guns", "An armed society is a polite society", "weapons");
skills["blades"] = new Skill("Blades", "Stick 'em with the pointy end", "weapons");
skills["bows"] = new Skill("Bows", "How far will it fly", "weapons");
skills["spells"] = new Skill("Magic", "This is why we don't sass", "weapons", false, 4);

skills["study"] = new Skill("Study", "So this is what cram school is for", "learning");
skills["comprehension"] = new Skill("Comprehension", "It's key...", "learning");
skills["memory"] = new Skill("Memory", "I can't remember what I forgot", "learning");

skills["hand_guns"] = new Skill("Hand Guns", "Big iron on your hip?", "guns");
skills["submachine_guns"] = new Skill("Sub-machine Guns", "Rat-a-tat-tat", "guns");
skills["rifles"] = new Skill("Rifles", "It's for hunting...", "guns");
skills["battle_rifles"] = new Skill("Battle Rifles", "...there are many like it but this one is mine", "guns");

skills["knives"] = new Skill("Knives", "The slow blade pierces the shield", "blades");
skills["short_swords"] = new Skill("Short Swords", "It's about how you use it", "blades");
skills["straight_swords"] = new Skill("Straight Swords", "Wow much straight, much knight", "blades", false, 1.5);
skills["curved_swords"] = new Skill("Curved Swords", "They have curved swords... CURVED SWORDS", "blades");
skills["great_swords"] = new Skill("Great Swords", "Does it even need an edge at this point", "blades");

skills["light_bows"] = new Skill("Light Bows", "Simple, practical", "bows");
skills["long_bows"] = new Skill("Long Bows", "Let them fight in the shade", "bows");
skills["great_bows"] = new Skill("Great Bows", "This takes more strength than I expected", "bows", false, .11);
skills["crossbows"] = new Skill("Crossbows", "All the style of a gun, without the noise", "bows");

skills["light_armor"] = new Skill("Light Armor", "Who doesn't want to be wrapped in leather straps...", "armor");
skills["medium_armor"] = new Skill("Medium Armor", "Will stop a bullet... it'll still hurt though", "armor");
skills["heavy_armor"] = new Skill("Heavy Armor", "Who needs to move anyways", "armor");
skills["shields"] = new Skill("Shields", "Shield walls... shield walls everywhere", "armor");

