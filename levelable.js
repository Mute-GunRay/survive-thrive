class Levelable{
    constructor(
	name,
	description,
	requirements,
	is_unlocked,
	type = undefined
	
    ){
	this.name = name;
	this.description = description;
	this.xp_current = 0.0;
	this.xp_max = 100;
	this.xp_gain = 0.01;
	this.is_unlocked = is_unlocked;
	this.level = 0;
	this.requirements = requirements;
	this.type = type;
    }

    increase_xp(){
	this.xp_current +=  this.xp_gain;
	if(this.xp_current >= this.xp_max){
	    this.level++;
	    this.xp_current = this.xp_current - this.xp_max;
	}
    }
    increase_xp_gain(delta){
	this.xp_gain += delta;
    }
    alternate_lock(){
	this.is_unlocked = !this.is_unlocked 
    }

    meet_requirement(requirement){
	if(!this.requirements.contains(requirement)){
	    return;
	}
	this.requirements[requirement][met] = !this.requirements[requirement][met];
    }
}

const skills = {};

class Skill extends Levelable {
    constructor(
	name,
	description,
	requirements,
	is_unlocked,
	type,
	parent_skill = undefined,
    ){
	super(
	    name,
	    description,
	    requirements,
	    is_unlocked,
	    type);
	this.parent_skill = parent_skill;
    }
}

//Core Skills
skills["strength"] = new Skill("Strength",
			       "There are few problems that can withstand the application of enough force",
			       {},
			       true,
			       "core");
skills["agility"] = new Skill("Agility",
				   "Speed, balance,  grace",
				   {},
			      true,
			     "core");
skills["constitution"] = new Skill("Constitution",
					"It's not about how hard you can hit",
					{},
				   true,
				  "core");
skills["perception"] = new Skill("Perception",
				      "Look with your special eyes",
				      {},
				 true,
				"core");
skills["dexterity"] = new Skill("Dexterity",
				     "Fine motor skills",
				     {},
				true,
			       "core");
skills["intelligence"] = new Skill("Intelligence",
					"The ability to speak does not make one intelligent",
					{},
				   true,
				  "core");
skills["endurance"] = new Skill("Endurance",
				     "Can you go the distance",
				     {},
				true,
			       "core");
skills["spirit"] = new Skill("Spirit",
				  "The soul is willing",
				  {},
			     true,
			    "core");


skills["strike"] = new Skill("Strike",
				  "It IS about how hard you can hit",
				  {
				      "strength": 2,
				      "endurance": 1
				  },
			     false,
			    "body");
skills["block"] = new Skill("Block",
				 "For those that can't dodge roll",
				 {
				     "strength": 1,
				     "constitution": 2,
				     "perception": 1
				 },
			    false,
			   "body");
skills["dodge"] = new Skill("Dodge",
				 "That looks like its going to hurt",
				 {
				     "endurance": 1,
				     "agility": 2,
				     "perception": 1,
				 },
			    false,
			   "body");
skills["jump"] = new Skill("Jump",
				"How High?",
				{
				    "strength": 2,
				    "agility": 2
				},
			   false,
			  "body");
skills["tumble"] = new Skill("Tumble",
				  "Falling... with style",
				  {
				      "agility": 3,
				      "dexterity": 1,
				  },
			     false,
			    "body");
skills["sprint"] = new Skill("Sprint",
				  "Very dangerous over short distances",
				  {
				      "strength": 3,
				      "endurance": 3,
				      "agility": 3
				  },
			     false,
			    "body");
skills["climb"] = new Skill("Climb",
				 "Parquor?",
				 {
				     "strength": 3,
				     "dexterity": 3,
				 },
			    false,
			   "body");

skills["guns"] = new Skill("Guns",
				  "An armed society is a polite society",
				  {
				      "strength": 2,
				      "dexterity": 4,
				      "perception": 4
				  },
			   false,
			  "weapon_type");
skills["blades"] = new Skill("Blades",
				    "Stick 'em with the pointy end",
				    {
					"strength": 3,
					"agility": 2,
					"endurance": 2,
				    },
			     false,
			    "weapon_type");
skills["bows"] = new Skill("Bows",
				  "How far will it fly",
				  {
				      "strength": 4,
				      "endurance": 4,
				      "perception": 4
				  },
			   false,
			  "weapon_type");
skills["spells"] = new Skill("Spells",
				    "This is why we don't sass",
				    {
					"constitution": 8,
					"endurance": 8,
					"spirit": 8
				    },
			     false,
			    "weapon_type");
skills["hand_guns"] = new Skill("Hand Guns",
				    "Big iron on your hip?",
				    {
					"guns": 3,
					"strength": 2,
					"dexterity": 2,
					"perception": 3
				    },
				false,
			       "gun");
skills["submachine_guns"] = new Skill("Sub-machine Guns",
					  "Rat-a-tat-tat",
					  {
					      "guns": 5,
					      "strength": 3,
					      "dexterity": 4,
					      "perception": 5,
					  },
				      false,
				     "gun");
skills["rifles"] = new Skill("Rifles",
				 "It's for hunting...",
				 {
				     "guns": 5,
				     "strength": 5,
				     "dexterity": 5,
				     "perception": 8
				 },
			     false,
			    "gun");
