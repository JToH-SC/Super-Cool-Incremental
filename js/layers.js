addLayer("tfird", {
    name: "The First Difficulty", // This is optional, only used in a few places, If absent it just uses the layer id.
    image: "file:///C:/Users/Jacob%20De%20Leon/Downloads/1a.webp",
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#1f1f1f",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "The First Difficulty points", // Name of prestige currency
    baseResource: "skill", // Name of resource prestige is based on
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
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "t", description: "T - Reset for TFirD Points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
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
        function() { return 'You have ' + format(player.points) + ' skill' },
        { "color": "white", "font-size": "16px", "font-family": "Lucida Console" }],
                "upgrades"
            ],
        },
    },
    upgrades: {
        11: {
            title: "Winning",
            description: "Double skill gain.",
            cost: new Decimal(1)
        },
        12: {
            title: "Winning",
            description: "Triple skill gain.",
            cost: new Decimal(2)
        },
    },
})
addLayer("tlg", {
    name: "The Lower Gap", // This is optional, only used in a few places, If absent it just uses the layer id.
    image: "file:///C:/Users/Jacob%20De%20Leon/Downloads/2a.webp",
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#005c05",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "The Lower Gap points", // Name of prestige currency
    baseResource: "The First Difficulty points", // Name of resource prestige is based on
    baseAmount() {return player.tfird.points}, // Get the current amount of baseResource
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
    branches: ['tfird', 'tlg'],
    hotkeys: [
        {key: "l", description: "L - Reset for The Lower Gap Points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    unlocked() {
        return player.tfird.points.gte(10)
    },
    layerShown(){
        return this.layer.layerShown || player.tfird.points.gte(10)
    },
    tabFormat: {
        "Main": {
            content: [
                "main-display",
                "prestige-button",
                "blank",
                ["display-text",
        function() { return 'You have ' + format(player.points) + ' skill' },
        { "color": "white", "font-size": "16px", "font-family": "Lucida Console" }],
                "upgrades"
            ],
        },
    },
    upgrades: {
        11: {
            title: "Winning",
            description: "Double skill gain.",
            cost: new Decimal(1)
        },
    },
})