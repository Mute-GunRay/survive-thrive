//  Get rid of all of this and have resources be calculated on the fly?

class Player {
    constructor(){
	this.title = "nobody";
	this.health_max = 100;
	this.health_current = 100;
	this.stamina_max = 100;
	this.stamina_current = 100;
	this.mana_max = 100;
	this.mana_current = 100;
    }

    resource_update(resource_delta = 0, resource = null){	
    }
}
