let modInfo = {
	name: "Abstract Tree",
	id: "ATJTAT",
	author: "JToH_SC, inspired by The Tree of Life (by pg132), The Prestreestuck (by ducdat0507), and Incremental God Tree (by Icecreamdude).",
	pointsName: "points",
	modFiles: ["EC1.js", "tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (0), // Used for hard resets and new players
	offlineLimit: 0,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.23",
	name: "Early Early-Mid Chapter 1: Part 3",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>v0.23</h3><br>
		- Fixed descriptions.<br>
		- Added another Power Buyable.<br>
	<h3>v0.22</h3><br>
		- Added lore.<br>
		- Added another Power Buyable.<br>
		- Designed Practices' node.<br>
		- Added 7 Practice upgrades.<br>
		- Added a new mechanic to Practice.<br>
		- Added a layer effect to Practice and Wisdom, then nerfed Practices' effect.<br>
		- Added 9 Wisdom upgrades.<br>
		- Added a new mechanic to Wisdom.<br>
		- Nerfed LOTS of effects to prevent inflation.<br>
		- Added lots of softcaps.<br>
		- ENDGAME: 1e100 points<br>
	<h3>v0.21111</h3><br>
		- Hopefully fixed knowledge gain.<br>
		- ENDGAME: 5e14 points<br>
	<h3>v0.2111</h3><br>
		- Nerfed Intensity 3 and 6.<br>
		- Nerfed Knowledge and Practice boost.<br>
		- Achievements now count, and added 32 new achievements, which cannot be achieved yet.<br>
		- ENDGAME: 5E14 points<br>
	<h3>v0.211</h3><br>
		- Added an achievement layer, with 8 achievements.<br>
		- Added new QoL for Power, Intensity, and Control.<br>
		- Nerfed Control 6.<br>
		- ENDGAME: 4e20 points<br>
	<h3>v0.21</h3><br>
		- Added 3 new layers, "Knowledge", "Practice", and "Wisdom".<br>
		- Added a layer effect to "Knowledge".<br>
		- Added 4 upgrades to Knowledge.<br>
		- Added Power Buyables.<br>
		- Added Intensity Challenges.<br>
		- Added Sub-Control.<br>
		- ENDGAME: 2e37 points<br>
	<h3>v0.1</h3><br>
		- Game is created.<br>
		- Added three layers, "Power", "Intensity", and "Control".<br>
		- Added 7 upgrades to "Power".<br>
		- Added 6 upgrades to "Intensity".<br>
		- Added 6 upgrades to "Control".<br>
		- ENDGAME: 500,000 points`

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
	if (hasUpgrade('pr', 33)) gain = gain.times(upgradeEffect('pr', 33))
	if (hasUpgrade('p', 32)) gain = gain.times(2.75)
	if (hasUpgrade('k', 11)) gain = gain.times(buyableEffect("p", 11))
	if (player.k.unlocked) gain = gain.times(tmp.k.effect)
	if (hasMilestone('k', 1)) gain = gain.times(2)
	if (hasUpgrade('c', 31)) gain = gain.times(upgradeEffect('c', 31))
	if (hasUpgrade('c', 23)) gain = gain.times(upgradeEffect('c', 23))
	if (hasUpgrade('c', 21)) gain = gain.times(upgradeEffect('c', 21))
	if (hasUpgrade('c', 13)) gain = gain.times(2.15)
	if (hasUpgrade('c', 12)) gain = gain.times(2)
	if (hasUpgrade('i', 23)) gain = gain.times(upgradeEffect('i', 23))
	if (hasUpgrade('i', 22)) gain = gain.times(2.5)
	if (hasUpgrade('i', 13)) gain = gain.times(upgradeEffect('i', 13))
	if (hasUpgrade('i', 11)) gain = gain.times(2.25)
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
	"Endgame: 1e100 Points",
	"You are at: Early Chapter 1"
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(new Decimal("1e100"))
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = []

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(_oldVersion){
}