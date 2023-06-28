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
            background: "Images/Locations/ForestHome.png"
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
            { scene: SakuraGlade.Intro, name: "Intro Scene" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        SakuraGlade.dataForSave = SakuraGlade.ƒS.Progress.setData(SakuraGlade.dataForSave, uiElement);
        // start the sequence
        SakuraGlade.ƒS.Progress.go(scenes);
    }
})(SakuraGlade || (SakuraGlade = {}));
var SakuraGlade;
(function (SakuraGlade) {
    async function Intro() {
        console.log("Intro Scene starting");
        let text = {
            Nobu: {
                T0000: "Dieser Text ist über die text-Variable definiert. <p>Dies hingegen ist ein Paragraph.</p>",
                T0001: "",
                T0002: ""
            }
        };
        // cpms = characters per millisecond
        SakuraGlade.ƒS.Speech.setTickerDelays(80, 5000);
        // let signalDelay3: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(3)]);
        SakuraGlade.ƒS.Speech.hide();
        await SakuraGlade.ƒS.Location.show(SakuraGlade.locations.forestHome);
        await SakuraGlade.ƒS.Character.show(SakuraGlade.characters.nobu, SakuraGlade.characters.nobu.pose.neutral, SakuraGlade.ƒS.positions.bottomcenter);
        SakuraGlade.ƒS.update(1);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Hi, I'm Nobu!");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, text.Nobu.T0000);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Und wie heißt du?");
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.protagonist, "Hi ich bin der Protagonist aka der Spieler. " + "Ich heiße ", true, "Player");
        SakuraGlade.dataForSave.nameProtagonist = await SakuraGlade.ƒS.Speech.getInput();
        SakuraGlade.characters.protagonist.name = SakuraGlade.dataForSave.nameProtagonist;
        console.log(SakuraGlade.dataForSave.nameProtagonist);
        await SakuraGlade.ƒS.Speech.tell(SakuraGlade.characters.nobu, "Hi " + SakuraGlade.dataForSave.nameProtagonist + "!");
        SakuraGlade.ƒS.Speech.clear();
        SakuraGlade.ƒS.Speech.hide();
        SakuraGlade.ƒS.Character.hide(SakuraGlade.characters.nobu);
        SakuraGlade.ƒS.update(1);
    }
    SakuraGlade.Intro = Intro;
})(SakuraGlade || (SakuraGlade = {}));
//# sourceMappingURL=SakuraGlade.js.map