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
            image: "https://media.discordapp.net/attachments/978493156058333195/1165938273772912680/Untitled1193_20231023165936.png?ex=6548aba2&is=653636a2&hm=dde9fce67bfe03f1ff91bbf24580070d045f5fecf6e25cef905fe541e41114a5&=",
            done() {if (player.p.points.gte(1)) return true}
        },
        12: {
            name: "Lotsa Power",
            tooltip: "Get 20 power points.",
            image: "https://cdn.discordapp.com/attachments/978493156058333195/1165938274133614612/Untitled1193_20231023165944.png?ex=6548aba2&is=653636a2&hm=0d78ff2c2d98b9532dd056fd2c67a9386699512e7a325232da8aab2e8e495aa8&",
            done() {if (player.p.points.gte(20)) return true}
        },
        13: {
            name: "Your Choice",
            tooltip: "Get either a Intensity or Control point.",
            image: "https://cdn.discordapp.com/attachments/978493156058333195/1165938274494328862/Untitled1193_20231023165948.png?ex=6548aba2&is=653636a2&hm=9264759a1d5a6bc95f635e91e6aaee8f6dc53e6da1b84f33d77369965049e628&",
            done() {if ((player.i.points.gte(1)) || player.c.points.gte(1)) return true}
        },
        14: {
            name: "What Choice?",
            tooltip: "Get both Intensity and Control points.",
            image: "https://cdn.discordapp.com/attachments/978493156058333195/1165940037972668456/Untitled1193_20231023170636.png?ex=6548ad47&is=65363847&hm=0790ce58c9ba52849963c0d5321c00158deb6be5889f014d69a6c0cd12a66fdf&",
            done() {if ((player.i.points.gte(1)) && player.c.points.gte(1)) return true}
        },
        15: {
            name: "2 smart 4 u",
            tooltip: "Get 1 knowledge point.",
            image: "https://cdn.discordapp.com/attachments/978493156058333195/1165940038241107980/Untitled1193_20231023170639.png?ex=6548ad47&is=65363847&hm=3a2915e9822786a39e732666e2c164db56af2e7d0df117faf1e4195515acaa7d&",
            done() {if (player.k.points.gte(1)) return true}
        },
        16: {
            name: "Features, Features",
            tooltip: "Get the first 3 Knowledge Upgrades.",
            image: "https://cdn.discordapp.com/attachments/978493156058333195/1165940038505340928/Untitled1193_20231023170645.png?ex=6548ad47&is=65363847&hm=3bf6c95773e7f1da18419ff4b2e2577f41a1705cdbbf5634e36f46fef476d97d&",
            done() {if ((hasUpgrade('k', 11)) && (hasUpgrade('k', 12)) && (hasUpgrade('k', 13))) return true}
        },
        17: {
            name: "Yet Another Choice",
            tooltip: "Get either Practice or Wisdom points.",
            image: "https://cdn.discordapp.com/attachments/978493156058333195/1165940038782169180/Untitled1193_20231023170647.png?ex=6548ad47&is=65363847&hm=a06102aa9b4d683e4521b43862375198f916b92f51bae721b888e5b3f591ea20&",
            done() {if ((player.pr.points.gte(1)) || player.w.points.gte(1)) return true}
        },
        21: {
            name: "wehre chocie",
            tooltip: "Get both Practice and Wisdom points.",
            image: "https://cdn.discordapp.com/attachments/978493156058333195/1165940039042220102/Untitled1193_20231023170650.png?ex=6548ad47&is=65363847&hm=4f92802d175fc5d02154c827a7bd222c219252212e954347c8874794056dc523&",
            done() {if ((player.pr.points.gte(1)) && player.w.points.gte(1)) return true}
        },
        22: {
            name: "Not School",
            tooltip: "Get 1 Learning Point.",
            image: "https://cdn.discordapp.com/attachments/978493156058333195/1165940818369052672/Untitled1193_20231023170917.png?ex=6548ae01&is=65363901&hm=82ca06a91af8fd073443959c53e3658e23cbb3bfbb12efe4a2eef4e0d9e5966f&",
            done() {if (player.points.gte(Infinity)) return true}
        },
        23: {
            name: "The Journey Continues",
            tooltip: "Get [large number] points.",
            image: "https://cdn.discordapp.com/attachments/978493156058333195/1165940818687823953/Untitled1193_20231023170922.png?ex=6548ae01&is=65363901&hm=7d5f50ed81942bf0fbcbf07892162bb8b68779b6a7532fbe235a3456cdc93e13&",
            done() {if (player.points.gte(Infinity)) return true}
        },
        24: {
            name: "The Effort Begins!!!",
            tooltip: "Get 1 Effort Point.",
            image: "https://cdn.discordapp.com/attachments/978493156058333195/1165940818926903336/Untitled1193_20231023170925.png?ex=6548ae01&is=65363901&hm=b775ea7aa0ab5d0c3ed90cf7a7e9294569ab793528c76cc58456c164f75013ff&",
            done() {if (player.points.gte(Infinity)) return true}
        },
        25: {
            name: "Can't See Crap",
            tooltip: "Get 15 Darkness Fragments.",
            image: "https://cdn.discordapp.com/attachments/978493156058333195/1165940819199524864/Untitled1193_20231023170928.png?ex=6548ae01&is=65363901&hm=ec4cbf68557d86335a50d1fa90179fe5cd2fde81b0f634889145a45a59becdba&",
            done() {if (player.points.gte(Infinity)) return true}
        },
        26: {
            name: "Am I Supposed To...",
            tooltip: "Create 5 Nuclear Bombs.",
            image: "https://cdn.discordapp.com/attachments/978493156058333195/1165940819430215740/Untitled1193_20231023170931.png?ex=6548ae01&is=65363901&hm=168e6abdc3ff8cd4d36df062638049ca895083bef39e698d974ad613fa259cde&",
            done() {if (player.points.gte(Infinity)) return true}
        },
        27: {
            name: "The Amount is Devastating",
            tooltip: "Unlock 10 Effort Milestones.",
            image: "https://cdn.discordapp.com/attachments/978493156058333195/1165940819665100800/Untitled1193_20231023170934.png?ex=6548ae01&is=65363901&hm=dd574264ca38616cc5f86bf987e911fc69302f3e53a2f30cffaa4d3fb1098238&",
            done() {if (player.points.gte(Infinity)) return true}
        },
        31: {
            name: "And Yet Here We Are",
            tooltip: "Get 1e99 Effort Points.",
            image: "https://cdn.discordapp.com/attachments/978493156058333195/1165940819895779418/Untitled1193_20231023170937.png?ex=6548ae01&is=65363901&hm=67a15d263d3cd205d1a6b839cf1c60f0e59111dfd1645dc5c3594cc4f030b999&",
            done() {if (player.points.gte(Infinity)) return true}
        },
        32: {
            name: "And We're Leaving!!!",
            tooltip: "Get either 1 Transcend, Time, or Talent point.",
            image: "https://cdn.discordapp.com/attachments/978493156058333195/1165940820122275850/Untitled1193_20231023170939.png?ex=6548ae01&is=65363901&hm=1ceb8d279a4fb73fda58ee5cf76cbce2e3cb081f70b4f0dc908cd698bb460ba4&",
            done() {if (player.points.gte(Infinity)) return true}
        },
        33: {
            name: "The Both, Not The All",
            tooltip: "Get two pairs of Row 5 Layer points.",
            image: "https://cdn.discordapp.com/attachments/978493156058333195/1165940820361355324/Untitled1193_20231023170943.png?ex=6548ae01&is=65363901&hm=7596f8ae59a974e4169b662bcb9668b9c896565636679af06b33dcd91215d8b1&",
            done() {if (player.points.gte(Infinity)) return true}
        },
        34: {
            name: "It's The All",
            tooltip: "Get all Transcend, Time, and Talent points.",
            image: "https://cdn.discordapp.com/attachments/978493156058333195/1165940820592033832/Untitled1193_20231023170945.png?ex=6548ae01&is=65363901&hm=ba832be01dea7d0e29efb6232100cb37aaf89619e0f05e3f0efcd6431ef990d0&",
            done() {if (player.points.gte(Infinity)) return true}
        },
        35: {
            name: "Still Not Out of Early Chapter 1",
            tooltip: "Get either Xaniness or Quirkiness Points.",
            image: "https://cdn.discordapp.com/attachments/978493156058333195/1165941921693315182/Untitled1193_20231023171342.png?ex=6548af08&is=65363a08&hm=32cc11bb24846debd8d352cf8b1836906ff148fd06e42589baa9b7d493f79ee0&",
            done() {if (player.points.gte(Infinity)) return true}
        },
        36: {
            name: "Just A Quirky, Xany Guy",
            tooltip: "Get both Xaniness and Quirkiness Points.",
            image: "https://cdn.discordapp.com/attachments/978493156058333195/1165941921970130954/Untitled1193_20231023171345.png?ex=6548af08&is=65363a08&hm=c36f4806fe031a2f3397cd575bbdf1d98bc2902926e2312f2bb6139cac42b0f6&",
            done() {if (player.points.gte(Infinity)) return true}
        },
        37: {
            name: "We Already Have This",
            tooltip: "Get 1 Achievement Point.",
            image: "https://cdn.discordapp.com/attachments/978493156058333195/1165941922188238858/Untitled1193_20231023171348.png?ex=6548af08&is=65363a08&hm=21577df3cac8f8adedbdb67642c96959cc09608b71f1d63f7972e6f50ed0a5d3&",
            done() {if (player.points.gte(Infinity)) return true}
        },
        41: {
            name: "It Is Overwhelming",
            tooltip: "Get a Row 9 Layer point.",
            image: "https://cdn.discordapp.com/attachments/978493156058333195/1165941922393763850/Untitled1193_20231023171350.png?ex=6548af08&is=65363a08&hm=7a05a98f0bb5024e2f95988382bb76c414dcdfc270472135ee080ff3bc194592&",
            done() {if (player.points.gte(Infinity)) return true}
        },
        42: {
            name: "It Wasnt Like This",
            tooltip: "Get [larger number] points.",
            image: "https://cdn.discordapp.com/attachments/978493156058333195/1165941922645413940/Untitled1193_20231023171352.png?ex=6548af08&is=65363a08&hm=0ef80a3199a27eb1c78b7e9ac4ab39f7b6d31839861c3580cf7ffc2a1b490101&",
            done() {if (player.points.gte(Infinity)) return true}
        },
        43: {
            name: "Good Choices.",
            tooltip: "Get 2 Row 9 Layer points.",
            image: "https://cdn.discordapp.com/attachments/978493156058333195/1165941922934824970/Untitled1193_20231023171355.png?ex=6548af08&is=65363a08&hm=1515f5bbd9e560f6251733477c34004d868c56467953652f4bbfb1e5c0fcca1f&",
            done() {if (player.points.gte(Infinity)) return true}
        },
        44: {
            name: "Almost There!",
            tooltip: "Get 3 Row 9 Layer points.",
            image: "https://cdn.discordapp.com/attachments/978493156058333195/1165941923182293002/Untitled1193_20231023171357.png?ex=6548af08&is=65363a08&hm=1f6393b8fd15c4a1ce700aac452a76930d631baa8bc9504c0819114275a4f3b8&",
            done() {if (player.points.gte(Infinity)) return true}
        },
        45: {
            name: "The Final Stretch",
            tooltip: "Get all Row 9 Layer points.",
            image: "https://cdn.discordapp.com/attachments/978493156058333195/1165941923417165865/Untitled1193_20231023171359.png?ex=6548af08&is=65363a08&hm=4c691724c6d062018c0c881628c22594c8777d1043c01e16d3a22fcd62be57dc&",
            done() {if (player.points.gte(Infinity)) return true}
        },
        46: {
            name: "Penultimate",
            tooltip: "Get [large number] of each resource.",
            image: "https://cdn.discordapp.com/attachments/978493156058333195/1165941923656245289/Untitled1193_20231023171413.png?ex=6548af08&is=65363a08&hm=822b75253a69c047185319d44eb65d0ac24fb299e18f09d1b6ad34d51711ef47&",
            done() {if (player.points.gte(Infinity)) return true}
        },
        47: {
            name: "The First Redo",
            tooltip: "Get [slightly-big number] Redo Points.",
            image: "https://cdn.discordapp.com/attachments/978493156058333195/1165941923865964584/Untitled1193_20231023171415.png?ex=6548af08&is=65363a08&hm=0dd0130d23acbd0608e2832a2eda1e9972d50fb9ee9bc544b146850af087ded2&",
            done() {if (player.points.gte(Infinity)) return true}
        },
        }
    }
)
addLayer("lo", {
    name: "lore",
    symbol: "L",
    position: 1,
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "#9c9c9c",
    resource: "notes",
    type: "none",
    row: "side",
    layerShown() {return true},
    tabFormat: {
        "Lore": {
            content: [
                "main-display",
                "prestige-button",
                "blank",
                ["display-text",
                    function() { return 'More lore will show up as the game goes on.' },
                    { "color": "white", "font-size": "16px" }],
                "blank",
                ["infobox", "yeah"],
            ],
        },
    },
    infoboxes: {
        yeah: {
            title: "Note 1",
            unlocked() {return hasUpgrade('pr', 11)},
            body() { return "he didn't have to" },
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
    automate() {
        if (hasUpgrade('pr', 31)) {
            buyBuyable('p', 11)
            buyBuyable('p', 12)
        }
    },
    passiveGeneration() {
        if (hasUpgrade('pr', 32)) return 0.05  
    },
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
        if (hasUpgrade('p', 41)) mult = mult.times(3.35)
        if (hasUpgrade('w', 41)) mult = mult.times(upgradeEffect('w', 41))
        if (player.w.unlocked) mult = mult.pow(tmp.w.effect)
        if (hasUpgrade('pr', 22)) mult = mult.times(upgradeEffect('pr', 22))
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
        if (hasMilestone("k",1)) extraUpgrades.push(21,22,23,31);
        if (hasMilestone("c",0)) extraUpgrades.push(11,12,13);
        if (hasMilestone("c",1)) extraUpgrades.push(21,22,23,31);
        if (hasMilestone("i",0)) extraUpgrades.push(11,12,13);
        if (hasMilestone("i",1)) extraUpgrades.push(21,22,23,31);
            
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
        12: {
            title: "Power Buyable 2",
            cost(x) { return new Decimal(1000).mul(new Decimal(1000).pow(x)) },
            display() {return `Triple point gain everytime.\nLevel: ${format(getBuyableAmount(this.layer, this.id))}\nCost: ${format(this.cost())}\nEffect: ${format(this.effect())}x points`},
            canAfford() {return player.p.points.gte(this.cost())},
            buy() {
                player.p.points = player.p.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            unlocked(){return hasUpgrade("pr",11)},
            effect(x) {
              mult2 = new Decimal(x).gte(15)? new Decimal(4).pow(15).mul(new Decimal(2.5).pow(new Decimal(x).sub(15))):new Decimal(3).pow(x)
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
        32: {
            title: "Power 8",
            description: "Double Intensity and Control point gain.",
            cost: new Decimal("3e10"),
            unlocked() {
                if (hasUpgrade('p', 31)) return true
            },
        },
        33: {
            title: "Power 9",
            description: "2.75x Points.",
            cost: new Decimal("3e12"),
            unlocked() {
                if (hasUpgrade('p', 32)) return true
            },
        },
        41: {
            title: "Power 10",
            description: "3.35x Power Points.",
            cost: new Decimal("3e14"),
            unlocked() {
                if (hasUpgrade('p', 33)) return true
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
        if (hasUpgrade('p', 32)) mult = mult.times(2)
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
        if (hasUpgrade('p', 32)) mult = mult.times(2)
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
    exponent() {
        if (player.k.points.gte("1e7")) return 0.09
        else return 0.1
    }, // Prestige currency exponent
    effect() {
        let eff = new Decimal(player[this.layer].best).add(1).pow(0.5)
        eff = softcap(eff, new Decimal("1e7"), new Decimal(0.5))
        return eff
    },
    effectDescription() {
        if (player.k.points.gte("1e7")) return "which multiplies point gain by " + format(tmp.k.effect) + "*, which is softcapped by ^0.5."
        else return "which multiplies point gain by " + format(tmp.k.effect) + "*."
    },
    gainMult() {
        let mult = new Decimal(1)
        if (hasUpgrade('pr', 21)) mult = mult.times(2)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    doReset() {
        player.i.unlocked = false
        player.c.unlocked = false
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
            cost: new Decimal(1),
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
        31: {
            title: "Knowledge 5",
            description: "Unlock new content.",
            cost: new Decimal("1e85"),
            currencyDisplayName: "points",
            currencyInternalName: "points",
            currencyLocation() { return player },
            unlocked() {
                if ((hasUpgrade('pr', 33)) && (hasUpgrade('w', 53))) return true
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
        total: new Decimal(0),
        practiceToken: new Decimal(0),
        ptCap: new Decimal(100),
    }},
    color: "#B5DA44",
    nodeStyle() {return {
        "background": (player.pr.unlocked||player.pr.canReset)?"linear-gradient(#e4ff91, #B5DA44)":"B5DA44" ,
    }},
    requires() {
        if (player[this.layer].unlockOrder === 1) return new Decimal(5e40)
        else return new Decimal(5e14)
    }, // Can be a function that takes requirement increases into account
    update() {
        if (hasUpgrade('pr', 32)) player.pr.ptCap = new Decimal(500)
        player.pr.practiceToken = player.pr.practiceToken.min(player.pr.ptCap)
    },
    resource: "practice points", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    branches: ["k", "w"],
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent() {
        if (player.pr.points.gte("5e4")) return 0.07
        else return 0.09
    }, // Prestige currency exponent
    effect() {
        let eff = new Decimal(player[this.layer].total).add(1).pow(0.3)
        eff = softcap(eff, new Decimal("5e4"), new Decimal(0.5))
        return eff
    },
    effectDescription() {
        if (player.pr.points.gte("5e4")) return "which multiplies power point gain by " + format(tmp.pr.effect) + "*, which is softcapped by ^0.5."
        else return "which multiplies power point gain by " + format(tmp.pr.effect) + "*."
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
                ["display-text",
                    function() { if (hasUpgrade('pr', 12)) return 'You have ' + format(player.pr.practiceToken) + ' Practice Tokens<br>The current Practice Token cap is ' + format(player.pr.ptCap) },
                    { "color": "white", "font-size": "16px" }],
                "blank",
                "milestones",
                "blank",
                ["upgrades", [1, 3]],
                "blank",
                "clickables",
            ],
        },
        "Practice Tokens": {
            unlocked() {
                return (hasUpgrade('pr', 13))
            },
            content: [
                "main-display",
                "prestige-button",
                "blank",
                ["display-text",
                    function() { return 'You have ' + format(player.points) + ' points' },
                    { "color": "white", "font-size": "16px" }],
                    ["display-text",
                    function() { return 'You have ' + format(player.pr.practiceToken) + ' Practice Tokens <br>The current Practice Token cap is ' + format(player.pr.ptCap) },
                    { "color": "white", "font-size": "16px" }],
                "blank",
                "milestones",
                "blank",
                ["upgrades", [2]],
                "blank",
                "clickables",
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
        {key: "r", description: "R: Reset for practice points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown() { return hasUpgrade('k', 21) || player[this.layer].unlocked || player.w.unlocked},
    unlocked() {
        return hasUpgrade('k', 21)
    },
    upgrades: {
        11: {
            title: "Practice 1",
            description: "Add another Power Buyable (...lore?)",
            style: {
                width: '125px',
                height: '100px',
            },
            cost: new Decimal(1),
        },
        12: {
            title: "Practice 2",
            description: "Unlock a Clickable and Practice Tokens.",
            cost: new Decimal(2),
            unlocked() {
                if (hasUpgrade('pr', 11)) return true
            },
        },
        13: {
            title: "Practice 3",
            description: "Unlock the Practice Token sub-tab.",
            cost: new Decimal(4),
            unlocked() {
                if (hasUpgrade('pr', 12)) return true
            },
        },
        21: {
            title: "Practice Token 1",
            description: "Double Knowledge Point gain.",
            cost: new Decimal(100),
            currencyDisplayName: "Practice Tokens",
            currencyInternalName: "practiceToken",
            currencyLayer: "pr",
            unlocked() {
                if (hasUpgrade('pr', 13)) return true
            },
        },
        22: {
            title: "Practice Token 2",
            description: "Let Practice Tokens boost Power Points",
            cost: new Decimal(500),
            currencyDisplayName: "Practice Tokens",
            currencyInternalName: "practiceToken",
            currencyLayer: "pr",
            effect() {
                return player[this.layer].practiceToken.add(1).pow(0.2)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"*" }, // Add formatting to the effect
            unlocked() {
                if (hasUpgrade('pr', 21)) return true
            },
        },
        31: {
            title: "Practice 4",
            description: "Auto-buy the first two Power Buyables.",
            cost: new Decimal(6),
            unlocked() {
                if (hasUpgrade('pr', 13)) return true
            },
        },
        32: {
            title: "Practice 5",
            description: "Passively generate 5% of Power Points that can be gained every second, and increase Practice Token cap.",
            cost: new Decimal(8),
            unlocked() {
                if (hasUpgrade('pr', 31)) return true
            },
        },
        33: {
            title: "Practice 6",
            description: "Boost points based on Practice Points.",
            cost: new Decimal(10),
            effect() {
                return player[this.layer].points.add(1.25).pow(0.05)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"*" }, // Add formatting to the effect
            unlocked() {
                if (hasUpgrade('pr', 31)) return true
            },
        },
        },
        clickables: {
            11: {
                title: "Gain Practice Tokens",
                unlocked() {
                    if (hasUpgrade('pr', 12)) return true
                },
                canClick() {
                    return true
                },
                onClick(){
                    return player.pr.practiceToken = player.pr.practiceToken.add(1)
                }
            }
        }
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
        total: new Decimal(0),
        wisdomCoins: new Decimal(0),
        wcGain: new Decimal(0),
    }},
    color: "#F9C3FF",
    nodeStyle() {return {
        "background": (player.w.unlocked)?"linear-gradient(#f9c3ff, #ae88b2)":"ae88b2" ,
    }},
    requires() {
        if (player[this.layer].unlockOrder === 1) return new Decimal(5e40)
        else return new Decimal(5e14)
    }, // Can be a function that takes requirement increases into account
    resource: "wisdom points", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    branches: ["k", "pr"],
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent() {
        if (player.w.points.gte("1e5")) return 0.035
        else return 0.05
    }, // Prestige currency exponent
    effect() {
        let eff = new Decimal(player[this.layer].total).add(1).pow(0.15)
        eff = softcap(eff, new Decimal("1e5"), new Decimal(0.5))
        return eff
    },
    effectDescription() {
        if (player.w.points.gte("1e5")) return "which exponentiates power point gain by " + format(tmp.w.effect) + "^, which is softcapped by ^0.5."
        else return "which exponentiates power point gain by " + format(tmp.w.effect) + "^."
    },
    increaseUnlockOrder: ['pr'],
    gainMult() {
        let mult = new Decimal(1)
        if (hasUpgrade('w', 31)) mult = mult.times(upgradeEffect('w', 31))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    displayRow: 2,
    row: 3, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "w", description: "W: Reset for wisdom points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown() { return hasUpgrade('k', 21) || player[this.layer].unlocked || player.pr.unlocked},
    unlocked() {
        return hasUpgrade('k', 21)
    },
    update(diff) {
        wcGain = new Decimal(0)
        if (hasUpgrade('w', 12)) wcGain = wcGain.add(1)
        if (hasUpgrade('w', 21)) wcGain = wcGain.times(2)
        if (hasUpgrade('w', 32)) wcGain = wcGain.times(upgradeEffect('w', 32))
        if (hasUpgrade('w', 51)) wcGain = wcGain.times(upgradeEffect('w', 51))
        if (hasUpgrade('w', 52)) wcGain = wcGain.times(upgradeEffect('w', 52))
        player.w.wisdomCoins = player.w.wisdomCoins.add(wcGain.times(diff));
        player.w.wcGain = wcGain
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
                ["upgrades", [1]],
            ],
        },
        "The Wisdom Tree": {
            unlocked() {
                return hasUpgrade('w', 12)
            },
            content: [
                "main-display",
                "prestige-button",
                "blank",
                ["display-text",
                    function() { return 'You have ' + format(player.points) + ' points' },
                    { "color": "white", "font-size": "16px" }],
                ["display-text",
                    function() { return 'You have ' + format(player.w.wisdomCoins) + ' Wisdom Coins' },
                    { "color": "white", "font-size": "16px" }],
                    ["display-text",
                    function() { return '(' + format(player.w.wcGain) + '/sec)' },
                    { "color": "#bfbfbf", "font-size": "14px" }],
                "blank",
                "milestones",
                "blank",
                ["upgrades", [2, 3, 4, 5]],
            ],
        },
    },
    upgrades: {
        11: {
            title: "Wisdom 1",
            description: "Add 3 more Power Upgrades.",
            cost: new Decimal(1),
        },
        12: {
            title: "Wisdom 2",
            description: "Unlock the Wisdom Tree, unlock Wisdom Coins and generate 1 Wisdom Coin per second.",
            cost: new Decimal(2),
            unlocked() {
                if (hasUpgrade('w', 11)) return true
            },
        },
        21: {
            title: "Wisdom Tree 1",
            description: "Double Wisdom Coin gain.",
            cost: new Decimal(60),
            currencyDisplayName: "Wisdom Coins",
            currencyInternalName: "wisdomCoins",
            currencyLayer: "w",
            branches: [31, 32],
            unlocked() {
                if (hasUpgrade('w', 11)) return true
            },
        },
        31: {
            title: "Wisdom Tree 2",
            description: "Let Wisdom Coins boost Wisdom Points.",
            cost() {
                if (hasUpgrade('w', 32)) return new Decimal(1000)
                else return new Decimal(200) 
            },
            currencyDisplayName: "Wisdom Coins",
            currencyInternalName: "wisdomCoins",
            currencyLayer: "w",
            style: {
                "right": "50px",
                "bottom": "-20px"
            },
            effect() {
                return player[this.layer].wisdomCoins.add(1).pow(0.2)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"*" }, // Add formatting to the effect
            unlocked() {
                if (hasUpgrade('w', 21)) return true
            },
        },
        32: {
            title: "Wisdom Tree 3",
            description: "Let Wisdom Points boost Wisdom Coins.",
            cost() {
                if (hasUpgrade('w', 31)) return new Decimal(1000)
                else return new Decimal(200) 
            },
            currencyDisplayName: "Wisdom Coins",
            currencyInternalName: "wisdomCoins",
            currencyLayer: "w",
            style: {
                "right": "-50px",
                "bottom": "-20px"
            },
            effect() {
                return player[this.layer].points.add(1).pow(0.5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"*" }, // Add formatting to the effect
            unlocked() {
                if (hasUpgrade('w', 21)) return true
            },
        },
        41: {
            title: "Wisdom Tree 4",
            description: "Let Wisdom Coins boost Power Points.",
            cost: new Decimal(3000),
            currencyDisplayName: "Wisdom Coins",
            currencyInternalName: "wisdomCoins",
            currencyLayer: "w",
            branches: [31, 32, 51, 52, 53],
            style: {
                "bottom": "-40px"
            },
            effect() {
                return player[this.layer].wisdomCoins.add(1).pow(0.1)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"*" }, // Add formatting to the effect
            unlocked() {
                if ((hasUpgrade('w', 31)) && (hasUpgrade('w', 32))) return true
            },
        },
        51: {
            title: "Wisdom Tree 5",
            description: "Let Wisdom Coins boost themselves.",
            cost() {
                if ((hasUpgrade('w', 52)) && (hasUpgrade('w', 53))) return new Decimal(20000)
                else if ((hasUpgrade('w', 52)) || (hasUpgrade('w', 53))) return new Decimal(10000)
                else return new Decimal(5000)
            },
            currencyDisplayName: "Wisdom Coins",
            currencyInternalName: "wisdomCoins",
            currencyLayer: "w",
            style: {
                "right": "50px",
                "bottom": "-80px"
            },
            effect() {
                return player[this.layer].wisdomCoins.add(1).pow(0.15)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"*" }, // Add formatting to the effect
            unlocked() {
                if ((hasUpgrade('w', 31)) && (hasUpgrade('w', 32))) return true
            },
        },
        52: {
            title: "Wisdom Tree 6",
            description: "Boosts Wisdom Coins based on time spent on this reset.",
            cost() {
                if ((hasUpgrade('w', 51)) && (hasUpgrade('w', 53))) return new Decimal(20000)
                else if ((hasUpgrade('w', 51)) || (hasUpgrade('w', 53))) return new Decimal(10000)
                else return new Decimal(5000)
            },
            currencyDisplayName: "Wisdom Coins",
            currencyInternalName: "wisdomCoins",
            currencyLayer: "w",
            style: {
                "bottom": "-80px"
            },
            effect() {
                return new Decimal(player[this.layer].resetTime).add(1).pow(0.2)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"*" }, // Add formatting to the effect
            unlocked() {
                if ((hasUpgrade('w', 31)) && (hasUpgrade('w', 32))) return true
            },
        },
        53: {
            title: "Wisdom Tree 7",
            description: "Let Wisdom Coins boost Knowledge Points.",
            cost() {
                if ((hasUpgrade('w', 51)) && (hasUpgrade('w', 52))) return new Decimal(20000)
                else if ((hasUpgrade('w', 51)) || (hasUpgrade('w', 52))) return new Decimal(10000)
                else return new Decimal(5000)
            },
            currencyDisplayName: "Wisdom Coins",
            currencyInternalName: "wisdomCoins",
            currencyLayer: "w",
            style: {
                "right": "-50px",
                "bottom": "-80px"
            },
            effect() {
                return player[this.layer].wisdomCoins.add(1).pow(0.135)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"*" }, // Add formatting to the effect
            unlocked() {
                if ((hasUpgrade('w', 31)) && (hasUpgrade('w', 32))) return true
            },
        },
        },
    },
)
addLayer("l", {
    name: "learning", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "L", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        unlockOrder: 0,
        total: new Decimal(0),
    }},
    color: "#6e6e6e",
    requires() {
        return new Decimal("1e100")
    }, // Can be a function that takes requirement increases into account
    resource: "learning points", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    branches: ["w", "pr", "k"],
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.02, // Prestige currency exponent
    gainMult() {
        let mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    displayRow: 3,
    row: 4, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "l", description: "L: Reset for learning points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown() { return hasUpgrade('k', 31) || player[this.layer].unlocked},
    unlocked() {
        return hasUpgrade('k', 31)
    },
    tabFormat: {
        "Main": {
            content: [
                "main-display",
                "prestige-button",
                "blank",
                ["display-text",
                    function() { return 'Currently no content here! Thank you for playing :D' },
                    { "color": "white", "font-size": "16px" }],
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
    upgrades: {
        11: {
            title: "Learning 1",
            description: "adding later!",
            cost: new Decimal(1),
        },
        12: {
            title: "Wisdom 2",
            description: "adding later!",
            cost: new Decimal(2),
            unlocked() {
                if (hasUpgrade('l', 11)) return true
            },
        },
        },
    },
)