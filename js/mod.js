let modInfo = {
	name: "The JJT Tree",
	id: "TheJJJJJTTree",
	author: "jToH_SC",
	pointsName: "skill",
	modFiles: ["layers.js", "tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (0), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "(i wont update this)",
	name: "JJT'ing",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>i wont update this</h3>`

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

	let gain = new Decimal(0)
	if (hasUpgrade('tfird', 11)) gain = gain.add(1)
	if (hasUpgrade('u', 11)) gain = gain.times(5)
	if (hasUpgrade('n', 11)) gain = gain.times(3)
	if (hasUpgrade('tlg', 13)) gain = gain.times(upgradeEffect('tlg', 13))
	if (hasUpgrade('tlg', 11)) gain = gain.times(2)
	if (hasUpgrade('tfird', 23)) gain = gain.times(4)
	if (hasUpgrade('tfird', 22)) gain = gain.times(upgradeEffect("tfird", 22))
	if (hasUpgrade('tfird', 21)) gain = gain.times(upgradeEffect("tfird", 21))
	if (hasUpgrade('tfird', 13)) gain = gain.times(3)
	if (hasUpgrade('tfird', 12)) gain = gain.times(2)
	if (inChallenge('tfird', 11)) gain = gain.pow(1/2)
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