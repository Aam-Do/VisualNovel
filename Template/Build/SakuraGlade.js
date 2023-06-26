"use strict";
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    // Preparation for needed media -> put into definitions
    Template.transition = {
        puzzle: {
            duration: 1,
            alpha: "path",
            edge: 1
        }
    };
    Template.sound = {
        // themes
        music: "path",
        // SFX
        drop: "path"
    };
    Template.locations = {
        beachDay: {
            name: "Beach Day",
            background: "path"
        }
    };
    Template.characters = {
        narrator: {
            name: "path"
        },
        protagonist: {
            name: "path"
        },
        aisaka: {
            name: "Aisaka",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "path",
                happy: "path",
                upset: "path"
            }
        }
    };
    Template.dataForSave = {
        nameProtagonist: ""
    };
    window.addEventListener("load", start);
    function start(_event) {
        let scenes = [
            { scene: Template.Scene, name: "Scene" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        Template.dataForSave = Template.ƒS.Progress.setData(Template.dataForSave, uiElement);
        // start the sequence
        Template.ƒS.Progress.go(scenes);
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene() {
        console.log("FudgeStory Template Scene starting");
    }
    Template.Scene = Scene;
})(Template || (Template = {}));
//# sourceMappingURL=SakuraGlade.js.map