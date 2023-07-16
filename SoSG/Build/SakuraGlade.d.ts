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
        sakuraGladeDay: {
            name: string;
            background: string;
        };
        sakuraGladeEvening: {
            name: string;
            background: string;
        };
        sakuraGladeNight: {
            name: string;
            background: string;
        };
        innDay: {
            name: string;
            background: string;
        };
        innNight: {
            name: string;
            background: string;
        };
        nobuHome: {
            name: string;
            background: string;
        };
        sacredTree: {
            name: string;
            background: string;
        };
        temple: {
            name: string;
            background: string;
        };
        festival: {
            name: string;
            background: string;
        };
        bedroom: {
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
        amaya: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                neutral: string;
            };
        };
        nobu: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                neutral: string;
            };
        };
        kohana: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                neutral: string;
            };
        };
        fumiko: {
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
            handler: typeof hndItem;
        };
        idCard: {
            name: string;
            description: string;
            image: string;
            static: boolean;
            handler: typeof hndItem;
        };
        permit: {
            name: string;
            description: string;
            image: string;
            static: boolean;
            handler: typeof hndItem;
        };
        blackOoze: {
            name: string;
            description: string;
            image: string;
            static: boolean;
            handler: typeof hndItem;
        };
        brokenEarring: {
            name: string;
            description: string;
            image: string;
            static: boolean;
            handler: typeof hndItem;
        };
        medicalNotice: {
            name: string;
            description: string;
            image: string;
            static: boolean;
            handler: typeof hndItem;
        };
        replica: {
            name: string;
            description: string;
            image: string;
            static: boolean;
            handler: typeof hndItem;
        };
        moonBead: {
            name: string;
            description: string;
            image: string;
            static: boolean;
            handler: typeof hndItem;
        };
        crystalEarring: {
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
        investigationPoints: number;
        day1TalkedTo: any[];
    };
    export {};
}
declare namespace SakuraGlade {
    function day1Locations(): Promise<any>;
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
declare namespace SakuraGlade {
    function WelcomeSakuraGlade(): ƒS.SceneReturn;
}
declare namespace SakuraGlade {
    function Day1Amaya(): ƒS.SceneReturn;
}
declare namespace SakuraGlade {
    function Day1Fumiko(): ƒS.SceneReturn;
}
declare namespace SakuraGlade {
    function Day1Kohana(): ƒS.SceneReturn;
}
declare namespace SakuraGlade {
    function Day1Morning(): ƒS.SceneReturn;
}
declare namespace SakuraGlade {
    function Day1Nobu(): ƒS.SceneReturn;
}
declare namespace SakuraGlade {
    function Day2Morning(): ƒS.SceneReturn;
}
