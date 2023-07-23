"use strict";
var SakuraGlade;
(function (SakuraGlade) {
    SakuraGlade.ƒ = FudgeCore;
    SakuraGlade.ƒS = FudgeStory;
    console.log("Secrets of Sakura Glade starting");
    // cpms = characters per millisecond
    SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
    SakuraGlade.transitions = {
        eye: {
            duration: 1,
            alpha: "Images/Transitions/eyes.jpg",
            edge: .2
        },
        normal: {
            duration: 1,
            alpha: "Images/Transitions/transition.jpg",
            edge: 0.1
        }
    };
    function middleToRight() {
        return {
            start: { translation: SakuraGlade.ƒS.positionPercent(50, 100) },
            end: { translation: SakuraGlade.ƒS.positionPercent(70, 100) },
            duration: 1,
            playmode: SakuraGlade.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    SakuraGlade.middleToRight = middleToRight;
    function leftToMiddle() {
        return {
            start: { translation: SakuraGlade.ƒS.positionPercent(30, 100) },
            end: { translation: SakuraGlade.ƒS.positionPercent(50, 100) },
            duration: 1,
            playmode: SakuraGlade.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    SakuraGlade.leftToMiddle = leftToMiddle;
    SakuraGlade.sound = {
        // themes
        forest: "Audio/fantasy-classical-themes.mp3",
        village: "Audio/koto.mp3",
        festival: "Audio/ongaku.mp3",
        nobu: "Audio/japan-origami.mp3",
        kohana: "Audio/among-the-cherry-blossom.mp3",
        amaya: "Audio/the-shinning-moon-princess.mp3",
        fumiko: "Audio/in-the-place-far-away.mp3",
        sad: "Audio/the-garden-of-ajisai.mp3",
        // SFX
        item: "Audio/pick-up-item.wav",
        crowd: "Audio/crowd.mp3"
    };
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
            background: "Images/Locations/park_evening.png"
        },
        sakuraGladeNight: {
            name: "Sakura Glade (Night)",
            background: "Images/Locations/park_night.png"
        },
        innDay: {
            name: "Cherrywood Lodge (Day)",
            background: "Images/Locations/inn.png"
        },
        innNight: {
            name: "Cherrywood Lodge (Night)",
            background: "Images/Locations/inn_night.png"
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
                neutral: "Images/Characters/Amaya_neutral.png",
                sad: "Images/Characters/Amaya_sad.png",
                smiling: "Images/Characters/Amaya_smiling.png",
                surprised: "Images/Characters/Amaya_surprised.png",
                thinking: "Images/Characters/Amaya_thinking.png",
                upset: "Images/Characters/Amaya_upset.png"
            }
        },
        nobu: {
            name: "Nobu",
            origin: SakuraGlade.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Images/Characters/Nobu_neutral.png",
                sad: "Images/Characters/Nobu_sad.png",
                smiling: "Images/Characters/Nobu_smiling.png",
                surprised: "Images/Characters/Nobu_surprised.png",
                thinking: "Images/Characters/Nobu_thinking.png",
                laughing: "Images/Characters/Nobu_laughing.png"
            }
        },
        kohana: {
            name: "Kohana",
            origin: SakuraGlade.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Images/Characters/Kohana_neutral.png",
                sad: "Images/Characters/Kohana_sad.png",
                smiling: "Images/Characters/Kohana_smiling.png",
                surprised: "Images/Characters/Kohana_surprised.png",
                thinking: "Images/Characters/Kohana_thinking.png"
            }
        },
        fumiko: {
            name: "Fumiko",
            origin: SakuraGlade.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Images/Characters/Fumiko_neutral.png",
                sad: "Images/Characters/Fumiko_sad.png",
                smiling: "Images/Characters/Fumiko_smiling.png",
                surprised: "Images/Characters/Fumiko_surprised.png",
                thinking: "Images/Characters/Fumiko_thinking.png",
                crying: "Images/Characters/Fumiko_crying.png"
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
            name: "Broken Crystal Earring",
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
            image: "Images/Items/moonBead.png",
            static: true,
            handler: hndItem,
        },
        crystalEarring: {
            name: "Crystal Earring",
            description: "The undamaged counterpart of Fumiko’s crystal earring. She gave it to me to remember her. ",
            image: "Images/Items/earring.png",
            static: true,
            handler: hndItem,
        }
    };
    // item description updates
    SakuraGlade.updatedItemDescriptions = {
        blackOoze: "Black slime that must have drooped from Amaya’s cap while she was patrolling the Sacred Tree on the night of the incident. Why didn’t she notice it fall down?",
        brokenEarring: "An earring belonging to Fumiko that I found near the Sacred Tree. It’s broken, unfortunately. She claims to have lost it during the day of the incident.",
        medicalNotice: "A medical record that factually explains Hina’s incurable “mummy disease”. The news must have been heartbreaking… He claims to have gone out for a stroll and prayed at the Sacred Tree around 1:30 am.",
        replica: "A glass replica of the Moon Bead. It was found in place of the original at the Sacred Tree. I believe it was stolen from the temple sometime after midnight while Kohana was bathing."
    };
    SakuraGlade.dataForSave = {
        nameProtagonist: "",
        genderProtagonist: "",
        investigationPoints: 0,
        day1TalkedTo: Array(),
        day2TalkedTo: Array(),
        itemsUpdated: Array(),
        pointsReceived: Array(),
        inventory: Array()
    };
    for (let updatedItem of SakuraGlade.dataForSave.itemsUpdated) {
        switch (updatedItem) {
            case SakuraGlade.items.blackOoze:
                SakuraGlade.items.blackOoze.description = SakuraGlade.updatedItemDescriptions.blackOoze;
                break;
            case SakuraGlade.items.replica:
                SakuraGlade.items.replica.description = SakuraGlade.updatedItemDescriptions.replica;
                break;
            case SakuraGlade.items.medicalNotice:
                SakuraGlade.items.medicalNotice.description = SakuraGlade.updatedItemDescriptions.medicalNotice;
                break;
            case SakuraGlade.items.brokenEarring:
                SakuraGlade.items.brokenEarring.description = SakuraGlade.updatedItemDescriptions.brokenEarring;
                break;
        }
    }
    function hndItem(_event) {
        if (_event.type == "pointerdown") {
            console.log('clicked on the item (new class)');
            let targetName = _event.detail;
            let targetId = targetName.replace(/ /g, "_");
            let targetElement = document.querySelector('#' + targetId);
            let present = document.querySelector('#present');
            if (targetElement.classList.contains('selected')) {
                targetElement.classList.remove('selected');
            }
            else {
                if (document.querySelector('.selected')) {
                    document.querySelector('.selected').classList.remove('selected');
                }
                targetElement.classList.add('selected');
            }
            // if during day2 investigations
            if (SakuraGlade.currentCharacter) {
                if (targetElement.classList.contains('selected')) {
                    present.classList.remove('hidden');
                }
                else {
                    present.classList.add('hidden');
                }
            }
            // if good ending final scene
            if (SakuraGlade.extraItemInteraction == SakuraGlade.items.moonBead) {
                if (targetName == SakuraGlade.items.moonBead.name && targetElement.classList.contains('selected')) {
                    present.classList.remove('hidden');
                }
                else {
                    present.classList.add('hidden');
                }
            }
            // if amaya permit scene
            if (SakuraGlade.extraItemInteraction == SakuraGlade.items.permit) {
                if (targetName == SakuraGlade.items.permit.name && targetElement.classList.contains('selected')) {
                    present.classList.remove('hidden');
                }
                else {
                    present.classList.add('hidden');
                }
            }
        }
    }
    SakuraGlade.hndItem = hndItem;
    function credits() {
        SakuraGlade.ƒS.Text.print("<h2>Credits</h2><div class='credits-text'><li><span><b>Concept, Characterdesign, Script: </b></span><span>Amélie Dell'Oro</span></li><li><span><b>Character Sprites: </b></span><span>Amélie Dell'Oro (<i class='fa-brands fa-instagram'></i> @ivy_arts03)<br>GinGin (<i class='fa-brands fa-instagram'></i> @anxi.art)<br>Anna Borisovich (<i class='fa-brands fa-instagram'></i> @_alluusion)</span></li><li><span><b>Item Sprites: </b></span><span>Amélie Dell'Oro</span></li><li><span><b>Backgrounds: </b></span><span>Amélie Dell'Oro<br>Midjourney</span></li><li><span><b>Music: </b></span></li><ul><li><span><b>In the Place Far Away, The Garden of Ajisai: </b></span><span>HarumachiMusic on Pixabay</span></li><li><span><b>Ongaku, Koto: </b></span><span>Monument_Music on Pixabay</span></li><li><span><b>Japan Origami: </b></span><span>FreeGroove on Pixabay</span></li><li><span><b>Among The Cherry Blossom: </b></span><span>kaazoom on Pixabay</span></li><li><span><b>The Shinning Moon Princess: </b></span><span>OB-LIX on Pixabay</span></li></ul><li><span><b>SFX: </b></span><span>FreeSound.org</span></li></div><span><b>Special thanks to GinGin and TimTim for their input, support and playtesting!</b></span>");
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
            case SakuraGlade.ƒ.KEYBOARD_CODE.ESC:
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
        // Inventory button 
        let invButton = document.querySelector("#inv-open");
        invButton.addEventListener("pointerdown", async function (_event) {
            _event.stopPropagation();
            console.log("Open Inventory");
            await SakuraGlade.Inventory.open();
        });
        // Scene Hierarchy 
        let scenes = [
            { scene: SakuraGlade.Start, name: "Start Scene" },
            { scene: SakuraGlade.Intro, name: "Intro Scene" },
            { scene: SakuraGlade.FairieForest, name: "Fairie Forest" },
            { scene: SakuraGlade.WelcomeSakuraGlade, name: "Welcome to Sakura Glade" },
            { scene: SakuraGlade.Day1Morning, name: "Day 1 Morning", next: "Day1Locations" },
            { id: "Day1Locations", scene: SakuraGlade.day1Locations, name: "Day 1 Locations" },
            { id: "Day1Kohana", scene: SakuraGlade.Day1Kohana, name: "Day 1 Kohana", next: "Day1Locations" },
            { id: "Day1Amaya", scene: SakuraGlade.Day1Amaya, name: "Day 1 Amaya", next: "Day1Locations" },
            { id: "Day1Nobu", scene: SakuraGlade.Day1Nobu, name: "Day 1 Nobu", next: "Day1Locations" },
            { id: "Day1Fumiko", scene: SakuraGlade.Day1Fumiko, name: "Day 1 Fumiko" },
            { scene: SakuraGlade.Day2Morning, name: "Day 2 Morning" },
            { scene: SakuraGlade.Day2SacredTree, name: "Day 2 Sacred Tree", next: "Day2Amaya" },
            { id: "Day2Locations", scene: SakuraGlade.day2Locations, name: "Day 2 Locations" },
            { id: "Day2Amaya", scene: SakuraGlade.Day2Amaya, name: "Day 2 Amaya", next: "Day2Locations" },
            { id: "Day2Kohana", scene: SakuraGlade.Day2Kohana, name: "Day 2 Kohana", next: "Day2Locations" },
            { id: "Day2Nobu", scene: SakuraGlade.Day2Nobu, name: "Day 2 Nobu", next: "Day2Locations" },
            { id: "Day2Fumiko", scene: SakuraGlade.Day2Fumiko, name: "Fumiko", next: "Day2Locations" },
            { id: "Day2Evening", scene: SakuraGlade.Day2Evening, name: "Day 2 Evening", next: "Day3Morning" },
            { id: "Day2Breakdown", scene: SakuraGlade.Day2Breakdown, name: "Day 2 Breakdown", next: "Day3Morning" },
            { id: "Day3Morning", scene: SakuraGlade.Day3Morning, name: "Day 3 Morning", next: "Day3Showdown" },
            { id: "Day3Showdown", scene: SakuraGlade.Day3Showdown, name: "Day 3 Showdown" },
            { id: "BadEnding", scene: SakuraGlade.BadEnding, name: "Bad Ending", next: "EndScene" },
            { id: "BittersweetEnding", scene: SakuraGlade.BittersweetEnding, name: "Bittersweet Ending", next: "EndScene" },
            { id: "GoodEnding", scene: SakuraGlade.GoodEnding, name: "Good Ending", next: "EndScene" },
            // empty scene to stop the program
            { id: "EndScene", scene: SakuraGlade.EndScene, name: "End Scene" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        SakuraGlade.dataForSave = SakuraGlade.ƒS.Progress.setData(SakuraGlade.dataForSave, uiElement);
        // start the sequence
        SakuraGlade.ƒS.Progress.go(scenes);
        console.log('it should now add items');
        console.log(SakuraGlade.dataForSave.inventory);
        for (let item of SakuraGlade.dataForSave.inventory) {
            console.log('add items to inventory!');
            SakuraGlade.Inventory.add(item);
        }
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
        if (SakuraGlade.dataForSave.day1TalkedTo.includes(SakuraGlade.characters.kohana)) {
            delete options.kohana;
        }
        if (SakuraGlade.dataForSave.day1TalkedTo.includes(SakuraGlade.characters.amaya)) {
            delete options.amaya;
        }
        if (SakuraGlade.dataForSave.day1TalkedTo.includes(SakuraGlade.characters.nobu)) {
            delete options.nobu;
        }
        if (Object.keys(options).length > 0) {
            let optionsElement = await SakuraGlade.ƒS.Menu.getInput(options, "choices");
            switch (optionsElement) {
                case options.kohana:
                    // continue path here
                    SakuraGlade.ƒS.Speech.clear();
                    SakuraGlade.ƒS.Speech.hide();
                    return "Day1Kohana";
                case options.amaya:
                    // continue path here
                    SakuraGlade.ƒS.Speech.clear();
                    SakuraGlade.ƒS.Speech.hide();
                    return "Day1Amaya";
                case options.nobu:
                    // continue path here
                    if (SakuraGlade.dataForSave.day1TalkedTo.includes(SakuraGlade.characters.kohana)) {
                        SakuraGlade.ƒS.Speech.clear();
                        SakuraGlade.ƒS.Speech.hide();
                        return "Day1Nobu";
                    }
                    else {
                        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Nobu asked me to talk to Kohana. I should do that before I start looking for him...)</i>");
                        return "Day1Locations";
                    }
            }
        }
        else {
            SakuraGlade.ƒS.Speech.clear();
            SakuraGlade.ƒS.Speech.hide();
            return "Day1Fumiko";
        }
    }
    SakuraGlade.day1Locations = day1Locations;
    async function day2Locations() {
        let options = {
            amaya: "Sacred Tree",
            kohana: "Temple",
            fumiko: "Village Square",
            nobu: "Nobu’s Home",
            inn: "Back to Inn"
        };
        let optionsElement = await SakuraGlade.ƒS.Menu.getInput(options, "choices");
        switch (optionsElement) {
            case options.amaya:
                // continue path here
                SakuraGlade.ƒS.Speech.clear();
                SakuraGlade.ƒS.Speech.hide();
                return "Day2Amaya";
            case options.kohana:
                // continue path here
                SakuraGlade.ƒS.Speech.clear();
                SakuraGlade.ƒS.Speech.hide();
                return "Day2Kohana";
            case options.fumiko:
                // continue path here
                SakuraGlade.ƒS.Speech.clear();
                SakuraGlade.ƒS.Speech.hide();
                return "Day2Fumiko";
            case options.nobu:
                // continue path here
                SakuraGlade.ƒS.Speech.clear();
                SakuraGlade.ƒS.Speech.hide();
                return "Day2Nobu";
            case options.inn:
                // continue path here
                if (SakuraGlade.dataForSave.day2TalkedTo.includes(SakuraGlade.characters.kohana) && SakuraGlade.dataForSave.day2TalkedTo.includes(SakuraGlade.characters.amaya) && SakuraGlade.dataForSave.day2TalkedTo.includes(SakuraGlade.characters.fumiko) && SakuraGlade.dataForSave.day2TalkedTo.includes(SakuraGlade.characters.nobu)) {
                    // check if all relevant items updated
                    if (SakuraGlade.dataForSave.itemsUpdated.includes(SakuraGlade.items.blackOoze) && SakuraGlade.dataForSave.itemsUpdated.includes(SakuraGlade.items.medicalNotice) && SakuraGlade.dataForSave.itemsUpdated.includes(SakuraGlade.items.replica) && SakuraGlade.dataForSave.itemsUpdated.includes(SakuraGlade.items.brokenEarring)) {
                        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.narrator, "Are you sure you wish to go back to the inn?");
                        let options = {
                            yes: "Yes, I've seen everything.",
                            no: "Actually, I still wanted to check something"
                        };
                        let optionsElement = await SakuraGlade.ƒS.Menu.getInput(options, "choices");
                        switch (optionsElement) {
                            case options.yes:
                                // continue path here
                                SakuraGlade.ƒS.Speech.clear();
                                SakuraGlade.ƒS.Speech.hide();
                                return "Day2Evening";
                            case options.no:
                                // continue path here
                                return "Day2Locations";
                        }
                    }
                    else {
                        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(I still have questions about the things I found, I shouldn’t head back yet...)</i>");
                        return "Day2Locations";
                    }
                }
                else {
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(I don’t think I should go back to the inn yet, I haven’t even talked to everyone...)</i>");
                    return "Day2Locations";
                }
        }
    }
    SakuraGlade.day2Locations = day2Locations;
    async function day2Inventory() {
        let inv = await SakuraGlade.Inventory.open();
        console.log(inv);
        switch (inv[0]) {
            case "present":
                console.log("it should technically open the inventory again");
                await day2Inventory();
                break;
            case "close":
                break;
        }
    }
    SakuraGlade.day2Inventory = day2Inventory;
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
        // ^ ???
        SakuraGlade.ƒS.Speech.hide();
        let input = document.querySelector("dialog#start");
        input.showModal();
        await new Promise((_resolve) => {
            input.querySelector("button").addEventListener("click", _resolve);
        });
        let form = new FormData(document.forms[0]);
        while (!document.forms[0].checkValidity() || form.get("name") == "") {
            if (form.get("name") == "") {
                alert('You have to input a name!');
            }
            if (!document.forms[0].checkValidity()) {
                alert('Your name may not contain special characters!');
            }
            await new Promise((_resolve) => {
                input.querySelector("button").addEventListener("click", _resolve);
            });
            form = new FormData(document.forms[0]);
        }
        SakuraGlade.dataForSave.nameProtagonist = form.get("name");
        SakuraGlade.dataForSave.genderProtagonist = form.get("pronouns");
        input.close();
        SakuraGlade.ƒS.update(1);
        // for testing
        SakuraGlade.ƒS.Inventory.add(SakuraGlade.items.phone);
        SakuraGlade.ƒS.Inventory.add(SakuraGlade.items.idCard);
    }
    SakuraGlade.Start = Start;
})(SakuraGlade || (SakuraGlade = {}));
var SakuraGlade;
(function (SakuraGlade) {
    // character dialogues regarding items
    async function AmayaReactToItem(_item) {
        switch (_item) {
            case SakuraGlade.items.phone:
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
                await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.surprised, SakuraGlade.ƒS.positionPercent(50, 100));
                await SakuraGlade.ƒS.update(.1);
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "Is this a fairy device?");
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
                await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
                await SakuraGlade.ƒS.update(.1);
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "If it's not going to help us find the culprit I don't know why you're showing me this.");
                break;
            case SakuraGlade.items.idCard:
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
                await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.thinking, SakuraGlade.ƒS.positionPercent(50, 100));
                await SakuraGlade.ƒS.update(.1);
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "Interesting... What does this have to do with anything?");
                break;
            case SakuraGlade.items.permit:
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
                await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.upset, SakuraGlade.ƒS.positionPercent(50, 100));
                await SakuraGlade.ƒS.update(.1);
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "I gave this to you, so you should keep it. Don't lose it.");
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
                await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
                await SakuraGlade.ƒS.update(.1);
                break;
            case SakuraGlade.items.blackOoze:
                if (SakuraGlade.dataForSave.itemsUpdated.includes(SakuraGlade.items.blackOoze)) {
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.sad, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "We've talked about this before, Cub. I probably lost this while patrolling.");
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                }
                else {
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.surprised, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "Oh... where did you get that from?");
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "It was on the ground near the Sacred Tree. Do you know what it is?");
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.sad, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "Look, Cub, I'm not particularly proud of it, but as you can see my cap dissolves at the edges.");
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "Sometimes a drop falls down. I try to clean up after myself, but eventually, I'll miss one. Don't worry. It's not unsanitary.");
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "I found it quite a bit away from the shrine, what were you doing over there?");
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.upset, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "I don't stand in one spot like a statue all night, Cub.");
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.thinking, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "This might've dropped down during my patrol. I must've been too busy to notice it.");
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Busy...?)</i>");
                    // update item description
                    SakuraGlade.items.blackOoze.description = SakuraGlade.updatedItemDescriptions.blackOoze;
                    let targetElementDescription = document.querySelector("#Black_Ooze>description");
                    targetElementDescription.innerHTML = SakuraGlade.items.blackOoze.description;
                    SakuraGlade.dataForSave.itemsUpdated.push(SakuraGlade.items.blackOoze);
                }
                break;
            case SakuraGlade.items.brokenEarring:
                if (SakuraGlade.dataForSave.itemsUpdated.includes(SakuraGlade.items.brokenEarring)) {
                    if (!SakuraGlade.dataForSave.pointsReceived.includes(SakuraGlade.characters.amaya.name + SakuraGlade.items.brokenEarring.name)) {
                        SakuraGlade.dataForSave.investigationPoints += 5;
                        SakuraGlade.dataForSave.pointsReceived.push(SakuraGlade.characters.amaya.name + SakuraGlade.items.brokenEarring.name);
                    }
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.surprised, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "So this belongs to Fumiko?");
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.thinking, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "...");
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.upset, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "That is strange. I didn't see her around here that day... And it certainly didn't get here yesterday. I was guarding the area meticulously.");
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Could she have lost it before the day of the incident?");
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.thinking, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "That's unlikely... the place was cleaned just the day before.");
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Hmm... thank you.");
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(This means Fumiko definitely lost it on the night of the incident...)</i>");
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                }
                else {
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.surprised, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "That is a stunning earring. A shame that it's broken.");
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.thinking, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "Why are you showing me this, Cub?");
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "I found it on the ground near the Sacred Tree. Do you know who it belongs to?");
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "Interesting...");
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "I'm afraid I do not. But Fumiko's family runs the jewelry shop. Maybe she knows who bought it.");
                }
                break;
            case SakuraGlade.items.medicalNotice:
                if (SakuraGlade.dataForSave.itemsUpdated.includes(SakuraGlade.items.medicalNotice)) {
                    if (SakuraGlade.dataForSave.investigationPoints >= 15) {
                        if (!SakuraGlade.dataForSave.pointsReceived.includes(SakuraGlade.characters.amaya.name + SakuraGlade.items.medicalNotice.name)) {
                            SakuraGlade.dataForSave.investigationPoints += 5;
                            SakuraGlade.dataForSave.pointsReceived.push(SakuraGlade.characters.amaya.name + SakuraGlade.items.medicalNotice.name);
                            await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
                            await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.surprised, SakuraGlade.ƒS.positionPercent(50, 100));
                            await SakuraGlade.ƒS.update(.1);
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "Nobu's daughter?");
                            await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
                            await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.sad, SakuraGlade.ƒS.positionPercent(50, 100));
                            await SakuraGlade.ƒS.update(.1);
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "You wouldn't suspect he would be in so much secret pain, would you...");
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "I suppose he's good at looking at the bright things in life. However, this is not why I am showing you this.");
                            await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
                            await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.thinking, SakuraGlade.ƒS.positionPercent(50, 100));
                            await SakuraGlade.ƒS.update(.1);
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "Do enlighten me.");
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Well, Nobu claims to have been at the Tree the night of the incident at around half past one to speak a prayer. Yet you've claimed to not have noticed anyone.");
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "A stealthy thief, maybe not, but I'm sure Nobu was not trying to avoid anyone. He claims to not have seen you either.");
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "What were you doing at half past one?");
                            await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
                            await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.sad, SakuraGlade.ƒS.positionPercent(50, 100));
                            await SakuraGlade.ƒS.update(.1);
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "I...");
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(This might be it. Though I can't believe it... why would she steal it??)</i>");
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "...");
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "Listen, Cub. I'd prefer this to be kept quiet.");
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "I'm only telling you because, well, I don't think I would've been able to keep it secret from you for long. It had to come out at some point.");
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "...");
                            SakuraGlade.ƒS.Sound.fade(SakuraGlade.sound.amaya, 0, 2);
                            await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
                            await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
                            await SakuraGlade.ƒS.update(.1);
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "I might've not been on my post at that time.");
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "What were you doing then?");
                            SakuraGlade.ƒS.Sound.play(SakuraGlade.sound.sad, .5, true);
                            await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
                            await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.sad, SakuraGlade.ƒS.positionPercent(50, 100));
                            await SakuraGlade.ƒS.update(.1);
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "...");
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "You know... I used to have a family.");
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "A husband. A child on its way...");
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "I lost it before it could see the light of day. I... It wasn't the same anymore after that.");
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "I don't expect you to understand the pain I felt, Cub. I hope you cannot, in fact.");
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "I guess it started around then, I would search for ways to forget...");
                            await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
                            await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.smiling, SakuraGlade.ƒS.positionPercent(50, 100));
                            await SakuraGlade.ƒS.update(.1);
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "Then I found Kohana. She brought light into my life when everything seemed dark. I devoted myself to this job, all day, all night, so I wouldn't allow myself to feel.");
                            await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
                            await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.sad, SakuraGlade.ƒS.positionPercent(50, 100));
                            await SakuraGlade.ƒS.update(.1);
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "But at night, when no one can see, it still haunts me. So I drown it. It became a habit. When I can't take it, I drink a bottle or two to feel okay again.");
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "...");
                            await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
                            await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
                            await SakuraGlade.ƒS.update(.1);
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "Ah, why am I telling you all this? I guess I crave your sympathy. But it's alright. Now you know the truth.");
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(She's right, I can't fathom the pain she must've gone through...)</i>");
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "I'm incredibly sorry for you.");
                            await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
                            await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.sad, SakuraGlade.ƒS.positionPercent(50, 100));
                            await SakuraGlade.ƒS.update(.1);
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "Don't be. There's nothing you could do to change the past.");
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(... At least this means it wasn't her...)</i>");
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Well, so...");
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "When did you leave your post?");
                            await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
                            await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
                            await SakuraGlade.ƒS.update(.1);
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "Around one a.m. ... I didn't check the specific time but I was back at my post shortly before two.");
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(So there's about an hour span where the Tree was unguarded that night between one and two am. Nobu arrived at 1:30 am and got home shortly before 2 am. It's unlikely someone managed to sneak by before Amaya came back.)</i>");
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(But there is still half an hour's gap before, which is when the theft must have happened!)</i>");
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Thank you for telling me this, Amaya. I can now definitely narrow down the timeframe of the theft.");
                            await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
                            await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.sad, SakuraGlade.ƒS.positionPercent(50, 100));
                            await SakuraGlade.ƒS.update(.1);
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "I'm sorry I couldn't tell you this earlier. Please keep it quiet. My life depends on this job.");
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Of course. I'm in no position to talk about what you just told me.");
                            await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
                            await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.smiling, SakuraGlade.ƒS.positionPercent(50, 100));
                            await SakuraGlade.ƒS.update(.1);
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "Thank you, Cub.");
                            await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
                            await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
                            await SakuraGlade.ƒS.update(.1);
                            SakuraGlade.ƒS.Sound.fade(SakuraGlade.sound.sad, 0, 2);
                            SakuraGlade.ƒS.Sound.play(SakuraGlade.sound.amaya, .5, true);
                        }
                        else {
                            await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
                            await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.sad, SakuraGlade.ƒS.positionPercent(50, 100));
                            await SakuraGlade.ƒS.update(.1);
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "Please don't make me repeat myself...");
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Could you just remind me when exactly you were absent from your post?");
                            await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
                            await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
                            await SakuraGlade.ƒS.update(.1);
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "It must have been between one and shortly before two am.");
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Thank you.");
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(So there's about an hour span where the Tree was unguarded that night between one and two am. Nobu arrived at 1:30 am and got home shortly before 2 am. It's unlikely someone managed to sneak by before Amaya came back.)</i>");
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(But there is still half an hour's gap before, which is when the theft must have happened!)</i>");
                        }
                    }
                    else {
                        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
                        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.surprised, SakuraGlade.ƒS.positionPercent(50, 100));
                        await SakuraGlade.ƒS.update(.1);
                        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "Nobu's daughter? I didn't know he had one.");
                        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
                        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.sad, SakuraGlade.ƒS.positionPercent(50, 100));
                        await SakuraGlade.ƒS.update(.1);
                        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "How terrible...");
                        // more dialogue here would be nice if I have enough time
                    }
                }
                else {
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.surprised, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "That appears to be sensitive information.");
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.upset, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "You shouldn't go around showing it to strangers.");
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                }
                break;
            case SakuraGlade.items.replica:
                if (SakuraGlade.dataForSave.itemsUpdated.includes(SakuraGlade.items.replica)) {
                    if (!SakuraGlade.dataForSave.pointsReceived.includes(SakuraGlade.characters.amaya.name + SakuraGlade.items.replica.name)) {
                        SakuraGlade.dataForSave.investigationPoints += 5;
                        SakuraGlade.dataForSave.pointsReceived.push(SakuraGlade.characters.amaya.name + SakuraGlade.items.replica.name);
                    }
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.thinking, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "You think it was stolen from Kohana after midnight?");
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "Hmm... The thief has some cunning to replace the original with it.");
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "What do you mean by that?");
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "You can't tell the difference from afar, so I wouldn't notice anything amiss. It makes it impossible to determine when exactly the Moon Bead was stolen until Kohana would come to check on it.");
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "That seems quite clever.");
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "Indeed.");
                }
                else {
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "The Priestess keeps the replica for practicing the rituals. If you have questions about it you should ask Kohana.");
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.thinking, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "We should figure out when it was stolen from her... Let me know once you have more information on that.");
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                }
                break;
        }
    }
    SakuraGlade.AmayaReactToItem = AmayaReactToItem;
    async function KohanaReactToItem(_item) {
        switch (_item) {
            case SakuraGlade.items.phone:
                SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
                await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.surprised, SakuraGlade.ƒS.positionPercent(50, 100));
                await SakuraGlade.ƒS.update(.1);
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "... what is this? A magic device?");
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
                await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
                await SakuraGlade.ƒS.update(.1);
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "It's not doing anything...");
                SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
                break;
            case SakuraGlade.items.idCard:
                SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
                await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.thinking, SakuraGlade.ƒS.positionPercent(50, 100));
                await SakuraGlade.ƒS.update(.1);
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "That's... a pretty card...");
                SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
                await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
                await SakuraGlade.ƒS.update(.1);
                break;
            case SakuraGlade.items.permit:
                SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
                await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.smiling, SakuraGlade.ƒS.positionPercent(50, 100));
                await SakuraGlade.ƒS.update(.1);
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "Mh... Onee-sama doesn't let just anyone to the Tree right now. She must trust you...");
                SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
                await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
                await SakuraGlade.ƒS.update(.1);
                break;
            case SakuraGlade.items.blackOoze:
                SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
                await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.thinking, SakuraGlade.ƒS.positionPercent(50, 100));
                await SakuraGlade.ƒS.update(.1);
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "...that probably belongs to Onee-sama...");
                SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
                await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
                await SakuraGlade.ƒS.update(.1);
                break;
            case SakuraGlade.items.brokenEarring:
                if (SakuraGlade.dataForSave.itemsUpdated.includes(SakuraGlade.items.brokenEarring)) {
                    SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.sad, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "... I'm sorry for her. She usually never breaks things...");
                    SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                }
                else {
                    SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.surprised, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "Mh... a radiant crystal. That is quite beautiful...");
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "I found it on the ground near the Sacred Tree. Do you know who it belongs to?");
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.thinking, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "No... I don't think so. Although it reminds me of Fumiko.");
                    SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                }
                break;
            case SakuraGlade.items.medicalNotice:
                if (SakuraGlade.dataForSave.itemsUpdated.includes(SakuraGlade.items.medicalNotice)) {
                    SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.sad, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "... I hope the Moon God hears his prayers...");
                    SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                }
                else {
                    SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.thinking, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "I don't think I'm supposed to read that...");
                    SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                }
                break;
            case SakuraGlade.items.replica:
                if (SakuraGlade.dataForSave.itemsUpdated.includes(SakuraGlade.items.replica)) {
                    SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "... Keep it.");
                    SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
                }
                else {
                    SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "... Keep it.");
                    SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "I want to ask you something about it.");
                    SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "Mh?");
                    SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Do you hold on to this at all times?");
                    SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "Yes... I keep it in the temple for practice. No one else uses it...");
                    SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "What did you do on the day of the incident?");
                    SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.thinking, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "I cleansed the Moon Bead in the morning... and went about my duties... cleansed the Moon Bead in the evening again, and went home. I practiced for the Moon Ritual.");
                    SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "With the replica?");
                    SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "Mh.");
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "... I then went to take a bath... After that I went to bed.");
                    SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "When was that?");
                    SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.thinking, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "I finish my practice and take my bath at midnight... I go to bed at one.");
                    SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "You do this regularly?");
                    SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "Mh. Every day.");
                    SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Where do you keep the replica during that time?");
                    SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "In my room at the temple...");
                    SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Someone who knew her routine would easily be able to wait for the replica to be unattended...)</i>");
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Did you check on it before going to bed?");
                    SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.sad, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "...no.");
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "I noticed it missing when I woke up. Later I found it at the shrine... you know the rest.");
                    SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(So the culprit could have stolen the replica from the temple to replace the Moon Bead at some point after midnight...)</i>");
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Thank you.");
                    // update item description
                    SakuraGlade.items.replica.description = SakuraGlade.updatedItemDescriptions.replica;
                    let targetElementDescription = document.querySelector("#Replica_of_the_Moon_Bead>description");
                    targetElementDescription.innerHTML = SakuraGlade.items.replica.description;
                    SakuraGlade.dataForSave.itemsUpdated.push(SakuraGlade.items.replica);
                }
                break;
        }
    }
    SakuraGlade.KohanaReactToItem = KohanaReactToItem;
    async function FumikoReactToItem(_item) {
        switch (_item) {
            case SakuraGlade.items.phone:
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
                await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.thinking, SakuraGlade.ƒS.positionPercent(50, 100));
                await SakuraGlade.ƒS.update(.1);
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Precious, I'm not sure what you're trying to show me here...");
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
                await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
                await SakuraGlade.ƒS.update(.1);
                break;
            case SakuraGlade.items.idCard:
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
                await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.smiling, SakuraGlade.ƒS.positionPercent(50, 100));
                await SakuraGlade.ƒS.update(.1);
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "What a precious portrait of you! What is all this information for?");
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
                await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
                await SakuraGlade.ƒS.update(.1);
                break;
            case SakuraGlade.items.permit:
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "The Sacred Tree isn't accessible to most of us right now, so good luck with your investigations!");
                break;
            case SakuraGlade.items.blackOoze:
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
                await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.surprised, SakuraGlade.ƒS.positionPercent(50, 100));
                await SakuraGlade.ƒS.update(.1);
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Please don't hold that too close to my face. And don't drop any on my kimono either!");
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
                await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.sad, SakuraGlade.ƒS.positionPercent(50, 100));
                await SakuraGlade.ƒS.update(.1);
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Inky Cap stains are impossible to wash out of silk...");
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
                await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
                await SakuraGlade.ƒS.update(.1);
                break;
            case SakuraGlade.items.brokenEarring:
                if (SakuraGlade.dataForSave.itemsUpdated.includes(SakuraGlade.items.brokenEarring)) {
                    if (SakuraGlade.dataForSave.investigationPoints >= 20) {
                        if (!SakuraGlade.dataForSave.pointsReceived.includes(SakuraGlade.characters.fumiko.name + SakuraGlade.items.brokenEarring.name)) {
                            SakuraGlade.dataForSave.pointsReceived.push(SakuraGlade.characters.fumiko.name + SakuraGlade.items.brokenEarring.name);
                            await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
                            await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.sad, SakuraGlade.ƒS.positionPercent(50, 100));
                            await SakuraGlade.ƒS.update(.1);
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "I must've not noticed it fall off...");
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Oh, Mom and Dad will surely be upset...");
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "What exactly were you doing at the Tree during the day of the incident?");
                            await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
                            await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.surprised, SakuraGlade.ƒS.positionPercent(50, 100));
                            await SakuraGlade.ƒS.update(.1);
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Oh, probably just, running errands.");
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "You said earlier you went past it a couple of times because of the decorations.");
                            await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
                            await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.smiling, SakuraGlade.ƒS.positionPercent(50, 100));
                            await SakuraGlade.ƒS.update(.1);
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "That's what I meant.");
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "However, Amaya claims she didn't see you at the Tree all day.");
                            await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
                            await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.surprised, SakuraGlade.ƒS.positionPercent(50, 100));
                            await SakuraGlade.ƒS.update(.1);
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Ah?");
                            await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
                            await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.thinking, SakuraGlade.ƒS.positionPercent(50, 100));
                            await SakuraGlade.ƒS.update(.1);
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Well, she's not always right at the Tree. She has lunch breaks, too, you know.");
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(That's strangely unspecific...)</i>");
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "What were you doing at one am?");
                            await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
                            await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.surprised, SakuraGlade.ƒS.positionPercent(50, 100));
                            await SakuraGlade.ƒS.update(.1);
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "One am?");
                            await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
                            await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.thinking, SakuraGlade.ƒS.positionPercent(50, 100));
                            await SakuraGlade.ƒS.update(.1);
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Well, I go to bed quite early, I need my beauty sleep.");
                            await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
                            await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
                            await SakuraGlade.ƒS.update(.1);
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Talking about unspecific answers...)</i>");
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Amaya was drinking at the time, Nobu was praying, Kohana and Fumiko were sleeping... one of them has to be lying...)</i>");
                        }
                        else {
                            await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
                            await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.sad, SakuraGlade.ƒS.positionPercent(50, 100));
                            await SakuraGlade.ƒS.update(.1);
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "I must've not noticed it fall off...");
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Oh, Mom and Dad will surely be upset...");
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "What were you doing at one am?");
                            await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
                            await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.surprised, SakuraGlade.ƒS.positionPercent(50, 100));
                            await SakuraGlade.ƒS.update(.1);
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "One am?");
                            await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
                            await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.thinking, SakuraGlade.ƒS.positionPercent(50, 100));
                            await SakuraGlade.ƒS.update(.1);
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Well, I go to bed quite early, I need my beauty sleep.");
                            await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
                            await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
                            await SakuraGlade.ƒS.update(.1);
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Amaya was drinking at the time, Nobu was praying, Kohana and Fumiko were sleeping... one of them has to be lying...)</i>");
                        }
                    }
                    else {
                        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
                        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.sad, SakuraGlade.ƒS.positionPercent(50, 100));
                        await SakuraGlade.ƒS.update(.1);
                        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "I must've not noticed it fall off...");
                        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Oh, Mom and Dad will surely be upset...");
                        // more dialogue here would be nice if I have enough time
                    }
                }
                else {
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.surprised, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Oh my- where did you find that?");
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "I found it on the ground near the Sacred Tree. Do you know who it belongs to?");
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Why yes, that's mine!");
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.thinking, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "I've been searching for this since... well, yesterday.");
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "How did you lose it at the Sacred Tree?");
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "I often pass the Tree, especially since I'm in charge of the decorations for the Spring Festival this year.");
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "I must’ve not noticed it fall off…");
                    // update item description
                    SakuraGlade.items.brokenEarring.description = SakuraGlade.updatedItemDescriptions.brokenEarring;
                    let targetElementDescription = document.querySelector("#Broken_Crystal_Earring>description");
                    targetElementDescription.innerHTML = SakuraGlade.items.brokenEarring.description;
                    SakuraGlade.dataForSave.itemsUpdated.push(SakuraGlade.items.brokenEarring);
                }
                break;
            case SakuraGlade.items.medicalNotice:
                if (SakuraGlade.dataForSave.itemsUpdated.includes(SakuraGlade.items.medicalNotice)) {
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.surprised, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "So that's why he was- ... so quiet the other day.");
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.sad, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "I'm really sorry for him.");
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                }
                else {
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.sad, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Oh dear, no one deserves such a terrible fate. Her family must be grieving...");
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                }
                break;
            case SakuraGlade.items.replica:
                if (SakuraGlade.dataForSave.itemsUpdated.includes(SakuraGlade.items.replica)) {
                    if (!SakuraGlade.dataForSave.pointsReceived.includes(SakuraGlade.characters.fumiko.name + SakuraGlade.items.replica.name)) {
                        SakuraGlade.dataForSave.investigationPoints += 5;
                        SakuraGlade.dataForSave.pointsReceived.push(SakuraGlade.characters.fumiko.name + SakuraGlade.items.replica.name);
                    }
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.surprised, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "The Moon Bead is of ethereal beauty. Even the replica alone is gorgeous.");
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Kohana holds on to this at the temple. Do you know of her daily routine?");
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.thinking, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Her routine? You mean her daily cleansing of the Moon Bead?");
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Everyone knows it, it's a traditional duty of the Priestess.");
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "She claims to take a bath every night at midnight. Did you know of that?");
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "I suppose I don't visit the temple often, especially not at night.");
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Hmm... I might as well ask a brick and I'd get more useful information. But I wonder, maybe I could find out her motive?)</i>");
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "So... as a jeweler, you handle gems and precious stones?");
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Of course. We only sell the most high-value jewelry.");
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "How much would the Moon Bead be worth?");
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.surprised, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Oh my! Surely you don't mean-!");
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "...");
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.thinking, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Well, theoretically, it's probably priceless.");
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.surprised, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "But I could never imagine selling it! Besides, no one would buy it here, anyway.");
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Are there other settlements that envy Sakura Glade for it?");
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.thinking, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "... Hmm. I don't know.");
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.sad, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "I'm not allowed to go outside the village. And we rarely get visitors.");
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(I think it's unlikely that she stole it in order to sell it.)</i>");
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                }
                else {
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.surprised, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "The Moon Bead is of ethereal beauty, no one knows what material it's made of. How it got its shape and how it got here is shrouded in mystery and myths...");
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.smiling, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Even the replica alone is gorgeous, it is said an ancestor of my family made it. They were a true master of their craft.");
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                }
                break;
        }
    }
    SakuraGlade.FumikoReactToItem = FumikoReactToItem;
    async function NobuReactToItem(_item) {
        switch (_item) {
            case SakuraGlade.items.phone:
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
                await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.surprised, SakuraGlade.ƒS.positionPercent(50, 100));
                await SakuraGlade.ƒS.update(.1);
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Oh such intricate design! What is it?");
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "...");
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
                await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
                await SakuraGlade.ƒS.update(.1);
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "You know, I probably wouldn't understand even if you tried.");
                break;
            case SakuraGlade.items.idCard:
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
                await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.smiling, SakuraGlade.ƒS.positionPercent(50, 100));
                await SakuraGlade.ƒS.update(.1);
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Oh, is that you? How did they draw you on that little card with so much detail?");
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
                await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
                await SakuraGlade.ƒS.update(.1);
                break;
            case SakuraGlade.items.permit:
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
                await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.surprised, SakuraGlade.ƒS.positionPercent(50, 100));
                await SakuraGlade.ƒS.update(.1);
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Amaya authorized you to investigate the Sacred Tree?");
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
                await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.smiling, SakuraGlade.ƒS.positionPercent(50, 100));
                await SakuraGlade.ƒS.update(.1);
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "That's great! I hope you're able to find lots of useful information there.");
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
                await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
                await SakuraGlade.ƒS.update(.1);
                break;
            case SakuraGlade.items.blackOoze:
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
                await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.thinking, SakuraGlade.ƒS.positionPercent(50, 100));
                await SakuraGlade.ƒS.update(.1);
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Hmm this sort of looks like the ink from Amaya's cap. You should ask her about it.");
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
                await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
                await SakuraGlade.ƒS.update(.1);
                break;
            case SakuraGlade.items.brokenEarring:
                if (SakuraGlade.dataForSave.itemsUpdated.includes(SakuraGlade.items.brokenEarring)) {
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.surprised, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Ohoh! What a precious piece of jewelry!");
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "I found it on the ground near the Sacred Tree. Do you know who it belongs to?");
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.thinking, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "I'm sorry, Grasshopper, I'm not one to pay attention to such things.");
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Maybe Fumiko can tell you something, she works at the jewelry shop.");
                }
                else {
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.surprised, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Oh it belongs to Fumiko you say? It definitely fits her beauty!");
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.thinking, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "I wonder what she was doing at the Sacred Tree, though...");
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                }
                break;
            case SakuraGlade.items.medicalNotice:
                if (SakuraGlade.dataForSave.itemsUpdated.includes(SakuraGlade.items.medicalNotice)) {
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.sad, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "I told you everything I know already...");
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                }
                else {
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.surprised, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Wh.. where did you find this?");
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "I was searching for you yesterday and stumbled upon it.");
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.sad, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "You shouldn't go through other people's things so carelessly...");
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, " I know, I'm sorry... But... You asked me to investigate, so I have to ask. Who is Hina?");
                    SakuraGlade.ƒS.Sound.fade(SakuraGlade.sound.nobu, 0, 2);
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "I guess you had to find out sooner or later.");
                    SakuraGlade.ƒS.Sound.play(SakuraGlade.sound.sad, .5, true);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "She's my daughter. Her mother and I used to travel the Forest together with her until my wife fell sick with the mummy disease about ten years ago. We settled down here in Sakura Glade.");
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Now it's just me and Hina... She hadn't been feeling well for a few weeks, so I took her to the doctor.");
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "I...");
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.sad, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "I just can't believe it will take her away from me too...");
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(If the Moon Bead could really fulfill wishes, this would be a good one...)</i>");
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "... I am so sorry, Nobu. Nobody deserves to lose their loved ones like this...");
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Thank you, Grasshopper.");
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "But you needn't bother yourself with such sorrow... It's for me to hold.");
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "So... you received the letter the day before the incident, is that correct?");
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Yes. Just after I dropped you off at the inn, I went home and saw the letter arrived.");
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "And then you went to bed?");
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.sad, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Well, I tried. Frankly, I was restless. Couldn't keep my eyes closed.");
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "When I couldn't take it anymore I went for a walk. To calm down in the fresh night air. I passed the Sacred Tree and so used the opportunity to speak a prayer.");
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "You know, a lot of the younger folks don't believe in it anymore, but I find much consolation in the conversations with our guardian god.");
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.sad, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "I asked him to spare my daughter... I hope he hears my prayer.");
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "I'm sure of it...");
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "So, after that, you went home? Do you know what time it was? Did you notice anything suspicious at the Tree?");
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Yes, I went home directly after I finished my prayer.");
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "It must've been about... half past one when I got there, almost two when I got home. Hmm... did I notice something strange?");
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.thinking, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Well, no, not regarding the Moon Bead, if that's your inquiry.");
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "But I suppose, now that I think about it, I should have expected to see Amaya on her patrol...");
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "So the Tree was unguarded at the time? You could have stolen the Moon Bead during that time, hoping to use its ability to fulfill a wish to cure your daughter...");
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.surprised, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Oh heavens! I suppose it might look that way.");
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.sad, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "No. To be completely honest with you, Grasshopper, it did cross my mind briefly.");
                    await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
                    await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
                    await SakuraGlade.ƒS.update(.1);
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "But I am a man of faith. Desecrating our god's holy artifact? No, " + SakuraGlade.dataForSave.nameProtagonist + ", I couldn't. I could never.");
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Even if it could save Hina, the god's wrath would strike me even more terribly. So I spoke my prayer and left.");
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "I see.");
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(I think he's saying the truth. He seems very faithful in the Moon God.)</i>");
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Thank you for being honest and telling me, Nobu. This has helped me greatly.");
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "I'm glad to be of help.");
                    await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Now the real question is, why didn't he see Amaya guarding the tree if she was supposedly there the entire night?)</i>");
                    SakuraGlade.ƒS.Sound.fade(SakuraGlade.sound.sad, 0, 2);
                    SakuraGlade.ƒS.Sound.play(SakuraGlade.sound.nobu, .4, true);
                    // update item description
                    SakuraGlade.items.medicalNotice.description = SakuraGlade.updatedItemDescriptions.medicalNotice;
                    let targetElementDescription = document.querySelector("#Medical_Notice>description");
                    targetElementDescription.innerHTML = SakuraGlade.items.medicalNotice.description;
                    SakuraGlade.dataForSave.itemsUpdated.push(SakuraGlade.items.medicalNotice);
                }
                break;
            case SakuraGlade.items.replica:
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
                await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.surprised, SakuraGlade.ƒS.positionPercent(50, 100));
                await SakuraGlade.ƒS.update(.1);
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "OH! The Moon Bead! You found-");
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
                await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
                await SakuraGlade.ƒS.update(.1);
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "... Oh, it's just the replica? Apologies.");
                break;
        }
    }
    SakuraGlade.NobuReactToItem = NobuReactToItem;
})(SakuraGlade || (SakuraGlade = {}));
var SakuraGlade;
(function (SakuraGlade) {
    class Inventory extends SakuraGlade.ƒS.Inventory {
        static async open() {
            console.log("Opened with custom class");
            // @ts-ignore
            let dialog = Inventory.dialog;
            if (dialog.open) {
                dialog.close();
            }
            let present = document.querySelector('#present');
            SakuraGlade.ƒS.Sound.play(SakuraGlade.sound.item, .7);
            dialog.showModal();
            // if good ending final scene
            if (SakuraGlade.extraItemInteraction) {
                // hide close button / disable inventroy close
                dialog.querySelector("button").classList.add("hidden");
                return new Promise((_resolve) => {
                    let hndClose = (_event) => {
                        present.removeEventListener(SakuraGlade.ƒS.EVENT.POINTERDOWN, hndClose);
                        Inventory.close();
                        dialog.querySelector("button").classList.remove("hidden");
                        //@ts-ignore
                        _resolve([]);
                    };
                    present.addEventListener(SakuraGlade.ƒS.EVENT.POINTERDOWN, hndClose);
                });
            }
            else if (SakuraGlade.currentCharacter) {
                // if during day2 investigations
                return new Promise((_resolve) => {
                    let hndPresentClose = async (_event) => {
                        dialog.querySelector("button").removeEventListener(SakuraGlade.ƒS.EVENT.POINTERDOWN, hndClose);
                        present.removeEventListener(SakuraGlade.ƒS.EVENT.POINTERDOWN, hndPresentClose);
                        let itemId = dialog.querySelector('.selected').getAttribute('id');
                        let targetValue = itemId.replace(/_/g, " ");
                        let item;
                        for (const key in SakuraGlade.items) {
                            //@ts-ignore
                            if (SakuraGlade.items.hasOwnProperty(key) && SakuraGlade.items[key].name === targetValue) {
                                //@ts-ignore
                                item = SakuraGlade.items[key];
                            }
                        }
                        Inventory.close();
                        switch (SakuraGlade.currentCharacter) {
                            case SakuraGlade.characters.amaya:
                                await SakuraGlade.AmayaReactToItem(item);
                                break;
                            case SakuraGlade.characters.kohana:
                                await SakuraGlade.KohanaReactToItem(item);
                                break;
                            case SakuraGlade.characters.nobu:
                                await SakuraGlade.NobuReactToItem(item);
                                break;
                            case SakuraGlade.characters.fumiko:
                                await SakuraGlade.FumikoReactToItem(item);
                                break;
                        }
                        //@ts-ignore
                        _resolve(['present']);
                    };
                    let hndClose = (_event) => {
                        dialog.querySelector("button").removeEventListener(SakuraGlade.ƒS.EVENT.POINTERDOWN, hndClose);
                        present.removeEventListener(SakuraGlade.ƒS.EVENT.POINTERDOWN, hndPresentClose);
                        Inventory.close();
                        //@ts-ignore
                        _resolve(['close']);
                    };
                    dialog.querySelector("button").addEventListener(SakuraGlade.ƒS.EVENT.POINTERDOWN, hndClose);
                    present.addEventListener(SakuraGlade.ƒS.EVENT.POINTERDOWN, hndPresentClose);
                });
            }
            else {
                return new Promise((_resolve) => {
                    let hndClose = (_event) => {
                        dialog.querySelector("button").removeEventListener(SakuraGlade.ƒS.EVENT.POINTERDOWN, hndClose);
                        Inventory.close();
                        //@ts-ignore
                        _resolve([]);
                    };
                    dialog.querySelector("button").addEventListener(SakuraGlade.ƒS.EVENT.POINTERDOWN, hndClose);
                });
            }
        }
        static close() {
            SakuraGlade.ƒS.Sound.play(SakuraGlade.sound.item, .7);
            //@ts-ignore
            Inventory.dialog.close();
            let present = document.querySelector('#present');
            present.classList.add('hidden');
            let selected = document.querySelector('.selected');
            if (selected) {
                selected.classList.remove('selected');
            }
        }
        static remove(_item) {
            let id = _item.name.replace(/ /g, "_");
            //@ts-ignore
            let item = Inventory.dialog.querySelector('#' + id);
            if (item) {
                //@ts-ignore
                Inventory.dialog.querySelector("ul").removeChild(item);
            }
        }
    }
    SakuraGlade.Inventory = Inventory;
})(SakuraGlade || (SakuraGlade = {}));
var SakuraGlade;
(function (SakuraGlade) {
    async function FairieForest() {
        console.log("Fairie Forest Scene starting");
        // cpms = characters per millisecond
        SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
        await SakuraGlade.ƒS.Progress.delay(1);
        SakuraGlade.ƒS.Speech.show();
        SakuraGlade.ƒS.Speech.setTickerDelays(100, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Ouch... my head hurts...)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(...)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Huh? ... What's that?)</i>");
        SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
        await SakuraGlade.ƒS.Speech.tell("???", "Hello?");
        await SakuraGlade.ƒS.Speech.tell("???", "...");
        await SakuraGlade.ƒS.Speech.tell("???", "Hello there? Are you awake?");
        SakuraGlade.ƒS.Speech.setTickerDelays(100, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Someone is talking to me...)</i>");
        await SakuraGlade.ƒS.Location.show(SakuraGlade.locations.fairieForest);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.sad, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(SakuraGlade.transitions.eye.duration, SakuraGlade.transitions.eye.alpha, SakuraGlade.transitions.eye.edge);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Where... am I?)</i>");
        SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell("???", "There we go... I was worried for a moment there.<br>Are you alright?");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.surprised, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell("???", "Oh... what's that?");
        await SakuraGlade.ƒS.Speech.tell("???", "My, my... I almost mistook you for a fairy!<br>But you've got no wings...");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Woah... what is that thing??)</i>");
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
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
                await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.sad, SakuraGlade.ƒS.positionPercent(50, 100));
                await SakuraGlade.ƒS.update(.1);
                await SakuraGlade.ƒS.Speech.tell("???", "Ahem... now that's not a very kind thing to say...");
                SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
                await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
                await SakuraGlade.ƒS.update(.1);
                await SakuraGlade.ƒS.Speech.tell("???", "I'm a Capfolk. We live here in the Forest of Fairie.");
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
                await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.thinking, SakuraGlade.ƒS.positionPercent(50, 100));
                await SakuraGlade.ƒS.update(.1);
                await SakuraGlade.ƒS.Speech.tell("???", "It's strange you've never seen one like me before.<br>How did you get here?");
                break;
            case choice1.good:
                // continue path here
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "You're... a talking mushroom?");
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
                await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.laughing, SakuraGlade.ƒS.positionPercent(50, 100));
                await SakuraGlade.ƒS.update(.1);
                await SakuraGlade.ƒS.Speech.tell("???", "Ohohoh!");
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
                await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.smiling, SakuraGlade.ƒS.positionPercent(50, 100));
                await SakuraGlade.ƒS.update(.1);
                await SakuraGlade.ƒS.Speech.tell("???", "You're a strange one!");
                await SakuraGlade.ƒS.Speech.tell("???", "Never seen a Capfolk before? You're not from the Forest of Fairie then.");
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
                await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.thinking, SakuraGlade.ƒS.positionPercent(50, 100));
                await SakuraGlade.ƒS.update(.1);
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
        SakuraGlade.ƒS.Sound.fade(SakuraGlade.sound.forest, 0, 2);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "...No I don't think so.");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.smiling, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell("???", "That's a relief!");
        SakuraGlade.ƒS.Sound.play(SakuraGlade.sound.nobu, .4, true);
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.surprised, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell("???", "Oh I almost forgot!");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.smiling, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "I'm Nobu, it's a pleasure to meet you.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "I'm... " + SakuraGlade.dataForSave.nameProtagonist + ".");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "How did you find me?");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "What a pretty sounding name you've got there, " + SakuraGlade.dataForSave.nameProtagonist + "!");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "I was just on my way back from collecting firewood when I stumbled upon you laying here. You don't see folks like you around here often.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Either way, it's starting to get quite dark in these woods... It'll be hard to see the way once night falls.");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.thinking, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "We're not too far from the village, you can rest up there if you want and we'll figure it out.");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.smiling, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
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
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
                await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.laughing, SakuraGlade.ƒS.positionPercent(50, 100));
                await SakuraGlade.ƒS.update(.1);
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Ohohoh!");
                SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
                await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.smiling, SakuraGlade.ƒS.positionPercent(50, 100));
                await SakuraGlade.ƒS.update(.1);
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Young ones are always so full of energy!");
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Well, if you insist.<br>Stay close, Grasshopper.");
                break;
            case choice2.good:
                // continue path here
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "A little help would be nice, actually.");
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
                await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.smiling, SakuraGlade.ƒS.positionPercent(50, 100));
                await SakuraGlade.ƒS.update(.1);
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Of course. Here, take my cane for support.<br>It's not too far, but we can take breaks if you need them.");
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Come along now, Grasshopper!");
                break;
        }
        SakuraGlade.ƒS.Speech.clear();
        SakuraGlade.ƒS.Speech.hide();
        SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
        SakuraGlade.ƒS.Location.show(SakuraGlade.locations.blackout);
        SakuraGlade.ƒS.Sound.fade(SakuraGlade.sound.nobu, 0, 2);
        await SakuraGlade.ƒS.update(1);
    }
    SakuraGlade.FairieForest = FairieForest;
})(SakuraGlade || (SakuraGlade = {}));
var SakuraGlade;
(function (SakuraGlade) {
    async function Intro() {
        console.log("Intro Scene starting");
        // currentCharacter = characters.nobu;
        SakuraGlade.Inventory.add(SakuraGlade.items.phone);
        SakuraGlade.dataForSave.inventory.push(SakuraGlade.items.phone);
        SakuraGlade.Inventory.add(SakuraGlade.items.idCard);
        SakuraGlade.dataForSave.inventory.push(SakuraGlade.items.idCard);
        // cpms = characters per millisecond
        SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
        await SakuraGlade.ƒS.Progress.delay(1);
        SakuraGlade.ƒS.Sound.play(SakuraGlade.sound.forest, .5, true);
        await SakuraGlade.ƒS.Location.show(SakuraGlade.locations.forestHome);
        await SakuraGlade.ƒS.update(SakuraGlade.transitions.normal.duration, SakuraGlade.transitions.normal.alpha, SakuraGlade.transitions.normal.edge);
        await SakuraGlade.ƒS.Progress.delay(2);
        SakuraGlade.ƒS.Speech.show();
        await SakuraGlade.ƒS.Progress.delay(1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Whew, what a day!)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Three lectures of Advanced Biology and no breaks... And I've got the presentation coming up soon too...<br>Ugh, I still need a good topic. Guess I'll have to hit the books first when I get home.)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Yeesh, I can't wait to go to bed!)</i>");
        SakuraGlade.ƒS.Speech.hide();
        await SakuraGlade.ƒS.Progress.delay(2);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Ah... the cool spring air is so refreshing. Feels like I sat in stuffy lecture halls all day!<br>I used to hate having to walk home through the forest, but on a day like this it's almost a blessing.)</i>");
        SakuraGlade.ƒS.Speech.hide();
        await SakuraGlade.ƒS.Progress.delay(2);
        SakuraGlade.ƒS.Speech.setTickerDelays(100, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(... what's that?)</i>");
        SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(There's a faint light coming from the forest. Did someone get lost in the woods again?<br>I should go check it out.)</i>");
        SakuraGlade.ƒS.Speech.hide();
        await SakuraGlade.ƒS.Progress.delay(2);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Hmm... no one to be seen.)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Just this...<br>tree stump that appears to be glowing?)</i>");
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
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(I've never seen that before! Maybe I can use this in my presentation.<br>Let's take a closer look...)</i>");
                SakuraGlade.ƒS.Speech.setTickerDelays(100, 5000);
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(...)</i>");
                SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(It seems like little fluorescent mushrooms are growing on this part of the stump.<br>They smell sweet, almost floral...)</i>");
                SakuraGlade.ƒS.Speech.setTickerDelays(100, 5000);
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(...)</i>");
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(What's going on?<br>... everything's suddenly so blurry...)</i>");
                SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(...)</i>");
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
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(No way I'm touching that. I better hurry back to the trail.)</i>");
                SakuraGlade.ƒS.Speech.setTickerDelays(100, 5000);
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(...)</i>");
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(What's that smell...? Everything's suddenly so blurry...)</i>");
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(...)</i>");
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(... oh...)</i>");
                SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(...)</i>");
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
    async function WelcomeSakuraGlade() {
        console.log("Welcome to Sakura Glade starting");
        await SakuraGlade.ƒS.Progress.delay(1);
        SakuraGlade.ƒS.Sound.play(SakuraGlade.sound.village, .5, true);
        await SakuraGlade.ƒS.Location.show(SakuraGlade.locations.sakuraGladeNight);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(SakuraGlade.transitions.normal.duration, SakuraGlade.transitions.normal.alpha, SakuraGlade.transitions.normal.edge);
        // await ƒS.Progress.delay(2);
        SakuraGlade.ƒS.Speech.show();
        // await ƒS.Progress.delay(1);
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.smiling, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "... and here we are! Welcome to Sakura Glade.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "It's late already, so there's not a lot of people on the street anymore. You should see it tomorrow when it's bustling with folks and everyone's busy with the preparations for the Spring Festival!");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Ah, that's my favorite time of the year. You visit at the perfect time.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Now, I don't mean to hold you up for too long. You must be tired and all of this surely is a lot to take in.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "There's a wonderful little inn right around the corner, Cherrywood Lodge. I'll bring you there, you can get a nice room and get accustomed to everything, yes?");
        let choice1 = {
            good: "Sounds good!",
            questions: "Actually, I have a few questions..."
        };
        let choice1Element = await SakuraGlade.ƒS.Menu.getInput(choice1, "choices");
        switch (choice1Element) {
            case choice1.good:
                // continue path here
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Sounds good!");
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Wonderful! Let's go and get you a room and some dinner.");
                break;
            case choice1.questions:
                // continue path here
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Actually, I have a few questions... Would you mind?");
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
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "I wasn't born here, but it is my home. ");
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "All who live here are Capfolk. We don't get visitors often, but I am sure everyone will welcome you with open arms. We have little worries here.");
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "The big tree you see up top is our Sacred Tree. It's in bloom this time of the year, you're very lucky. It's what gave Sakura Glade its name.");
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Isn't it just majestic? It looks even better in sunlight.");
                            await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
                            await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.thinking, SakuraGlade.ƒS.positionPercent(50, 100));
                            await SakuraGlade.ƒS.update(.1);
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "We can go there tomorrow if you'd like. There's a shrine devoted to the Moon God, if we ask him in prayers maybe he can help you find your way back home...");
                            await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
                            await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.smiling, SakuraGlade.ƒS.positionPercent(50, 100));
                            await SakuraGlade.ƒS.update(.1);
                            delete questions.sakuraGlade;
                            break;
                        case questions.festival:
                            // continue path here
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "What festival were you talking about earlier?");
                            await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
                            await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.surprised, SakuraGlade.ƒS.positionPercent(50, 100));
                            await SakuraGlade.ƒS.update(.1);
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Oh? You don't know about the Spring Festival?");
                            await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
                            await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
                            await SakuraGlade.ƒS.update(.1);
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "No, apologies. I got ahead of myself.");
                            await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
                            await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.smiling, SakuraGlade.ƒS.positionPercent(50, 100));
                            await SakuraGlade.ƒS.update(.1);
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "In four days, we celebrate the Spring Festival in favor of our guardian deity, the Moon God. It's held every year on the day the Sacred Tree reaches full bloom.");
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "The whole village gets together and starts decorating and preparing for it beginning tomorrow, and on the third day, we celebrate with the Moon Ritual and fireworks.");
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "The Moon Ritual?");
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "A sacred dance performed by the village priest, before holding the Moon Bead into the full moon's light to wish for yet another plentiful harvest in autumn and a year of good health.");
                            // Reflect.set(questions, "moonBead", "The Moon Bead?");
                            questions.moonBead = "The Moon Bead?";
                            delete questions.leave;
                            questions.leave = "That's all.";
                            delete questions.festival;
                            break;
                        case questions.moonBead:
                            // continue path here
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "What is the Moon Bead you spoke of?");
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "The Moon Bead is our most precious possession. It's kept in the shrine of the Moon God at the Sacred Tree.");
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "They say it's a tear from the Moon God himself, shed for the plague and illness that haunted this land eons ago, and since protecting the village from harm. Legend has it that it can fulfill any wish the bearer asks for.");
                            delete questions.moonBead;
                            break;
                        case questions.leave:
                            // continue path here
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "That's all, thank you.");
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "No problem, Sprout. I'm glad to be of help.");
                            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Now let's go and get you a room and some dinner.");
                            leave = true;
                            break;
                    }
                } while (!leave);
                break;
        }
        SakuraGlade.ƒS.Speech.clear();
        SakuraGlade.ƒS.Speech.hide();
        SakuraGlade.ƒS.Sound.fade(SakuraGlade.sound.village, 0, 2);
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
        await SakuraGlade.ƒS.Location.show(SakuraGlade.locations.innNight);
        await SakuraGlade.ƒS.update(1);
        await SakuraGlade.ƒS.Progress.delay(1);
        SakuraGlade.ƒS.Speech.show();
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(... Nobu showed me a little around town and gave me directions to his house in case I needed help. He really is very kind. He even paid for my dinner and room since I don't have this... world's currency!)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(It's crazy. Just a few hours ago I was walking home from Uni, and now I'm laying in bed in an inn of a whole other world.)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(It's nice here, but I should find a way to get back home tomorrow. My friends and family must be worried sick.)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(But, for now, I guess some rest won't hurt. Tomorrow, I'll look for answers...)</i>");
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
        await SakuraGlade.ƒS.Progress.delay(1);
        await SakuraGlade.ƒS.Location.show(SakuraGlade.locations.sacredTree);
        await SakuraGlade.ƒS.update(2);
        await SakuraGlade.ƒS.Progress.delay(1);
        SakuraGlade.ƒS.Speech.show();
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Woah... the Sacred Tree. I see why it's such a holy place. This tree is gigantic! And the cherry blossoms fill the air with a nice sweet scent...)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(I can see a little shrine at its roots, that's probably where the Moon Bead is usually kept. Let me take a closer look...)</i>");
        await SakuraGlade.ƒS.Speech.tell("???", "You can't go here.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "What?");
        SakuraGlade.ƒS.Sound.play(SakuraGlade.sound.amaya, .5, true);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.upset, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(1);
        await SakuraGlade.ƒS.Speech.tell("???", "A flightless fairy! Are your eyes broken as well? Can't you see this area is restricted at the moment?");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Ouch... she's scary. I admit, I didn't see the little rope around the area.)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Apologies, ma'am. I was fully taken in by the beauty of the tree, I didn't see the barrier at all.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "Hmm... call me Amaya. Where are you from?");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Uh, well. Nobu picked me up in the forest, I... I'm not sure how I got there.");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.thinking, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "Interesting... and what leads you here?");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Nobu asked me to investigate the theft of the Moon Bead.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Why do I feel like I'm the one being interrogated right now?)</i>");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.upset, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "I see. You don't believe it was Kohana?");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "No, ma'am. Well, I can't say for sure yet, but I'd like to believe her.");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "We have something in common then.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(She finally seems more at ease. I thought she was going to stab me with that sword any second.)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "What is your name, Cub?");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "I'm " + SakuraGlade.dataForSave.nameProtagonist + ". It's nice to meet you, Amaya. May I take a look around the scene?");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.upset, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "No.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "Not for now. I can't have just anyone walking around here. I will issue you a permit after I've seen what you can do.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Damn... there's no way I'm gonna get past her. Guess I'll just have to be patient and on my best behavior.)</i> I understand that. Can I ask you a few questions still?");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "A few.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "What's your job here? Are you the one guarding the Moon Bead?");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "Yes. I am the Warden of the Sacred Tree.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "At this point in time I'm securing the perimeter and making sure no one messes around with anything until we've confirmed the culprit of the theft...");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Yup, I can see that.)</i> Were you guarding the Tree last night?");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.upset, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "I guard the Tree every night. And not once has a single thing happened.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Until last night?");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.thinking, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "Yes... we know that already. What is the point of this?");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Well, I'm just trying to gather information and get a picture of all the locations and people so I can rule out possible suspects and-");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.smiling, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "Very good strategy. I shall look forward to the fruits of your investigations.");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "I must ask you to leave now though. Come back another time when I've finished securing the area.");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
        SakuraGlade.ƒS.Sound.fade(SakuraGlade.sound.amaya, 0, 2);
        await SakuraGlade.ƒS.update(1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(She's impossible to get more information from. I guess I'll have to wait for my permit before I come back here.)</i>");
        SakuraGlade.dataForSave.day1TalkedTo.push(SakuraGlade.characters.amaya);
    }
    SakuraGlade.Day1Amaya = Day1Amaya;
})(SakuraGlade || (SakuraGlade = {}));
var SakuraGlade;
(function (SakuraGlade) {
    async function Day1Fumiko() {
        console.log("Day 1 Fumiko starting");
        await SakuraGlade.ƒS.Progress.delay(1);
        SakuraGlade.ƒS.Sound.play(SakuraGlade.sound.village, .5, true);
        await SakuraGlade.ƒS.Location.show(SakuraGlade.locations.sakuraGladeEvening);
        await SakuraGlade.ƒS.update(2);
        await SakuraGlade.ƒS.Progress.delay(1);
        SakuraGlade.ƒS.Speech.show();
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Oh, today went by really quickly. I don't feel like I'm any smarter now though. Well, time to head back to the inn to sleep over it and really start through tomorrow!)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(OH!)</i>");
        SakuraGlade.ƒS.Sound.fade(SakuraGlade.sound.village, 0, 1);
        // shake/flash screen animation
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Someone bumped into me...?)</i>");
        SakuraGlade.ƒS.Sound.play(SakuraGlade.sound.fumiko, .5, true);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.surprised, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(1);
        await SakuraGlade.ƒS.Speech.tell("???", "Ah! I'm so sorry!");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Wow, she is really pretty!)</i> No, don't apologize, I was lost in thought. I should've seen you coming.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(I made her drop the lantern she was holding. I'll pick it up.)</i> Here you go.");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell("???", "You're too kind, thank you.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "No problem at all. Who are you, if I may ask?");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.smiling, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Oh, of course, Precious! I'm Fumiko, lovely to meet you.");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "And you are?");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "I'm " + SakuraGlade.dataForSave.nameProtagonist + ". You're still out and about rather late...?");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Oh, yes. But don't worry. I'll be home in a minute.");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.sad, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "I just needed some fresh air.");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.smiling, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "And these lanterns won't put themselves up on their own!");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "You're decorating for the Spring Festival?");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Indeed I am. I'm in charge of the decorations this year. It's proven a challenge, but I have many helping hands.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(I'm sure she does. Anyone would be happy to just be in her presence.)</i> You're not worried about the festival?");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.surprised, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Worried? Why would I-");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Oh, you mean because of the Moon Bead.");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.thinking, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "No, I don't have the time to worry about such things. The village will look stunning regardless of whether it will be found or not. If I wait for it to show up I won't have enough time to decorate everything.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "And regardless... the decorations can be taken down again...");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "You don't seem too fond of the festival?");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.surprised, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Oh no, don't get me wrong, I love the festival. It's wonderful.");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.sad, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "I...");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Well, there are a lot of expectations for me this year, so I'm just making sure I do everything perfectly.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "That sounds... stressful.");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.smiling, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Ah, don't worry about it. I love doing the village service.");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Well then, Precious, I better get going before it gets too late. My parents will worry. I'll see you around!");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "See you!");
        SakuraGlade.ƒS.Sound.fade(SakuraGlade.sound.fumiko, 0, 2);
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
        await SakuraGlade.ƒS.update(1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Well... that was nice. She seems lovely.)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Now, I should head back to the inn. It's been a pretty long day and I need all the rest I can get before continuing my investigations tomorrow. The festival is coming closer, I have to hurry up if I want to find the Moon Bead in time!)</i>");
        SakuraGlade.ƒS.Speech.clear();
        SakuraGlade.ƒS.Speech.hide();
        await SakuraGlade.ƒS.Location.show(SakuraGlade.locations.blackout);
        await SakuraGlade.ƒS.update(2);
    }
    SakuraGlade.Day1Fumiko = Day1Fumiko;
})(SakuraGlade || (SakuraGlade = {}));
var SakuraGlade;
(function (SakuraGlade) {
    async function Day1Kohana() {
        console.log("Day 1 Kohana starting");
        // await ƒS.Progress.delay(1);
        await SakuraGlade.ƒS.Location.show(SakuraGlade.locations.sakuraGladeDay);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.sad, SakuraGlade.ƒS.positionPercent(50, 100));
        SakuraGlade.ƒS.Sound.play(SakuraGlade.sound.kohana, .5, true);
        await SakuraGlade.ƒS.update(2);
        // await ƒS.Progress.delay(1);
        SakuraGlade.ƒS.Speech.show();
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(The villagers have dispersed, but Kohana is still here.)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Kohana?");
        SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "...you've returned, Dreamer...");
        SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Would she stop calling me strange names...?)</i> ...Yes, Nobu asked me to investigate the theft to clear your name and find the Moon Bead.");
        SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.smiling, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "That's... kind of you.");
        SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Ahem, well, I'll try my best. So, can you tell me again your name and occupation?");
        SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "Kohana... I'm the village's priestess.");
        SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Priestess?");
        SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "Mh... I live in the temple near the Sacred Tree.");
        SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(She's definitely not the talkative kind...)</i> How did you hear about the Moon Bead being stolen?");
        SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.sad, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "I discovered it.");
        SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "You were the first at the scene of the incident?");
        SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, " ...yes.");
        SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Well, of course, that doesn't look good for her.)</i> Why were you at the scene today?");
        SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.thinking, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "Do you know about the Moon Ritual? It's my duty to perform at the festival with the Moon Bead and hold it into the full moon's light for the village's blessing... it is very spiritual...");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.sad, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "If it is missing, we cannot have the festival... the village will not receive a blessing... I fear for our good fortune!");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.surprised, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "Apologies... I got lost in thought.");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "I take the Bead for cleansing each morning and evening. Such is my duty.");
        SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "So you wanted to take it out of the shrine at the Sacred Tree to cleanse it?");
        SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "Mh.");
        SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Come on, don't make me worm every answer out of you...)</i> And it was missing?");
        SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.thinking, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "Well... not quite.");
        SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(What now?)</i>");
        SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "It had been replaced... with this. A replica. It's used for practicing.");
        //    show inventory!!
        SakuraGlade.Inventory.add(SakuraGlade.items.replica);
        SakuraGlade.dataForSave.inventory.push(SakuraGlade.items.replica);
        await SakuraGlade.Inventory.open();
        await SakuraGlade.ƒS.Progress.delay(0);
        SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Oh... but then, couldn't it have been replaced days before?");
        SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.thinking, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "No... I cleansed the Bead yesterday evening. It was still there then.");
        SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "I see... <i>(That narrows it down to this night, but all of this isn't really telling me anything.)</i> What did you do the night of the incident?");
        SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "... Sleeping...");
        SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Surely, anyone would say that.)</i> Does anyone else have access to the Bead, other than you?");
        SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "Yes... Onee-sama does...");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "I thank you for your efforts, Dreamer. I'm tired and I have other duties... please excuse me now...");
        SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Oh, uhm. Of course. Thank you for all the information.");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
        SakuraGlade.ƒS.Sound.fade(SakuraGlade.sound.kohana, 0, 2);
        await SakuraGlade.ƒS.update(1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(She left. I need to get better at this. I know more now, but it all still makes her the number one suspect. Maybe I can find out more elsewhere.)</i>");
        SakuraGlade.dataForSave.day1TalkedTo.push(SakuraGlade.characters.kohana);
    }
    SakuraGlade.Day1Kohana = Day1Kohana;
})(SakuraGlade || (SakuraGlade = {}));
var SakuraGlade;
(function (SakuraGlade) {
    async function Day1Morning() {
        console.log("Day 1 Morning starting");
        // await ƒS.Progress.delay(1);
        await SakuraGlade.ƒS.Location.show(SakuraGlade.locations.innDay);
        await SakuraGlade.ƒS.update(SakuraGlade.transitions.eye.duration, SakuraGlade.transitions.eye.alpha, SakuraGlade.transitions.eye.edge);
        // await ƒS.Progress.delay(1);
        SakuraGlade.ƒS.Speech.show();
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(I slept pretty good, the bed is more comfortable than I expected. But I woke up to a loud commotion outside in the town square. I wonder what's going on out there?)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(I'll go check it out.)</i>");
        SakuraGlade.ƒS.Speech.clear();
        SakuraGlade.ƒS.Speech.hide();
        await SakuraGlade.ƒS.Location.show(SakuraGlade.locations.sakuraGladeDay);
        SakuraGlade.ƒS.Sound.play(SakuraGlade.sound.village, .3, true);
        await SakuraGlade.ƒS.update(2);
        SakuraGlade.ƒS.Speech.show();
        SakuraGlade.ƒS.Sound.play(SakuraGlade.sound.crowd, .6, true);
        await SakuraGlade.ƒS.Speech.tell("Villager 1", "Have you heard the news already?");
        await SakuraGlade.ƒS.Speech.tell("Villager 2", "Who would do something like that?");
        await SakuraGlade.ƒS.Speech.tell("Villager 3", "I bet it was that little wrench! Acting all innocent won't help her anymore.");
        await SakuraGlade.ƒS.Speech.tell("Villager 4", "How could something like this happen? Right before the festival too!");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(People are crowding the streets, everyone seems to be very agitated.)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Uhm, excuse me?");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "...");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "What is going on?");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "...");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(No one's paying attention to me!)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, SakuraGlade.dataForSave.nameProtagonist + "! There you are!");
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "I've been looking for you! I'm glad to see you're okay.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(He seems different today... maybe I'm just imagining things...)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "I'm fine, thank you. But what is going on here? Why is everyone so upset?");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.sad, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Oh, it's terrible, Grasshopper-");
        await SakuraGlade.ƒS.Speech.tell("Villager 3", "You! It was you, wasn't it? Admit it!");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(They're not talking to me. There's a little girl everyone is surrounding...)</i>");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
        await SakuraGlade.ƒS.update(1);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.surprised, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(1);
        SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
        await SakuraGlade.ƒS.Speech.tell("???", "... n-no it wasn't! I promise...");
        SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
        await SakuraGlade.ƒS.Speech.tell("Villager 1", "There she goes, I don't believe a word she's saying!");
        await SakuraGlade.ƒS.Speech.tell("Villager 4", "She shouldn't even be here.");
        await SakuraGlade.ƒS.Speech.tell("Villager 2", "How dare she lie right to our faces?!");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(The poor girl looks so helpless... They're not even giving her a chance to speak...!)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Hey! Calm down everyone! Let her explain!");
        await SakuraGlade.ƒS.Speech.tell("Villager 2", "Who is...?");
        await SakuraGlade.ƒS.Speech.tell("Villager 4", "Shh!");
        SakuraGlade.ƒS.Sound.fade(SakuraGlade.sound.crowd, 0, .5);
        SakuraGlade.ƒS.Sound.fade(SakuraGlade.sound.village, .5, 2);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Finally, they've stopped talking all over each other.)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "I'm sorry, I know I shouldn't interfere since I'm not from here. But I can't just stand by and watch this! Look, there will be a solution to whatever is going on right now, but all this commotion will lead to nothing!");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Woah. It seems like they're actually listening to me!)</i>");
        SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.smiling, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell("???", "...Thank you, Worldleaper.");
        SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Oh, she's talking to me!)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Her voice is so quiet I almost didn't notice. What did she call me? Worldleaper?)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, " O-of course! Uhm, my name is " + SakuraGlade.dataForSave.nameProtagonist + ". It's nice to meet you!");
        SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.thinking, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell("???", "Hmm... " + SakuraGlade.dataForSave.nameProtagonist + "...");
        SakuraGlade.ƒS.Sound.fade(SakuraGlade.sound.village, 0, 2);
        await SakuraGlade.ƒS.Speech.tell("???", "...");
        SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(What is it?)</i>");
        SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
        SakuraGlade.ƒS.Sound.play(SakuraGlade.sound.kohana, .5, true);
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "My name is Kohana. The pleasure is	mine... is that how you say that? I get confused sometimes...");
        SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Ah...)</i> Don't worry about it. Now, what is all this about?");
        SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "Ah!");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.sad, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "Well... it's about the Moon Bead. Did Nobu tell you about it? It's our village's sacred treasure, kept in the shrine at the Sacred Tree.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "It's been stolen in the night...");
        SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(The Moon Bead?)</i> And everyone thinks it was you?");
        SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "Mh, it seems so...");
        SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
        // animation 
        await SakuraGlade.ƒS.Character.animate(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.sad, SakuraGlade.middleToRight());
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.sad, SakuraGlade.ƒS.positionPercent(30, 100));
        await SakuraGlade.ƒS.update(1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Sprout, can I talk to you for a moment?");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Sure.");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
        await SakuraGlade.ƒS.update(1);
        // animation
        await SakuraGlade.ƒS.Character.animate(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.sad, SakuraGlade.leftToMiddle());
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        SakuraGlade.ƒS.Sound.fade(SakuraGlade.sound.kohana, 0, 2);
        SakuraGlade.ƒS.Sound.play(SakuraGlade.sound.village, .5, true);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "That was some real courage you had there!");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "You have an aura, I can't explain it. But I feel it too. And the villagers listened to you as well!");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.sad, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "They can be so cruel sometimes, jumping to conclusions like that. Kohana isn't very well-liked among them, she's... a little eccentric sometimes.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "But I've known her since she came here and I don't think she stole the Bead.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "She definitely doesn't look like someone who'd steal something so important...");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "I'm glad you think so too!");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Well, Grasshopper, who was it if not her? They won't let her go until they've found the real culprit.");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.sad, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "And oh, the festival! How will it be held without the Moon Bead? We need the blessing for the coming harvest...");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.thinking, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "The village listens to you, and Kohana seems to enjoy your company as well. It might be a big ask since you just arrived here, but...");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
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
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
                await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.smiling, SakuraGlade.ƒS.positionPercent(50, 100));
                await SakuraGlade.ƒS.update(.1);
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Thank you, Sprout! I knew you would say yes to a new adventure.");
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
                await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
                await SakuraGlade.ƒS.update(.1);
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Well then, I have to be somewhere now.");
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "You should talk to Kohana some more. Return the Moon Bead before it's too late for the festival! Good luck, Grasshopper!");
                break;
            case options.fine:
                // continue path here
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Do I really have to?");
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
                await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.sad, SakuraGlade.ƒS.positionPercent(50, 100));
                await SakuraGlade.ƒS.update(.1);
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Oh well... I was hoping you'd be excited by a little adventure.");
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Please, Sprout. You've already managed to get the villagers to stop hunting her down, it would make an old man very happy if you could help Kohana a little more and find out who was behind this.");
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "... fine, I'll do it.");
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
                await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.smiling, SakuraGlade.ƒS.positionPercent(50, 100));
                await SakuraGlade.ƒS.update(.1);
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Thank you! I know you can do it.");
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
                await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
                await SakuraGlade.ƒS.update(.1);
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Well then, I have to go somewhere now.");
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Please talk to Kohana. Return the Moon Bead before it's too late for the festival! I'm counting on you, Grasshopper!");
                break;
        }
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Wait!");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
        SakuraGlade.ƒS.Sound.fade(SakuraGlade.sound.village, 0, 2);
        await SakuraGlade.ƒS.update(1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "...");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(He left... There was definitely something off about him... and where did he have to hurry to so suddenly? I guess I'll ask him later. I should talk to Kohana and find out why she was suspected in the first place.)</i>");
    }
    SakuraGlade.Day1Morning = Day1Morning;
})(SakuraGlade || (SakuraGlade = {}));
var SakuraGlade;
(function (SakuraGlade) {
    async function Day1Nobu() {
        console.log("Day 1 Nobu starting");
        // await ƒS.Progress.delay(1);
        await SakuraGlade.ƒS.Location.show(SakuraGlade.locations.sakuraGladeDay);
        SakuraGlade.ƒS.Sound.play(SakuraGlade.sound.village, .5, true);
        await SakuraGlade.ƒS.update(2);
        // await ƒS.Progress.delay(1);
        SakuraGlade.ƒS.Speech.show();
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(After searching for him in the village without any luck I was able to find my way back to his house.)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Hmm... there's no doorbell... they probably don't have those here.)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Nobu?");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "...");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(No answer. I'll knock- Oh, it's not locked. The doors just slide open. Maybe he's inside and just didn't hear me?)</i>");
        SakuraGlade.ƒS.Speech.clear();
        SakuraGlade.ƒS.Speech.hide();
        await SakuraGlade.ƒS.Location.show(SakuraGlade.locations.nobuHome);
        await SakuraGlade.ƒS.update(1);
        SakuraGlade.ƒS.Speech.show();
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Nobu?");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "...");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Nobu!");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "...");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(What a nice little house... But he doesn't seem to be here. I should leave-)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(There's a piece of paper lying on the table.)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(...)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Ah, come on, just a little look won't hurt.)</i>");
        //    show inventory!!
        SakuraGlade.Inventory.add(SakuraGlade.items.medicalNotice);
        SakuraGlade.dataForSave.inventory.push(SakuraGlade.items.medicalNotice);
        await SakuraGlade.Inventory.open();
        await SakuraGlade.ƒS.Progress.delay(0);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Hmm... who is Hina?)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(This might actually become important. I should ask him about it when I see him again. For now, I better leave.)</i>");
        SakuraGlade.ƒS.Sound.fade(SakuraGlade.sound.village, 0, 2);
        await SakuraGlade.ƒS.Location.show(SakuraGlade.locations.sakuraGladeDay);
        await SakuraGlade.ƒS.update(1);
        SakuraGlade.dataForSave.day1TalkedTo.push(SakuraGlade.characters.nobu);
    }
    SakuraGlade.Day1Nobu = Day1Nobu;
})(SakuraGlade || (SakuraGlade = {}));
var SakuraGlade;
(function (SakuraGlade) {
    async function Day2Amaya() {
        console.log("Day 2 Amaya starting");
        SakuraGlade.currentCharacter = SakuraGlade.characters.amaya;
        if (!SakuraGlade.dataForSave.day2TalkedTo.includes(SakuraGlade.characters.amaya)) {
            await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
            await SakuraGlade.ƒS.update(1);
            await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
            await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.smiling, SakuraGlade.ƒS.positionPercent(50, 100));
            await SakuraGlade.ƒS.update(.1);
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "I see you're back from your investigation, Cub. I hope it's proven to be insightful.");
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "Any new clues?");
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Well, I certainly did find some stuff.");
            await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
            await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.surprised, SakuraGlade.ƒS.positionPercent(50, 100));
            await SakuraGlade.ƒS.update(.1);
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "You did indeed?");
            await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
            await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
            await SakuraGlade.ƒS.update(.1);
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "If you will show me, we can figure out what it tells us.");
            await SakuraGlade.day2Inventory();
            SakuraGlade.dataForSave.day2TalkedTo.push(SakuraGlade.characters.amaya);
        }
        else {
            SakuraGlade.ƒS.Sound.play(SakuraGlade.sound.amaya, .5, true);
            await SakuraGlade.ƒS.Progress.delay(1);
            await SakuraGlade.ƒS.Location.show(SakuraGlade.locations.sacredTree);
            await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
            await SakuraGlade.ƒS.update(2);
            SakuraGlade.ƒS.Speech.show();
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "Back from sniffing around, Cub? Did you find anything interesting?");
            await SakuraGlade.day2Inventory();
        }
        SakuraGlade.currentCharacter = undefined;
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "That's all I have for now.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "If you find out anything new, you know where to find me.");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
        SakuraGlade.ƒS.Sound.fade(SakuraGlade.sound.amaya, 0, 2);
        await SakuraGlade.ƒS.update(1);
        SakuraGlade.ƒS.Speech.clear();
        SakuraGlade.ƒS.Speech.hide();
    }
    SakuraGlade.Day2Amaya = Day2Amaya;
})(SakuraGlade || (SakuraGlade = {}));
var SakuraGlade;
(function (SakuraGlade) {
    async function Day2Evening() {
        console.log("Day 2 Evening starting");
        await SakuraGlade.ƒS.Progress.delay(1);
        await SakuraGlade.ƒS.Location.show(SakuraGlade.locations.innNight);
        await SakuraGlade.ƒS.update(2);
        await SakuraGlade.ƒS.Progress.delay(1);
        SakuraGlade.ƒS.Speech.show();
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Whew… I’m totally spent. All that investigating and interrogating has my head buzzing.)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(I better hit the pillows. Tomorrow is the big day… Ugh, I’m nervous…)</i>");
        SakuraGlade.ƒS.Speech.clear();
        SakuraGlade.ƒS.Speech.hide();
        await SakuraGlade.ƒS.Location.show(SakuraGlade.locations.blackout);
        await SakuraGlade.ƒS.update(2);
        // depending on points
        if (SakuraGlade.dataForSave.investigationPoints >= 15) {
            return "Day2Breakdown";
        }
        else {
            return "Day3Morning";
        }
    }
    SakuraGlade.Day2Evening = Day2Evening;
})(SakuraGlade || (SakuraGlade = {}));
var SakuraGlade;
(function (SakuraGlade) {
    async function Day2Fumiko() {
        console.log("Day 2 Fumiko starting");
        SakuraGlade.currentCharacter = SakuraGlade.characters.fumiko;
        if (!SakuraGlade.dataForSave.day2TalkedTo.includes(SakuraGlade.characters.fumiko)) {
            await SakuraGlade.ƒS.Location.show(SakuraGlade.locations.sakuraGladeDay);
            await SakuraGlade.ƒS.update(2);
            SakuraGlade.ƒS.Speech.show();
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Hmm… I was hoping to find Fumiko here somewhere, but it’s hard to make out anyone in this crowd…)</i>");
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Ah, there she is!)</i>");
            await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
            SakuraGlade.ƒS.Sound.play(SakuraGlade.sound.fumiko, .5, true);
            await SakuraGlade.ƒS.update(1);
            await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
            await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.smiling, SakuraGlade.ƒS.positionPercent(50, 100));
            await SakuraGlade.ƒS.update(.1);
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Ah, the wingless fairy from yesterday!");
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "What are you doing here, Precious?");
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(I feel better just by looking at her.)</i> I was looking for you.");
            await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
            await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.surprised, SakuraGlade.ƒS.positionPercent(50, 100));
            await SakuraGlade.ƒS.update(.1);
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Oh you were?");
            await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
            await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.smiling, SakuraGlade.ƒS.positionPercent(50, 100));
            await SakuraGlade.ƒS.update(.1);
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "What can I do for you?");
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Well, I’m investigating the theft of the Moon Bead, and I wondered if maybe you’ve seen something.");
            await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
            await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.thinking, SakuraGlade.ƒS.positionPercent(50, 100));
            await SakuraGlade.ƒS.update(.1);
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Ah, so I’ve heard. I’m afraid I won’t be of much help to you though.");
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(I’ll be the judge of that.)</i> That’s alright, can I ask you some questions either way?");
            await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
            await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
            await SakuraGlade.ƒS.update(.1);
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Surely, go ahead.");
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "For the record, could you tell me your name and occupation?");
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "My name is Fumiko, I am an aspiring jeweler and designer. My parents own the jewelry shop. And I’m in charge of the decorations, as you know already.");
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Why are you in charge of the decorations this year?");
            await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
            await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.thinking, SakuraGlade.ƒS.positionPercent(50, 100));
            await SakuraGlade.ƒS.update(.1);
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Oh, it’s a tradition in my family. You see, my parents are quite noble.");
            await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
            await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
            await SakuraGlade.ƒS.update(.1);
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "It’s custom that noble daughters prepare the Spring Festival the year they’re coming of age. At the end of the festival, the fairest lady is crowned as Sakura Princess and she must have a dance with an eligible bachelor she chooses.");
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "My parents wish for me to find a partner this year. It’s quite old-fashioned, but such is tradition.");
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(So that’s what she meant when she said there are high expectations of her…)</i> What were you doing on the day of the incident?");
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "I was gathering and preparing the lanterns and garlands.");
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "And in the night?");
            await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
            await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.thinking, SakuraGlade.ƒS.positionPercent(50, 100));
            await SakuraGlade.ƒS.update(.1);
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "What one usually does at night, sleeping.");
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Right…)</i> Did you notice anything during the night?");
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "I’m afraid our walls are quite thick, and I’m a rather heavy sleeper.");
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(I guess not then.)</i> I have some things I’d like to ask you about, may I?");
            await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
            await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
            await SakuraGlade.ƒS.update(.1);
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Of course. Go ahead, Precious.");
            await SakuraGlade.day2Inventory();
            SakuraGlade.dataForSave.day2TalkedTo.push(SakuraGlade.characters.fumiko);
        }
        else {
            // await ƒS.Progress.delay(1);
            await SakuraGlade.ƒS.Location.show(SakuraGlade.locations.sakuraGladeDay);
            await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.smiling, SakuraGlade.ƒS.positionPercent(50, 100));
            SakuraGlade.ƒS.Sound.play(SakuraGlade.sound.fumiko, .5, true);
            await SakuraGlade.ƒS.update(2);
            SakuraGlade.ƒS.Speech.show();
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Ah, you’re back, Precious. Is there something else you’d like to ask me about?");
            await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
            await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
            await SakuraGlade.ƒS.update(.1);
            await SakuraGlade.day2Inventory();
        }
        SakuraGlade.currentCharacter = undefined;
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "That’s all for now, I might come back later.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Surely. I’ll be here in the meantime.");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
        SakuraGlade.ƒS.Sound.fade(SakuraGlade.sound.fumiko, 0, 2);
        await SakuraGlade.ƒS.update(1);
        SakuraGlade.ƒS.Speech.clear();
        SakuraGlade.ƒS.Speech.hide();
    }
    SakuraGlade.Day2Fumiko = Day2Fumiko;
})(SakuraGlade || (SakuraGlade = {}));
var SakuraGlade;
(function (SakuraGlade) {
    async function Day2Breakdown() {
        console.log("Day 2 Breakdown starting");
        await SakuraGlade.ƒS.Location.show(SakuraGlade.locations.innNight);
        SakuraGlade.ƒS.Sound.play(SakuraGlade.sound.sad, .5, true);
        await SakuraGlade.ƒS.update(2);
        SakuraGlade.ƒS.Speech.show();
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Something woke me up... Is it morning yet? No, it’s still dark out.)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(There’s a strange noise outside, is that… crying?)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(…)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(I should check it out.)</i>");
        SakuraGlade.ƒS.Speech.clear();
        SakuraGlade.ƒS.Speech.hide();
        // await ƒS.Progress.delay(1);
        await SakuraGlade.ƒS.Location.show(SakuraGlade.locations.sakuraGladeNight);
        await SakuraGlade.ƒS.update(2);
        // await ƒS.Progress.delay(1);
        SakuraGlade.ƒS.Speech.show();
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(It’s coming from the bank of the small river... I see someone crouching there… that kimono seems familiar…)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Fumiko? What is she doing so late out?)</i>");
        // shake/flash screen animation
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.crying, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "… Fumiko? What’s wrong?");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.surprised, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Who is there?");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.crying, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Ah. It’s you.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "What are you doing out here?");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "I just… needed some fresh air.");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.smiling, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Don’t worry about it. It’s nothing. I’m fine.");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.sad, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "You should go back to bed.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(She doesn’t look fine at all…)</i> No it’s alright, I’m already here now anyways. You can tell me.");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.crying, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "No, I can’t…");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "You’ll hate me. Everyone will hate me…");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Oh, what have I done?");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "I won’t hate you.");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.sad, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Do you promise?");
        let options = {
            yes: "I promise.",
            no: "I… can’t promise."
        };
        let optionsElement = await SakuraGlade.ƒS.Menu.getInput(options, "choices");
        switch (optionsElement) {
            case options.yes:
                // continue path here
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "I promise. I won’t hate you, Fumiko.");
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "… thank you. ");
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "So, what’s bothering you?");
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "It’s… this. Here. Take it.");
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "I can’t hold on to it anymore.");
                SakuraGlade.Inventory.add(SakuraGlade.items.moonBead);
                SakuraGlade.dataForSave.inventory.push(SakuraGlade.items.moonBead);
                await SakuraGlade.Inventory.open();
                await SakuraGlade.ƒS.Progress.delay(0);
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(I can’t believe my eyes… it’s the real Moon Bead…!)</i> You…!?");
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Yes. It was me. I know. I’m sorry. I shouldn’t have.");
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "And I shouldn’t have lied to you. I… I just didn’t know any better.");
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Wow… that’s one confession I didn’t think I’d hear.)</i> Why did you steal it?");
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
                await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.surprised, SakuraGlade.ƒS.positionPercent(50, 100));
                await SakuraGlade.ƒS.update(.1);
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "You’ll actually… listen to me?");
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Of course. I promised you, didn’t I?");
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
                await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
                await SakuraGlade.ƒS.update(.1);
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "I’m glad. I don’t expect to be forgiven. But maybe you can understand me.");
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
                await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.sad, SakuraGlade.ƒS.positionPercent(50, 100));
                await SakuraGlade.ƒS.update(.1);
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "…");
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "It’s …There’s just so much pressure on me, you know?");
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Oh, Fumiko can do this and Fumiko always smiles, she’s so beautiful and she’s so kind to everyone and such a devoted child.");
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "You know my parents want me to be Sakura Princess this year, and I’m trying my best to be the perfect child, I- I really am! But I…");
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
                await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.crying, SakuraGlade.ƒS.positionPercent(50, 100));
                await SakuraGlade.ƒS.update(.1);
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "I don’t want to be Sakura Princess. I don’t want to marry some snob my parents selected for me. Heck, I don’t even <i>like</i> making jewelry!");
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(It seems like she always had to be the picture perfect child…)</i>");
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
                await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.sad, SakuraGlade.ƒS.positionPercent(50, 100));
                await SakuraGlade.ƒS.update(.1);
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "I want to be able to do what <b>I</b> want.");
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "I want to see the forest behind the village walls. I want to have a bakery and not care when my kimono gets full of flour or when I bruise myself or when a bread turns out burnt or crooked. I just want to be able to live my own life.");
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "And if the Spring Festival takes place tomorrow, all hope I have left to actually do that? It’ll all be gone. So that’s why…");
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
                await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.crying, SakuraGlade.ƒS.positionPercent(50, 100));
                await SakuraGlade.ƒS.update(.1);
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "That’s why I was hoping that without the Moon Bead, it won’t happen. I didn’t want anything bad to happen to Kohana! I thought I could just bring it back after tomorrow and have another year to sort things out with my parents…");
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "I see… That’s a really important confession, Fumiko. Not just because of the Moon Bead, but because of your entire being…");
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
                await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.sad, SakuraGlade.ƒS.positionPercent(50, 100));
                await SakuraGlade.ƒS.update(.1);
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Well, it doesn’t matter anymore. It’s over anyways.");
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "What do you mean?");
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "My parents said they’ll marry me off no matter if the festival takes place or not. So, I don’t have a reason to stop it from happening anymore…");
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Hmm… it’s a complicated situation, but…)</i>");
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "We’ll see about that tomorrow when we tell the others.");
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
                await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.surprised, SakuraGlade.ƒS.positionPercent(50, 100));
                await SakuraGlade.ƒS.update(.1);
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "No, you can’t tell them!");
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "I won’t. You will. You’ll make this right, and explain your situation.");
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "No one ever knew you felt like that. You deserve to be recognised, Fumiko. And you brought the Moon Bead back after all, so there’s no reason not to hear you out. I’m sure they’ll all understand.");
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "And who knows, maybe together we can convince your parents to let you have your own life too.");
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
                await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.sad, SakuraGlade.ƒS.positionPercent(50, 100));
                await SakuraGlade.ƒS.update(.1);
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "You mean it?");
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Of course. Now you should head back home, and I’ll go back to bed as well. Alright?");
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
                await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
                await SakuraGlade.ƒS.update(.1);
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Alright. Thank you, Precious.");
                SakuraGlade.ƒS.Speech.clear();
                SakuraGlade.ƒS.Speech.hide();
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
                await SakuraGlade.ƒS.Location.show(SakuraGlade.locations.blackout);
                SakuraGlade.ƒS.Sound.fade(SakuraGlade.sound.sad, 0, 2);
                await SakuraGlade.ƒS.update(2);
                // skip to good ending
                return "GoodEnding";
            case options.no:
                // continue path here
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "I… can’t promise before I know what it is. I’m sorry.");
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "I’m maybe not going to hate you, but, if it is what I think it is, you know you have to face the consequences of your actions.");
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "…");
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
                await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.crying, SakuraGlade.ƒS.positionPercent(50, 100));
                await SakuraGlade.ƒS.update(.1);
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "I know. I’m sorry. I guess I shouldn’t have hoped that you’d understand. I…");
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
                await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.sad, SakuraGlade.ƒS.positionPercent(50, 100));
                await SakuraGlade.ƒS.update(.1);
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "I gotta go. I’ll be there, tomorrow. Do what you have to do.");
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
                await SakuraGlade.ƒS.update(1);
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Wait!");
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "...");
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(I have a bad feeling about this…)</i>");
                SakuraGlade.ƒS.Speech.clear();
                SakuraGlade.ƒS.Speech.hide();
                await SakuraGlade.ƒS.Location.show(SakuraGlade.locations.blackout);
                SakuraGlade.ƒS.Sound.fade(SakuraGlade.sound.sad, 0, 2);
                await SakuraGlade.ƒS.update(2);
                return "Day3Morning";
        }
    }
    SakuraGlade.Day2Breakdown = Day2Breakdown;
})(SakuraGlade || (SakuraGlade = {}));
var SakuraGlade;
(function (SakuraGlade) {
    async function Day2Kohana() {
        console.log("Day 2 Kohana starting");
        SakuraGlade.currentCharacter = SakuraGlade.characters.kohana;
        if (!SakuraGlade.dataForSave.day2TalkedTo.includes(SakuraGlade.characters.kohana)) {
            await SakuraGlade.ƒS.Location.show(SakuraGlade.locations.temple);
            await SakuraGlade.ƒS.update(2);
            SakuraGlade.ƒS.Speech.show();
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(I don't know what I expected, but it was quite a long walk from the village center to here. Kohana lives here all by herself? It must get lonely up here...)</i>");
            await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
            SakuraGlade.ƒS.Sound.play(SakuraGlade.sound.kohana, .5, true);
            await SakuraGlade.ƒS.update(1);
            SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
            await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
            await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.smiling, SakuraGlade.ƒS.positionPercent(50, 100));
            await SakuraGlade.ƒS.update(.1);
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "...you've come to see me, Dreamer?");
            SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Well, yes. I have a few more questions I'd like to ask you.");
            SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
            await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
            await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
            await SakuraGlade.ƒS.update(.1);
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "Mh.");
            SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(I'll take that as a yes...)</i> You seem very attached to the Spring Festival, but the villagers don't seem to put much faith in you...");
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "I've been wondering, why is that?");
            SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
            await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
            await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.sad, SakuraGlade.ƒS.positionPercent(50, 100));
            await SakuraGlade.ƒS.update(.1);
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "They don't... understand.");
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "I'm not from here. I'm... weird, they say.");
            await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
            await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
            await SakuraGlade.ƒS.update(.1);
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "Onee-sama found me. I think she needed me... she raised me like her own.");
            SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Onee-sama... she's said that name before.)</i> Who is your “Onee-sama”?");
            SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "...");
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "You know her. She guards the Tree.");
            SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Amaya? That's... unexpected.)</i> What do you mean, she needed you?");
            SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
            await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
            await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.sad, SakuraGlade.ƒS.positionPercent(50, 100));
            await SakuraGlade.ƒS.update(.1);
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "Mh. I shouldn't talk about it...");
            await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
            await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
            await SakuraGlade.ƒS.update(.1);
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "Onee-sama lost her family. Like I lost mine. So the gods brought us each other...");
            SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(So she's orphaned and Amaya adopted her... no wonder Amaya's quite protective of her.)</i>");
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "I'm so sorry for you.");
            SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "...no. I don't remember it.");
            await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
            await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.smiling, SakuraGlade.ƒS.positionPercent(50, 100));
            await SakuraGlade.ƒS.update(.1);
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "I am happy I can be here now. Even if the village doesn't like me. I have a home.");
            SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(That's sweet, but I still feel bad for her. I'll try to do even better with finding the Moon Bead now.)</i>");
            SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
            await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
            await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
            await SakuraGlade.ƒS.update(.1);
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "Do you have anything else to ask me...?");
            SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
            await SakuraGlade.day2Inventory();
            SakuraGlade.dataForSave.day2TalkedTo.push(SakuraGlade.characters.kohana);
        }
        else {
            // await ƒS.Progress.delay(1);
            await SakuraGlade.ƒS.Location.show(SakuraGlade.locations.temple);
            await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
            SakuraGlade.ƒS.Sound.play(SakuraGlade.sound.kohana, .5, true);
            await SakuraGlade.ƒS.update(2);
            SakuraGlade.ƒS.Speech.show();
            SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "Do you have anything new to show me, Dreamer?");
            SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
            await SakuraGlade.day2Inventory();
        }
        SakuraGlade.currentCharacter = undefined;
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "I'll come back when I have more information.");
        SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "... I'll be here...");
        SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
        SakuraGlade.ƒS.Sound.fade(SakuraGlade.sound.kohana, 0, 2);
        await SakuraGlade.ƒS.update(1);
        SakuraGlade.ƒS.Speech.clear();
        SakuraGlade.ƒS.Speech.hide();
    }
    SakuraGlade.Day2Kohana = Day2Kohana;
})(SakuraGlade || (SakuraGlade = {}));
var SakuraGlade;
(function (SakuraGlade) {
    async function Day2Morning() {
        console.log("Day 2 Morning starting");
        // await ƒS.Progress.delay(1);
        await SakuraGlade.ƒS.Location.show(SakuraGlade.locations.innDay);
        await SakuraGlade.ƒS.update(SakuraGlade.transitions.eye.duration, SakuraGlade.transitions.eye.alpha, SakuraGlade.transitions.eye.edge);
        // await ƒS.Progress.delay(1);
        SakuraGlade.ƒS.Speech.show();
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(What a night... I was lying awake thinking about who it could've been forever. I have so much to find out.)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Ah, and service came by earlier and brought me a letter! Let's see what's inside.)</i>");
        SakuraGlade.Inventory.add(SakuraGlade.items.permit);
        SakuraGlade.dataForSave.inventory.push(SakuraGlade.items.permit);
        await SakuraGlade.Inventory.open();
        await SakuraGlade.ƒS.Progress.delay(0);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Well there we go! Now I can finally have a look around the Sacred Tree.)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Let's backtrack...)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Kohana is the priestess and has access to the tree at all times. She also holds on to the Replica, so she could've easily swapped them. But she seems really worried about the festival. Why would she steal the Bead if she can just grab it anytime?)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Nobu was acting strange yesterday and I didn't get to interrogate him at all...)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(And that girl, Fumiko, maybe I should have a chat with her again too.)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Amaya definitely was at the Tree in the night as the Warden. She could've gotten the Bead while everyone was asleep and removed all traces while pretending to secure the area...)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(But even if she's not the culprit, shouldn't she have seen something? I need to ask her more about what she was doing and what she saw last night...)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(I better head out!)</i>");
        SakuraGlade.ƒS.Speech.clear();
        SakuraGlade.ƒS.Speech.hide();
    }
    SakuraGlade.Day2Morning = Day2Morning;
})(SakuraGlade || (SakuraGlade = {}));
var SakuraGlade;
(function (SakuraGlade) {
    async function Day2Nobu() {
        console.log("Day 2 Nobu starting");
        SakuraGlade.currentCharacter = SakuraGlade.characters.nobu;
        if (!SakuraGlade.dataForSave.day2TalkedTo.includes(SakuraGlade.characters.nobu)) {
            await SakuraGlade.ƒS.Location.show(SakuraGlade.locations.nobuHome);
            await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
            SakuraGlade.ƒS.Sound.play(SakuraGlade.sound.nobu, .4, true);
            await SakuraGlade.ƒS.update(2);
            SakuraGlade.ƒS.Speech.show();
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(This time, he’s home and answered right away when I knocked.)</i>");
            await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
            await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.smiling, SakuraGlade.ƒS.positionPercent(50, 100));
            await SakuraGlade.ƒS.update(.1);
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Sprout! Good to see you.");
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "How are you doing?");
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(He seems better than yesterday.)</i>");
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "I’m doing good, thank you. But I have a lot of questions in my head and I don’t think I’m any closer to finding the thief, to be honest.");
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Don’t look so down. I’m sure you’re doing a great job!");
            await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
            await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
            await SakuraGlade.ƒS.update(.1);
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Did you come here to ask me something?");
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Yes, actually. I haven’t had the chance to ask you questions about the incident at all. I hope you understand.");
            await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
            await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.smiling, SakuraGlade.ƒS.positionPercent(50, 100));
            await SakuraGlade.ƒS.update(.1);
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Oh, of course. Go ahead, Grasshopper.");
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Can you state your name and occupation again for me?");
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Surely, I’m Nobu and I’m retired.");
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "I used to be an adventurer, wandering the forest, but now I spend most of my days at home or doing whatever I can for the village.");
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Enjoying life, you know?");
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>That... sounds pretty cool!</i> I see. So, what did you do on the day of the incident?");
            await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
            await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.thinking, SakuraGlade.ƒS.positionPercent(50, 100));
            await SakuraGlade.ƒS.update(.1);
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Well, I went about my day as usual, then went to gather some firewood for the Irori, which is where I found you.");
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "You pretty much know the rest. I dropped you off at the Inn and went home.");
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Alright. I collected some clues about the theft, would you be alright answering some questions about these?");
            await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
            await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
            await SakuraGlade.ƒS.update(.1);
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Of course, Sprout. I’ll try to tell you as much as I can.");
            await SakuraGlade.day2Inventory();
            SakuraGlade.dataForSave.day2TalkedTo.push(SakuraGlade.characters.nobu);
        }
        else {
            // await ƒS.Progress.delay(1);
            await SakuraGlade.ƒS.Location.show(SakuraGlade.locations.nobuHome);
            await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
            SakuraGlade.ƒS.Sound.play(SakuraGlade.sound.nobu, .4, true);
            await SakuraGlade.ƒS.update(2);
            SakuraGlade.ƒS.Speech.show();
            await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "There you are again, Grasshopper. Busy as always. Find something new?");
            await SakuraGlade.day2Inventory();
        }
        SakuraGlade.currentCharacter = undefined;
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "That’s all the info I needed for now, thank you.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Good luck, Sprout! I’ll wait here if you need me.");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
        SakuraGlade.ƒS.Sound.fade(SakuraGlade.sound.nobu, 0, 2);
        await SakuraGlade.ƒS.update(1);
        SakuraGlade.ƒS.Speech.clear();
        SakuraGlade.ƒS.Speech.hide();
    }
    SakuraGlade.Day2Nobu = Day2Nobu;
})(SakuraGlade || (SakuraGlade = {}));
var SakuraGlade;
(function (SakuraGlade) {
    async function Day2SacredTree() {
        console.log("Day 2 Sacred Tree starting");
        await SakuraGlade.ƒS.Progress.delay(1);
        SakuraGlade.ƒS.Sound.play(SakuraGlade.sound.amaya, .5, true);
        await SakuraGlade.ƒS.Location.show(SakuraGlade.locations.sacredTree);
        await SakuraGlade.ƒS.update(2);
        await SakuraGlade.ƒS.Progress.delay(1);
        SakuraGlade.ƒS.Speech.show();
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Ah... it's still just as beautiful as yesterday.)</i>");
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(1);
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.smiling, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "I see you're back, Cub.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "Have you received my permit?");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Yes, ma'am.");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "Show it to me.");
        SakuraGlade.extraItemInteraction = SakuraGlade.items.permit;
        await SakuraGlade.Inventory.open();
        await SakuraGlade.ƒS.Progress.delay(0);
        // wait for player to present permit
        SakuraGlade.extraItemInteraction = undefined;
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.smiling, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "Good. Don't lose it.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(I wasn't intending to...)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Can I ask you another question?");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "Go ahead.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "You were guarding the tree the night of the incident, yes?");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.upset, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "Yes. I thought I'd said that before.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "How come you didn't see anything happening?");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "I was on my post all night, but I don't have eyes in the back of my head, Cub.");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.thinking, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "Whoever stole the Bead must have skillfully evaded my watchful eye.");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "Now go and do your investigations. But don't touch anything!");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Yes, ma'am!");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
        await SakuraGlade.ƒS.update(1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(She gets very defensive when I bring that up. I wonder if it's her pride or something else...)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Well then, before all else... let's have a look around!)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(...)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(The shrine nests a little satin pillow in its middle. I suppose that's where the Moon Bead is supposed to sit. For such a holy artifact, it's not very well secured.)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Then again, apparently, no one ever tried to steal it before, so they had no reason to worry about it. Apart from the missing Bead, I can't see anything amiss with the shrine though.)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(The ground before it is tiled, so I won't be finding any footprints either. I'll check the surrounding area.)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(...)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Hmm what's that?)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(I see something strangely black on the ground between some roots. Did someone litter?)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Ew... gross, it's sticky.)</i>");
        SakuraGlade.Inventory.add(SakuraGlade.items.blackOoze);
        SakuraGlade.dataForSave.inventory.push(SakuraGlade.items.blackOoze);
        await SakuraGlade.Inventory.open();
        await SakuraGlade.ƒS.Progress.delay(0);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Well, evidence is evidence. I'll keep it with me.)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(This is the only thing I could find out of place. The rest of the area looks very well-kept and tidy. I guess that's it for my big hopes of finding useful stuff here.)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Let's head back...)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Oh!)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(I almost stepped on something! It reflected the sun in my eyes, else I wouldn't have seen it at all. What is this?)</i>");
        SakuraGlade.Inventory.add(SakuraGlade.items.brokenEarring);
        SakuraGlade.dataForSave.inventory.push(SakuraGlade.items.brokenEarring);
        await SakuraGlade.Inventory.open();
        await SakuraGlade.ƒS.Progress.delay(0);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Such a pretty little hanger. Someone definitely lost this here. This should prove insightful.)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Well, that wraps it up then, nothing left to find here.)</i>");
        SakuraGlade.ƒS.Speech.clear();
    }
    SakuraGlade.Day2SacredTree = Day2SacredTree;
})(SakuraGlade || (SakuraGlade = {}));
var SakuraGlade;
(function (SakuraGlade) {
    async function Day3Morning() {
        console.log("Day 3 Morning starting");
        // await ƒS.Progress.delay(1);
        await SakuraGlade.ƒS.Location.show(SakuraGlade.locations.innDay);
        await SakuraGlade.ƒS.update(SakuraGlade.transitions.eye.duration, SakuraGlade.transitions.eye.alpha, SakuraGlade.transitions.eye.edge);
        // await ƒS.Progress.delay(1);
        SakuraGlade.ƒS.Speech.show();
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(It was hard to find rest last night…)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Alright then… this is it! I got this.)</i>");
        SakuraGlade.ƒS.Speech.clear();
        SakuraGlade.ƒS.Speech.hide();
        // Day3showdown
    }
    SakuraGlade.Day3Morning = Day3Morning;
})(SakuraGlade || (SakuraGlade = {}));
var SakuraGlade;
(function (SakuraGlade) {
    async function Day3Showdown() {
        console.log("Day 3 Showdown starting");
        await SakuraGlade.ƒS.Location.show(SakuraGlade.locations.sakuraGladeDay);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.neutral, SakuraGlade.ƒS.positionPercent(18, 100));
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.neutral, SakuraGlade.ƒS.positionPercent(45, 100));
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.sad, SakuraGlade.ƒS.positionPercent(62, 100));
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.upset, SakuraGlade.ƒS.positionPercent(82, 100));
        SakuraGlade.ƒS.Sound.play(SakuraGlade.sound.village, .5, true);
        await SakuraGlade.ƒS.update(2);
        SakuraGlade.ƒS.Speech.show();
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Everyone’s gathered… Amaya, Kohana, Nobu, Fumiko.)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Good morning everyone.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Good morning, Grasshopper!");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Good morning…");
        SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "...Mh.");
        SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.neutral, SakuraGlade.ƒS.positionPercent(82, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "Well then, Cub. We’ve put our trust in you. So? Tell us. Who was the real culprit behind the theft of the Moon Bead?");
        let options = {
            amaya: "Amaya",
            kohana: "Kohana",
            nobu: "Nobu",
            fumiko: "Fumiko"
        };
        let optionsElement = await SakuraGlade.ƒS.Menu.getInput(options, "choices");
        switch (optionsElement) {
            case options.amaya:
                // continue path here
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "It was Amaya. She stole the Moon Bead. She had access to the tree all night.");
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
                await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.surprised, SakuraGlade.ƒS.positionPercent(62, 100));
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
                await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.surprised, SakuraGlade.ƒS.positionPercent(45, 100));
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
                await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.surprised, SakuraGlade.ƒS.positionPercent(18, 100));
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
                await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.surprised, SakuraGlade.ƒS.positionPercent(82, 100));
                await SakuraGlade.ƒS.update(.1);
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "What?!");
                SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "…Onee-sama?");
                SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Our warden? That can’t be!");
                return "BadEnding";
            case options.kohana:
                // continue path here
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "It was, after all, Kohana. She has the replica at all times, and since she’s close to Amaya, she convinced her to cover up her theft.");
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
                await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.surprised, SakuraGlade.ƒS.positionPercent(62, 100));
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
                await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.surprised, SakuraGlade.ƒS.positionPercent(45, 100));
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
                await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.surprised, SakuraGlade.ƒS.positionPercent(18, 100));
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
                await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.surprised, SakuraGlade.ƒS.positionPercent(82, 100));
                await SakuraGlade.ƒS.update(.1);
                SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "That’s not true…");
                SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Sprout? Are you sure?");
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "How dare you…!");
                return "BadEnding";
            case options.nobu:
                // continue path here
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "It was Nobu. He snuck to the Tree at night pretending to pray, but in reality, it was all just a scheme!");
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
                await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.surprised, SakuraGlade.ƒS.positionPercent(62, 100));
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
                await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.surprised, SakuraGlade.ƒS.positionPercent(45, 100));
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
                await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.surprised, SakuraGlade.ƒS.positionPercent(18, 100));
                await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
                await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.surprised, SakuraGlade.ƒS.positionPercent(82, 100));
                await SakuraGlade.ƒS.update(.1);
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "What are you saying, Sprout?");
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "Do you ever think before speaking?");
                SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "…is that true?");
                SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
                return "BadEnding";
            case options.fumiko:
                // continue path here
                return "BittersweetEnding";
        }
    }
    SakuraGlade.Day3Showdown = Day3Showdown;
})(SakuraGlade || (SakuraGlade = {}));
var SakuraGlade;
(function (SakuraGlade) {
    async function BadEnding() {
        console.log("Bad Ending starting");
        SakuraGlade.ƒS.Sound.fade(SakuraGlade.sound.village, 0, 2);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Stop it!");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.sad, SakuraGlade.ƒS.positionPercent(45, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Fumiko…?)</i>");
        let pronouns = "He is";
        if (SakuraGlade.dataForSave.genderProtagonist == "female") {
            pronouns = "She is";
        }
        else if (SakuraGlade.dataForSave.genderProtagonist == "diverse") {
            pronouns = "They are";
        }
        SakuraGlade.ƒS.Sound.play(SakuraGlade.sound.sad, .5, true);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Just stop… " + pronouns + " wrong!");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.upset, SakuraGlade.ƒS.positionPercent(82, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "How would you know that, Fumiko?");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "I… I can’t sit by and watch while someone innocent has to take the blame for something that I did…");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Fumiko… what are you implying?");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.crying, SakuraGlade.ƒS.positionPercent(45, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "It was me! Okay? It was me... I stole the Moon Bead.");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.sad, SakuraGlade.ƒS.positionPercent(45, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "And I can prove it. I have it. Here, take it... I don’t want it anymore.");
        SakuraGlade.Inventory.add(SakuraGlade.items.moonBead);
        SakuraGlade.dataForSave.inventory.push(SakuraGlade.items.moonBead);
        await SakuraGlade.Inventory.open();
        await SakuraGlade.ƒS.Progress.delay(0);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "How?");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "I stole the replica when Kohana was bathing… I’m sorry, Kohana. I didn’t think they’d immediately suspect you.");
        SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.sad, SakuraGlade.ƒS.positionPercent(62, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "…Mh.");
        SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Then I waited for Amaya to leave for her… break.");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.surprised, SakuraGlade.ƒS.positionPercent(82, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "You were watching me? You knew all this time?");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.upset, SakuraGlade.ƒS.positionPercent(82, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "It was the perfect opportunity.");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.neutral, SakuraGlade.ƒS.positionPercent(45, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "But then Nobu came by, and I lost my earring. I couldn’t go back to get it anymore.");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.sad, SakuraGlade.ƒS.positionPercent(45, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "I guess I was meant to fail either way.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "But why did you…? What do you have to gain from it?");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.crying, SakuraGlade.ƒS.positionPercent(45, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "You wouldn’t understand… I just, I didn’t have any choice. I thought my life would be over if the festival takes place.");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.sad, SakuraGlade.ƒS.positionPercent(45, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "But it doesn’t matter now anyways. It’s all been decided. So take me away. Let Kohana go. It’s all my fault.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Fumiko…");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.neutral, SakuraGlade.ƒS.positionPercent(82, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "Don’t bother. You’ve done enough. We’ll take care of the rest.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "But... I-");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.upset, SakuraGlade.ƒS.positionPercent(82, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "Leave.");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
        await SakuraGlade.ƒS.update(1);
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.sad, SakuraGlade.ƒS.positionPercent(18, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "I’m sorry, Sprout. I’m sure you tried.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "I… <i>(In the end, I wasn’t able to help at all. I suppose sometimes that’s how it goes. At least the real culprit revealed herself…)</i>");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
        await SakuraGlade.ƒS.update(1);
        SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.neutral, SakuraGlade.ƒS.positionPercent(62, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "… It’s alright, Dreamer. We learn from our mistakes.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "...");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.sad, SakuraGlade.ƒS.positionPercent(62, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "Now, it’s time…");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "...");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.neutral, SakuraGlade.ƒS.positionPercent(62, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "Goodbye, Worldleaper…");
        SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
        await SakuraGlade.ƒS.Location.show(SakuraGlade.locations.blackout);
        await SakuraGlade.ƒS.update(5);
        // disable inventory
        SakuraGlade.Inventory.remove(SakuraGlade.items.medicalNotice);
        SakuraGlade.Inventory.remove(SakuraGlade.items.permit);
        SakuraGlade.Inventory.remove(SakuraGlade.items.moonBead);
        SakuraGlade.Inventory.remove(SakuraGlade.items.replica);
        SakuraGlade.Inventory.remove(SakuraGlade.items.brokenEarring);
        SakuraGlade.Inventory.remove(SakuraGlade.items.blackOoze);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Wait… no… <i>(Oh… not this again…)</i>");
        SakuraGlade.ƒS.Speech.clear();
        SakuraGlade.ƒS.Speech.hide();
        await SakuraGlade.ƒS.Location.show(SakuraGlade.locations.bedroom);
        await SakuraGlade.ƒS.update(2);
        SakuraGlade.ƒS.Speech.show();
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(...)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(What happened… Where…)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(I’m back in my room? When did I get here? … was it all just a dream?)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(...)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(It’s all so hazy… What was I doing again…?)</i>");
        SakuraGlade.ƒS.Sound.fade(SakuraGlade.sound.sad, 0, 2);
        SakuraGlade.ƒS.Speech.clear();
        SakuraGlade.ƒS.Speech.hide();
        await SakuraGlade.ƒS.Location.show(SakuraGlade.locations.blackout);
        await SakuraGlade.ƒS.update(2);
    }
    SakuraGlade.BadEnding = BadEnding;
})(SakuraGlade || (SakuraGlade = {}));
var SakuraGlade;
(function (SakuraGlade) {
    async function BittersweetEnding() {
        console.log("Bittersweet Ending starting");
        SakuraGlade.ƒS.Sound.fade(SakuraGlade.sound.village, 0, 2);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "It was Fumiko. She stole the replica from Kohana while she was taking a bath, snuck to the Tree while Amaya wasn’t looking and exchanged the Beads.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "But she didn’t anticipate Nobu coming by for a midnight stroll, so she had to leave hurriedly, which is where she lost her earring!");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.surprised, SakuraGlade.ƒS.positionPercent(82, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "Is that true? Look at me, Fumiko. Is that true?");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.sad, SakuraGlade.ƒS.positionPercent(45, 100));
        await SakuraGlade.ƒS.update(.1);
        SakuraGlade.ƒS.Sound.play(SakuraGlade.sound.fumiko, .5, true);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "…Yes. It’s true.");
        // don't forget surprised reactions!
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.surprised, SakuraGlade.ƒS.positionPercent(62, 100));
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.surprised, SakuraGlade.ƒS.positionPercent(18, 100));
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.upset, SakuraGlade.ƒS.positionPercent(82, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "I… didn’t have another choice. Please. Believe me.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "I was going to give it back after the festival. Here, you can have it again.");
        SakuraGlade.Inventory.add(SakuraGlade.items.moonBead);
        SakuraGlade.dataForSave.inventory.push(SakuraGlade.items.moonBead);
        await SakuraGlade.Inventory.open();
        await SakuraGlade.ƒS.Progress.delay(0);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(I was right! It was her!)</i> But… why?");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.crying, SakuraGlade.ƒS.positionPercent(45, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "My parents were going to seal my fate at the Spring Festival, marry me to some random snob and confine me in this picture perfect life forever!");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "I just, couldn’t take it anymore. Don’t you know what it’s like to long to live? All I wanted was one more chance.");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.sad, SakuraGlade.ƒS.positionPercent(45, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "But. I guess that’s all over now. It doesn’t matter anymore.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "I’m sorry Kohana. I didn’t mean to cause any harm.");
        SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.sad, SakuraGlade.ƒS.positionPercent(62, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "It’s… alright. You’ve been hurting…");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.neutral, SakuraGlade.ƒS.positionPercent(62, 100));
        await SakuraGlade.ƒS.update(.1);
        SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.sad, SakuraGlade.ƒS.positionPercent(18, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "I understand that you were desperate, Fumiko. But stealing our sacred artifact… There must have been another way.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "I know. It was… stupid. But I’ve made my peace. I’m ready for the consequences.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "You’ll be trialed by Sakura Glade law.");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.smiling, SakuraGlade.ƒS.positionPercent(82, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "But, since you’ve complied so readily, I think we should end this on a good note. We should celebrate that the Moon Bead is back and the Spring Festival can take place.");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.neutral, SakuraGlade.ƒS.positionPercent(82, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "I’ll hear your full statement after the festivities are over.");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.neutral, SakuraGlade.ƒS.positionPercent(45, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Thank you…");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
        await SakuraGlade.ƒS.update(1);
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.neutral, SakuraGlade.ƒS.positionPercent(18, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Great job, Sprout! I knew you would find out the truth behind it all!");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.smiling, SakuraGlade.ƒS.positionPercent(62, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.smiling, SakuraGlade.ƒS.positionPercent(18, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Now, let’s celebrate! You don’t want to miss this!");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
        SakuraGlade.ƒS.Sound.fade(SakuraGlade.sound.fumiko, 0, 2);
        await SakuraGlade.ƒS.update(1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Well, that’s good news. Kohana has been declared not guilty and the Spring Festival can take place.)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(And, I’ll get to attend it as well!</i>");
        SakuraGlade.ƒS.Speech.clear();
        SakuraGlade.ƒS.Speech.hide();
        await SakuraGlade.ƒS.Location.show(SakuraGlade.locations.festival);
        SakuraGlade.ƒS.Sound.play(SakuraGlade.sound.festival, .5, true);
        await SakuraGlade.ƒS.update(2);
        SakuraGlade.ƒS.Sound.play(SakuraGlade.sound.crowd, .5, true);
        SakuraGlade.ƒS.Speech.show();
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Woah… the festival is enormous, for such a small village. There’s music and booths and everyone contributed something.)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(The Moon Ritual performed by Kohana was beautiful as well. I’m so glad I got to experience this!)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Grasshopper! You’ll miss the fireworks!");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Coming!");
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.smiling, SakuraGlade.ƒS.positionPercent(18, 100));
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.smiling, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.neutral, SakuraGlade.ƒS.positionPercent(68, 100));
        await SakuraGlade.ƒS.update(1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "We wanted to take a moment to thank you, " + SakuraGlade.dataForSave.nameProtagonist + ". Without you, who knows if the festival could have taken place.");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "And thank you for clearing Kohana’s name. We won’t forget this.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "You’ve done the village a great service, Sprout. Us all.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Even Fumiko, even though she needs her space right now, I know is grateful to you. Thank you.");
        SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.smiling, SakuraGlade.ƒS.positionPercent(68, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "… Thank you for helping me, Dreamer. You’ve made me feel… welcomed. It’s nice.");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.sad, SakuraGlade.ƒS.positionPercent(68, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "Now… You can probably feel it too… It’s time for you to say goodbye.");
        SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Wait…");
        SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.neutral, SakuraGlade.ƒS.positionPercent(68, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "Goodbye, Worldleaper!");
        SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.surprised, SakuraGlade.ƒS.positionPercent(18, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "You’re already leaving?");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.smiling, SakuraGlade.ƒS.positionPercent(18, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "I hope you get home safely, wherever that is, Sprout!");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.smiling, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "Farewell, Cub.");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
        await SakuraGlade.ƒS.Location.show(SakuraGlade.locations.blackout);
        SakuraGlade.ƒS.Sound.fade(SakuraGlade.sound.crowd, 0, 3);
        SakuraGlade.ƒS.Sound.fade(SakuraGlade.sound.festival, 0, 5);
        await SakuraGlade.ƒS.update(5);
        // disable inventory
        SakuraGlade.Inventory.remove(SakuraGlade.items.medicalNotice);
        SakuraGlade.Inventory.remove(SakuraGlade.items.permit);
        SakuraGlade.Inventory.remove(SakuraGlade.items.moonBead);
        SakuraGlade.Inventory.remove(SakuraGlade.items.replica);
        SakuraGlade.Inventory.remove(SakuraGlade.items.brokenEarring);
        SakuraGlade.Inventory.remove(SakuraGlade.items.blackOoze);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "You guys… Goodbye!");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Ah… my vision is getting blurry. I guess this it it. Here we go again…)</i>");
        SakuraGlade.ƒS.Speech.clear();
        SakuraGlade.ƒS.Speech.hide();
        await SakuraGlade.ƒS.Location.show(SakuraGlade.locations.bedroom);
        await SakuraGlade.ƒS.update(2);
        SakuraGlade.ƒS.Speech.show();
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(...)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Oh… I’m back home…)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(How did I get here? Did I dream all of that?)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(...)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(I don’t remember what happened.)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(But for some reason… I feel… warm. It’s nice…)</i>");
        SakuraGlade.ƒS.Speech.clear();
        SakuraGlade.ƒS.Speech.hide();
        await SakuraGlade.ƒS.Location.show(SakuraGlade.locations.blackout);
        await SakuraGlade.ƒS.update(2);
    }
    SakuraGlade.BittersweetEnding = BittersweetEnding;
})(SakuraGlade || (SakuraGlade = {}));
var SakuraGlade;
(function (SakuraGlade) {
    async function GoodEnding() {
        console.log("Good Ending starting");
        SakuraGlade.Inventory.add(SakuraGlade.items.moonBead);
        await SakuraGlade.ƒS.Progress.delay(1);
        await SakuraGlade.ƒS.Location.show(SakuraGlade.locations.innDay);
        await SakuraGlade.ƒS.update(SakuraGlade.transitions.eye.duration, SakuraGlade.transitions.eye.alpha, SakuraGlade.transitions.eye.edge);
        await SakuraGlade.ƒS.Progress.delay(1);
        SakuraGlade.ƒS.Speech.show();
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(I fell asleep immediately the second I got back to my bed.)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Well then. If all goes well now, I can clear Kohana’s name and help Fumiko out. Let’s get going!)</i>");
        SakuraGlade.ƒS.Speech.clear();
        SakuraGlade.ƒS.Speech.hide();
        await SakuraGlade.ƒS.Location.show(SakuraGlade.locations.sakuraGladeDay);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.neutral, SakuraGlade.ƒS.positionPercent(18, 100));
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.sad, SakuraGlade.ƒS.positionPercent(45, 100));
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.sad, SakuraGlade.ƒS.positionPercent(62, 100));
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.upset, SakuraGlade.ƒS.positionPercent(82, 100));
        SakuraGlade.ƒS.Sound.play(SakuraGlade.sound.village, .5, true);
        await SakuraGlade.ƒS.update(2);
        SakuraGlade.ƒS.Speech.show();
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Everyone’s gathered… Amaya, Kohana, Nobu, Fumiko.)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Good morning everyone.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Good morning, Grasshopper!");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Good morning…");
        SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "...Mh.");
        SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.neutral, SakuraGlade.ƒS.positionPercent(82, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "Well then, Cub. We’ve put our trust in you. So? Tell us. Who was the real culprit behind the theft of the Moon Bead?");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Actually, we’ve got something to tell you.");
        SakuraGlade.ƒS.Sound.fade(SakuraGlade.sound.village, 0, 2);
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.surprised, SakuraGlade.ƒS.positionPercent(18, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "We?");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Fumiko, would you come to me?");
        SakuraGlade.ƒS.Sound.play(SakuraGlade.sound.fumiko, .5, true);
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.neutral, SakuraGlade.ƒS.positionPercent(45, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Yes. … I have something to tell you.");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.neutral, SakuraGlade.ƒS.positionPercent(62, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.upset, SakuraGlade.ƒS.positionPercent(82, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "What is the meaning of this…?");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Please listen to her. She entrusted herself to me yesterday. I’m sure you’ll all feel the same as me when she’s done explaining.");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.smiling, SakuraGlade.ƒS.positionPercent(18, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "I’m listening. Go ahead.");
        SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "Me too.");
        SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.neutral, SakuraGlade.ƒS.positionPercent(82, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "As you were.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Thank you.");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.sad, SakuraGlade.ƒS.positionPercent(45, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Well… To put it briefly, it was me. I stole the Moon Bead.");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.surprised, SakuraGlade.ƒS.positionPercent(62, 100));
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.surprised, SakuraGlade.ƒS.positionPercent(18, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "What? Where is it?");
        // don't forget to update character expressions :)
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Please, let her finish. I have it. She gave it to me. Here.");
        SakuraGlade.extraItemInteraction = SakuraGlade.items.moonBead;
        // await Inventory.open();
        await SakuraGlade.ƒS.Progress.delay(0);
        SakuraGlade.extraItemInteraction = undefined;
        // select moon bead
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "She’s telling the truth. Now please continue, Fumiko.");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.neutral, SakuraGlade.ƒS.positionPercent(62, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Y-yes. I know it was wrong of me to do. I lied to a lot of people.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "I stole the replica from you, Kohana. I’m truly sorry. I didn’t expect the reaction of the village to be so extreme. I never wanted to cause you any harm.");
        SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.sad, SakuraGlade.ƒS.positionPercent(62, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "Mh… it’s alright.");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.neutral, SakuraGlade.ƒS.positionPercent(62, 100));
        await SakuraGlade.ƒS.update(.1);
        SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Well, I knew when the Tree would be unguarded. I accidentally noticed it one night, but I’ve never ever told anyone, Amaya. I couldn’t dream to.");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.smiling, SakuraGlade.ƒS.positionPercent(45, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "I think you’re the best warden the village has ever had.");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.sad, SakuraGlade.ƒS.positionPercent(82, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "Fumiko…");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.neutral, SakuraGlade.ƒS.positionPercent(45, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Now, I know you’re probably wondering, why would I steal the Moon Bead. I just didn’t know any better, to be honest.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Looking back it was stupid of me. I shouldn’t have. But I didn’t see any other way.");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.sad, SakuraGlade.ƒS.positionPercent(45, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "You might not know this, but my parents are very strict. I was supposed to be Sakura Princess this year, and they would marry me off to someone I barely know. I…");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "I already told " + SakuraGlade.dataForSave.nameProtagonist + " yesterday. I’ve been trying my best to fit into the life they’ve foreseen for me, but I can’t. I was hoping… Well I was just hoping that if the festival didn’t take place, I could have another chance to forge my own path in life.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Pursuing the things that make me happy, instead of following the orders of my family. Actually living, enjoying the outside world, being just a normal commoner.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "I might have been naïve to believe I could get away with it, but I had to try. I wanted to bring it back after the festival. I never anticipated the impact it would have on everyone else.");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.neutral, SakuraGlade.ƒS.positionPercent(45, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "So, I stand here, not asking for forgiveness, but understanding.");
        SakuraGlade.ƒS.Speech.clear();
        await SakuraGlade.ƒS.Progress.delay(1);
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.sad, SakuraGlade.ƒS.positionPercent(18, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "We all make mistakes in life. I think we’re all happy that you brought the Moon Bead back in time.");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.smiling, SakuraGlade.ƒS.positionPercent(18, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "I never knew… how much pain you were holding in.");
        SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.sad, SakuraGlade.ƒS.positionPercent(62, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "…you deserve to be seen as a person. Everyone does.");
        SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.smiling, SakuraGlade.ƒS.positionPercent(45, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Thank you everyone… Thank you, Kohana. I see you.");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.neutral, SakuraGlade.ƒS.positionPercent(62, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Nobody can be perfect. You’ve piled up all that anger and pain until it burst out. But you’ve mended your ways. You brought the Bead back.");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.sad, SakuraGlade.ƒS.positionPercent(45, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "I still understand if you can’t let me go freely, Amaya.");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.thinking, SakuraGlade.ƒS.positionPercent(82, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "I’ll see about that.");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.neutral, SakuraGlade.ƒS.positionPercent(82, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "Maybe I’ll have you do community services, helping Nobu with gathering food and firewood in the forest. All those things that get your hands dirty.");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.smiling, SakuraGlade.ƒS.positionPercent(82, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.crying, SakuraGlade.ƒS.positionPercent(45, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Thank you…");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "What will you do about your parents?");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.neutral, SakuraGlade.ƒS.positionPercent(45, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "I’ll talk to them again. But this time, I know that I have friends that are on my side.");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.laughing, SakuraGlade.ƒS.positionPercent(18, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Now, now. Let’s cheer, folks!");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.smiling, SakuraGlade.ƒS.positionPercent(18, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "It’s time we bring the good news to the people and start the festivities! The Moon Bead was found, the Spring Festival can commence!");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
        await SakuraGlade.ƒS.update(1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "He’s right. Let’s cheer up. We’ll think of a solution later. Come now.");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
        SakuraGlade.ƒS.Sound.fade(SakuraGlade.sound.fumiko, 0, 2);
        await SakuraGlade.ƒS.update(1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(That went even better than expected! I’m glad I could convince Fumiko to speak up for herself. Even though the Moon Bead can’t actually fulfill wishes, it seems her wish did come true after all. She’ll finally be able to have a chance at her own life…)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(And now, I even get to attend the festival! I better get going.)</i>");
        SakuraGlade.ƒS.Speech.clear();
        SakuraGlade.ƒS.Speech.hide();
        await SakuraGlade.ƒS.Location.show(SakuraGlade.locations.festival);
        SakuraGlade.ƒS.Sound.play(SakuraGlade.sound.festival, .5, true);
        await SakuraGlade.ƒS.update(2);
        SakuraGlade.ƒS.Sound.play(SakuraGlade.sound.crowd, .5, true);
        SakuraGlade.ƒS.Speech.show();
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Woah… the festival is enormous, for such a small village. There’s music and booths and everyone contributed something.)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(The Moon Ritual performed by Kohana was beautiful as well. I’m so glad I got to experience this!)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Grasshopper! You’ll miss the fireworks!");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Coming!");
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.smiling, SakuraGlade.ƒS.positionPercent(20, 100));
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.smiling, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.neutral, SakuraGlade.ƒS.positionPercent(68, 100));
        await SakuraGlade.ƒS.update(1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "We wanted to take a moment to thank you, " + SakuraGlade.dataForSave.nameProtagonist + ". Without you, who knows if the festival could have taken place.");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "And thank you for clearing Kohana’s name. We won’t forget this.");
        SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.smiling, SakuraGlade.ƒS.positionPercent(68, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "… thank you for helping me, Dreamer. You’ve made me feel… welcomed. It’s nice.");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.neutral, SakuraGlade.ƒS.positionPercent(68, 100));
        await SakuraGlade.ƒS.update(.1);
        SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "You’ve done the village a great service, Sprout. Us all.");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "I think Fumiko is waiting for you. She’s got a special thanks for you.");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "Yes, I wanted to thank you again.");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.sad, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "You’ve shown me that there are more people here for me than I thought, and that I have the strength to be my own person. I’ll always remember that.");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.neutral, SakuraGlade.ƒS.positionPercent(50, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "So, I wanted to give you something to remember me by as well. Here, take this");
        SakuraGlade.Inventory.add(SakuraGlade.items.crystalEarring);
        SakuraGlade.dataForSave.inventory.push(SakuraGlade.items.crystalEarring);
        await SakuraGlade.Inventory.open();
        await SakuraGlade.ƒS.Progress.delay(0);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Thank you…");
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.neutral, SakuraGlade.ƒS.positionPercent(18, 100));
        // animation
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.neutral, SakuraGlade.ƒS.positionPercent(45, 100));
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.neutral, SakuraGlade.ƒS.positionPercent(62, 100));
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.neutral, SakuraGlade.ƒS.positionPercent(82, 100));
        await SakuraGlade.ƒS.update(1);
        SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.sad, SakuraGlade.ƒS.positionPercent(62, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "Now… You can probably feel it too… It’s time for you to say goodbye.");
        SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Wait…");
        SakuraGlade.ƒS.Speech.setTickerDelays(60, 5000);
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.kohana, SakuraGlade.characters.kohana.pose.neutral, SakuraGlade.ƒS.positionPercent(62, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.kohana, "Goodbye, Worldleaper!");
        SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.surprised, SakuraGlade.ƒS.positionPercent(18, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "You’re already leaving?");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.smiling, SakuraGlade.ƒS.positionPercent(18, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "I hope you get home safely, wherever that is, Sprout!");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.amaya, SakuraGlade.characters.amaya.pose.smiling, SakuraGlade.ƒS.positionPercent(82, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.amaya, "Farewell, Cub.");
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.fumiko, SakuraGlade.characters.fumiko.pose.smiling, SakuraGlade.ƒS.positionPercent(45, 100));
        await SakuraGlade.ƒS.update(.1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.fumiko, "I hope we’ll see each other again one day!");
        await SakuraGlade.ƒS.Location.show(SakuraGlade.locations.blackout);
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.amaya);
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.kohana);
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
        await SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.fumiko);
        SakuraGlade.ƒS.Sound.fade(SakuraGlade.sound.crowd, 0, 3);
        SakuraGlade.ƒS.Sound.fade(SakuraGlade.sound.festival, 0, 5);
        await SakuraGlade.ƒS.update(5);
        // disable inventory
        SakuraGlade.Inventory.remove(SakuraGlade.items.medicalNotice);
        SakuraGlade.Inventory.remove(SakuraGlade.items.permit);
        SakuraGlade.Inventory.remove(SakuraGlade.items.moonBead);
        SakuraGlade.Inventory.remove(SakuraGlade.items.replica);
        SakuraGlade.Inventory.remove(SakuraGlade.items.brokenEarring);
        SakuraGlade.Inventory.remove(SakuraGlade.items.blackOoze);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "You guys… Goodbye!");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Ah… my vision is getting blurry. I guess this it it. Here we go again…)</i>");
        SakuraGlade.ƒS.Speech.clear();
        SakuraGlade.ƒS.Speech.hide();
        await SakuraGlade.ƒS.Location.show(SakuraGlade.locations.bedroom);
        await SakuraGlade.ƒS.update(2);
        SakuraGlade.ƒS.Speech.show();
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(...)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Oh… I’m back home…)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(How did I get here? Did I dream all of that?)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(...)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(I don’t remember what happened.)</i>");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(Wait… there’s something in my hand. What’s that?)</i>");
        await SakuraGlade.Inventory.open();
        await SakuraGlade.ƒS.Progress.delay(0);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "<i>(... so it wasn’t just a dream…?)</i>");
        SakuraGlade.ƒS.Speech.clear();
        SakuraGlade.ƒS.Speech.hide();
        await SakuraGlade.ƒS.Location.show(SakuraGlade.locations.blackout);
        await SakuraGlade.ƒS.update(2);
    }
    SakuraGlade.GoodEnding = GoodEnding;
})(SakuraGlade || (SakuraGlade = {}));
var SakuraGlade;
(function (SakuraGlade) {
    async function EndScene() {
        console.log("THE VISUAL NOVEL ENDS HERE");
    }
    SakuraGlade.EndScene = EndScene;
})(SakuraGlade || (SakuraGlade = {}));
//# sourceMappingURL=SakuraGlade.js.map