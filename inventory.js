
class Item {
    constructor({
	item_name = 'item',
	item_cost = 0,
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

function generate_all_equipment() {
    let equipables = {}

    equipables["pistol"] = new Item(
	"hand gun",
	300,
	"A small caliber hand gun",
	"weapon",
	0.5,
	true,
	true,
	"equipment",
    )

    equipables["battle rifle"] = new Item(
	"semi-automatic rifle",
	300,
	"A medium caliber semi-automatic rifle",
	"weapon",
	0.5,
	false,
	true,
	"equipment",
    )

    equipables["machine gun"] = new Item(
	"machine gun",
	300,
	"A large caliber fully-automatic rifle",
	"weapon",
	0.5,
	false,
	true,
	"equipment",
    )
    
    equipables["combat knife"] = new Item(
	"combat knife",
	200,
	"A knife designed for combat",
	"weapon",
	0.25,
	true,
	true,
	"equipment",
    )

    equipables["straight short-sword"] = new Item(
	"short straight sword",
	500,
	"a one handed straight sword",
	"weapon",
	0.5,
	false,
	true,
	"equipment",
    )

    equipables["straight long-sword"] = new Item(
	"long sword",
	800,
	"A two handed straight sword",
	"weapon",
	0.5,
	false,
	true,
	"equipment",
    )

    equipables["straight great-sword"] = new Item(
	"straight great-sword",
	300,
	"A massive straight sword",
	"weapon",
	0.5,
	false,
	true,
	"equipment",
    )

    equipables["curved short-sword"] = new Item(
	"curved short-sword",
	300,
	"A one handed curved sword",
	"weapon",
	0.5,
	false,
	true,
	"equipment",
    )

    equipables["curved long-sword"] = new Item(
	"curved long-sword",
	300,
	"A two handed curved sword",
	"weapon",
	0.5,
	false,
	true,
	"equipment",
    )

    equipables["curved great-sword"] = new Item(
	"curved great-sword",
	300,
	"A massive curved sword",
	"weapon",
	0.5,
	false,
	true,
	"equipment",
    )

    equipables[" basic helmet"] = new Item(
	"basic helmet",
	300,
	"A medieval style combat helmet",
	"armor",
	0.5,
	false,
	true,
	"equipment",
    )

    equipables["breast plate"] = new Item(
	"breast plate",
	300,
	"A medieval style chest armor",
	"armor",
	0.5,
	false,
	true,
	"equipment",
    )

    equipables["ballistic helmet"] = new Item(
	"ballistic helmet",
	300,
	"A modern style combat helmet",
	"armor",
	0.5,
	false,
	true,
	"equipment",
    )

    equipables["ballistic plate"] = new Item(
	"ballistic plate",
	300,
	"A modern style chest armor",
	"armor",
	0.5,
	false,
	true,
	"equipment",
    )

    return equipables;
}
function generate_all_consumables() {
    let consumables = {}

    consumables["snack food"] = new Item(
	"snack food",
	5,
	"food for when your not all that hungry",
	"food",
	0.01,
	true,
	false,
	"consumable"
    )

    consumables["bread"] = new Item(
	"bread",
	10,
	"a full loaf of fresh bread",
	"food",
	0.01,
	true,
	false,
	"consumable"
    )

    consumables["instant meal"] = new Item(
	"instant meal",
	10,
	"a full meal for when your in a hurry",
	"food",
	0.01,
	true,
	false,
	"consumable"
    )

    consumables["cooked meal"] = new Item(
	"cooked meal",
	10,
	"a nice wholesome meal",
	"food",
	0.01,
	true,
	false,
	"consumable"
    )

    consumables["banages"] = new Item(
	"bandages",
	10,
	"a simple roll of medical bandages for treating superficial injuries",
	"medicine",
	0.01,
	true,
	false,
	"consumable"
    )

    consumables["pain killers"] = new Item(
	"pain killers",
	10,
	"a box of pills for easing pain from superficial of minor injuries",
	"medicine",
	0.01,
	true,
	false,
	"consumable"
    )

    consumables["first aid kit"] = new Item(
	"first aid kit",
	10,
	"a full kit for treating minor injuries",
	"medicine",
	0.01,
	false,
	false,
	"consumable"
    )

    consumables["minor potion"] = new Item(
	"minor potion",
	10,
	"a potion for instantly healing superficial wounds",
	"medicine",
	0.01,
	false,
	false,
	"consumable"
    )

    consumables["basic potion"] = new Item(
	"basic potion",
	10,
	"a potion for instantly healing minor wounds",
	"medicine",
	0.01,
	true,
	false,
	"consumable"
    )

    consumables["major potion"] = new Item(
	"major potion",
	10,
	"a potion for iinstatly healing major wounds",
	"medicine",
	0.01,
	true,
	false,
	"consumable"
    )
    
    return consumables;
}
function generate_all_tools(){
    let tools = {};

    tools["mobile phone"] = new Item(
	"mobile phone",
	100,
	"a basic phone to bring with you",
	"digital",
	0,
	true,
	false,
	"tools"
    )

    tools["smart phone"] = new Item(
	"smart phone",
	500,
	"a computer in your pocket, it even makes calls",
	"digital",
	0,
	true,
	false,
	"tools"
    )

    tools["basic tablet"] = new Item(
	"basic tablet",
	100,
	"a simple tablet for reading ebooks and take notes",
	"digital",
	0,
	true,
	false,
	"tools"
    )

    tools["deluxe tablet"] = new Item(
	"delux tablet",
	800,
	"a smart phone, but bigger",
	"digital",
	0,
	false,
	false,
	"tools"
    )

    tools["budget desktop computer"] = new Item(
	"desktop computer",
	100,
	"a basic at home computer",
	"digital",
	0,
	true,
	false,
	"tools"
    )

    tools["deluxe desktop computer"] = new Item(
	"deluxe desktop computer",
	100,
	"a powerful home computer, now with more ram",
	"digital",
	0,
	false,
	false,
	"tools"
    )

    tools["budget laptop"] = new Item(
	"budget laptop",
	100,
	"a basic computer that you can take with you",
	"digital",
	0,
	true,
	false,
	"tools"
    )

    tools["deluxe laptop"] = new Item(
	"deluxe laptop",
	100,
	"a powerful computer for computing on the go",
	"digital",
	0,
	true,
	false,
	"tools"
    )

    tools["weight lifting set"] = new Item(
	"weight lifting set",
	100,
	"a set of basic set of weights for exercising",
	"exercise",
	0.1,
	true,
	false,
	"tools"
    )

    tools["yoga mat"] = new Item(
	"yoga mat",
	100,
	"a mat for doing yoga",
	"exercise",
	0.1,
	true,
	false,
	"tools"
    )

    tools["treadmill"] = new Item(
	"treadmill",
	100,
	"a machine for running in place",
	"exercise",
	0.1,
	false,
	false,
	"tools"
    )

    tools["grammer books"] = new Item(
	"grammer books",
	100,
	"a collection of books for studying language",
	"learning",
	0.1,
	true,
	false,
	"tools"
    )

    tools["philosophy books"] = new Item(
	"philosophy books",
	100,
	"a collection of books for studying philosophy",
	"learning",
	0.1,
	true,
	false,
	"tools"
    )

    tools["computer books"] = new Item(
	"computer books",
	100,
	"a collection of books for studying computer science",
	"learning",
	0.1,
	true,
	false,
	"tools"
    )

    tools["math books"] = new Item(
	"math books",
	100,
	"a collection of books for studying math",
	"learning",
	0.1,
	true,
	false,
	"tools"
    )

    tools["enginnering books"] = new Item(
	"enginnering books",
	100,
	"a collection of books for studying enginnering",
	"learning",
	0.1,
	true,
	false,
	"tools"
    )

    return tools;
}

export { Inventory, generate_all_consumables,
	 generate_all_equipment, generate_all_tools };
