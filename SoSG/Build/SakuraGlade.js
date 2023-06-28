"use strict";
var SakuraGlade;
(function (SakuraGlade) {
    SakuraGlade.ƒ = FudgeCore;
    SakuraGlade.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    // Preparation for needed media -> put into definitions
    SakuraGlade.transition = {
        puzzle: {
            duration: 1,
            alpha: "path",
            edge: 1
        }
    };
    SakuraGlade.sound = {
        // themes
        music: "path",
        // SFX
        drop: "path"
    };
    SakuraGlade.locations = {
        beachDay: {
            name: "Beach Day",
            background: "path"
        }
    };
    SakuraGlade.characters = {
        narrator: {
            name: "path"
        },
        protagonist: {
            name: "path"
        },
        aisaka: {
            name: "Aisaka",
            origin: SakuraGlade.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "path",
                happy: "path",
                upset: "path"
            }
        }
    };
    SakuraGlade.dataForSave = {
        nameProtagonist: ""
    };
    window.addEventListener("load", start);
    function start(_event) {
        let scenes = [
            { scene: SakuraGlade.Scene, name: "Scene" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        SakuraGlade.dataForSave = SakuraGlade.ƒS.Progress.setData(SakuraGlade.dataForSave, uiElement);
        // start the sequence
        SakuraGlade.ƒS.Progress.go(scenes);
    }
})(SakuraGlade || (SakuraGlade = {}));
var SakuraGlade;
(function (SakuraGlade) {
    async function Scene() {
        console.log("FudgeStory SakuraGlade Scene starting");
    }
    SakuraGlade.Scene = Scene;
})(SakuraGlade || (SakuraGlade = {}));
//# sourceMappingURL=SakuraGlade.js.map