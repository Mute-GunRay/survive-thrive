class Item {
    constructor({
	item_name,
	item_cost = 1,
	item_descriptor,
	effect_modifier = null,
	is_unlocked = false,
	is_equipable = false,
	item_catagory = "consumable"
    }){
	this.item_name = item_name;
	this.cost = item_cost;
	this.descriptor = item_descriptor;
	this.effect_modifier = effect_modifier;
	this.is_unlocked = is_unlocked;
	this.is_equipable = is_equipable;
	this.catagory = item_catagory;
    }

    get item_name(){
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

const items = [
    new Item("snacks"),
    new Item("instant meal"),
    new Item("energy drink"),
    new Item("bottled water"),
    new Item("bandages"),
    new Item("pain killers"),
    new Item("first aid kit"),
    new Item("weak potion"),
    new Item("basic potion"),
    new Item("strong potion"),
    new Item("light ammunition"),
    new Item("medium ammunition"),
    new Item("heavy ammunition"),
    new Item("pistol"),
    new Item("revolver"),
    new Item("shotgun"),
    new Item("hunting rifle"),
    new Item("battle rifle"),
    new Item("assult rifle"),
    new Item("machine gun"),
    new Item("flashlight"),
    new Item("basic laptop"),
    new Item("advanced laptop"),
    new Item("basic computer"),
    new Item("advanced computer"),
    new Item("basic tablet"),
    new Item("advanced tablet"),
    new Item("mobile phone"),
    new Item("smart phone"),
    new Item("basic weight set"),
    new Item("advanced weight set"),
    new Item("professional weight set"),
    new Item("basic running gear"),
    new Item("advanced running gear"),
    new Item("professional running gear"),
    new Item("basic textbooks"),
    new Item("advanced textbooks"),
    new Item("math books"),
    new Item("philosophy books"),
    new Item("computer books"),
    new Item("enginnering books"),
    new Item("grammer books"),
    new Item("combat knife"),
    new Item("straight short-sword"),
    new Item("straight long-sword"),
    new Item("straight great-sword"),
    new Item("curved short-sword"),
    new Item("curved long-sword"),
    new Item("curved great-sword"),
    new Item("basic helmet"),
    new Item("ballistic helmet"),
    new Item("advanced helmet"),
    new Item("metal breastplate"),
    new Item("ballistic breastplate"),
    new Item("advanced breastplate"),
    new Item("running shoes"),
    new Item("work boots"),
    new Item("combat boots"),
    new Item("basic gloves"),
    new Item("padded gloves"),
    new Item("sneakers"),
    new Item("backpack"),
]
