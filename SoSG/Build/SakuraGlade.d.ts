declare namespace SakuraGlade {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    export let locations: {
        forestHome: {
            name: string;
            background: string;
        };
        fairieForest: {
            name: string;
            background: string;
        };
        blackout: {
            name: string;
            background: string;
        };
    };
    export let characters: {
        narrator: {
            name: string;
        };
        protagonist: {
            name: string;
        };
        nobu: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                neutral: string;
            };
        };
    };
    export let items: {
        phone: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        idCard: {
            name: string;
            description: string;
            image: string;
            static: boolean;
            handler: typeof hndItem;
        };
    };
    function hndItem(_event: CustomEvent): void;
    export let currentCharacter: ƒS.CharacterDefinition;
    export let dataForSave: {
        nameProtagonist: string;
        genderProtagonist: string;
        nobuPoints: number;
        amayaPoints: number;
        kohanaPoints: number;
        fumikoPoints: number;
    };
    export {};
}
declare namespace SakuraGlade {
    function FairieForest(): ƒS.SceneReturn;
}
declare namespace SakuraGlade {
    function Intro(): ƒS.SceneReturn;
}
declare namespace SakuraGlade {
    function Start(): ƒS.SceneReturn;
}
