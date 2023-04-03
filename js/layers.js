addLayer("ac", {
    name: "achievements", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "AC", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#faff61",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "achievements", // Name of prestige currency
    type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    row: "side", // Row the layer is in on the tree (0 is the first row)
    unlocked() {
        return true
    },
    layerShown(){
        return true
    },
    achievements: {
        11: {
            name: "Beginned",
            tooltip: "Get your first Super Point",
            image: "https://play-lh.googleusercontent.com/ZnBhulPLzAvz5mx7E5RGoue6TVNUEiBMhCCmXYiXIfRjnG4RplBOFKuOOQrcjrS5-cw=w90-h480-rw",
            done() {
                if (player["s"].points >= 1) return true
            }
        },
    },
})
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
        {key: "s", description: "S: Reset for super points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    doReset(resettingLayer) {
        if (layers[resettingLayer].row <= this.row) return;
      
        let keep = [];
        if (hasMilestone("d", 0)) keep.push("upgrades");
        layerDataReset(this.layer, keep);
      },
    unlocked() {
        return true
    },
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
        14: {
            title: "Duper!",
            description: "Unlock a new layer!",
            cost: new Decimal(8),
            tooltip: "unlock a new layer",
            unlocked() {if (hasUpgrade("s", 13)) return true}
        },
        21: {
            title: "Super = Points",
            description: "Super Points boosts Point Gain.",
            cost: new Decimal(10),
            tooltip: "super points+1^0.5*point gain",
            unlocked() {if ((hasUpgrade("d", 12)) && (hasUpgrade("s", 14))) return true},
            effect() {
                return player[this.layer].points.add(1).pow(0.1)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        22: {
            title: "Points = Points",
            description: "Points boosts itself.",
            cost: new Decimal(20),
            tooltip: "points+1^0.15*point gain",
            unlocked() {if ((hasUpgrade("d", 12)) && (hasUpgrade("s", 21))) return true},
            effect() {
                return player.points.add(1).pow(0.15)
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
        if (hasUpgrade("m", 12)) mult = mult.times(2)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    branches: ["s", "d"],
    hotkeys: [
        {key: "d", description: "D: Reset for duper points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    unlocked() {
        if (hasUpgrade("s", 14)) return true
    },
    layerShown() {
        return player[this.layer].unlocked || (hasUpgrade("s", 14))
    },
    doReset(resettingLayer) {
        if (layers[resettingLayer].row <= this.row) return;
      
        let keep = [];
        if (hasMilestone("m", 0)) keep.push("upgrades");
        layerDataReset(this.layer, keep);
      },
    milestones: {
        0: {
            requirementDescription: "5 duper points",
            effectDescription: "Keep super upgrades on reset",
            done() { return player.d.points.gte(5)}
        },
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
            unlocked() {if (hasUpgrade("d", 11)) return true},
            tooltip: "+2 upgrades in super",
        },
        13: {
            title: "Mega!",
            description: "Unlock a new layer.",
            cost: new Decimal(4),
            unlocked() {if (hasUpgrade("d", 12)) return true},
            tooltip: "unlock a new layer",
        },
    },
})
addLayer("m", {
    name: "mega", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "M", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#ffff00",
    requires: new Decimal(1500), // Can be a function that takes requirement increases into account
    resource: "mega points", // Name of prestige currency
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
    row: 2, // Row the layer is in on the tree (0 is the first row)
    branches: ["d", "m"],
    hotkeys: [
        {key: "m", description: "M: Reset for mega points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    unlocked() {
        if (hasUpgrade("d", 21)) return true
    },
    layerShown() {
        return player[this.layer].unlocked || (hasUpgrade("d", 13))
    },
    milestones: {
        0: {
            requirementDescription: "5 mega points",
            effectDescription: "Keep duper upgrades on reset",
            done() { return player.m.points.gte(5)}
        },
    },
    upgrades: {
        11: {
            title: "Yet Another Boost",
            description: "Triple point gain.",
            cost: new Decimal(1),
            tooltip: "*3 to points"
        },
        12: {
            title: "Upgrades = Points",
            description: "Doubles Duper Point gain..",
            cost: new Decimal(2),
            tooltip: "duper points*2",
        },
    },
})