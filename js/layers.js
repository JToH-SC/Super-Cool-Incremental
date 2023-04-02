addLayer("s", {
    name: "super", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "S", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#ff0000",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "super points", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('s', 12)) mult = mult.times(2)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){
        return true
    },
    upgrades: {
        11: {
            title: "New Start!",
            description: "Double point gain.",
            cost: new Decimal(1),
            tooltip: "*2 to points"
        },
        12: {
            title: "Super",
            description: "Double super point gain.",
            cost: new Decimal(2),
            tooltip: "*2 to super points",
            unlocked() {if (hasUpgrade("s", 11)) return true}
        },
        13: {
            title: "Triplication",
            description: "Triple point gain.",
            cost: new Decimal(5),
            tooltip: "*3 to points",
            unlocked() {if (hasUpgrade("s", 12)) return true}
        },
        21: {
            title: "Super = Points",
            description: "Super Points boosts Point Gain.",
            cost: new Decimal(10),
            tooltip: "super points+1^0.5*point gain",
            unlocked() {if (hasUpgrade("d", 12)) return true},
            effect() {
                return player[this.layer].points.add(1).pow(0.5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
    },
})
addLayer("d", {
    name: "duper", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "D", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#ff7b00",
    requires: new Decimal(100), // Can be a function that takes requirement increases into account
    resource: "duper points", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)

        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    branches: ["s", "d"],
    hotkeys: [
        {key: "d", description: "D: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    unlocked() {
        if (player.points > 100) return true
    },
    layerShown(){
        return true
    },
    upgrades: {
        11: {
            title: "Other Boost",
            description: "Double point gain.",
            cost: new Decimal(1),
            tooltip: "*2 to points"
        },
        12: {
            title: "Super = Upgrade",
            description: "Unlock 2 new upgrades in the Super Layer.",
            cost: new Decimal(2),
            tooltip: "+2 upgrades in super",
        },
    },
})