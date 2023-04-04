let modInfo = {
	name: "The Cool Chain",
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
	num: "2.0.1",
	name: "Achieved and Layers",
}

let changelog = `<h1>Changelog:</h1><br>
	<h2>update notation - vA.B.C</h2><br>
	A stands for LARGE updates.<br>
	B stands for content updates.<br>
	C stands for very small updates.<br>
	<h3>v2.0.1</h3><br>
	- Added 2 new achievements.<br>
	<h3>v2.0.0</h3><br>
	- Added a Super milestone.<br>
	- Achievements finally have a working counter.<br>
	- Added 1 more upgrade to Mega.<br>
	- Buffed the Mega milestone effect and nerfed its requirements.<br>
	- Added a new layer, Super+.<br>
	- Added 1 upgrade to Super+.<br>
	<h3>v1.1.0</h3><br>
	- Fixed a Duper upgrade description.<br>
	- Added 1 more upgrade to Mega.<br>
	- ADDED ACHIEVEMENTS!!!<br>
	<h3>v1.0.0</h3><br>
	- Changed the 2 new upgrades in the Super layer.<br>
	- Fixed the Duper milestone glitch.<br>
	- Mega actually shows up now!<br>
	- Nerfed Mega requirements.<br>
	- The Mega upgrade actually works.<br>
	- The Mega milestone actually works.<br>
	<h3>v0.4.0</h3><br>
	- Added a new layer, Mega.<br>
	- Added a new upgrade to Duper.<br>
	- Added 1 upgrade to Mega.<br>
	<h3>v0.3.2</h3><br>
	- Added a new Duper Milestone.<br>
	<h3>v0.3.1</h3><br>
	- Added 1 Super upgrade.<br>
	<h3>v0.3.0</h3><br>
	- Added 1 Duper upgrade.<br>
	- Added 1 Super upgrade.<br>
	<h3>v0.2.1</h3><br>
	- Balanced Super Layer.<br>
	- Nerfed Duper Layer requirements.<br>
	<h3>v0.2.0</h3><br>
	- Added 3 upgrades to Super.<br>
	- Added a new layer, Duper with 1 upgrade.<br>
	<h3>v0.1.0</h3><br>
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

// Calculate points/sec!s
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(1)
	if (hasUpgrade('m', 12)) gain = gain.times(upgradeEffect('m', 12))
	if (hasUpgrade('m', 11)) gain = gain.times(3)
	if (hasUpgrade('d', 11)) gain = gain.times(2)
	if (hasUpgrade('s', 22)) gain = gain.times(upgradeEffect('s', 22))
	if (hasUpgrade('s', 21)) gain = gain.times(upgradeEffect('s', 21))
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