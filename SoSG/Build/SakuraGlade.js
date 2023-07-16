"use strict";
var SakuraGlade;
(function (SakuraGlade) {
    SakuraGlade.ƒ = FudgeCore;
    SakuraGlade.ƒS = FudgeStory;
    console.log("Secrets of Sakura Glade starting");
    // Preparation for needed media -> put into definitions
    // export let transition = {
    //   puzzle: {
    //     duration: 1,
    //     alpha: "path",
    //     edge: 1
    //   }
    // };
    // export let sound = {
    //   // themes
    //   music: "path",
    //   // SFX
    //   drop: "path"
    // };
    SakuraGlade.locations = {
        forestHome: {
            name: "Forest Home",
            background: "Images/Locations/hiking-trail.png"
        },
        fairieForest: {
            name: "Fairie Forest",
            background: "Images/Locations/forest.png"
        },
        sakuraGladeDay: {
            name: "Sakura Glade (Day)",
            background: "Images/Locations/park.png"
        },
        sakuraGladeEvening: {
            name: "Sakura Glade (Evening)",
            background: "Images/Locations/park.png"
        },
        sakuraGladeNight: {
            name: "Sakura Glade (Night)",
            background: "Images/Locations/park.png"
        },
        innDay: {
            name: "Cherrywood Lodge (Day)",
            background: "Images/Locations/isolated-japanese-room.png"
        },
        innNight: {
            name: "Cherrywood Lodge (Night)",
            background: "Images/Locations/isolated-japanese-room.png"
        },
        nobuHome: {
            name: "Nobu's Home",
            background: "Images/Locations/isolated-japanese-room.png"
        },
        sacredTree: {
            name: "Sacred Tree",
            background: "Images/Locations/sakura-tree-hill.png"
        },
        temple: {
            name: "Temple",
            background: "Images/Locations/shrine.png"
        },
        festival: {
            name: "Festival",
            background: "Images/Locations/japanese-festival.png"
        },
        bedroom: {
            name: "Bedroom",
            background: "Images/Locations/bedroom-evening.png"
        },
        blackout: {
            name: "Blackout",
            background: "Images/Locations/Blackout.jpg"
        }
    };
    SakuraGlade.characters = {
        narrator: {
            name: ""
        },
        protagonist: {
            name: "You"
        },
        amaya: {
            name: "Amaya",
            origin: SakuraGlade.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Images/Characters/Amaya.png",
                // angry: "path",
                // happy: "path",
                // upset: "path"
            }
        },
        nobu: {
            name: "Nobu",
            origin: SakuraGlade.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Images/Characters/Nobu.png",
                // angry: "path",
                // happy: "path",
                // upset: "path"
            }
        },
        kohana: {
            name: "Kohana",
            origin: SakuraGlade.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Images/Characters/Kohana.png",
                // angry: "path",
                // happy: "path",
                // upset: "path"
            }
        },
        fumiko: {
            name: "Fumiko",
            origin: SakuraGlade.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Images/Characters/Fumiko.png",
                // angry: "path",
                // happy: "path",
                // upset: "path"
            }
        }
    };
    SakuraGlade.items = {
        phone: {
            name: "Phone",
            description: "My phone. It ran out of battery about an hour ago. I really should have brought my powerbank.",
            image: "Images/Items/phone.png",
            static: true,
            handler: hndItem,
        },
        idCard: {
            name: "Student ID-Card",
            description: "The ID-Card from my university.",
            image: "Images/Items/idcard.png",
            static: true,
            handler: hndItem,
        },
        permit: {
            name: "Permit",
            description: "A permit, handwritten by Amaya, authorizes me to enter the area around the Sacred Tree. Let the investigations begin!",
            image: "Images/Items/permit.png",
            static: true,
            handler: hndItem,
        },
        blackOoze: {
            name: "Black Ooze",
            description: "A gooey black slime I found at the Sacred Tree. I wonder where it came from?",
            image: "Images/Items/blackgoo.png",
            static: true,
            handler: hndItem,
        },
        brokenEarring: {
            name: "Crystal Earring (broken)",
            description: "A beautiful crystal earring I picked up near the Sacred Tree. It seems to have broken and its counterpart is nowhere to be found. How did it get there?",
            image: "Images/Items/crystalearring.png",
            static: true,
            handler: hndItem,
        },
        medicalNotice: {
            name: "Medical Notice",
            description: "A medical record that factually explains a rare and incurable disease. It’s addressed to someone called “Hina”. It’s dated the day before the incident.",
            image: "Images/Items/medicalnotice.png",
            static: true,
            handler: hndItem,
        },
        replica: {
            name: "Replica of the Moon Bead",
            description: "A glass replica of the Moon Bead. It was found in place of the original at the Sacred Tree. It’s smooth and quite heavy, I can only imagine what the original looks like!",
            image: "Images/Items/replica.png",
            static: true,
            handler: hndItem,
        },
        moonBead: {
            name: "The Moon Bead",
            description: "The Moon Bead. It’s perfectly round and smooth and made from a material I’ve never seen before. Legend has it it’s a tear from the Moon God and can fulfill wishes.",
            image: "Images/Items/replica.png",
            static: true,
            handler: hndItem,
        },
        crystalEarring: {
            name: "Crystal Earring",
            description: "The undamaged counterpart of Fumiko’s crystal earring. She gave it to me to remember her. ",
            image: "Images/Items/replica.png",
            static: true,
            handler: hndItem,
        }
    };
    function hndItem(_event) {
        console.log(_event);
        console.log(SakuraGlade.currentCharacter);
        // reagiert auf pointer down und up
    }
    SakuraGlade.dataForSave = {
        // save item description updates
        // save first times in open order scenes
        // save scenes already played on day 1
        // save points already gotten / items already showed
        nameProtagonist: "",
        genderProtagonist: "",
        investigationPoints: 0,
        day1TalkedTo: Array(),
    };
    function credits() {
        SakuraGlade.ƒS.Text.print("");
    }
    // Menu shortcuts
    let inGameMenuButtons = {
        save: "Save",
        load: "Load",
        credits: "Credits",
        close: "Close"
    };
    let gameMenu;
    // open = Menü ist offen und false = Menü ist zu 
    let menuIsOpen = true;
    async function buttonFunctionalities(_option) {
        console.log(_option);
        switch (_option) {
            case inGameMenuButtons.save:
                await SakuraGlade.ƒS.Progress.save();
                break;
            case inGameMenuButtons.load:
                await SakuraGlade.ƒS.Progress.load();
                break;
            case inGameMenuButtons.close:
                gameMenu.close();
                menuIsOpen = false;
                break;
            case inGameMenuButtons.credits:
                credits();
        }
    }
    //  Menu shortcuts
    document.addEventListener("keydown", hndKeyPress);
    async function hndKeyPress(_event) {
        switch (_event.code) {
            case SakuraGlade.ƒ.KEYBOARD_CODE.F8:
                console.log("Save");
                await SakuraGlade.ƒS.Progress.save();
                break;
            case SakuraGlade.ƒ.KEYBOARD_CODE.F9:
                console.log("Load");
                await SakuraGlade.ƒS.Progress.load();
                break;
            case SakuraGlade.ƒ.KEYBOARD_CODE.M:
                if (menuIsOpen) {
                    console.log("Close");
                    gameMenu.close();
                    menuIsOpen = false;
                }
                else {
                    console.log("Open");
                    gameMenu.open();
                    menuIsOpen = true;
                }
                break;
        }
    }
    window.addEventListener("load", start);
    function start(_event) {
        gameMenu = SakuraGlade.ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenu");
        buttonFunctionalities("Close");
        // Menu button 
        let button = document.querySelector("#openMenu");
        button.addEventListener("pointerdown", function (_event) {
            _event.stopPropagation();
            if (menuIsOpen) {
                console.log("Close");
                gameMenu.close();
                menuIsOpen = false;
            }
            else {
                console.log("Open");
                gameMenu.open();
                menuIsOpen = true;
            }
        });
        // Scene Hierarchy 
        let scenes = [
            { scene: SakuraGlade.Start, name: "Start Scene" },
            { scene: SakuraGlade.Intro, name: "Intro Scene" },
            { scene: SakuraGlade.FairieForest, name: "Fairie Forest" },
            { scene: SakuraGlade.WelcomeSakuraGlade, name: "Welcome to Sakura Glade" },
            { scene: SakuraGlade.Day1Morning, name: "Day 1 Morning" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        SakuraGlade.dataForSave = SakuraGlade.ƒS.Progress.setData(SakuraGlade.dataForSave, uiElement);
        // start the sequence
        SakuraGlade.ƒS.Progress.go(scenes);
    }
})(SakuraGlade || (SakuraGlade = {}));
var SakuraGlade;
(function (SakuraGlade) {
    async function day1Locations() {
        let options = {
            kohana: "Talk to Kohana",
            amaya: "Go to the Sacred Tree",
            nobu: "Search for Nobu"
        };
        if (SakuraGlade.dataForSave.day1TalkedTo.includes('kohana')) {
            delete options.kohana;
        }
        if (SakuraGlade.dataForSave.day1TalkedTo.includes('amaya')) {
            delete options.amaya;
        }
        if (SakuraGlade.dataForSave.day1TalkedTo.includes('nobu')) {
            delete options.nobu;
        }
        if (Object.keys(options).length > 0) {
            let optionsElement = await SakuraGlade.ƒS.Menu.getInput(options, "choices");
            switch (optionsElement) {
                case options.kohana:
                    // continue path here
                    SakuraGlade.dataForSave.day1TalkedTo.push("kohana");
                    SakuraGlade.ƒS.Speech.clear();
                    SakuraGlade.ƒS.Speech.hide();
                    SakuraGlade.Day1Kohana();
                    delete options.kohana;
                    console.log(SakuraGlade.dataForSave.day1TalkedTo);
                    break;
                case options.amaya:
                    // continue path here
                    SakuraGlade.dataForSave.day1TalkedTo.push("amaya");
                    SakuraGlade.ƒS.Speech.clear();
                    SakuraGlade.ƒS.Speech.hide();
                    SakuraGlade.Day1Amaya();
                    delete options.amaya;
                    console.log(SakuraGlade.dataForSave.day1TalkedTo);
                    break;
                case options.nobu:
                    // continue path here
                    if (SakuraGlade.dataForSave.day1TalkedTo.includes('kohana')) {
                        SakuraGlade.dataForSave.day1TalkedTo.push("nobu");
                        SakuraGlade.ƒS.Speech.clear();
                        SakuraGlade.ƒS.Speech.hide();
                        SakuraGlade.Day1Nobu();
                        delete options.nobu;
                        console.log(SakuraGlade.dataForSave.day1TalkedTo);
                    }
                    else {
                        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Nobu asked me to talk to Kohana. I should do that before I start looking for him)</i>");
                        day1Locations();
                    }
                    break;
            }
        }
        else {
            SakuraGlade.ƒS.Speech.clear();
            SakuraGlade.ƒS.Speech.hide();
            SakuraGlade.Day1Fumiko();
        }
    }
    SakuraGlade.day1Locations = day1Locations;
})(SakuraGlade || (SakuraGlade = {}));
// character dialogues regarding items
// item description updates
var SakuraGlade;
(function (SakuraGlade) {
    async function FairieForest() {
        console.log("Fairie Forest Scene starting");
        // cpms = characters per millisecond
        SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
        await SakuraGlade.ƒS.Progress.delay(1);
        SakuraGlade.ƒS.Speech.show();
        SakuraGlade.ƒS.Speech.setTickerDelays(100, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "(<i>Ouch... my head hurts...</i>)");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "(<i>...</i>)");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "(<i>Huh? ... What's that?</i>)");
        SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
        await SakuraGlade.ƒS.Speech.tell("???", "Hello?");
        await SakuraGlade.ƒS.Speech.tell("???", "...");
        await SakuraGlade.ƒS.Speech.tell("???", "Hello there? Are you awake?");
        SakuraGlade.ƒS.Speech.setTickerDelays(100, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "(<i>Someone is talking to me...</i>)");
        await SakuraGlade.ƒS.Location.show(SakuraGlade.locations.fairieForest);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.neutral, SakuraGlade.ƒS.positionPercent(70, 100));
        await SakuraGlade.ƒS.update(1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "(<i>Where... am I?</i>)");
        SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
        await SakuraGlade.ƒS.Speech.tell("???", "There we go... I was worried for a moment there.<br>Are you alright?");
        await SakuraGlade.ƒS.Speech.tell("???", "Oh... what's that?");
        await SakuraGlade.ƒS.Speech.tell("???", "My, my... I almost mistook you for a fairy!<br>But you've got no wings...");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "(<i>Woah... what is that thing??</i>)");
        let choice1 = {
            neutral: "You look weird! What are you?",
            good: "You're... a talking mushroom?"
        };
        let choice1Element = await SakuraGlade.ƒS.Menu.getInput(choice1, "choices");
        switch (choice1Element) {
            case choice1.neutral:
                // continue path here
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "You look weird! What are you?");
                SakuraGlade.ƒS.Speech.setTickerDelays(80, 5000);
                await SakuraGlade.ƒS.Speech.tell("???", "Ahem... now that's not a very kind thing to say...");
                SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
                await SakuraGlade.ƒS.Speech.tell("???", "I'm a Capfolk. We live here in the Forest of Fairie.");
                await SakuraGlade.ƒS.Speech.tell("???", "It's strange you've never seen one like me before.<br>How did you get here?");
                break;
            case choice1.good:
                // continue path here
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "You're... a talking mushroom?");
                await SakuraGlade.ƒS.Speech.tell("???", "Ohohoh!");
                await SakuraGlade.ƒS.Speech.tell("???", "You're a strange one!");
                await SakuraGlade.ƒS.Speech.tell("???", "Never seen a Capfolk before? You're not from the Forest of Fairie then.");
                await SakuraGlade.ƒS.Speech.tell("???", "How did you end up all on the ground here?");
                break;
        }
        SakuraGlade.ƒS.Speech.setTickerDelays(100, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "I...");
        SakuraGlade.ƒS.Speech.setTickerDelays(80, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "I can't remember clearly... ");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "I was just going home... and then...");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "...");
        SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
        await SakuraGlade.ƒS.Speech.tell("???", "Oh dear, it seems you're quite confused. You don't look so well either...");
        await SakuraGlade.ƒS.Speech.tell("???", "Are you hurt?");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "...No I don't think so.");
        await SakuraGlade.ƒS.Speech.tell("???", "That's a relief!");
        await SakuraGlade.ƒS.Speech.tell("???", "Oh I almost forgot!");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "I'm Nobu, it's a pleasure to meet you.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "I'm... " + SakuraGlade.dataForSave.nameProtagonist + ".");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "How did you find me?");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "What a pretty sounding name you've got there, " + SakuraGlade.dataForSave.nameProtagonist + "!");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "I was just on my way back from collecting firewood when I stumbled upon you laying here. You don't see folks like you around here often.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Either way, it's starting to get quite dark in these woods... It'll be hard to see the way once night falls.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "We're not too far from the village, you can rest up there if you want and we'll figure it out.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "What do you say, " + SakuraGlade.dataForSave.nameProtagonist + "? Can you walk on your own?");
        let choice2 = {
            good: "A little help would be nice, actually.",
            neutral: "I can walk on my own, thank you."
        };
        let choice2Element = await SakuraGlade.ƒS.Menu.getInput(choice2, "choices");
        switch (choice2Element) {
            case choice2.neutral:
                // continue path here
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "I can walk on my own, thank you.");
                SakuraGlade.ƒS.Speech.setTickerDelays(80, 5000);
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Ohohoh!");
                SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Young ones are always so full of energy!");
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Well, if you insist.<br>Stay close, Grasshopper.");
                break;
            case choice2.good:
                // continue path here
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "A little help would be nice, actually.");
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Of course. Here, take my cane for support.<br>It's not too far, but we can take breaks if you need them.");
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Come along now, Grasshopper!");
                break;
        }
        SakuraGlade.ƒS.Speech.clear();
        SakuraGlade.ƒS.Speech.hide();
        SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
        SakuraGlade.ƒS.Location.show(SakuraGlade.locations.blackout);
        await SakuraGlade.ƒS.update(1);
    }
    SakuraGlade.FairieForest = FairieForest;
})(SakuraGlade || (SakuraGlade = {}));
var SakuraGlade;
(function (SakuraGlade) {
    async function Intro() {
        console.log("Intro Scene starting");
        // currentCharacter = characters.nobu;
        // ƒS.Inventory.add(items.idCard);
        // await ƒS.Inventory.open();
        // cpms = characters per millisecond
        SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
        await SakuraGlade.ƒS.Progress.delay(1);
        await SakuraGlade.ƒS.Location.show(SakuraGlade.locations.forestHome);
        await SakuraGlade.ƒS.update(1);
        // await ƒS.Progress.delay(2);
        SakuraGlade.ƒS.Speech.show();
        // await ƒS.Progress.delay(1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "(<i>Whew, what a day!</i>)");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "(<i>Three lectures of Advanced Biology and no breaks... And I've got the presentation coming up soon too...<br>Ugh, I still need a good topic. Guess I'll have to hit the books first when I get home.</i>)");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "(<i>Yeesh, I can't wait to go to bed!</i>)");
        SakuraGlade.ƒS.Speech.hide();
        // await ƒS.Progress.delay(2);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "(<i>Ah... the cool spring air is so refreshing. Feels like I sat in stuffy lecture halls all day!<br>I used to hate having to walk home through the forest, but on a day like this it's almost a blessing.</i>)");
        SakuraGlade.ƒS.Speech.hide();
        // await ƒS.Progress.delay(2);
        SakuraGlade.ƒS.Speech.setTickerDelays(100, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "(<i>... what's that?</i>)");
        SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "(<i>There's a faint light coming from the forest. Did someone get lost in the woods again?<br>I should go check it out.</i>)");
        SakuraGlade.ƒS.Speech.hide();
        // await ƒS.Progress.delay(2);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "(<i>Hmm... no one to be seen.</i>)");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "(<i>Just this...<br>tree stump that appears to be glowing?</i>)");
        SakuraGlade.ƒS.Speech.hide();
        let dialogue = {
            inspect: "Inspect the stump",
            leave: "Leave"
        };
        let dialogueElement = await SakuraGlade.ƒS.Menu.getInput(dialogue, "choices");
        switch (dialogueElement) {
            case dialogue.inspect:
                // continue path here
                console.log(dialogue.inspect);
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "(<i>I've never seen that before! Maybe I can use this in my presentation.<br>Let's take a closer look...</i>)");
                SakuraGlade.ƒS.Speech.setTickerDelays(100, 5000);
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "(<i>...</i>)");
                SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "(<i>It seems like little fluorescent mushrooms are growing on this part of the stump.<br>They smell sweet, almost floral...</i>)");
                SakuraGlade.ƒS.Speech.setTickerDelays(100, 5000);
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "(<i>...</i>)");
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "(<i>What's going on?<br>... everything's suddenly so blurry...</i>)");
                SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "(<i>...</i>)");
                await SakuraGlade.ƒS.Location.show(SakuraGlade.locations.blackout);
                SakuraGlade.ƒS.update(1);
                await SakuraGlade.ƒS.Progress.delay(2);
                SakuraGlade.ƒS.Speech.clear();
                SakuraGlade.ƒS.Speech.hide();
                await SakuraGlade.ƒS.update(1);
                break;
            case dialogue.leave:
                // continue path here
                console.log(dialogue.leave);
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "(<i>No way I'm touching that. I better hurry back to the trail.</i>)");
                SakuraGlade.ƒS.Speech.setTickerDelays(100, 5000);
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "(<i>...</i>)");
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "(<i>What's that smell...? Everything's suddenly so blurry...</i>)");
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "(<i>...</i>)");
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "(<i>... oh...</i>)");
                SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "(<i>...</i>)");
                await SakuraGlade.ƒS.Location.show(SakuraGlade.locations.blackout);
                SakuraGlade.ƒS.update(1);
                await SakuraGlade.ƒS.Progress.delay(2);
                SakuraGlade.ƒS.Speech.clear();
                SakuraGlade.ƒS.Speech.hide();
                await SakuraGlade.ƒS.update(1);
                break;
        }
        SakuraGlade.ƒS.update(1);
    }
    SakuraGlade.Intro = Intro;
})(SakuraGlade || (SakuraGlade = {}));
var SakuraGlade;
(function (SakuraGlade) {
    async function Start() {
        console.log("Start Scene starting");
        document.onkeypress = stopReloadKey;
        function stopReloadKey(_e) {
            if (_e.keyCode == 13) {
                return false;
            }
            return true;
        }
        SakuraGlade.ƒS.Speech.hide();
        let input = document.querySelector("dialog#start");
        input.showModal();
        await new Promise((_resolve) => {
            input.querySelector("button").addEventListener("click", _resolve);
        });
        let form = new FormData(document.forms[0]);
        while (form.get("name") == "") {
            alert('You have to input a name!');
            await new Promise((_resolve) => {
                input.querySelector("button").addEventListener("click", _resolve);
            });
            form = new FormData(document.forms[0]);
        }
        SakuraGlade.dataForSave.nameProtagonist = form.get("name");
        SakuraGlade.dataForSave.genderProtagonist = form.get("pronouns");
        input.close();
        SakuraGlade.ƒS.update(1);
    }
    SakuraGlade.Start = Start;
})(SakuraGlade || (SakuraGlade = {}));
var SakuraGlade;
(function (SakuraGlade) {
    async function WelcomeSakuraGlade() {
        console.log("Welcome to Sakura Glade starting");
        await SakuraGlade.ƒS.Progress.delay(1);
        await SakuraGlade.ƒS.Location.show(SakuraGlade.locations.sakuraGladeNight);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.neutral, SakuraGlade.ƒS.positionPercent(70, 100));
        await SakuraGlade.ƒS.update(1);
        // await ƒS.Progress.delay(2);
        SakuraGlade.ƒS.Speech.show();
        // await ƒS.Progress.delay(1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "… and here we are! Welcome to Sakura Glade.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "It’s late already, so there’s not a lot of people on the street anymore. You should see it tomorrow when it’s bustling with folks and everyone’s busy with the preparations for the Spring Festival!");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Ah, that’s my favorite time of the year. You visit at the perfect time.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Now, I don’t mean to hold you up for too long. You must be tired and all of this surely is a lot to take in.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "There’s a wonderful little inn right around the corner, Cherrywood Lodge. I’ll bring you there, you can get a nice room and get accustomed to everything, yes?");
        let choice1 = {
            good: "Sounds good!",
            questions: "Actually, I have a few questions…"
        };
        let choice1Element = await SakuraGlade.ƒS.Menu.getInput(choice1, "choices");
        switch (choice1Element) {
            case choice1.good:
                // continue path here
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Sounds good!");
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Wonderful! Let’s go and get you a room and some dinner.");
                break;
            case choice1.questions:
                // continue path here
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Actually, I have a few questions… Would you mind?");
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Of course not. Ask ahead!");
                let questions = {
                    sakuraGlade: "Sakura Glade?",
                    festival: "What festival?",
                    leave: "That's all."
                };
                // let questions = {
                //     sakuraGlade: "Sakura Glade?",
                //     festival: "What festival?",
                //     leave: "That's all."
                // }
                let leave = false;
                do {
                    let questionsElement = await SakuraGlade.ƒS.Menu.getInput(questions, "choices");
                    switch (questionsElement) {
                        case questions.sakuraGlade:
                            // continue path here
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Can you tell me more about Sakura Glade?");
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Surely, Sprout.");
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "You stand here in Sakura Glade, a village that has been around since the gods roamed this earth.");
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "I wasn’t born here, but it is my home. ");
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "All who live here are Capfolk. We don’t get visitors often, but I am sure everyone will welcome you with open arms. We have little worries here.");
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "The big tree you see up top is our Sacred Tree. It’s in bloom this time of the year, you’re very lucky. It’s what gave Sakura Glade its name.");
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Isn’t it just majestic? It looks even better in sunlight.");
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "We can go there tomorrow if you’d like. There’s a shrine devoted to the Moon God, if we ask him in prayers maybe he can help you find your way back home…");
                            delete questions.sakuraGlade;
                            break;
                        case questions.festival:
                            // continue path here
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "What festival were you talking about earlier?");
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Oh? You don’t know about the Spring Festival?");
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "No, apologies. I got ahead of myself.");
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "In four days, we celebrate the Spring Festival in favor of our guardian deity, the Moon God. It’s held every year on the day the Sacred Tree reaches full bloom.");
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "The whole village gets together and starts decorating and preparing for it beginning tomorrow, and on the third day, we celebrate with the Moon Ritual and fireworks.");
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "The Moon Ritual?");
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "A sacred dance performed by the village priest, before holding the Moon Bead into the full moon’s light to wish for yet another plentiful harvest in autumn and a year of good health.");
                            // Reflect.set(questions, "moonBead", "The Moon Bead?");
                            questions.moonBead = "The Moon Bead?";
                            delete questions.leave;
                            questions.leave = "That's all.";
                            delete questions.festival;
                            break;
                        case questions.moonBead:
                            // continue path here
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "What is the Moon Bead you spoke of?");
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "The Moon Bead is our most precious possession. It’s kept in the shrine of the Moon God at the Sacred Tree.");
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "They say it’s a tear from the Moon God himself, shed for the plague and illness that haunted this land eons ago, and since protecting the village from harm. Legend has it that it can fulfill any wish the bearer asks for.");
                            delete questions.moonBead;
                            break;
                        case questions.leave:
                            // continue path here
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "That’s all, thank you.");
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "No problem, Sprout. I’m glad to be of help.");
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Now let’s go and get you a room and some dinner.");
                            leave = true;
                            break;
                    }
                } while (!leave);
                break;
        }
        SakuraGlade.ƒS.Speech.clear();
        SakuraGlade.ƒS.Speech.hide();
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
        await SakuraGlade.ƒS.Location.show(SakuraGlade.locations.innNight);
        await SakuraGlade.ƒS.update(1);
        await SakuraGlade.ƒS.Progress.delay(1);
        SakuraGlade.ƒS.Speech.show();
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(... Nobu showed me a little around town and gave me directions to his house in case I needed help. He really is very kind. He even paid for my dinner and room since I don’t have this… world’s currency!)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(It’s crazy. Just a few hours ago I was walking home from Uni, and now I’m laying in bed in an inn of a whole other world.)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(It’s nice here, but I should find a way to get back home tomorrow. My friends and family must be worried sick.)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(But, for now, I guess some rest won’t hurt. Tomorrow, I’ll look for answers…)</i>");
        SakuraGlade.ƒS.Speech.clear();
        SakuraGlade.ƒS.Speech.hide();
        await SakuraGlade.ƒS.Location.show(SakuraGlade.locations.blackout);
        await SakuraGlade.ƒS.update(2);
    }
    SakuraGlade.WelcomeSakuraGlade = WelcomeSakuraGlade;
})(SakuraGlade || (SakuraGlade = {}));
var SakuraGlade;
(function (SakuraGlade) {
    async function Day1Amaya() {
        console.log("Day 1 Amaya starting");
        // await ƒS.Progress.delay(1);
        await SakuraGlade.ƒS.Location.show(SakuraGlade.locations.sacredTree);
        await SakuraGlade.ƒS.update(2);
        // await ƒS.Progress.delay(1);
        SakuraGlade.ƒS.Speech.show();
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Woah… the Sacred Tree. I see why it’s such a holy place. This tree is gigantic! And the cherry blossoms fill the air with a nice sweet scent…)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(I can see a little shrine at its roots, that’s probably where the Moon Bead is usually kept. Let me take a closer look…)</i>");
        await SakuraGlade.ƒS.Speech.tell("???", "You can't go here.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "What?");
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.neutral, SakuraGlade.ƒS.positionPercent(70, 100));
        await SakuraGlade.ƒS.update(1);
        await SakuraGlade.ƒS.Speech.tell("???", "A flightless fairy! Are your eyes broken as well? Can’t you see this area is restricted at the moment?");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Ouch… she’s scary. I admit, I didn’t see the little rope around the area.)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Apologies, ma’am. I was fully taken in by the beauty of the tree, I didn’t see the barrier at all.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "Hmm… call me Amaya. Where are you from?");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Uh, well. Nobu picked me up in the forest, I… I’m not sure how I got there.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "Interesting… and what leads you here?");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Nobu asked me to investigate the theft of the Moon Bead.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Why do I feel like I’m the one being interrogated right now?)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "I see. You don’t believe it was Kohana?");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "No, ma’am. Well, I can’t say for sure yet, but I’d like to believe her.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "We have something in common then.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(She finally seems more at ease. I thought she was going to stab me with that sword any second.)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "What is your name, Cub?");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "I’m " + SakuraGlade.dataForSave.nameProtagonist + ". It’s nice to meet you, Amaya. May I take a look around the scene?");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "No.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "Not for now. I can’t have just anyone walking around here. I will issue you a permit after I’ve seen what you can do.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Damn… there’s no way I’m gonna get past her. Guess I’ll just have to be patient and on my best behavior.)</i> I understand that. Can I ask you a few questions still?");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "A few.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "What’s your job here? Are you the one guarding the Moon Bead?");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "Yes. I am the Warden of the Sacred Tree.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "At this point in time I’m securing the perimeter and making sure no one messes around with anything until we’ve confirmed the culprit of the theft…");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Yup, I can see that.)</i> Were you guarding the Tree last night?");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "I guard the Tree every night. And not once has a single thing happened.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Until last night?");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "Yes… we know that already. What is the point of this?");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Well, I’m just trying to gather information and get a picture of all the locations and people so I can rule out possible suspects and-");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "Very good strategy. I shall look forward to the fruits of your investigations.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "I must ask you to leave now though. Come back another time when I’ve finished securing the area.");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
        await SakuraGlade.ƒS.update(1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(She’s impossible to get more information from. I guess I’ll have to wait for my permit before I come back here.)</i>");
        SakuraGlade.day1Locations();
    }
    SakuraGlade.Day1Amaya = Day1Amaya;
})(SakuraGlade || (SakuraGlade = {}));
var SakuraGlade;
(function (SakuraGlade) {
    async function Day1Fumiko() {
        console.log("Day 1 Fumiko starting");
        // await ƒS.Progress.delay(1);
        await SakuraGlade.ƒS.Location.show(SakuraGlade.locations.sakuraGladeEvening);
        await SakuraGlade.ƒS.update(2);
        // await ƒS.Progress.delay(1);
        SakuraGlade.ƒS.Speech.show();
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Oh, today went by really quickly. I don’t feel like I’m any smarter now though. Well, time to head back to the inn to sleep over it and really start through tomorrow!)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(OH!)</i>");
        // shake/flash screen animation
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Someone bumped into me…?)</i>");
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.neutral, SakuraGlade.ƒS.positionPercent(70, 100));
        await SakuraGlade.ƒS.update(1);
        await SakuraGlade.ƒS.Speech.tell("???", "Ah! I’m so sorry!");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Wow, she is really pretty!)</i> No, don’t apologize, I was lost in thought. I should’ve seen you coming.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(I made her drop the lantern she was holding. I’ll pick it up.)</i> Here you go.");
        await SakuraGlade.ƒS.Speech.tell("???", "You’re too kind, thank you.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "No problem at all. Who are you, if I may ask?");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Oh, of course, Precious! I’m Fumiko, lovely to meet you");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "And you are?");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "I’m " + SakuraGlade.dataForSave.nameProtagonist + ". You’re still out and about rather late…?");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Oh, yes. But don’t worry. I’ll be home in a minute.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "I just needed some fresh air.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "And these lanterns won’t put themselves up on their own!");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "You’re decorating for the Spring Festival?");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Indeed I am. I’m in charge of the decorations this year. It’s proven a challenge, but I have many helping hands.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(I’m sure she does. Anyone would be happy to just be in her presence.</i>) You’re not worried about the festival?");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Worried? Why would I-");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Oh, you mean because of the Moon Bead.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "No, I don’t have the time to worry about such things. The village will look stunning regardless of whether it will be found or not. If I wait for it to show up I won’t have enough time to decorate everything.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "And regardless… the decorations can be taken down again...");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "You don’t seem too fond of the festival?");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Oh no, don’t get me wrong, I love the festival. It’s wonderful.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "I…");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Well, there are a lot of expectations for me this year, so I’m just making sure I do everything perfectly.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "That sounds… stressful.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Ah, don’t worry about it. I love doing the village service.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Well then, Precious, I better get going before it gets too late. My parents will worry. I’ll see you around!");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "See you!");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
        await SakuraGlade.ƒS.update(1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Well… that was nice. She seems lovely.)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Now, I should head back to the inn. It’s been a pretty long day and I need all the rest I can get before continuing my investigations tomorrow. The festival is coming closer, I have to hurry up if I want to find the Moon Bead in time!)</i>");
        SakuraGlade.ƒS.Speech.clear();
        SakuraGlade.ƒS.Speech.hide();
        await SakuraGlade.ƒS.Location.show(SakuraGlade.locations.blackout);
        await SakuraGlade.ƒS.update(2);
        SakuraGlade.Day2Morning();
    }
    SakuraGlade.Day1Fumiko = Day1Fumiko;
})(SakuraGlade || (SakuraGlade = {}));
var SakuraGlade;
(function (SakuraGlade) {
    async function Day1Kohana() {
        console.log("Day 1 Kohana starting");
        // await ƒS.Progress.delay(1);
        await SakuraGlade.ƒS.Location.show(SakuraGlade.locations.sakuraGladeDay);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.neutral, SakuraGlade.ƒS.positionPercent(70, 100));
        await SakuraGlade.ƒS.update(2);
        // await ƒS.Progress.delay(1);
        SakuraGlade.ƒS.Speech.show();
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(The villagers have dispersed, but Kohana is still here.)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Kohana?");
        SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "…you’ve returned, Dreamer…");
        SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Would she stop calling me strange names…?)</i> …Yes, Nobu asked me to investigate the theft to clear your name and find the Moon Bead.");
        SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "That’s… kind of you.");
        SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Ahem, well, I’ll try my best. So, can you tell me again your name and occupation?");
        SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "Kohana… I’m the village’s priestess.");
        SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Priestess?");
        SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "Mh... I live in the temple near the Sacred Tree.");
        SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(She’s definitely not the talkative kind…)</i> How did you hear about the Moon Bead being stolen?");
        SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "I discovered it.");
        SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "You were the first at the scene of the incident?");
        SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, " …yes.");
        SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Well, of course, that doesn’t look good for her.)</i> Why were you at the scene today?");
        SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "Do you know about the Moon Ritual? It’s my duty to perform at the festival with the Moon Bead and hold it into the full moon’s light for the village’s blessing… it is very spiritual…");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "If it is missing, we cannot have the festival… the village will not receive a blessing… I fear for our good fortune!");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "Apologies… I got lost in thought.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "I take the Bead for cleansing each morning and evening. Such is my duty.");
        SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "So you wanted to take it out of the shrine at the Sacred Tree to cleanse it?");
        SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "Mh.");
        SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Come on, don’t make me worm every answer out of you…)</i> And it was missing?");
        SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "Well… not quite.");
        SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(What now?)</i>");
        SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "It had been replaced… with this. A replica. It’s used for practicing.");
        //    show inventory!!
        SakuraGlade.ƒS.Inventory.add(SakuraGlade.items.replica);
        await SakuraGlade.ƒS.Inventory.open();
        SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Oh… but then, couldn’t it have been replaced days before?");
        SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "No… I cleansed the Bead yesterday evening. It was still there then.");
        SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "I see... <i>(That narrows it down to this night, but all of this isn’t really telling me anything.)</i> What did you do the night of the incident?");
        SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "… Sleeping…");
        SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Surely, anyone would say that.)</i> Does anyone else have access to the Bead, other than you?");
        SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "Yes… Onee-sama does…");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "I thank you for your efforts, Dreamer. I’m tired and I have other duties… please excuse me now…");
        SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Oh, uhm. Of course. Thank you for all the information.");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
        await SakuraGlade.ƒS.update(1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(She left. I need to get better at this. I know more now, but it all still makes her the number one suspect. Maybe I can find out more elsewhere.)</i>");
        SakuraGlade.day1Locations();
    }
    SakuraGlade.Day1Kohana = Day1Kohana;
})(SakuraGlade || (SakuraGlade = {}));
var SakuraGlade;
(function (SakuraGlade) {
    async function Day1Morning() {
        console.log("Day 1 Morning starting");
        // await ƒS.Progress.delay(1);
        await SakuraGlade.ƒS.Location.show(SakuraGlade.locations.innDay);
        await SakuraGlade.ƒS.update(2);
        // await ƒS.Progress.delay(1);
        SakuraGlade.ƒS.Speech.show();
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(I slept pretty good, the bed is more comfortable than I expected. But I woke up to a loud commotion outside in the town square. I wonder what’s going on out there?)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(I’ll go check it out.)</i>");
        SakuraGlade.ƒS.Speech.clear();
        SakuraGlade.ƒS.Speech.hide();
        await SakuraGlade.ƒS.Location.show(SakuraGlade.locations.sakuraGladeDay);
        // SHOW VILLAGERS
        await SakuraGlade.ƒS.update(1);
        SakuraGlade.ƒS.Speech.show();
        await SakuraGlade.ƒS.Speech.tell("Villager 1", "Have you heard the news already?");
        await SakuraGlade.ƒS.Speech.tell("Villager 2", "Who would do something like that?");
        await SakuraGlade.ƒS.Speech.tell("Villager 3", "I bet it was that little wrench! Acting all innocent won’t help her anymore.");
        await SakuraGlade.ƒS.Speech.tell("Villager 4", "How could something like this happen? Right before the festival too!");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(People are crowding the streets, everyone seems to be very agitated.)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Uhm, excuse me?");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "...");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "What is going on?");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "...");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(No one’s paying attention to me!)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, SakuraGlade.dataForSave.nameProtagonist + "! There you are!");
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.neutral, SakuraGlade.ƒS.positionPercent(70, 100));
        await SakuraGlade.ƒS.update(1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "I’ve been looking for you! I’m glad to see you’re okay.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(He seems different today… maybe I’m just imagining things…)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "I’m fine, thank you. But what is going on here? Why is everyone so upset?");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Oh, it’s terrible, Grasshopper-");
        await SakuraGlade.ƒS.Speech.tell("Villager 3", "You! It was you, wasn’t it? Admit it!");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(They’re not talking to me. There’s a little girl everyone is surrounding…)</i>");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
        await SakuraGlade.ƒS.update(1);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.neutral, SakuraGlade.ƒS.positionPercent(70, 100));
        await SakuraGlade.ƒS.update(1);
        SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
        await SakuraGlade.ƒS.Speech.tell("???", "… n-no it wasn’t! I promise…");
        SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
        await SakuraGlade.ƒS.Speech.tell("Villager 1", "There she goes, I don’t believe a word she’s saying!");
        await SakuraGlade.ƒS.Speech.tell("Villager 4", "She shouldn’t even be here.");
        await SakuraGlade.ƒS.Speech.tell("Villager 2", "How dare she lie right to our faces?!");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(The poor girl looks so helpless… They’re not even giving her a chance to speak…!)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Hey! Calm down everyone! Let her explain!");
        await SakuraGlade.ƒS.Speech.tell("Villager 2", "Who is…?");
        await SakuraGlade.ƒS.Speech.tell("Villager 4", "Shh!");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Finally, they’ve stopped talking all over each other.)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "I’m sorry, I know I shouldn’t interfere since I’m not from here. But I can’t just stand by and watch this! Look, there will be a solution to whatever is going on right now, but all this commotion will lead to nothing!");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Woah. It seems like they’re actually listening to me!)</i>");
        SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
        await SakuraGlade.ƒS.Speech.tell("???", "…Thank you, Worldleaper.");
        SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Oh, she’s talking to me!)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Her voice is so quiet I almost didn’t notice. What did she call me? Worldleaper?)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, " O-of course! Uhm, my name is " + SakuraGlade.dataForSave.nameProtagonist + ". It’s nice to meet you!");
        SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
        await SakuraGlade.ƒS.Speech.tell("???", "Hmm… " + SakuraGlade.dataForSave.nameProtagonist + "...");
        await SakuraGlade.ƒS.Speech.tell("???", "...");
        SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(What is it?)</i>");
        SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "My name is Kohana. The pleasure is	mine… is that how you say that? I get confused sometimes...");
        SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Ah…)</i> Don’t worry about it. Now, what is all this about?");
        SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "Ah!");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "Well… it’s about the Moon Bead. Did Nobu tell you about it? It’s our village’s sacred treasure, kept in the shrine at the Sacred Tree.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "It’s been stolen in the night…");
        SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(The Moon Bead?)</i> And everyone thinks it was you?");
        SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "Mh, it seems so…");
        SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.neutral, SakuraGlade.ƒS.positionPercent(20, 100));
        await SakuraGlade.ƒS.update(1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Sprout, can I talk to you for a moment?");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Sure.");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
        await SakuraGlade.ƒS.update(1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "That was some real courage you had there!");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "You have an aura, I can’t explain it. But I feel it too. And the villagers listened to you as well!");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "They can be so cruel sometimes, jumping to conclusions like that. Kohana isn’t very well-liked among them, she’s… a little eccentric sometimes.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "But I’ve known her since she came here and I don’t think she stole the Bead.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "She definitely doesn’t look like someone who’d steal something so important…");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "I’m glad you think so too!");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Well, Grasshopper, who was it if not her? They won’t let her go until they’ve found the real culprit.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "And oh, the festival! How will it be held without the Moon Bead? We need the blessing for the coming harvest…");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "The village listens to you, and Kohana seems to enjoy your company as well. It might be a big ask since you just arrived here, but…");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Would you help investigate and find the true culprit?");
        let options = {
            yes: "Of course!",
            fine: "Do I really have to?"
        };
        let optionsElement = await SakuraGlade.ƒS.Menu.getInput(options, "choices");
        switch (optionsElement) {
            case options.yes:
                // continue path here
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Of course!");
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Thank you, Sprout! I knew you would say yes to a new adventure.");
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Well then, I have to be somewhere now.");
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "You should talk to Kohana some more. Return the Moon Bead before it’s too late for the festival! Good luck, Grasshopper!");
                break;
            case options.fine:
                // continue path here
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Do I really have to?");
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Oh well… I was hoping you’d be excited by a little adventure.");
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Please, Sprout. You’ve already managed to get the villagers to stop hunting her down, it would make an old man very happy if you could help Kohana a little more and find out who was behind this.");
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "… fine, I’ll do it.");
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Thank you! I know you can do it.");
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Well then, I have to go somewhere now.");
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Please talk to Kohana. Return the Moon Bead before it’s too late for the festival! I’m counting on you, Grasshopper!");
                break;
        }
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Wait!");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
        await SakuraGlade.ƒS.update(1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "…");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(He left… There was definitely something off about him… and where did he have to hurry to so suddenly? I guess I’ll ask him later. I should talk to Kohana and find out why she was suspected in the first place.)</i>");
        SakuraGlade.day1Locations();
    }
    SakuraGlade.Day1Morning = Day1Morning;
})(SakuraGlade || (SakuraGlade = {}));
var SakuraGlade;
(function (SakuraGlade) {
    async function Day1Nobu() {
        console.log("Day 1 Nobu starting");
        // await ƒS.Progress.delay(1);
        await SakuraGlade.ƒS.Location.show(SakuraGlade.locations.sakuraGladeDay);
        await SakuraGlade.ƒS.update(2);
        // await ƒS.Progress.delay(1);
        SakuraGlade.ƒS.Speech.show();
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(After searching for him in the village without any luck I was able to find my way back to his house.)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Hmm... there’s no doorbell… they probably don’t have those here.)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Nobu?");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "...");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(No answer. I’ll knock- Oh, it’s not locked. The doors just slide open. Maybe he’s inside and just didn’t hear me?)</i>");
        SakuraGlade.ƒS.Speech.clear();
        SakuraGlade.ƒS.Speech.hide();
        await SakuraGlade.ƒS.Location.show(SakuraGlade.locations.nobuHome);
        SakuraGlade.ƒS.Speech.show();
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Nobu?");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "...");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Nobu!");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "...");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(What a nice little house… But he doesn’t seem to be here. I should leave-)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(There’s a piece of paper lying on the table.)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(…)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Ah, come on, just a little look won’t hurt.)</i>");
        //    show inventory!!
        SakuraGlade.ƒS.Inventory.add(SakuraGlade.items.medicalNotice);
        await SakuraGlade.ƒS.Inventory.open();
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Hmm… who is Hina?)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(This might actually become important. I should ask him about it when I see him again. For now, I better leave.)</i>");
        SakuraGlade.day1Locations();
    }
    SakuraGlade.Day1Nobu = Day1Nobu;
})(SakuraGlade || (SakuraGlade = {}));
var SakuraGlade;
(function (SakuraGlade) {
    async function Day2Morning() {
        console.log("Day 2 Morning starting");
        // await ƒS.Progress.delay(1);
        await SakuraGlade.ƒS.Location.show(SakuraGlade.locations.innDay);
        await SakuraGlade.ƒS.update(2);
        // await ƒS.Progress.delay(1);
        SakuraGlade.ƒS.Speech.show();
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(What a night… I was lying awake thinking about who it could’ve been forever. I have so much to find out.)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Ah, and service came by earlier and brought me a letter! Let’s see what’s inside.)</i>");
        SakuraGlade.ƒS.Inventory.add(SakuraGlade.items.permit);
        await SakuraGlade.ƒS.Inventory.open();
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Well there we go! Now I can finally have a look around the Sacred Tree.)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Let’s backtrack...)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Kohana is the priestess and has access to the tree at all times. She also holds on to the Replica, so she could’ve easily swapped them. But she seems really worried about the festival. Why would she steal the Bead if she can just grab it anytime?)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Nobu was acting strange yesterday and I didn’t get to interrogate him at all…)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(And that girl, Fumiko, maybe I should have a chat with her again too.)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Amaya definitely was at the Tree in the night as the Warden. She could’ve gotten the Bead while everyone was asleep and removed all traces while pretending to secure the area...)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(But even if she’s not the culprit, shouldn’t she have seen something? I need to ask her more about what she was doing and what she saw last night…)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(I better head out!)</i>");
        SakuraGlade.ƒS.Speech.clear();
        SakuraGlade.ƒS.Speech.hide();
    }
    SakuraGlade.Day2Morning = Day2Morning;
})(SakuraGlade || (SakuraGlade = {}));
//# sourceMappingURL=SakuraGlade.js.map