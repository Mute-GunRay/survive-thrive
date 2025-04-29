
let starting_equipment = {}
let starting_consumables = {}
let starting_tools = {}

let all_equipment = {}
let all_consumables = {}
let all_tools = {}

class Item {
    constructor({
	item_name = 'item',
	item_cost = '0',
	item_descriptor = 'an item',
	effect_type = null,
	effect_modifier = null,
	is_unlocked = false,
	is_equipable = false,
    }){
	this.name = item_name;
	this.cost = item_cost;
	this.descriptor = item_descriptor;
	this.effect_type = effect_type;
	this.effect_modifier = effect_modifier;
	this.is_unlocked = is_unlocked;
	this.is_equipable = is_equipable;
	this.is_equiped = false
    }
}

class Inventory{
    constructor({
	starting_equipment,
	starting_consumables,
	starting_tools,
    }) {
	this.equipment = starting_equipment;
	this.consumables = starting_consumables;
	this.tools = starting_tools;
    }

    add_item(item, quantity = 0){}
    adjust_quantity(item_name, quantity = 0){}
}

export { Inventory };
