
class Item {
    constructor({
	item_name = 'item',
	item_cost = 0,
	item_descriptor = 'an item',
	effect_modifier = null,
	is_unlocked = false,
	is_equipable = false,
	item_catagory = "consumable"
    }){
	this.name = item_name;
	this.cost = item_cost;
	this.descriptor = item_descriptor;
	this.effect_modifier = effect_modifier;
	this.is_unlocked = is_unlocked;
	this.is_equipable = is_equipable;
	this.catagory = item_catagory;
    }

    get name(){
	return this.name;
    }

    get cost(){
	return this.cost;
    }

    get descriptor(){
	return this.descriptor;
    }

    get effect_modifier(){
	return this.effect_modifier;
    }

    get is_unlocked(){
	return this.is_unlocked;
    }

    get is_equipable(){
	return this.is_equipable;
    }
}

const items = {}

export { items };
