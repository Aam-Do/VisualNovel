declare namespace SakuraGlade {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let transitions: {
        eye: {
            duration: number;
            alpha: string;
            edge: number;
        };
        normal: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    function middleToRight(): ƒS.AnimationDefinition;
    function leftToMiddle(): ƒS.AnimationDefinition;
    let sound: {
        forest: string;
        village: string;
        festival: string;
        nobu: string;
        kohana: string;
        amaya: string;
        fumiko: string;
        sad: string;
        item: string;
        crowd: string;
    };
    let locations: {
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
    let characters: {
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
                sad: string;
                smiling: string;
                surprised: string;
                thinking: string;
                upset: string;
            };
        };
        nobu: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                neutral: string;
                sad: string;
                smiling: string;
                surprised: string;
                thinking: string;
                laughing: string;
            };
        };
        kohana: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                neutral: string;
                sad: string;
                smiling: string;
                surprised: string;
                thinking: string;
            };
        };
        fumiko: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                neutral: string;
                sad: string;
                smiling: string;
                surprised: string;
                thinking: string;
                crying: string;
            };
        };
    };
    let items: {
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
    let extraItemInteraction: ƒS.ItemDefinition;
    let currentCharacter: ƒS.CharacterDefinition;
    let updatedItemDescriptions: {
        blackOoze: string;
        brokenEarring: string;
        medicalNotice: string;
        replica: string;
    };
    let dataForSave: {
        nameProtagonist: string;
        genderProtagonist: string;
        investigationPoints: number;
        day1TalkedTo: any[];
        day2TalkedTo: any[];
        itemsUpdated: any[];
        pointsReceived: any[];
        inventory: any[];
    };
    function hndItem(_event: CustomEvent): void;
}
declare namespace SakuraGlade {
    function day1Locations(): ƒS.SceneReturn;
    function day2Locations(): ƒS.SceneReturn;
    function day2Inventory(): Promise<void>;
}
declare namespace SakuraGlade {
    function Start(): ƒS.SceneReturn;
}
declare namespace SakuraGlade {
    function AmayaReactToItem(_item: ƒS.ItemDefinition): Promise<void>;
    function KohanaReactToItem(_item: ƒS.ItemDefinition): Promise<void>;
    function FumikoReactToItem(_item: ƒS.ItemDefinition): Promise<void>;
    function NobuReactToItem(_item: ƒS.ItemDefinition): Promise<void>;
}
declare namespace SakuraGlade {
    class Inventory extends ƒS.Inventory {
        static open(): Promise<string[]>;
        static close(): void;
        static remove(_item: ƒS.ItemDefinition): void;
    }
}
declare namespace SakuraGlade {
    function FairieForest(): ƒS.SceneReturn;
}
declare namespace SakuraGlade {
    function Intro(): ƒS.SceneReturn;
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
    function Day2Amaya(): ƒS.SceneReturn;
}
declare namespace SakuraGlade {
    function Day2Evening(): ƒS.SceneReturn;
}
declare namespace SakuraGlade {
    function Day2Fumiko(): ƒS.SceneReturn;
}
declare namespace SakuraGlade {
    function Day2Breakdown(): ƒS.SceneReturn;
}
declare namespace SakuraGlade {
    function Day2Kohana(): ƒS.SceneReturn;
}
declare namespace SakuraGlade {
    function Day2Morning(): ƒS.SceneReturn;
}
declare namespace SakuraGlade {
    function Day2Nobu(): ƒS.SceneReturn;
}
declare namespace SakuraGlade {
    function Day2SacredTree(): ƒS.SceneReturn;
}
declare namespace SakuraGlade {
    function Day3Morning(): ƒS.SceneReturn;
}
declare namespace SakuraGlade {
    function Day3Showdown(): ƒS.SceneReturn;
}
declare namespace SakuraGlade {
    function BadEnding(): ƒS.SceneReturn;
}
declare namespace SakuraGlade {
    function BittersweetEnding(): ƒS.SceneReturn;
}
declare namespace SakuraGlade {
    function GoodEnding(): ƒS.SceneReturn;
}
declare namespace SakuraGlade {
    function EndScene(): ƒS.SceneReturn;
}
