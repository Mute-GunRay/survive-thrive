/*
  - equipment and consumables should be seperate collections
  - equipment and consumables should be classes that inherit the Item master class
 */

const equipment = {}
const consumables = {}

class Item {
    constructor({
	item_cost = 1,
	item_descriptor,
    }){
	this.cost = item_cost;
	this.descriptor = item_descriptor;
	this.quantity = 0;
	this.effect = {};
	
    }
}

