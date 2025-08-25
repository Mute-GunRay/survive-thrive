const activities_gig = {}
const activities_train = {}
const activities_socialize = {}
const activites_learn = {}
const activities_craft = {}
      
class activity {
    constructor({
	task_name ="task",
	description = "a task",
	requirements_stats = {},
	requirements_skills = {},
    }){
	this.task_name = task_name;
	this.description = description;
	this.requirements_stats = requirements_stats;
	this.requirements_skills = requirements_skills;
    }
}

class Gig extends activity {}
class Train extends activity {}
class Socialize extends activity {}
class Learn extends activity {}
class Craft extends activity {}
