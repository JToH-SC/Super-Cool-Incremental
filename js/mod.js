let modInfo = {
	name: "Abstract Tree",
	id: "ATJTAT",
	author: "JToH_SC, inspired by The Tree of Life (by pg132), The Prestreestuck (by ducdat0507), and Incremental God Tree (by Icecreamdude).",
	pointsName: "points",
	modFiles: ["layers.js", "tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (0), // Used for hard resets and new players
	offlineLimit: 0,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.211",
	name: "Early Early Chapter QoL 1",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>v0.211</h3><br>
		- Added an achievement layer, with 8 achievements.<br>
		- Added new QoL for Power, Intensity, and Control.<br>
		- Nerfed Control 23.<br>
	<h3>v0.21</h3><br>
		- Added 3 new layers, "Knowledge", "Practice", and "Wisdom".<br>
		- Added a layer effect to "Knowledge".<br>
		- Added 4 upgrades to Knowledge.<br>
		- Added Power Buyables.<br>
		- Added Intensity Challenges.<br>
		- Added Sub-Control.<br>
	<h3>v0.1</h3><br>
		- Game is created.<br>
		- Added three layers, "Power", "Intensity", and "Control".<br>
		- Added 7 upgrades to "Power".<br>
		- Added 6 upgrades to "Intensity".<br>
		- Added 6 upgrades to "Control".`

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
	if (player.k.unlocked) gain = gain.times(tmp.k.effect)
	if (hasMilestone('k', 1)) gain = gain.times(2)
	if (hasUpgrade('c', 23)) gain = gain.times(upgradeEffect('c', 23))
	if (hasUpgrade('c', 21)) gain = gain.times(upgradeEffect('c', 21))
	if (hasUpgrade('c', 13)) gain = gain.times(2.15)
	if (hasUpgrade('c', 12)) gain = gain.times(2)
	if (hasUpgrade('i', 23)) gain = gain.times(upgradeEffect('i', 23))
	if (hasUpgrade('i', 22)) gain = gain.times(2.5)
	if (hasUpgrade('i', 13)) gain = gain.times(upgradeEffect('i', 13))
	if (hasUpgrade('i', 11)) gain = gain.times(2.25)
	if (hasUpgrade('k', 11)) gain = gain.times(buyableEffect("p", 11))
	if (hasUpgrade('p', 23)) gain = gain.times(1.35)
	if (hasUpgrade('p', 22)) gain = gain.times(2.25)
	if (hasUpgrade('p', 13)) gain = gain.times(1.75)
	if (hasUpgrade('p', 11)) gain = gain.times(1.5)
	if (inChallenge('i', 11)) gain = gain.divide(3)
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
	"Endgame: 4e20 Points",
	"You are at: Early Chapter 1"
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