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
        if (hasUpgrade('n', 13)) mult = mult.times(2)
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
    },
    doReset(resettingLayer) {
        if (layers[resettingLayer].row <= this.row) return;
      
        let keep = [];
        if (hasMilestone("mile", 1)) keep.push("upgrades");
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
            title: "the first challenge",
            description: "unlock the first difficulty challenges (and unlocks 1 new upgrade to the lower gap)",
            unlocked() {
                return (hasUpgrade("n", 11))
            },
            cost: new Decimal(2)
        },
        13: {
            title: "winning, perhaps?",
            description: "double the lower gap gain",
            unlocked() {
                return (hasUpgrade("n", 12))
            },
            cost: new Decimal(5)
        },
    }
})
addLayer("u", {
    name: "Unimpossible", // This is optional, only used in a few places, If absent it just uses the layer id.
    image: "https://cdn.discordapp.com/attachments/978493156058333195/1094933234615324742/4a_1.webp",
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
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
    }
})