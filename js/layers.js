addLayer("mile", {
    name: "Milestones", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "M",
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#bd7aff",
    resource: "milestones", // Name of prestige currency
    baseResource: "points",                 // The name of the resource your prestige gain is based on.
    baseAmount() { return player.points },
    type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    row: "side", // Row the layer is in on the tree (0 is the first row)
    unlocked() {
        return true
    },
    layerShown(){
        return true
    },
    update() {
        return player[this.layer].points = player[this.layer].milestones.length
    },
    tabFormat: {
        "Main": {
            content: [
                "main-display",
                "blank",
                "milestones",
            ],
        },
    },
    milestones: {
        0: {
            requirementDescription: "1 negativity",
            effectDescription: "keep the first difficulty upgrades on reset",
            done() { return player.n.points.gte(1) }
        },
        1: {
            requirementDescription: "1 unimpossibility",
            effectDescription: "keep the lower gap upgrades on reset and get 100% the first difficulty points every second",
            done() { return player.u.points.gte(1) }
        },
        2: {
            requirementDescription: "1 true easiness",
            effectDescription: "keep the negativity upgrades on reset and get 100% the lower gap points every second",
            done() { return player.t.points.gte(1) }
        },
    },
})
addLayer("tfird", {
    name: "The First Difficulty", // This is optional, only used in a few places, If absent it just uses the layer id.
    image: "https://cdn.discordapp.com/attachments/978493156058333195/1093862347015192636/1a.webp",
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#ffffff",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "The First Difficulty points", // Name of prestige currency
    baseResource: "skill", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (inChallenge('tlg', 11)) mult = mult.pow(1/5)
        if (hasUpgrade('tlg', 22)) mult = mult.times(3)
        if (hasUpgrade('orange', 12)) mult = mult.times(15)
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
                "clickables",
                "blank",
                ["display-text",
        function() { return 'You have ' + format(player.points) + ' skill' },
        { "color": "white", "font-size": "16px", "font-family": "Lucida Console" }],
                "upgrades"
            ],
        },
        "Challenges": {
            unlocked() {
                return hasUpgrade('n', 12)
            },
            content: [
                "main-display",
                "prestige-button",
                "blank",
                ["display-text",
        function() { return 'You have ' + format(player.points) + ' skill' },
        { "color": "white", "font-size": "16px", "font-family": "Lucida Console" }],
                "challenges"
            ],
        },
    },
    doReset(resettingLayer) {
        if (layers[resettingLayer].row <= this.row) return;
      
        let keep = [];
        if ((hasMilestone("tlg", 0)) || (hasMilestone("mile", 0))) keep.push("upgrades");
        keep.push('challenges');
        layerDataReset(this.layer, keep);
    },
    passiveGeneration() {
        if (hasMilestone('mile', 1)) return 1
    },
    challenges: {
        11: {
            name: "winning is rooted",
            challengeDescription: "skill gain is square rooted",
            goalDescription: "1,000 skill",
            rewardDescription: "doubles the lower gap gain",
            canComplete: function() {return player.points.gte(1000)},
        },
        12: {
            name: "four roots?!",
            challengeDescription: "skill gain is four rooted",
            goalDescription: "1,000 skill",
            rewardDescription: "triples the negativity gain",
            unlocked() {return (hasUpgrade('n', 22))},
            canComplete: function() {return player.points.gte(1000)},
        },
        21: {
            name: "seven rooter",
            challengeDescription: "skill gain is seven rooted",
            goalDescription: "1,000 skill",
            rewardDescription: "4x unimpossibility gain",
            unlocked() {return (hasUpgrade('green', 13))},
            canComplete: function() {return player.points.gte(1000)},
        },
    },
    upgrades: {
        11: {
            title: "winning",
            description: "get 1 skill per second",
            cost: new Decimal(0)
        },
        12: {
            title: "winning v2.0",
            description: "double skill gain",
            unlocked() {
                return (hasUpgrade("tfird", 11))
            },
            cost: new Decimal(1)
        },
        13: {
            title: "winning again",
            description: "tripl skill gain",
            unlocked() {
                return (hasUpgrade("tfird", 12))
            },
            cost: new Decimal(2)
        },
        21: {
            title: "i found more winning",
            description: "skil gain is boosted by the first difficulty points",
            unlocked() {
                if ((hasUpgrade("tlg", 12)) && (hasUpgrade("tfird", 13))) return true
            },
            effect() {
                return player[this.layer].points.add(1).pow(0.35)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
            cost: new Decimal(5)
        },
        22: {
            title: "upgrade winenr",
            description: "upgrade boosts skill gain",
            unlocked() {
                if ((hasUpgrade("tlg", 12)) && (hasUpgrade("tfird", 21))) return true
            },
            effect() {
                return new Decimal(player[this.layer].upgrades.length).add(1).pow(0.75)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
            cost: new Decimal(10)
        },
        23: {
            title: "i am winning rn",
            description: "4x skill gain",
            unlocked() {
                if ((hasUpgrade("tlg", 12)) && (hasUpgrade("tfird", 22))) return true
            },
            cost: new Decimal(40)
        },
    },
    clickables: {
        11: {
            title: "Hold to reset",
            display: "(Mobile QoL)",
            onClick() {if(canReset(this.layer)) doReset(this.layer)},
            onHold() {if(canReset(this.layer)) doReset(this.layer)},
            canClick() {return true},
        },
    },
})
addLayer("tlg", {
    name: "The Lower Gap", // This is optional, only used in a few places, If absent it just uses the layer id.
    image: "https://cdn.discordapp.com/attachments/978493156058333195/1093862361665912853/2a.webp",
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
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
        if (hasUpgrade('orange', 11)) mult = mult.times(8)
        if (hasUpgrade('n', 21)) mult = mult.times(2)
        if (hasUpgrade('n', 13)) mult = mult.times(4)
        if (hasChallenge('tfird', 11)) mult = mult.times(2)
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
        if (player.tfird.points.gte(10)) return true
    },
    layerShown(){
        return player['tlg'].unlocked || player.tfird.points.gte(10)
    },
    tabFormat: {
        "Main": {
            content: [
                "main-display",
                "prestige-button",
                "clickables",
                "blank",
                ["display-text",
        function() { return 'You have ' + format(player.tfird.points) + ' The First Difficulty points' },
        { "color": "white", "font-size": "16px", "font-family": "Lucida Console" }],
                "blank",
                "milestones",
                "blank",
                "upgrades"
            ],
        },
        "Challenges": {
            unlocked() {return (hasUpgrade('green', 11))},
            content: [
                "main-display",
                "prestige-button",
                "clickables",
                "blank",
                "challenges",
            ]
        }
    },
    passiveGeneration() {
        if (hasMilestone('mile', 2)) return 1
    },
    doReset(resettingLayer) {
        if (layers[resettingLayer].row <= this.row) return;
      
        let keep = [];
        if (hasMilestone("mile", 1)) keep.push("upgrades");
        keep.push('challenges');
        layerDataReset(this.layer, keep);
    },
    challenges: {
        11: {
            name: "the first difficulty has root",
            challengeDescription: "the first difficulty point gain is five rooted",
            goalDescription: "10,000,000 the first difficulty points",
            rewardDescription: "triples true easiness gain",
            canComplete: function() {return player.tfird.points.gte(10000000)},
        }
    },
    clickables: {
        11: {
            title: "Hold to reset",
            display: "(Mobile QoL)",
            onClick() {if(canReset(this.layer)) doReset(this.layer)},
            onHold() {if(canReset(this.layer)) doReset(this.layer)},
            canClick() {return true},
        },
    },
    milestones: {
        0: {
            requirementDescription: "3 the upper gap points",
            effectDescription: "keep the first difficulty upgrades on reset",
            unlocked() {
                return (hasUpgrade("tlg", 12))
            },
            done() { return player.tlg.points.gte(3) }
        }
    },
    upgrades: {
        11: {
            title: "i love winning",
            description: "double skill gain again?!",
            cost: new Decimal(1)
        },
        12: {
            title: "more winning",
            description: "another row of the first difficulty upgrades!!",
            unlocked() {
                return (hasUpgrade("tlg", 11))
            },
            cost: new Decimal(2)
        },
        13: {
            title: "winning a lot",
            description: "the lower gap points boosts skill gain",
            unlocked() {
                return ((hasUpgrade("tlg", 12)) && (hasUpgrade('n', 12)))
            },
            effect() {
                return (player[this.layer].points).add(1).pow(0.45)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
            cost: new Decimal(10)
        },
        21: {
            title: "winner winenr chick din",
            description: "double negativity gain",
            unlocked() {
                return ((hasUpgrade("tlg", 13)) && (hasUpgrade('green', 12)))
            },
            cost: new Decimal(100000)
        },
        22: {
            title: "winning, why?",
            description: "triple the first difficulty point gain",
            unlocked() {
                return ((hasUpgrade("tlg", 21)) && (hasUpgrade('green', 12)))
            },
            cost: new Decimal(1000000)
        },
        23: {
            title: "im tired of winning",
            description: "4x true easiness gain",
            unlocked() {
                return ((hasUpgrade("tlg", 22)) && (hasUpgrade('green', 12)))
            },
            cost: new Decimal(25000000)
        },
    },
})
addLayer("n", {
    name: "Negativity", // This is optional, only used in a few places, If absent it just uses the layer id.
    image: "https://cdn.discordapp.com/attachments/978493156058333195/1094184123213557801/3a.webp",
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#aa00ff",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Negativity", // Name of prestige currency
    baseResource: "The Upper Gap points", // Name of resource prestige is based on
    baseAmount() {return player.tlg.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade("tlg", 21)) mult = mult.times(2)
        if (hasUpgrade("yellow", 11)) mult = mult.times(upgradeEffect('yellow', 11))
        if (hasUpgrade("red", 13)) mult = mult.times(5)
        if (hasUpgrade("t", 12)) mult = mult.times(3)
        if (hasChallenge("tfird", 12)) mult = mult.times(3)
        if (hasUpgrade("u", 12)) mult = mult.times(3)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    branches: ["tlg", 'n'],
    hotkeys: [
        {key: "n", description: "N - Reset for Negativity", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    unlocked() {
        if (player['tlg'].points.gte(10)) return true
    },
    layerShown(){
        return player[this.layer].unlocked || player['tlg'].points.gte(10)
    },
    tabFormat: {
        "Main": {
            content: [
                "main-display",
                "prestige-button",
                "clickables",
                "blank",
                ["display-text",
        function() { return 'You have ' + format(player.tlg.points) + ' The Lower Gap points' },
        { "color": "white", "font-size": "16px", "font-family": "Lucida Console" }],
                "upgrades"
            ],
        },
    },
    doReset(resettingLayer) {
        if (layers[resettingLayer].row <= this.row) return;
      
        let keep = [];
        if (hasMilestone("mile", 2)) keep.push("upgrades");
        keep.push('challenges');
        layerDataReset(this.layer, keep);
    },
    clickables: {
        11: {
            title: "Hold to reset",
            display: "(Mobile QoL)",
            onClick() {if(canReset(this.layer)) doReset(this.layer)},
            onHold() {if(canReset(this.layer)) doReset(this.layer)},
            canClick() {return true},
        },
    },
    upgrades: {
        11: {
            title: "define winning?",
            description: "3x skill gain",
            cost: new Decimal(1)
        },
        12: {
            title: "winning but more challenging",
            description: "unlock the first difficulty challenges (and unlocks 1 new upgrade to the lower gap)",
            unlocked() {
                return (hasUpgrade("n", 11))
            },
            cost: new Decimal(2)
        },
        13: {
            title: "winning, perhaps?",
            description: "4x the lower gap points gain",
            unlocked() {
                return (hasUpgrade("n", 12))
            },
            cost: new Decimal(5)
        },
        21: {
            title: "epicly winning",
            description: "2x the lower gap points gain",
            unlocked() {
                return ((hasUpgrade("n", 13)) && (hasUpgrade('u', 13)))
            },
            cost: new Decimal(25)
        },
        22: {
            title: "winner challenging",
            description: "unlock a new the first difficulty challenge",
            unlocked() {
                return ((hasUpgrade("n", 21)) && (hasUpgrade('u', 13)))
            },
            cost: new Decimal(40)
        },
        23: {
            title: "WINNIng vs gaming",
            description: "x4 unimpossibility gain",
            unlocked() {
                return ((hasUpgrade("n", 22)) && (hasUpgrade('u', 13)))
            },
            cost: new Decimal(100)
        },
    }
})
addLayer("u", {
    name: "Unimpossible", // This is optional, only used in a few places, If absent it just uses the layer id.
    image: "https://cdn.discordapp.com/attachments/978493156058333195/1094933234615324742/4a_1.webp",
    position: 2, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#41007d",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Unimpossibility", // Name of prestige currency
    baseResource: "Negativity", // Name of resource prestige is based on
    baseAmount() {return player.n.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasChallenge("purple", 13)) mult = mult.times(10)
        if (hasChallenge("tfird", 21)) mult = mult.times(4)
        if (hasUpgrade("yellow", 13)) mult = mult.times(upgradeEffect('yellow', 13))
        if (hasUpgrade("red", 12)) mult = mult.times(4)
        if (hasUpgrade("t", 11)) mult = mult.times(5)
        if (hasUpgrade("n", 23)) mult = mult.times(4)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 3, // Row the layer is in on the tree (0 is the first row)
    branches: ["n", 'u'],
    hotkeys: [
        {key: "u", description: "U - Reset for Unimpossibility", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    unlocked() {
        if (player['n'].points.gte(10)) return true
    },
    layerShown(){
        return player[this.layer].unlocked || player['n'].points.gte(10)
    },
    tabFormat: {
        "Main": {
            content: [
                "main-display",
                "prestige-button",
                "clickables",
                "blank",
                ["display-text",
        function() { return 'You have ' + format(player.n.points) + ' Negativity' },
        { "color": "white", "font-size": "16px", "font-family": "Lucida Console" }],
                "upgrades"
            ],
        },
    },
    clickables: {
        11: {
            title: "Hold to reset",
            display: "(Mobile QoL)",
            onClick() {if(canReset(this.layer)) doReset(this.layer)},
            onHold() {if(canReset(this.layer)) doReset(this.layer)},
            canClick() {return true},
        },
    },
    upgrades: {
        11: {
            title: "yeah, i'm winning",
            description: "5x skill gain",
            cost: new Decimal(1)
        },
        12: {
            title: "dinner dinner chicken winner",
            description: "3x negativity gain",
            unlocked() {return (hasUpgrade('u', 11))},
            cost: new Decimal(2)
        },
        13: {
            title: "winning+",
            description: "unlock a new row of negativity upgrades",
            unlocked() {return (hasUpgrade('u', 12))},
            cost: new Decimal(3)
        },
    }
})
addLayer("t", {
    name: "True Ease", // This is optional, only used in a few places, If absent it just uses the layer id.
    image: "https://cdn.discordapp.com/attachments/978493156058333195/1095294519571922984/5a.webp",
    position: 2, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#ffffff",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "True Easiness", // Name of prestige currency
    baseResource: "Unimpossibility", // Name of resource prestige is based on
    baseAmount() {return player.u.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('tlg', 23)) mult = mult.times(3)
        if (hasChallenge('tlg', 11)) mult = mult.times(3)
        if (hasUpgrade("yellow", 12)) mult = mult.times(upgradeEffect('yellow', 12))
        if (hasUpgrade('red', 11)) mult = mult.times(3)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 4, // Row the layer is in on the tree (0 is the first row)
    branches: ["u", 't'],
    hotkeys: [
        {key: "v", description: "V - Reset for True Easiness", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    unlocked() {
        if (player['u'].points.gte(10)) return true
    },
    layerShown(){
        return player[this.layer].unlocked || player['u'].points.gte(10)
    },
    tabFormat: {
        "Main": {
            content: [
                "main-display",
                "prestige-button",
                "clickables",
                "blank",
                ["display-text",
        function() { return 'You have ' + format(player.u.points) + ' Unimpossibility' },
        { "color": "white", "font-size": "16px", "font-family": "Lucida Console" }],
                "upgrades"
            ],
        },
    },
    clickables: {
        11: {
            title: "Hold to reset",
            display: "(Mobile QoL)",
            onClick() {if(canReset(this.layer)) doReset(this.layer)},
            onHold() {if(canReset(this.layer)) doReset(this.layer)},
            canClick() {return true},
        },
    },
    upgrades: {
        11: {
            title: "Having an existence rank of Quadratic omega level numbers and below their negatives will cause you to lose",
            description: "5x unimpossibility gain",
            cost: new Decimal(1),
        },
        12: {
            title: "Wait 95 Planck time",
            description: "3x negativity gain",
            unlocked() {return (hasUpgrade('t', 11))},
            cost: new Decimal(3),
        },
        13: {
            title: "Wait 100 Planck time",
            description: "unlock color powers",
            unlocked() {return (hasUpgrade('t', 12))},
            cost: new Decimal(6),
        },
    }
})
addLayer("red", {
    name: "Red", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "R",
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#ff0000",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Red power", // Name of prestige currency
    baseResource: "True Easiness", // Name of resource prestige is based on
    baseAmount() {return player.t.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('blue', 11)) mult = mult.times(3)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 5, // Row the layer is in on the tree (0 is the first row)
    branches: ["t", 'red'],
    hotkeys: [
        {key: "r", description: "R - Reset for Red Power", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    unlocked() {
        return (hasUpgrade('t', 13))
    },
    layerShown(){
        return player[this.layer].unlocked || (hasUpgrade('t', 13))
    },
    increaseUnlockOrder: ['red', 'orange', 'yellow', 'green', 'blue', 'purple'],
    tabFormat: {
        "Main": {
            content: [
                "main-display",
                "prestige-button",
                "clickables",
                "blank",
                ["display-text",
        function() { return 'You have ' + format(player.t.points) + ' True Easiness' },
        { "color": "white", "font-size": "16px", "font-family": "Lucida Console" }],
                "upgrades"
            ],
        },
    },
    clickables: {
        11: {
            title: "Hold to reset",
            display: "(Mobile QoL)",
            onClick() {if(canReset(this.layer)) doReset(this.layer)},
            onHold() {if(canReset(this.layer)) doReset(this.layer)},
            canClick() {return true},
        },
    },
    upgrades: {
        11: {
            title: "Having a red object in the entire omniverse",
            description: "3x true easiness gain",
            cost: new Decimal(1),
        },
        12: {
            title: "Having two red objects in the entire omniverse",
            description: "4x unimpossiblity gain",
            unlocked() {return (hasUpgrade('red', 11))},
            cost: new Decimal(2),
        },
        13: {
            title: "Having three red objects in the entire omniverse",
            description: "5x negativity gain",
            unlocked() {return (hasUpgrade('red', 12))},
            cost: new Decimal(5),
        },
    }
})
addLayer("orange", {
    name: "Orange", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "O",
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        unlockOrder: 1,
    }},
    color: "#ff9900",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Orange power", // Name of prestige currency
    baseResource: "True Easiness", // Name of resource prestige is based on
    baseAmount() {return player.t.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('blue', 12)) mult = mult.times(3)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 5, // Row the layer is in on the tree (0 is the first row)
    branches: ["t", 'orange'],
    hotkeys: [
        {key: "o", description: "O - Reset for Orange Power", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    unlocked() {
        return (hasUpgrade('t', 13))
    },
    layerShown(){
        return player[this.layer].unlocked || (hasUpgrade('t', 13))
    },
    increaseUnlockOrder: ['red', 'orange', 'yellow', 'green', 'blue', 'purple'],
    tabFormat: {
        "Main": {
            content: [
                "main-display",
                "prestige-button",
                "clickables",
                "blank",
                ["display-text",
        function() { return 'You have ' + format(player.t.points) + ' True Easiness' },
        { "color": "white", "font-size": "16px", "font-family": "Lucida Console" }],
                "upgrades"
            ],
        },
    },
    clickables: {
        11: {
            title: "Hold to reset",
            display: "(Mobile QoL)",
            onClick() {if(canReset(this.layer)) doReset(this.layer)},
            onHold() {if(canReset(this.layer)) doReset(this.layer)},
            canClick() {return true},
        },
    },
    upgrades: {
        11: {
            title: "Having an orange object in the entire omniverse",
            description: "8x the lower gap point gain",
            cost: new Decimal(1),
        },
        12: {
            title: "Having two orange objects in the entire omniverse",
            description: "15x the first difficulty point gain",
            unlocked() {return (hasUpgrade('orange', 11))},
            cost: new Decimal(2),
        },
        13: {
            title: "Having three orange objects in the entire omniverse",
            description: "35x skill gain",
            unlocked() {return (hasUpgrade('orange', 12))},
            cost: new Decimal(5),
        },
    }
})
addLayer("yellow", {
    name: "Yellow", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "Y",
    position: 2, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        unlockOrder: 1,
    }},
    color: "#ffff00",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Yellow power", // Name of prestige currency
    baseResource: "True Easiness", // Name of resource prestige is based on
    baseAmount() {return player.t.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('blue', 11)) mult = mult.times(3)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 5, // Row the layer is in on the tree (0 is the first row)
    branches: ["t", 'yellow'],
    hotkeys: [
        {key: "Y", description: "Y - Reset for Yellow Power", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    unlocked() {
        return (hasUpgrade('t', 13))
    },
    layerShown(){
        return player[this.layer].unlocked || (hasUpgrade('t', 13))
    },
    increaseUnlockOrder: ['red', 'orange', 'yellow', 'green', 'blue', 'purple'],
    tabFormat: {
        "Main": {
            content: [
                "main-display",
                "prestige-button",
                "clickables",
                "blank",
                ["display-text",
        function() { return 'You have ' + format(player.t.points) + ' True Easiness' },
        { "color": "white", "font-size": "16px", "font-family": "Lucida Console" }],
                "upgrades"
            ],
        },
    },
    clickables: {
        11: {
            title: "Hold to reset",
            display: "(Mobile QoL)",
            onClick() {if(canReset(this.layer)) doReset(this.layer)},
            onHold() {if(canReset(this.layer)) doReset(this.layer)},
            canClick() {return true},
        },
    },
    upgrades: {
        11: {
            title: "Having a yellow object in the entire omniverse",
            description: "true easiness boosts negativity gain",
            effect() {
                return (player.t.points).add(1).pow(0.55)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
            cost: new Decimal(1),
        },
        12: {
            title: "Having two yellow objects in the entire omniverse",
            description: "yellow power boosts negativity gain",
            unlocked() {return (hasUpgrade('yellow', 11))},
            effect() {
                return (player[this.layer].points).add(1).pow(0.75)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
            cost: new Decimal(2),
        },
        13: {
            title: "Having three yellow objects in the entire omniverse",
            description: "skill boosts unimpossibility gain",
            unlocked() {return (hasUpgrade('yellow', 12))},
            effect() {
                return (player.points).add(1).pow(0.08)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
            cost: new Decimal(5),
        },
    }
})
addLayer("green", {
    name: "Green", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "G",
    position: 3, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        unlockOrder: 1,
    }},
    color: "#00ff00",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Green power", // Name of prestige currency
    baseResource: "True Easiness", // Name of resource prestige is based on
    baseAmount() {return player.t.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('blue', 12)) mult = mult.times(3)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 5, // Row the layer is in on the tree (0 is the first row)
    branches: ["t", 'green'],
    hotkeys: [
        {key: "G", description: "G - Reset for Green Power", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    unlocked() {
        return (hasUpgrade('t', 13))
    },
    layerShown(){
        return player[this.layer].unlocked || (hasUpgrade('t', 13))
    },
    increaseUnlockOrder: ['red', 'orange', 'yellow', 'green', 'blue', 'purple'],
    tabFormat: {
        "Main": {
            content: [
                "main-display",
                "prestige-button",
                "clickables",
                "blank",
                ["display-text",
        function() { return 'You have ' + format(player.t.points) + ' True Easiness' },
        { "color": "white", "font-size": "16px", "font-family": "Lucida Console" }],
                "upgrades"
            ],
        },
    },
    clickables: {
        11: {
            title: "Hold to reset",
            display: "(Mobile QoL)",
            onClick() {if(canReset(this.layer)) doReset(this.layer)},
            onHold() {if(canReset(this.layer)) doReset(this.layer)},
            canClick() {return true},
        },
    },
    upgrades: {
        11: {
            title: "Having a green object in the entire omniverse",
            description: "unlocks a new challenge in the lower gap",
            cost: new Decimal(1),
        },
        12: {
            title: "Having two green objects in the entire omniverse",
            description: "unlock a new row of upgrades in the lower gap",
            unlocked() {return (hasUpgrade('green', 11))},
            cost: new Decimal(2),
        },
        13: {
            title: "Having three green objects in the entire omniverse",
            description: "unlocks a new challenge in the first difficulty",
            unlocked() {return (hasUpgrade('green', 12))},
            cost: new Decimal(5),
        },
    }
})
addLayer("blue", {
    name: "Blue", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "B",
    position: 4, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        unlockOrder: 1,
    }},
    color: "#0000ff",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Blue power", // Name of prestige currency
    baseResource: "True Easiness", // Name of resource prestige is based on
    baseAmount() {return player.t.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('blue', 13)) mult = mult.times(3)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 5, // Row the layer is in on the tree (0 is the first row)
    branches: ["t", 'blue'],
    hotkeys: [
        {key: "B", description: "B - Reset for Blue Power", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    unlocked() {
        return (hasUpgrade('t', 13))
    },
    layerShown(){
        return player[this.layer].unlocked || (hasUpgrade('t', 13))
    },
    increaseUnlockOrder: ['red', 'orange', 'yellow', 'green', 'blue', 'purple'],
    tabFormat: {
        "Main": {
            content: [
                "main-display",
                "prestige-button",
                "clickables",
                "blank",
                ["display-text",
        function() { return 'You have ' + format(player.t.points) + ' True Easiness' },
        { "color": "white", "font-size": "16px", "font-family": "Lucida Console" }],
                "upgrades"
            ],
        },
    },
    clickables: {
        11: {
            title: "Hold to reset",
            display: "(Mobile QoL)",
            onClick() {if(canReset(this.layer)) doReset(this.layer)},
            onHold() {if(canReset(this.layer)) doReset(this.layer)},
            canClick() {return true},
        },
    },
    upgrades: {
        11: {
            title: "Having a blue object in the entire omniverse",
            description: "triples red and yellow power gain",
            cost: new Decimal(1),
        },
        12: {
            title: "Having two blue objects in the entire omniverse",
            description: "triples orange and green power gain",
            unlocked() {return (hasUpgrade('blue', 11))},
            cost: new Decimal(2),
        },
        13: {
            title: "Having three blue objects in the entire omniverse",
            description: "triples blue and purple power gain",
            unlocked() {return (hasUpgrade('blue', 12))},
            cost: new Decimal(5),
        },
    }
})
addLayer("purple", {
    name: "Purple", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "P",
    position: 5, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        unlockOrder: 1,
    }},
    color: "#9900ff",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Purple power", // Name of prestige currency
    baseResource: "True Easiness", // Name of resource prestige is based on
    baseAmount() {return player.t.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('blue', 13)) mult = mult.times(3)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 5, // Row the layer is in on the tree (0 is the first row)
    branches: ["t", 'purple'],
    hotkeys: [
        {key: "P", description: "P - Reset for Purple Power", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    unlocked() {
        return (hasUpgrade('t', 13))
    },
    layerShown(){
        return player[this.layer].unlocked || (hasUpgrade('t', 13))
    },
    increaseUnlockOrder: ['red', 'orange', 'yellow', 'green', 'blue', 'purple'],
    tabFormat: {
        "Main": {
            content: [
                "main-display",
                "prestige-button",
                "clickables",
                "blank",
                ["display-text",
        function() { return 'You have ' + format(player.t.points) + ' True Easiness' },
        { "color": "white", "font-size": "16px", "font-family": "Lucida Console" }],
                "upgrades"
            ],
        },
    },
    clickables: {
        11: {
            title: "Hold to reset",
            display: "(Mobile QoL)",
            onClick() {if(canReset(this.layer)) doReset(this.layer)},
            onHold() {if(canReset(this.layer)) doReset(this.layer)},
            canClick() {return true},
        },
    },
    upgrades: {
        11: {
            title: "Having a purple object in the entire omniverse",
            description: "does nothing",
            cost: new Decimal(1),
        },
        12: {
            title: "Having two purple objects in the entire omniverse",
            description: "does nothing",
            unlocked() {return (hasUpgrade('purple', 11))},
            cost: new Decimal(2),
        },
        13: {
            title: "Having three purple objects in the entire omniverse",
            description: "10x unimpossibility gain",
            unlocked() {return (hasUpgrade('purple', 12))},
            cost: new Decimal(5),
        },
    }
})