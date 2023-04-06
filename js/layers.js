addLayer("m", {
    name: "multi", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "M", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#ff0000",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "multi", // Name of prestige currency
    baseResource: "cash", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        mult = mult.times(player.u.points.add(1))
        mult = mult.times(player.r.points.add(1))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "m", description: "M: Reset for multi", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    unlocked() {
        return true
    },
    layerShown(){
        return true
    },
    tabFormat: {
        "Main": {
            content: [
                "main-display",
                "prestige-button",
                "blank",
                ["display-text",
        function() { return 'Multi - Points*(Multi+1)' },
        { "color": "white", "font-size": "16px", "font-family": "Lucida Console" }],
            ],
        },
}})
addLayer("r", {
    name: "rebirth", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "R", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#005eff",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "rebirth", // Name of prestige currency
    baseResource: "multi", // Name of resource prestige is based on
    baseAmount() {return player.m.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        mult = mult.times(player.u.points.add(1))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    branches: ['m', 'r'],
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "r", description: "R: Reset for rebirths", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    unlocked() {
        return (player.m.points.gte(10))
    },
    layerShown(){
        return player[this.layer].unlocked || (player.m.points.gte(10))
    },
    tabFormat: {
        "Main": {
            content: [
                "main-display",
                "prestige-button",
                "blank",
                ["display-text",
        function() { return 'Rebirth - Multi*(Rebirth+1)' },
        { "color": "white", "font-size": "16px", "font-family": "Lucida Console" }],
            ],
        },
}})
addLayer("u", {
    name: "ultra rebirth", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "U", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#00ff51",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "ultra rebirth", // Name of prestige currency
    baseResource: "rebirths", // Name of resource prestige is based on
    baseAmount() {return player.r.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    branches: ['r', 'u'],
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "u", description: "U: Reset for ultra rebirths", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    unlocked() {
        return (player.r.points.gte(10))
    },
    layerShown(){
        return player[this.layer].unlocked || (player.r.points.gte(10))
    },
    tabFormat: {
        "Main": {
            content: [
                "main-display",
                "prestige-button",
                "blank",
                ["display-text",
        function() { return 'Ultra Rebirth - Rebirth*(Ultra Rebirth+1) and Multi*(Ultra Rebirth+1)' },
        { "color": "white", "font-size": "16px", "font-family": "Lucida Console" }],
            ],
        },
}})