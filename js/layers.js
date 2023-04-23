addLayer("a", {
    name: "achievements", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "A", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#faff61",
    resource: "achievements", // Name of prestige currency
    type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    row: "side", // Row the layer is in on the tree (0 is the first row)
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(0)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    unlocked() {
        return true
    },
    layerShown(){
        return true
    },
    update() {
        player.a.points = new Decimal(player.a.achievements.length)
    },
    achievements: {
        11: {
            name: "Beginned",
            tooltip: "Get your first Super Point",
            image: "https://cdn.discordapp.com/attachments/978493156058333195/1093457139617509406/Untitled789_20230406164732.png",
            done() {
                if (player["s"].points.gte(1) ) return true
            },
        },
        12: {
            name: "Bad Name for A Layer",
            tooltip: "Get your first Duper Point",
            image: "https://cdn.discordapp.com/attachments/978493156058333195/1092766350109311016/Untitled789_20230404190306.png",
            done() {
                if ((player["d"].points.gte(1)) ) return true
            },
        },
        13: {
            name: "They Call Me 1000",
            tooltip: "Get 1000 Points",
            image: "https://cdn.discordapp.com/attachments/1092032478312661042/1093131528491499610/Untitled789_20230405053803.png",
            done() {
                if ((player.points.gte(1000)) ) return true
            },
        },
        14: {
            name: "Megaly Cool",
            tooltip: "Get your first Mega Point",
            image: "https://cdn.discordapp.com/attachments/978493156058333195/1092766735461011506/Untitled789_20230404190438.png",
            done() {
                if ((player["m"].points.gte(1)) ) return true
            },
        },
        15: {
            name: "Why only 10%?",
            tooltip: "Get the 1st Super Milestone",
            image: "https://cdn.discordapp.com/attachments/1092032478312661042/1093131528713818212/Untitled789_20230405191357.png",
            done() {
                if (hasMilestone('s', 0) ) return true
            },
        },
        21: {
            name: "Mega'd Up",
            tooltip: "Get 5 Mega Points",
            image: "https://cdn.discordapp.com/attachments/978493156058333195/1093457139902717972/Untitled789_20230406164800.png",
            done() {
                if (player['m'].points.gte(5)) return true
            },
        },
        22: {
            name: "Sub-way Layer",
            tooltip: "Unlock Super+ Points",
            image: "https://cdn.discordapp.com/attachments/1092032478312661042/1093132586672467968/Untitled789_20230405191801.png",
            done() {
                return (hasUpgrade("m", 13))
            },
        },
        23: {
            name: "15+ Only",
            tooltip: "Get 15 Super+ Points",
            image: "https://cdn.discordapp.com/attachments/1092032478312661042/1093130131444346900/Untitled789_20230405142823.png",
            done() {
                if (player["s+"].points.gte(15)) return true
            },
        },
}}),
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
        if (hasUpgrade('u', 11)) mult = mult.times(3)
        if (hasUpgrade('s+', 11)) mult = mult.times(4)
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
        keep.push("challenges");
        layerDataReset(this.layer, keep);
      },
    passiveGeneration() {
        if (hasMilestone('s', 0)) return 0.1
        else return 0
    },
    tabFormat: {
        "Upgrades": {
            content: [
                "main-display",
                "prestige-button",
                "blank",
                ["display-text",
        function() { return 'You have ' + format(player.points) + ' points' },
        { "color": "white", "font-size": "px", "font-family": "Lucida Console" }],
                "blank",
                ["toggle", ["c", "beep"]],
                "milestones",
                "blank",
                "blank",
                "upgrades"
            ],
        },
        "Challenges": {
            unlocked() {
                return (hasUpgrade("s+", 12))
            },
            content: [
                "challenges",
            ]
        },
    },
    unlocked() {
        return true
    },
    layerShown(){
        return true
    },
    challenges: {
        11: {
            name: "Minimal Upgrades",
            challengeDescription: "Point gain is halved for every upgrade you have.",
            rewardDescription: "Point gain is tripled for every milestone unlocked. (AND unlocks a new upgrade in the Super+ layer)",
            goalDescription: "50 points",
            rewardEffect() {
                return (new Decimal(Object.keys(layers).reduce((accumulated, current) => accumulated + player[current].upgrades.length, 0)))
            },
            canComplete: function() {return player.points.gte(50)},
        },
    },
    milestones: {
        0: {
            requirementDescription: "250 super points",
            effectDescription: "Passively 10% of super point gain every second.",
            done() { return player.s.points.gte(250)},
            unlocked() {
                return player['s'].milestones.unlocked || (player['m'].points.gte(1))
            },
        },
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
            tooltip: "super points+1^0.1*point gain",
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
        if (hasUpgrade('d', 21)) mult = mult.times(2.5)
        if (hasUpgrade('u', 11)) mult = mult.times(2)
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
    doReset(resettingLayer) {
        if (layers[resettingLayer].row <= this.row) return;
      
        let keep = [];
        if (hasMilestone("m", 0)) keep.push("milestones");
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
        21: {
            title: "Upgrade Title",
            description: "2.5x Duper Point gain",
            cost: new Decimal(75),
            unlocked() {if (hasUpgrade("u", 12)) return true},
            tooltip: "*2.5 duper points",
        },
        22: {
            title: "Ideas = None",
            description: "Unlock 1 more upgrade in Super+ layer.",
            cost: new Decimal(350),
            unlocked() {if (hasUpgrade("d", 21)) return true},
            tooltip: "unlocks a new upgrade to Super+",
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
            requirementDescription: "3 mega points",
            effectDescription: "Keep duper upgrades and milestones on reset",
            done() { return player.m.points.gte(3)}
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
            title: "Duper = Points",
            description: "Duper Points boosts Point Gain.",
            cost: new Decimal(2),
            tooltip: "duper points+1^0.25 * points",
            unlocked() {
            if (hasUpgrade("m", 11)) return true
            },
            effect() {
                return player["d"].points.add(1).pow(0.25)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        13: {
            title: "Extra Super",
            description: "Unlocks an extra layer to Super.",
            cost: new Decimal(3),
            tooltip: "unlocks an extra layer to super layer",
            unlocked() {
                if (hasUpgrade("m", 12)) return true
            },
        },
    },
})
addLayer("s+", {
    name: "super+", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "S+", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#cc0000",
    requires: new Decimal(2000), // Can be a function that takes requirement increases into account
    resource: "super+ points", // Name of prestige currency
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
    branches: ["s", "s+"],
    row: 3, // Row the layer is in on the tree (0 is the first row)
    displayRow: 0,
    hotkeys: [
        {key: "shift+s", description: "Shift+S: Reset for super+ points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    unlocked() {
        if (hasUpgrade("m", 13)) return true
    },
    layerShown(){
        return player[this.layer].unlocked || (hasUpgrade("m", 13))
    },
    upgrades: {
        11: {
            title: "Old Start!",
            description: "4x super point gain.",
            cost: new Decimal(1),
            tooltip: "*2 to super points",
        },
        12: {
            title: "A Super Challenge",
            description: "Unlock Super Challenges.",
            cost: new Decimal(2),
            unlocked() {
                if (hasUpgrade("s+", 11)) return true
            },
            tooltip: "unlock a challenge sub-tab in super layer",
        },
        13: {
            title: "Ultra!",
            description: "Unlock a new layer!",
            cost: new Decimal(5),
            unlocked() {
                if (hasChallenge("s", 11)) return true
            },
            tooltip: "unlock a challenge sub-tab in super layer",
        },
        21: {
            title: "I Will Implement This Upgrade Later",
            description: "title",
            cost: new Decimal(10),
            unlocked() {if (hasUpgrade("d", 22)) return true},
            tooltip: "unlock a new layer",
        },
    },
},
)
addLayer("u", {
    name: "ultra", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "U", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#00ff00",
    requires: new Decimal(100000), // Can be a function that takes requirement increases into account
    resource: "ultra points", // Name of prestige currency
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
    branches: ["m"],
    row: 4, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "U", description: "U: Reset for ultra points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    unlocked() {
        if (hasUpgrade("s+", 13)) return true
    },
    layerShown(){
        return player[this.layer].unlocked || (hasUpgrade("s+", 13))
    },
    upgrades: {
        11: {
            title: "A Boosty!",
            description: "3x point gain, 3x super point gain and x2 duper point gain.",
            cost: new Decimal(1),
            tooltip: "*3 points, *3 super points. *2 duper points",
        },
        12: {
            title: "Content-Adder 4000",
            description: "Unlocks 2 new upgrades in Duper.",
            cost: new Decimal(2),
            unlocked() {
                if (hasUpgrade("u", 11)) return true
            },
            tooltip: "unlocks 2 new upgrades to Duper",
        },
    },
})