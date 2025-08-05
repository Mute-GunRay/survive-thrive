class Player {
    constructor({
	player_name = "Player",
	title = "nobody",
	skills = new Skills({}),
	inventory = new Inventory({}),
    }){
	this.player_name = player_name;
	this.title = title;
	this.skills = skills;
	this.inventory = [];
	this.health_max = 100;
	this.health_current = 100;
	this.energy_max = 100;
	this.energy_current = 100;
	this.strength = 1;
	this.agility = 1;
	this.intelligence = 1;
	this.constitution = 1;
	this.observation = 1;
    }

    resource_update(resource_delta = 0, resource = null){
	if(resource_delta == 0 || resource == null){
	    console.error("Invalid values");
	    return {};
	}

	switch(resource){
	case "energy":
	    this.energy[0] = (this.energy[0]+resource_delta).toFixed(2);
	default:
	    this.health[0] = (this.health[0]+resource_delta).toFixed(2);
	}	
    }
    stat_xp_update(stat_delta = 0, stat = null){
	if (stat_delta == 0 || stat == null){
	    console.error("Invalid values");
	    return {};
	}


	switch(stat){
	case "mind":
	    this.mind[1] = (this.mind[1]+stat_delta).toFixed(2);
	    while(this.mind[1] > this.mind[2]){
		this.mind[2] = (this.mind[0]+100)*this.mind[3].toFixed(2);
		this.mind[0]++
	    }
	case "spirit":
	    this.spirit[1] = (this.spirit[1]+stat_delta).toFixed(2);
	    while(this.spirit[1] > this.spirit[2]){
		this.spirit[2] = (this.spirit[0]+100)*this.spirit[3].toFixed(2);
		this.spirit[0]++
	    }
	default:
	    this.body[1] = (this.body[1]+stat_delta).toFixed(2);
	    while(this.body[1] > this.body[2]){
		this.body[2] = (this.body[0]+100)*this.body[3].toFixed(2);
		this.body[0]++
	    }
	}
    }
}
