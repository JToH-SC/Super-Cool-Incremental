addLayer("a", {
    name: "achievements",
    symbol: "I",
    position: 1,
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "#f8ff6e",
    resource: "achievements",
    tooltip: "Info",
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
        "Lore": {
            embedLayer: 'lo'
        },
        "Savebank": {
            embedLayer: 'SV'
        },
        "Boosts": {
            content: [
                                ["display-text",
                    function() { return '<h1>Point Boosts</h1>' },
                { "color": "white", "font-size": "16px" }],
                                ["display-text",
                    function() { if (hasUpgrade('p',11)) return '- Power 1: 1.5x' },
                { "color": "white", "font-size": "16px" }],
                                ["display-text",
                    function() { if (hasUpgrade('p',13)) return '- Power 3: 1.75x' },
                { "color": "white", "font-size": "16px" }],
                                ["display-text",
                    function() { if (hasUpgrade('p',22)) return '- Power 5: 2.25x' },
                { "color": "white", "font-size": "16px" }],
                                ["display-text",
                    function() { if (hasUpgrade('p',23)) return '- Power 6: 1.35x' },
                { "color": "white", "font-size": "16px" }],
                                ["display-text",
                    function() { if (hasUpgrade('i',11)) return '- Intensity 1: 2.25x' },
                { "color": "white", "font-size": "16px" }],
                                ["display-text",
                    function() { if (hasUpgrade('i',13)) return '- Intensity 3: ' + format(upgradeEffect('i',13)) + 'x' },
                { "color": "white", "font-size": "16px" }],
                                ["display-text",
                    function() { if (hasUpgrade('i',22)) return '- Intensity 5: 2.5x' },
                { "color": "white", "font-size": "16px" }],
                                ["display-text",
                function() { if (hasUpgrade('i',23)) return '- Intensity 6: ' + format(upgradeEffect('i',23)) + 'x' },
                { "color": "white", "font-size": "16px" }],
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
            done() {if (player.l.points.gte(1)) return true}
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
    position: 2,
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "#9c9c9c",
    tooltip() { return "Lore" },
    resource: "notes",
    type: "none",
    row: "side",
    layerShown() {return false},
    infoboxes: {
        yeah: {
            title: "Note 1",
            unlocked() {return hasUpgrade('pr', 11)},
            body() { return "he didn't have to" },
        },
    }
}
)
addLayer("SV", {
    name: "savebank",
    symbol: "SV",
    position: 0,
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "#00d0ff",
    tooltip() { return "Savebank" },
    type: "none",
    row: "side",
    layerShown() {return false},
    tabFormat: {
        "Savebank": {
            content: [
                ["display-text",
                    function() { return 'Here are all the savebanks.<br>Savebanks are used to skip to a certain point of the game, whether to mid-game or endgame.' },
                    { "color": "white", "font-size": "16px" }],
                "blank",
                "clickables",
            ],
        },
    },
    clickables: {
        11: {
            title: "Knowledge",
            display: "1 Knowledge Point",
            canClick: true,
            onClick() {
                if (!confirm("Your current progress will not be saved!"))
                    return;
                importSave("eyJ0YWIiOiJvcHRpb25zLXRhYiIsIm5hdlRhYiI6InRyZWUtdGFiIiwidGltZSI6MTcwMDA0MzYwNzUxMSwibm90aWZ5Ijp7fSwidmVyc2lvblR5cGUiOiJBVEpUQVQiLCJ2ZXJzaW9uIjoiMC4yLjIiLCJ0aW1lUGxheWVkIjozMDQ4LjQ2MDAwMDAwMDAwMSwia2VlcEdvaW5nIjpmYWxzZSwiaGFzTmFOIjpmYWxzZSwicG9pbnRzIjoiMy4xMTU1MTI0Nzc5MDc5Mjg2Iiwic3VidGFicyI6eyJjaGFuZ2Vsb2ctdGFiIjp7fSwiYSI6eyJtYWluVGFicyI6IlNhdmViYW5rIn0sImxvIjp7Im1haW5UYWJzIjoiTG9yZSJ9LCJwIjp7Im1haW5UYWJzIjoiTWFpbiJ9LCJpIjp7Im1haW5UYWJzIjoiTWFpbiJ9LCJjIjp7Im1haW5UYWJzIjoiTWFpbiJ9LCJrIjp7Im1haW5UYWJzIjoiTWFpbiJ9LCJwciI6eyJtYWluVGFicyI6Ik1haW4ifSwidyI6eyJtYWluVGFicyI6Ik1haW4ifSwibCI6eyJtYWluVGFicyI6Ik1haW4ifSwiU1YiOnsibWFpblRhYnMiOiJTYXZlYmFuayJ9fSwibGFzdFNhZmVUYWIiOiJrIiwibmV3c1RvdGFsIjoiNDIiLCJpbmZvYm94ZXMiOnsibG8iOnsieWVhaCI6ZmFsc2V9fSwiaW5mby10YWIiOnsidW5sb2NrZWQiOnRydWUsInRvdGFsIjoiMCIsImJlc3QiOiIwIiwicmVzZXRUaW1lIjozMDQ4LjQ2MDAwMDAwMDAwMSwiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbXSwibWlsZXN0b25lcyI6W10sImxhc3RNaWxlc3RvbmUiOm51bGwsImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiJ9LCJvcHRpb25zLXRhYiI6eyJ1bmxvY2tlZCI6dHJ1ZSwidG90YWwiOiIwIiwiYmVzdCI6IjAiLCJyZXNldFRpbWUiOjMwNDguNDYwMDAwMDAwMDAxLCJmb3JjZVRvb2x0aXAiOmZhbHNlLCJidXlhYmxlcyI6e30sIm5vUmVzcGVjQ29uZmlybSI6ZmFsc2UsImNsaWNrYWJsZXMiOnt9LCJzcGVudE9uQnV5YWJsZXMiOiIwIiwidXBncmFkZXMiOltdLCJtaWxlc3RvbmVzIjpbXSwibGFzdE1pbGVzdG9uZSI6bnVsbCwiYWNoaWV2ZW1lbnRzIjpbXSwiY2hhbGxlbmdlcyI6e30sImdyaWQiOnt9LCJwcmV2VGFiIjoiIn0sImNoYW5nZWxvZy10YWIiOnsidW5sb2NrZWQiOnRydWUsInRvdGFsIjoiMCIsImJlc3QiOiIwIiwicmVzZXRUaW1lIjozMDQ4LjQ2MDAwMDAwMDAwMSwiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbXSwibWlsZXN0b25lcyI6W10sImxhc3RNaWxlc3RvbmUiOm51bGwsImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiJ9LCJhIjp7InVubG9ja2VkIjp0cnVlLCJwb2ludHMiOiI1IiwidG90YWwiOiIwIiwiYmVzdCI6IjUiLCJyZXNldFRpbWUiOjMwNDguNDYwMDAwMDAwMDAxLCJmb3JjZVRvb2x0aXAiOmZhbHNlLCJidXlhYmxlcyI6e30sIm5vUmVzcGVjQ29uZmlybSI6ZmFsc2UsImNsaWNrYWJsZXMiOnt9LCJzcGVudE9uQnV5YWJsZXMiOiIwIiwidXBncmFkZXMiOltdLCJtaWxlc3RvbmVzIjpbXSwibGFzdE1pbGVzdG9uZSI6bnVsbCwiYWNoaWV2ZW1lbnRzIjpbIjExIiwiMTIiLCIxMyIsIjE0IiwiMTUiXSwiY2hhbGxlbmdlcyI6e30sImdyaWQiOnt9LCJwcmV2VGFiIjoiIn0sImxvIjp7InVubG9ja2VkIjp0cnVlLCJwb2ludHMiOiIwIiwidG90YWwiOiIwIiwiYmVzdCI6IjAiLCJyZXNldFRpbWUiOjMwNDguNDYwMDAwMDAwMDAxLCJmb3JjZVRvb2x0aXAiOmZhbHNlLCJidXlhYmxlcyI6e30sIm5vUmVzcGVjQ29uZmlybSI6ZmFsc2UsImNsaWNrYWJsZXMiOnt9LCJzcGVudE9uQnV5YWJsZXMiOiIwIiwidXBncmFkZXMiOltdLCJtaWxlc3RvbmVzIjpbXSwibGFzdE1pbGVzdG9uZSI6bnVsbCwiYWNoaWV2ZW1lbnRzIjpbXSwiY2hhbGxlbmdlcyI6e30sImdyaWQiOnt9LCJwcmV2VGFiIjoiIn0sIlNWIjp7InVubG9ja2VkIjp0cnVlLCJwb2ludHMiOiIwIiwidG90YWwiOiIwIiwiYmVzdCI6IjAiLCJyZXNldFRpbWUiOjI5NDMuNDQzOTk5OTk5OTk3NywiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7IjExIjoiIiwiMTIiOiIiLCIxMyI6IiJ9LCJzcGVudE9uQnV5YWJsZXMiOiIwIiwidXBncmFkZXMiOltdLCJtaWxlc3RvbmVzIjpbXSwibGFzdE1pbGVzdG9uZSI6bnVsbCwiYWNoaWV2ZW1lbnRzIjpbXSwiY2hhbGxlbmdlcyI6e30sImdyaWQiOnt9LCJwcmV2VGFiIjoiIn0sInAiOnsidW5sb2NrZWQiOnRydWUsInBvaW50cyI6IjAiLCJ0b3RhbCI6IjAiLCJiZXN0IjoiMCIsInJlc2V0VGltZSI6Mi4yMDMsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7IjExIjoiMCIsIjEyIjoiMCJ9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbXSwibWlsZXN0b25lcyI6W10sImxhc3RNaWxlc3RvbmUiOm51bGwsImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiIsImFjdGl2ZUNoYWxsZW5nZSI6bnVsbH0sImkiOnsidW5sb2NrZWQiOnRydWUsInBvaW50cyI6IjAiLCJ1bmxvY2tPcmRlciI6MCwidG90YWwiOiIwIiwiYmVzdCI6IjAiLCJyZXNldFRpbWUiOjIuMjAzLCJmb3JjZVRvb2x0aXAiOmZhbHNlLCJidXlhYmxlcyI6e30sIm5vUmVzcGVjQ29uZmlybSI6ZmFsc2UsImNsaWNrYWJsZXMiOnt9LCJzcGVudE9uQnV5YWJsZXMiOiIwIiwidXBncmFkZXMiOltdLCJtaWxlc3RvbmVzIjpbXSwibGFzdE1pbGVzdG9uZSI6bnVsbCwiYWNoaWV2ZW1lbnRzIjpbXSwiY2hhbGxlbmdlcyI6eyIxMSI6MH0sImdyaWQiOnt9LCJwcmV2VGFiIjoiIiwiYWN0aXZlQ2hhbGxlbmdlIjpudWxsfSwiYyI6eyJ1bmxvY2tlZCI6dHJ1ZSwicG9pbnRzIjoiMCIsInVubG9ja09yZGVyIjowLCJzdWJDb250cm9sIjoiMCIsInRvdGFsIjoiMCIsImJlc3QiOiIwIiwicmVzZXRUaW1lIjoyLjIwMywiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbXSwibWlsZXN0b25lcyI6W10sImxhc3RNaWxlc3RvbmUiOm51bGwsImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiIsImFjdGl2ZUNoYWxsZW5nZSI6bnVsbH0sImsiOnsidW5sb2NrZWQiOnRydWUsInBvaW50cyI6IjEiLCJiZXN0IjoiMSIsInRvdGFsIjoiMSIsInJlc2V0VGltZSI6Mi4yMDMsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6W10sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifSwicHIiOnsidW5sb2NrZWQiOmZhbHNlLCJwb2ludHMiOiIwIiwidW5sb2NrT3JkZXIiOjAsInRvdGFsIjoiMCIsInByYWN0aWNlVG9rZW4iOiIwIiwicHRDYXAiOiIxMDAiLCJiZXN0IjoiMCIsInJlc2V0VGltZSI6MzA0OC40NjAwMDAwMDAwMDEsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6eyIxMSI6IiJ9LCJzcGVudE9uQnV5YWJsZXMiOiIwIiwidXBncmFkZXMiOltdLCJtaWxlc3RvbmVzIjpbXSwibGFzdE1pbGVzdG9uZSI6bnVsbCwiYWNoaWV2ZW1lbnRzIjpbXSwiY2hhbGxlbmdlcyI6e30sImdyaWQiOnt9LCJwcmV2VGFiIjoiIn0sInciOnsidW5sb2NrZWQiOmZhbHNlLCJwb2ludHMiOiIwIiwidW5sb2NrT3JkZXIiOjAsInRvdGFsIjoiMCIsIndpc2RvbUNvaW5zIjoiMCIsIndjR2FpbiI6IjAiLCJiZXN0IjoiMCIsInJlc2V0VGltZSI6MzA0OC40NjAwMDAwMDAwMDEsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6W10sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifSwibCI6eyJ1bmxvY2tlZCI6ZmFsc2UsInBvaW50cyI6IjAiLCJ1bmxvY2tPcmRlciI6MCwidG90YWwiOiIwIiwiYmVzdCI6IjAiLCJyZXNldFRpbWUiOjMwNDguNDYwMDAwMDAwMDAxLCJmb3JjZVRvb2x0aXAiOmZhbHNlLCJidXlhYmxlcyI6e30sIm5vUmVzcGVjQ29uZmlybSI6ZmFsc2UsImNsaWNrYWJsZXMiOnt9LCJzcGVudE9uQnV5YWJsZXMiOiIwIiwidXBncmFkZXMiOltdLCJtaWxlc3RvbmVzIjpbXSwibGFzdE1pbGVzdG9uZSI6bnVsbCwiYWNoaWV2ZW1lbnRzIjpbXSwiY2hhbGxlbmdlcyI6e30sImdyaWQiOnt9LCJwcmV2VGFiIjoiIn0sImJsYW5rIjp7InVubG9ja2VkIjp0cnVlLCJ0b3RhbCI6IjAiLCJiZXN0IjoiMCIsInJlc2V0VGltZSI6MzA0OC40NjAwMDAwMDAwMDEsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6W10sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifSwidHJlZS10YWIiOnsidW5sb2NrZWQiOnRydWUsInRvdGFsIjoiMCIsImJlc3QiOiIwIiwicmVzZXRUaW1lIjozMDQ4LjQ2MDAwMDAwMDAwMSwiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbXSwibWlsZXN0b25lcyI6W10sImxhc3RNaWxlc3RvbmUiOm51bGwsImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiJ9fQ==")
            },
            style() {
                return {
                    'background-color': tmp.k.color,
                }
            },
        },
        12: {
            title: "Practice/<br>Wisdom",
            display: "Pre-Practice/Wisdom",
            canClick: true,
            onClick() {
                if (!confirm("Your current progress will not be saved!"))
                    return;
                importSave("eyJ0YWIiOiJvcHRpb25zLXRhYiIsIm5hdlRhYiI6InRyZWUtdGFiIiwidGltZSI6MTY5ODc1MTI4MTg5Nywibm90aWZ5Ijp7fSwidmVyc2lvblR5cGUiOiJBVEpUQVQiLCJ2ZXJzaW9uIjoiMC4yMiIsInRpbWVQbGF5ZWQiOjExODA5Ljc0NTAwMDAwMDE2Mywia2VlcEdvaW5nIjpmYWxzZSwiaGFzTmFOIjpmYWxzZSwicG9pbnRzIjoiMTAxNjMxMzE3NDI5MTExMC45Iiwic3VidGFicyI6eyJjaGFuZ2Vsb2ctdGFiIjp7fSwicCI6eyJtYWluVGFicyI6IkJ1eWFibGVzIn0sImkiOnsibWFpblRhYnMiOiJNYWluIn0sImMiOnsibWFpblRhYnMiOiJTdWItQ29udHJvbCJ9LCJrIjp7Im1haW5UYWJzIjoiTWFpbiJ9LCJhIjp7Im1haW5UYWJzIjoiQWNoaWV2ZW1lbnRzIn0sImwiOnsibWFpblRhYnMiOiJNYWluIn0sInByIjp7Im1haW5UYWJzIjoiTWFpbiJ9LCJ3Ijp7Im1haW5UYWJzIjoiTWFpbiJ9fSwibGFzdFNhZmVUYWIiOiJjIiwiaW5mb2JveGVzIjp7ImwiOnsieWVhaCI6ZmFsc2V9fSwiaW5mby10YWIiOnsidW5sb2NrZWQiOnRydWUsInRvdGFsIjoiMCIsImJlc3QiOiIwIiwicmVzZXRUaW1lIjoxMTgwOS43NDUwMDAwMDAxNjMsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6W10sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifSwib3B0aW9ucy10YWIiOnsidW5sb2NrZWQiOnRydWUsInRvdGFsIjoiMCIsImJlc3QiOiIwIiwicmVzZXRUaW1lIjoxMTgwOS43NDUwMDAwMDAxNjMsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6W10sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifSwiY2hhbmdlbG9nLXRhYiI6eyJ1bmxvY2tlZCI6dHJ1ZSwidG90YWwiOiIwIiwiYmVzdCI6IjAiLCJyZXNldFRpbWUiOjExODA5Ljc0NTAwMDAwMDE2MywiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbXSwibWlsZXN0b25lcyI6W10sImxhc3RNaWxlc3RvbmUiOm51bGwsImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiJ9LCJhIjp7InVubG9ja2VkIjp0cnVlLCJwb2ludHMiOiI2IiwidG90YWwiOiIwIiwiYmVzdCI6IjYiLCJyZXNldFRpbWUiOjEwOTg5LjgwMDAwMDAwMDMyMywiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbXSwibWlsZXN0b25lcyI6W10sImxhc3RNaWxlc3RvbmUiOm51bGwsImFjaGlldmVtZW50cyI6WyIxMSIsIjEyIiwiMTMiLCIxNCIsIjE1IiwiMTYiXSwiY2hhbGxlbmdlcyI6e30sImdyaWQiOnt9LCJwcmV2VGFiIjoiIn0sImwiOnsidW5sb2NrZWQiOmZhbHNlLCJwb2ludHMiOiIwIiwidG90YWwiOiIwIiwiYmVzdCI6IjAiLCJyZXNldFRpbWUiOjM3NjQuMzM4OTk5OTk5OTc4LCJmb3JjZVRvb2x0aXAiOmZhbHNlLCJidXlhYmxlcyI6e30sIm5vUmVzcGVjQ29uZmlybSI6ZmFsc2UsImNsaWNrYWJsZXMiOnt9LCJzcGVudE9uQnV5YWJsZXMiOiIwIiwidXBncmFkZXMiOltdLCJtaWxlc3RvbmVzIjpbXSwibGFzdE1pbGVzdG9uZSI6bnVsbCwiYWNoaWV2ZW1lbnRzIjpbXSwiY2hhbGxlbmdlcyI6e30sImdyaWQiOnt9LCJwcmV2VGFiIjoiIiwidW5sb2NrT3JkZXIiOjB9LCJwIjp7InVubG9ja2VkIjp0cnVlLCJwb2ludHMiOiIxMDg0OTYyODkxNyIsInRvdGFsIjoiMTE5NjA3NDAwMjciLCJiZXN0IjoiMTA4NDk2Mjg5MTciLCJyZXNldFRpbWUiOjM2MzUuOTk1OTk5OTk5OTc3NCwiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnsiMTEiOiI5IiwiMTIiOiIwIn0sIm5vUmVzcGVjQ29uZmlybSI6ZmFsc2UsImNsaWNrYWJsZXMiOnt9LCJzcGVudE9uQnV5YWJsZXMiOiIwIiwidXBncmFkZXMiOlsxMSwxMiwxMywyMSwyMiwyMywxMSwxMiwxMywyMSwyMiwyMywxMSwxMiwxMywyMSwyMiwyMywxMSwxMiwxMywyMSwyMiwyMywxMSwxMiwxMywyMSwyMiwyMywxMSwxMiwxMywyMSwyMiwyMywxMSwxMiwxMywyMSwyMiwyMywxMSwxMiwxMywyMSwyMiwyMywxMSwxMiwxMywyMSwyMiwyMywxMSwxMiwxMywyMSwyMiwyMywxMSwxMiwxMywyMSwyMiwyMywxMSwxMiwxMywyMSwyMiwyMywxMSwxMiwxMywyMSwyMiwyMywxMSwxMiwxMywyMSwyMiwyMywxMSwxMiwxMywyMSwyMiwyMywxMSwxMiwxMywyMSwyMiwyMywxMSwxMiwxMywyMSwyMiwyMywxMSwxMiwxMywyMSwyMiwyMywxMSwxMiwxMywyMSwyMiwyMywxMSwxMiwxMywyMSwyMiwyMywxMSwxMiwxMywyMSwyMiwyMywxMSwxMiwxMywyMSwyMiwyMywxMSwxMiwxMywyMSwyMiwyMywxMSwxMiwxMywyMSwyMiwyMywxMSwxMiwxMywyMSwyMiwyMywxMSwxMiwxMywyMSwyMiwyMywxMSwxMiwxMywyMSwyMiwyMywxMSwxMiwxMywyMSwyMiwyMywxMSwxMiwxMywyMSwyMiwyMywxMSwxMiwxMywyMSwyMiwyMywxMSwxMiwxMywyMSwyMiwyMywxMSwxMiwxMywyMSwyMiwyMywxMSwxMiwxMywyMSwyMiwyMywxMSwxMiwxMywyMSwyMiwyMywxMSwxMiwxMywyMSwyMiwyMywxMSwxMiwxMywyMSwyMiwyMywxMSwxMiwxMywyMSwyMiwyMywxMSwxMiwxMywyMSwyMiwyMywxMSwxMiwxMywyMSwyMiwyMywxMSwxMiwxMywyMSwyMiwyMywxMSwxMiwxMywyMSwyMiwyMywxMSwxMiwxMywyMSwyMiwyMywxMSwxMiwxMywyMSwyMiwyMywxMSwxMiwxMywyMSwyMiwyMywxMSwxMiwxMywyMSwyMiwyM10sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIiLCJhY3RpdmVDaGFsbGVuZ2UiOm51bGx9LCJpIjp7InVubG9ja2VkIjp0cnVlLCJwb2ludHMiOiIyNTUyNzAiLCJ1bmxvY2tPcmRlciI6MSwidG90YWwiOiIyNTUyNzAiLCJiZXN0IjoiMjU1MjcwIiwicmVzZXRUaW1lIjozNjQzLjYzNzk5OTk5OTk3NywiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbMTEsMTIsMTMsMjEsMjIsMjMsMTEsMTIsMTMsMjEsMjIsMjMsMTEsMTIsMTMsMjEsMjIsMjMsMTEsMTIsMTMsMjEsMjIsMjMsMTEsMTIsMTMsMjEsMjIsMjMsMTEsMTIsMTMsMjEsMjIsMjMsMTEsMTIsMTMsMjEsMjIsMjMsMTEsMTIsMTMsMjEsMjIsMjMsMTEsMTIsMTMsMjEsMjIsMjMsMTEsMTIsMTMsMjEsMjIsMjMsMTEsMTIsMTMsMjEsMjIsMjNdLCJtaWxlc3RvbmVzIjpbIjAiLCIxIl0sImxhc3RNaWxlc3RvbmUiOiIxIiwiYWNoaWV2ZW1lbnRzIjpbXSwiY2hhbGxlbmdlcyI6eyIxMSI6MX0sImdyaWQiOnt9LCJwcmV2VGFiIjoiIiwiYWN0aXZlQ2hhbGxlbmdlIjpudWxsfSwiYyI6eyJ1bmxvY2tlZCI6dHJ1ZSwicG9pbnRzIjoiOTg5MjAyMzUiLCJ1bmxvY2tPcmRlciI6MCwic3ViQ29udHJvbCI6IjE4MTY5MDc0ODgyMy4xMzY1IiwidG90YWwiOiIxMDg5MjAyMzUiLCJiZXN0IjoiOTg5MjAyMzUiLCJyZXNldFRpbWUiOjM2NjYuMzQ2OTk5OTk5OTc3LCJmb3JjZVRvb2x0aXAiOmZhbHNlLCJidXlhYmxlcyI6e30sIm5vUmVzcGVjQ29uZmlybSI6ZmFsc2UsImNsaWNrYWJsZXMiOnt9LCJzcGVudE9uQnV5YWJsZXMiOiIwIiwidXBncmFkZXMiOlsxMSwxMiwxMywyMSwyMiwyMywxMSwxMiwxMywyMSwyMiwyMywxMSwxMiwxMywyMSwyMiwyMywxMSwxMiwxMywyMSwyMiwyMywxMSwxMiwxMywyMSwyMiwyMywxMSwxMiwxMywyMSwyMiwyMywxMSwxMiwxMywyMSwyMiwyMywxMSwxMiwxMywyMSwyMiwyMywxMSwxMiwxMywyMSwyMiwyMywzMSwxMSwxMiwxMywyMSwyMiwyMywxMSwxMiwxMywyMSwyMiwyM10sIm1pbGVzdG9uZXMiOlsiMCIsIjEiXSwibGFzdE1pbGVzdG9uZSI6IjEiLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIiLCJhY3RpdmVDaGFsbGVuZ2UiOm51bGx9LCJrIjp7InVubG9ja2VkIjp0cnVlLCJwb2ludHMiOiIzNCIsImJlc3QiOiIzNCIsInRvdGFsIjoiOTAiLCJyZXNldFRpbWUiOjM3NDkuNTQ0OTk5OTk5OTc4MiwiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbMTEsMTIsMTMsMjFdLCJtaWxlc3RvbmVzIjpbIjAiLCIxIiwiMiJdLCJsYXN0TWlsZXN0b25lIjoiMiIsImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiIsImFjdGl2ZUNoYWxsZW5nZSI6bnVsbH0sInByIjp7InVubG9ja2VkIjpmYWxzZSwicG9pbnRzIjoiMCIsInVubG9ja09yZGVyIjowLCJiZXN0IjoiMCIsInRvdGFsIjoiMCIsInJlc2V0VGltZSI6MTE4MDkuNzQ1MDAwMDAwMTYzLCJmb3JjZVRvb2x0aXAiOmZhbHNlLCJidXlhYmxlcyI6e30sIm5vUmVzcGVjQ29uZmlybSI6ZmFsc2UsImNsaWNrYWJsZXMiOnsiMTEiOiIifSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbXSwibWlsZXN0b25lcyI6W10sImxhc3RNaWxlc3RvbmUiOm51bGwsImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiIsInByYWN0aWNlVG9rZW4iOiIwIiwicHRDYXAiOiIxMDAifSwidyI6eyJ1bmxvY2tlZCI6ZmFsc2UsInBvaW50cyI6IjAiLCJ1bmxvY2tPcmRlciI6MCwiYmVzdCI6IjAiLCJ0b3RhbCI6IjAiLCJyZXNldFRpbWUiOjExODA5Ljc0NTAwMDAwMDE2MywiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbXSwibWlsZXN0b25lcyI6W10sImxhc3RNaWxlc3RvbmUiOm51bGwsImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiIsIndpc2RvbUNvaW5zIjoiMCIsIndjR2FpbiI6IjAifSwiYmxhbmsiOnsidW5sb2NrZWQiOnRydWUsInRvdGFsIjoiMCIsImJlc3QiOiIwIiwicmVzZXRUaW1lIjoxMTgwOS43NDUwMDAwMDAxNjMsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6W10sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifSwidHJlZS10YWIiOnsidW5sb2NrZWQiOnRydWUsInRvdGFsIjoiMCIsImJlc3QiOiIwIiwicmVzZXRUaW1lIjoxMTgwOS43NDUwMDAwMDAxNjMsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6W10sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifX0")
            },
            style() {
                return {
                    "background": "linear-gradient(#B5DA44, #F9C3FF)"
                }
            },
        },
        13: {
            title: "Learning",
            display: "Pre-Learning",
            canClick: true,
            onClick() {
                if (!confirm("Your current progress will not be saved!"))
                    return;
                importSave("eyJ0YWIiOiJvcHRpb25zLXRhYiIsIm5hdlRhYiI6InRyZWUtdGFiIiwidGltZSI6MTY5OTUzMDk4NDQxNiwibm90aWZ5Ijp7fSwidmVyc2lvblR5cGUiOiJBVEpUQVQiLCJ2ZXJzaW9uIjoiMC4yMyIsInRpbWVQbGF5ZWQiOjg2NjA2LjQzMTAwMDAwMTgzLCJrZWVwR29pbmciOnRydWUsImhhc05hTiI6ZmFsc2UsInBvaW50cyI6IjEuNzIzMTI2NjkyMjcyODk1OGUxMDEiLCJzdWJ0YWJzIjp7ImNoYW5nZWxvZy10YWIiOnt9LCJwIjp7Im1haW5UYWJzIjoiQnV5YWJsZXMifSwiaSI6eyJtYWluVGFicyI6Ik1haW4ifSwiYyI6eyJtYWluVGFicyI6IlN1Yi1Db250cm9sIn0sImsiOnsibWFpblRhYnMiOiJNYWluIn0sImEiOnsibWFpblRhYnMiOiJBY2hpZXZlbWVudHMifSwibCI6eyJtYWluVGFicyI6Ik1haW4ifSwicHIiOnsibWFpblRhYnMiOiJQcmFjdGljZSBUb2tlbnMifSwidyI6eyJtYWluVGFicyI6Ik1haW4ifSwibG8iOnsibWFpblRhYnMiOiJMb3JlIn0sIlNWIjp7Im1haW5UYWJzIjoiU2F2ZWJhbmsifX0sImxhc3RTYWZlVGFiIjoibCIsImluZm9ib3hlcyI6eyJsIjp7InllYWgiOmZhbHNlfSwibG8iOnsieWVhaCI6ZmFsc2V9fSwiaW5mby10YWIiOnsidW5sb2NrZWQiOnRydWUsInRvdGFsIjoiMCIsImJlc3QiOiIwIiwicmVzZXRUaW1lIjo0NzYzNjExLjk2ODAwMDEyMDUsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6W10sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifSwib3B0aW9ucy10YWIiOnsidW5sb2NrZWQiOnRydWUsInRvdGFsIjoiMCIsImJlc3QiOiIwIiwicmVzZXRUaW1lIjo0NzYzNjExLjk2ODAwMDEyMDUsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6W10sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifSwiY2hhbmdlbG9nLXRhYiI6eyJ1bmxvY2tlZCI6dHJ1ZSwidG90YWwiOiIwIiwiYmVzdCI6IjAiLCJyZXNldFRpbWUiOjQ3NjM2MTEuOTY4MDAwMTIwNSwiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbXSwibWlsZXN0b25lcyI6W10sImxhc3RNaWxlc3RvbmUiOm51bGwsImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiJ9LCJhIjp7InVubG9ja2VkIjp0cnVlLCJwb2ludHMiOiI4IiwidG90YWwiOiIwIiwiYmVzdCI6IjgiLCJyZXNldFRpbWUiOjQ3NjI3OTIuMDIzMDAwMTIsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6W10sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOlsiMTEiLCIxMiIsIjEzIiwiMTQiLCIxNSIsIjE2IiwiMTciLCIyMSJdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifSwibG8iOnsidW5sb2NrZWQiOnRydWUsInBvaW50cyI6IjAiLCJ0b3RhbCI6IjAiLCJiZXN0IjoiMCIsInJlc2V0VGltZSI6NDc1MTgwMi4yMjMwMDAxMiwiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbXSwibWlsZXN0b25lcyI6W10sImxhc3RNaWxlc3RvbmUiOm51bGwsImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiJ9LCJTViI6eyJ1bmxvY2tlZCI6dHJ1ZSwicG9pbnRzIjoiMCIsInRvdGFsIjoiMCIsImJlc3QiOiIwIiwicmVzZXRUaW1lIjoxOTMuOTg1LCJmb3JjZVRvb2x0aXAiOmZhbHNlLCJidXlhYmxlcyI6e30sIm5vUmVzcGVjQ29uZmlybSI6ZmFsc2UsImNsaWNrYWJsZXMiOnsiMTEiOiIiLCIxMiI6IiIsIjEzIjoiIn0sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6W10sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifSwicCI6eyJ1bmxvY2tlZCI6dHJ1ZSwicG9pbnRzIjoiNS45ODQ2NTE4MDk4MTMxMDFlNzYiLCJ0b3RhbCI6IjEuNDg1NzY1MTgxNjUxMTg3MmU3OCIsImJlc3QiOiIxLjAxNzYwMDQzMjkxNjU5NDllNzgiLCJyZXNldFRpbWUiOjUxLjU1MTk5OTk5OTk5OTgzNiwiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnsiMTEiOiI2NSIsIjEyIjoiMjYifSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6WzMyLDMzLDQxLDExLDEyLDEzLDIxLDIyLDIzLDMxXSwibWlsZXN0b25lcyI6W10sImxhc3RNaWxlc3RvbmUiOm51bGwsImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiIsImFjdGl2ZUNoYWxsZW5nZSI6bnVsbH0sImkiOnsidW5sb2NrZWQiOnRydWUsInBvaW50cyI6IjYuNDIxNjUxNzg4NDY2NjgyZTQ4IiwidW5sb2NrT3JkZXIiOjAsInRvdGFsIjoiNi40MjE2NTE3ODg0NjY2ODJlNDgiLCJiZXN0IjoiNi40MjE2NTE3ODg0NjY2ODJlNDgiLCJyZXNldFRpbWUiOjUxLjU1MTk5OTk5OTk5OTgzNiwiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbMTEsMTIsMTMsMjEsMjIsMjNdLCJtaWxlc3RvbmVzIjpbIjAiLCIxIl0sImxhc3RNaWxlc3RvbmUiOiIxIiwiYWNoaWV2ZW1lbnRzIjpbXSwiY2hhbGxlbmdlcyI6eyIxMSI6MX0sImdyaWQiOnt9LCJwcmV2VGFiIjoiIiwiYWN0aXZlQ2hhbGxlbmdlIjpudWxsfSwiYyI6eyJ1bmxvY2tlZCI6dHJ1ZSwicG9pbnRzIjoiMS45MTg5MTE4NTE2ODE1NzI2ZTY0IiwidW5sb2NrT3JkZXIiOjAsInN1YkNvbnRyb2wiOiI1LjU1NjQ3NDgyMzU1MjQ1N2U2NCIsInRvdGFsIjoiMS45MTg5MTE4NTE2ODE1NzI2ZTY0IiwiYmVzdCI6IjEuOTE4OTExODUxNjgxNTcyNmU2NCIsInJlc2V0VGltZSI6NTEuNTUxOTk5OTk5OTk5ODM2LCJmb3JjZVRvb2x0aXAiOmZhbHNlLCJidXlhYmxlcyI6e30sIm5vUmVzcGVjQ29uZmlybSI6ZmFsc2UsImNsaWNrYWJsZXMiOnt9LCJzcGVudE9uQnV5YWJsZXMiOiIwIiwidXBncmFkZXMiOlsxMSwxMiwxMywyMSwyMiwyMywzMV0sIm1pbGVzdG9uZXMiOlsiMCIsIjEiXSwibGFzdE1pbGVzdG9uZSI6IjEiLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIiLCJhY3RpdmVDaGFsbGVuZ2UiOm51bGx9LCJrIjp7InVubG9ja2VkIjp0cnVlLCJwb2ludHMiOiI2MzUyODA0NDMiLCJiZXN0IjoiNjM1MjgwNDQzIiwidG90YWwiOiI2MzUyODA0OTkiLCJyZXNldFRpbWUiOjUxLjU1MTk5OTk5OTk5OTgzNiwiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbMTEsMTIsMTMsMjEsMzFdLCJtaWxlc3RvbmVzIjpbIjAiLCIxIiwiMiJdLCJsYXN0TWlsZXN0b25lIjoiMiIsImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiIsImFjdGl2ZUNoYWxsZW5nZSI6bnVsbH0sInByIjp7InVubG9ja2VkIjp0cnVlLCJwb2ludHMiOiI5OTk3MCIsInVubG9ja09yZGVyIjoxLCJiZXN0IjoiMSIsInRvdGFsIjoiMTAwMDAwIiwicmVzZXRUaW1lIjoyMzgzNjYyLjcyMDk5OTkyNSwiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7IjExIjoiIn0sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6WzExLDEyLDEzLDMxLDMyLDMzLDIxLDIyXSwibWlsZXN0b25lcyI6W10sImxhc3RNaWxlc3RvbmUiOm51bGwsImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiIsInByYWN0aWNlVG9rZW4iOiI1MDAiLCJwdENhcCI6IjUwMCJ9LCJ3Ijp7InVubG9ja2VkIjp0cnVlLCJwb2ludHMiOiIyMzU1NzkiLCJ1bmxvY2tPcmRlciI6MCwiYmVzdCI6IjIzNTY3OSIsInRvdGFsIjoiMjM1NjgyIiwicmVzZXRUaW1lIjozNDMxNjIuNzIxMDAwMDAxNCwiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbMTEsMTIsMjEsMzEsMzIsNDEsNTEsNTIsNTMsMTNdLCJtaWxlc3RvbmVzIjpbIjAiXSwibGFzdE1pbGVzdG9uZSI6IjAiLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIiLCJ3aXNkb21Db2lucyI6IjQ0NjQyMzIxNTM0Mi44OTE2NiIsIndjR2FpbiI6IjY5NDQ4Mi43Njg2MzcwMDcxIn0sImwiOnsidW5sb2NrZWQiOmZhbHNlLCJwb2ludHMiOiIwIiwidG90YWwiOiIwIiwiYmVzdCI6IjAiLCJyZXNldFRpbWUiOjQ3NTU1NjYuNTYyMDAwMTIsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6W10sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIiLCJ1bmxvY2tPcmRlciI6MH0sImJsYW5rIjp7InVubG9ja2VkIjp0cnVlLCJ0b3RhbCI6IjAiLCJiZXN0IjoiMCIsInJlc2V0VGltZSI6NDc2MzYxMS45NjgwMDAxMjA1LCJmb3JjZVRvb2x0aXAiOmZhbHNlLCJidXlhYmxlcyI6e30sIm5vUmVzcGVjQ29uZmlybSI6ZmFsc2UsImNsaWNrYWJsZXMiOnt9LCJzcGVudE9uQnV5YWJsZXMiOiIwIiwidXBncmFkZXMiOltdLCJtaWxlc3RvbmVzIjpbXSwibGFzdE1pbGVzdG9uZSI6bnVsbCwiYWNoaWV2ZW1lbnRzIjpbXSwiY2hhbGxlbmdlcyI6e30sImdyaWQiOnt9LCJwcmV2VGFiIjoiIn0sInRyZWUtdGFiIjp7InVubG9ja2VkIjp0cnVlLCJ0b3RhbCI6IjAiLCJiZXN0IjoiMCIsInJlc2V0VGltZSI6NDc2MzYxMS45NjgwMDAxMjA1LCJmb3JjZVRvb2x0aXAiOmZhbHNlLCJidXlhYmxlcyI6e30sIm5vUmVzcGVjQ29uZmlybSI6ZmFsc2UsImNsaWNrYWJsZXMiOnt9LCJzcGVudE9uQnV5YWJsZXMiOiIwIiwidXBncmFkZXMiOltdLCJtaWxlc3RvbmVzIjpbXSwibGFzdE1pbGVzdG9uZSI6bnVsbCwiYWNoaWV2ZW1lbnRzIjpbXSwiY2hhbGxlbmdlcyI6e30sImdyaWQiOnt9LCJwcmV2VGFiIjoiIn0sImRldlNwZWVkIjoxfQ==")
            },
            style() {
                return {
                    'background-color': tmp.l.color,
                }
            },
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
        if (hasUpgrade('pr', 12)) {
            buyBuyable('p', 11)
            buyBuyable('p', 12)
        }
    },
    passiveGeneration() {
        if (hasUpgrade('pr', 31)) return 0.05  
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
        if (hasUpgrade('l', 12)) mult = mult.times(upgradeEffect('l', 12))
        if (hasUpgrade('p', 41)) mult = mult.times(3.35)
        if (hasUpgrade('w', 41)) mult = mult.times(upgradeEffect('w', 41))
        if (player.w.unlocked) mult = mult.pow(tmp.w.effect)
        if (hasUpgrade('pr', 22)) mult = mult.times(upgradeEffect('pr', 22))
        if (player.pr.unlocked) mult = mult.times(tmp.pr.effect)
        if ((hasChallenge('i', 11)) && (hasUpgrade('k', 12))) mult = mult.times(challengeEffect('i', 11))
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
        if (hasMilestone("w",0)) extraUpgrades.push(32,33,41);
        if (hasMilestone("k",0)) extraUpgrades.push(11,12,13);
        if (hasMilestone("k",1)) extraUpgrades.push(21,22,23,31);
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
        {
            key: "p",
            description: "P: Reset for power points",
            onPress(){if (canReset(this.layer)) doReset(this.layer)},
            unlocked() {return player[this.layer].unlocked},
        },
    ],
    buyables: {
        11: {
            title: "Power Buyable 1",
            cost(x) {
                let Calculation = new Decimal(10).mul(new Decimal(10).pow(x))
                if (getBuyableAmount(this.layer, this.id).gte(30)) Calculation = softcap(Calculation, new Decimal(100), 1.1)
                return Calculation
            },
            display() {
                if (getBuyableAmount(this.layer, this.id).gte(30)) return `Double point gain everytime.\nLevel: ${format(getBuyableAmount(this.layer, this.id))}\nCost: ${format(this.cost())} (softcapped)\nEffect: ${format(this.effect())}x points`
                return `Double point gain everytime.\nLevel: ${format(getBuyableAmount(this.layer, this.id))}\nCost: ${format(this.cost())}\nEffect: ${format(this.effect())}x points`
            },
            canAfford() {return player.p.points.gte(this.cost())},
            buy() {
                player.p.points = player.p.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            unlocked(){return hasUpgrade("k",11)},
            effect(x) {
              mult2 = new Decimal(2).pow(x)
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
                if ((hasUpgrade('p',11))||player.i.unlocked||player.c.unlocked) return true
            },
        },
        13: {
            title: "Power 3",
            description: "1.75x Points.",
            cost: new Decimal(4),
            unlocked() {
                if ((hasUpgrade('p',12))||player.i.unlocked||player.c.unlocked) return true
            },
        },
        21: {
            title: "Power 4",
            description: "2x Power Points.",
            cost: new Decimal(6),
            unlocked() {
                if ((hasUpgrade('p',13))||player.i.unlocked||player.c.unlocked) return true
            },
        },
        22: {
            title: "Power 5",
            description: "2.25x Points.",
            cost: new Decimal(10),
            unlocked() {
                if ((hasUpgrade('p',21))||player.i.unlocked||player.c.unlocked) return true
            },
        },
        23: {
            title: "Power 6",
            description: "1.35x Points.",
            cost: new Decimal(20),
            unlocked() {
                if ((hasUpgrade('p',22))||player.i.unlocked||player.c.unlocked) return true
            },
        },
        31: {
            title: "Power 7",
            description: "Unlock new content.",
            cost: new Decimal(20000),
            unlocked() {
                if ((hasUpgrade('i', 23)) && (hasUpgrade('c', 23)) && (hasUpgrade('p', 23))||player.i.unlocked||player.c.unlocked) return true
            },
        },
        32: {
            title: "Power 8",
            description: "Double Intensity and Control point gain.",
            cost: new Decimal("3e10"),
            unlocked() {
                if (((hasUpgrade('w', 11)) && (hasUpgrade('p', 31)))||player.w.unlocked) return true
            },
        },
        33: {
            title: "Power 9",
            description: "2.75x Points.",
            cost: new Decimal("3e12"),
            unlocked() {
                if (hasUpgrade('p', 32)||player.w.unlocked) return true
            },
        },
        41: {
            title: "Power 10",
            description: "3.35x Power Points.",
            cost: new Decimal("3e14"),
            unlocked() {
                if (hasUpgrade('p', 33)||player.w.unlocked) return true
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
    passiveGeneration() {
        if (hasUpgrade('pr', 13)) return 0.01
    },
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
        if (hasUpgrade('l', 12)) mult = mult.times(upgradeEffect('l', 12))
        if (hasUpgrade('p', 32)) mult = mult.times(2)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {
            key: "i",
            description: "I: Reset for intensity points",
            onPress(){if (canReset(this.layer)) doReset(this.layer)},
            unlocked() {return player[this.layer].unlocked},
        },
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
                ["display-text",
                    function() { 
                       if (player.i.total.eq(1)) return 'Your total intensity points is ' + format(player.i.total) 
                       else return 'Your total intensity points are ' + format(player.i.total) 
                    },
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
            goalDescription: "1e12 points",
            rewardEffect() {
                return player.k.points.add(1).pow(0.75)
            },
            rewardDisplay() { return format(challengeEffect(this.layer, this.id))+"*" },
            canComplete: function() {return player.points.gte(1e12)},
        },
    },
    milestones: {
        0: {
            requirementDescription: "2 total intensity points",
            done() {if (player[this.layer].total.gte(2)) return true},
            effectDescription: "Keeps the first row of Power Upgrades.",
            },
        1: {
            requirementDescription: "12 total intensity points",
            done() {if (player[this.layer].total.gte(12)) return true},
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
                if (hasUpgrade('i', 11)||player.k.unlocked) return true
            },
        },
        13: {
            title: "Intensity 3",
            description: "Intensity Points boosts Points.",
            cost: new Decimal(3),
            effect() {
                return player[this.layer].points.add(1).pow(0.3)
            },
            tooltip: "(Intensity)+1^0.3",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"*" }, // Add formatting to the effect
            unlocked() {
                if (hasUpgrade('i', 12)||player.k.unlocked) return true
            },
        },
        21: {
            title: "Intensity 4",
            description: "Power Points boosts Power Points.",
            cost: new Decimal(4),
            effect() {
                return player.p.points.add(1).pow(0.1)
            },
            tooltip: "(Power)+1^0.1",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"*" },
            unlocked() {
                if (hasUpgrade('i', 13)||player.k.unlocked) return true
            },
        },
        22: {
            title: "Intensity 5",
            description: "2.5x Points.",
            cost: new Decimal(6),
            unlocked() {
                if (hasUpgrade('i', 21)||player.k.unlocked) return true
            },
        },
        23: {
            title: "Intensity 6",
            description: "Power Points boosts Points.",
            cost: new Decimal(8),
            effect() {
                return player.p.points.add(1).pow(0.1)
            },
            tooltip: "(Power)+1^0.1",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"*" },
            unlocked() {
                if (hasUpgrade('i', 22)||player.k.unlocked) return true
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
    passiveGeneration() {
        if (hasUpgrade('w', 13)) return 0.01
    },
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
        if (hasUpgrade('c', 33)) mult = mult.times(upgradeEffect('c', 33))
        if (hasUpgrade('l', 12)) mult = mult.times(upgradeEffect('l', 12))
        if (hasUpgrade('c', 22)) mult = mult.times(upgradeEffect('c', 22))
        if (hasUpgrade('p', 32)) mult = mult.times(2)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {
            key: "c",
            description: "C: Reset for control points",
            onPress(){if (canReset(this.layer)) doReset(this.layer)},
            unlocked() {return player[this.layer].unlocked},
        },
    ],
    layerShown() { return hasUpgrade('p', 23) || player[this.layer].unlocked || player.i.unlocked },
    unlocked() {
        return hasUpgrade('p', 23)
    },
    effectDescription: function(){if (hasUpgrade('k', 13)) return " which gives " + format(new Decimal.pow(player.c.points,0.5)) + " Sub-Control every second." },
    update(diff) {
        let gain = new Decimal(0)
        if (hasUpgrade('k', 13)) gain = new Decimal.pow(player.c.points,0.5)
        if (hasUpgrade('c', 32)) gain = gain.times(upgradeEffect('c', 32))
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
                ["display-text",
                    function() { 
                       if (player.c.total.eq(1)) return 'Your total control points is ' + format(player.c.total) 
                       else return 'Your total control points are ' + format(player.c.total) 
                    },
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
            requirementDescription: "2 total control points",
            done() {if (player[this.layer].total.gte(2)) return true},
            effectDescription: "Keeps the first row of Power Upgrades.",
            },
        1: {
            requirementDescription: "12 total control points",
            done() {if (player[this.layer].total.gte(12)) return true},
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
                if (hasUpgrade('c', 11)||player.k.unlocked) return true
            },
        },
        13: {
            title: "Control 3",
            description: "2.15x Points.",
            cost: new Decimal(3),
            unlocked() {
                if (hasUpgrade('c', 12)||player.k.unlocked) return true
            },
        },
        21: {
            title: "Control 4",
            description: "Points boosts Points.",
            cost: new Decimal(5),
            effect() {
                return player.points.add(1).pow(0.15)
            },
            tooltip: "(Points)+1^0.15",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"*" },
            unlocked() {
                if (hasUpgrade('c', 13)||player.k.unlocked) return true
            },
        },
        22: {
            title: "Control 5",
            description: "Power Points boosts Control Points.",
            cost: new Decimal(7),
            effect() {
                return player.p.points.add(1).pow(0.2)
            },
            tooltip: "(Power)+1^0.2",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"*" },
            unlocked() {
                if (hasUpgrade('c', 21)||player.k.unlocked) return true
            },
        },
        23: {
            title: "Control 6",
            description: "Control Points boosts Points.",
            cost: new Decimal(12),
            effect() {
                return player.c.points.add(1).pow(0.3)
            },
            tooltip: "(Control)+1^0.3",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"*" },
            unlocked() {
                if (hasUpgrade('c', 22)||player.k.unlocked) return true
            },
        },
        31: {
            title: "Sub-Control 1",
            description: "Sub-Control boosts Points.",
            cost: new Decimal(100000),
            currencyDisplayName: "Sub-Control points",
            currencyInternalName: "subControl",
            currencyLayer: "c",
            effect() {
                return player.c.subControl.add(1).log(200)
            },
            tooltip: "log200((Sub-Control)+1)",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"*" },
            unlocked() {
                if (hasUpgrade('k', 13)||player.k.unlocked) return true
            },
        },
        32: {
            title: "Sub-Control 2",
            description: "Let Points boost Sub-Control.",
            cost: new Decimal(1e9),
            currencyDisplayName: "Sub-Control points",
            currencyInternalName: "subControl",
            currencyLayer: "c",
            effect() {
                return player.points.add(1).log(10000)
            },
            tooltip: "log10000((Points)+1)",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"*" },
            unlocked() {
                if (((hasUpgrade('l', 22)) && (hasUpgrade('c', 31)))||((hasUpgrade('l', 22)) && (hasUpgrade('c', 31) && player.l.unlocked))) return true
            },
        },
        33: {
            title: "Sub-Control 3",
            description: "Let Sub-Control boost Control Points.",
            cost: new Decimal(1e12),
            currencyDisplayName: "Sub-Control points",
            currencyInternalName: "subControl",
            currencyLayer: "c",
            effect() {
                return player.c.subControl.add(1).log(1000)
            },
            tooltip: "log1000((Wisdom Coins)+1)",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"*" },
            unlocked() {
                if (hasUpgrade('c', 32)||(hasUpgrade('c', 32) && player.l.unlocked)) return true
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
        total: new Decimal(0),
    }},
    color: "#B66EFF",
    requires() { return new Decimal(500000) }, // Can be a function that takes requirement increases into account
    resource: "knowledge points", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    branches: ["i", "c"],
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent() {
        if (player.k.points.gte("1e7")) return 0.08
        else return 0.1
    }, // Prestige currency exponent
    effect() {
        let eff = new Decimal(player[this.layer].best).add(1).pow(0.5)
        eff = softcap(eff, new Decimal("1e7"), new Decimal(0.5))
        return eff
    },
    effectDescription() {
        if (player.k.points.gte("1e7")) return "which bests' multiplies point gain by <h2 style='color:" + (tmp.k.color)+";text-shadow:0px 0px 10px;'>"+format(tmp.k.effect) + "*</h2>, which is softcapped by ^0.5."
        else return "which bests' multiplies point gain by <h2 style='color:" + (tmp.k.color)+";text-shadow:0px 0px 10px;'>"+format(tmp.k.effect) + "*</h2>."
    },
    gainMult() {
        let mult = new Decimal(1)
        if (hasUpgrade('l', 12)) mult = mult.times(upgradeEffect('l', 12))
        if (hasUpgrade('pr', 21)) mult = mult.times(2)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {
            key: "k",
            description: "K: Reset for knowledge points",
            onPress(){if (canReset(this.layer)) doReset(this.layer)},
            unlocked() {return player[this.layer].unlocked},
        },
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
                ["display-text",
                    function() { 
                        if (player.k.best.eq(1)) return 'Your best knowledge points is ' + format(player.k.best) 
                        else return 'Your best knowledge points are ' + format(player.k.best) 
                    },
                { "color": "white", "font-size": "16px" }],
                ["display-text",
                    function() { 
                       if (player.k.total.eq(1)) return 'Your total knowledge points is ' + format(player.k.total) 
                       else return 'Your total knowledge points are ' + format(player.k.total) 
                    },
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
            requirementDescription: "2 total knowledge points",
            done() {if (player[this.layer].total.gte(2)) return true},
            effectDescription: "Keeps the first row of Power Upgrades.",
            },
        1: {
            requirementDescription: "8 total knowledge points",
            done() {if (player[this.layer].total.gte(6)) return true},
            effectDescription: "Keeps the first row of Intensity and Control Upgrades.",
            unlocked() {if (hasMilestone('k', 0)) return true},
        },
        2: {
            requirementDescription: "15 total knowledge points",
            done() {if (player[this.layer].total.gte(15)) return true},
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
                if (hasUpgrade('k', 11)||player.l.unlocked) return true
            },
        },
        13: {
            title: "Knowledge 3",
            description: "Unlocks Sub-Control.",
            cost: new Decimal(15),
            unlocked() {
                if (hasUpgrade('k', 12)||player.l.unlocked) return true
            },
        },
        21: {
            title: "Knowledge 4",
            description: "Unlock new content.",
            cost: new Decimal(30),
            unlocked() {
                if (hasUpgrade('k', 13)||player.l.unlocked) return true
            },
        },
        31: {
            title: "Knowledge 5",
            description: "Unlock new content.",
            cost: new Decimal("1e75"),
            currencyDisplayName: "points",
            currencyInternalName: "points",
            currencyLocation() { return player },
            unlocked() {
                if (((hasUpgrade('pr', 33)) && (hasUpgrade('w', 53)))||player.l.unlocked) return true
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
        if (player[this.layer].unlockOrder === 1) return new Decimal(1e25)
        else return new Decimal(5e14)
    }, // Can be a function that takes requirement increases into account
    update() {
        if (hasUpgrade('pr', 33)) player.pr.ptCap = new Decimal(500)
        player.pr.practiceToken = player.pr.practiceToken.min(player.pr.ptCap)
    },
    resource: "practice points", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    branches: ["k", "w"],
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent() {
        if (player.pr.points.gte("5e4")) return 0.035
        else return 0.05
    }, // Prestige currency exponent
    effect() {
        let eff = new Decimal(player[this.layer].total).add(1).pow(0.3)
        eff = softcap(eff, new Decimal("5e4"), new Decimal(0.5))
        return eff
    },
    effectDescription() {
        if (player.pr.points.gte("5e4")) return "which the total multiplies power point gain by <h2 style='color:" + (tmp.pr.color)+";text-shadow:0px 0px 10px;'>"+format(tmp.pr.effect) + "*</h2>, which is softcapped by ^0.5."
        else return "which the total multiplies power point gain by <h2 style='color:" + (tmp.pr.color)+";text-shadow:0px 0px 10px;'>"+format(tmp.pr.effect) + "*</h2>."
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
                    function() { 
                        if (player.pr.total.eq(1)) return 'Your total practice points is ' + format(player.pr.total) 
                        else return 'Your total practice points are ' + format(player.pr.total) 
                    },
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
                return (hasUpgrade('pr', 32))
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
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {
            key: "R",
            description: "R: Reset for practice points",
            onPress(){if (canReset(this.layer)) doReset(this.layer)},
            unlocked() {return player[this.layer].unlocked},
        },
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
            onPurchase() {
                return player.lo.points = new Decimal(1)
            },
        },
        12: {
            title: "Practice 2",
            description: "Auto-buy the first two Power Buyables.",
            cost: new Decimal(2),
            unlocked() {
                if (hasUpgrade('pr', 11)||player.l.unlocked) return true
            },
        },
        13: {
            title: "Practice 3",
            description: "Passively generate 1% of Intensity Points that can be gained every second.",
            cost: new Decimal(4),
            unlocked() {
                if (hasUpgrade('pr', 12)||player.l.unlocked) return true
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
                if (hasUpgrade('pr', 32)||player.l.unlocked) return true
            },
        },
        22: {
            title: "Practice Token 2",
            description: "Let Practice Tokens boost Power Points.",
            cost: new Decimal(500),
            currencyDisplayName: "Practice Tokens",
            currencyInternalName: "practiceToken",
            currencyLayer: "pr",
            effect() {
                return player[this.layer].practiceToken.add(1).pow(0.2)
            },
            tooltip: "(Practice Tokens)+1^0.2",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"*" }, // Add formatting to the effect
            unlocked() {
                if (hasUpgrade('pr', 21)||player.l.unlocked) return true
            },
        },
        31: {
            title: "Practice 4",
            description: "Passively generate 5% of Power Points that can be gained every second.",
            cost: new Decimal(6),
            unlocked() {
                if (hasUpgrade('pr', 13)||player.l.unlocked) return true
            },
        },
        32: {
            title: "Practice 45",
            description: "Unlock a Clickable and Practice Tokens, and unlock the Practice Token sub-tab.",
            cost: new Decimal(8),
            unlocked() {
                if (hasUpgrade('pr', 31)||player.l.unlocked) return true
            },
        },
        33: {
            title: "Practice 6",
            description: "Boost points based on Practice Points, and increase Practice Token cap.",
            cost: new Decimal(10),
            effect() {
                return player[this.layer].points.add(1.25).pow(0.3)
            },
            tooltip: "(Practice)+1.25^0.3",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"*" }, // Add formatting to the effect
            unlocked() {
                if (hasUpgrade('pr', 32)||player.l.unlocked) return true
            },
        },
        },
        clickables: {
            11: {
                title: "Gain Practice Tokens",
                unlocked() {
                    if (hasUpgrade('pr', 32)) return true
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
        if (player[this.layer].unlockOrder === 1) return new Decimal(1e25)
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
        if (player.w.points.gte("1e5")) return "which the total exponentiates power point gain by <h2 style='color:" + (tmp.w.color)+";text-shadow:0px 0px 10px;'>"+format(tmp.w.effect) + "^</h2>, which is softcapped by ^0.5."
        else return "which the total exponentiates power point gain by <h2 style='color:" + (tmp.w.color)+";text-shadow:0px 0px 10px;'>"+format(tmp.w.effect) + "^</h2>."
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
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {
            key: "w",
            description: "W: Reset for wisdom points",
            onPress(){if (canReset(this.layer)) doReset(this.layer)},
            unlocked() {return player[this.layer].unlocked},
        },
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
                ["display-text",
                    function() { 
                        if (player.w.total.eq(1)) return 'Your total wisdom points is ' + format(player.w.total) 
                        else return 'Your total wisdom points are ' + format(player.w.total) 
                    },
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
    milestones: {
        0: {
            requirementDescription: "100 total wisdom points",
            done() {if (player[this.layer].total.gte(100)) return true},
            effectDescription: "Keeps the 3 new Power Upgrades.",
            unlocked() {return (hasUpgrade('w', 11))},
            },
    },
    upgrades: {
        11: {
            title: "Wisdom 1",
            description: "Add 3 more Power Upgrades, and multiply point gain by 2.",
            cost: new Decimal(1),
        },
        12: {
            title: "Wisdom 2",
            description: "Unlock the Wisdom Tree, unlock Wisdom Coins and generate 1 Wisdom Coin per second.",
            cost: new Decimal(1),
            unlocked() {
                if (hasUpgrade('w', 11)||player.l.unlocked) return true
            },
        },
        13: {
            title: "Wisdom 3",
            description: "Passively generate 1% of Control Points that can be gained every second.",
            cost: new Decimal(100),
            unlocked() {
                if ((hasUpgrade('w', 51)&&(hasUpgrade('w', 52))&&(hasUpgrade('w', 53)))||player.l.unlocked) return true
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
                if (hasUpgrade('w', 11)||player.l.unlocked) return true
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
            tooltip: "(Wisdom Coins)+1^0.2",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"*" }, // Add formatting to the effect
            unlocked() {
                if (hasUpgrade('w', 21)||player.l.unlocked) return true
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
            tooltip: "(Wisdom)+1^0.5",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"*" }, // Add formatting to the effect
            unlocked() {
                if (hasUpgrade('w', 21)||player.l.unlocked) return true
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
            tooltip: "(Wisdom Coins)+1^0.1",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"*" }, // Add formatting to the effect
            unlocked() {
                if (((hasUpgrade('w', 31)) && (hasUpgrade('w', 32)))||player.l.unlocked) return true
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
            tooltip: "(Wisdom Coins)+1^0.15",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"*" }, // Add formatting to the effect
            unlocked() {
                if ((hasUpgrade('w', 41))||player.l.unlocked) return true
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
            tooltip: "(Wisdom Reset Time+1^0.2",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"*" }, // Add formatting to the effect
            unlocked() {
                if ((hasUpgrade('w', 41))||player.l.unlocked) return true
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
            tooltip: "(Wisdom Coins)+1^0.135",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"*" }, // Add formatting to the effect
            unlocked() {
                if ((hasUpgrade('w', 41))||player.l.unlocked) return true
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
    color: "#909090",
    requires() {
        return new Decimal("1e100")
    }, // Can be a function that takes requirement increases into account
    resource: "learning points", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    branches: ["w", "pr", "k"],
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.001, // Prestige currency exponent
    gainMult() {
        let mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 4, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {
            key: "l",
            description: "L: Reset for learning points",
            onPress(){if (canReset(this.layer)) doReset(this.layer)},
            unlocked() {return player[this.layer].unlocked},
        },
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
            title: "Learning 11",
            description: "Point gain boosted based on total time spent.",
            cost: new Decimal(1),
            style() {
                if (player.l.points.gte(1)||tmp[this.layer].upgrades[this.id].unlocked)
                return {
                    "height": "150px",
                    "width": "150px",
                    "right": "50px",
                    }
            else return {
                "height": "150px",
                "width": "150px",
                }
            },
            effect() {
                return new Decimal(player.timePlayed).div(2).pow(0.3)
            },
            tooltip: "(Time Played)/2^0.3",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"*" }, // Add formatting to the effect
        },
        12: {
            title: "Learning 12",
            description: "Power, Intensity, Control and Knowledge point gain is boosted based on Learning points.",
            cost: new Decimal(1),
            style: {
                "height": "150px",
                "width": "150px",
                "right": "50px",
            },
            effect() {
                return player.l.points.add(2).pow(1.5)
            },
            tooltip: "(Learning)+2^1.5",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"*" }, // Add formatting to the effect
            unlocked() {
                if (player.l.points.gte(1)||(hasUpgrade('l',13))||tmp[this.layer].upgrades[this.id].unlocked||player.l.unlocked) return true
            },
        },
        13: {
            title: "Learning 13",
            description: "adding later!",
            cost: new Decimal(10),
            style: {
                "height": "150px",
                "width": "150px",
                "right": "-50px",
            },
            unlocked() {
                if (player.l.points.gte(1)||(hasUpgrade('l',13))||tmp[this.layer].upgrades[this.id].unlocked||player.l.unlocked) return true
            },
        },
        14: {
            title: "Learning 14",
            description: "adding later!",
            cost: new Decimal(10),
            style: {
                "height": "150px",
                "width": "150px",
                "right": "-50px",
            },
            unlocked() {
                if (player.l.points.gte(1)||(hasUpgrade('l',13))||tmp[this.layer].upgrades[this.id].unlocked||player.l.unlocked) return true
            },
        },
        21: {
            title: "Learning 21",
            description: "Unlock more Intensity Challenges.",
            cost: new Decimal(1),
            canAfford() { return hasUpgrade('l', 11) },
            style: {
                "height": "150px",
                "width": "150px",
                "right": "50px",
            },
            unlocked() {
                if (player.l.points.gte(1)||(hasUpgrade('l',13))||tmp[this.layer].upgrades[this.id].unlocked||player.l.unlocked) return true
            },
        },
        22: {
            title: "Learning 22",
            description: "Unlock more content for Sub-Control.",
            canAfford() { return hasUpgrade('l', 12) },
            cost: new Decimal(1),
            style: {
                "height": "150px",
                "width": "150px",
                "right": "50px",
            },
            unlocked() {
                if (player.l.points.gte(1)||(hasUpgrade('l',13))||tmp[this.layer].upgrades[this.id].unlocked||player.l.unlocked) return true
            },
        },
        23: {
            title: "Learning 23",
            description: "adding later!",
            cost: new Decimal(25),
            style: {
                "height": "150px",
                "width": "150px",
                "right": "-50px",
            },
            unlocked() {
                if (player.l.points.gte(1)||(hasUpgrade('l',13))||tmp[this.layer].upgrades[this.id].unlocked||player.l.unlocked) return true
            },
        },
        24: {
            title: "Learning 24",
            description: "adding later!",
            cost: new Decimal(25),
            style: {
                "height": "150px",
                "width": "150px",
                "right": "-50px",
            },
            unlocked() {
                if (player.l.points.gte(1)||(hasUpgrade('l',13))||tmp[this.layer].upgrades[this.id].unlocked||player.l.unlocked) return true
            },
        },
        31: {
            title: "Learning 31",
            description: "Unlock more content for Power.",
            canAfford() { return hasUpgrade('l', 21) },
            cost: new Decimal(1),
            style: {
                "height": "150px",
                "width": "150px",
                "right": "50px",
            },
            unlocked() {
                if (player.l.points.gte(1)||(hasUpgrade('l',13))||tmp[this.layer].upgrades[this.id].unlocked||player.l.unlocked) return true
            },
        },
        32: {
            title: "Learning 32",
            description: "The layer effect for Knowledge is multiplied by 2.",
            canAfford() { return hasUpgrade('l', 22) },
            cost: new Decimal(1),
            style: {
                "height": "150px",
                "width": "150px",
                "right": "50px",
            },
            unlocked() {
                if (player.l.points.gte(1)||(hasUpgrade('l',13))||tmp[this.layer].upgrades[this.id].unlocked||player.l.unlocked) return true
            },
        },
        33: {
            title: "Learning 33",
            description: "adding later!",
            cost: new Decimal(60),
            style: {
                "height": "150px",
                "width": "150px",
                "right": "-50px",
            },
            unlocked() {
                if (player.l.points.gte(1)||(hasUpgrade('l',13))||tmp[this.layer].upgrades[this.id].unlocked||player.l.unlocked) return true
            },
        },
        34: {
            title: "Learning 34",
            description: "adding later!",
            cost: new Decimal(60),
            style: {
                "height": "150px",
                "width": "150px",
                "right": "-50px",
            },
            unlocked() {
                if (player.l.points.gte(1)||(hasUpgrade('l',13))||tmp[this.layer].upgrades[this.id].unlocked||player.l.unlocked) return true
            },
        },
        },
    },
)