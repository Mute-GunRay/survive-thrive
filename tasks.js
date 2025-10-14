/*
  - gigs should be low requirment, low reward activities that can be done without player input beyond flagging them to be done
  - training should also be able to be done passively but should consume stamina/mana based on the activity
  - all other activities should only be done through player interaction
  - all passive activities that do not consume points should have a set start and end time
  - any activites that do consume points should fill any time gaps left by the players psuedo schedule
 */

const gigs = {}
const train = {}
const socialize = {}
const learn = {}
const craft = {}
      
class activity {
    constructor({
	description = "a task",
	requirements = {},
	catagory = "misc"
    }){
	this.task_name = task_name;
	this.description = description;
	this.requirements = requirements;
	this.catagory = catagory;
    }
}

class Gig extends activity {
    
}
class Train extends activity {}
class Socialize extends activity {}
class Learn extends activity {}
class Craft extends activity {}
