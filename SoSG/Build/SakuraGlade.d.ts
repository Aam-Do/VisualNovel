declare namespace SakuraGlade {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let locations: {
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
    let characters: {
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
    let items: {
        phone: {
            name: string;
            description: string;
        };
        idCard: {
            name: string;
            description: string;
        };
    };
    let dataForSave: {
        nameProtagonist: string;
        nobuPoints: number;
        amayaPoints: number;
        kohanaPoints: number;
        fumikoPoints: number;
    };
}
declare namespace SakuraGlade {
    function FairieForest(): ƒS.SceneReturn;
}
declare namespace SakuraGlade {
    function Intro(): ƒS.SceneReturn;
}