skills["battle_rifles"] = new Skill("Battle Rifles",
					"...there are many like it but this one is mine",
					{
					    "guns":10,
					    "strength": 8,
					    "dexterity": 5,
					    "perception": 8
					},
				    false,
				   "gun");

skills["knives"] = new Skill("Knives",
				   "The slow blade pierces the shield",
				   {
				       "blades": 2,
				       "strength": 1,
				       "agility": 2,
				   },
			     false,
			    "blade");
skills["short_swords"] = new Skill("Short Swords",
					 "It's about how you use it",
					 {
					     "blades": 3,
					     "strength": 2,
					     "agility": 3,
					 },
				   false,
				  "blade");
skills["straight_swords"] = new Skill("Straight Swords",
					    "Wow much straight, such knight",
					    {
						"blades": 7,
						"strength": 4,
						"agility": 2
					    },
				      false,
				     "blade");
skills["curved_swords"] = new Skill("Curved Swords",
					  "They have curved swords... CURVED SWORDS",
					  {
					      "blades": 8,
					      "strength": 5,
					      "agility": 6,
					  },
				    false,
				   "blade");
skills["great_swords"] = new Skill("Great Swords",
					 "Does it even need an edge at this point",
					 {
					     "blades": 10,
					     "strength": 10,
					     "endurance": 10,
					     "agility": 10,
					 },
				   false,
				  "blade");
skills["light_bows"] = new Skill("Light Bows",
				     "Simple, practical",
				     {
					 "bows": 3,
					 "strength": 3,
					 "dexterity": 3,
					 "endurance": 3
				     },
				 false,
				"bow");
skills["long_bows"] = new Skill("Long Bows",
				    "Let them fight in the shade",
				    {
					"bows": 5,
					"strength": 7,
					"dexterity": 7,
					"endurance": 6
				    },
				false,
			       "bow");
skills["great_bows"] = new Skill("Great Bows",
				     "This takes more strength than I expected",
				     {
					 "bows": 10,
					 "strength": 10,
					 "dexterity": 10,
					 "endurance": 10
				     },
				 false,
				"bow");
skills["crossbows"] = new Skill("Crossbows",
				    "All the style of a gun, without the noise",
				    {
					"bows": 3,
					"strength": 2,
					"dexterity": 5
				    },
				false,
			       "bow");

skills["light_armor"] = new Skill("Light Armor",
					"Who doesn't want to be wrapped in leather straps...",
					{
					    "strength": 4,
					    "endurance": 3,
					    "constitution":3,
					    "agility": 2
					},
				  false,
				 "armor");
skills["medium_armor"] = new Skill("Medium Armor",
					 "Will stop a bullet... it'll still hurt though",

					 {
					     "strength": 8,
					     "endurance": 5,
					     "constitution": 5,
					     "agility": 4
					 },
				   false,
				  "armor");
skills["heavy_armor"] = new Skill("Heavy Armor",
					"Who needs to move anyways",
					{
					    "strength": 10,
					    "endurance": 10,
					    "constitution": 10,
					    "agility": 10,
					},
				  false,
				 "armor");
skills["shields"] = new Skill("Shields",
				    "Shield walls... shield walls everywhere",
				    {
					"strength": 7,
					"endurance": 5,
					"constitution": 4
				    },
			      false,
			     "armor");

const gigs = {};
class Gig extends Levelable {
    constructor(
	name,
	description,
	requirements,
	is_unlocked,
	duration,
	pay,
    ){
	super(name,
	    description,
	    requirements,
	    is_unlocked
	)
	this.duration = duration;
	this.pay = pay;
    }
    increase_pay(delta){
	this.pay += delta;
    }
}

gigs["day_clerk"] = new Gig("Clerk",
			    "Scanning barcodes and and counting change",
			    {},
			    true,
			    6,
			   100)
gigs["courier"] = new Gig("Courier",
			  "Through rain, sleet, hail, or snow",
			  {},
			  true,
			  5,
			  100)
gigs["delivery"] = new Gig("Delivery Driver",
			   "30 minutes or less or it comes out of your pay",
			   {},
			   true,
			   17,
			   100)
gigs["bartender"] = new Gig("Bartender",
			    "One Bourbon, One Scotch, One Beer",
			    {},
			    true,
			    17,
			    100)
gigs["server"] = new Gig("Server",
			 "...with a smile",
			 {},
			 12,
			100)
gigs["cook"] = new Gig("fry cook",
		       "flipping burgers and frying chicken DOES take skill",
		       {},
		       11,
		       100)
gigs["driver"] = new Gig("Ride Share Driver",
			 "Taking people where they want to go",
			 {},
			 6,
			 100)
gigs["muscle"] = new Gig("Muscle",
			 "Follow the client around and look tough",
			 {},
			 3,
			 100)
gigs["bouncer"] = new Gig("Bouncer",
			  "You're not on the list",
			  {},
			  7,
			  100)
gigs["disc_jocky"] = new Gig("DJ",
			     "Pump up the jams",
			     {},
			     5,
			     100)
gigs["cleaner"] = new Gig("Cleaner",
			  "It's best not to think about how that stain got there",
			  {},
			  3,
			  100)
