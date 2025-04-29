
const starting_equipment = {};
const starting_consumables = {};
const starting_tools = {};

const all_equipment = generate_all_equipment();
const all_consumables = generate_all_consumables();
const all_tools = generate_all_tools();

class Item {
    constructor({
	item_name = 'item',
	item_cost = '0',
	item_descriptor = 'an item',
	effect_type = null,
	effect_modifier = null,
	is_unlocked = false,
	is_equipable = false,
	item_catagory = "consumables"
    }){
	this.name = item_name;
	this.cost = item_cost;
	this.descriptor = item_descriptor;
	this.effect_type = effect_type;
	this.effect_modifier = effect_modifier;
	this.is_unlocked = is_unlocked;
	this.is_equipable = is_equipable;
	this.is_equiped = false;
	this.is_on_sale = false;
	this.catagory = item_catagory;
    }

    get name(){
	return this.name;
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

    add_item(item, quantity = 0){
	if (quantity > 0){
	    switch(item.catagory){
	    case "equipement":
		let equipment_items = this.equipment.keys();
		if (equipment_items.includes(item.name)){
		    this.equipment[item.name][quantity] = quantity;
		} else {
		    this.equipment[item.name] = {
			item: item,
			quantity: quantity,
		    }
		}
	    case "tool":
		let tool_items = this.tools.keys();
		if (tool_items.includes(item.name)){
		    this.tools[item.name][quantity] = quantity;
		} else {
		    this.tools[item.name] = {
			item: item,
			quantity: quantity,
		    }
		} 
	    case "consumable":
		let consumable_items = this.consumables.keys();
		if (consumable_items.includes(item.name)) {
		    this.tools[item.name][quantity] = quantity;
		} else {
		    this.tools[item.name] = {
			item: item,
			quantity: quantity,
		    }
		}
	    default:
		console.error("Invalid item type");
		return;
	    }
	} else {
	    console.error("Invalid quantity");
	    return;
	}
    }
    update_quantity(item_name, item_catagory, quantity = 0){
	if (quantity > 0) {
	    switch(item_catagory){
	    case "equipment":
		this.equipment[item_name]["quantity"] = quantity;
	    case "consumable":
		this.consumables[item_name]["quantity"] = quantity;
	    case "tool":
		this.tools[item_name]["quantity"] = quantity;
	    default:
		console.error("Invalid item type");
		return;
	    }
	} else {
	    console.error("Invalid quantity");
	    return;
	}
    }
}

function generate_all_equipment() {}
function generate_all_consumables() {}
function generate_all_tools(){}

export { Inventory };
