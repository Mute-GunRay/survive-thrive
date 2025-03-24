// on load should attempt to read from local storage
// if data is present set "gameData" object(s) to local storage values
// if no data is present, instantiate new data objects and populate local storage with base line data

// "gameData" should consist of a set of JS objects for basic data (i.e. name, population, resources, etc.),
// buildings, military, and administration

// on first load, center container should be populated with only basic buildings: houses farms, mines quarries, lumber camps
// functions should be written that are called whenever certain values increment, to check if thresholds have been reached to unlock
// new buildings or mechanics

// event listener functions should be written to be passed as callbacks when attaching event listeners
// event listener callbacks should also call checker functions after running all other codea
let thriveResourceData;
let thriveBuildingData;

let storedResourceData = localStorage.getItem("thriveResourceData");
if(storedData){
    thriveResourceData = storedData; 
} else {
    thriveResourceData = {
	basics: {
	    name: "",
	    population: 0,
	    mood: 0,
	},
	food: {
	    grain: 0,
	    meat: 0,
	    fish: 0,
	    fruit: 0,
	    vegetables: 0,
	    bread: 0,
	    alcohol: 0
	},
	meals: {
	    simple: 0,
	    fine: 0,
	    lavish: 0,
	},
	logs: {
	    soft: 0,
	    hard: 0
	},
	planks: {
	    soft: 0,
	    hard: 0
	},
	compositeWood: 0,
	stone: {
	    rocks: 0,
	    chuncks: 0,
	    blocks: 0,
	    bricks: 0
	},
	ore: {
	    iron: 0,
	    copper: 0,
	    tin: 0,
	    gold: 0,
	    silver: 0
	},
	ingots: {
	    iron: 0,
	    copper: 0,
	    tin: 0,
	    bronze: 0,
	    gold: 0,
	    silver: 0
	},
	tools: {
	    stone: 0,
	    bronze: 0,
	    iron: 0,
	    steel: 0
	},
	weapons: {
	    swords: 0,
	    spears: 0,
	    maces: 0,
	    bows: 0
	},
	armor: {
	    cloth: 0,
	    leather: 0,
	    bronze: 0,
	    iron: 0,
	    steel: 0
	},
	fuel: {
	    charcoal: 0,
	    coal: 0,
	    coke: 0,
	},
	fabric: {
	    cloth: 0,
	    leather: 0,
	    silk: 0,
	}
    }
    localStorage.setItem("thriveResourceData", JSON.stringify(thriveResourceData));
}

let storedBuildingData = localStorage.getItem("thriveBuildingData");
if(storedBuildingData){
    thriveBuildingData = storedBuildingData;
} else {
    thriveBuildingData = {
	vegetableFarms: {
	    level: 0,
	    workers: 0,
	    levelUpTime: null,
	    levelUpTimer: null,
	},
	fruitFarms: {
	    level: 0,
	    workers: 0,
	    levelUpTime: null,
	},
	clothFarms: {
	    level: 0,
	    workers: 0,
	    levelUpTime: null,
	},
	ironMines: {
	    level: 0,
	    workers: 0,
	    levelUpTime: null,
	},
	copperMines: {
	    level: 0,
	    workers: 0,
	    levelUpTime: null,
	},
	tinMines: {
	    level: 0,
	    workers: 0,
	    levelUpTime: null,
	},
	coalMines: {
	    level: 0,
	    workers: 0,
	    levelUpTime: null,
	},
	goldMines: {
	    level: 0,
	    workers: 0,
	    levelUpTime: null,
	},
	silverMines: {
	    level: 0,
	    workers: 0,
	    levelUpTime: null,
	},
	lumberCamps: {
	    level: 0,
	    workers: 0,
	    levelUpTime: null,
	},
	quarry: {
	    level: 0,
	    workers: 0,
	    levelUpTime: null,
	},
	ironSmelters: {
	    level: 0,
	    workers: 0,
	    levelUpTime: null,
	},
	tinSmelters: {
	    level: 0,
	    workers: 0,
	    levelUpTime: null,
	},
	copperSmetlers: {
	    level: 0,
	    workers: 0,
	    levelUpTime: null,
	},
	goldSmelters: {
	    level: 0,
	    workers: 0,
	    levelUpTime: null,
	},
	silverSmelters: {
	    level: 0,
	    workers: 0,
	    levelUpTime: null,
	},
	bronzeSmelters: {
	    level: 0,
	    workers: 0,
	    levelUpTime: null,
	},
	sawMills: {
	    level: 0,
	    workers: 0,
	    levelUpTime: null,
	},
	Bakeries: {
	    level: 0,
	    workers: 0,
	    levelUpTime: null,
	},
	Stills: {
	    level: 0,
	    workers: 0,
	    levelUpTime: null,
	},
	kitchens: {
	    level: 0,
	    workers: 0,
	    levelUpTime: null,
	},
	carpentryShop: {
	    level: 0,
	    workers: 0,
	    levelUpTime: null,
	},
	masonsShop: {
	    level: 0,
	    workers: 0,
	    levelUpTime: null,
	},
	bowyers:{
	    level: 0,
	    workers: 0,
	    levelUpTime: null,
	},
	weaponSmiths: {
	    level: 0,
	    workers: 0,
	    levelUpTime: null,
	},
	armorSmiths: {
	    level: 0,
	    workers: 0,
	    levelUpTime: null,
	},
    }
    localStorage.setItem("thriveBuildingData", JSON.stringify(thriveBuildingData));
}


