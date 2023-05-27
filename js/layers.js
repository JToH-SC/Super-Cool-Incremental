addLayer("a", {
    name: "achievements",
    symbol: "A",
    position: 0,
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "#f8ff6e",
    resource: "achievements",
    type: "none",
    row: "side",
    layerShown() {return true},
    update() {
        player.a.points = new Decimal(player.a.achievements.length)
    },
    tabFormat: {
        "Achievements": {
            content: [
                "main-display",
                "prestige-button",
                "blank",
                ["display-text",
                    function() { return 'You have ' + format(player.a.points) + '/28 achievements' },
                    { "color": "white", "font-size": "16px" }],
                "blank",
                "achievements",
            ],
        },
    },
    achievements: {
        11: {
            name: "Power!!!",
            tooltip: "Get 1 power point.",
            done() {if (player.p.points.gte(1)) return true}
        },
        12: {
            name: "Lotsa Power",
            tooltip: "Get 20 power points.",
            done() {if (player.p.points.gte(20)) return true}
        },
        13: {
            name: "Your Choice",
            tooltip: "Get either a Intensity or Control point.",
            done() {if ((player.i.points.gte(1)) || player.c.points.gte(1)) return true}
        },
        14: {
            name: "What Choice?",
            tooltip: "Get both Intensity and Control points.",
            done() {if ((player.i.points.gte(1)) && player.c.points.gte(1)) return true}
        },
        15: {
            name: "2 smart 4 u",
            tooltip: "Get 1 knowledge point.",
            done() {if (player.k.points.gte(1)) return true}
        },
        16: {
            name: "Features, Features",
            tooltip: "Get the first 3 Knowledge Upgrades.",
            done() {if ((hasUpgrade('k', 11)) && (hasUpgrade('k', 12)) && (hasUpgrade('k', 13))) return true}
        },
        17: {
            name: "Yet Another Choice",
            tooltip: "Get either Practice or Wisdom points.",
            done() {if ((player.pr.points.gte(1)) || player.w.points.gte(1)) return true}
        },
        21: {
            name: "wehre chocie",
            tooltip: "Get both Practice and Wisdom points.",
            done() {if ((player.pr.points.gte(1)) && player.w.points.gte(1)) return true}
        },
        22: {
            name: "Not School",
            tooltip: "Get 1 Learning Point.",
            done() {if (player.points.gte(Infinity)) return true}
        },
        23: {
            name: "The Journey Continues",
            tooltip: "Get [large number] points.",
            done() {if (player.points.gte(Infinity)) return true}
        },
        24: {
            name: "The Effort Begins!!!",
            tooltip: "Get 1 Effort Point.",
            done() {if (player.points.gte(Infinity)) return true}
        },
        25: {
            name: "Can't See Crap",
            tooltip: "Get 15 Darkness Fragments.",
            done() {if (player.points.gte(Infinity)) return true}
        },
        26: {
            name: "Am I Supposed To...",
            tooltip: "Create 5 Nuclear Bombs.",
            done() {if (player.points.gte(Infinity)) return true}
        },
        27: {
            name: "The Amount is Devastating",
            tooltip: "Unlock 10 Effort Milestones.",
            done() {if (player.points.gte(Infinity)) return true}
        },
        31: {
            name: "And Yet Here We Are",
            tooltip: "Get 1e99 Effort Points.",
            done() {if (player.points.gte(Infinity)) return true}
        },
        32: {
            name: "And We're Leaving!!!",
            tooltip: "Get either 1 Transcend, Time, or Talent point.",
            done() {if (player.points.gte(Infinity)) return true}
        },
        33: {
            name: "The Both, Not The All",
            tooltip: "Get two pairs of Row 5 Layer points.",
            done() {if (player.points.gte(Infinity)) return true}
        },
        34: {
            name: "It's The All",
            tooltip: "Get all Transcend, Time, and Talent points.",
            done() {if (player.points.gte(Infinity)) return true}
        },
        35: {
            name: "Still Not Out of Early Chapter 1",
            tooltip: "Get either Xaniness or Quirkiness Points.",
            done() {if (player.points.gte(Infinity)) return true}
        },
        36: {
            name: "Just A Quirky, Xany Guy",
            tooltip: "Get both Xaniness and Quirkiness Points.",
            done() {if (player.points.gte(Infinity)) return true}
        },
        37: {
            name: "We Already Have This",
            tooltip: "Get 1 Achievement Point.",
            done() {if (player.points.gte(Infinity)) return true}
        },
        41: {
            name: "It Is Overwhelming",
            tooltip: "Get a Row 9 Layer point.",
            done() {if (player.points.gte(Infinity)) return true}
        },
        42: {
            name: "It Wasnt Like This",
            tooltip: "Get [larger number] points.",
            done() {if (player.points.gte(Infinity)) return true}
        },
        43: {
            name: "Good Choices.",
            tooltip: "Get 2 Row 9 Layer points.",
            done() {if (player.points.gte(Infinity)) return true}
        },
        44: {
            name: "Almost There!",
            tooltip: "Get 3 Row 9 Layer points.",
            done() {if (player.points.gte(Infinity)) return true}
        },
        45: {
            name: "The Final Stretch",
            tooltip: "Get all Row 9 Layer points.",
            done() {if (player.points.gte(Infinity)) return true}
        },
        46: {
            name: "Penultimate",
            tooltip: "Get [large number] of each resource.",
            done() {if (player.points.gte(Infinity)) return true}
        },
        47: {
            name: "The First Redo",
            tooltip: "Get [slightly-big number] Redo Points.",
            done() {if (player.points.gte(Infinity)) return true}
        },
        }
    }
)
addLayer("p", {
    name: "power", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "P", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#C900FF",
    requires() {
        return 10  
    }, // Can be a function that takes requirement increases into account
    resource: "power points", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() {
        let mult = new Decimal(1)
        if (player.pr.unlocked) mult = mult.times(tmp.pr.effect)
        if (hasChallenge('i', 11)) mult = mult.times(challengeEffect('i', 11))
        if (hasUpgrade('c', 13)) mult = mult.times(2.5)
        if (hasUpgrade('c', 11)) mult = mult.times(1.75)
        if (hasUpgrade('i', 21)) mult = mult.times(upgradeEffect('i', 21))
        if (hasUpgrade('i', 12)) mult = mult.times(1.75)
        if (hasUpgrade('p', 21)) mult = mult.times(2)
        if (hasUpgrade('p', 12)) mult = mult.times(1.25)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    doReset(resettingLayer) {
        let extraUpgrades = []; //make new array to track extra upgrades you want to keep
        if (hasMilestone("k",0)) extraUpgrades.push(11,12,13);
        if (hasMilestone("k",1)) extraUpgrades.push(21,22,23);
        if (hasMilestone("c",0)) extraUpgrades.push(11,12,13);
        if (hasMilestone("c",1)) extraUpgrades.push(21,22,23);
        if (hasMilestone("i",0)) extraUpgrades.push(11,12,13);
        if (hasMilestone("i",1)) extraUpgrades.push(21,22,23);
            
        let keep = [];
        //do all normal stuff to figure out what to keep
        if (layers[resettingLayer].row > this.row) layerDataReset(this.layer, keep)
            
        player[this.layer].upgrades.push(...extraUpgrades) //after resetting everything, add the specified upgrades back for this layer
    },
    tabFormat: {
        "Main": {
            content: [
                "main-display",
                "prestige-button",
                "blank",
                ["display-text",
                    function() { return 'You have ' + format(player.points) + ' points' },
                    { "color": "white", "font-size": "16px" }],
                "blank",
                "blank",
                "upgrades"
            ],
        },
        "Buyables": {
            unlocked() {
                return (hasUpgrade('k', 11))
            },
            content: [
                "main-display",
                "prestige-button",
                "blank",
                ["display-text",
                    function() { return 'You have ' + format(player.points) + ' points' },
                    { "color": "white", "font-size": "16px" }],
                "blank",
                "blank",
                "buyables"
            ],
        },
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for power points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    buyables: {
        11: {
            title: "Power Buyable 1",
            cost(x) { return new Decimal(10).mul(new Decimal(10).pow(x)) },
            display() {return `Double point gain everytime.\nLevel: ${format(getBuyableAmount(this.layer, this.id))}\nCost: ${format(this.cost())}\nEffect: ${format(this.effect())}x points`},
            canAfford() {return player.p.points.gte(this.cost())},
            buy() {
                player.p.points = player.p.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            unlocked(){return hasUpgrade("k",11)},
            effect(x) {
              mult2 = new Decimal(x).gte(15)? new Decimal(4).pow(15).mul(new Decimal(2.5).pow(new Decimal(x).sub(15))):new Decimal(2).pow(x)
              return mult2
            },
        },
    },
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
            description: "1.35x Points.",
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
    doReset(resettingLayer) {
        let extraUpgrades = []; //make new array to track extra upgrades you want to keep
        if (hasMilestone("k",1)) extraUpgrades.push(11,12,13);
        if (hasMilestone("k",2)) extraUpgrades.push(21,22,23);
            
        let keep = [];
        keep.push("challenges");
        if (layers[resettingLayer].row > this.row) layerDataReset(this.layer, keep)
            
        player[this.layer].upgrades.push(...extraUpgrades) //after resetting everything, add the specified upgrades back for this layer
    },
    tabFormat: {
        "Main": {
            content: [
                "main-display",
                "prestige-button",
                "blank",
                ["display-text",
                    function() { return 'You have ' + format(player.points) + ' points' },
                    { "color": "white", "font-size": "16px" }],
                "blank",
                "milestones",
                "blank",
                "upgrades"
            ],
        },
        "Challenges": {
            unlocked() {
                return (hasUpgrade('k', 12))
            },
            content: [
                "main-display",
                "prestige-button",
                "blank",
                ["display-text",
                    function() { return 'You have ' + format(player.points) + ' points' },
                    { "color": "white", "font-size": "16px" }],
                "blank",
                "blank",
                "challenges"
            ],
        },
    },
    layerShown() { return hasUpgrade('p', 23) || player[this.layer].unlocked || player.c.unlocked },
    unlocked() {
        return hasUpgrade('p', 23)
    },
    increaseUnlockOrder: ["c"],
    challenges: {
        11: {
            name: "Intensity Challenge 1",
            challengeDescription: "Divides point gain by 3.<br> Reward: Knowledge Points boosts Power Points.",
            goalDescription: "5e9 points",
            rewardEffect() {
                return player.k.points.add(1).pow(0.75)
            },
            rewardDisplay() { return format(challengeEffect(this.layer, this.id))+"*" },
            canComplete: function() {return player.points.gte(5e9)},
        },
    },
    milestones: {
        0: {
            requirementDescription: "2 intensity points",
            done() {if (player[this.layer].points.gte(2)) return true},
            effectDescription: "Keeps the first row of Power Upgrades.",
            },
        1: {
            requirementDescription: "12 intensity points",
            done() {if (player[this.layer].points.gte(12)) return true},
            effectDescription: "Keeps the second row of Power Upgrades.",
            unlocked() {if (hasMilestone('i', 0)) return true},
        },
    },
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
                return player[this.layer].points.add(1).pow(0.3)
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
                return player.p.points.add(1).pow(0.1)
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
        subControl: new Decimal(0),
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
    effectDescription: function(){if (hasUpgrade('k', 13)) return " which gives " + format(new Decimal.times(0.5,player.c.points)) + " Sub-Control every second." },
    update(diff) {
        let gain = new Decimal(0)
        if (hasUpgrade('k', 13)){
        gain = new Decimal.times(0.5,player.c.points)
        }
        player.c.subControl = player.c.subControl.add(gain.times(diff));
    },
    doReset(resettingLayer) {
        let extraUpgrades = []; //make new array to track extra upgrades you want to keep
        if (hasMilestone("k",1)) extraUpgrades.push(11,12,13);
        if (hasMilestone("k",2)) extraUpgrades.push(21,22,23);
            
        let keep = [];
        //do all normal stuff to figure out what to keep
        if (layers[resettingLayer].row > this.row) layerDataReset(this.layer, keep)
            
        player[this.layer].upgrades.push(...extraUpgrades) //after resetting everything, add the specified upgrades back for this layer
    },
    increaseUnlockOrder: ["i"],
    tabFormat: {
        "Main": {
            content: [
                "main-display",
                "prestige-button",
                "blank",
                ["display-text",
                    function() { return 'You have ' + format(player.points) + ' points' },
                    { "color": "white", "font-size": "16px" }],
                "blank",
                "milestones",
                "blank",
                ["upgrades", [1, 2]],
            ],
        },
        "Sub-Control": {
            unlocked() {
                return (hasUpgrade('k', 13))
            },
            content: [
                "main-display",
                "prestige-button",
                "blank",
                ["display-text",
                    function() { return 'You have ' + format(player.points) + ' points' },
                    { "color": "white", "font-size": "16px" }],
                ["display-text",
                    function() { return 'You have ' + format(player.c.subControl) + ' Sub-Control' },
                    { "color": "whote", "font-size": "16px" }],
                "blank",
                "blank",
                ["upgrades", [3]],
            ],
        },
    },
    milestones: {
        0: {
            requirementDescription: "2 control points",
            done() {if (player[this.layer].points.gte(2)) return true},
            effectDescription: "Keeps the first row of Power Upgrades.",
            },
        1: {
            requirementDescription: "12 control points",
            done() {if (player[this.layer].points.gte(12)) return true},
            effectDescription: "Keeps the second row of Power Upgrades.",
            unlocked() {if (hasMilestone('c', 0)) return true},
        },
    },
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
            description: "2.15x Points.",
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
                return player.points.add(1).pow(0.15)
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
                return player.c.points.add(1).pow(0.3)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"*" },
            unlocked() {
                if (hasUpgrade('c', 22)) return true
            },
        },
        31: {
            title: "Sub-Control 1",
            description: "Sub-Control boosts Points.",
            cost: new Decimal(1e7),
            effect() {
                return player.c.subControl.add(1).pow(0.05)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"*" },
            unlocked() {
                if (hasUpgrade('k', 13)) return true
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
        best: new Decimal(0),
    }},
    color: "#B66EFF",
    requires() { return new Decimal(500000) }, // Can be a function that takes requirement increases into account
    resource: "knowledge points", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    branches: ["i", "c", "p"],
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.1, // Prestige currency exponent
    effect() {
        return new Decimal(player[this.layer].best).add(1).pow(0.7)
    },
    effectDescription() {
        return "which multiplies point gain by " + format(tmp.k.effect) + "*."
    },
    gainMult() {
        let mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    doReset() {
        player.i.unlocked = false
        player.c.unlocked = false

        layerDataReset(this.layer)
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "k", description: "K: Reset for knowledge points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown() { return hasUpgrade('p', 31) || player[this.layer].unlocked },
    unlocked() {
        return hasUpgrade('p', 31)
    },
    tabFormat: {
        "Main": {
            content: [
                "main-display",
                "prestige-button",
                "blank",
                ["display-text",
                    function() { return 'You have ' + format(player.points) + ' points' },
                    { "color": "white", "font-size": "16px" }],
                "blank",
                "milestones",
                "blank",
                "upgrades",
            ],
        },
    },
    milestones: {
        0: {
            requirementDescription: "2 knowledge points",
            done() {if (player[this.layer].points.gte(2)) return true},
            effectDescription: "Keeps the first row of Power Upgrades.",
            },
        1: {
            requirementDescription: "6 knowledge points",
            done() {if (player[this.layer].points.gte(6)) return true},
            effectDescription: "Keeps the first row of Intensity and Control Upgrades.",
            unlocked() {if (hasMilestone('k', 0)) return true},
        },
        2: {
            requirementDescription: "10 knowledge points",
            done() {if (player[this.layer].points.gte(10)) return true},
            effectDescription: "Keeps the second row of Power, Intensity, and Control upgrades, and doubles point gain.",
            unlocked() {if (hasMilestone('k', 1)) return true},
        },
    },
    upgrades: {
        11: {
            title: "Knowledge 1",
            description: "Unlocks Power Buyables.",
            cost: new Decimal(3),
        },
        12: {
            title: "Knowledge 2",
            description: "Unlocks Intensity Challenges.",
            cost: new Decimal(8),
            unlocked() {
                if (hasUpgrade('k', 11)) return true
            },
        },
        13: {
            title: "Knowledge 3",
            description: "Unlocks Sub-Control.",
            cost: new Decimal(15),
            unlocked() {
                if (hasUpgrade('k', 12)) return true
            },
        },
        21: {
            title: "Knowledge 4",
            description: "Unlock new content.",
            cost: new Decimal(30),
            unlocked() {
                if (hasUpgrade('k', 13)) return true
            },
        },
        },
    },
)
addLayer("pr", {
    name: "practice", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "PR", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        unlockOrder: 0,
        best: new Decimal(0),
    }},
    color: "#B5DA44",
    requires() {
        if (player[this.layer].unlockOrder === 1) return new Decimal(5e40)
        else return new Decimal(5e14)
    }, // Can be a function that takes requirement increases into account
    resource: "practice points", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    branches: ["k", "w"],
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.1, // Prestige currency exponent
    effect() {
        return new Decimal(player[this.layer].best).add(1).pow(1.1)
    },
    effectDescription() {
        return "which multiplies power point gain by " + format(tmp.pr.effect) + "*."
    },
    tabFormat: {
        "Main": {
            content: [
                "main-display",
                "prestige-button",
                "blank",
                ["display-text",
                    function() { return 'You have ' + format(player.points) + ' points' },
                    { "color": "white", "font-size": "16px" }],
                "blank",
                "milestones",
                "blank",
                "upgrades",
            ],
        },
    },
    increaseUnlockOrder: ['w'],
    gainMult() {
        let mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    displayRow: 2,
    row: 3, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "k", description: "K: Reset for knowledge points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown() { return hasUpgrade('k', 21) || player[this.layer].unlocked || player.w.unlocked},
    unlocked() {
        return hasUpgrade('k', 21)
    },
    upgrades: {
        11: {
            title: "Practice 1",
            description: "adding later",
            cost: new Decimal(3),
        },
        12: {
            title: "Practice 2",
            description: "adding later",
            cost: new Decimal(8),
            unlocked() {
                if (hasUpgrade('pr', 11)) return true
            },
        },
        },
    },
)
addLayer("w", {
    name: "wisdom", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "W", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 2, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        unlockOrder: 0,
        best: new Decimal(0),
    }},
    color: "#F9C3FF",
    requires() {
        if (player[this.layer].unlockOrder === 1) return new Decimal(5e40)
        else return new Decimal(5e14)
    }, // Can be a function that takes requirement increases into account
    resource: "wisdom points", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    branches: ["k", "pr"],
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.1, // Prestige currency exponent
    effect() {
        return new Decimal(player[this.layer].best).add(1).pow(1.03)
    },
    effectDescription() {
        return "which exponentiates power point gain by " + format(tmp.w.effect) + "^."
    },
    increaseUnlockOrder: ['w'],
    gainMult() {
        let mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    displayRow: 2,
    row: 3, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "k", description: "K: Reset for knowledge points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown() { return hasUpgrade('k', 21) || player[this.layer].unlocked || player.pr.unlocked},
    unlocked() {
        return hasUpgrade('k', 21)
    },
    upgrades: {
        11: {
            title: "Practice 1",
            description: "adding later",
            cost: new Decimal(3),
        },
        12: {
            title: "Practice 2",
            description: "adding later",
            cost: new Decimal(8),
            unlocked() {
                if (hasUpgrade('w', 11)) return true
            },
        },
        },
    },
)