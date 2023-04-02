let modInfo = {
	name: "The Cool Tree",
	id: "TheCoolTree",
	author: "JToH_SC",
	pointsName: "points",
	modFiles: ["layers.js", "tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (10), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.3.1",
	name: "Epic Gaming, perhaps?",
}

let changelog = `<h1>Changelog:</h1><br>
	<h2>update notation - vA.B.C</h2><br>
	A stands for LARGE updates.<br>
	B stands for content updates.<br>
	C stands for very small patches.<br>
	<h3>v0.3.1</h3><br>
	- Added 1 Duper upgrade.<br>
	- Added 1 Super upgrade.<br>
	<h3>v0.2.1</h3><br>
	- Balanced Super Layer.<br>
	- Nerfed Duper Layer requirements.<br>
	<h3>v0.2.0</h3><br>
		- Added 3 upgrades to Super.<br>
		- Added a new layer, Duper with 1 upgrade.<br>
	<h3>v0.2.0</h3><br>
		- 1 layer, Super.`

let winText = `Congratulations! You have reached the end and beaten this game, but for now...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(1)
	if (hasUpgrade('s', 21)) gain = gain.times(upgradeEffect('s', 21))
	if (hasUpgrade('d', 11)) gain = gain.times(2)
	if (hasUpgrade('s', 13)) gain = gain.times(3)
	if (hasUpgrade('s', 11)) gain = gain.times(2)
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(new Decimal("e280000000"))
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(_oldVersion){
}