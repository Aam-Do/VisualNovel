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
            background: "Images/Locations/rainforest.png"
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
        nobu: {
            name: "Nobu",
            origin: SakuraGlade.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Images/Characters/NobuSketch.png",
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
            // image: "Images/Items/path"
            // static: true
        },
        idCard: {
            name: "Student ID-Card",
            description: "The ID-Card from my university.",
            // image: "Images/Items/path"
            // static: true
        }
    };
    SakuraGlade.dataForSave = {
        nameProtagonist: "",
        nobuPoints: 0,
        amayaPoints: 0,
        kohanaPoints: 0,
        fumikoPoints: 0
    };
    function credits() {
        SakuraGlade.ƒS.Text.print("");
    }
    // Menu shortcuts
    let inGameMenuButtons = {
        save: "Save",
        load: "Load",
        close: "Close",
        credits: "Credits"
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
        gameMenu = SakuraGlade.ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenuCSSClass");
        buttonFunctionalities("Close");
        // Scene Hierarchy 
        let scenes = [
            { scene: SakuraGlade.Intro, name: "Intro Scene" },
            { scene: SakuraGlade.FairieForest, name: "Fairie Forest" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        SakuraGlade.dataForSave = SakuraGlade.ƒS.Progress.setData(SakuraGlade.dataForSave, uiElement);
        // start the sequence
        SakuraGlade.ƒS.Progress.go(scenes);
    }
})(SakuraGlade || (SakuraGlade = {}));
var SakuraGlade;
(function (SakuraGlade) {
    async function FairieForest() {
        console.log("Intro Scene starting");
        // cpms = characters per millisecond
        SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
        SakuraGlade.ƒS.Speech.hide();
        await SakuraGlade.ƒS.Progress.delay(5);
        SakuraGlade.ƒS.Speech.show();
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "(<i>What</i>)");
        await SakuraGlade.ƒS.Location.show(SakuraGlade.locations.fairieForest);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.neutral, SakuraGlade.ƒS.positions.bottomright);
        SakuraGlade.ƒS.update(1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Hi, I'm Nobu!");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Und wie heißt du?");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Hi ich bin der Protagonist aka der Spieler. " + "Ich heiße ", true, "Player");
        SakuraGlade.dataForSave.nameProtagonist = await SakuraGlade.ƒS.Speech.getInput();
        SakuraGlade.characters.protagonist.name = SakuraGlade.dataForSave.nameProtagonist;
        console.log(SakuraGlade.dataForSave.nameProtagonist);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Hi " + SakuraGlade.dataForSave.nameProtagonist + "!");
        SakuraGlade.ƒS.Speech.clear();
        SakuraGlade.ƒS.Speech.hide();
        SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
    }
    SakuraGlade.FairieForest = FairieForest;
})(SakuraGlade || (SakuraGlade = {}));
var SakuraGlade;
(function (SakuraGlade) {
    async function Intro() {
        console.log("Intro Scene starting");
        // cpms = characters per millisecond
        SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
        SakuraGlade.ƒS.Speech.hide();
        await SakuraGlade.ƒS.Location.show(SakuraGlade.locations.forestHome);
        SakuraGlade.ƒS.update(1);
        // await ƒS.Progress.delay(2);
        SakuraGlade.ƒS.Speech.show();
        // await ƒS.Progress.delay(1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "(<i>Whew, what a day!</i>)");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "(<i>Three lectures of Advanced Biology and no breaks... And I’ve got the presentation coming up soon too...<br>Ugh, I still need a good topic. Guess I’ll have to hit the books first when I get home.</i>)");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "(<i>Yeesh, I can’t wait to go to bed!</i>)");
        SakuraGlade.ƒS.Speech.hide();
        // await ƒS.Progress.delay(2);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "(<i>Ah... the cool spring air is so refreshing. Feels like I sat in stuffy lecture halls all day!<br>I used to hate having to walk home through the forest, but on a day like this it’s almost a blessing.</i>)");
        SakuraGlade.ƒS.Speech.hide();
        // await ƒS.Progress.delay(2);
        SakuraGlade.ƒS.Speech.setTickerDelays(100, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "(<i>... what’s that?</i>)");
        SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "(<i>There’s a faint light coming from the forest. Did someone get lost in the woods again?<br>I should go check it out.</i>)");
        SakuraGlade.ƒS.Speech.hide();
        // await ƒS.Progress.delay(2);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "(<i>Hmm... no one to be seen.</i>)");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "(<i>Just this...<br>tree stump that appears to be glowing?</i>)");
        SakuraGlade.ƒS.Speech.hide();
        let dialogue = {
            inspect: "Inspect the stump",
            leave: "Leave"
        };
        let dialogueElement = await SakuraGlade.ƒS.Menu.getInput(dialogue, "choicesCSSClass");
        switch (dialogueElement) {
            case dialogue.inspect:
                // continue path here
                console.log(dialogue.inspect);
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "(<i>I’ve never seen that before! Maybe I can use this in my presentation.<br>Let’s take a closer look...</i>)");
                SakuraGlade.ƒS.Speech.setTickerDelays(100, 5000);
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "(<i>...</i>)");
                SakuraGlade.ƒS.Speech.setTickerDelays(40, 5000);
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "(<i>It seems like little fluorescent mushrooms are growing on this part of the stump.<br>They smell sweet, almost floral...</i>)");
                SakuraGlade.ƒS.Speech.setTickerDelays(100, 5000);
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "(<i>...</i>)");
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "(<i>What’s going on?<br>... everything’s suddenly so blurry...</i>)");
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "(<i>...</i>)");
                await SakuraGlade.ƒS.Location.show(SakuraGlade.locations.blackout);
                await SakuraGlade.ƒS.Progress.delay(2);
                SakuraGlade.ƒS.Speech.clear();
                SakuraGlade.ƒS.Speech.hide();
                break;
            case dialogue.leave:
                // continue path here
                console.log(dialogue.leave);
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "(<i>No way I’m touching that. I better hurry back to the trail.</i>)");
                SakuraGlade.ƒS.Speech.setTickerDelays(100, 5000);
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "(<i>...</i>)");
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "(<i>What's that smell...? Everything’s suddenly so blurry...</i>)");
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "(<i>...</i>)");
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "(<i>... oh...</i>)");
                await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "(<i>...</i>)");
                await SakuraGlade.ƒS.Location.show(SakuraGlade.locations.blackout);
                await SakuraGlade.ƒS.Progress.delay(2);
                SakuraGlade.ƒS.Speech.clear();
                SakuraGlade.ƒS.Speech.hide();
                break;
        }
        SakuraGlade.ƒS.update(1);
    }
    SakuraGlade.Intro = Intro;
})(SakuraGlade || (SakuraGlade = {}));
//# sourceMappingURL=SakuraGlade.js.map