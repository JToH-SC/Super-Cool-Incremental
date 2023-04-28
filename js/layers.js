addLayer("p", {
    name: "power", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "P", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#C900FF",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "power points", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() {
        let mult = new Decimal(1)
        if (hasUpgrade('c', 13)) mult = mult.times(2.5)
        if (hasUpgrade('c', 11)) mult = mult.times(1.75)
        if (hasUpgrade('i', 21)) mult = mult.times(upgradeEffect('i', 21))
        if (hasUpgrade('i', 12)) mult = mult.times(1.75)
        if (hasUpgrade('p', 23)) mult = mult.times(1.5)
        if (hasUpgrade('p', 21)) mult = mult.times(2)
        if (hasUpgrade('p', 12)) mult = mult.times(1.25)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for power points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    upgrades: {
        11: {
            title: "Power 1",
            description: "1.5x Points.",
            cost: new Decimal(1),
        },
        12: {
            title: "Power 2",
            description: "1.25x Power Points.",
            cost: new Decimal(2),
            unlocked() {
                if (hasUpgrade('p', 11)) return true
            },
        },
        13: {
            title: "Power 3",
            description: "1.75x Points.",
            cost: new Decimal(4),
            unlocked() {
                if (hasUpgrade('p', 12)) return true
            },
        },
        21: {
            title: "Power 4",
            description: "2x Power Points.",
            cost: new Decimal(6),
            unlocked() {
                if (hasUpgrade('p', 13)) return true
            },
        },
        22: {
            title: "Power 5",
            description: "2.25x Points.",
            cost: new Decimal(10),
            unlocked() {
                if (hasUpgrade('p', 21)) return true
            },
        },
        23: {
            title: "Power 6",
            description: "1.5x Power Points.",
            cost: new Decimal(20),
            unlocked() {
                if (hasUpgrade('p', 22)) return true
            },
        },
        31: {
            title: "Power 7",
            description: "Unlock new content.",
            cost: new Decimal(20000),
            unlocked() {
                if ((hasUpgrade('i', 23)) && (hasUpgrade('c', 23)) && (hasUpgrade('p', 23))) return true
            },
        },
        },
    },
)
addLayer("i", {
    name: "intensity", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "I", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        unlockOrder: 0,
    }},
    color: "#38FFB1",
    requires() {
        if (player[this.layer].unlockOrder === 1) return new Decimal(1000)
        else return new Decimal(100)
    }, // Can be a function that takes requirement increases into account
    resource: "intensity points", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    branches: ["p"],
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() {
        let mult = new Decimal(1)
        if (hasUpgrade('p', 31)) mult = mult.times(1.25)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "i", description: "I: Reset for intensity points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown() { return hasUpgrade('p', 23) || player[this.layer].unlocked || player.c.unlocked },
    unlocked() {
        return hasUpgrade('p', 23)
    },
    increaseUnlockOrder: ["c"],
    upgrades: {
        11: {
            title: "Intensity 1",
            description: "2.25x Points.",
            cost: new Decimal(1),
        },
        12: {
            title: "Intensity 2",
            description: "1.75x Power Points.",
            cost: new Decimal(2),
            unlocked() {
                if (hasUpgrade('i', 11)) return true
            },
        },
        13: {
            title: "Intensity 3",
            description: "Intensity Points boosts Points.",
            cost: new Decimal(3),
            effect() {
                return player[this.layer].points.add(1).pow(0.5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"*" }, // Add formatting to the effect
            unlocked() {
                if (hasUpgrade('i', 12)) return true
            },
        },
        21: {
            title: "Intensity 4",
            description: "Power Points boosts Power Points.",
            cost: new Decimal(4),
            effect() {
                return player.p.points.add(1).pow(0.1)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"*" },
            unlocked() {
                if (hasUpgrade('i', 13)) return true
            },
        },
        22: {
            title: "Intensity 5",
            description: "2.5x Points.",
            cost: new Decimal(6),
            unlocked() {
                if (hasUpgrade('i', 21)) return true
            },
        },
        23: {
            title: "Intensity 6",
            description: "Power Points boosts Points.",
            cost: new Decimal(8),
            effect() {
                return player.p.points.add(1).pow(0.2)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"*" },
            unlocked() {
                if (hasUpgrade('i', 22)) return true
            },
        },
        },
    },
)
addLayer("c", {
    name: "control", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "C", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        unlockOrder: 0,
    }},
    color: "#C72B6D",
    requires() {
        if (player[this.layer].unlockOrder === 1) return new Decimal(1000)
        else return new Decimal(100)
    }, // Can be a function that takes requirement increases into account
    resource: "control points", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    branches: ["p"],
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() {
        let mult = new Decimal(1)
        if (hasUpgrade('c', 22)) mult = mult.times(upgradeEffect('c', 22))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "c", description: "C: Reset for control points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown() { return hasUpgrade('p', 23) || player[this.layer].unlocked || player.i.unlocked },
    unlocked() {
        return hasUpgrade('p', 23)
    },
    increaseUnlockOrder: ["i"],
    upgrades: {
        11: {
            title: "Control 1",
            description: "1.75x Power Points.",
            cost: new Decimal(1),
        },
        12: {
            title: "Control 2",
            description: "2x Points.",
            cost: new Decimal(2),
            unlocked() {
                if (hasUpgrade('c', 11)) return true
            },
        },
        13: {
            title: "Control 3",
            description: "1.5x Power Points.",
            cost: new Decimal(3),
            unlocked() {
                if (hasUpgrade('c', 12)) return true
            },
        },
        21: {
            title: "Control 4",
            description: "Points boosts Points.",
            cost: new Decimal(5),
            effect() {
                return player.points.add(1).pow(0.1)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"*" },
            unlocked() {
                if (hasUpgrade('c', 13)) return true
            },
        },
        22: {
            title: "Control 5",
            description: "Power Points boosts Control Points.",
            cost: new Decimal(7),
            effect() {
                return player.p.points.add(1).pow(0.2)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"*" },
            unlocked() {
                if (hasUpgrade('c', 21)) return true
            },
        },
        23: {
            title: "Control 6",
            description: "Control Points boosts Points.",
            cost: new Decimal(12),
            effect() {
                return player.c.points.add(1).pow(0.6)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"*" },
            unlocked() {
                if (hasUpgrade('c', 22)) return true
            },
        },
        },
    },
)
addLayer("k", {
    name: "knowledge", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "K", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        unlockOrder: 0,
    }},
    color: "#B66EFF",
    requires() {
        if (player[this.layer].unlockOrder === 1) return new Decimal(1000)
        else return new Decimal(150000)
    }, // Can be a function that takes requirement increases into account
    resource: "knowledge points", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    branches: ["i", "c"],
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() {
        let mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "k", description: "K: Reset for knowledge points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown() { return hasUpgrade('p', 31) || player[this.layer].unlocked },
    unlocked() {
        return hasUpgrade('p', 31)
    },
    upgrades: {
        11: {
            title: "Knowledge 1",
            description: "adding later",
            cost: new Decimal(1),
        },
        12: {
            title: "Knowledge 2",
            description: "adding later",
            cost: new Decimal(2),
            unlocked() {
                if (hasUpgrade('k', 11)) return true
            },
        },
        },
    },
)