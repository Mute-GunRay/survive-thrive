//TODO: create derived classes for equipment and consumables

// should weaons have a proficency property?
// should all equipment?
// should expenses actually be broken up into different types?

const consumables = {};
const equipment = {};
const expenses = {};

class Item {
    constructor(
	name,
	value,
	description,
    ){
	this.name = name;
	this.value = value;
	this.quantity = 0;
	this.description = description;
    }
}


class Consumable extends Item{
    constructor(name,
		value,
		description,
		effected_stat,
		duration,
	       strength){
	super(name,
	      value,
	      description);
	this.effected_stat = effected_stat; //How should this be formatted?
	this.duration = duration;
	this.strength = strength;
    }
}

// should weapons, armor, accessories be seperate 
class Equipment extends Item{
    constructor(name,
		value,
		description,
		slot,
		attributes,
	       durability){
	super(name,
	      value,
	      description)
	this.slot = slot;
	this.attributes = attributes; // I should define attributes in the Entity file as a set object with set KVpairs
	this.enchanted = false;
	this.durability = durability;
	this.is_equipped = false;
    }
}
// what kind of consumables should exist?
/*
  potions (weak, normal, strong)
  food (rations, meals, snacks)
  ammo?
  books?
*/
consumables["weak_health_potion"] = new Consumable()
consumables["normal_health_potion"] = new Consumable()
consumables["strong_health_potion"] = new Consumable()
consumables["weak_mana_potion"] = new Consumable()
consumables["normal_mana_potion"] = new Consumable()
consumables["strong_mana_potion"] = new Consumable()
consumables["weak_stamina_potion"] = new Consumable()
consumables["normal_stamina_potion"] = new Consumable()
consumables["strong_stamina_potion"] = new Consumable()
consumables["field_rations"] = new Consumable()
consumables["microwave_meal"] = new Consumable()
consumables["take_out"] = new Consumable()
consumables["chips"] = new Consumable()
consumables["soft_drink"] = new Consumable()
consumables["candy"] = new Consumable()
consumables["small_calibre"] = new Consumable()
consumables["medium_caliber"] = new Consumable()
consumables["large_caliber"] = new Consumable()
consumables["gun_book"] = new Consumable()
consumables["blade_book"] = new Consumable()
consumables["bow_book"] = new Consumable()
consumables["armor_book"] = new Consumable()
consumables["spell_book"] = new Consumable()
consumables["strength_book"] = new Consumable()
consumables["dexterity_book"] = new Consumable()
consumables["perception_book"] = new Consumable()
consumables["agility_book"] = new Consumable()
consumables["constitution_book"] = new Consumable()
consumables["endurance_book"] = new Consumable()

//what kind of equipment should exist?
/*
  helmets
  breastplates/chest armor
  gloves
  shoulder armor
  back accesories
  neck accesories
  rings
  belts
  boots
  leg armor
  weapons
*/
equipment["leather_helmet"] = new Equipment()
equipment["metal_helmet"] = new Equipment()
equipment["balistic_helemt"] = new Equipment()
equipment["leather_vest"] = new Equipment()
equipment["metal_breastplate"] = new Equipment()
equipment["balistic_vest"] = new Equipment()
equipment["leather_pauldron"] = new Equipment()
equipment["metal_pauldron"] = new Equipment()
equipment["balistic_pauldron"] = new Equipment()
equipment["backpack"] = new Equipment()
equipment["cloak"] = new Equipment()
equipment["cape"] = new Equipment()
equipment["shoulder_cape"] = new Equipment()
equipment["strength_amulet"] = new Equipment()
equipment["dexterity_amulet"] = new Equipment()
equipment["agility_amulet"] = new Equipment()
equipment["endurance_amulet"] = new Equipment()
equipment["constitution_amulet"] = new Equipment()
equipment["perception_amulet"] = new Equipment()
equipment["gun_ring"] = new Equipment()
equipment["blade_ring"] = new Equipment()
equipment["bow_ring"] = new Equipment()
equipment["leather_boots"] = new Equipment()
equipment["metal_boots"] = new Equipment()
equipment["running_shoes"] = new Equipment()
equipment["combat_boots"] = new Equipment()
equipment["leather_greaves"] = new Equipment()
equipment["shin_guards"] = new Equipment()
equipment["metal_greaves"] = new Equipment()
equipment["balistic_pants"] = new Equipment()
equipment["knife"] = new Equipment()
equipment["long_sword"] = new Equipment()
equipment["short_sword"] = new Equipment()
equipment["great_sword"] = new Equipment()
equipment["short_bow"] = new Equipment()
equipment["long_bow"] = new Equipment()
equipment["compound_bow"] = new Equipment()
equipment["great_bow"] = new Equipment()
equipment["semi_auto_pistol"] = new Equipment()
equipment["revolver"] = new Equipment()
equipment["shotgun"] = new Equipment()
equipment["rifle"] = new Equipment()
equipment["assualt_rifle"] = new Equipment()


// !!LOW PRIORITY!!
// what kind of expenses should exist
/*
  housing
  furniture
  vehicles
  memberships
  clothes
*/
